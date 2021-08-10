import subprocess
from threading import Thread
import time
import sys
import logging
import tempfile
import os

import game_playing_module

class Pusher(Thread):
    def __init__(self, source, dest, proc, name):
        Thread.__init__(self)
        self.source = source
        self.dest = dest
        self.name = name
        self.proc = proc

    def run(self):
        while (self.proc.poll()==None) and\
              (not self.source.closed) and (not self.dest.closed):
            line = self.source.readline()
            logging.info('%s: %s' % (self.name, line[:-1]))
            self.dest.write(line)
            self.dest.flush()

def get_reader_writer():
    fd_read, fd_write = os.pipe()
    return os.fdopen(fd_read, 'r'), os.fdopen(fd_write, 'w')

def connect(exe):
    logging.basicConfig(level=logging.DEBUG,\
                        format='%(message)s',\
                        filename=LOG_FILE_NAME,
                        filemode='w')

    program_to_grader_reader, program_to_grader_writer =\
                              get_reader_writer()

    grader_to_program_reader, grader_to_program_writer =\
                              get_reader_writer()

    p1 = subprocess.Popen(exe, shell=False, stdin=subprocess.PIPE, stdout=subprocess.PIPE)        

    old_stdin = sys.stdin
    old_stdout = sys.stdout

    sys.stdin = program_to_grader_reader
    sys.stdout = grader_to_program_writer

    push1 = Pusher(p1.stdout, program_to_grader_writer, p1, '1')
    push2 = Pusher(grader_to_program_reader, p1.stdin, p1, '2')

    push1.start()
    push2.start()

    game_playing_module.play()

    sys.stdin = old_stdin
    sys.stdout = old_stdout

    fil = file(LOG_FILE, 'r')
    data = fil.read()
    fil.close()
    return data

if __name__=='__main__':
    if len(sys.argv) != 2:
        print('Usage: connect.py exe')
        print(sys.argv)
        exit()
    print( sys.argv)
    print( connect(sys.argv[1]))
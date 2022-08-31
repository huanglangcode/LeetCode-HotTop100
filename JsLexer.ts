class Lexer {
    private tokenText: string;
    private tokens: Array<SimpleToken>;
    private token: SimpleToken;

    //是否是字母
    private isAlpha(char: string): boolean {
        return char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z';
    }

    //是否是数字
    private isDigit(char: string): boolean {
        return char >= '0' && char <= '9';
    }

    //是否是空白字符
    private isBlank(char: string): boolean {
        return char == ' ' || char == '\t' || char == '\n';
    }
    /**
     * 有限状态机进入初始状态。
     * 这个初始状态其实并不做停留，它马上进入其他状态。
     * 开始解析的时候，进入初始状态；某个Token解析完毕，也进入初始状态，在这里把Token记下来，然后建立一个新的Token。
     * @param char
     * @return
     */
    private initToken(char: string): DfaState {
        if (this.tokenText.length > 0) {
            this.token.text = this.tokenText.toString();
            this.tokens.push(this.token);

            this.tokenText = '';
            this.token = new SimpleToken();
        }

        let newState = DfaState.Initial;
        if (this.isAlpha(char)) {              //第一个字符是字母
            if (char == 'i') {
                newState = DfaState.Id_int1;
            } else {
                newState = DfaState.Id; //进入Id状态
            }
            this.token.type = TokenType.Identifier;
            this.tokenText += char;
        } else if (this.isDigit(char)) {       //第一个字符是数字
            newState = DfaState.IntLiteral;
            this.token.type = TokenType.IntLiteral;
            this.tokenText += char;
        } else if (char == '>') {         //第一个字符是>
            newState = DfaState.GT;
            this.token.type = TokenType.GT;
            this.tokenText += char;
        } else if (char == '+') {
            newState = DfaState.Plus;
            this.token.type = TokenType.Plus;
            this.tokenText += char;
        } else if (char == '-') {
            newState = DfaState.Minus;
            this.token.type = TokenType.Minus;
            this.tokenText += char;
        } else if (char == '*') {
            newState = DfaState.Star;
            this.token.type = TokenType.Star;
            this.tokenText += char;
        } else if (char == '/') {
            newState = DfaState.Slash;
            this.token.type = TokenType.Slash;
            this.tokenText += char;
        } else if (char == ';') {
            newState = DfaState.SemiColon;
            this.token.type = TokenType.SemiColon;
            this.tokenText += char;
        } else if (char == '(') {
            newState = DfaState.LeftParen;
            this.token.type = TokenType.LeftParen;
            this.tokenText += char;
        } else if (char == ')') {
            newState = DfaState.RightParen;
            this.token.type = TokenType.RightParen;
            this.tokenText += char;
        } else if (char == '=') {
            newState = DfaState.Assignment;
            this.token.type = TokenType.Assignment;
            this.tokenText += char;
        } else {
            newState = DfaState.Initial; // skip all unknown patterns
        }
        return newState;
    }

    public tokenize(code: string): SimpleTokenReader {
        this.tokens = new ArrayList<Token>();
        CharArrayReader reader = new CharArrayReader(code.toCharArray());
        this.tokenText = '';
        this.token = new SimpleToken();
        int ich = 0;
        char ch = 0;
        let state = DfaState.Initial;
        try {
            while ((ich = reader.read()) != -1) {
                let ch = ich;
                switch (state) {
                    case Initial:
                        state = this.initToken(ch);          //重新确定后续状态
                        break;
                    case Id:
                        if (this.isAlpha(ch) || this.isDigit(ch)) {
                            this.tokenText += ch;       //保持标识符状态
                        } else {
                            state = this.initToken(ch);      //退出标识符状态，并保存Token
                        }
                        break;
                    case GT:
                        if (ch == '=') {
                            this.token.type = TokenType.GE;  //转换成GE
                            state = DfaState.GE;
                            this.tokenText += ch;
                        } else {
                            state = this.initToken(ch);      //退出GT状态，并保存Token
                        }
                        break;
                    case GE:
                    case Assignment:
                    case Plus:
                    case Minus:
                    case Star:
                    case Slash:
                    case SemiColon:
                    case LeftParen:
                    case RightParen:
                        state = this.initToken(ch);          //退出当前状态，并保存Token
                        break;
                    case IntLiteral:
                        if (this.isDigit(ch)) {
                            this.tokenText += ch;       //继续保持在数字字面量状态
                        } else {
                            state = this.initToken(ch);      //退出当前状态，并保存Token
                        }
                        break;
                    case Id_int1:
                        if (ch == 'n') {
                            state = DfaState.Id_int2;
                            this.tokenText += ch;
                        }
                        else if (this.isDigit(ch) || this.isAlpha(ch)) {
                            state = DfaState.Id;    //切换回Id状态
                            this.tokenText += ch;
                        }
                        else {
                            state = this.initToken(ch);
                        }
                        break;
                    case Id_int2:
                        if (ch == 't') {
                            state = DfaState.Id_int3;
                            this.tokenText += ch;
                        }
                        else if (this.isDigit(ch) || this.isAlpha(ch)) {
                            state = DfaState.Id;    //切换回id状态
                            this.tokenText += ch;
                        }
                        else {
                            state = this.initToken(ch);
                        }
                        break;
                    case Id_int3:
                        if (this.isBlank(ch)) {
                            this.token.type = TokenType.Int;
                            state = this.initToken(ch);
                        }
                        else {
                            state = DfaState.Id;    //切换回Id状态
                            this.tokenText += ch;
                        }
                        break;
                    default:

                }

            }
            // 把最后一个token送进去
            if (this.tokenText.length() > 0) {
                this.initToken(ch);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }

        return new SimpleTokenReader(this.tokens);
    }
}

enum TokenType {
    Plus,   // +
    Minus,  // -
    Star,   // *
    Slash,  // /

    GE,     // >=
    GT,     // >
    EQ,     // ==
    LE,     // <=
    LT,     // <

    SemiColon, // ;
    LeftParen, // (
    RightParen,// )

    Assignment,// =

    If,
    Else,

    Int,

    Identifier,     //标识符

    IntLiteral,     //整型字面量
    StringLiteral   //字符串字面量
}


/**
  * 有限状态机的各种状态。
  */
enum DfaState {
    Initial,

    If, Id_if1, Id_if2, Else, Id_else1, Id_else2, Id_else3, Id_else4, Int, Id_int1, Id_int2, Id_int3, Id, GT, GE,

    Assignment,

    Plus, Minus, Star, Slash,

    SemiColon,
    LeftParen,
    RightParen,

    IntLiteral
}


interface Token {

    /**
     * Token的类型
     * @return
     */
    getType: () => TokenType;

    /**
     * Token的文本值
     * @return
     */
    getText: () => string;

}
/**
 * Token的一个简单实现。只有类型和文本值两个属性。
 */
class SimpleToken implements Token {
    //Token类型
    public type: TokenType = null;
    //文本值
    public text: string = null;

    public getType() {
        return this.type;
    }

    public getText() {
        return this.text;
    }
}
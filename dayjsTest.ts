import dayjs from "dayjs";

var num = 0.99999

var res = dayjs(new Date()).add(num, "years").toDate();
console.log('res :>> ', res);
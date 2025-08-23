const today = new Date();

const year = today.getFullYear();//年を取得する
const month =today.getMonth() + 1; //月を取得する、1月が０からスタートなので１を足す
const day = today.getDate(); //日を取得する

console.log(year + "年" + month + "月" + day + "日") ;



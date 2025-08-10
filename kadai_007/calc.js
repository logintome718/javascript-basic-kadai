//変数numに任意の値を代入する
let num = 15;

//変数numの値が3と５の倍数かどうかをチェック
if (num % 3 === 0 && num % 5 === 0) {
    console.log("3と5の倍数です");
}  else if (num % 3 === 0) { // 3の倍数かどうかをチェック
    console.log("3の倍数です");
}  else if (num % 5 === 0) { // 5の倍数かどうかをチェック
    console.log("5の倍数です");
} else {
    console.log(num); // 3の倍数でも5の倍数でもない場合
}

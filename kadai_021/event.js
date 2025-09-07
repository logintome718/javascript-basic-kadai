// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
// btnというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// クリックした時にイベント処理を実行する
btn.addEventListener('click', () => {
// 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
setTimeout(() => {
text.textContent = 'ボタンをクリックしました';
},2000);

});

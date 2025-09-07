// btnというidというHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// textというidというHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// HTML要素がクリックされた時にイベント処理を実行する
btn.addEventListener('click', () => {

  // テキストを置き換える
  text.textContent = 'ボタンをクリックしました';
});
////////////////////////////////////////////////////////
// 1. イベントハンドラの登録

let b1 = document.querySelector('button#blue');
b1.addEventListener('click', changeH1ColorRed);

//// 以下，練習5-2 でコードを追加

// button#random 要素を検索して変数 b2 に代入
let b2 = document.querySelector('button#random');

// b2 のクリックイベントに対するイベントハンドラ changeBackgroundColorRandom を登録
b2.addEventListener('click', changeBackgroundColorRandom);

////////////////////////////////////////////////////////
// 2. イベントハンドラ（イベントが発生したら実行する関数）

function changeH1ColorRed() {

	let h1 = document.querySelector('h1');


	h1.style.color = 'blue';
}

function changeBackgroundColorRandom() {
	let r = Math.floor(Math.random() * 256);
	let g = Math.floor(Math.random() * 256);
	let b = Math.floor(Math.random() * 256);
	let color = 'rgb(' + r + ',' + g + ',' + b + ')';

	let body = document.querySelector('body');
	body.style.backgroundColor = color;
}


let kotae = Math.floor(Math.random() * 10) + 1
console.log('答え（デバッグ用）: ' + kotae)
let kaisu = 0
const form = document.getElementById('guessForm')
const input = document.getElementById('guessInput')
const kaisuElement = document.getElementById('kaisu')
const answerElement = document.getElementById('answer')
const resultElement = document.getElementById('result')


form.addEventListener('submit', function(event) {
  event.preventDefault();
  hantei();
})
function hantei() {
  if (kaisu >= 4) {
    resultElement.textContent = `答えは ${kotae} でした。すでにゲームは終わっています。`
    return;
  }
  let yoso = parseInt(input.value, 10)
  kaisu++
  kaisuElement.textContent = kaisu
  answerElement.textContent = yoso
if (yoso === kotae) {
    resultElement.textContent = "正解です。おめでとう!"
  } else if (kaisu === 3) {
    resultElement.textContent = `まちがい。残念でした答えは ${kotae} です。 `
  } else if (yoso < kotae) {
    resultElement.textContent = "まちがい。答えはもっと大きいですよ。"
  } else {
    resultElement.textContent = "まちがい。答えはもっと小さいですよ。"
  }

  input.value = ''
  input.focus()
}

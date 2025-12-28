const questions = [
 { text: "ずっと真夜中でいいのに。ACAねの飼い猫の名前は？", choices: ["タマ", "うめぼし", "しょうがストリングス", "イエローキャッツアイ"], correct: 2 },
 { text: "なとりの曲はどんな特徴がある？", choices: ["中毒性がある", "バラード中心", "元気なポップ曲", "ジャズっぽい"], correct: 0 },
 { text: "宇多田ヒカルの曲で母親への想いを歌った代表曲は何？", choices: ["Automatic", "Can You Keep A Secret?", "Traveling", "初恋"], correct: 3 },
 { text: "ちゃんみなと結婚したラッパーは誰？", choices: ["SKY-HI", "ASH ISLAND", "LEX", "R-指定"], correct: 1 },
 { text: "椎名林檎の特徴的な表現の1つは？", choices: ["単純な歌詞", "ユーモアや皮肉", "ダンス", "早口のラップ"], correct: 1 }
];
let index = 0;
let score = 0;
const question = document.getElementById("question");
const choices = document.getElementById("choices");
const result = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");
function nextQuestion() {
 index++;
 if (index < questions.length) {
   showQuestion();
 } else {
   question.textContent = "クイズ終了！";
   choices.innerHTML = "";
   if (score === questions.length) {
     result.textContent = score + "問正解！あなたは推しマスターです！";
   } else if (score >= 2 && score <= 3) {
     result.textContent = score + "問正解。もう少し推しを勉強しよう！";
   } else {
     result.textContent = score + "問正解。うーん、もう一度図鑑を見てみよう";
   }
 }
}
function nextQuestion() {
  index++;
  if (index < questions.length) {
    showQuestion();
  } else {
    document.getElementById("nextBtn").style.display = "none";
    question.textContent = "クイズ終了！";
    choices.innerHTML = "";
    if (score >= 4) {
      result.textContent = score + "問正解！あなたは推しマスターです！";
    } else if (score <= 2) {
      result.textContent = score + "問正解。うーん、もう一度図鑑を見てみよう！";
    } else if (score >= 3) {
      result.textContent = score + "問正解。もう少し推しを勉強しよう！";
    }
  }
}
function restart() {
 index = 0;
 score = 0;
 showQuestion();
}
nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", restart);
showQuestion();
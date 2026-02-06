const questions = [
  {
    q: "When did we start talking to each other?",
    a: "aug 17"
  },
  {
    q: "What is the thing you said that made my tummy have butterflies?",
    a: "white teeth"
  },
  {
    q: "What's my full name, with my nickname?",
    a: "jhesdy lawrence dimaunahan abangan, ambru"
  }
];

let current = 0;
let lives = 5;

const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const livesEl = document.getElementById("lives");
const submitBtn = document.getElementById("submitBtn");

questionEl.textContent = questions[current].q;

submitBtn.addEventListener("click", checkAnswer);

function checkAnswer() {
  const userAnswer = answerEl.value.trim().toLowerCase();

  if (userAnswer === questions[current].a) {
    current++;
    answerEl.value = "";

    if (current < questions.length) {
      questionEl.textContent = questions[current].q;
    } else {
      showSuccess();
    }
  } else {
    lives--;
    livesEl.textContent = "❤️".repeat(lives);

    if (lives <= 0) {
      questionEl.textContent = "💔 Game over 💔";
      answerEl.disabled = true;
      submitBtn.disabled = true;
    }
  }
}

function showSuccess() {
  questionEl.innerHTML = "🎉 You got everything right! 🎉<br><br>";
  answerEl.style.display = "none";
  submitBtn.style.display = "none";

  const btn = document.createElement("button");
  btn.textContent = "Click here 💌";
  btn.onclick = () => {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("letter").style.display = "block";
  };

  questionEl.appendChild(btn);
}

/* floating hearts */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.textContent = "💗";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.bottom = "0px";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 400);


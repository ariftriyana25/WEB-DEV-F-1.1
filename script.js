// elemen-elemen DOM yang digunakan dalam kuis
const configContainer = document.querySelector(".config-container");
const quizContainer = document.querySelector(".quiz-container");
const answerOptions = document.querySelector(".answer-options");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const questionStatus = document.querySelector(".question-status");
const timerDisplay = document.querySelector(".time-duration");
const resultContainer = document.querySelector(".result-container");

// batas waktu kuis dalam detik
const QUIZ_TIME_LIMIT = 15;
let currentTime = QUIZ_TIME_LIMIT;
let timer = null;
let quizCategory = "programming";
let numberOfQestions = 5;
let currentQuestion = null;
const questionsIndexHistory = [];
let correctAnswerCount = 0;

// tampilkan hasil kuis dan sembunyikan kontainer kuis
const showQuizResult = () => {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";

    const resultText = `Kamu menjawab <b>${correctAnswerCount}</b> dari <b>${numberOfQestions}</b> pertanyaan dengan benar. Usaha yang luar biasa!`;
    document.querySelector(".result-message").innerHTML = resultText;
}

// bersihkan dan reset timer
const resetTimer = () => {
    clearInterval(timer);
    currentTime = QUIZ_TIME_LIMIT;
    timerDisplay.textContent = `${currentTime}s`;
}

// inisialisasi dan mulai timer untuk pertanyaan saat ini
const startTimer = () => {
    timer = setInterval(() => {
        currentTime--;
        timerDisplay.textContent = `${currentTime}s`;

        if(currentTime <= 0){
            clearInterval(timer);
            highlightCorrectAnswer();
            nextQuestionBtn.style.visibility = "visible";
            quizContainer.querySelector(".quiz-timer").style.background = "#c31402";

            // nonaktifkan semua opsi jawaban setelah satu opsi dipilih
            answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");
        }
    }, 1000);
}

// ambil pertanyaan acak berdasarkan kategori yang dipilih
const getRandomQuestion = () => {
    const categoryQuestions = questions.find(cat => cat.category.toLowerCase() === quizCategory.toLowerCase
    ()).questions || [];

    // tampilkan hasil jika semua pertanyaan telah digunakan
    if(questionsIndexHistory.length >= Math.min(categoryQuestions.length, numberOfQestions)){
        return showQuizResult();
    }

    // filter pertanyaan yang sudah ditanyakan dan pilih satu secara acak
    const availableQuestions= categoryQuestions.filter((_, index) => !questionsIndexHistory.includes(index));
    const randomQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];

    questionsIndexHistory.push(categoryQuestions.indexOf(randomQuestion));
    return randomQuestion;
}

// sorot opsi jawaban yang benar dan tambahkan ikon
const highlightCorrectAnswer = () => {
    const correctOption = answerOptions.querySelectorAll(".answer-option")[currentQuestion.correctAnswer];
    correctOption.classList.add("correct");
    const iconHTML = `<span class="material-symbols-rounded">check_circle</span>`;
    correctOption.insertAdjacentHTML("beforeend", iconHTML);
}

// tangani pemilihan jawaban pengguna
const handleAnswer = (option, answerIndex) => {
    clearInterval(timer);

    const isCorrect = currentQuestion.correctAnswer === answerIndex;
    option.classList.add(isCorrect ? 'correct' : 'incorrect');
    !isCorrect ? highlightCorrectAnswer() : correctAnswerCount++;

    // sisipkan ikon berdasarkan kebenaran
    const iconHTML = `<span class="material-symbols-rounded">${isCorrect ? 'check_circle' : 'cancel'}</span>`;
    option.insertAdjacentHTML("beforeend", iconHTML);

    // nonaktifkan semua opsi jawaban setelah satu opsi dipilih
    answerOptions.querySelectorAll(".answer-option").forEach(option => option.style.pointerEvents = "none");

    nextQuestionBtn.style.visibility = "visible";
}

// render pertanyaan saat ini dan opsinya dalam kuis
const renderQuestion = () => {
    currentQuestion = getRandomQuestion();
    if(!currentQuestion) return;

    resetTimer();
    startTimer();

    // perbarui UI
    answerOptions.innerHTML = "";
    nextQuestionBtn.style.visibility = "hidden";
    quizContainer.querySelector(".quiz-timer").style.background = "#32313C";
    document.querySelector(".question-text").textContent = currentQuestion.question;
    questionStatus.innerHTML = `<b>${questionsIndexHistory.length}</b> of <b>${numberOfQestions}</b> questions`;

    // buat elemen <li> opsi, tambahkan, dan tambahkan event listener klik
    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.classList.add("answer-option");
        li.textContent = option;
        answerOptions.appendChild(li);
        li.addEventListener("click", () => handleAnswer(li, index));
    });
}

// mulai kuis dan render pertanyaan acak
const startQuiz = () =>{
    configContainer.style.display = "none";
    quizContainer.style.display = "block";

    // perbarui kategori kuis dan jumlah pertanyaan
    quizCategory = configContainer.querySelector(".category-option.active").textContent;
    numberOfQestions = parseInt(configContainer.querySelector(".question-option.active").textContent);

    renderQuestion();
}

// sorot opsi yang dipilih saat diklik - kategori atau jumlah pertanyaan
document.querySelectorAll(".category-option, .question-option").forEach(option => {
    option.addEventListener("click", () => {
        option.parentNode.querySelector(".active").classList.remove("active");
        option.classList.add("active");
    });
});
// reset kuis dan kembali ke kontainer konfigurasi
const resetQuiz = () => {
    resetTimer();
    correctAnswerCount = 0;
    questionsIndexHistory.length = 0;

    configContainer.style.display = "block";
    resultContainer.style.display = "none";
}

nextQuestionBtn.addEventListener("click", renderQuestion);
document.querySelector(".try-again-btn").addEventListener("click", resetQuiz);
document.querySelector(".start-quiz-btn").addEventListener("click", startQuiz);
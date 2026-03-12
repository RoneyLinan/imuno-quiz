const cardsData = [
    {
        q: "Durante o recrutamento de leucócitos, qual é a principal diferença funcional entre as Selectinas e as Integrinas?",
        options: [
            "A) Selectinas fazem a diapedese; Integrinas fazem a rolagem.",
            "B) Selectinas criam ligações fracas (rolagem); Integrinas criam ligações fortes (adesão estável).",
            "C) Ambas destroem o patógeno ainda dentro do vaso sanguíneo.",
            "D) Selectinas são enzimas tóxicas; Integrinas são citocinas de alarme."
        ],
        correct: 1, 
        explanation: "As selectinas funcionam como um 'velcro' fraco que apenas desacelera a célula (rolagem). Já as integrinas, quando ativadas pelas quimiocinas, formam uma âncora rígida para a adesão estável (freio total)."
    },
    {
        q: "A Opsonização é um processo bioquímico fundamental que facilita a fagocitose. O que ocorre nesta etapa?",
        options: [
            "A) O leucócito altera seu citoesqueleto para se espremer pelo endotélio.",
            "B) Moléculas (como anticorpos) 'carimbam' o patógeno, tornando-o mais fácil de ser agarrado pelo fagócito.",
            "C) O lisossomo explode prematuramente dentro do macrófago.",
            "D) Ocorre a formação do gradiente de concentração de citocinas."
        ],
        correct: 1,
        explanation: "A opsonização age como um 'tempero'. Proteínas do sistema imune revestem a bactéria, permitindo que os receptores do macrófago a agarrem com muito mais facilidade e firmeza antes de engoli-la."
    },
    {
        q: "Dentro do fagolisossomo, ocorre um evento letal para as bactérias chamado 'Explosão Respiratória' (Respiratory Burst). Qual é o resultado desse processo?",
        options: [
            "A) Produção rápida de Espécies Reativas de Oxigênio (ROS), como o peróxido de hidrogênio, para oxidar e derreter o invasor.",
            "B) O macrófago para de respirar para tentar sufocar a bactéria.",
            "C) Liberação massiva de gás carbônico (CO2) diretamente no sangue.",
            "D) Produção de uma espessa camada de muco celular para prender o patógeno."
        ],
        correct: 0,
        explanation: "A explosão respiratória é uma reação bioquímica violenta. A célula consome muito oxigênio de repente para fabricar radicais livres e 'água oxigenada' (peróxido de hidrogênio), que são altamente tóxicos para a bactéria."
    },
    {
        q: "O que acontece com os restos orgânicos da partícula após ela ser completamente digerida e destruída dentro do fagolisossomo?",
        options: [
            "A) Ficam acumulados para sempre dentro do núcleo da célula de defesa.",
            "B) São obrigatoriamente transformados em novas hemácias pela medula.",
            "C) Os restos úteis são reciclados pela célula e o 'lixo' é expulso para fora (exocitose).",
            "D) Transformam-se instantaneamente em moléculas de DNA."
        ],
        correct: 2,
        explanation: "A célula é extremamente eficiente. Após a digestão, o fagócito absorve o que for útil (como aminoácidos) e expele os restos mortais (corpos residuais) para fora da célula através do processo de exocitose."
    },
    // --- RECRUTAMENTO DE LEUCÓCITOS ---
    {
        q: "Qual o papel inicial do macrófago residente ao encontrar o patógeno no tecido?",
        options: [
            "A) Produzir anticorpos específicos.",
            "B) Fagocitar o invasor e liberar Citocinas (TNF e IL-1).",
            "C) Realizar a diapedese para o sangue.",
            "D) Destruir o endotélio imediatamente."
        ],
        correct: 1,
        explanation: "O macrófago é a sentinela. Ele fagocita o patógeno e libera TNF e IL-1 para avisar os vasos sanguíneos próximos da invasão."
    },
    {
        q: "Qual é a função das Quimiocinas expostas no endotélio durante a rolagem?",
        options: [
            "A) Matar a bactéria no vaso sanguíneo.",
            "B) Fechar os espaços entre as células.",
            "C) Ativar as integrinas do leucócito para ALTA afinidade.",
            "D) Desacelerar o leucócito por ligação fraca."
        ],
        correct: 2,
        explanation: "As quimiocinas ativam as integrinas do leucócito, permitindo que ele mude sua estrutura para se agarrar firmemente ao vaso (adesão estável)."
    },
    // --- FAGOCITOSE ---
    {
        q: "Após a captura de partículas na fagocitose, a vesícula formada no interior da célula chama-se:",
        options: [
            "A) Pinossomo.",
            "B) Lisossomo.",
            "C) Fagossomo.",
            "D) Vacúolo digestório."
        ],
        correct: 2,
        explanation: "O fagossomo é a 'cela de prisão' formada quando a membrana envolve a partícula sólida."
    },
    {
        q: "O englobamento de partículas ocorre graças a prolongamentos do citoplasma chamados de:",
        options: [
            "A) Cílios.",
            "B) Flagelos.",
            "C) Pseudópodes.",
            "D) Fímbrias."
        ],
        correct: 2,
        explanation: "Pseudópodes são 'falsos pés' que a célula estende para abraçar o que será fagocitado."
    },
    {
        q: "Qual organela atua na digestão da partícula englobada no processo de fagocitose?",
        options: [
            "A) Mitocôndria.",
            "B) Ribossomo.",
            "C) Retículo endoplasmático.",
            "D) Lisossomo."
        ],
        correct: 3,
        explanation: "O lisossomo contém as enzimas digestivas que serão despejadas no fagossomo para destruir o patógeno."
    }
];

let currentCard = 0;
let score = 0; // Contador de acertos para o ranking
let timeLeft;
let timerInterval;
const totalTime = 20; // 20 segundos por questão

// 3. Funções de Sistema (Embaralhamento e Tempo)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = totalTime;
    const timerBar = document.getElementById('timerBar');
    
    timerInterval = setInterval(() => {
        timeLeft -= 0.1;
        const percentage = (timeLeft / totalTime) * 100;
        timerBar.style.width = percentage + "%";

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timeOut();
        }
    }, 100);
}

function timeOut() {
    const flashcard = document.getElementById('flashcard');
    document.getElementById('feedbackTitle').innerText = "⏳ Tempo Esgotado!";
    document.getElementById('feedbackTitle').style.color = "#f97316";
    document.getElementById('explanationText').innerText = "Você não respondeu a tempo! Tente ser mais rápido na próxima.";
    flashcard.classList.add('is-flipped');
    document.getElementById('btnNext').disabled = false;
}

// 4. Lógica do Quiz
function loadCard() {
    // Esconde a tela de resultado caso esteja reiniciando
    document.getElementById('resultScreen').style.display = 'none';
    document.getElementById('flashcard').style.display = 'block';

    const flashcard = document.getElementById('flashcard');
    flashcard.classList.remove('is-flipped');
    
    const data = cardsData[currentCard];
    document.getElementById('counterDisplay').innerText = `Pergunta ${currentCard + 1} de ${cardsData.length}`;
    document.getElementById('questionText').innerText = data.q;
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    data.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(btn);
    });

    document.getElementById('btnPrev').disabled = currentCard === 0;
    document.getElementById('btnNext').disabled = true;
    
    startTimer();
}

function checkAnswer(index) {
    clearInterval(timerInterval); // Para o tempo
    
    const data = cardsData[currentCard];
    const flashcard = document.getElementById('flashcard');
    const feedbackTitle = document.getElementById('feedbackTitle');
    
    if (index === data.correct) {
        score++; // Soma ponto para o Ranking Final
        feedbackTitle.innerText = "✅ Correto!";
        feedbackTitle.style.color = "#10b981";
    } else {
        feedbackTitle.innerText = "❌ Errado!";
        feedbackTitle.style.color = "#ef4444";
    }
    
    document.getElementById('explanationText').innerText = data.explanation;
    flashcard.classList.add('is-flipped');
    document.getElementById('btnNext').disabled = false;
}

function nextCard() {
    if (currentCard < cardsData.length - 1) {
        currentCard++;
        loadCard();
    } else {
        showResults(); // Se for a última, mostra as medalhas
    }
}

function prevCard() {
    if (currentCard > 0) {
        currentCard--;
        loadCard();
    }
}

// 5. TELA FINAL COM RANKING DE MEDALHAS
function showResults() {
    clearInterval(timerInterval);
    document.getElementById('flashcard').style.display = 'none';
    document.getElementById('resultScreen').style.display = 'flex';
    
    const finalScoreText = document.getElementById('finalScoreText');
    const finalScoreTitle = document.getElementById('finalScoreTitle');
    const porcentagem = Math.round((score / cardsData.length) * 100);
    
    let medalha, patente, cor;

    if (porcentagem === 100) { 
        medalha = "🏆"; patente = "MESTRE DA IMUNO"; cor = "#fbbf24"; 
    } else if (porcentagem >= 75) { 
        medalha = "🥇"; patente = "ESPECIALISTA"; cor = "#34d399"; 
    } else if (porcentagem >= 50) { 
        medalha = "🥈"; patente = "SENTINELA"; cor = "#60a5fa"; 
    } else { 
        medalha = "🥉"; patente = "RECRUTA"; cor = "#f87171"; 
    }

    finalScoreTitle.innerText = `${medalha} ${patente} ${medalha}`;
    finalScoreTitle.style.color = cor;
    finalScoreText.innerHTML = `Você acertou <b>${score}</b> de <b>${cardsData.length}</b>!<br>Seu desempenho: <b>${porcentagem}%</b>`;
}

function restartQuiz() {
    currentCard = 0;
    score = 0;
    shuffleArray(cardsData);
    loadCard();
}

// Iniciar o jogo
shuffleArray(cardsData);
loadCard();
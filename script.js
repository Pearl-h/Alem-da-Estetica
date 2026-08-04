const questions = [
{
    id: "faixa etaria",
    question: "1. Qual a sua faixa etária de idade?",
    options: [
        { text: "Até 18 anos", points: 0 },
        { text: "19 a 25 anos", points: 0 },
        { text: "26 a 35 anos", points: 0 },
        { text: "36 a 40 anos", points: 0 },
        { text: "Mais de 40 anos", points: 0 }
    ]
},

{
    id: "genero",
    question: "2. Qual o seu gênero?",
    options: [
        { text: "Masculino", points: 0 },
        { text: "Feminino", points: 0 },
        { text: "Outro", points: 0 },
        { text: "Prefiro não responder", points: 0 }
    ]
},

{
    question: "3. Você compara sua aparência com a de pessoas que vê nas redes sociais?",
    options: [
        { text: "Raramente", points: 1 },
        { text: "Às vezes", points: 2 },
        { text: "Frequentemente", points: 3 },
        { text: "Quase sempre", points: 4 },
        { text: "O tempo todo", points: 5 }
    ]
},

{
    question: "4. Você já deixou de participar de algum evento por não se sentir bonito(a) o suficiente?",
    options: [
        { text: "Raramente", points: 1 },
        { text: "Às vezes", points: 2 },
        { text: "Frequentemente", points: 3 },
        { text: "Quase sempre", points: 4 },
        { text: "O tempo todo", points: 5 }
    ]
},

{
    question: "5. Sua autoestima muda dependendo de como você acha que está fisicamente em determinado dia?",
    options: [
        { text: "Raramente", points: 1 },
        { text: "Às vezes", points: 2 },
        { text: "Frequentemente", points: 3 },
        { text: "Quase sempre", points: 4 },
        { text: "O tempo todo", points: 5 }
    ]
},

{
    question: "6. Você sente necessidade de seguir tendências de moda para se sentir aceito(a)?",
    options: [
        { text: "Raramente", points: 1 },
        { text: "Às vezes", points: 2 },
        { text: "Frequentemente", points: 3 },
        { text: "Quase sempre", points: 4 },
        { text: "O tempo todo", points: 5 }
    ]
},

{
    question: "7. Comentários sobre sua aparência afetam seu humor por muito tempo?",
    options: [
        { text: "Raramente", points: 1 },
        { text: "Às vezes", points: 2 },
        { text: "Frequentemente", points: 3 },
        { text: "Quase sempre", points: 4 },
        { text: "O tempo todo", points: 5 }
    ]
},

{
    question: "8. Você já sentiu vontade de mudar algo no seu corpo após ver influenciadores, celebridades ou modelos?",
    options: [
        { text: "Raramente", points: 1 },
        { text: "Às vezes", points: 2 },
        { text: "Frequentemente", points: 3 },
        { text: "Quase sempre", points: 4 },
        { text: "O tempo todo", points: 5 }
    ]
},

{
    question: "9. Você passa muito tempo pensando em melhorar sua aparência física?",
    options: [
        { text: "Raramente", points: 1 },
        { text: "Às vezes", points: 2 },
        { text: "Frequentemente", points: 3 },
        { text: "Quase sempre", points: 4 },
        { text: "O tempo todo", points: 5 }
    ]
},

{
    question: "10. Você se sente pressionado(a) a manter um determinado padrão de corpo, cabelo, pele ou estilo?",
    options: [
        { text: "Raramente", points: 1 },
        { text: "Às vezes", points: 2 },
        { text: "Frequentemente", points: 3 },
        { text: "Quase sempre", points: 4 },
        { text: "O tempo todo", points: 5 }
    ]
},

{
    question: "11. Você já comprou roupas, cosméticos ou produtos apenas para se aproximar de um padrão de beleza?",
    options: [
        { text: "Raramente", points: 1 },
        { text: "Às vezes", points: 2 },
        { text: "Frequentemente", points: 3 },
        { text: "Quase sempre", points: 4 },
        { text: "O tempo todo", points: 5 }
    ]
},

{
    question: "12. Você sente desconforto ao postar fotos suas sem filtros ou edição?",
    options: [
        { text: "Raramente", points: 1 },
        { text: "Às vezes", points: 2 },
        { text: "Frequentemente", points: 3 },
        { text: "Quase sempre", points: 4 },
        { text: "O tempo todo", points: 5 }
    ]
},

{
    question: "13. Você costuma observar mais suas imperfeições do que suas qualidades físicas?",
    options: [
        { text: "Raramente", points: 1 },
        { text: "Às vezes", points: 2 },
        { text: "Frequentemente", points: 3 },
        { text: "Quase sempre", points: 4 },
        { text: "O tempo todo", points: 5 }
    ]
},

{
    question: "14. Você já mudou sua alimentação ou rotina apenas para alcançar um padrão estético?",
    options: [
        { text: "Raramente", points: 1 },
        { text: "Às vezes", points: 2 },
        { text: "Frequentemente", points: 3 },
        { text: "Quase sempre", points: 4 },
        { text: "O tempo todo", points: 5 }
    ]
},

{
    question: "15. Você acredita que pessoas consideradas mais bonitas recebem mais oportunidades?",
    options: [
        { text: "Raramente", points: 1 },
        { text: "Às vezes", points: 2 },
        { text: "Frequentemente", points: 3 },
        { text: "Quase sempre", points: 4 },
        { text: "O tempo todo", points: 5 }
    ]
},

{
    question: "16. Você sente necessidade de aprovação dos outros sobre sua aparência?",
    options: [
        { text: "Raramente", points: 1 },
        { text: "Às vezes", points: 2 },
        { text: "Frequentemente", points: 3 },
        { text: "Quase sempre", points: 4 },
        { text: "O tempo todo", points: 5 }
    ]
},

{
    question: "17. Quando vê alguém considerado muito bonito(a), você se compara automaticamente a essa pessoa?",
    options: [
        { text: "Raramente", points: 1 },
        { text: "Às vezes", points: 2 },
        { text: "Frequentemente", points: 3 },
        { text: "Quase sempre", points: 4 },
        { text: "O tempo todo", points: 5 }
    ]
},

{
    question: "18. Você acredita que seria mais feliz se tivesse uma aparência diferente?",
    options: [
        { text: "Raramente", points: 1 },
        { text: "Às vezes", points: 2 },
        { text: "Frequentemente", points: 3 },
        { text: "Quase sempre", points: 4 },
        { text: "O tempo todo", points: 5 }
    ]
},

{
    question: "19. Você sente que padrões de beleza influenciam suas escolhas e decisões no dia a dia?",
    options: [
        { text: "Raramente", points: 1 },
        { text: "Às vezes", points: 2 },
        { text: "Frequentemente", points: 3 },
        { text: "Quase sempre", points: 4 },
        { text: "O tempo todo", points: 5 }
    ]
},

{
    question: "20. Você acredita que a aparência influencia diretamente o valor de uma pessoa?",
    options: [
        { text: "Raramente", points: 1 },
        { text: "Às vezes", points: 2 },
        { text: "Frequentemente", points: 3 },
        { text: "Quase sempre", points: 4 },
        { text: "O tempo todo", points: 5 }
    ]
},
]

let respostasSalvas = {};
function aoSelecionarOpcao(idDaQuestao, textoDaOpcao) {
    respostasSalvas[idDaQuestao] = textoDaOpcao; 
}

function enviarDadosParaOBanco() {
    fetch('URL_DA_SUA_API_OU_BACKEND/respostas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(respostasSalvas) // Transforma o objeto em texto JSON
    })
    .then(response => response.json())
    .then(dados => {
        console.log('Dados salvos com sucesso:', dados);
        alert('Quiz finalizado e respostas salvas!');
    })
    .catch(erro => {
        console.error('Erro ao salvar no banco:', erro);
    });
}

let currentQuestionIndex = 0;
let totalScore = 0;

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const startButton = document.getElementById("start-btn");

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");
const quizContainer = document.getElementById("quiz");

submitButton.style.display = "none";

function startQuiz() {
    startScreen.style.display = "none";
    quizScreen.style.display = "block";
    loadQuestion();
}

startButton.addEventListener("click", startQuiz);

function loadQuestion() {
    optionsElement.innerHTML = "";

    if (currentQuestionIndex >= questions.length) {
        showResult();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");

        button.innerText = option.text;
        button.classList.add("option-btn");

        button.addEventListener("click", () => {
            selectOption(option.points);
        });

        optionsElement.appendChild(button);
    });
}

function selectOption(points) {
    totalScore += points;
    currentQuestionIndex++;
    loadQuestion();
}

function showResult() {

    let finalResult = "";

    if (totalScore <= 35) {
        finalResult = "Você parece construir sua autoestima menos a partir de padrões externos e mais a partir de quem você é. Continue lembrando que a beleza não existe em um único formato — sua individualidade também tem valor.";
    } 
    else if (totalScore <= 54) {
        finalResult = "Você demonstra algum impacto dos padrões de beleza no seu dia a dia, algo comum em uma sociedade cheia de comparações. Manter o equilíbrio entre cuidar da aparência e valorizar sua identidade pode fazer diferença.";
    } 
    else if (totalScore <= 72) {
        finalResult = "Você pode estar sendo bastante influenciado(a) por padrões estéticos ao seu redor. Perceber isso já é um passo importante: sua aparência é apenas uma parte de quem você é, não a medida do seu valor.";
    } 
    else {
        finalResult = "Você pode sentir uma pressão intensa relacionada à aparência e à aceitação. Isso não define você, e mudanças no modo como enxergamos a nós mesmos podem começar aos poucos. Cuidar da autoestima também é uma forma de autocuidado.";
    }

    quizContainer.innerHTML = `
        <h2>Quiz Concluído!</h2>
        <h3>Nenhum resultado define sua identidade. Este quiz foi criado para promover reflexão sobre como padrões de beleza podem influenciar pensamentos, emoções e comportamentos.</h3>
        <p>${finalResult}</p>
        <button onclick="window.location.reload()">
            Refazer Quiz
        </button>
    `;
}
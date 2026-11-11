document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById("submit-button");
    const URL = "https://script.google.com/macros/s/AKfycbzLO3_yMKi_jtQZnGCXCielvhrBfm7SUVsRhFTrEGXdH86NjuidFm6Rfn2wqu-e4tBojg/exec";

    submitButton.addEventListener("click", () => {
        const questoesIgnoradas = ["question1", "question2"];
        const respostasMarcadas = document.querySelectorAll('input[type="radio"]:checked');

        let totalPontos = 0;
        let totalRespondidasValidas = 0;
        let sequenciaRespostas = [];
        let valorIdade = "";
        let valorGenero = "";

        respostasMarcadas.forEach(input => {
            const nomeQuestao = input.name;

            if (nomeQuestao === "question1") {
                valorIdade = input.value;
            } else if (nomeQuestao === "question2") {
                valorGenero = input.value;
            }

            if (!questoesIgnoradas.includes(nomeQuestao)) {
                totalPontos += parseInt(input.value) || 0;
                totalRespondidasValidas++;
                sequenciaRespostas.push(input.value);
            }
        });

        const totalEsperadoDeQuestoes = 18;
        if (totalRespondidasValidas < totalEsperadoDeQuestoes || !valorIdade || !valorGenero) {
            alert("Por favor, responda a todas as questões (incluindo idade e gênero) antes de enviar.");
            return;
        }

        const dadosEnvio = {
            genero: valorGenero,
            idade: valorIdade,
            pontosTotais: totalPontos,
            respostas: sequenciaRespostas.join(",")
            };
        };

        fetch(URL, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dadosEnvio)
        })
        .then(() => {
            console.log("Dados enviados com sucesso!");
        })
        .catch(error => {
            console.error("Erro ao enviar dados:", error);
        });

        const tabelaDeFinais = [
            { maxPontos: 27, titulo: "Perfil Equilibrado", mensagem: "Sua relação é saudável" },
            { maxPontos: 36, titulo: "Perfil Moderado", mensagem: "Você sente o impacto em alguns momentos" },
            { maxPontos: 45, titulo: "Perfil Sensível às Pressões", mensagem: "A comparação afeta bastante" },
            { maxPontos: 54, titulo: "Perfil Vulnerável", mensagem: "A comparação é constante e prejudica" }
        ];

        let resultadoFinal = tabelaDeFinais.find(final => totalPontos <= final.maxPontos) || tabelaDeFinais[tabelaDeFinais.length - 1];
        exibirResultado(totalPontos, resultadoFinal.titulo, resultadoFinal.mensagem);
    });
});

function exibirResultado(pontos, titulo, mensagem) {
    let resultContainer = document.getElementById("resultado-final");

    if (!resultContainer) {
        resultContainer = document.createElement("div");
        resultContainer.id = "resultado-final";
        document.body.appendChild(resultContainer);
    }

    resultContainer.innerHTML = `
        <h2>${titulo}</h2>
        <p><strong>Pontuação total:</strong> ${pontos} pontos</p>
        <p>${mensagem}</p>
        <button type="button" id="repeat-button" class="primary-btn">Refazer Quiz</button>
    `;

    const repeatButton = document.getElementById("repeat-button");
    repeatButton.addEventListener("click", () => {
        document.getElementById("quiz-form").reset();
        resultContainer.remove();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    resultContainer.scrollIntoView({ behavior: 'smooth' });
}
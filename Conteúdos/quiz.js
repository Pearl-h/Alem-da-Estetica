document.addEventListener('DOMContentLoaded', () => {
  const questoes = [
    {
      eu:"faixa etária",
      pergunta:"1. Qual a sua faixa etária?",
      opções:[
        { eu:"a", texto:"18 a 24 anos", pontos:0 },
        { eu:"b", texto:"25 a 34 anos", pontos:0 },
        { eu:"c", texto:"35 a 49 anos", pontos:0 },
        { eu:"d", texto:"Mais de 50 anos", pontos:0 }
      ]
    },
    {
      eu:"gênero",
      pergunta:"2. Qual o seu gênero?",
      opções:[
        { eu:"a", texto:"Mulher", pontos:0 },
        { eu:"b", texto:"Homem", pontos:0 },
        { eu:"c", texto:"Não binário / gênero diverso", pontos:0 },
        { eu:"d", texto:"Outro / Prefiro não dizer", pontos:0 }
      ]
    },
    {
      pergunta:"3. Você compara sua aparência com a de pessoas que vê nas redes sociais?",
      opções:[
        { texto:"Raramente", pontos:1 },
        { texto:"Às vezes", pontos:2 },
        { texto:"Frequentemente", pontos:3 },
        { texto:"Quase sempre", pontos:4 },
        { texto:"O tempo todo", pontos:5 }
      ]
    },
    {
      pergunta:"4. Você já deixou de participar de algum evento por não se sentir bonito(a) ou suficiente?",
      opções:[
        { texto:"Raramente", pontos:1 },
        { texto:"Às vezes", pontos:2 },
        { texto:"Frequentemente", pontos:3 },
        { texto:"Quase sempre", pontos:4 },
        { texto:"O tempo todo", pontos:5 }
      ]
    },
    {
      pergunta:"5. Sua autoestima muda dependendo de como você acha que está fisicamente em determinado dia?",
      opções:[
        { texto:"Raramente", pontos:1 },
        { texto:"Às vezes", pontos:2 },
        { texto:"Frequentemente", pontos:3 },
        { texto:"Quase sempre", pontos:4 },
        { texto:"O tempo todo", pontos:5 }
      ]
    },
    {
      pergunta:"6. Você sente necessidade de seguir tendências de moda para se sentir aceito(a)?",
      opções:[
        { texto:"Raramente", pontos:1 },
        { texto:"Às vezes", pontos:2 },
        { texto:"Frequentemente", pontos:3 },
        { texto:"Quase sempre", pontos:4 },
        { texto:"O tempo todo", pontos:5 }
      ]
    },
    {
      pergunta:"7. Comentários sobre sua aparência alteram seu humor por muito tempo?",
      opções:[
        { texto:"Raramente", pontos:1 },
        { texto:"Às vezes", pontos:2 },
        { texto:"Frequentemente", pontos:3 },
        { texto:"Quase sempre", pontos:4 },
        { texto:"O tempo todo", pontos:5 }
      ]
    },
    {
      pergunta:"8. Você já sentiu vontade de mudar algo no seu corpo após ver influenciadores, celebridades ou modelos?",
      opções:[
        { texto:"Raramente", pontos:1 },
        { texto:"Às vezes", pontos:2 },
        { texto:"Frequentemente", pontos:3 },
        { texto:"Quase sempre", pontos:4 },
        { texto:"O tempo todo", pontos:5 }
      ]
    },
    {
      pergunta:"9. Você passa muito tempo pensando em melhorar sua aparência física?",
      opções:[
        { texto:"Raramente", pontos:1 },
        { texto:"Às vezes", pontos:2 },
        { texto:"Frequentemente", pontos:3 },
        { texto:"Quase sempre", pontos:4 },
        { texto:"O tempo todo", pontos:5 }
      ]
    },
    {
      pergunta:"10. Você se sente pressionado(a) a manter um determinado padrão de corpo, cabelo, pele ou estilo?",
      opções:[
        { texto:"Raramente", pontos:1 },
        { texto:"Às vezes", pontos:2 },
        { texto:"Frequentemente", pontos:3 },
        { texto:"Quase sempre", pontos:4 },
        { texto:"O tempo todo", pontos:5 }
      ]
    },
    {
      pergunta:"11. Você já comprou roupas, cosméticos ou produtos apenas para se aproximar de um padrão de beleza?",
      opções:[
        { texto:"Raramente", pontos:1 },
        { texto:"Às vezes", pontos:2 },
        { texto:"Frequentemente", pontos:3 },
        { texto:"Quase sempre", pontos:4 },
        { texto:"O tempo todo", pontos:5 }
      ]
    },
    {
      pergunta:"12. Você sente desconforto ao postar suas fotos sem filtros ou edição?",
      opções:[
        { texto:"Raramente", pontos:1 },
        { texto:"Às vezes", pontos:2 },
        { texto:"Frequentemente", pontos:3 },
        { texto:"Quase sempre", pontos:4 },
        { texto:"O tempo todo", pontos:5 }
      ]
    },
    {
      pergunta:"13. Você costuma observar mais suas imperfeições do que suas qualidades físicas?",
      opções:[
        { texto:"Raramente", pontos:1 },
        { texto:"Às vezes", pontos:2 },
        { texto:"Frequentemente", pontos:3 },
        { texto:"Quase sempre", pontos:4 },
        { texto:"O tempo todo", pontos:5 }
      ]
    },
    {
      pergunta:"14. Você já mudou sua alimentação ou rotina apenas para alcançar um padrão estético?",
      opções:[
        { texto:"Raramente", pontos:1 },
        { texto:"Às vezes", pontos:2 },
        { texto:"Frequentemente", pontos:3 },
        { texto:"Quase sempre", pontos:4 },
        { texto:"O tempo todo", pontos:5 }
      ]
    },
    {
      pergunta:"15. Você acredita que as pessoas consideram mais bonitas recebem mais oportunidades?",
      opções:[
        { texto:"Raramente", pontos:1 },
        { texto:"Às vezes", pontos:2 },
        { texto:"Frequentemente", pontos:3 },
        { texto:"Quase sempre", pontos:4 },
        { texto:"O tempo todo", pontos:5 }
      ]
    },
    {
      pergunta:"16. Você sente necessidade de aprovação dos outros sobre sua aparência?",
      opções:[
        { texto:"Raramente", pontos:1 },
        { texto:"Às vezes", pontos:2 },
        { texto:"Frequentemente", pontos:3 },
        { texto:"Quase sempre", pontos:4 },
        { texto:"O tempo todo", pontos:5 }
      ]
    },
    {
      pergunta:"17. Quando alguém é considerado muito bonito(a), você se compara automaticamente a essa pessoa?",
      opções:[
        { texto:"Raramente", pontos:1 },
        { texto:"Às vezes", pontos:2 },
        { texto:"Frequentemente", pontos:3 },
        { texto:"Quase sempre", pontos:4 },
        { texto:"O tempo todo", pontos:5 }
      ]
    },
    {
      pergunta:"18. Você acredita que seria feliz se tivesse uma aparência diferente?",
      opções:[
        { texto:"Raramente", pontos:1 },
        { texto:"Às vezes", pontos:2 },
        { texto:"Frequentemente", pontos:3 },
        { texto:"Quase sempre", pontos:4 },
        { texto:"O tempo todo", pontos:5 }
      ]
    },
    {
      pergunta:"19. Você sente que os padrões de beleza influenciam suas escolhas e decisões no dia a dia?",
      opções:[
        { texto:"Raramente", pontos:1 },
        { texto:"Às vezes", pontos:2 },
        { texto:"Frequentemente", pontos:3 },
        { texto:"Quase sempre", pontos:4 },
        { texto:"O tempo todo", pontos:5 }
      ]
    },
    {
      pergunta:"20. Você acredita que a aparência influencia diretamente o valor de uma pessoa?",
      opções:[
        { texto:"Raramente", pontos:1 },
        { texto:"Às vezes", pontos:2 },
        { texto:"Frequentemente", pontos:3 },
        { texto:"Quase sempre", pontos:4 },
        { texto:"O tempo todo", pontos:5 }
      ]
    }
  ];

  let respostasDetalhadas = [];
  let dadosUsuario = {
    faixa etária:"",
    gênero:""
  };
  let currentQuestionIndex = 0;
  let pontuaçãoTotal = 0;

  const telaInicial = document.getElementById("tela‑inicial");
  const telaDeTeste = document.getElementById("tela‑de‑teste");
  const botaoDeIniciar = document.getElementById("botao‑iniciar");
  const questionElement = document.getElementById("pergunta");
  const elementoDeOpcoes = document.getElementById("opcoes");
  const botaoDeEnviar = document.getElementById("enviar");
  const quizContainer = document.getElementById("teste");

  function IniciarQuiz() {
    telaInicial.style.display = "none";
    telaDeTeste.style.display = "block";
    carregarPergunta();
  }

  function carregarPergunta() {
    elementoDeOpcoes.innerHTML = "";
    if (currentQuestionIndex >= questoes.length) {
      mostrarResultado();
      return;
    }
    const perguntaAtual = questoes[currentQuestionIndex];
    questionElement.innerText = perguntaAtual.pergunta;
    perguntaAtual.opções.forEach(opcao => {
      const botao = document.createElement("button");
      botao.innerText = opcao.texto;
      botao.classList.add("botao‑opcao");
      botao.addEventListener("click", () => {
        selecionarOpcao(perguntaAtual, opcao);
      });
      elementoDeOpcoes.appendChild(botao);
    });
  }

  function selecionarOpcao(pergunta, opcao) {
    if (pergunta.eu === "faixa etária") {
      dadosUsuario.faixaEtária = opcao.texto;
    } else if (pergunta.eu === "gênero") {
      dadosUsuario.gênero = opcao.texto;
    } else {
      respostasDetalhadas.push(opcao.pontos);
      pontuaçãoTotal += opcao.pontos;
    }
    currentQuestionIndex++;
    carregarPergunta();
  }

  function mostrarResultado() {
    let resultadoFinal = "";
    if (pontuaçãoTotal <= 35) {
      resultadoFinal = "Você costuma construir sua autoestima menos a partir de padrões externos e mais de quem você é.";
    } else if (pontuaçãoTotal <= 54) {
      resultadoFinal = "Você demonstra algum impacto dos padrões de beleza no seu dia a dia, algo comum em nossa sociedade.";
    } else if (pontuaçãoTotal <= 72) {
      resultadoFinal = "Você pode estar sendo bastante influenciado(a) por padrões estéticos ao seu redor. Perceber isso já é um passo importante.";
    } else {
      resultadoFinal = "Você pode sentir uma pressão intensa relacionada à aparência. Lembre‑se que o seu valor não está na beleza.";
    }
    quizContainer.innerHTML = `
      <div class="quiz‑panel result‑panel">
        <h2>Conversa de Quiz</h2>
        <p>${resultadoFinal}</p>
        <h4>Nenhum resultado define sua identidade. Este quiz foi criado para promover reflexão sobre como os padrões de beleza nos influenciam.</h4>
        <button class="botao‑primario" onclick="window.location.reload()">Refazer Quiz</button>
      </div>
    `;
  }

  botaoDeIniciar.addEventListener("click", IniciarQuiz);
});

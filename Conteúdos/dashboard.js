const TCC_Dados = 'https://script.google.com/macros/s/AKfycbxm36eY9XsNFdI-siWyNl_CKLvhh6iGbd-DEaUc3BEcY66WJlfIY2OuXBzHhG60s4-GnQ/exec';

document.addEventListener('DOMContentLoaded', carregarDadosDashboard);

async function carregarDadosDashboard() {
  try {
    const response = await fetch(TCC_Dados);
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    const dados = await response.json();

    processarEExibirDados(dados);
  } catch (error) {
    console.error('Erro ao carregar os dados do dashboard:', error);
  }
}

function processarEExibirDados(dados) {
  if (!dados || dados.length === 0) {
    console.warn("Nenhum dado encontrado.");
    return;
  }

  const faixaEtariaContagem = {};
  const generosContagem = {};
  const perfisImpacto = {
    "Baixo Impacto (≤35)": 0,
    "Médio Impacto (36-54)": 0,
    "Alto Impacto (55-72)": 0,
    "Muito Alto Impacto (>72)": 0
  };

  let somaPontos = 0;
  const totalRespostas = dados.length;

  dados.forEach(item => {
    const faixa = item.faixaEtaria || item['Faixa Etária'] || 'Não informado';
    const genero = item.genero || item['Gênero'] || 'Não informado';
    const score = Number(item.totalScore || item['Pontuação Total'] || item.pontos || 0);

    faixaEtariaContagem[faixa] = (faixaEtariaContagem[faixa] || 0) + 1;

    generosContagem[genero] = (generosContagem[genero] || 0) + 1;

    somaPontos += score;

        if (score <= 35) {
      perfisImpacto["Baixo Impacto (≤35)"]++;
    } else if (score <= 54) {
      perfisImpacto["Médio Impacto (36-54)"]++;
    } else if (score <= 72) {
      perfisImpacto["Alto Impacto (55-72)"]++;
    } else {
      perfisImpacto["Muito Alto Impacto (>72)"]++;
    }
  });

  const mediaPontos = (somaPontos / totalRespostas).toFixed(1);

  let generoPredominante = '-';
  let maxGeneroCount = 0;
  for (const [gen, count] of Object.entries(generosContagem)) {
    if (count > maxGeneroCount) {
      maxGeneroCount = count;
      generoPredominante = gen;
    }
  }

  preencherTabelaResumo(totalRespostas, mediaPontos, generoPredominante);
  renderizarGraficoIdade(faixaEtariaContagem);
  renderizarGraficoImpacto(perfisImpacto);
}

function preencherTabelaResumo(total, media, genero) {
  const tbody = document.querySelector('#tabelaResumo tbody');
  if (tbody) {
    tbody.innerHTML = `
      <tr>
        <td>${total}</td>
        <td>${media} pts</td>
        <td>${genero}</td>
      </tr>
    `;
  }
}

function renderizarGraficoIdade(dadosFaixaEtaria) {
  const ctx = document.getElementById('chartIdade').getContext('2d');
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Object.keys(dadosFaixaEtaria),
      datasets: [{
        label: 'Quantidade de Pessoas',
        data: Object.values(dadosFaixaEtaria),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: { precision: 0 }
        }
      }
    }
  });
}

function renderizarGraficoImpacto(dadosImpacto) {
  const ctx = document.getElementById('chartImpacto').getContext('2d');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: Object.keys(dadosImpacto),
      datasets: [{
        data: Object.values(dadosImpacto),
        backgroundColor: [
          '#4BC0C0', // Baixo
          '#FFCE56', // Médio
          '#FF9F40', // Alto
          '#FF6384'  // Muito Alto
        ]
      }]
    },
    options: {
      responsive: true
    }
  });
}

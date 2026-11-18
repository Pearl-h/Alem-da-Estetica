// Armazena instâncias dos gráficos para evitar sobreposição ao atualizar
let charts = {};

function renderizarGrafico(canvasId, config) {
  if (charts[canvasId]) {
    charts[canvasId].destroy();
  }
  const ctx = document.getElementById(canvasId);
  if (ctx) {
    charts[canvasId] = new Chart(ctx, config);
  }
}

function trocarDashboard(sectionId, btnElement) {
  document.querySelectorAll('.dashboard-section').forEach(sec => sec.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  
  document.getElementById(sectionId).classList.add('active');
  btnElement.classList.add('active');

  // Força o redimensionamento dos gráficos ao exibir a aba oculta
  Object.values(charts).forEach(chart => chart.resize());
}

function carregarDashboard() {
  // DADOS FIXOS LOCAIS (Substitui a resposta da API do Google Apps Script)
  const data = {
    totalRespostas: 42,
    mediaPontos: 8.5,
    generos: {
      "Feminino": 20,
      "Masculino": 18,
      "Outro / Prefiro não dizer": 4
    },
    idades: {
      "15-20 anos": 10,
      "21-25 anos": 15,
      "26-30 anos": 12,
      "31+ anos": 5
    }
  };

  // 1. Atualiza indicadores numéricos (KPIs) no HTML
  document.getElementById("total-respostas").textContent = data.totalRespostas;
  document.getElementById("media-pontos").textContent = data.mediaPontos;

  const generos = data.generos;
  const idades = data.idades;

  // 2. Gráfico de Gênero (Rosca)
  renderizarGrafico("chartGenero", {
    type: "doughnut",
    data: {
      labels: Object.keys(generos),
      datasets: [{
        data: Object.values(generos),
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56", "#4BC0C0"]
      }]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });

  // 3. Gráfico de Faixa Etária (Barras)
  renderizarGrafico("chartIdade", {
    type: "bar",
    data: {
      labels: Object.keys(idades),
      datasets: [{
        label: "Participantes",
        data: Object.values(idades),
        backgroundColor: "#4BC0C0",
        borderRadius: 6
      }]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });

  // 4. Gráficos Extras (Aba Comparativa)
  renderizarGrafico("chartIdadePizza", {
    type: "pie",
    data: {
      labels: Object.keys(idades),
      datasets: [{
        data: Object.values(idades),
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56", "#4BC0C0", "#9966FF"]
      }]
    },
    options: { responsive: true, maintainAspectRatio: false }
  });

  renderizarGrafico("chartGeneroBarra", {
    type: "bar",
    data: {
      labels: Object.keys(generos),
      datasets: [{
        label: "Total por Gênero",
        data: Object.values(generos),
        backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56", "#4BC0C0"],
        borderRadius: 6
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false
    }
  });
}

document.addEventListener("DOMContentLoaded", carregarDashboard);
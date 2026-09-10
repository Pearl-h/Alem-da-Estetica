const artigos = [
  {
    titulo: "Corpo perfeito: o impacto da busca estética na saúde mental",
    categoria: "Tecnologia & Saúde",
    descricao: "",
    imagem: "../img/Flor.png",
    link: "https://share.google/B6C2CEw7jfkHeVCiN"
  },
  {
    titulo: "Transtornos Psiquiátricos na Medicina Estética",
    categoria: "Saúde Mental",
    descricao: "Sinais de alerta que profissionais devem reconhecer em pacientes.",
    imagem: "../img/Flor.png",
    link: "https://share.google/PXtHZZkEOIZpVS25a"
  },
  {
    titulo: "A Influência dos Procedimentos Estéticos na Saúde Mental",
    categoria: "Pesquisa",
    descricao: "Análise dos benefícios e riscos da estética para a mente.",
    imagem: "../img/Flor.png",
    link: "https://revista.fumec.br/index.php/esteticaemmovimento/article/view/9808"
  },
  {
    titulo: "Pressão Estética e Saúde Mental — Drauzio Varella",
    categoria: "Divulgação",
    descricao: "Como a cobrança de aparência afeta nossa saúde mental.",
    imagem: "../img/Flor.png",
    link: "https://drauziovarella.uol.com.br/psiquiatria/pressao-estetica-pode-afetar-a-saude-mental/"
  },
  {
    titulo: "Pressão Estética: Como Lidar — Psicólogos SP",
    categoria: "Prática",
    descricao: "Estratégias para proteger sua autoestima.",
    imagem: "../img/Flor.png",
    link: "https://www.psicologossaopaulo.com.br/blog/pressao-estetica-como-ela-afeta-sua-saude-mental/"
  }
];

function carregarArtigos() {
  const container = document.getElementById('cards-container');
  if (!container) {
    console.log("⚠️ Não encontrei o espaço #cards-container no HTML!");
    return;
  }
  container.innerHTML = "";

  // TEXTO INTRODUTÓRIO
  const intro = document.createElement('div');
  intro.style.background = '#fff0f5';
  intro.style.padding = '25px';
  intro.style.borderRadius = '20px';
  intro.style.marginBottom = '30px';
  intro.style.border = '2px solid #f8d7da';
  intro.innerHTML = `
    <h2 style="color: #b48ead; text-align: center; margin-top: 0;">✨ Estética e Saúde Mental ✨</h2>
    <p style="color: #5a4b6a; line-height: 1.7;">A relação entre estética e saúde mental é complexa: vai desde a pressão social na autoimagem até os efeitos dos procedimentos.</p>
    <p style="color: #5a4b6a;"><strong>📌 Pressão:</strong> Padrões irreais → insatisfação, ansiedade e depressão. Mulheres e jovens são os mais afetados.</p>
    <p style="color: #5a4b6a;"><strong>✨ Procedimentos:</strong> Podem elevar a autoestima, mas sem acompanhamento podem esconder sofrimentos. Avaliação psicológica é essencial!</p>
  `;
  container.appendChild(intro);

  // CAIXAS DE LINKS
  const caixaLinks = document.createElement('div');
  caixaLinks.style.display = 'flex';
  caixaLinks.style.flexWrap = 'wrap';
  caixaLinks.style.gap = '15px';
  caixaLinks.style.marginBottom = '30px';

  artigos.forEach(item => {
    const cartao = document.createElement('a');
    cartao.href = item.link;
    cartao.target = '_blank';
    cartao.style.flex = '1';
    cartao.style.minWidth = '220px';
    cartao.style.padding = '18px';
    cartao.style.background = '#f9f5f2';
    cartao.style.border = '2px solid #e6e6fa';
    cartao.style.borderRadius = '16px';
    cartao.style.textDecoration = 'none';
    cartao.innerHTML = `
      <strong style="color: #9370db; display: block; margin-bottom: 5px;">${item.titulo}</strong>
      <span style="color: #7a7a7a; font-size: 0.9rem;">${item.categoria}</span>
    `;
    caixaLinks.appendChild(cartao);
  });
  container.appendChild(caixaLinks);
}

document.addEventListener('DOMContentLoaded', carregarArtigos);

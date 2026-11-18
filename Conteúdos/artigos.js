const artigos = [
  {
    titulo: "Corpo perfeito: o impacto da busca estética na saúde mental",
    categoria: "Tecnologia & Saúde",
    link: "https://share.google/B6C2CEw7jfkHeVCiN"
  },
  {
    titulo: "Transtornos Psiquiátricos na Medicina Estética",
    categoria: "Saúde Mental",
    link: "https://share.google/PXtHZZkEOIZpVS25a"
  },
  {
    titulo: "A Influência dos Procedimentos Estéticos na Saúde Mental",
    categoria: "Pesquisa",
    link: "https://revista.fumec.br/index.php/esteticaemmovimento/article/view/9808"
  },
  {
    titulo: "Pressão Estética e Saúde Mental — Drauzio Varella",
    categoria: "Divulgação",
    link: "https://drauziovarella.uol.com.br/psiquiatria/pressao-estetica-pode-afetar-a-saude-mental/"
  },
  {
    titulo: "Pressão Estética: Como Lidar — Psicólogos SP",
    categoria: "Prática",
    link: "https://www.psicologossaopaulo.com.br/blog/pressao-estetica-como-ela-afeta-sua-saude-mental/"
  }
];

function carregarArtigos() {
  const container = document.getElementById('cards-container');
  if (!container) return;
  container.innerHTML = '';

  const intro = document.createElement('article');
  intro.className = 'editorial-intro';
  intro.innerHTML = `
    <div class="intro-copy">
      <span class="intro-badge">Estética &amp; Saúde Mental</span>
      <h2>Beleza, imagem e bem-estar</h2>
      <p>A relação entre estética e saúde mental é complexa: vai desde a pressão social na autoimagem até os efeitos dos procedimentos e das expectativas culturais.</p>
      <p><strong>Pressão:</strong> padrões irreais geram insatisfação, ansiedade e depressão, especialmente entre mulheres e jovens.</p>
      <p><strong>Procedimentos:</strong> podem elevar a autoestima, mas não substituem acolhimento emocional e acompanhamento psicológico.</p>
    </div>
    <div class="intro-visual">
      <img src="../img/Passaro.png" alt="Ilustração de um pássaro simbolizando liberdade emocional">
      <p>"Assim como o pássaro, sua mente merece liberdade e carinho."</p>
    </div>
  `;
  container.appendChild(intro);

  const caixaLinks = document.createElement('div');
  caixaLinks.className = 'article-links';

  artigos.forEach(item => {
    const cartao = document.createElement('a');
    cartao.href = item.link;
    cartao.target = '_blank';
    cartao.rel = 'noopener noreferrer';
    cartao.className = 'article-link';
    cartao.innerHTML = `
      <span class="article-tag">${item.categoria}</span>
      <strong>${item.titulo}</strong>
    `;
    caixaLinks.appendChild(cartao);
  });

  container.appendChild(caixaLinks);
}

document.addEventListener('DOMContentLoaded', carregarArtigos);

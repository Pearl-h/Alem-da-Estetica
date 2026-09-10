const artigos = [
  {
    titulo: "Corpo perfeito: o impacto da busca estética na saúde mental",
    categoria: "Tecnologia & Saúde",
    descricao: "",
    imagem: "https://images.unsplash.com/photo-1536091160399-112bf925d1d?auto=format&fit=crop&w=600&q=80",
    link: "https://share.google.com/B6C2CEw7jfkHEvCiN"
  },
  {
    titulo: "Repercussões das redes sociais na imagem corporal de seus usuários: Revisão integrativa",
    categoria: "Mídias Digitais",
    descricao: "Examina como a exposição contínua aos padrões estéticos divulgados em redes sociais altera a percepção da imagem corporal e afeta diretamente os níveis de autoestima, desencadeando insatisfação.",
    imagem: "",
    link: "https://www.scielo.br/j/ptp/a/YHYLPMGdBKmTdZsH5kbYBVj/?lang=pt"
  },
  {
    titulo: "Impacto das Microalgas na Sequestração de Carbono",
    categoria: "Biotecnologia",
    descricao: "Pesquisa detalhada sobre a utilização de fotorreatores de microalgas para mitigação de emissões industriais de CO₂.",
    imagem: "https://images.unsplash.com/photo-1532187634838-abfdb1db1b69?auto=format&fit=crop&w=600&q=80",
    link: "https://doi.org/"
  }
];

// ==== CARREGAR TUDO ====
function carregarArtigos() {
  const container = document.getElementById('cards-container');
  if (!container) return;

  // ---- TEXTO INTRODUTÓRIO ----
  const intro = document.createElement('div');
  intro.style.marginBottom = '30px';
  intro.style.padding = '25px';
  intro.style.background = '#f9f5f2';
  intro.style.borderRadius = '16px';
  intro.style.color = '#4a4a4a';
  intro.style.lineHeight = '1.7';
  intro.innerHTML = `
    <h3 style="color: #9370db; margin-top: 0;">A relação entre estética e saúde mental</h3>
    <p>A relação entre estética e saúde mental é complexa, envolvendo desde os impactos da pressão social na autoimagem até os efeitos psicológicos de procedimentos estéticos.</p>

    <p><strong>📌 Impactos da Pressão Estética</strong></p>
    <ul>
      <li><strong>Insatisfação corporal:</strong> Padrões inatingíveis geram insatisfação entre 23% e 75%.</li>
      <li><strong>Transtornos psiquiátricos:</strong> Cobrança excessiva → ansiedade, depressão, distúrbios de imagem.</li>
      <li><strong>Sobrecarga emocional:</strong> Mulheres e jovens são os grupos mais afetados.</li>
    </ul>

    <p><strong>✨ Procedimentos Estéticos e Psicologia</strong></p>
    <ul>
      <li><strong>Autoestima:</strong> Procedimentos bem-sucedidos elevam confiança e bem-estar.</li>
      <li><strong>Riscos ocultos:</strong> Busca excessiva pode mascarar sofrimentos reais.</li>
      <li><strong>Avaliação prévia:</strong> Acompanhamento psicológico é essencial!</li>
    </ul>
  `;
  container.appendChild(intro);

  // ---- LINKS NA MESMA LINHA — ALINHADOS LADO A LADO ----
  const caixaLinks = document.createElement('div');
  caixaLinks.style.display = 'flex';
  caixaLinks.style.flexWrap = 'wrap';
  caixaLinks.style.gap = '15px';
  caixaLinks.style.marginBottom = '35px';

  const links = [
    {
      texto: "A Influência dos Procedimentos Estéticos na Saúde Mental",
      desc: "Análise dos benefícios e riscos da estética na mente",
      url: "https://revista.fumec.br/index.php/esteticaemmovimento/article/view/9808"
    },
    {
      texto: "Transtornos Psiquiátricos na Medicina Estética",
      desc: "Sinais de alerta que profissionais devem reconhecer",
      url: "https://www.scielo.br/j/rbcp/a/bPc3vmyWz86qKKYgcsYtTRJ/?lang=pt"
    },
    {
      texto: "Drauzio Varella — Pressão Estética",
      desc: "Como a cobrança de aparência afeta nossa mente",
      url: "https://drauziovarella.uol.com.br/psiquiatria/pressao-estetica-pode-afetar-a-saude-mental/"
    },
    {
      texto: "Psicólogos SP — Como Lidar",
      desc: "Estratégias práticas para proteger sua saúde mental",
      url: "https://www.psicologossaopaulo.com.br/blog/pressao-estetica-como-ela-afeta-sua-saude-mental/"
    }
  ];

  links.forEach(item => {
    const cartao = document.createElement('a');
    cartao.href = item.url;
    cartao.target = '_blank';
    cartao.rel = 'noopener noreferrer';
    cartao.style.flex = '1';
    cartao.style.minWidth = '200px';
    cartao.style.padding = '15px';
    cartao.style.background = '#fff';
    cartao.style.border = '2px solid #e6e6fa';
    cartao.style.borderRadius = '12px';
    cartao.style.textDecoration = 'none';
    cartao.style.transition = '0.3s';
    cartao.innerHTML = `
      <strong style="color: #9370db; display:block; margin-bottom:5px;">${item.texto}</strong>
      <span style="color: #888; font-size: 0.9rem;">${item.desc}</span>
    `;
    caixaLinks.appendChild(cartao);
  });
  container.appendChild(caixaLinks);

  // ---- ARTIGOS ORIGINAIS — CONTINUAM IGUAIS ----
  artigos.forEach(artigo => {
    const card = document.createElement('article');
    card.classList.add('card');
    card.innerHTML = `
      <div class="card-img-container">
        <img src="${artigo.imagem}" alt="${artigo.titulo}" class="card-img" loading="lazy">
      </div>
      <div class="card-body">
        <span class="card-tag">${artigo.categoria}</span>
        <h3 class="card-title">${artigo.titulo}</h3>
        <p class="card-description">${artigo.descricao}</p>
        <a href="${artigo.link}" target="_blank" rel="noopener noreferrer" class="card-link">Ler Artigo Completo</a>
      </div>
    `;
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', carregarArtigos);

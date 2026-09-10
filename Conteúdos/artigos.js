function carregarArtigos() {
  const container = document.getElementById('cards-container');
  if (!container) {
    console.log("⚠️ Elemento #cards-container não encontrado!");
    return;
  }

  // TEXTO INTRODUTÓRIO
  const blocoTexto = document.createElement('div');
  blocoTexto.style.background = '#fff0f5';
  blocoTexto.style.padding = '30px';
  blocoTexto.style.borderRadius = '20px';
  blocoTexto.style.marginBottom = '35px';
  blocoTexto.style.border = '2px solid #f8d7da';
  blocoTexto.style.lineHeight = '1.8';
  blocoTexto.style.color = '#5a4b6a';
  blocoTexto.innerHTML = `
    <h2 style="color: #b48ead; margin-top: 0; text-align: center;">✨ Estética e Saúde Mental ✨</h2>
    <p>A relação entre estética e saúde mental é complexa, envolvendo desde os impactos da pressão social na autoimagem até os efeitos psicológicos de procedimentos estéticos.</p>
    <p><strong>📌 Pressão Estética:</strong> Padrões inatingíveis → insatisfação (23% a 75%), ansiedade, depressão. Mulheres e jovens são os mais afetados.</p>
    <p><strong>✨ Procedimentos:</strong> Podem elevar autoestima, mas sem acompanhamento podem mascarar sofrimentos. Avaliação psicológica é essencial!</p>
  `;
  container.appendChild(blocoTexto);

  // LINKS EM CAIXINHAS
  const caixaLinks = document.createElement('div');
  caixaLinks.style.display = 'flex';
  caixaLinks.style.flexWrap = 'wrap';
  caixaLinks.style.gap = '18px';
  caixaLinks.style.marginBottom = '40px';

  const links = [
    {titulo: "Corpo Perfeito: Impacto na Saúde Mental", desc: "Padrões e autoestima", url: "https://share.google/B6C2CEw7jfkHeVCiN", fundo:"#fff0f5", borda:"#f8c8dc"},
    {titulo: "Transtornos na Medicina Estética", desc: "Sinais de alerta", url: "https://share.google/PXtHZZkEOIZpVS25a", fundo:"#f0e6fa", borda:"#d8c8fa"},
    {titulo: "Influência dos Procedimentos", desc: "Revista FUMEC", url: "https://revista.fumec.br/index.php/esteticaemmovimento/article/view/9808", fundo:"#e6f2fa", borda:"#bdd8f1"},
    {titulo: "Pressão Estética — Drauzio Varella", desc: "Como afeta a mente", url: "https://drauziovarella.uol.com.br/psiquiatria/pressao-estetica-pode-afetar-a-saude-mental/", fundo:"#f0faeb", borda:"#d4edc9"},
    {titulo: "Pressão Estética: Como Lidar", desc: "Psicólogos SP", url: "https://www.psicologossaopaulo.com.br/blog/pressao-estetica-como-ela-afeta-sua-saude-mental/", fundo:"#faf6e9", borda:"#f0e6c8"}
  ];

  links.forEach(item => {
    const cartao = document.createElement('a');
    cartao.href = item.url;
    cartao.target = '_blank';
    cartao.style.flex = '1';
    cartao.style.minWidth = '240px';
    cartao.style.padding = '20px';
    cartao.style.background = item.fundo;
    cartao.style.border = 2px solid ${item.borda};
    cartao.style.borderRadius = '18px';
    cartao.style.textDecoration = 'none';
    cartao.innerHTML = <strong style="color:#6b5b95;">${item.titulo}</strong><br><span style="color:#7a7a7a;font-size:0.9rem;">${item.desc}</span>;
    caixaLinks.appendChild(cartao);
  });
  container.appendChild(caixaLinks);

  // ARTIGOS ORIGINAIS — voltaram!
  const artigos = [
    {titulo: "Corpo perfeito: o impacto da busca estética na saúde mental", categoria: "Tecnologia & Saúde", desc: "", imagem: "https://images.unsplash.com/photo-1536091160399-112bf925d1d?auto=format&fit=crop&w=600&q=80", link: "https://share.google.com/B6C2CEw7jfkHEvCiN"},
    {titulo: "Repercussões das redes sociais na imagem corporal", categoria: "Mídias Digitais", desc: "Examina como as redes afetam a percepção do corpo.", imagem: "", link: "https://www.scielo.br/j/ptp/a/YHYLPMGdBKmTdZsH5kbYBVj/?lang=pt"},
    {titulo: "Impacto das Microalgas", categoria: "Biotecnologia", desc: "Pesquisa sobre sequestro de carbono.", imagem: "https://images.unsplash.com/photo-1532187634838-abfdb1db1b69?auto=format&fit=crop&w=600&q=80", link: "https://doi.org/"}
  ];

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
        <a href="${artigo.link}" target="_blank" class="card-link">Ler Artigo Completo</a>
      </div>
    `;
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', carregarArtigos);

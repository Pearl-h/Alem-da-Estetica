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

function carregarArtigos() {
  const container = document.getElementById('cards-container');

  // ✅ TEXTO INTRODUTÓRIO — NOVO
  const introducao = document.createElement('div');
  introducao.className = 'intro-secao';
  introducao.style.marginBottom = '40px';
  introducao.style.padding = '25px';
  introducao.style.background = '#f9f5f2';
  introducao.style.borderRadius = '16px';
  introducao.style.color = '#4a4a4a';
  introducao.style.lineHeight = '1.7';
  introducao.innerHTML = `
    <h3 style="color: #7b68ee; margin-top: 0; font-size: 1.4rem;">A relação entre estética e saúde mental</h3>
    
    <p>A relação entre estética e saúde mental é complexa, envolvendo desde os impactos da pressão social na autoimagem até os efeitos psicológicos de procedimentos estéticos.</p>

    <p><strong>📌 Impactos da Pressão Estética</strong></p>
    <ul style="margin: 8px 0 20px 20px; padding: 0;">
      <li><strong>Insatisfação corporal:</strong> Padrões inatingíveis difundidos pela cultura da "boa forma" e redes sociais geram taxas de insatisfação que variam entre 23% e 75%. 
        <a href="https://www.repositoriodigital.univag.com.br/index.php/psicba/article/download/2051/1964/5603" target="_blank" rel="noopener noreferrer" style="color: #9370db; text-decoration: none;">[1]</a>
      </li>
      <li><strong>Transtornos psiquiátricos:</strong> A cobrança excessiva está associada a quadros de ansiedade, depressão, compulsão alimentar e distúrbios de imagem. 
        <a href="https://www.scielo.br/j/rbcp/a/bPc3vmyWz86qKKYgcsYtTRJ/?lang=pt" target="_blank" rel="noopener noreferrer" style="color: #9370db; text-decoration: none;">[1]</a>, 
        <a href="https://ojs.revistacontribuciones.com/ojs/index.php/clcs/article/view/22204" target="_blank" rel="noopener noreferrer" style="color: #9370db; text-decoration: none;">[2]</a>
      </li>
      <li><strong>Sobrecarga emocional:</strong> Mulheres e jovens são os grupos mais afetados pela exigência de validação externa relacionada à aparência física. 
        <a href="https://www.youtube.com/watch?v=OX6HZ2Kgw0w&t=43" target="_blank" rel="noopener noreferrer" style="color: #9370db; text-decoration: none;">[1]</a>, 
        <a href="https://www.youtube.com/shorts/9pW0LJEurD4" target="_blank" rel="noopener noreferrer" style="color: #9370db; text-decoration: none;">[2]</a>
      </li>
    </ul>

    <p><strong>✨ Procedimentos Estéticos e Psicologia</strong></p>
    <ul style="margin: 8px 0 20px 20px; padding: 0;">
      <li><strong>Autoestima e bem-estar:</strong> Intervenções bem-sucedidas podem melhorar a autovalorização e a confiança, funcionando como uma ferramenta de autocuidado. 
        <a href="https://blog.utilidadesclinicas.com.br/estetica-e-saude/" target="_blank" rel="noopener noreferrer" style="color: #9370db; text-decoration: none;">[1]</a>, 
        <a href="https://www.scielo.br/j/rbcp/a/bPc3vmyWz86qKKYgcsYtTRJ/?lang=pt" target="_blank" rel="noopener noreferrer" style="color: #9370db; text-decoration: none;">[2]</a>
      </li>
      <li><strong>Riscos ocultos:</strong> A busca desenfreada por procedimentos pode mascarar sofrimentos profundos, expectativas irreais ou transtornos preexistentes. 
        <a href="https://ojs.latinamericanpublicacoes.com.br/ojs/index.php/ah/article/download/2713/2429" target="_blank" rel="noopener noreferrer" style="color: #9370db; text-decoration: none;">[1]</a>, 
        <a href="https://www.youtube.com/shorts/I9_U4hlKft0" target="_blank" rel="noopener noreferrer" style="color: #9370db; text-decoration: none;">[2]</a>
      </li>
      <li><strong>Avaliação pré-operatória:</strong> Especialistas reforçam a necessidade de acompanhamento psicológico para distinguir o autocuidado saudável de compulsões estéticas.</li>
    </ul>

    <p><strong>📚 Material complementar</strong></p>
    <ul style="margin: 8px 0 0 20px; padding: 0;">
      <li>
        <a href="https://revista.fumec.br/index.php/esteticaemmovimento/article/view/9808" target="_blank" rel="noopener noreferrer" style="color: #9370db; text-decoration: none;">A Influência dos Procedimentos Estéticos na Saúde Mental</a>
        — conferir análises clínicas em 
        <a href="https://www.scielo.br/j/rbcp/a/bPc3vmyWz86qKKYgcsYtTRJ/?lang=pt" target="_blank" rel="noopener noreferrer" style="color: #9370db; text-decoration: none;">Transtornos psiquiátricos na medicina estética</a>
      </li>
      <li>
        <a href="https://drauziovarella.uol.com.br/psiquiatria/pressao-estetica-pode-afetar-a-saude-mental/" target="_blank" rel="noopener noreferrer" style="color: #9370db; text-decoration: none;">Portal Drauzio Varella — Pressão estética pode afetar a saúde mental</a>
      </li>
      <li>
        <a href="https://www.psicologossaopaulo.com.br/blog/pressao-estetica-como-ela-afeta-sua-saude-mental/" target="_blank" rel="noopener noreferrer" style="color: #9370db; text-decoration: none;">Psicólogos São Paulo — Pressão Estética e Saúde Mental: Impactos e Como Lidar</a>
      </li>
    </ul>
  `;
  container.appendChild(introducao);

  // Lista de artigos — mantida exatamente como estava
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

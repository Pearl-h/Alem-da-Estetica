PÁGINA: ESTÉTICA E SAÚDE MENTAL
// Texto completo + todos os links em caixinhas pastel
// ==================================================

function carregarArtigos() {
  const container = document.getElementById('cards-container');
  if (!container) {
    console.log("⚠️ Elemento #cards-container não encontrado na página!");
    return;
  }

  // ========== BLOCO DE TEXTO INTRODUTÓRIO ==========
  const blocoTexto = document.createElement('div');
  blocoTexto.style.background = '#fff0f5';
  blocoTexto.style.padding = '30px';
  blocoTexto.style.borderRadius = '20px';
  blocoTexto.style.marginBottom = '35px';
  blocoTexto.style.border = '2px solid #f8d7da';
  blocoTexto.style.lineHeight = '1.8';
  blocoTexto.style.color = '#5a4b6a';

  blocoTexto.innerHTML = `
    <h2 style="color: #b48ead; margin-top: 0; text-align: center; font-size: 1.5rem;">
      ✨ Estética e Saúde Mental: Uma Relação de Dupla Via ✨
    </h2>

    <p>A relação entre estética e saúde mental é complexa, envolvendo desde os impactos da pressão social na autoimagem até os efeitos psicológicos de procedimentos estéticos.</p>

    <div style="background: #f0e6fa; padding: 20px; border-radius: 16px; margin: 18px 0;">
      <h3 style="color: #9370db; margin: 0 0 12px 0;">📌 Impactos da Pressão Estética</h3>
      <ul style="margin: 0; padding-left: 22px;">
        <li><strong>Insatisfação corporal:</strong> Padrões inatingíveis geram insatisfação entre 23% e 75% das pessoas.</li>
        <li><strong>Transtornos psiquiátricos:</strong> Cobrança excessiva → ansiedade, depressão, distúrbios de imagem e compulsão alimentar.</li>
        <li><strong>Sobrecarga emocional:</strong> Mulheres e jovens são os grupos mais afetados pela exigência de validação externa.</li>
      </ul>
    </div>

    <div style="background: #e6f2fa; padding: 20px; border-radius: 16px;">
      <h3 style="color: #74a9cf; margin: 0 0 12px 0;">✨ Procedimentos Estéticos e Psicologia</h3>
      <ul style="margin: 0; padding-left: 22px;">
        <li><strong>Autoestima e bem-estar:</strong> Intervenções bem-sucedidas elevam confiança e autovalorização.</li>
        <li><strong>Riscos ocultos:</strong> Busca sem limites pode esconder sofrimentos reais e expectativas irreais.</li>
        <li><strong>Avaliação prévia:</strong> Acompanhamento psicológico é essencial antes de qualquer procedimento.</li>
      </ul>
    </div>
  `;
  container.appendChild(blocoTexto);

  // ========== CAIXAS DE LINKS — LADO A LADO ==========
  const caixaLinks = document.createElement('div');
  caixaLinks.style.display = 'flex';
  caixaLinks.style.flexWrap = 'wrap';
  caixaLinks.style.gap = '18px';
  caixaLinks.style.marginBottom = '40px';

  // 🌸 TODOS OS LINKS — organizados e completos
  const todosLinks = [
    {
      titulo: "Corpo Perfeito: Impacto na Saúde Mental",
      descricao: "Como a busca por padrões irreais afeta a autoestima",
      link: "https://share.google/B6C2CEw7jfkHeVCiN",
      corFundo: '#fff0f5',
      corBorda: '#f8c8dc'
    },
    {
      titulo: "Transtornos Psiquiátricos na Medicina Estética",
      descricao: "Sinais de alerta que profissionais devem reconhecer",
      link: "https://share.google/PXtHZZkEOIZpVS25a",
      corFundo: '#f0e6fa',
      corBorda: '#d8c8fa'
    },
    {
      titulo: "A Influência dos Procedimentos na Saúde Mental",
      descricao: "Análise dos benefícios e riscos da estética",
      link: "https://revista.fumec.br/index.php/esteticaemmovimento/article/view/9808",
      corFundo: '#e6f2fa',
      corBorda: '#bdd8f1'
    },
    {
      titulo: "Pressão Estética e Saúde Mental — Drauzio Varella",
      descricao: "Como a cobrança de aparência afeta nossa mente",
      link: "https://drauziovarella.uol.com.br/psiquiatria/pressao-estetica-pode-afetar-a-saude-mental/",
      corFundo: '#f0faeb',
      corBorda: '#d4edc9'
    },
    {
      titulo: "Pressão Estética: Como Lidar — Psicólogos SP",
      descricao: "Estratégias práticas para proteger sua autoestima",
      link: "https://www.psicologossaopaulo.com.br/blog/pressao-estetica-como-ela-afeta-sua-saude-mental/",
      corFundo: '#faf6e9',
      corBorda: '#f0e6c8'
    },
    {
      titulo: "Estética e Saúde: Equilíbrio Essencial",
      descricao: "Quando o autocuidado é aliado e quando é risco",
      link: "https://blog.utilidadesclinicas.com.br/estetica-e-saude/",
      corFundo: '#f5f0ff',
      corBorda: '#e0d5f5'
    }
  ];

  todosLinks.forEach(item => {
    const cartao = document.createElement('a');
    cartao.href = item.link;
    cartao.target = '_blank';
    cartao.rel = 'noopener noreferrer';
    cartao.style.flex = '1';
    cartao.style.minWidth = '240px';
    cartao.style.maxWidth = '320px';
    cartao.style.padding = '22px';
    cartao.style.background = item.corFundo;
    cartao.style.border = 2px solid ${item.corBorda};
    cartao.style.borderRadius = '18px';
    cartao.style.textDecoration = 'none';
    cartao.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    cartao.style.boxShadow = '0 4px 10px rgba(0,0,0,0.04)';
    cartao.innerHTML = `
      <strong style="display: block; color: #6b5b95; font-size: 1rem; margin-bottom: 8px; line-height: 1.4;">
        ${item.titulo}
      </strong>
      <span style="color: #7a7a7a; font-size: 0.9rem; line-height: 1.5;">
        ${item.descricao}
      </span>
    `;
    caixaLinks.appendChild(cartao);
  });
  container.appendChild(caixaLinks);

  // ========== SEÇÃO DE ARTIGOS ORIGINAIS ==========
  const secaoArtigos = document.createElement('div');
  secaoArtigos.innerHTML = `
    <h3 style="color: #9370db; border-bottom: 2px solid #e6e6fa; padding-bottom: 10px; margin-bottom: 20px;">📚 Artigos e Materiais Completos</h3>
  `;
  container.appendChild(secaoArtigos);
}

document.addEventListener('DOMContentLoaded', carregarArtigos);

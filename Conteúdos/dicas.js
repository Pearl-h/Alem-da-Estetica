const dicas = [
  {
    titulo: "Menstruação: Cuidados e Bem-Estar",
    imagem: "img/Periodo.jpg",
    descricao: "💧 Beba bastante água | 💧 Descanse 7–8h | 🧘 Movimentos suaves | 🔥 Bolsa térmica na barriga | 💖 Tire um tempo para você."
  },
  {
    titulo: "Chá para Alívio de Cólicas",
    imagem: "img/Xicara.png",
    descricao: "Camomila + erva-doce + gengibre. Ferva a água, desligue, infusione 5–7 min. Tome morno! Acalma, relaxa músculos e reduz inchaço."
  },
  {
    titulo: "Higiene Íntima — 9 a 14 anos",
    imagem: "img/Higiene.jpg",
    descricao: "Lave só com água e sabonete adequado, de frente para trás. Troque o absorvente a cada 3–4h. Seu corpo está mudando — isso é normal!"
  },
  {
    titulo: "Pele Oleosa: Máscara de Argila Verde",
    imagem: "img/Espinhas.jpg",
    descricao: "1 colher de sopa de argila verde + água = pasta. Aplique, evite olhos e boca. Deixe 10–15 min. Enxágue com água morna. Use 1x por semana."
  },
  {
    titulo: "Cores de Argila para a Pele",
    imagem: "img/Argilas.jpg",
    descricao: "🟢 Verde → oleosa | 🟡 Amarela → hidrata | 🔴 Vermelha → firmeza | ⚪ Branca → cicatrização. Escolha a ideal para você!"
  },
  {
    titulo: "Glow Up: Por Dentro e Por Fora",
    imagem: "img/GlowUp.jpg",
    descricao: "Limpe e hidrate a pele 2x/dia + protetor solar. Cuide do cabelo com hidratação semanal. Coma frutas e verduras. Se ame primeiro! ✨"
  },
  {
    titulo: "Unhas Lindas e Fortes",
    imagem: "img/Unhas.jpg",
    descricao: "Lixe 1x por semana. Sempre passe base antes de esmaltar. Misture creme dental + sal, aplique 10–15 min para fortalecer."
  },
  {
    titulo: "Prevenindo Espinhas",
    imagem: "img/Espelho.jpe",
    descricao: "Beba água | Esfolie suavemente | Não durma de maquiagem | Alimente-se bem | Não toque o rosto | Controle o estresse 💆‍♀️"
  },
  {
    titulo: "Rotina de Skincare",
    imagem: "img/Skincare.jpg",
    descricao: "☀️ Manhã: Limpeza → Tônico → Sérum → Hidratante → Protetor Solar 🌙 Noite: Limpeza → Tônico → Tratamento → Hidratação"
  },
  {
    titulo: "Maquiagem: Escolhas que Rejuvenescem",
    imagem: "img/Maquiagem.jpg",
    descricao: "Evite base pesada, pó excessivo e sobrancelhas marcadas demais. Prefira camadas leves, esfume bem e valorize sua beleza natural 💖"
  },
  {
    titulo: "Dia de Princesa: Rotina Completa",
    imagem: "img/Chas.jpg",
    descricao: "Cabelo hidratado ✨ Pele hidratada 💧 Frutas e comidinhas leves 🍓 Unhas bem cuidadas 💅 Tempo para relaxar 🤍 Você merece!"
  }
];

function carregarDicas() {
  const container = document.getElementById('cards-container');
  if (!container) return;

  dicas.forEach(dica => {
    const card = document.createElement('div');
    card.style.background = '#fff0f5';
    card.style.borderRadius = '20px';
    card.style.padding = '20px';
    card.style.marginBottom = '25px';
    card.style.border = '2px solid #f8d7da';
    card.style.display = 'flex';
    card.style.flexWrap = 'wrap';
    card.style.gap = '20px';

    card.innerHTML = `
      <div style="flex: 1; min-width: 200px;">
        <img src="${dica.imagem}" alt="${dica.titulo}" style="width: 100%; border-radius: 16px; object-fit: cover; max-height: 200px;">
      </div>
      <div style="flex: 2; min-width: 300px;">
        <h3 style="color: #9370db; margin-top: 0;">${dica.titulo}</h3>
        <p style="color: #5a4b6a; line-height: 1.7;">${dica.descricao}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', carregarDicas);

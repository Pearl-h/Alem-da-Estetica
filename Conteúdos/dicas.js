const dicas = [
  {
    titulo: "Menstruação: Cuidados e Bem‑Estar",
    imagem: "../img/Periodo.jpg",
    descricao: "💧 Beba bastante água | 🛌 Descanse 7‑8h | 🤸‍♀️ Movimentos suaves | Bolsa térmica | Tire um tempo para si"
  },
  {
    titulo: "Chá para Alívio de Cólicas",
    imagem: "../img/Chas.jpg",
    descricao: "Camomila + erva‑doce + gengibre. Ferva a água, desligue, infusione 5‑7 min. Tome morno! Acalma, relaxa o músculo"
  },
  {
    titulo: "Higiene Íntima – 9 a 14 anos",
    imagem: "../img/Higiene.jpg",
    descricao: "Lave só com água e sabonete adequado, de frente para trás. Troque o absorvente a cada 3‑4h. Seu corpo é único!"
  },
  {
    titulo: "Cores de Argila para a Pele",
    imagem: "../img/Argilas.jpg",
    descricao: "🟢 Verde → oleosa | 🟡 Amarela → hidrata | 🔴 Vermelha → firmeza | ⚪ Branca → cicatrização. Escolha a ideal!"
  },
  {
    titulo: "Glow Up: Por Dentro e Por Fora",
    imagem: "../img/GlowUp.jpg",
    descricao: "Limpe e hidrate a pele 2x/dia + protetor solar. Cuide do cabelo com hidratação semanal. Coma frutas e verduras"
  },
  {
    titulo: "Unhas Lindas e Fortes",
    imagem: "../img/Unhas.jpg",
    descricao: "Lixe 1x por semana. Sempre passe base antes de esmaltar. Misture creme dental + sal, aplique 10‑15 min para clarear"
  },
  {
    titulo: "Prevenindo Espinhas",
    imagem: "../img/Espinhas.jpg",
    descricao: "Beba água | Esfolie suavemente | Não durma de maquiagem | Alimente‑se bem | Não toque o rosto | Controle o estresse"
  },
  {
    titulo: "Rotina de Skincare",
    imagem: "../img/Skincare.jpg",
    descricao: "☀️ Manhã: Limpeza → Tônico → Sérum → Hidratante → Protetor Solar 🌙 Noite: Limpeza → Tônico → Tratamento → Hidratante"
  },
  {
    titulo: "Maquiagem: Escolhas que Rejuvenescem",
    imagem: "../img/Maquiagem.jpg",
    descricao: "Evite base pesada, pó excessivo e sobrancelhas marcadas demais. Prefira camadas leves, esfume bem e valorize o seu rosto"
  },
  {
    titulo: "Dia de Princesa: Rotina Completa",
    imagem: "../img/Cuidados.jpg",
    descricao: "Cabelo hidratado ✨ Pele hidratada 💧 Frutas e comidinhas leves 🍓 Unhas bem cuidadas 💅 Tempo para relaxar 🧘"
  }
];

function carregarDicas() {
  const container = document.getElementById('cards-container');
  if (!container) return;

  container.style.display = 'flex';
  container.style.flexWrap = 'wrap';
  container.style.gap = '24px';
  container.style.justifyContent = 'center';
  container.style.padding = '24px';

  dicas.forEach(dica => {
    const card = document.createElement('div');
    card.style.background = '#ffffff';
    card.style.borderRadius = '14px';
    card.style.padding = '20px';
    card.style.width = 'min(420px, 100%)';
    card.style.boxShadow = '3px 3px 10px #f0d8e2';

    card.innerHTML = `
      <img src="${dica.imagem}" alt="${dica.titulo}" style="width:100%; border‑radius:10px;">
      <h3 style="color:#a64b78; margin‑top:12px;">${dica.titulo}</h3>
      <p style="margin‑top:8px; line‑height:1.6;">${dica.descricao}</p>
    `;

    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', carregarDicas);

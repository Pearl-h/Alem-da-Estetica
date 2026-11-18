const dicasData = [
  {
    id: 1,
    folder: "skincare",
    folderLabel: "Pasta 01 • Skincare & Argilas",
    image: "Argilas.jpg",
    alt: "Infográfico sobre cores de argilas para skincare: branca, vermelha, verde e amarela",
    quote: "“A escolha certa do mineral transforma o cuidado com a pele em um ritual de saúde e renovação celular.”",
    tip: "Argila Branca (cicatrizante e clareadora), Vermelha (tensora e elástica), Verde (adstringente para peles oleosas) e Amarela (hidratante e estimulante)."
  },
  {
    id: 2,
    folder: "autoestima",
    folderLabel: "Pasta 02 • Autoestima & Espelho",
    image: "Autoestima.avif",
    alt: "Ilustração de uma mulher olhando preocupada para seu reflexo no espelho",
    quote: "“O julgamento mais severo costuma vir do reflexo que criamos em nossa própria mente, mas a cura começa com a autocompaixão.”",
    tip: "Dica prática: Pratique olhar para além da autocrítica imediata. Reconheça que dias de insegurança fazem parte da jornada de autoaceitação."
  },
  {
    id: 3,
    folder: "autocuidado",
    folderLabel: "Pasta 03 • Chás & Bem-Estar",
    image: "Chas.jpg",
    alt: "Receita de chá para aliviar cólicas com camomila, erva-doce e gengibre",
    quote: "“Pequenos gestos de aconchego, como uma xícara de chá quente, têm o poder de acalmar o corpo e relaxar a mente.”",
    tip: "Receita rápida: Infusão de camomila, erva-doce e uma fatia de gengibre por 5 a 7 minutos para reduzir desconfortos e relaxar os músculos."
  },
  {
    id: 4,
    folder: "skincare",
    folderLabel: "Pasta 01 • Skincare & Maquiagem",
    image: "Maquiagem.jpg",
    alt: "Comparativo de maquiagem que envelhece versus maquiagem que rejuvenesce",
    quote: "“Menos produto, mais estratégia. A verdadeira beleza que ilumina não está na quantidade, mas nos detalhes.”",
    tip: "Dica de ouro: Prefira uma pele leve e com acabamento glow, selagem suave apenas onde necessário e pontos de luz estratégicos para suavizar a expressão."
  },
  {
    id: 5,
    folder: "autocuidado",
    folderLabel: "Pasta 03 • Pausas & Inspiração",
    image: "Xicara.jpg",
    alt: "Ilustração artística de uma xícara fumegante com detalhes delicados",
    quote: "“Desacelerar é um ato essencial de respeito ao seu ritmo interior e à sua saúde mental.”",
    tip: "Dica prática: Reserve alguns minutos do dia para apreciar uma pausa silenciosa, permitindo que a mente recarregue as energias."
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("dicas-container");
  const counter = document.getElementById("dicas-counter");
  const filterButtons = document.querySelectorAll(".filter-btn");

  const modal = document.getElementById("dica-modal");
  const closeModalBtn = document.getElementById("close-modal");
  const modalImg = document.getElementById("modal-img");
  const modalFolder = document.getElementById("modal-folder");
  const modalQuote = document.getElementById("modal-quote");
  const modalTip = document.getElementById("modal-tip");
  const copyQuoteBtn = document.getElementById("copy-quote-btn");

  function renderDicas(selectedFolder = "todas") {
    container.innerHTML = "";

    const filtered = selectedFolder === "todas"
      ? dicasData
      : dicasData.filter(item => item.folder === selectedFolder);

    counter.textContent = `Exibindo ${filtered.length} ${filtered.length === 1 ? "registro" : "registros"}`;

    filtered.forEach(item => {
      const card = document.createElement("article");
      card.className = "card dica-folder-card";

      card.innerHTML = `
        <div class="folder-tab">${item.folderLabel}</div>
        <div class="card-img-container dica-img-container">
          <img src="${item.image}" alt="${item.alt}" class="card-img" loading="lazy">
        </div>
        <div class="card-body">
          <blockquote class="inspirational-quote">${item.quote}</blockquote>
          <p class="card-description">${item.tip}</p>
          <button type="button" class="card-link open-dica-btn" data-id="${item.id}">
            Ampliar Registro
          </button>
        </div>
      `;

      container.appendChild(card);
    });

    document.querySelectorAll(".open-dica-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = Number(btn.getAttribute("data-id"));
        const selected = dicasData.find(d => d.id === id);
        if (selected) openModal(selected);
      });
    });
  }

  function openModal(item) {
    modalImg.src = item.image;
    modalImg.alt = item.alt;
    modalFolder.textContent = item.folderLabel;
    modalQuote.textContent = item.quote;
    modalTip.textContent = item.tip;
    copyQuoteBtn.textContent = "Copiar Frase";
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
  }

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderDicas(btn.getAttribute("data-folder"));
    });
  });

  closeModalBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  copyQuoteBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(modalQuote.textContent).then(() => {
      copyQuoteBtn.textContent = "Frase Copiada!";
      setTimeout(() => {
        copyQuoteBtn.textContent = "Copiar Frase";
      }, 2000);
    });
  });

  renderDicas();
});
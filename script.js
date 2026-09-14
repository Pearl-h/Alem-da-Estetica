const timelineData = {
  1: {
    tag: "Final do séc. XIX",
    title: "Nascimento da Alta-Costura e Belle Époque",
    text: "A silhueta em 'S' e os espartilhos ornamentados definiram a opulência da aristocracia europeia antes de o mundo ruir com a guerra. A estética da época refletia a busca por status e refinamento, com ênfase em tecidos luxuosos e detalhes elaborados."
  },
  2: {
    tag: "Anos 1920",
    title: "Os Anos Loucos e a Era do Jazz",
    text: "Coco Chanel popularizou o conforto, as calças femininas e o 'pretinho básico', refletindo a nova liberdade pós-Primeira Guerra. Mulheres abandonaram os espartilhos tradicionais, adotando cabelos curtos (bob cut) e vestidos retos de cintura baixa."
  },
  3: {
    tag: "1947",
    title: "O 'New Look' de Christian Dior",
    text: "Lançado logo após as restrições de tecido da Segunda Guerra Mundial, o estilo trouxe cinturas bem marcadas e saias volumosas. Devolveu o glamour e o luxo à moda parisiense, consolidando Paris como o centro global da indústria fashion."
  },
  4: {
    tag: "1960",
    title: "A Revolução dos Anos",
    text: "Surgimento da minissaia com Mary Quant e a democratização da moda jovem e futurista, como os vestidos metálicos de Paco Rabanne. A rua passou a ditar tendências pela primeira vez, quebrando o elitismo da alta-costura tradicional."
  },
  5: {
    tag: "1970",
    title: "Contracultura, Hippie e Punk",
    text: "Coexistência de estilos contestadores, desde o visual fluido e artesanal do movimento hippie até o niilismo e o DIY (faça você mesmo) do punk. A roupa virou um manifesto político explícito de identidade, diversidade e ruptura com padrões conservadores."
  }
};

function openModal(id) {
  const data = timelineData[id];
  if (!data) return;

  const modalTag = document.getElementById('modalTag');
  const modalTitle = document.getElementById('modalTitle');
  const modalText = document.getElementById('modalText');
  const modalOverlay = document.getElementById('modalOverlay');

  if (modalTag && modalTitle && modalText && modalOverlay) {
    modalTag.innerText = data.tag;
    modalTitle.innerText = data.title;
    modalText.innerText = data.text;
    modalOverlay.classList.add('active');
  }
}

function closeModal() {
  const modalOverlay = document.getElementById('modalOverlay');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
  }
}

function closeModalOnOuterClick(event) {
  if (event.target.id === 'modalOverlay') {
    closeModal();
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const nodes = document.querySelectorAll('.node');

  nodes.forEach((node, index) => {
    node.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;
    node.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');

      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);

      const id = this.dataset.id;
      if (id) {
        openModal(id);
      }
    });
  });

  const modalOverlay = document.getElementById('modalOverlay');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModalOnOuterClick);
  }

  const closeBtn = document.querySelector('.close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }
});

const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: rippleEffect 0.6s ease-out;
    pointer-events: none;
  }

  @keyframes rippleEffect {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

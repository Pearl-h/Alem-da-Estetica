function openModal(node) {
  const modalTag = document.getElementById('modalTag');
  const modalTitle = document.getElementById('modalTitle');
  const modalText = document.getElementById('modalText');
  const modalImg = document.getElementById('modal-img');
  const modalOverlay = document.getElementById('modalOverlay');

  if (modalTag && modalTitle && modalText && modalImg && modalOverlay) {
    modalTag.innerText = node.dataset.tag || '';
    modalTitle.innerText = node.dataset.title || '';
    modalText.innerText = node.dataset.text || '';
    modalImg.src = node.dataset.img || '';
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

      openModal(this);
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

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
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

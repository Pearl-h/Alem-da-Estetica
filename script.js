const timelineData = {
  1: {
    tag: "Década de 60",
    title: "A Revolução Natural",
    text: "Nos anos 1960, a estética era marcada pela simplicidade e valorização dos aspectos naturais. O cuidado da pele focava na hidratação básica e no início da conscientização sobre a rotina diária de saúde da pele."
  },
  2: {
    tag: "Década de 80",
    title: "Expressividade e Contraste",
    text: "Uma era de volume e cores extravagantes. Nos anos 80, o padrão estético era dominado por maquiagens de alto contraste, cabelos volumosos e o despontar da indústria dos cosméticos antiatrito e anti-idade."
  },
  3: {
    tag: "Década de 90",
    title: "Minimalismo e Correção",
    text: "O foco voltou-se para a naturalidade, porém com refinamentos estéticos. Houve a ascensão do 'no-makeup makeup' e os tratamentos dermatológicos começaram a focar na textura e suavidade do tom da pele."
  },
  4: {
    tag: "Anos 2000",
    title: "Tecnologia Dermatológica",
    text: "A chegada dos anos 2000 trouxe o boom dos tratamentos a laser, peeling químico e tecnologia de ponta para prevenção do envelhecimento, tornando o cuidado estético mais acessível e eficaz."
  },
  5: {
    tag: "Era Atual",
    title: "Saúde e Personalização",
    text: "A estética moderna busca a harmonia respeitando os traços individuais de cada pessoa. O foco mudou para a longevidade celular, tratamentos não invasivos e a promoção do bem-estar de dentro para fora."
  }
};

function openModal(id) {
  const data = timelineData[id];
  if (data) {
    document.getElementById('modalTag').innerText = data.tag;
    document.getElementById('modalTitle').innerText = data.title;
    document.getElementById('modalText').innerText = data.text;
    document.getElementById('modalOverlay').classList.add('active');
  }
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
}

function closeModalOnOuterClick(event) {
  if (event.target.id === 'modalOverlay') {
    closeModal();
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card');
  
  cards.forEach((card, index) => {
    card.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;
    card.addEventListener('click', function(e) {
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
    });
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

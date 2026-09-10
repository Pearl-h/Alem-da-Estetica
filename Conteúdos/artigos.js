const artigos = [
    {
        titulo: "Corpo perfeito: o impacto da busca estética na saúde mental",
        categoria: "Tecnologia & Saúde",
        descricao: "",
        imagem: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
        link: "https://share.google/B6C2CEw7jfkHeVCiN"
    },
    {
        titulo: "Repercussões das redes sociais na imagem corporal de seus usuários: Revisão integrativa",
        categoria: "Mídias Digitais",
        descricao: "Examina como a exposição contínua aos padrões estéticos divulgados em redes sociais altera a percepção da imagem corporal e afeta diretamente os níveis de autoestima, desencadeando ansiedade e comportamentos compulsivos em relação à beleza.",
        imagem: "",
        link: "https://www.scielo.br/j/ptp/a/YhYLPmGdBKmTdsZhk5kbYVJ/?lang=pt"
    },
    {
        titulo: "Impacto das Microalgas na Sequestração de Carbono",
        categoria: "Biotecnologia",
        descricao: "Pesquisa detalhada sobre a utilização de fotorreatores de microalgas para mitigação de emissões industriais de CO2.",
        imagem: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80",
        link: "https://doi.org/"
    }
];

function carregarArtigos() {
    const container = document.getElementById('cards-container');

    artigos.forEach(artigo => {
        const card = document.createElement('article');
        card.classList.add('card');

        card.innerHTML = `
            <div class="card-img-container">
                <img src="${artigo.imagem}" alt="Capa: ${artigo.titulo}" class="card-img" loading="lazy">
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
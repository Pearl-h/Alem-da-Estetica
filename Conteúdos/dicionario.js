const termosGlossario = [
    {
        termo: "Autoestima",
        categoria: "psicologia",
        definicao: "É a forma como uma pessoa percebe e avalia a si mesma, envolvendo sentimentos de valor, confiança e aceitação.",
        saudeMental: false
    },
    {
        termo: "Autoimagem",
        categoria: "psicologia",
        definicao: "É a representação que uma pessoa constrói sobre si mesma, incluindo a maneira como percebe seu próprio corpo e aparência.",
        saudeMental: false
    },
    {
        termo: "Imagem corporal",
        categoria: "corpo",
        definicao: "Refere-se à maneira como uma pessoa percebe, pensa e sente em relação ao próprio corpo.",
        saudeMental: false
    },
    {
        termo: "Padrão de beleza",
        categoria: "estetica",
        definicao: "Conjunto de características físicas que, em determinado contexto social e cultural, são apresentadas como desejáveis ou ideais.",
        saudeMental: false
    },
    {
        termo: "Comparação social",
        categoria: "redes-sociais",
        definicao: "Processo pelo qual uma pessoa compara suas características, comportamentos ou aparência com as de outras pessoas.",
        saudeMental: false
    },
    {
        termo: "Pressão estética",
        categoria: "estetica",
        definicao: "Influência exercida por padrões sociais, culturais, familiares, midiáticos ou digitais que pode levar uma pessoa a sentir que precisa modificar sua aparência.",
        saudeMental: false
    },
    {
        termo: "Filtro digital",
        categoria: "redes-sociais",
        definicao: "Recurso utilizado em fotografias e vídeos para modificar características visuais de uma pessoa ou do ambiente.",
        saudeMental: false
    },
    {
        termo: "Autocuidado",
        categoria: "psicologia",
        definicao: "Práticas destinadas a cuidar do próprio bem-estar físico e emocional.",
        saudeMental: false
    },
    {
        termo: "Autocompaixão",
        categoria: "psicologia",
        definicao: "Atitude de tratar a si mesmo com compreensão e gentileza diante de dificuldades, erros ou inseguranças.",
        saudeMental: false
    },
    {
        termo: "Dismorfia corporal",
        categoria: "saude-mental",
        definicao: "Uma preocupação intensa com defeitos ou características da aparência que são pouco perceptíveis ou não percebidos por outras pessoas, podendo causar sofrimento e interferir na vida cotidiana.",
        saudeMental: true
    }
];

let categoriaAtual = 'todos';
let textoBuscaAtual = '';

function renderizarGlossario() {
    const listaContainer = document.getElementById('lista-glossario');
    listaContainer.innerHTML = '';

    const termosFiltrados = termosGlossario.filter(item => {
        const atendeCategoria = categoriaAtual === 'todos' || item.categoria === categoriaAtual;
        const atendeBusca = item.termo.toLowerCase().includes(textoBuscaAtual.toLowerCase()) || 
                             item.definicao.toLowerCase().includes(textoBuscaAtual.toLowerCase());
        
        return atendeCategoria && atendeBusca;
    });

    if (termosFiltrados.length === 0) {
        listaContainer.innerHTML = '<p><em>Nenhum termo encontrado.</em></p>';
        return;
    }

    termosFiltrados.forEach(item => {
        const dt = document.createElement('dt');
        dt.innerHTML = `<strong>${item.termo}</strong>`;
        
        if (item.saudeMental) {
            dt.innerHTML += ` <small><em>[Saúde Mental]</em></small>`;
        }

        const dd = document.createElement('dd');
        let htmlConteudo = item.definicao;

        if (item.saudeMental) {
            htmlConteudo += `
                <br><br>
                <aside>
                    <details open>
                        <summary><strong>⚠️ Nota importante sobre saúde mental:</strong></summary>
                        <p>Este glossário possui caráter estritamente pedagógico e informativo. Ele não substitui a consulta com profissionais qualificados (como psicólogos ou psiquiatras) e não deve ser utilizado para fins de autodiagnóstico.</p>
                    </details>
                </aside>
            `;
        }

        dd.innerHTML = htmlConteudo + '<br><br>';

        listaContainer.appendChild(dt);
        listaContainer.appendChild(dd);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const inputBusca = document.getElementById('busca');
    const botoesFiltro = document.querySelectorAll('[data-categoria]');

    inputBusca.addEventListener('input', (e) => {
        textoBuscaAtual = e.target.value;
        renderizarGlossario();
    });

botoesFiltro.forEach(botao => {
    botao.addEventListener('click', (e) => {
        e.preventDefault();

        botoesFiltro.forEach(b => b.classList.remove('active'));

        botao.classList.add('active');

        categoriaAtual = botao.getAttribute('data-categoria');
        renderizarGlossario();
    });
});

    renderizarGlossario();
});
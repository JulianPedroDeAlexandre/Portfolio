const projetos = [
    {
        title: "Plataforma DeBugMe",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae lectus vel lorem.",
        img: "./img/WhatsApp Image 2026-01-15 at 19.53.18-portrait.png",
        link: "https://julianpedrodealexandre.github.io/Projeto-Plataforma-DeBugMe/"
    },
    {
        title: "Projeto 2",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non tincidunt orci.",
        img: "./img/WhatsApp Image 2026-01-15 at 19.53.18-portrait.png",
        link: "https://github.com/"
    },
    {
        title: "Projeto 3",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac mauris ut erat.",
        img: "./img/WhatsApp Image 2026-01-15 at 19.53.18-portrait.png",
        link: "https://github.com/"
    },
    {
        title: "Projeto 4",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae ligula feugiat.",
        img: "./img/WhatsApp Image 2026-01-15 at 19.53.18-portrait.png",
        link: "https://github.com/"
    }
];

const grid = document.getElementById("projectGrid");

projetos.forEach((p, index) => {
    const card = document.createElement("article");
    card.className = "card-smartphone";
    card.onclick = () => abrirModal(index);

    card.innerHTML = `
        <div class="thumb" style="background-image:url('${p.img}')">
            <h3>${p.title}</h3>
        </div>
    `;

    grid.appendChild(card);
});

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalLink = document.getElementById("modalLink");

function abrirModal(i) {
    modal.style.display = "flex";
    modalImg.src = projetos[i].img;
    modalTitle.textContent = projetos[i].title;
    modalDesc.textContent = projetos[i].desc;
    modalLink.href = projetos[i].link;
}

document.getElementById("closeModal").onclick = () => modal.style.display = "none";

window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };

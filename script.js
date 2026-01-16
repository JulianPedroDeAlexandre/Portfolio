// MODAL
function openModal(title, text, link) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalText").innerText = text;
    document.getElementById("modalLink").href = link;
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

window.onclick = function(e) {
    if (e.target.id === "modal") closeModal();
};

// DRAG HORIZONTAL
const slider = document.querySelector('.projects-grid');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX;
    scrollLeft = slider.scrollLeft;
    // evita seleção de texto durante o drag
    slider.style.userSelect = 'none';
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
    slider.style.userSelect = '';
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
    slider.style.userSelect = '';
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (x - startX) * 1.5; // velocidade mais suave
    slider.scrollLeft = scrollLeft - walk;
});

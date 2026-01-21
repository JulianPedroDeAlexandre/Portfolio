function openModal(title, text, link, techIcons) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalText").innerText = text;
    document.getElementById("modalLink").href = link;
    
    const iconContainer = document.querySelector(".modal-icons-container");
    iconContainer.innerHTML = "";

    techIcons.forEach(iconClass => {
        const icon = document.createElement("i");
        icon.className = iconClass;
        iconContainer.appendChild(icon);
    });

    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

window.onclick = function(e) {
    if (e.target.id === "modal") closeModal();
};

const slider = document.querySelector('.projects-grid');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX;
    scrollLeft = slider.scrollLeft;
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
    const walk = (x - startX) * 1.5; 
    slider.scrollLeft = scrollLeft - walk;
});

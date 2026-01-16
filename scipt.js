document.querySelectorAll(".btn-more").forEach(btn => {
    btn.onclick = () => {
        const id = btn.dataset.modal;
        document.getElementById(id).style.display = "flex";
    };
});

document.querySelectorAll(".close").forEach(btn => {
    btn.onclick = () => {
        const id = btn.dataset.close;
        document.getElementById(id).style.display = "none";
    };
});

window.onclick = e => {
    if (e.target.classList.contains("modal")) {
        e.target.style.display = "none";
    }
};


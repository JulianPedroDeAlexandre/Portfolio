function openModal(title, text, link) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalText").innerText = text;
    document.getElementById("modalLink").href = link;

    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Fechar clicando fora
window.onclick = function(e) {
    if (e.target.id === "modal") closeModal();
}

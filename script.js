document.addEventListener('DOMContentLoaded', () => {
    const showPopupBtn = document.querySelector(".login-btn");
    const formPopup = document.querySelector(".form-popup");

    showPopupBtn.addEventListener("click", () => {
        formPopup.classList.toggle("show");
    });
});

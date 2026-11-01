document.addEventListener("DOMContentLoaded", function () {
    const card = document.getElementById("businessCard");
    const button = document.getElementById("flipButton");

    if (card && button) {
        function flipCard() {
            card.classList.toggle("flipped");
        }

        card.addEventListener("click", flipCard);
        button.addEventListener("click", flipCard);
    }
});
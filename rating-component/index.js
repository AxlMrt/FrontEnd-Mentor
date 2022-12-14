const mainCard = document.querySelector(".ratingState");
const thankCard = document.querySelector(".thankYou");

const submitBtn = document.getElementById("submit");
const rateAgain = document.getElementById("rateAgain");
const rating = document.getElementById("rate");
const rates = document.querySelectorAll(".btn");

submitBtn.addEventListener("click", () => {
    if(!rating.innerHTML) return alert("Please select a rating");
    thankCard.classList.remove("hidden");
    mainCard.classList.add("hidden");
});

rateAgain.addEventListener("click", () => {
    rating.innerHTML = "";
    mainCard.classList.remove("hidden");
    thankCard.classList.add("hidden");
});

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML;
    });
});
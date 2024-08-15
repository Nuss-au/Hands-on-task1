const mainContainer = document.querySelector(".main-container")


const thanksContainer = document.querySelector(".ty-message")

/* first submit button */
const submitButton = document.getElementById("submit")

/*rate again button */
const rateAgain = document.getElementById("rate-again")

const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")

/* click event listener for submit button */
submitButton.addEventListener("click", () => {
    /* to make thank you container appear after clicking submit button */
    thanksContainer.classList.remove("hidden")

    /*to hide main container section after clicking submit */
    mainContainer.style.display = "none" 
})

rateAgain.addEventListener("click", () => {
    /* to hide thank you container and display main container after clicking rate again */
    thanksContainer.classList.add("hidden")
    mainContainer.style.display = "block" 
})

/* event listeners on rating buttons */
rates.forEach((rate) => {
    /* set button number to be equal to the rating in the rating id in the html doc*/ 
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})



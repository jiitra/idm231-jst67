const submitButton = document.querySelector(".js-submit-button");
const helpButton = document.querySelector(".js-help-button");
const imgButton = document.querySelectorAll(".js-grid-img");
const closeButton = document.querySelectorAll(".js-close-button");
const allCards = document.querySelectorAll(".card");
const audioPlayer = document.querySelector("#speakers");

/**
 * On submit button click:
 * collects birthDate
 * calls setZodiac() function to set astrological sign
 */
submitButton.addEventListener("click", function (event) {
    const dateInput = document.querySelector(".js-date-input");

    let birthDate = new Date(dateInput.value); //.value collects it 
    let month = birthDate.getMonth() + 1;
    let day = birthDate.getDate() + 1;
    let year = birthDate.getFullYear();

    event.preventDefault();
    setZodiac(month, day);
});

helpButton.addEventListener("click", function (event) {
    displayCard("help");
});

/**
 * for each image in the grid,
 * eventListener waits for click
 * on click, collect id and assign to var sign
 * calls displayCard(sign)
 */
imgButton.forEach(element => {
    element.addEventListener("click", function (event) {
        var sign = element.id;
        displayCard(sign);
    });
});

closeButton.forEach(element => {
    element.addEventListener("click", function (event) {
        closeCard();
    });
});

function setZodiac(month, day) {
    var sign;
    switch (month) { //switch month
        case 1: //jan

            if (day < 20) {
                sign = "capricorn";
            } else {
                sign = "aquarius";
            }
            break;

        case 2: //feb

            if (day < 19) {
                sign = "aquarius";
            } else {
                sign = "pisces";
            }
            break;

        case 3: //mar

            if (day < 21) {
                sign = "pisces";
            } else {
                sign = "aries";
            }
            break;

        case 4: //apr

            if (day < 20) {
                sign = "aries";
            } else {
                sign = "taurus";
            }
            break;

        case 5: //may

            if (day < 21) {
                sign = "taurus";
            } else {
                sign = "gemini";
            }
            break;

        case 6: //jun

            if (day < 21) {
                sign = "gemini";
            } else {
                sign = "cancer";
            }
            break;

        case 7: //jul

            if (day < 23) {
                sign = "cancer";
            } else {
                sign = "leo";
            }

            break;

        case 8: //aug

            if (day < 23) {
                sign = "leo";
            } else {
                sign = "virgo";
            }
            break;

        case 9: //sep

            if (day < 23) {
                sign = "virgo";
            } else {
                sign = "libra";
            }

            break;

        case 10: //oct

            if (day < 23) {
                sign = "libra";
            } else {
                sign = "scorpio";
            }
            break;

        case 11: //nov

            if (day < 22) {
                sign = "scorpio";
            } else {
                sign = "sagittarius";
            }
            break;

        case 12: //dec

            if (day < 22) {
                sign = "sagittarius";
            } else {
                sign = "capricorn";
            }
            break;

    }
    displayCard(sign);
}

/**
 * displayCard toggles card visibility
 * @param {*} sign - string value with astrological sign to be displayed
 */
function displayCard(sign) {
    //display card
    const signCard = document.getElementById(sign);
    signCard.classList.toggle("hidden");
    //blur background
    toggleBlur();
    //play audio
    if (sign != "help") { //prevents null error from "help" not having audio
        audioPlayer.src = signCard.getAttribute("data-audio-file");
        audioPlayer.play();
        audioPlayer.loop = true;
    }
    //disable img gallery clicks
    imgButton.forEach(element => {
        element.disabled = true;
    });
}

function closeCard() {
    allCards.forEach(element => {
        //hide all elements
        element.classList.add("hidden");
        //pause all elements
        audioPlayer.src = element.getAttribute("data-audio-file");
        audioPlayer.pause();
    });
    //unblur background
    toggleBlur();

    //enable gallery clicks
    imgButton.forEach(element => {
        element.disabled = false;
    });
}

function toggleBlur() {
    const gallery = document.querySelector(".movieStills__gallery");
    gallery.classList.toggle("blur");
}
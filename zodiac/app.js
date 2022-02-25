const submitButton = document.querySelector(".js-submit-button");

submitButton.addEventListener("click", function (event) {

    event.preventDefault();

    /* const divElement = document.querySelector("[data-content-area]");
 */
    const dateInput = document.querySelector(".js-date-input");

    let birthDate = new Date(dateInput.value); //.value collects it 

    let month = birthDate.getMonth() + 1;
    let day = birthDate.getDate() + 1;
    let year = birthDate.getFullYear();

    console.log(day);

    console.log(month);

    setZodiac(month, day);
});

function setZodiac(month, day) {
    switch (month) { //switch month

        case 1: //jan

            if (day < 20) {
                console.log("capricorn");
            } else {
                console.log("aquarius");
            }
            break;

        case 2: //feb

            if (day < 19) {
                console.log("aquarius");
            } else {
                console.log("pisces");
            }
            break;

        case 3: //mar

            if (day < 21) {
                console.log("pisces");
            } else {
                console.log("aries");
            }
            break;

        case 4: //apr

            if (day < 20) {
                console.log("aries");
            } else {
                console.log("taurus");
            }
            break;

        case 5: //may

            if (day < 21) {
                console.log("taurus");
            } else {
                console.log("gemini");
            }
            break;

        case 6: //jun

            if (day < 21) {
                console.log("gemini");
            } else {
                console.log("cancer");
            }
            break;

        case 7: //jul

            if (day < 23) {
                console.log("cancer");
            } else {
                console.log("leo");
            }

            break;

        case 8: //aug

            if (day < 23) {
                console.log("leo");
            } else {
                console.log("virgo");
            }
            break;

        case 9: //sep

            if (day < 23) {
                console.log("virgo");
            } else {
                console.log("libra");
            }

            break;

        case 10: //oct

            if (day < 23) {
                console.log("libra");
            } else {
                console.log("scorpio");
            }
            break;

        case 11: //nov

            if (day < 22) {
                console.log("scorpio");
            } else {
                console.log("sagittarius");
            }
            break;

        case 12: //dec

            if (day < 22) {
                console.log("sagittarius");
            } else {
                console.log("capricorn");
            }

            break;
    }
}

/**
 * ex from class
 * Take the year passed and subtract it from the current year
 */
function getAge(inputYear) {
    // Get current year
    const currentYear = new Date().getFullYear();
    // Get passed in input year
    const year = inputYear;
    // Calculate age
    const age = currentYear - year;
    return age;
}
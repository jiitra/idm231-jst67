const submitButton = document.querySelector(".js-submit-button");
const imgButton = document.querySelector(".js-grid-img");

/***
 * On submit button click:
 * collects birthDate
 * calls setZodiac() function to set astrological sign
 */
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

imgButton.addEventListener("click", function (event) { //console says Cannot read properties of null (reading 'addEventListener')
    alert("hello");

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

    const signCard = document.getElementById(sign);
    signCard.classList.toggle("hidden");
}
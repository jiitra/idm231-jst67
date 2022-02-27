const submitButton = document.querySelector(".js-submit-button");
const seasonDisplay = document.querySelector("[season-content-area");
const dateDisplay = document.querySelector("[date-content-area]");

submitButton.addEventListener("click", function (event) {

    event.preventDefault();

    const dateInput = document.querySelector(".js-date-input");

    const d = dateInput.value;
    const parsedYear = d.slice(0,4);

    //makes sure date is correct, avoids the "day=32" issue
    const properDateString = (d.slice(5) + '-' + parsedYear).replace(/-/g, '\/');
    let birthDate = new Date(properDateString);

    let month = birthDate.getMonth() +1;
    let day = birthDate.getDate();
    let year = birthDate.getFullYear();

    getSeason(month, day, year);
});

function getSeason(month, day, year) {
    const seasons = ['winter  &#129508', 'spring &#127804', 'summer &#127958', 'fall &#127810'];
    let userSeason;
    let x = 0; //default 0 = winter

    //SPRING: 3/22 - 6/21
    if (month >= 3 && month <= 6) {
        x = 1;

        //check for season cutoffs
        if (month == 3 && day < 22) {
            x--;
        }
        else if (month == 6 && day > 21) {
            x++;
        }
    }

    //SUMMER: 6/22 - 9/21
    else if (month >= 6 && month <= 8) {
        x = 2;

        //check for season cutoffs
        if (month == 6 && day < 22) {
            x--;
        }
        else if (month == 9 & day > 21) {
            x++;
        }
    }

    //FALL: 9/22 - 12/21
    else if (month >= 9 && month <= 12) {
        x = 3;

        if (month == 9 && day < 22) {
            x--;
        }
        else if (month == 12 && day > 21) {
            x = 0;
        }
    }

    //change font color depending on season :)
    for (let i = 0; i < seasons.length; i++) {
        if (i == x) { //when i matches the season number
            switch (i) {
                case (0):
                    seasonDisplay.style.color = "blue";
                    break;

                case (1):
                    seasonDisplay.style.color = "green";
                    break;

                case (2):
                    seasonDisplay.style.color = "red";
                    break;

                case (3):
                    seasonDisplay.style.color = "darkgoldenrod";
                    break;
            }
        }
    }

    userSeason = seasons[x];

    dateDisplay.innerHTML = `Your birthday is <b> ${month}/${day}/${year} </b> and your season is...`;
    seasonDisplay.innerHTML = userSeason;
}
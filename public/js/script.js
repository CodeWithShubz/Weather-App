const city_name = document.getElementById('city_name');
const city_name_country = document.getElementById('city_name_country');
const submitBtn = document.getElementById('submitBtn');
const temp = document.getElementById('temp_num');
const cloud = document.getElementById('cloud');
const hideData = document.querySelector('.bottom_layer');

const getInfo = async (event) => {
    event.preventDefault()
    let cityVal = city_name.value;
    if (cityVal === "") {
        city_name_country.innerText = `Enter Your City Name Before Search`
        hideData.classList.add('hide_data');

    } else {
        try {
            console.log(cityVal);
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=ebd6c66f26efaf601967e54a65b176c9`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name_country.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;

            const tempMood = arrData[0].weather[0].main;    //set the cloud inner text in tempMood variable

            // Condition to Check Sunny or Cloudy
            if (tempMood === "Clear") {
                cloud.innerHTML =
                    "<i class='fas fa-sun' style='color: #eccc68;' ></i>";
            } else if (tempMood === "Clouds") {
                cloud.innerHTML =
                    "<i class='fas fa-cloud' style='color: #f1f2f6;' ></i>";
            } else if (tempMood === "Rain") {
                cloud.innerHTML =
                    "<i class='fas fa-cloud-rain' style='color: #a4b0be;' ></i>";
            } else {
                cloud.innerHTML = "<i class='fas fa-sun' style='color: #f1f2f6;' ></i>";

            }

            hideData.classList.remove('hide_data');

        } catch {
            city_name_country.innerText = `Enter a valid City Name check your spelling or Internet Connection`
            hideData.classList.add('hide_data');
            alert('Connection Error!!!');
        }
    }
};

submitBtn.addEventListener('click', getInfo);







// -------------------------------------Date and Day -------------------------------

const date_class = document.getElementById('date');
const day_class = document.getElementById('day');

const new_date = new Date();
const date = new_date.getDate();

// ------------------------------------Get Month -------------------------------
var montharr = new Array(11);
montharr[0] = "January";
montharr[1] = "February";
montharr[2] = "March";
montharr[3] = "April";
montharr[4] = "May";
montharr[5] = "June";
montharr[6] = "July";
montharr[7] = "August";
montharr[8] = "September";
montharr[9] = "October";
montharr[10] = "November";
montharr[11] = "December";

const month = montharr[new_date.getMonth()];

date_class.innerHTML = date + "&nbsp;" + "&nbsp;" + "&nbsp;" + month;

// ------------------------------------Get Day -------------------------------
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[6] = "Saturday";
weekday[5] = "Friday";

var today = weekday[new_date.getDay()];

day_class.innerHTML = today;


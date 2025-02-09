const searchText = document.getElementById("city-search-box");
const searchBtn = document.getElementsByTagName("button");
const showCity = document.getElementById("city");
const humidityText = document.getElementById("humidity-text-value");
const windText = document.getElementById("wind-text-value");
const tempText = document.getElementById("temp-value");
//Default values for on page load
test("bengaluru");
//searching for the weather details
searchBtn[0].addEventListener("click", function(){
    const searchQ = searchText.value;
    test(searchQ);
});
//function for API call 
function test(search_Q) {
    fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${search_Q}&aqi=no`)
        .then(apiResponse => apiResponse.json())
        .then(data => {
            if (data.error) {
                throw data;
            }
            showCity.id = "";
            humidityValue = data.current.humidity + "%";
            windValue = data.current.wind_kph + "km/h";
            tempValue = data.current.temp_c + "\u00B0C";
            showCity.innerText = (searchQ.toString()).charAt(0).toUpperCase() + searchQ.slice(1);
            humidityText.innerText = humidityValue;
            windText.innerText = windValue;
            tempText.innerText = tempValue;


        }).catch(err => {
            humidityText.innerText = "";
            windText.innerText = "";
            tempText.innerText = "";
            showCity.id = "err";
            if (err.error.code == 1006) {
                showCity.innerHTML = err.error.message;
                console.log(err.error);

            }
            else {
                showCity.innerHTML = "Contact Support";
                console.log(err.error);
            }
        }
        );

}






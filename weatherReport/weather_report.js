function showweatherDetails(event){
    event.preventDefault();

    const city= document.getElementById('city').value;
    const apiKey= '8d18a928554567b9c99ac20ca8c429c7';
    const apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
    //response to json format
        .then(response => response.json())

        //getting concrete infos from data
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                    <p>Temperature: ${data.main.temp} &#8451;</p>
                                    <p>Weather: ${data.weather[0].description}</p>`;
                                        })
        //info message if an error occurs
        .catch(error => {
            console.error("Error fetching wether info:", error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch the weather info. Please try again later</p>`;
        })
}

//adding eventListener to weatherForm
document.getElementById("weatherForm").addEventListener("submit", showweatherDetails);
// Replace with your actual WeatherAPI key
const API_KEY = '6c1c57cd1dbd447db0c45445241907';
let container = document.querySelector(".div-class");

async function getWeather(url){
    let weatherResponse = await fetch(url);
    let weatherData = await weatherResponse.json();
    console.log(url);
    console.log(weatherData);

    let weatherHtml = 
    ` 
    <h2>Locationdata: ${weatherData.location.name} </h2>
    <p> Temperature: ${weatherData.current.temp_c.toFixed(2)}+'°C'</p>
    <p> Weather ${weatherData.current.condition.text} </p>
    `
    console.log(weatherHtml);

    container.innerHTML = weatherHtml;
}

let latitude;
let longitude;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position)=>{
    latitude  = position.coords.latitude;
    longitude = position.coords.longitude;

    let url = `http://api.weatherapi.com/v1/current.json?q=${latitude},${longitude}&key=${API_KEY}`;
    getWeather(url);
  }
  ,
 (err)=> {
    console.log(err);
 });
}


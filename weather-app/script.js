const apiKey = 'af4fe8e4841f6039becdb8801d18fa28';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=21.0245&lon=105.841171&lang=vi';
var cityName = document.querySelector('.city');

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  if(response.status == 404) {
    cityName.innerHTML = 'fail'
  }else {
    var data = await response.json();
    cityName.innerHTML = data.name;
    // console.log(data, cityName);
  }
}

checkWeather()
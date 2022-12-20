// const currentWeather = city => {
//     const apiUrl ="https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}";
// }
const apiUrl ="ed916b992c72a0aff42de5a80b90bb3c"

function citySearch() {
    var searchInput = document.getElementById('citySearch'.trim())
    
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+searchInput.value+"&appid=ed916b992c72a0aff42de5a80b90bb3c")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    weatherStats(data);
  });
}

function weatherStats(response) {
    console.log(response)

    var cityInfo = document.getElementById(('city'))
    var tempInfo = document.getElementById(('temp'))
    var windInfo = document.getElementById(('wind'))
    var humInfo = document.getElementById(('hum'))
    // var uvInfo = document.getElementById(('uv'))

    var currentDate = new Date()
    var month = currentDate.getMonth() + 1
    var day = currentDate.getDate();
    var year = currentDate.getFullYear();

    cityInfo.innerText = response.name + " " + month + "/" + day + "/" + year
    tempInfo.innerHTML = "Temperature: " + Math.floor(((response.main.temp-273)*1.8)+32) + "&#8457;"
    windInfo.innerText = "Wind Speed: " + response.wind.speed
    humInfo.innerText = "Humidity: " + response.main.humidity
    // uvInfo.innerText = "UV: " + response
}
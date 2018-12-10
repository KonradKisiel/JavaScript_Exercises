let appId = '71b18756618b576bd6f6849c28b76fdb'; //register to OpenWeatherMap and cpy/pase API key here
let units = 'metric'; //imperial also available
let searchMethod;

function getSearchMethod(searchTerm){
    if(searchTerm.length === 5 && Number.parseInt(searchTerm) + '' === searchTerm)
        searchMethod = 'zip';
    else
        searchMethod = 'q';
}

function searchWeather(searchTerm){
    getSearchMethod(searchTerm);
    fetch(`http://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`)
    .then(result=>{
        return result.json();
    }).then(result =>{
        init(result);
    })
}

function init(resultFromServer){
    console.log(resultFromServer);
    switch (resultFromServer.weather[0].main){
        case 'Clear':
            document.body.style.backgroundImage = 'url("clear.jpg")';
            break;
        case 'Clouds':
            document.body.style.backgroundImage = 'url("cloudy.jpg")';           
            break;
        case 'Rain':
        case 'Drizzle':
        case 'Mist':
            document.body.style.backgroundImage = 'url("rain.jpg")';
            break;
        case 'Thunderstorm':
            document.body.style.backgroundImage = 'url("storm.jpg")';
            break;
        case 'Snow':
            document.body.style.backgroundImage = 'url("snow.jpg")';
            break;
        default:
            document.body.style.backgroundImage = 'url("default.jpg")';
            break;
    }
    let weatherDescriptionHeader = document.getElementById('weatherDescriptionHeader');
    let temperatureElement = document.getElementById('temperature');
    let humidityElement = document.getElementById('humidity');
    let windSpeedElement = document.getElementById('windSpeed');
    let cityHeader = document.getElementById('cityHeader');
    let weatherIcon = document.getElementById('documentIconImg');

    weatherIcon.src = 'http://openweathermap.org/img/w/'+resultFromServer.weather[0].icon+'.png';
    let resultDescription = resultFromServer.weather[0].description;
    weatherDescriptionHeader.innerHTML = resultDescription;

    temperatureElement.innerHTML = Math.floor(resultFromServer.main.temp) + '&#176';
    windSpeedElement.innerText = 'Winds at ' + Math.floor(resultFromServer.wind.speed) + 'm/s';
    cityHeader.innerText = resultFromServer.name;
    humidityElement.innerText = 'Humidity levels at ' + resultFromServer.main.humidity + '%';

    setPositionForWeatherInfo();
}

function setPositionForWeatherInfo(){
    let weatherContainer = document.getElementById('weatherContainer');
    let weatherContainerWidth = weatherContainer.clientWidth;
    let weatherContainerHeight = weatherContainer.clientHeight;

    weatherContainer.style.left = (window.innerWidth/2 - weatherContainerWidth/2) +"px";
    weatherContainer.style.top = (window.innerHeight/2 - weatherContainerHeight/2) + "px";
    weatherContainer.style.visibility = 'visible';
}

function search(){
    let searchTerm = document.getElementById('searchInput').value;
    if(searchTerm) searchWeather(searchTerm);
}

function searchOnEnterPress(event){
    if(event.key === "Enter") search();
}


document.getElementById('searchBtn').addEventListener('click', search);
document.addEventListener('keypress', searchOnEnterPress);
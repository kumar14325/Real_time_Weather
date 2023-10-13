const apiKey = "62b8aad430e9505b4d41d9e6ee53f30f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weather_img= document.querySelector(".weather_icon");
async function checkWeather(city){
    const result = await fetch(apiUrl +city+ `&appid=${apiKey}`);
    var data = await result.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp + "°c";
    document.querySelector(".humidity").innerHTML= data.main.humidity+ "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "Km/h";
    if(data.weather[0].main=="Cloud"){
        weather_img.src="clouds.png";
        
    }
    else if(data.weather[0].main=="Clear"){
        weather_img.src="clear.png";
    }



}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
checkWeather();

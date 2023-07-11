
const apiurl = "https://api.weatherapi.com/v1/current.json?key=3079c9780bb8441ab6071722231905&aqi=yes&q=";
async function getWeather(city)
{
         const response = await fetch(apiurl + city);
         let data = await response.json()
         try{
            if(data.error.code=="1006")
         {
            alert("Invalid city name");
         }
         }
         finally
         {
            name1.innerHTML = data.location.name;
            region.innerHTML = data.location.region;
            country.innerHTML = data.location.country;
            feels_like.innerHTML = data.current.temp_c + "°C"
            humidity.innerHTML = data.current.humidity + "%"
            CO.innerHTML = data.current.air_quality.co.toFixed(2) + " μg/m3"
            NO2.innerHTML = data.current.air_quality.no2.toFixed(2) + " μg/m3"
            O3.innerHTML = data.current.air_quality.o3.toFixed(2) + " μg/m3"
            PM25.innerHTML = data.current.air_quality.pm2_5.toFixed(2) + " μg/m3"
            PM10.innerHTML = data.current.air_quality.pm10.toFixed(2) + " μg/m3"
            SO2.innerHTML = data.current.air_quality.so2.toFixed(2) + " μg/m3"
         }
}

submit.addEventListener("click",(e)=>
{
    e.preventDefault(); //for the page to not reload
    getWeather(city.value);
})
getWeather("Bengaluru") //default weather shown in the home page
delhi.addEventListener("click",()=>
{
    getWeather("New Delhi");
})
mumbai.addEventListener("click",()=>
{
    getWeather("Mumbai");
})
chennai.addEventListener("click",()=>
{
    getWeather("Chennai");
})

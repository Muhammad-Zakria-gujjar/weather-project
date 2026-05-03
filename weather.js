const apikey="4b99ce8951120a6b328639aeed618918";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".searchBox");
const b1 = document.querySelector(".b1");
const img=document.querySelector(".img");



async function checkweather(city){
    const response = await fetch(apiurl + city+ `&appid=${apikey}`);
    const data = await response.json();
    console.log(data);


    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)  + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";  
    
    if(data.weather[0].main == "Clouds"){
img.src="clouds.png";
    }
    else if(data.weather[0].main== "Clear"){
img.src="clear.png";
    }
    else if(data.weather[0].main== "Rain"){
img.src="rain.png";
    }
    else if(data.weather[0].main== "Drizzle"){
img.src="drizzle.png";
    }
     else if(data.weather[0].main== "Mist"){
img.src="mist.png";
    }


}


b1.addEventListener("click",()=>{

checkweather(searchBox.value);
});


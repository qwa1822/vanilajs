
const api_key='0745f24b1765880096faaf57e569678a';


function onGeoOk(position){
  const lat=position.coords.latitude
  const lng=position.coords.longitude;
  const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${api_key}&units=metric`
  fetch(url).then(res=>res.json()).then(data=>{
    const weather=document.querySelector('#weather span:first-child');
    const city=document.querySelector('#weather span:last-child');
    console.log(data);
    weather.textContent=`${data.weather[0].main}/${data.main.temp}`
city.innerText=data.name;
  })

}

function onGeoError(){
  alert('Cant find you. No weather for you')
}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)

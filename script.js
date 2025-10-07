
async function addweather(){
    const place=document.getElementById('weather').value.trim();
    const result=document.getElementById('result');
    if(place===""){
        result.innerHTML="<p style='color:red;'>Plese enter the city name</p>";
        return;
    }
    const apikey="375add281775bdaec8244a0cc34bc9da";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${apiKey}&units=metric`;
    
}
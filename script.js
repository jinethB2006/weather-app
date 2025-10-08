
async function addweather(){
    const place=document.getElementById('weather').value.trim();
    const result=document.getElementById('result');
    if(place===""){
        result.innerHTML="<p style='color:red;'>Plese enter the city name</p>";
        return;
    }
    const apikey="375add281775bdaec8244a0cc34bc9da";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${apikey}&units=metric`;
    try{
        const responce = await fetch(url);
        if (!responce.ok){
            throw new Error("City not found");
        }
        const data=await responce.json();

        const cityname=data.name;
        const country=data.sys.country;
        const temperature=data.main.temp;
        const weather= data.weather[0].description;

        result.innerHTML=`<h3>${cityname},${country}</h3>
        <p>Temperature: ${temperature}C</p>
        <p>Condition: ${weather}</p>`;
    }catch(error){
        result.innerHTML=`<p style="color:red;">${error.message}</p>`;
    }
}
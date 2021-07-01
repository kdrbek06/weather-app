const apiKey = "d865f40a995be1311f0b106a8c307587"
/* axios.get("http://api.openweathermap.org/data/2.5/forecast?q=eindhoven&appid=d865f40a995be1311f0b106a8c307587&units=metric") */
/* .then(res => console.log(res.data.list[0].main.temp)); */


const updateData =  function(data){
    console.log(data);


    
    document.getElementById('currentImg').src = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
    document.getElementById('cityName').innerHTML = data.city.name
    document.getElementById('weatherDescription').innerHTML = data.list[0].weather[0].description;
    document.getElementById('temp').innerHTML = `Now:   ${Math.floor(data.list[0].main.temp)}  °C`;
    document.getElementById('tempFeel').innerHTML = `Feels Like:   ${Math.floor(data.list[0].main.feels_like)}  °C`;
    document.getElementById('tempMin').innerHTML = `Min:   ${Math.floor(data.list[0].main.temp)}  °C`;
    document.getElementById('tempMax').innerHTML = `Max:   ${Math.floor(data.list[0].main.temp)}  °C`;
    document.getElementById('humidity').innerHTML = `Humidity:  % ${Math.floor(data.list[0].main.humidity)}  `;

    /* let img = document.getElementById('currentImg'); */
    // img.setAttribute('src',  `"http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png"`);

};

document.getElementById('searchButton').addEventListener('click', () =>{
    let inputCity= document.getElementById('inputBox').value
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${inputCity}&appid=${apiKey}&units=metric`)
    .then(res => updateData(res.data))
    .catch(err=> console.log(err));   
})



// http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png
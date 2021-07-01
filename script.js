const apiKey = "d865f40a995be1311f0b106a8c307587"

const updateData =  function(data){
    console.log(data);


    document.getElementById('img0').src = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
    document.getElementById('cityName').innerHTML = data.city.name
    document.getElementById('weatherDescription').innerHTML = data.list[0].weather[0].description;
    document.getElementById('temp0').innerHTML = `Now:   ${Math.round(data.list[0].main.temp)}  °C`;
    document.getElementById('feel0').innerHTML = `Feels Like:   ${Math.round(data.list[0].main.feels_like)}  °C`;
    document.getElementById('min0').innerHTML = `Min:   ${Math.round(data.list[0].main.temp_min)}  °C`;
    document.getElementById('max0').innerHTML = `Max:   ${Math.round(data.list[0].main.temp_max)}  °C`;
    document.getElementById('humidity0').innerHTML = `Humidity:  % ${Math.round(data.list[0].main.humidity)}`;


    for(let i = 1; i < 6; i++){
        document.getElementById(`img${i}`).src = `http://openweathermap.org/img/wn/${data.list[i*8-1].weather[0].icon}@2x.png`;
        document.getElementById(`min${i}`).innerHTML = `Min:   ${Math.round(data.list[i*8-1].main.temp_min)}  °C`;
        document.getElementById(`max${i}`).innerHTML = `Max:   ${Math.round(data.list[i*8-1].main.temp_max)}  °C`;
        document.getElementById(`desc${i}`).innerHTML = data.list[i*8-1].weather[0].description;
        
    };
    var newArray = [];
    for(let i = 0; i < 9 ; i++){
        newArray.push(`${Math.round(data.list[i].main.temp)}`)
     };
 console.log(newArray);
};





/* var avarage = () => {
        for(let i = 0; i < 9 ; i++){
           newArray.push(`${Math.round(data.list[i].main.temp)}`)
        };
    console.log(newArray);
};
 */



document.getElementById('searchButton').addEventListener('click', () =>{
    let inputCity= document.getElementById('inputBox').value
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${inputCity}&appid=${apiKey}&units=metric`)
    .then(res => updateData(res.data))
    .catch(err=> console.log(err));   
})




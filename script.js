const apiKey = "d865f40a995be1311f0b106a8c307587";

document.getElementById("searchButton").addEventListener("click", () => {
    let inputCity = document.getElementById("inputBox").value;
    axios
        .get(`http://api.openweathermap.org/data/2.5/forecast?q=${inputCity}&appid=${apiKey}&units=metric`)
        .then((res) => updateData(res.data))
        .catch((err) => console.log(err));

    const updateData = function (data) {
            console.log(data);
            tempAvg(data);
        
            document.getElementById("img0").src = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
            document.getElementById("cityName").innerHTML = data.city.name;
            document.getElementById("weatherDescription").innerHTML = data.list[0].weather[0].description;
            document.getElementById("temp0").innerHTML = `Now:   ${Math.round(data.list[0].main.temp)}  °C`;
            document.getElementById("feel0").innerHTML = `Feels Like:   ${Math.round(data.list[0].main.feels_like)}  °C`;
            document.getElementById("avgBox0").innerHTML = `Day Avarage:   ${dayAvg[0]}  °C`;
            document.getElementById("humidity0").innerHTML = `Humidity:  % ${Math.round(data.list[0].main.humidity)}`;
            
            for (let i = 1; i < 5; i++) {
                document.getElementById(`img${i}`).src = `http://openweathermap.org/img/wn/${data.list[i * 8 - 1].weather[0].icon}@2x.png`;
                document.getElementById(`desc${i}`).innerHTML = data.list[i * 8 - 1].weather[0].description;
                document.getElementById(`avgBox${i}`).innerHTML = `${i}.Day Average:   ${dayAvg[i]}  °C`;}
        };

    // AVERAGE TEMPERATURE COLCULATION
    let dayAvg = [];
    const tempAvg = (data) => {
        let dayTemp = 0;
        let loopNum = 0;
        for(let k = 0; k < 40; k++){
            dayTemp  = dayTemp + data.list[k].main.temp;
            loopNum ++;

            if(data.list[k].dt_txt.includes("00:00:00")){
                dayAvg.push(Math.round(dayTemp/loopNum));
                dayTemp = 0;
                loopNum = 0;
            }
        }
        dayAvg.push(Math.round(dayTemp/loopNum));
        console.log(dayAvg);
    }
});
const apiKey = "d865f40a995be1311f0b106a8c307587"
/* axios.get("http://api.openweathermap.org/data/2.5/forecast?q=eindhoven&appid=d865f40a995be1311f0b106a8c307587&units=metric") */
/* .then(res => console.log(res.data.list[0].main.temp)); */


const updateData =  function(data){
    console.log(console.log(data));
    // inner html ile kutunun icerigini doldur

    document.getElementById('currentBox').innerHTML = data.list[0].main.temp;
};

document.getElementById('searchButton').addEventListener('click', () =>{
    let userCity= document.getElementById('inputBox').value
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${userCity}&appid=${apiKey}&units=metric`)
    .then(res => updateData(res.data))
    .catch(err=> console.log(err));   
})

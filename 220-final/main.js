// GLOBAL VARIABLES 

var lat="33"; 
var long="-112"; 
let city = ""; 


//-----------------INDEX.HTML JAVASCRIPT-------------// 


// this is the animation for the "hello there"

function animation(){
    anime({
        targets: 'path', // targets the css element path
        strokeDashoffset: [anime.setDashoffset, 0], // this is specific to svgs do not change 
        easing: 'easeInQuad', // this is your timing function 
        duration: 2000, //how long the animation lasts 
        delay: function(el, i) { return i * 300 }, // how much time it delays for each stroke 
        direction: 'alternate', // what direction the animation goes 
        loop: true // does this loop
    });

    if(navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(setWeather);
        }
    
        else{
            weatherLocation.innerHTML="this browser does not support location"
        }
}

// this is for the accordion
function accordion(){
    let accordionContent = document.getElementsByClassName("accordionContent");
    console.log(accordionContent) 

    if(accordionContent[0].style.display == "block")
        {
            accordionContent[0].style.display = "none"
        }
        
        else{
            accordionContent[0].style.display = "block"
        }

}

//-----------------CONTENT.HTML JAVASCRIPT-------------// 

//--- FOR THE NAVIGATION --// 

function getDateTimeLocation(){
    setMainScreen();
}

function buttonNav(id) 
{
   console.log(id)

   if(id.innerHTML == "summary")
   {
    try{
        document.getElementById('weatherButton').classList.remove('active')
        location.href='#summaryTab'
        id.classList.add('active')
    }catch{
        location.href='#summaryTab'

    }
   
   }

   else if(id.innerHTML == "weather")
   {

    document.getElementById('summaryButton').classList.remove('active')
    location.href='#weatherTab'
    id.classList.add('active')

   }


    
}


// -- FOR THE FUNCTIONALITY -//

// we need to get the date and time AND geolocation 



// set time and date 

function setMainScreen(){
    let date = new Date();
    let summaryContent = document.getElementById('dateTime')
    let times = ""

    if(date.getMinutes() < 10){
        times = `${date.getHours()}: 0${date.getMinutes()}`
    }

    else{
        times = `${date.getHours()}:${date.getMinutes()}`
    }

    let dates= `${date.getMonth()+1} / ${date.getDate()} / ${date.getFullYear()}`
    summaryContent.innerHTML = `${times} <br/> ${dates} <br/>`
    document.getElementById('time').innerHTML = times


    // setting the time and date in our content 
   
    //now, we need to get the greeting updated 

    let greeting = document.getElementById('headerSummary')

    if(date.getHours() >=12 && date.getHours()<17) {
        greeting.innerHTML = "good afternoon"
    }

    else if(date.getHours()>=17 && date.getHours()<19){
        greeting.innerHTML = "good evening"
    }

    else if(date.getHours() >=19 && date.getHours()<0){

        greeting.innerHTML = "good night"

    }

    else { 
        greeting.innerHTML = "good morning"
    }

    temperatureAPI()

}

// from geolocation lets get the weather 

function setWeather(position){

    lat = Math.floor(position.coords.latitude)
    long = Math.floor(position.coords.longitude)
 
}


async function temperatureAPI()
{
    let data2; 
    let chartData; 
    const url2 = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=auto`

    try{

        const response2 = await fetch(url2)

        if(response2){
            data2 = await response2.json() 
        }

        else{
            console.log(response2.status)
        }

    }catch(err){
        console.log(error)
    }

    document.getElementById('dateTime').innerText += `${data2.current.temperature_2m}°F`
    getCity();

    let hourlyData = document.getElementById('listOfTemp')


    for(let i = 0; i < 24; i++)
    {
        hourlyData.innerHTML+= `<p>${i}:00 - <strong>${data2.hourly.temperature_2m[i]} °F</strong></p>`
    }

    let xAxis = [] 
    let maxTemp = [] 
    let minTemp = [] 



    for(let y = 0; y<data2.daily.time.length; y++){
        xAxis.push(data2.daily.time[y])
    }

    for(let a = 0; a<data2.daily.time.length; a++){
        maxTemp.push(data2.daily.temperature_2m_max[a])
    }

    console.log("max temp", maxTemp)

    for(let b = 0; b<data2.daily.time.length; b++){
        minTemp.push(data2.daily.temperature_2m_min[b])
    }

    console.log("min temp", minTemp)

    Highcharts.chart('graph', {

        title: {
            text: null,
            align: 'left'
        },


        xAxis: {
           categories: xAxis 
        },

        yAxis: {
            title: {
                text: 'Temperature (°F)'
            }
        },

        legend: {
            enabled: true
        },

        tooltip: {
            valueSuffix: '°F'
        },

        series: [{
            name: 'Max',
            data: maxTemp
        }, {
            name: 'Min',
            data: minTemp
        }]

    });



}

async function getCity() {

    let data; 
    let hourlyForecast = document.getElementById('')
    const url = `https://nominatim.openstreetmap.org/reverse.php?lat=${lat}&lon=${long}&zoom=10&format=jsonv2`

    try{

        const response = await fetch(url)

        if(response){
            data = await response.json() 
        }

        else{
            console.log(response.status)
        }

    }catch(err){
        console.log(error)
    }

    document.getElementById("dateTime").innerHTML+=` in ${data.address.city}` 

   
}
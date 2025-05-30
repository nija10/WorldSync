let cityTimeZone = null;

function updateTime(){
  //LOS_ANGELES
// let losAngelesDateElement= document.querySelector("#los-angeles .date")
let losAngelesElement = document.querySelector("#los-angeles");

if (losAngelesElement){
  let losAngelesDateElement=losAngelesElement.querySelector(".date")
  let losAngelesTimeElement = losAngelesElement.querySelector(".time")
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML=losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML=losAngelesTime.format("h:mm:ss [<small>]A[</small>]")
}


//SYDNEY
let sydneyElement = document.querySelector("#sydney");

if (sydneyElement){
  let sydneyDateElement=sydneyElement.querySelector(".date")
  let sydneyTimeElement = sydneyElement.querySelector(".time")
  let sydneyTime = moment().tz("Australia/Sydney");


  sydneyDateElement.innerHTML=sydneyTime.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML=`${sydneyTime.format("h:mm:ss [<small>]A[</small>]")}`
}


//DELHI
let delhiElement = document.querySelector("#delhi");
if (delhiElement){
  let delhiDateElement=delhiElement.querySelector(".date")
  let delhiTimeElement = delhiElement.querySelector(".time")
  let delhiTime = moment().tz("Asia/Kolkata");


  delhiDateElement.innerHTML= delhiTime.format("MMMM Do YYYY");
  delhiTimeElement.innerHTML=`${delhiTime.format("h:mm:ss [<small>]A[</small>]")}`
};
}


function updateCity(event){
  cityTimeZone = event.target.value;

  if (cityTimeZone === 'current'){
    cityTimeZone=moment.tz.guess();
  }


  let cityName=cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement=document.querySelector("#cities");
  
  citiesElement.innerHTML =`
  <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}</div>
    </div>
    `;

}

updateTime();
setInterval(updateTime, 1000);

setInterval(() => {
  if (cityTimeZone) {
    updateCity({ target: { value: cityTimeZone } });
  }
}, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity)


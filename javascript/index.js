function updateTime(){
  //LOS_ANGELES
// let losAngelesDateElement= document.querySelector("#los-angeles .date")
let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement=losAngelesElement.querySelector(".date")
let losAngelesTimeElement = losAngelesElement.querySelector(".time")
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML=losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML=`${losAngelesTime.format("h:mm:ss [<small>]A[</small>]")}`


//SYDNEY
let sydneyElement = document.querySelector("#sydney");
let sydneyDateElement=sydneyElement.querySelector(".date")
let sydneyTimeElement = sydneyElement.querySelector(".time")
let sydneyTime = moment().tz("Australia/Sydney");


sydneyDateElement.innerHTML=sydneyTime.format("MMMM Do YYYY");
sydneyTimeElement.innerHTML=`${sydneyTime.format("h:mm:ss [<small>]A[</small>]")}`


//DELHI
let delhiElement = document.querySelector("#delhi");
let delhiDateElement=delhiElement.querySelector(".date")
let delhiTimeElement = delhiElement.querySelector(".time")
let delhiTime = moment().tz("India/Delhi");


delhiDateElement.innerHTML= delhiTime.format("MMMM Do YYYY");
delhiTimeElement.innerHTML=`${delhiTime.format("h:mm:ss [<small>]A[</small>]")}`
};

updateTime();
setInterval(updateTime, 1000);






// Call the modified date function

buildModDate();

// Work with the small screen menu
const menuButton = document.querySelector("menuButton");
menuButton.addEventListener("click",menuButton);

// Use the wind chill function

let speed = 3;
let temp = 25;
let feelTemp = document.getElementById("fellTemp");
buildwc(speed,temp);

// Build the last modified date
function buildModDate(){
    const dayArray =["Monday","Tuesday","Wednesday","Thurday","Friday","Saturday"];
    const monthArray =["January","February","March","April","May","June","July","August","September","October","November","December"];

    let lastMod = new Date(document.lastModified);
    const dayName = dayArray[lastMod.getDay()];
    const monthName = monthArray[lastMod.getMonth()];
    const formatted = dayName + "," + lastMod.getDate() + "" monthName + "," + lastMod.getFullYear();
    document.querySelector("#modDate").innerText = formattedDate;
}
const datelastloaded = document.querySelector("#last-loaded");
const lastloadedTime = localStorage.getItem("lastLoadedTime");

const currentTime = new Date().toLocalString();

if(lastloadedTime){
    datelastloaded.textContent = lastloadedTime;
}else{
    datelastloaded.textContent = "This is the first time the form has been loaded.";
}
localStorage.setItem("lastloadedTime",currentTime);
function buildWindChill(speed,temp){
    let fellTemp = document.getElementById("fellTemp");

    // Compute the wind chill

    let windChill = 35.74 + 0.6125 * temp - 35.75 * Math.pow(speed,0.16)+ 0.4275 * temp * Math.pow(speed,0.16);
    console.log(windChill);

    // Round the answer down to integer

    WindChill = Math.floor(windChill);

    // If chill is greater than temp, return the temp

    windChill = (WindChill>temp) temp: windChill;

    // Display the WindChill

    console.log(windChill);

    // WindChill = "fells like '+wincchill"=f';
    fellTemp.innerHTML = windChill;
}
return windChill
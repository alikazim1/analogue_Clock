const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){

    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds ) * 6) + 90 ; // we add 90 b/c we want to start the rotation from 12'o clock. Initially the degree count starts from 0 deg which 
    // is from 3 when we add 90 to initial angle it shifts to 12. 
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegree = ((mins) * 60) + 90;
    minsHand.style.transform  = `rotate(${minsDegree}deg)`;

    const hour = now.getHours();
    const hourDegree = ((hour) * 30) + ((mins/2)) + 90;
    hourHand.style.transform  = `rotate(${hourDegree}deg)`;




}

setInterval(setDate,1000);
setDate();
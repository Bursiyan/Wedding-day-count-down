const items = document.querySelectorAll(".countdown-items > h4");
const countdownElement = document.querySelector(".countdown");

let countdownDate = new Date(2022, 08, 20, 12, 0, 0).getTime();

function getCountdownTime() {
    //nerka jamanak
    const now = new Date().getTime();

    //nerka jamanaki ev naxyntrac jamanaki tarberutyun
    const distance = countdownDate - now;

    //1s= 1000ms
    //1m=60s
    //1h=60m
    //1d=24h

    //popoxakannery milivarkyannerov
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let days = Math.floor(distance / oneDay);
    let hours = Math.floor((distance % oneDay) / oneHour);
    let minutes = Math.floor((distance % oneHour) / oneMinute);
    let seconds = Math.floor((distance % oneMinute) / 1000);

    const values = [days, hours, minutes, seconds];
    items.forEach(function(item, index) {
        item.textContent = values[index]
    })
    if (distance < 0) {
        clearInterval(countdown);
        countdownElement.innerHTML = "<h4 class = 'expired'>The day has come</h4>"
    }
}
let countdown = setInterval(getCountdownTime, 1000);
getCountdownTime()
let myClock = document.getElementById("myClock");
Update();
setInterval(Update, 1000);

function Update() {

    let date = new Date();
    myClock.innerHTML = updateTime(date);

    function updateTime(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrpm = hours >= 12 ? "Pm" : "Am";
        hours = (hours % 12) || 12;
        hours = formatZeroes(hours);
        minutes = formatZeroes(minutes);
        seconds = formatZeroes(seconds);
        return `${hours}:${minutes}:${seconds} ${amOrpm}`;
    }

    function formatZeroes(time) {
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }
}
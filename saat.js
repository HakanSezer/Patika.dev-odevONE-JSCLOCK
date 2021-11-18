const getGuestName = () => {
    let myName = prompt("Lütfen adınızı Yazınız.")
    document.querySelector("#myName").innerHTML = myName;
}

function jsTime() {
    var time = new Date();

    document.querySelector("#timeS").innerHTML = time.toLocaleTimeString();
    document.querySelector("#timeS").innerHTML = time.toLocaleTimeString();

    var weekDay = new Array(7);
    weekDay[0] = "Pazar";
    weekDay[1] = "Pazartesi";
    weekDay[2] = "Salı";
    weekDay[3] = "Çarşamba";
    weekDay[4] = "Perşembe";
    weekDay[5] = "Cuma";
    weekDay[6] = "Cumartesi";

    var nONE = weekDay[time.getDay()];
    document.querySelector("#demo").innerHTML = nONE;
}

getGuestName();
setInterval(jsTime, 1000);

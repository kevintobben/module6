let text = "Sip News is built by Product Hunt and its awesome community.";
let result = text.link("https://www.youtube.com/watch?v=ZZ5LpwO-An4&t=55s");
document.getElementById("ytlink").innerHTML = result;

function myFunction() {
    var txt;
    if (confirm("KLIK OP EEN KNOPPIE!")) {
        txt = "WOW JE HEBT OP OK GEKLIKT, GROTE JONGEN BEN JE OOK!";
    } else {
        txt = "OP ANNULEREN GEKLIKT, ANNULEER JEZELF MAAR!";
    }
    document.getElementById("demo").innerHTML = txt;
    if (x > 10) {
        var snd = new Audio("/MLG music 10 hours (64 kbps).mp3 ");
        snd.play();
        alert("Thank you!");
    }
}

function yourlink() {

    var locs = ['http://buzzybuzz.biz/']

    for (let i = 0; i < locs.length; i++) {
        window.open(locs[i])
    }
    //hi
}


var object = document.getElementById('beker');

object.onmouseover = function() {
    var x = Math.floor(Math.random() * 713);
    var y = Math.floor(Math.random() * 903);
    object.style.top = x + 'px';
    object.style.left = y + 'px';
};
//dvd
const section = document.querySelector("section");
const logo = document.querySelector(".logo");
const FPS = 600;
section.style.height = window.innerHeight + "px";
section.style.width = window.innerWidth + "px";

// logo bewegen
let xPosition = 25;
let yPosition = 25;
let xSpeed = 25;
let ySpeed = 25;

function update() {
    logo.style.left = xPosition + "px";
    logo.style.top = yPosition + "px";
}

setInterval(() => {
    if (xPosition + logo.clientWidth >= window.innerWidth || xPosition <= 0) {
        xSpeed = -xSpeed;
        logo.style.fill = randomColor();
    }
    if (yPosition + logo.clientHeight >= window.innerHeight || yPosition <= 0) {
        ySpeed = -ySpeed;
        logo.style.fill = randomColor();
    }

    xPosition += xSpeed;
    yPosition += ySpeed;
    update();
}, 1000 / FPS);

function randomColor() {
    let color = "#";
    color += Math.random().toString(16).slice(2, 8).toUpperCase();

    return color;
}
console.log(randomColor());

window.addEventListener("resize", () => {
        xPosition = 10;
        yPosition = 10;

        section.style.height = window.innerHeight + "px";
        section.style.width = window.innerWidth + "px";
    }) //eeendjes
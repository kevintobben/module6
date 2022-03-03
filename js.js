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

object.onmouseover=function(){
  var x = Math.floor(Math.random()*713);
  var y = Math.floor(Math.random()*903);
  object.style.top = x + 'px';
  object.style.left = y + 'px';
};


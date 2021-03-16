
var week = new Date();

var weekdag = new Array ('zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag');

document.getElementById('dag').innerHTML = weekdag[week.getDay()];




function klok(){

	var klok = new Date();
	var minutes = klok.getMinutes();
	var uur = klok.getHours();

	if (uur >= 9 && uur <= 21){
		document.getElementById('blink').classList.remove('nacht');
		document.getElementById('blink').classList.remove('dag');
	} else {
		document.getElementById('blink').classList.remove('dag');
		document.getElementById('blink').classList.remove('nacht');
	}


	if (minutes < 10){
		minutes = '0' + minutes;
	}

	document.getElementById('klok').innerHTML = klok.getHours() + ':' + minutes;
        
}

klok();
setInterval(klok, 1000);




var today = new Date();

var maanden = new Array ('januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december');

document.getElementById('datum').innerHTML = today.getDate() + ' ' + maanden[today.getMonth()] + ' ' + today.getFullYear();







setInterval(function(){
	document.getElementById("blink").style="display:none";

},1000);

setInterval(function(){
	document.getElementById("blink").style="display:block";

},2000);


















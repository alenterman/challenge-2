
var week = new Date();

var weekdag = new Array ('zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag');

document.getElementById('dag').innerHTML = weekdag[week.getDay()];




function klok(){

	var klok = new Date();
	var minutes = klok.getMinutes();


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


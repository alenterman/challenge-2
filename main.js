
var week = new Date();

var weekdag = new Array ('zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag');

document.getElementById('dag').innerHTML = weekdag[week.getDay()];







function klok(){

	var klok = new Date();
	var minutes = klok.getMinutes();
	var uur = klok.getHours();
	var secondes = klok.getSeconds();



	if (uur >= 9 && uur <= 19){
		document.getElementById('blink').classList.remove('nacht');
		document.getElementById('blink').classList.add('overdag');

		document.getElementById('body').classList.remove('nachtstand');
		document.getElementById('body').classList.add('dagstand');
	} else {
		document.getElementById('blink').classList.remove('dag');
		document.getElementById('blink').classList.add('nacht');

		document.getElementById('body').classList.remove('dagstand');
		document.getElementById('body').classList.add('nachtstand');
	}




	if (secondes === 30 || secondes === 0 ){
		document.getElementById('klok').classList.remove('noFade');
		document.getElementById('klok').classList.add('fade');
	}
	else{
		document.getElementById('klok').classList.add('noFade');
		document.getElementById('klok').classList.remove('fade');
	}




	if (minutes < 10){
		minutes = '0' + minutes;
	}

	if (secondes < 10){
		secondes = '0' + secondes;
	}

	document.getElementById('klok').innerHTML = klok.getHours() + ':' + minutes + ':' + secondes;
        
}

klok();
setInterval(klok, 1000);






var today = new Date();

var maanden = new Array ('januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december');

document.getElementById('datum').innerHTML = today.getDate() + ' ' + maanden[today.getMonth()] + ' ' + today.getFullYear();







function welkom() {

	var time = new Date().getHours();
	var greeting;
	
	if (time < 10) {
		greeting = "Good morning";
	} else if (time < 20) {
		greeting = "Good afternoon";
	} else {
		greeting ="Good evening";
	}

document.getElementById("welkomTekst").innerHTML = greeting;

}

window.onload = welkom();





















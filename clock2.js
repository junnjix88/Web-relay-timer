

var h2 = document.getElementById('clock');

// display current time by the second
var currentTime = setInterval(function(){
	var date = new Date();
	
	var hours = ((date.getHours())-12);
    var hours2 = (date.getHours());
	// var hours = date.getHours();
	
	var minutes = date.getMinutes();
	
	var seconds = date.getSeconds();
	
	var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';


	//convert military time to standard time

	if (hours < 0) {
		//hours = hours * -1;
        hours = hours2;
	} else if (hours == 00) {
		hours = 12;
	} else {
		hours = hours;
	}

	
	h2.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + ":" + ampm;
	
},1000);




/*functions to get hour, min, secs, 
  am or pm, add zero, set alarm time and sound, clear alarm
*/

function addZero(time) {

		return (time < 10) ? "0" + time : time;
	
}

function hoursMenu(){

	var select = document.getElementById('alarmhrs');
	var hrs = 12

	for (i=1; i <= hrs; i++) {
		select.options[select.options.length] = new Option( i < 10 ? "0" + i : i, i);
		
	}
}
hoursMenu();

function hoursMenu2(){

	var select = document.getElementById('alarmhrs2');
	var hrs = 12

	for (i=1; i <= hrs; i++) {
		select.options[select.options.length] = new Option( i < 10 ? "0" + i : i, i);
		
	}
}
hoursMenu2();

function hoursMenu3(){

	var select = document.getElementById('alarmhrs3');
	var hrs = 12

	for (i=1; i <= hrs; i++) {
		select.options[select.options.length] = new Option( i < 10 ? "0" + i : i, i);
		
	}
}
hoursMenu3();

function hoursMenu4(){

	var select = document.getElementById('alarmhrs4');
	var hrs = 12

	for (i=1; i <= hrs; i++) {
		select.options[select.options.length] = new Option( i < 10 ? "0" + i : i, i);
		
	}
}
hoursMenu4();


function minMenu(){

	var select = document.getElementById('alarmmins');
	var min = 59;

	for (i=0; i <= min; i++) {
		select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
	}
}
minMenu();

function minMenu2(){

	var select = document.getElementById('alarmmins2');
	var min = 59;

	for (i=0; i <= min; i++) {
		select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
	}
}
minMenu2();

function minMenu3(){

	var select = document.getElementById('alarmmins3');
	var min = 59;

	for (i=0; i <= min; i++) {
		select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
	}
}
minMenu3();

function minMenu4(){

	var select = document.getElementById('alarmmins4');
	var min = 59;

	for (i=0; i <= min; i++) {
		select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
	}
}
minMenu4();

function secMenu(){

	var select = document.getElementById('alarmsecs');
	var sec = 59;

	for (i=0; i <= sec; i++) {
		select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
	}
}
secMenu();

function secMenu2(){

	var select = document.getElementById('alarmsecs2');
	var sec = 59;

	for (i=0; i <= sec; i++) {
		select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
	}
}
secMenu2();

function secMenu3(){

	var select = document.getElementById('alarmsecs3');
	var sec = 59;

	for (i=0; i <= sec; i++) {
		select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
	}
}
secMenu3();

function secMenu4(){

	var select = document.getElementById('alarmsecs4');
	var sec = 59;

	for (i=0; i <= sec; i++) {
		select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
	}
}
secMenu4();


function alarmSet() {

	var hr = document.getElementById('alarmhrs');
	
	var min = document.getElementById('alarmmins');
	
	var sec = document.getElementById('alarmsecs');
	
	var ap = document.getElementById('ampm');
    

    var selectedHour = hr.options[hr.selectedIndex].value;
    var selectedMin = min.options[min.selectedIndex].value;
    var selectedSec = sec.options[sec.selectedIndex].value;
    var selectedAP = ap.options[ap.selectedIndex].value;

    var alarmTime = addZero(selectedHour) + ":" + addZero(selectedMin) + ":" + addZero(selectedSec) + ":"+ selectedAP;
    console.log('alarmTime:' + alarmTime);
    console.log('currentTime:' + currentTime);

    document.getElementById('alarmhrs').disabled = true;
	document.getElementById('alarmmins').disabled = true;
	document.getElementById('alarmsecs').disabled = true;
	document.getElementById('ampm').disabled = true;


	var h2 = document.getElementById('clock');


setInterval(function(){

	var date = new Date();
	
	var hours = ((date.getHours())-12);
    var hours2 = (date.getHours());

	
	var minutes = date.getMinutes();
	
	var seconds = date.getSeconds();
	
	var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';



	if (hours < 0) {

        hours = hours2;
	} else if (hours == 00) {
		hours = 12;
	} else {
		hours = hours;
	}

	
    var currentTime = h2.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + ":" + ampm;
	
	if (alarmTime == currentTime) {

		var closetab = window.open('http://YourGeekTeches_IP/30000/45', '_blank');

			setTimeout(function(){
    			closetab.close();},2000);
				alarmSet();
		}

  },1000);



}


function alarmClear() {

	document.getElementById('alarmhrs').disabled = false;
	document.getElementById('alarmmins').disabled = false;
	document.getElementById('alarmsecs').disabled = false;
	document.getElementById('ampm').disabled = false;
	sound.pause();
}


function alarmSet2() {

	var hr = document.getElementById('alarmhrs2');
	
	var min = document.getElementById('alarmmins2');
	
	var sec = document.getElementById('alarmsecs2');
	
	var ap = document.getElementById('ampm2');
    

    var selectedHour = hr.options[hr.selectedIndex].value;
    var selectedMin = min.options[min.selectedIndex].value;
    var selectedSec = sec.options[sec.selectedIndex].value;
    var selectedAP = ap.options[ap.selectedIndex].value;

    var alarmTime2 = addZero(selectedHour) + ":" + addZero(selectedMin) + ":" + addZero(selectedSec) + ":" + selectedAP;
    console.log('alarmTime2:' + alarmTime2);

    document.getElementById('alarmhrs2').disabled = true;
	document.getElementById('alarmmins2').disabled = true;
	document.getElementById('alarmsecs2').disabled = true;
	document.getElementById('ampm2').disabled = true;



	var h2 = document.getElementById('clock');


setInterval(function(){

	var date2 = new Date();
	
	var hours2 = ((date2.getHours())-12);
    var hours22 = (date2.getHours());

	
	var minutes2 = date2.getMinutes();
	
	var seconds2 = date2.getSeconds();
	
	var ampm2 = (date2.getHours()) < 12 ? 'AM' : 'PM';


	if (hours2 < 0) {

        hours2 = hours22;
	} else if (hours2 == 00) {
		hours2 = 12;
	} else {
		hours2 = hours2;
	}
    var currentTime2 = (h2.textContent = addZero(hours2) + ":" + addZero(minutes2) + ":" + addZero(seconds2) + ":" + ampm2);
	if (alarmTime2 == currentTime2) {

			var closetab2 = window.open('http://YourGeekTeches_IP/30000/44', '_blank');

			setTimeout(function(){
    			closetab2.close();},2000);
				alarmSet2();
	
		}

  },1000);

	

}


function alarmClear2() {

	document.getElementById('alarmhrs2').disabled = false;
	document.getElementById('alarmmins2').disabled = false;
	document.getElementById('alarmsecs2').disabled = false;
	document.getElementById('ampm2').disabled = false;
	sound.pause();
}


function alarmSet3() {

	var hr = document.getElementById('alarmhrs3');
	
	var min = document.getElementById('alarmmins3');
	
	var sec = document.getElementById('alarmsecs3');
	
	var ap = document.getElementById('ampm3');
    

    var selectedHour = hr.options[hr.selectedIndex].value;
    var selectedMin = min.options[min.selectedIndex].value;
    var selectedSec = sec.options[sec.selectedIndex].value;
    var selectedAP = ap.options[ap.selectedIndex].value;

    var alarmTime3 = addZero(selectedHour) + ":" + addZero(selectedMin) + ":" + addZero(selectedSec) + ":" + selectedAP;
    console.log('alarmTime3:' + alarmTime3);

    document.getElementById('alarmhrs3').disabled = true;
	document.getElementById('alarmmins3').disabled = true;
	document.getElementById('alarmsecs3').disabled = true;
	document.getElementById('ampm3').disabled = true;



	var h2 = document.getElementById('clock');


setInterval(function(){

	var date2 = new Date();
	
	var hours2 = ((date2.getHours())-12);
    var hours22 = (date2.getHours());

	
	var minutes2 = date2.getMinutes();
	
	var seconds2 = date2.getSeconds();
	
	var ampm2 = (date2.getHours()) < 12 ? 'AM' : 'PM';


	//convert military time to standard time

	if (hours2 < 0) {

        hours2 = hours22;
	} else if (hours2 == 00) {
		hours2 = 12;
	} else {
		hours2 = hours2;
	}
    var currentTime3 = (h2.textContent = addZero(hours2) + ":" + addZero(minutes2) + ":" + addZero(seconds2) + ":" + ampm2);
	if (alarmTime3 == currentTime3) {

			var closetab2 = window.open('http://YourGeekTeches_IP/30000/01', '_blank');

			setTimeout(function(){
    			closetab2.close();},2000);
				alarmSet3();
	
		}

  },1000);


}


function alarmClear3() {

	document.getElementById('alarmhrs3').disabled = false;
	document.getElementById('alarmmins3').disabled = false;
	document.getElementById('alarmsecs3').disabled = false;
	document.getElementById('ampm3').disabled = false;
	sound.pause();
}

function alarmSet4() {

	var hr = document.getElementById('alarmhrs4');
	
	var min = document.getElementById('alarmmins4');
	
	var sec = document.getElementById('alarmsecs4');
	
	var ap = document.getElementById('ampm4');
    

    var selectedHour = hr.options[hr.selectedIndex].value;
    var selectedMin = min.options[min.selectedIndex].value;
    var selectedSec = sec.options[sec.selectedIndex].value;
    var selectedAP = ap.options[ap.selectedIndex].value;

    var alarmTime4 = addZero(selectedHour) + ":" + addZero(selectedMin) + ":" + addZero(selectedSec) + ":" + selectedAP;
    console.log('alarmTime4:' + alarmTime4);

    document.getElementById('alarmhrs4').disabled = true;
	document.getElementById('alarmmins4').disabled = true;
	document.getElementById('alarmsecs4').disabled = true;
	document.getElementById('ampm4').disabled = true;


	var h2 = document.getElementById('clock');


setInterval(function(){

	var date2 = new Date();
	
	var hours2 = ((date2.getHours())-12);
    var hours22 = (date2.getHours());

	
	var minutes2 = date2.getMinutes();
	
	var seconds2 = date2.getSeconds();
	
	var ampm2 = (date2.getHours()) < 12 ? 'AM' : 'PM';


	if (hours2 < 0) {

        hours2 = hours22;
	} else if (hours2 == 00) {
		hours2 = 12;
	} else {
		hours2 = hours2;
	}
    var currentTime4 = (h2.textContent = addZero(hours2) + ":" + addZero(minutes2) + ":" + addZero(seconds2) + ":" + ampm2);
	if (alarmTime4 == currentTime4) {

			var closetab = window.open('YourGeekTeches_IP/30000/00', '_blank');

			setTimeout(function(){
    			closetab.close();},2000);
				alarmSet4();
	
		}

  },1000);
	

}


function alarmClear4() {

	document.getElementById('alarmhrs4').disabled = false;
	document.getElementById('alarmmins4').disabled = false;
	document.getElementById('alarmsecs4').disabled = false;
	document.getElementById('ampm4').disabled = false;
	sound.pause();
}

//Love and respect from Cecilio :)
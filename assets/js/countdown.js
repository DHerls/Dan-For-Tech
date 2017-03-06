	function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function updateTimer(){
	if (beforeTHON){
		t = getTimeRemaining(start2018);
		if (t.total <= 0){
			beforeTHON = false;
			clockSetup(false)
		}
	} else if (!afterTHON){
		t = getTimeRemaining(end2018);
		if (t.total <= 0){
			afterTHON = true;
			clockSetup(false)
		}
	} else {
		t = getTimeRemaining(start2019);
	}
	daysSpan.innerHTML = t.days
	hoursSpan.innerHTML = t.hours
	minutesSpan.innerHTML = t.minutes
	secondsSpan.innerHTML = t.seconds
}

function clockSetup(firstTime) {
	var html =  "<div id=\"clockdiv\"><h1>";
	html += (beforeTHON || afterTHON ? "COUNTDOWN TO THON" : "HOURS LEFT IN THON");
	html +="</h1><div><span class=\"days\"></span><div class=\"smalltext\">Days</div></div><div><span class=\"hours\"></span><div class=\"smalltext\">Hours</div></div><div><span class=\"mins\"></span><div class=\"smalltext\">Minutes</div></div><div><span class=\"secs\"></span><div class=\"smalltext\">Seconds</div>  </div></div>";
	if (firstTime){
		document.getElementById('countdown').innerHTML = html;
	} else {
		clock.innerHTML = html;
	}
	clock = document.getElementById("clockdiv");
	daysSpan = clock.querySelector('.days');
	hoursSpan = clock.querySelector('.hours');
	minutesSpan = clock.querySelector('.mins');
	secondsSpan = clock.querySelector('.secs');
}
		
var start2018 = "February 16, 2018 6:00 PM GMT-0500";
var end2018 = "February 18, 2017 4:00 PM GMT-0500"
var start2019 = "February 15, 2018 6:00 PM GMT-0500";

var beforeTHON = getTimeRemaining(start2018).total >= 0;
var afterTHON = !beforeTHON && getTimeRemaining(end2018).total <= 0;

var clock;
var daysSpan;
var hoursSpan;
var minutesSpan;
var secondsSpan;

clockSetup(true);

updateTimer();
setInterval(updateTimer, 1000);
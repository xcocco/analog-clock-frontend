setInterval(updateClock, 1000);

function updateClock()
{
	let time = new Date();
	let hourDeg = 30 * (time.getHours() % 12) + 0.00833 * time.getMinutes() * 60;
	let minDeg = 6 * time.getMinutes();
	let secDeg = 6 * time.getSeconds();
	
	changeHour(hourDeg);
	changeMin(minDeg);
	changeSec(secDeg);
}

function changeHour(deg)
{
	const a = document.getElementsByClassName("hour");
	
	for(let x of a)
		x.style.transform = "translateY(-50%) rotate(" + deg + "deg)";
}

function changeMin(deg)
{
	const a = document.getElementsByClassName("min");
	
	for(let x of a)
		x.style.transform = "translateY(-50%) rotate(" + deg + "deg)";
}

function changeSec(deg)
{
	const a = document.getElementsByClassName("sec");
	
	for(let x of a)
		x.style.transform = "translateY(-50%) rotate(" + deg + "deg)";
}
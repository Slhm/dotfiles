//node this. its supposed to be ran in a console, not a browser

var i = 1;
var ar = 	[ "\\", "|", "/", "-"];
var ar2 = ["/", "|", "\\", "-"];
var r1 = 0;
var r2 = 0;
var r1St = "";
var r2St = "";
var rand = 0;
var rOne = false;

function a(){

	console.clear();
	rand = Math.random();
	if(rand > 0.5){
		r1++;
		rOne = true;
	}else{
		r2++;
		rOne = false;
	}

	console.log("r1: " + r1 + " r2: " + r2);
	console.log("rOne: " + rOne);
	console.log(Math.random());

	if(rOne) r1St += " ";
	console.log(r1St + "  " + ar2[i % 4]);
	console.log(r1St + "|¯¯¯\\");
	console.log(r1St + "|___/");
	console.log(r1St + "  " + ar[i % 4]);

	if(!rOne) r2St += " ";
	console.log(r2St + "  " + ar2[i % 4]);
	console.log(r2St + "|¯¯¯\\");
	console.log(r2St + "|___/");
	console.log(r2St + "  " + ar[i % 4]);

	i++;
	if(r1 < 20 && r2 < 20){
 		if(i % 4 !== 3) setTimeout(a,150);
		else setTimeout(a, 300);
	}else{
		console.log(r1 > r2 ? "rowboatLmao1 won lmao" : "rowboatLmao2 won lol");
	}
}
a();

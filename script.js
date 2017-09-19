var numOfClicksTiger=0,
	numOfClicksLeopard=0,
	image1Name = "Tiger",
	image2Name = "Leopard";

document.getElementById("subHeader1").innerHTML=image1NameName;
document.getElementById("subHeader2").innerHTML=image2Name;

$("#tiger").click(function() {
	numOfClicksTiger += 1;
    document.getElementById("numClicksTiger").innerHTML=numOfClicksTiger;
});

$("#leopard").click(function() {
	numOfClicksLeopard += 1;
    document.getElementById("numClicksLeopard").innerHTML=numOfClicksLeopard;
});
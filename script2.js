// Model
const cats= {
	"cats" : [
		{
			"name" : "Tiger",
			"image" : "images/tiger.jpg",
			"counter" : 0
		},

		{
			"name" : "Leopard",
			"image" : "images/leopard.jpg",
			"counter" : 0
		},

		{
			"name" : "Cheetah",
			"image" : "images/cheetah.jpg",
			"counter" : 0
		},

		{
			"name" : "Panther",
			"image" : "images/panther.jpg",
			"counter" : 0
		},

		{
			"name" : "Lynx",
			"image" : "images/lynx.jpg",
			"counter" : 0
		}
	]
};

// Octopus

var thisCat

function whichCat(id) {
	for (var i = 0; i < cats.cats.length; i++) {
		if (("nav" + cats.cats[i].name) === id) {
			return(i);
		}
	}
};

function displayImgContainer(cat) {
	var formattedNavItem,
		formattedHeader = imgContainerHeader.replace("%name%", cats.cats[cat].name).replace("%name2%", cats.cats[cat].name),
		formattedPicture = imgContainerPicture.replace("%name%", cats.cats[cat].name).replace("%name2%", cats.cats[cat].name).replace("%img%", cats.cats[cat].image),
		formattedNumClicks = imgContainerNumClicks.replace("%name%", cats.cats[cat].name).replace("%num%", cats.cats[cat].counter);

		document.getElementById("imgContainer").innerHTML="";

		$("#imgContainer").append(formattedHeader);
		$("#imgContainer").append(formattedPicture);
		$("#imgContainer").append(formattedNumClicks);
};

function addClicks (id) {
	var clickedID,
		clickedCounter;
	thisCat = whichCat("nav" + id);

	clickedID = cats.cats[thisCat].name,
	clickedCounter = cats.cats[thisCat].counter;
	clickedCounter += 1;
	cats.cats[thisCat].counter = clickedCounter;

	document.getElementById("numClicks" + clickedID).innerHTML = clickedCounter;
}

function init() {
	for (var i = 0; i < cats.cats.length; i++) {
		formattedNavName = navBarItem.replace("%name%", cats.cats[i].name).replace("%name2%", cats.cats[i].name);
		$(".navItems").append(formattedNavName);
	}

	displayImgContainer(0);
};


function displayCat(id) {
	thisCat = whichCat(id);
	
	displayImgContainer(thisCat);
};

function showHideAdmin() {
	$("#nameInput").val("");
	$("#urlInput").val("");
	$("#clicksInput").val("");

	$(".form").toggle()
};

function saveAdmin(id) {
	thisCat = whichCat(id);

	if ($("#nameInput").val() !== undefined) {
		cats.cats[thisCat].name = $("#nameInput").val();
	}

	if ($("#nameInput").val() !== undefined) {
		cats.cats[thisCat].image = $("#urlInput").val();
	}

	if ($("#nameInput").val() !== undefined) {
		var value = $("#clicksInput").val()
		cats.cats[thisCat].counter = parseInt(value);
	}

	document.getElementById(id).innerHTML = $("#nameInput").val();
	$("#" + id).attr("id", "nav" + cats.cats[thisCat].name);
	displayImgContainer(thisCat);
	showHideAdmin();
};

// View

init();

$(".navButton").click(function() {
	var thisID = this.id;
	displayCat(thisID);
});

$("#admin").click(function() {
	showHideAdmin();
});

$("#cancel").click(function() {
	showHideAdmin();
});

$("#save").click(function() {
	thisCat = ("nav" + $("img").attr("id"));
	saveAdmin(thisCat);
});





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
function onLoad() {
	for (var i = 0; i < cats.cats.length; i++) {
		formattedNavName = navBarItem.replace("%name%", cats.cats[i].name).replace("%name2%", cats.cats[i].name);
		$(".navItems").append(formattedNavName);
	}

	displayImgContainer(0);
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

function displayCat(id) {
	console.log("button clicked");
	for (var i = 0; i < cats.cats.length; i++) {
		if (cats.cats[i].name === id) {
			displayImgContainer(i);
		}
	}
};

function addClicks (id) {
	var clickedID,
		clickedCounter;

	for (var i = 0; i < cats.cats.length; i++) {
		if (cats.cats[i].name === id) {
			clickedID = cats.cats[i].name,
			clickedCounter = cats.cats[i].counter;
			clickedCounter += 1;
			cats.cats[i].counter = clickedCounter;
		}
	}

	document.getElementById("numClicks" + clickedID).innerHTML = clickedCounter;
}

onLoad();


//creates objects and fills in data for each person
function Stats(i) {
    this.name = String(document.getElementsByClassName('sortableTeamName')[i].childNodes[0].title);
    this.r = Number(document.getElementsByClassName('sortableStat20')[i].innerHTML);
	this.rbi = Number(document.getElementsByClassName('sortableStat21')[i].innerHTML);
	this.rc = Number(document.getElementsByClassName('sortableStat19')[i].innerHTML);
	this.sb = Number(document.getElementsByClassName('sortableStat23')[i].innerHTML);
	this.obp = Number(document.getElementsByClassName('sortableStat17')[i].innerHTML);
	this.slg = Number(document.getElementsByClassName('sortableStat9')[i].innerHTML);
	this.k = Number(document.getElementsByClassName('sortableStat48')[i].innerHTML);
	this.qs = Number(document.getElementsByClassName('sortableStat63')[i].innerHTML);
	this.era = Number(document.getElementsByClassName('sortableStat47')[i].innerHTML);
	this.whip = Number(document.getElementsByClassName('sortableStat41')[i].innerHTML);
	this.kbb = Number(document.getElementsByClassName('sortableStat82')[i].innerHTML);
	this.svhd = Number(document.getElementsByClassName('sortableStat83')[i].innerHTML);
	this.id = String(document.getElementsByClassName('sortableRank')[i].id);
	//this matches each person's key values to the sorted array and creates an array with the roto values
	this.findRoto = function () { var teamstats = [this.name,this.r,this.rbi,this.rc,this.sb,this.obp,this.slg,this.k,this.qs,this.era,this.whip,this.kbb,this.svhd,this.id];
						for (var i=1;i<13;i++){
 							for(var x=11;x>=0;x--){
								if (teamstats[i] == stats[i][x]) {
									teamstats[i] = x+1;
									}}}
						var rotoTotal = 0;
						for (var i=1;i<13;i++){
							if (Number.isInteger(teamstats[i])) {
								rotoTotal += teamstats[i];
								}}
						return [teamstats,rotoTotal];
						}
};

//this is the part that actually creates the arrays
var allStats = new Array();
for (var i=0;i<12;i++){
	allStats[i] = new Stats(i);
	};


//makes an array of arrays for the sorting part
stats = [];

for(var i=0;i<14;i++){
	stats[i] = [];
	}


//fills in the arrays with the data from the page. each subarray refers to a stat, not a team (e.g., all rbi totals are listed in one array)

for(i=0;i<12;i++){
	stats[0][i] = document.getElementsByClassName('sortableTeamName')[i].childNodes[0].title;
	stats[1][i] = Number(document.getElementsByClassName('sortableStat20')[i].innerHTML);
	stats[2][i] = Number(document.getElementsByClassName('sortableStat21')[i].innerHTML);
	stats[3][i] = Number(document.getElementsByClassName('sortableStat19')[i].innerHTML);
	stats[4][i] = Number(document.getElementsByClassName('sortableStat23')[i].innerHTML);
	stats[5][i] = Number(document.getElementsByClassName('sortableStat17')[i].innerHTML);
	stats[6][i] = Number(document.getElementsByClassName('sortableStat9')[i].innerHTML);
	stats[7][i] = Number(document.getElementsByClassName('sortableStat48')[i].innerHTML);
	stats[8][i] = Number(document.getElementsByClassName('sortableStat63')[i].innerHTML);
	stats[9][i] = Number(document.getElementsByClassName('sortableStat47')[i].innerHTML);
	stats[10][i] = Number(document.getElementsByClassName('sortableStat41')[i].innerHTML);
	stats[11][i] = Number(document.getElementsByClassName('sortableStat82')[i].innerHTML);
	stats[12][i] = Number(document.getElementsByClassName('sortableStat83')[i].innerHTML);
	stats[13][i] = document.getElementsByClassName('sortableRank')[i].id;
	}


//sorts the subarrays, making sure that era and whip are in reverse order because lower is better
for(var i=1;i<13;i++){
	if (i == 9 || i == 10){
		stats[i].sort(function(a, b){return b-a});
		}
	else {
		stats[i].sort(function(a, b){return a-b});
		}
	}


//runs findRoto method for all of the objects-- creates arrays with values replaced by roto score, then adds up rotoscore
var rotoStats = []
var rotoSum = []

for (var i=0;i<12;i++){
	rotoStats[i] = allStats[i].findRoto();
	rotoSum[i] = rotoStats[i][1];
	};


//create button to see rotoscores (yes, I'm aware there's a more sophisticated way to do this than adding all of the button details separately)
var button = document.createElement('button');
button.innerHTML = "See Roto Scores";
button.type = "button";
button.id = "seeRotoButton";

var element = document.getElementsByClassName("games-fullcol games-fullcol-extramargin")[0];
var child = document.getElementById("statsTable");
element.insertBefore(button,child);

document.getElementById('seeRotoButton').addEventListener('click', seeRoto);


function seeRoto() {
for(i=0;i<12;i++){
	document.getElementsByClassName('sortableTeamName')[i].childNodes[0].title[i][0][0];
	document.getElementsByClassName('sortableStat20')[i].innerHTML = rotoStats[i][0][1];
	document.getElementsByClassName('sortableStat21')[i].innerHTML = rotoStats[i][0][2];
	document.getElementsByClassName('sortableStat19')[i].innerHTML = rotoStats[i][0][3];
	document.getElementsByClassName('sortableStat23')[i].innerHTML = rotoStats[i][0][4];
	document.getElementsByClassName('sortableStat17')[i].innerHTML = rotoStats[i][0][5];
	document.getElementsByClassName('sortableStat9')[i].innerHTML = rotoStats[i][0][6];
	document.getElementsByClassName('sortableStat48')[i].innerHTML = rotoStats[i][0][7];
	document.getElementsByClassName('sortableStat63')[i].innerHTML = rotoStats[i][0][8];
	document.getElementsByClassName('sortableStat47')[i].innerHTML = rotoStats[i][0][9];
	document.getElementsByClassName('sortableStat41')[i].innerHTML = rotoStats[i][0][10];
	document.getElementsByClassName('sortableStat82')[i].innerHTML = rotoStats[i][0][11];
	document.getElementsByClassName('sortableStat83')[i].innerHTML = rotoStats[i][0][12];
	document.getElementsByClassName('sortableRank')[i].innerHTML = rotoStats[i][1];
	}
	}

//need to write it so button switches back to real values upon second click, also things get messed up if someone reorders the rows before clicking the see rotoscores button



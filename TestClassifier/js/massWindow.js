var massMenuSustatment = {
    "Time" : {
      "time":{
        "timePosition": 'H',
        "timeValue": 0,
      },
      "mass":{
        "massPosition": 'T',
		'massPercent': 0,
      }
    },
    "Mass": {
      "mainFraction": 0,
      "suitableFraction": 0,
	  'weedFraction': 0
    },
}


// версия с меню вне протокола
function viewWindow(){
	var window = document.getElementById('CalcWindow');
	window.style.display = window.style.display == 'none' ? 'flex' : 'none';
}

function setMassMenuSustatment(){
	massMenuSustatment.Mass.mainFraction = mainFractionInput.value;
	massMenuSustatment.Mass.suitableFraction = suitableFractionInput.value;
	massMenuSustatment.Mass.weedFraction = weedFractionInput.value;
	massMenuSustatment.Time.time.timePosition = timeSelector.value;
	massMenuSustatment.Time.time.timeValue = timeInput.value;
	massMenuSustatment.Time.mass.massPosition = massSelector.value;
	massMenuSustatment.Time.mass.massPercent = ((Number(suitableFractionInput.value) / Number(mainFractionInput.value)) * 100).toFixed(3);
}

function calculateMassForProt(){
	var massMain = 0;
	var massSuit = 0;
	var time = 0;
	var outputStart = document.getElementById('outputStart_'+ProtocolPage+'_P');
	var outputGood = document.getElementById('outputGood_'+ProtocolPage+'_P');
	var percentGood = document.getElementById('percentGood_'+ProtocolPage+'_P');
	// считаем массу
	switch(massMenuSustatment.Time.mass.massPosition){
		case'GR':
			massMain = massMenuSustatment.Mass.mainFraction / (1000*1000);
			massSuit = massMenuSustatment.Mass.suitableFraction / (1000*1000);
			break;
		case'KG':
			massMain = massMenuSustatment.Mass.mainFraction / 1000;
			massSuit = massMenuSustatment.Mass.suitableFraction / 1000;
			break;
		case'T':
			massMain = massMenuSustatment.Mass.mainFraction;
			massSuit = massMenuSustatment.Mass.suitableFraction;
			break;
	}
	// считаем время
	switch(massMenuSustatment.Time.time.timePosition){
		case'M':
			time = 60 / massMenuSustatment.Time.time.timeValue;
			outputStart.value = (massMain * time).toFixed(6);
			outputGood.value = (massSuit * time).toFixed(6);

			break;
		case'H':
			time = massMenuSustatment.Time.time.timeValue;
			outputStart.value = (massMain / time).toFixed(6);
			outputGood.value = (massSuit / time).toFixed(6);
			break;
	}
	percentGood.value = massMenuSustatment.Time.mass.massPercent;
}


// версия с меню внутри протокола
function viewMenu(){
	var main = document.getElementById('defaultUnit_'+ProtocolPage+'_P');
	var cheeck = main.children[2].children[0].children[1];
	var menu1 = main.children[2].children[1];
	var menu2 = main.children[2].children[2];
	menu1.style.display = menu1.style.display == 'none' ? 'flex' : 'none';
	menu2.style.display = menu2.style.display == 'none' ? 'flex' : 'none';
	cheeck.style.transform = cheeck.style.transform == "rotate(180deg)" ? "rotate(0deg)": "rotate(180deg)";
}
function setMassMenuSustatment2(){
	var mainFractionInput = document.getElementById('mainFractionInput_'+ ProtocolPage);
	var suitableFractionInput = document.getElementById('suitableFractionInput_'+ ProtocolPage);
	var weedFractionInput = document.getElementById('weedFractionInput_'+ ProtocolPage);
	var timeInput = document.getElementById('timeInput_'+ ProtocolPage);
	massMenuSustatment.Mass.mainFraction = mainFractionInput.value;
	massMenuSustatment.Mass.suitableFraction = suitableFractionInput.value;
	massMenuSustatment.Mass.weedFraction = weedFractionInput.value;
	massMenuSustatment.Time.time.timeValue = timeInput.value;
	massMenuSustatment.Time.mass.massPercent = ((Number(suitableFractionInput.value) / Number(mainFractionInput.value)) * 100).toFixed(3);
}
function setMassAndTime(obj){
	var main = obj.parentNode.parentNode;		
	if (obj.style.backgroundColor != "") {
		for (var i = 0; i < main.children.length; i++) {
			main.children[i].style.display = "";
			obj.style.backgroundColor = "";
		}
	}
	else {
		for (var i = 0; i < main.children.length; i++) {
			main.children[i].style.display = "none";
		}
		obj.parentNode.style.display = "";
		obj.style.backgroundColor = "#ffb23f";

		switch(main.id.split('_')[0]){
			case'massSelector':
				massMenuSustatment.Time.mass.massPosition = obj.getAttribute('objectvalue');
				break;
			case'timeSelector':
				massMenuSustatment.Time.time.timePosition = obj.getAttribute('objectvalue');
				break;
		}
	}
}

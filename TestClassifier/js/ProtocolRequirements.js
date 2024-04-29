/*prime*/
var pageProtocolRow = [];
var ProtocolPage = 1;
var pageProtocolSustatement = [];
var token = false;
var ValueTime = 1;

/*Функция замеы элемента в строке по индексу*/
String.prototype.replaceAt = function(index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}


function setupProtocoVersion(){
	var le = pageProtocolSustatement.length-1;
	if(pageProtocolSustatement.length < pageProtocolRow.length){
		for(var z = 0; z <pageProtocolRow.length; z++){

			pageProtocolSustatement.push({'Protocol': [],});

			for(var k = 0; k <pageProtocolRow[ProtocolPage-1].pageSortRow.length; k++){
				pageProtocolSustatement[z].Protocol.push({
					'componentName': '',
					'protocolMass':'',
					'RowPercent':[],
				})
				for(var i = 0; i <pageProtocolRow[ProtocolPage-1].ProtocolRow.length; i++){
					pageProtocolSustatement[z].Protocol[k].RowPercent.push({'percent':'',});
				}
			}
		}
		token = true;
	}
	else{
		var numb = pageProtocolRow[ProtocolPage-1].pageSortRow.length - pageProtocolSustatement[ProtocolPage-1].Protocol.length;
		if(numb != 0 && numb > 0){
			for(var k = 1; k <pageProtocolRow[ProtocolPage-1].pageSortRow.length; k++){
				pageProtocolSustatement[le].Protocol.push({
					'componentName': '',
					'protocolMass':'',
					'RowPercent':[],
				})
				for(var i = 0; i <pageProtocolRow[ProtocolPage-1].ProtocolRow.length; i++){
					pageProtocolSustatement[le].Protocol[pageProtocolSustatement[le].Protocol.length-1].RowPercent.push({'percent':'',});
				}
			}			
		}
		if(pageProtocolSustatement.length != 0 && pageProtocolRow[ProtocolPage-1].ProtocolRow.length > 2){
			for(var v = 0; v < pageProtocolRow.length; v++){
				for(var k = 0; k <pageProtocolRow[ProtocolPage-1].pageSortRow.length; k++){
					if(pageProtocolRow[ProtocolPage-1].ProtocolRow.length != pageProtocolSustatement[v].Protocol[k].RowPercent.length){
						pageProtocolSustatement[v].Protocol[k].RowPercent.push({
							'percent':'',
						})
					}
				}
			}
		}
	}	
	
}
function setupProtocolRow(){
  pageProtocolRow.push({
    "requirementsTable" : {
      "mainFractionData":{
        "purity": 0.00,
        "mass": 1.000,
        "percent_exit": 100.00,
		"custom": '',
		"Fake": ''
      },
      "suitableFraction":{
        "purity": 0.00,
        "mass": 1.000,
        "percent_exit": 100.00,
		"custom": '',
		"Fake": ''
      },
      "weedFraction":{
        "purity": 0.00,
        "mass": 0.000,
        "percent_exit": 0.00,
		"custom": '',
		"Fake": ''
      }  
      /*
      //Пригодиться для большего числа фракций
      "otherFraction": [],
      */
    },
    "Sustatment": {
      "ColumnState": ["active","lock","lock"],
      "DefaultUnit": "percent",
	  'MassValue': 'T/H',
	  "TitleTable":{
		"userManagerName": '0',
		"createDateProtocol": '0'
	  }
    },
	"mainFractionParent":[],
    "ProtocolRow": [],
	"pageSortRow":[],
	'economicRowDataProt':{
		'elements':[],
		"Additiona":{
			"HourDay":8,
			"DayWeek":5
		}
	},
	"explainPage":[],
	'photoContainer':{
		'FractionData':{
			"mainFraction":[],
			"suitableFraction":[],
			"weedFraction":[]
		},
		'rowsFraction':[]
	}
  });
}

function setupPhotosProtRow(pageID){
	pageProtocolRow[pageID].photoContainer.rowsFraction.push({
		'photoData':[]
	});
}
function setupPhotoProtData(pageID,idRow){
	pageProtocolRow[pageID].photoContainer.rowsFraction[idRow].photoData.push({
		'photoName':null
	});
}
function generateProtocolRow(pageID){
	pageProtocolRow[pageID].ProtocolRow.push({
	"component_name": "component_name",
	"mainFractionData":{
		"calcToggle": true,
		"impToggle": false,
		"acceptRejectToggle":  pageProtocolRow[pageID].ProtocolRow.length == 0 ? true : false,
		"selectUnitOption": null,
		"unitOption":{
		"percent":  pageProtocolRow[pageID].ProtocolRow.length == 0 ? 100.0 : 0.00,
		"gram": 0.0,
		"pieces": 0.0,
		"pieces_kg": 0.0,
		"ppm": 0.0
		},
		"hingeMass":  pageProtocolRow[pageID].ProtocolRow[0] != null ?  pageProtocolRow[pageID].ProtocolRow[0].mainFractionData.hingeMass : 100.00,
		"pieces_1000": 100.00
	},
	"suitableFractionData":{
		"calcToggle": true,
		"impToggle": false,
		"acceptRejectToggle": true,
		"selectUnitOption": null,
		"unitOption":{
		"percent":  pageProtocolRow[pageID].ProtocolRow.length == 0 ? true : false,
		"gram": 0.0,
		"pieces": 0.0,
		"pieces_kg": 0.0,
		"ppm": 0.0
		//"iterfraction_percent": 0.0
		},
		"hingeMass":  pageProtocolRow[pageID].ProtocolRow[0] != null ?  pageProtocolRow[pageID].ProtocolRow[0].suitableFractionData.hingeMass : 100.00,
		"pieces_1000": 100.000
	},
	"weedFractionData":{
		"calcToggle": true,
		"impToggle": false,
		"acceptRejectToggle":  pageProtocolRow[pageID].ProtocolRow.length == 0 ? true : false,
		"selectUnitOption": null,
		"unitOption":{
		"percent":  pageProtocolRow[pageID].ProtocolRow.length == 1 ? 100.0 : 0.00,
		"gram": 0.0,
		"pieces": 0.0,
		"pieces_kg": 0.0,
		"ppm": 0.0
		//"iterfraction_percent": 0.0
		},
		"hingeMass":  pageProtocolRow[pageID].ProtocolRow[0] != null ?  pageProtocolRow[pageID].ProtocolRow[0].weedFractionData.hingeMass : 100.00,
		"pieces_1000": 100.00
	},
	"SearchProductResult":[],
	});
}
// смена отображения элементов
function ShowUpsertDropdownProtocol(elementID, idRow){
	return function e(){
		var element = document.getElementById(elementID);
		var parent = element.parentNode.parentNode.parentNode;

		if(parent.children[0].style.width != '188px'){
			if(parent.id.split('_')[1] == '1'){
	 			var input = document.getElementById('massInput_' + parent.id.split('_')[1] +'_1' + '_' + idRow + '_' + 'P');
				input.click();
				var massInputElement = document.getElementById(input.id);
				var main = massInputElement.parentNode.parentNode;
				var massInputResultBlockEl = main.children[1];
				var massInputBlockEl = main.children[0];
				var moreTitleEl = main.children[2];
				var massDropdownEl = main.children[3].children[0];

				massInputResultBlockEl.style.display = "flex";
				massInputBlockEl.style.display = "none";		
				massDropdownEl.style.display = "none";
				moreTitleEl.style.display = "none";			
			}
			else{
				var input = document.getElementById('massInput_' + parent.id.split('_')[1] +'_1' + '_' + idRow + '_' + 'P');
				input.click();
				var massInputElement = document.getElementById(input.id);
				var main = massInputElement.parentNode.parentNode;
				var massInputResultBlockEl = main.children[1];
				var massInputBlockEl = main.children[0];
				var moreTitleEl = main.children[2];
				var massDropdownEl = main.children[3].children[0];

				massInputResultBlockEl.style.display = "flex";
				massInputBlockEl.style.display = "none";		
				massDropdownEl.style.display = "none";
				moreTitleEl.style.display = "none";
			}	
		}	
		element.focus();
		element.readOnly = false;
		if(element.id == "outputStart_" + idRow + '_' + 'P'){
			document.getElementById("outputStartButton_" + idRow + '_' + 'P').style.display = "flex";
			document.getElementById("outputGoodButton_" + idRow + '_' + 'P').style.display = "none";
			document.getElementById("outputTrashButton_" + idRow + '_' + 'P').style.display = "none";
			document.getElementById("percentGoodButton_" + idRow + '_' + 'P').style.display = "none";
			document.getElementById("percentTrashButton_" + idRow + '_' + 'P').style.display = "none";
		}else if (element.id == "outputGood_" + idRow + '_' + 'P'){
			document.getElementById("outputGoodButton_" + idRow + '_' + 'P').style.display = "flex";
			document.getElementById("outputStartButton_" + idRow + '_' + 'P').style.display = "none";
			document.getElementById("outputTrashButton_" + idRow + '_' + 'P').style.display = "none";
			document.getElementById("percentGoodButton_" + idRow + '_' + 'P').style.display = "none";
			document.getElementById("percentTrashButton_" + idRow + '_' + 'P').style.display = "none";
			document.getElementById("lockBlock_" + idRow + '_' + 'P').style.display = "flex";
		}else if (element.id == "outputTrash_" + idRow + '_' + 'P'){
			document.getElementById("outputTrashButton_" + idRow + '_' + 'P').style.display = "flex";
			document.getElementById("outputStartButton_" + idRow + '_' + 'P').style.display = "none";
			document.getElementById("outputGoodButton_" + idRow + '_' + 'P').style.display = "none";
			document.getElementById("percentGoodButton_" + idRow + '_' + 'P').style.display = "none";
			document.getElementById("percentTrashButton_" + idRow + '_' + 'P').style.display = "none";
			document.getElementById("lockBlock_" + idRow + '_' + 'P').style.display = "flex";
		}else if (element.id == "percentGood_" + idRow + '_' + 'P'){
			document.getElementById("percentGoodButton_" + idRow + '_' + 'P').style.display = "flex";	
			document.getElementById("outputStartButton_" + idRow + '_' + 'P').style.display = "none";
			document.getElementById("outputGoodButton_" + idRow + '_' + 'P').style.display = "none";
			document.getElementById("outputTrashButton_" + idRow + '_' + 'P').style.display = "none";
			document.getElementById("percentTrashButton_" + idRow + '_' + 'P').style.display = "none";
			// document.getElementById("lockBlock_" + idRow + '_' + 'P').style.display = "none";
		}else if (element.id == "percentTrash_" + idRow + '_' + 'P'){
			document.getElementById("percentGoodButton_" + idRow + '_' + 'P').style.display = "none";	
			document.getElementById("outputStartButton_" + idRow + '_' + 'P').style.display = "none";
			document.getElementById("outputGoodButton_" + idRow + '_' + 'P').style.display = "none";
			document.getElementById("outputTrashButton_" + idRow + '_' + 'P').style.display = "none";
			document.getElementById("percentTrashButton_" + idRow + '_' + 'P').style.display = "flex";
			// document.getElementById("lockBlock_" + idRow + '_' + 'P').style.display = "none";
		}else{
			document.getElementById("percentTrashButton_" + idRow + '_' + 'P').style.display = "flex";	
			document.getElementById("outputStartButton_" + idRow + '_' + 'P').style.display = "none";
			document.getElementById("outputGoodButton_" + idRow + '_' + 'P').style.display = "none";
			document.getElementById("outputTrashButton_" + idRow + '_' + 'P').style.display = "none";
			document.getElementById("percentGoodButton_" + idRow + '_' + 'P').style.display = "none";
			document.getElementById("lockBlock_" + idRow + '_' + 'P').style.display = "none";
		}
	}
	
	
}
function ShowMassDropdownProtocol(elementID){
	return function e(){
		HideAllDropdownProtocol(elementID.split('_')[3]);
		var massInputElement = document.getElementById(elementID);
		var main = massInputElement.parentNode.parentNode;
		var massInputResultBlockEl = main.children[1];
		var massInputBlockEl = main.children[0];
		var moreTitleEl = main.children[2];
		var massDropdownEl = main.children[3].children[0];
		var fractionMainValues = document.getElementById('fractionMainValues_' + elementID.split('_')[1] + '_' + elementID.split('_')[3] + '_' + 'P');
		var fractionSource = document.getElementById('fractionSource_' + elementID.split('_')[1] + '_' + elementID.split('_')[3] + '_' + 'P');
		var lockBlock = document.getElementById('lockBlock_' + elementID.split('_')[3] + '_' + 'P');
		var fractionLockValue = document.getElementById('fractionLockValue_' + elementID.split('_')[1] + '_' + elementID.split('_')[3] + '_' + 'P');

		massInputResultBlockEl.style.display = "none";
		massInputBlockEl.style.display = "flex";		
		moreTitleEl.style.display = "flex";
		massDropdownEl.style.display = "flex";
		lockBlock.style.display = "flex";
		
		main.children[0].children[0].children[0].focus();		
		main.style.width="190px";
		fractionSource.style.width="190px";
		fractionSource.children[0].style.width="190px";
		fractionSource.children[0].style.height="190px";
		fractionSource.children[1].style.width="190px";
		fractionLockValue.children[0].style.width="190px";
		fractionLockValue.children[0].children[0].style.display="none";
		fractionLockValue.children[0].children[1].style.display="flex";
		for(var i = 0; i< fractionMainValues.children.length; i++){
			fractionMainValues.children[i].style.width="188px";
		}
		if(massInputBlockEl.style.display = "flex"){
			var numberBlock = massInputElement.id.split('_')[1];
			var numberRow = massInputElement.id.split('_')[2];
			switch(numberBlock){
				case '1':
					var massInputResultBlockEl2 = document.getElementById(massInputResultBlockEl.id.split('_')[0] + '_2_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'P');
					var massInputBlockEl2 = document.getElementById(massInputBlockEl.id.split('_')[0] + '_2_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'P');
					var moreTitleEl2 = document.getElementById(moreTitleEl.id.split('_')[0] + '_2_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'P');
					var massDropdownEl2 = document.getElementById(massDropdownEl.id.split('_')[0] + '_2_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'P');

					var massInputResultBlockEl3 = document.getElementById(massInputResultBlockEl.id.split('_')[0] + '_3_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'P');
					var massInputBlockEl3 = document.getElementById(massInputBlockEl.id.split('_')[0] + '_3_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'P');
					var moreTitleEl3 = document.getElementById(moreTitleEl.id.split('_')[0] + '_3_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'P');
					var massDropdownEl3 = document.getElementById(massDropdownEl.id.split('_')[0] + '_3_' + numberRow + '_' + elementID.split('_')[3]+ '_' + 'P');

					var main2 = document.getElementById(main.id.split('_')[0] + '_2_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'P');
					var main3 = document.getElementById(main.id.split('_')[0] + '_3_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'P');

					var fractionMainValues2 = document.getElementById(fractionMainValues.id.split('_')[0] + '_2' + '_' + elementID.split('_')[3] + '_' + 'P');
					var fractionMainValues3 = document.getElementById(fractionMainValues.id.split('_')[0] + '_3' + '_' + elementID.split('_')[3] + '_' + 'P');
					var fractionSource2 = document.getElementById(fractionSource.id.split('_')[0] + '_2' + '_' + elementID.split('_')[3] + '_' + 'P');
					var fractionSource3 = document.getElementById(fractionSource.id.split('_')[0] + '_3' + '_' + elementID.split('_')[3] + '_' + 'P');
					
					var fractionLockValue2 = document.getElementById(fractionLockValue.id.split('_')[0] + '_2' + '_' + elementID.split('_')[3] + '_' + 'P');
					var fractionLockValue3 = document.getElementById(fractionLockValue.id.split('_')[0] + '_3' + '_' + elementID.split('_')[3] + '_' + 'P');
					

					massInputResultBlockEl2.style.display = "flex";
					massInputBlockEl2.style.display = "none";
					massDropdownEl2.style.display = "none";
					moreTitleEl2.style.display = "none";

					massInputResultBlockEl3.style.display = "flex";
					massInputBlockEl3.style.display = "none";
					massDropdownEl3.style.display = "none";
					moreTitleEl3.style.display = "none";

					main2.style.width="90px";
					main3.style.width="90px";

					fractionSource2.style.width="90px";
					fractionSource2.children[0].style.width="98px";
					fractionSource2.children[0].style.height="98px";
					fractionSource2.children[1].style.width="90px";
					fractionSource3.style.width="90px";
					fractionSource3.children[0].style.width="98px";
					fractionSource3.children[0].style.height="98px";
					fractionSource3.children[1].style.width="90px";					
					fractionLockValue2.children[0].children[0].style.display="flex";
					fractionLockValue2.children[0].children[1].style.display="none";
					fractionLockValue3.children[0].children[0].style.display="flex";
					fractionLockValue3.children[0].children[1].style.display="none";
					for(var i = 0; i< fractionMainValues2.children.length; i++){
						fractionMainValues2.children[i].style.width="";
					}
					for(var i = 0; i< fractionMainValues3.children.length; i++){
						fractionMainValues3.children[i].style.width="";
					}
					break;
				case '2':
					var massInputResultBlockEl2 = document.getElementById(massInputResultBlockEl.id.split('_')[0] + '_1_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'P');
					var massInputBlockEl2 = document.getElementById(massInputBlockEl.id.split('_')[0] + '_1_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'P');
					var moreTitleEl2 = document.getElementById(moreTitleEl.id.split('_')[0] + '_1_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'P');
					var massDropdownEl2 = document.getElementById(massDropdownEl.id.split('_')[0] + '_1_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'P');

					var massInputResultBlockEl3 = document.getElementById(massInputResultBlockEl.id.split('_')[0] + '_3_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'P');
					var massInputBlockEl3 = document.getElementById(massInputBlockEl.id.split('_')[0] + '_3_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'P');
					var moreTitleEl3 = document.getElementById(moreTitleEl.id.split('_')[0] + '_3_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'P');
					var massDropdownEl3 = document.getElementById(massDropdownEl.id.split('_')[0] + '_3_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'P');

					var main2 = document.getElementById(main.id.split('_')[0] + '_1_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'P');
					var main3 = document.getElementById(main.id.split('_')[0] + '_3_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'P');

					var fractionMainValues2 = document.getElementById(fractionMainValues.id.split('_')[0] + '_1' + '_' + elementID.split('_')[3] + '_' + 'P');
					var fractionMainValues3 = document.getElementById(fractionMainValues.id.split('_')[0] + '_3' + '_' + elementID.split('_')[3] + '_' + 'P');
					var fractionSource2 = document.getElementById(fractionSource.id.split('_')[0] + '_1' + '_' + elementID.split('_')[3] + '_' + 'P');
					var fractionSource3 = document.getElementById(fractionSource.id.split('_')[0] + '_3' + '_' + elementID.split('_')[3] + '_' + 'P');
					var fractionLockValue2 = document.getElementById(fractionLockValue.id.split('_')[0] + '_1' + '_' + elementID.split('_')[3] + '_' + 'P');
					var fractionLockValue3 = document.getElementById(fractionLockValue.id.split('_')[0] + '_3' + '_' + elementID.split('_')[3] + '_' + 'P');

					massInputResultBlockEl2.style.display = "flex";
					massInputBlockEl2.style.display = "none";
					massDropdownEl2.style.display = "none";
					moreTitleEl2.style.display = "none";

					massInputResultBlockEl3.style.display = "flex";
					massInputBlockEl3.style.display = "none";
					massDropdownEl3.style.display = "none";
					moreTitleEl3.style.display = "none";

					main2.style.width="80px";
					main3.style.width="80px";

					fractionSource2.style.width="86px";
					fractionSource2.children[0].style.width="98px";
					fractionSource2.children[0].style.height="98px";
					fractionSource2.children[1].style.width="";
					fractionSource3.style.width="86px";
					fractionSource3.children[0].style.width="98px";
					fractionSource3.children[0].style.height="98px";
					fractionSource3.children[1].style.width="";
					fractionLockValue2.children[0].children[0].style.display="flex";
					fractionLockValue2.children[0].children[1].style.display="none";
					fractionLockValue3.children[0].children[0].style.display="flex";
					fractionLockValue3.children[0].children[1].style.display="none";
					for(var i = 0; i< fractionMainValues2.children.length; i++){
						fractionMainValues2.children[i].style.width="";
					}
					for(var i = 0; i< fractionMainValues3.children.length; i++){
						fractionMainValues3.children[i].style.width="";
					}
					break;
				case '3':
					var massInputResultBlockEl2 = document.getElementById(massInputResultBlockEl.id.split('_')[0] + '_2_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'P');
					var massInputBlockEl2 = document.getElementById(massInputBlockEl.id.split('_')[0] + '_2_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'P');
					var moreTitleEl2 = document.getElementById(moreTitleEl.id.split('_')[0] + '_2_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'P');
					var massDropdownEl2 = document.getElementById(massDropdownEl.id.split('_')[0] + '_2_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'P');

					var massInputResultBlockEl3 = document.getElementById(massInputResultBlockEl.id.split('_')[0] + '_1_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'P');
					var massInputBlockEl3 = document.getElementById(massInputBlockEl.id.split('_')[0] + '_1_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'P');
					var moreTitleEl3 = document.getElementById(moreTitleEl.id.split('_')[0] + '_1_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'P');
					var massDropdownEl3 = document.getElementById(massDropdownEl.id.split('_')[0] + '_1_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'P');

					var main2 = document.getElementById(main.id.split('_')[0] + '_2_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'P');
					var main3 = document.getElementById(main.id.split('_')[0] + '_1_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'P');

					var fractionMainValues2 = document.getElementById(fractionMainValues.id.split('_')[0] + '_2' + '_' + elementID.split('_')[3] + '_' + 'P');
					var fractionMainValues3 = document.getElementById(fractionMainValues.id.split('_')[0] + '_1' + '_' + elementID.split('_')[3] + '_' + 'P');
					var fractionSource2 = document.getElementById(fractionSource.id.split('_')[0] + '_2' + '_' + elementID.split('_')[3] + '_' + 'P');
					var fractionSource3 = document.getElementById(fractionSource.id.split('_')[0] + '_1' + '_' + elementID.split('_')[3] + '_' + 'P');
					var fractionLockValue2 = document.getElementById(fractionLockValue.id.split('_')[0] + '_2' + '_' + elementID.split('_')[3] + '_' + 'P');
					var fractionLockValue3 = document.getElementById(fractionLockValue.id.split('_')[0] + '_1' + '_' + elementID.split('_')[3] + '_' + 'P');

					massInputResultBlockEl2.style.display = "flex";
					massInputBlockEl2.style.display = "none";
					massDropdownEl2.style.display = "none";
					moreTitleEl2.style.display = "none";

					massInputResultBlockEl3.style.display = "flex";
					massInputBlockEl3.style.display = "none";
					massDropdownEl3.style.display = "none";
					moreTitleEl3.style.display = "none";

					main2.style.width="80px";
					main3.style.width="80px";

					fractionSource2.style.width="86px";
					fractionSource2.children[0].style.width="98px";
					fractionSource2.children[0].style.height="98px";
					fractionSource2.children[1].style.width="";
					fractionSource3.style.width="86px";
					fractionSource3.children[0].style.width="98px";
					fractionSource3.children[0].style.height="98px";
					fractionSource3.children[1].style.width="";
					fractionLockValue2.children[0].children[0].style.display="flex";
					fractionLockValue2.children[0].children[1].style.display="none";
					fractionLockValue3.children[0].children[0].style.display="flex";
					fractionLockValue3.children[0].children[1].style.display="none";
					for(var i = 0; i< fractionMainValues2.children.length; i++){
						fractionMainValues2.children[i].style.width="";
					}
					for(var i = 0; i< fractionMainValues3.children.length; i++){
						fractionMainValues3.children[i].style.width="";
					}
					break;
			}
			var rows = document.getElementById('rows_' + elementID.split('_')[3] + '_' + 'P');
			for (var k = 1; k< rows.children.length; k++){
				rows.children[k].children[0].children[0].children[Number(numberBlock)+1].style.width = '184px';
			}		
		}
		
		GetLockSustateProtocol(elementID.split('_')[1], elementID.split('_')[3]);
	}
}
function GetLockSustateProtocol(column_id, pageID){
	switch(column_id){
		case'1':
			pageProtocolRow[pageID-1].Sustatment.ColumnState[0] = 'active';
			pageProtocolRow[pageID-1].Sustatment.ColumnState[1] = 'lock';
			pageProtocolRow[pageID-1].Sustatment.ColumnState[2] = 'unlock';
			break;
		case'2':
			pageProtocolRow[pageID-1].Sustatment.ColumnState[0] = 'lock';
			pageProtocolRow[pageID-1].Sustatment.ColumnState[1] = 'active';
			pageProtocolRow[pageID-1].Sustatment.ColumnState[2] = 'unlock';
			break;
		case'3':
			pageProtocolRow[pageID-1].Sustatment.ColumnState[0] = 'lock';
			pageProtocolRow[pageID-1].Sustatment.ColumnState[1] = 'unlock';
			pageProtocolRow[pageID-1].Sustatment.ColumnState[2] = 'active';
			break;
	}
	setupIMGProtocol(pageID);
}
function HideMassDropdownProtocol(elementID){
	return function e(){
		HideAllDropdownProtocol(elementID.split('_')[3]);
		var controlButton = document.getElementById(elementID);
		var main = controlButton.parentNode.parentNode;
		var massInputBlockEl = main.children[0];
		var massInputResultBlockEl = main.children[1];
		var moreTitleEl = main.children[2];
		var massDropdownEl = main.children[3].children[0];
		var fractionMainValues = document.getElementById('fractionMainValues_' + elementID.split('_')[1] + '_' + elementID.split('_')[3] + '_' + 'P');
		var fractionSource = document.getElementById('fractionSource_' + elementID.split('_')[1] + '_' + elementID.split('_')[3] + '_' + 'P');
		var lockBlock = document.getElementById('lockBlock_' + elementID.split('_')[3] + '_' + 'P');
		var fractionLockValue = document.getElementById('fractionLockValue_' + elementID.split('_')[1] + '_' + elementID.split('_')[3] + '_' + 'P');

		massInputResultBlockEl.style.display = "flex";
		massInputBlockEl.style.display = "none";		
		massDropdownEl.style.display = "none";
		moreTitleEl.style.display = "none";
		lockBlock.style.display = 'none';
				
		main.style.width="80px";
		fractionSource.style.width="86px";
		fractionSource.children[0].style.width="128px";
		fractionSource.children[0].style.height="128px";
		fractionSource.children[1].style.width="";
		fractionLockValue.children[0].style.width="";
		fractionLockValue.children[0].children[0].style.display="flex";
		fractionLockValue.children[0].children[1].style.display="none";
		for(var i = 0; i< fractionMainValues.children.length; i++){
			fractionMainValues.children[i].style.width="";
		}
		
	}
}
// Функция для скрытия всех блоков-параметров перед изменением стией и размеров 
	// скрытие всех блоков-параметров и полей ввода

function HideAllDropdownProtocol(el){
	if(el.length > 1){
		el = el.split('_')[1];
	}
	document.getElementById("outputStartButton_" + el + '_' + 'P').style.display = "none";
	document.getElementById("outputGoodButton_" + el + '_' + 'P').style.display = "none";
	document.getElementById("outputTrashButton_" + el + '_' + 'P').style.display = "none";
	document.getElementById("percentGoodButton_" + el + '_' + 'P').style.display = "none";
	document.getElementById("percentTrashButton_" + el + '_' + 'P').style.display = "none";
	
	for (var i= 1; i<= 3; i++){
		var fractionSource = document.getElementById('fractionSource_' + i + '_' + el + '_' + 'P');
		var fractionMainValues = document.getElementById('fractionMainValues_' + i + '_' + el + '_' + 'P');
		var fractionLockValue = document.getElementById('fractionLockValue_' + i + '_' + el + '_' + 'P');
		var lockBlock = document.getElementById('lockBlock_' + el + '_' + 'P');
		fractionSource.style.width="86px";
		fractionSource.children[0].style.width="128px";
		fractionSource.children[0].style.height="128px";
		fractionSource.children[1].style.width="";
		fractionLockValue.children[0].style.width="";
		fractionLockValue.children[0].children[0].style.display="flex";
		fractionLockValue.children[0].children[1].style.display="none";			
		lockBlock.style.display = "none";
		for(var k = 0; k< fractionMainValues.children.length; k++){
			fractionMainValues.children[k].style.width="";
			fractionMainValues.children[k].getElementsByClassName("inputElementFraction")[0].readOnly = true;
		}
	}
	var rows = document.getElementById('rows_' + el + '_' + 'P')
	for (var i = 1; i < rows.children.length; i++){
		// скрытие поисковых строк
		var clsInput_testRow = document.getElementById(rows.children[i].children[0].children[0].children[1].children[1].children[0].children[0].id);
		var classifierInpurResultElement = document.getElementById(rows.children[i].children[0].children[0].children[1].children[0].children[0].id);
		rows.children[i].children[0].children[0].children[1].children[2].style.display = 'none';
		resultTextView(clsInput_testRow, classifierInpurResultElement);
		rows.children[i].children[0].children[0].children[1].children[0].children[0].style.display = 'none';
		rows.children[i].children[0].children[0].children[1].children[0].style.display = 'none';
		rows.children[i].children[0].children[0].children[2].children[0].style.display = 'none';
		rows.children[i].children[0].children[0].children[1].children[1].children[0].children[1].style.display = 'none';
		// скрытие параметров фракций
		rows.children[i].children[0].children[0].children[2].children[2].style.display = 'none';
		rows.children[i].children[0].children[0].children[2].children[3].style.display = 'none';
		rows.children[i].children[0].children[0].children[2].children[1].style.display = 'flex';
		rows.children[i].children[0].children[0].children[2].style.width = '80px';
		rows.children[i].children[0].children[0].children[3].children[0].style.display = 'none';
		rows.children[i].children[0].children[0].children[3].children[2].style.display = 'none';
		rows.children[i].children[0].children[0].children[3].children[3].style.display = 'none';
		rows.children[i].children[0].children[0].children[3].children[1].style.display = 'flex';
		rows.children[i].children[0].children[0].children[3].style.width = '80px';
		rows.children[i].children[0].children[0].children[4].children[0].style.display = 'none';
		rows.children[i].children[0].children[0].children[4].children[2].style.display = 'none';
		rows.children[i].children[0].children[0].children[4].children[3].style.display = 'none';
		rows.children[i].children[0].children[0].children[4].children[1].style.display = 'flex';
		rows.children[i].children[0].children[0].children[4].style.width = '80px';		
	}
} 
//Смена изображений Тоглов
function switchToggleProtocol(){
	var imgName = this.style.backgroundImage.split('/')[5].split('.')[0];	
	switch(imgName){
		case "calcOn":
			this.style.backgroundImage = "url(/static/TestClassifier/img/classifier/calcOff.png)";
			break;
		case "calcOff":
			this.style.backgroundImage = "url(/static/TestClassifier/img/classifier/calcOn.png)";
			break;
		case "impOff":
			this.style.backgroundImage = "url(/static/TestClassifier/img/classifier/impOn.png)";
			break;
		case "impOn":
			this.style.backgroundImage = "url(/static/TestClassifier/img/classifier/impOff.png)";
			break;
		case "accept":
			this.style.backgroundImage = "url(/static/TestClassifier/img/classifier/reject.png)";
			break;
		case "reject":
			this.style.backgroundImage = "url(/static/TestClassifier/img/classifier/accept.png)";
			break;
	}
	setupComponentTogglesProtocol(this);
	changeMassInputBlockFormatProtocol(this, imgName);
}
function setupComponentTogglesProtocol(toggle){
	var idRow = toggle.parentNode.parentNode.parentNode.id.split("_")[2];
	var pageID = toggle.parentNode.parentNode.parentNode.id.split("_")[3];
	var idFraction = toggle.parentNode.parentNode.parentNode.id.split("_")[1];
	var imgName = toggle.style.backgroundImage.split('/')[5].split('.')[0];
	
	var massInput = document.getElementById("massInput_" + idFraction + "_" + idRow + "_" + pageID + '_' + 'P');
	var massInputBlock = document.getElementById("massInputBlock_" + idFraction + "_" + idRow + "_" + pageID + '_' + 'P');
	var duplicateMassInput = massInputBlock.children[0].children[0];
	
	//Определение фракции
	switch(idFraction){
		case "1":
			var fractionData =  pageProtocolRow[pageID-1].ProtocolRow[idRow-1].mainFractionData;
			break;
		case "2":
			var fractionData =  pageProtocolRow[pageID-1].ProtocolRow[idRow-1].suitableFractionData;
			break;
		case "3":
			var fractionData =  pageProtocolRow[pageID-1].ProtocolRow[idRow-1].weedFractionData;
			break;
	}
	//Отпределение тогла
	switch(imgName){
		case "calcOn":
			fractionData.calcToggle = true;
			break;
		case "calcOff":
			fractionData.calcToggle = false;
			break;
		case "impOn":
			fractionData.impToggle = true;
			
			//Дополнительная цветовая окраска компонента
			massInput.style.borderColor = "red";
			massInput.style.color = "red";
			massInput.style.fontWeight = "bold";
			
			duplicateMassInput.style.borderColor = "red";
			duplicateMassInput.style.color = "red";
			duplicateMassInput.style.fontWeight = "bold";
			
			break;
		case "impOff":
			fractionData.impToggle = false;
			
			//Дополнительная цветовая окраска компонента
			massInput.style.borderColor = "";
			massInput.style.color = "";
			massInput.style.fontWeight = "";
			
			duplicateMassInput.style.borderColor = "";
			duplicateMassInput.style.color = "";
			duplicateMassInput.style.fontWeight = "";
			
			break;
		case "accept":
			fractionData.acceptRejectToggle = true;
			break;
		case "reject":
			fractionData.acceptRejectToggle = false;
			break;
	}
	requirementsPurityUpdateProtocol(pageID);
}
function requirementsPurityUpdateProtocol(pageID){
	var purityMainFraction = 0;
	var puritySuitableFraction = 0;
	var purityWeedFraction = 0;
	
	var pureInpStart_ = document.getElementById('pureInpStart_' + pageID + '_' + 'P');
	var pureInpGood_ = document.getElementById('pureInpGood_' + pageID + '_' + 'P');
	var pureInpTrash_ = document.getElementById('pureInpTrash_' + pageID + '_' + 'P');
	
	for(var i = 0; i < pageProtocolRow[pageID-1].ProtocolRow.length; i++){
		purityMainFraction += pageProtocolRow[pageID-1].ProtocolRow[i].mainFractionData.acceptRejectToggle ? Number(pageProtocolRow[pageID-1].ProtocolRow[i].mainFractionData.unitOption.percent) : 0;
		puritySuitableFraction += pageProtocolRow[pageID-1].ProtocolRow[i].suitableFractionData.acceptRejectToggle ? Number(pageProtocolRow[pageID-1].ProtocolRow[i].suitableFractionData.unitOption.percent) : 0;
		purityWeedFraction += pageProtocolRow[pageID-1].ProtocolRow[i].weedFractionData.acceptRejectToggle ? Number(pageProtocolRow[pageID-1].ProtocolRow[i].weedFractionData.unitOption.percent) : 0;
	}
	
	pageProtocolRow[pageID-1].requirementsTable.mainFractionData.purity = purityMainFraction;
	pageProtocolRow[pageID-1].requirementsTable.suitableFraction.purity = puritySuitableFraction;
	pageProtocolRow[pageID-1].requirementsTable.weedFraction.purity = purityWeedFraction;
	pureInpStart_.value = Number(pageProtocolRow[pageID-1].requirementsTable.mainFractionData.purity).toFixed(2);
	pureInpGood_.value = Number(pageProtocolRow[pageID-1].requirementsTable.suitableFraction.purity).toFixed(2);
	pureInpTrash_.value = Number(pageProtocolRow[pageID-1].requirementsTable.weedFraction.purity).toFixed(2);
}
function checkotherToggleProtocol(idRow, pageID){
	return function e(){
		var idFraction = this.parentNode.parentNode.parentNode.id.split("_")[1];
		var pureInpStart = document.getElementById('pureInpStart_' + pageID + '_P');
		var pureInpGood = document.getElementById('pureInpGood_' + pageID + '_P');
		var pureInpTrash = document.getElementById('pureInpTrash_' + pageID + '_P');
		
		var pureInpStartFake = document.getElementById('pureInpStartFake_' + pageID + '_P');
		var pureInpGoodFake = document.getElementById('pureInpGoodFake_' + pageID + '_P');
		var pureInpTrashFake = document.getElementById('pureInpTrashFake_' + pageID + '_P');
		var imgName = this.style.backgroundImage.split('/')[5].split('.')[0];
		var typeSustatment = pageProtocolRow[pageID-1].Sustatment.DefaultUnit;
		switch(idFraction){
			case "1":
				var toggeValue =  pageProtocolRow[pageID-1].ProtocolRow[idRow-1].mainFractionData.calcToggle;
				break;
			case "2":
				var toggeValue =  pageProtocolRow[pageID-1].ProtocolRow[idRow-1].suitableFractionData.calcToggle;
				break;
			case "3":
				var toggeValue =  pageProtocolRow[pageID-1].ProtocolRow[idRow-1].weedFractionData.calcToggle;
				break;
		}
		rows = document.getElementById('rows_' + pageID + '_P');
		for(var i = 1; i < rows.children.length; i++){
			if(i != idRow){
				var toggle = rows.children[i].children[0].children[0].children[Number(idFraction)+1].children[0].children[1].children[0];
				var main = toggle.parentNode.parentNode;
				var f23 = toggle.parentNode.parentNode.parentNode.children[1].children[0];
				var fraction = 0;
				//Определение фракции
				switch(idFraction){
					case "1":
						var fractionData =  pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData;
						fraction = 'mainFractionData';
						break;
					case "2":
						var fractionData =  pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData;
						fraction = 'suitableFractionData';
						break;
					case "3":
						var fractionData =  pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData;
						fraction = 'weedFractionData';
						break;
				}
				toggle.style.backgroundImage = this.style.backgroundImage;
				fractionData.calcToggle = toggeValue;
				if(imgName == "calcOff"){
					main.children[0].children[0].type = 'text';
					main.children[0].children[0].value = pageProtocolRow[pageID-1].ProtocolRow[i-1][fraction].custom;
					f23.value = pageProtocolRow[pageID-1].ProtocolRow[i-1][fraction].custom;
				}
				else{
					main.children[0].children[0].type = 'number';
					main.children[0].children[0].value = pageProtocolRow[pageID-1].ProtocolRow[i-1][fraction].unitOption[typeSustatment];
					f23.value = pageProtocolRow[pageID-1].ProtocolRow[i-1][fraction].unitOption[typeSustatment];
				}
			}
			
		}
		switch(imgName){
			case "calcOn":				
				var main = pageProtocolRow[pageID-1].ProtocolRow[0].mainFractionData.calcToggle;
				var suit = pageProtocolRow[pageID-1].ProtocolRow[0].suitableFractionData.calcToggle;
				var weed = pageProtocolRow[pageID-1].ProtocolRow[0].weedFractionData.calcToggle;
				if(main != false && suit != false && weed != false){
					pureInpStart.style.display = 'flex';
					pureInpGood.style.display = 'flex';
					pureInpTrash.style.display = 'flex';
					
					pureInpStartFake.style.display = 'none';
					pureInpGoodFake.style.display = 'none';
					pureInpTrashFake.style.display = 'none';
				}
				
				break;
			case "calcOff":
				pureInpStart.style.display = 'none';
				pureInpGood.style.display = 'none';
				pureInpTrash.style.display = 'none';

				pureInpStartFake.style.display = 'flex';
				pureInpGoodFake.style.display = 'flex';
				pureInpTrashFake.style.display = 'flex';
				break;			
		}
	}
}

function setFakeProtocol(id, fractionNumber){
	return function e(){
		var fake = document.getElementById(id);
		switch(fractionNumber){
			case 1:
				// if(pageRow[currentPage-1].requirementsTable.mainFractionData.Fake == null){
				// 	pageRow[currentPage-1].requirementsTable.mainFractionData.push({"Fake": 0} )
				// }
				pageProtocolRow[ProtocolPage-1].requirementsTable.mainFractionData.Fake = fake.value;
				break;
			case 2:
				pageProtocolRow[ProtocolPage-1].requirementsTable.suitableFraction.Fake = fake.value;
				break;
			case 3:
				pageProtocolRow[ProtocolPage-1].requirementsTable.weedFraction.Fake = fake.value;
				break;
	
		}
	}
	
}
//Функции компоментов фракций
function mathfComponentFunctionProtocol(element_id){
	var element = document.getElementById(element_id);
	var sliderBlock = element.children[0];
	var hingeMassBlock = element.children[2];
	var piecesBlock = element.children[4];
	
	var pageID = element.id.split("_")[3];
	var idRow = element.id.split("_")[2];
	var idFraction = element.id.split("_")[1];
	
	//Определение фракции
	switch(idFraction){
		case "1":
			var fractionData = pageProtocolRow[pageID-1].ProtocolRow[idRow-1].mainFractionData;
			break;
		case "2":
			var fractionData = pageProtocolRow[pageID-1].ProtocolRow[idRow-1].suitableFractionData;
			break;
		case "3":
			var fractionData = pageProtocolRow[pageID-1].ProtocolRow[idRow-1].weedFractionData;
			break;
	}
	
	hingeMassBlock.children[0].children[0].value = fractionData.hingeMass;
	
	sliderBlock.children[0].children[0].addEventListener("change", componentPercentUpdateProtocol(idFraction));
	sliderBlock.children[1].children[0].addEventListener("change", componentGramUpdateProtocol(idFraction));
	sliderBlock.children[2].children[0].addEventListener("change", componentPiecesUpdateProtocol(idFraction));
	sliderBlock.children[3].children[0].addEventListener("change", componentPiecesKgUpdateProtocol(idFraction));
	sliderBlock.children[4].children[0].addEventListener("change", componentPPM_UpdateProtocol(idFraction));
	
	hingeMassBlock.children[0].children[0].addEventListener("change", componentPercentUpdateProtocol(idFraction));
	piecesBlock.children[0].children[0].addEventListener("change", componentPercentUpdateProtocol(idFraction));
	
	hingeMassBlock.children[0].children[0].addEventListener("change", updateHingeMassProtocol(idFraction, pageID));
	piecesBlock.children[0].children[0].addEventListener("change", updatePieces_1000Protocol(idRow, pageID));
	
	sliderBlock.children[0].children[0].addEventListener("change", function (){updateRemovedPercentProtocol(pageID)});
	sliderBlock.children[1].children[0].addEventListener("change", function (){updateRemovedPercentProtocol(pageID)});
	sliderBlock.children[2].children[0].addEventListener("change", function (){updateRemovedPercentProtocol(pageID)});
	sliderBlock.children[3].children[0].addEventListener("change", function (){updateRemovedPercentProtocol(pageID)});
	sliderBlock.children[4].children[0].addEventListener("change", function (){updateRemovedPercentProtocol(pageID)});
	
	hingeMassBlock.children[0].children[0].addEventListener("change", function (){updateRemovedPercentProtocol(pageID)});
	piecesBlock.children[0].children[0].addEventListener("change", function (){updateRemovedPercentProtocol(pageID)});
}
function sumComponentPercentProtocol(idFraction, pageID){
	var sumComponent = 0;
	for(var i = 0; i < pageProtocolRow[pageID-1].ProtocolRow.length; i++){
		switch(idFraction){
			case "1":
				sumComponent += Number(pageProtocolRow[pageID-1].ProtocolRow[i].mainFractionData.unitOption.percent);
				break;
			case "2":
				sumComponent += Number(pageProtocolRow[pageID-1].ProtocolRow[i].suitableFractionData.unitOption.percent);
				break;
			case "3":
				sumComponent += Number(pageProtocolRow[pageID-1].ProtocolRow[i].weedFractionData.unitOption.percent);
				break;
		}
	}
	return sumComponent;
}
function sumComponentPieces_KGProtocol(idFraction, pageID){
	var sumComponent = 0;
	for(var i = 0; i < pageProtocolRow[pageID-1].ProtocolRow.length; i++){
		switch(idFraction){
			case "1":
				sumComponent += Number(pageProtocolRow[pageID-1].ProtocolRow[i].mainFractionData.unitOption.pieces_kg);
				break;
			case "2":
				sumComponent += Number(pageProtocolRow[pageID-1].ProtocolRow[i].suitableFractionData.unitOption.pieces_kg);
				break;
			case "3":
				sumComponent += Number(pageProtocolRow[pageID-1].ProtocolRow[i].weedFractionData.unitOption.pieces_kg);
				break;
		}
	}
	return sumComponent;
}

//Создание клона первого листа

//Обновление значениий процентовок

function componentPercentUpdateProtocol(idFraction){
	return function e(){
		var DropdownBlock = this.parentNode.parentNode.parentNode;
		var MainScrollBlock = DropdownBlock.children[0];
		var HingeMass = DropdownBlock.children[2].children[0].children[0];
		var Pieces_1000	= DropdownBlock.children[4].children[0].children[0];
		
		//Основные параметры
		var percent = MainScrollBlock.children[0].children[0];
		var gram = MainScrollBlock.children[1].children[0];
		var pieces = MainScrollBlock.children[2].children[0];
		var pieces_kg = MainScrollBlock.children[3].children[0];
		
		var pageID = DropdownBlock.id.split("_")[3];
		var idRow = DropdownBlock.id.split("_")[2];
		
		switch(idFraction){
			case "1":
				var firstElement = pageProtocolRow[pageID-1].ProtocolRow[0].mainFractionData.unitOption;
				var targetElement = pageProtocolRow[pageID-1].ProtocolRow[idRow-1].mainFractionData.unitOption;
				var lastElement = pageProtocolRow[pageID-1].ProtocolRow[pageProtocolRow[pageID-1].ProtocolRow.length-1].mainFractionData.unitOption;
				break;
			case "2":
				var firstElement = pageProtocolRow[pageID-1].ProtocolRow[0].suitableFractionData.unitOption;
				var targetElement = pageProtocolRow[pageID-1].ProtocolRow[idRow-1].suitableFractionData.unitOption;
				var lastElement = pageProtocolRow[pageID-1].ProtocolRow[pageProtocolRow[pageID-1].ProtocolRow.length-1].suitableFractionData.unitOption;
				break;
			case "3":
				var firstElement = pageProtocolRow[pageID-1].ProtocolRow[0].weedFractionData.unitOption;
				var targetElement = pageProtocolRow[pageID-1].ProtocolRow[idRow-1].weedFractionData.unitOption;
				var lastElement = pageProtocolRow[pageID-1].ProtocolRow[pageProtocolRow[pageID-1].ProtocolRow.length-1].weedFractionData.unitOption;
				break;
		}
		
		//Основное значение
		if(idRow == 1){
			targetElement.percent = percent.value <= Number(targetElement.percent) + Number(lastElement.percent) ? Number(percent.value).toFixed(2) : Number(Number(targetElement.percent) + Number(lastElement.percent)).toFixed(2)
			lastElement.percent = lastElement.percent - (sumComponentPercentProtocol(idFraction, pageID) - 100);
		}
		else{
			targetElement.percent = percent.value <= Number(firstElement.percent) + Number(targetElement.percent) ? Number(percent.value).toFixed(2) : Number(Number(firstElement.percent) + Number(targetElement.percent)).toFixed(2)
			firstElement.percent = firstElement.percent - (sumComponentPercentProtocol(idFraction, pageID) - 100);
		}
		
		for(var i = 1; i <= pageProtocolRow[pageID-1].ProtocolRow.length; i++){
			var DropdownBlock = document.getElementById("massDropdown_"+ idFraction + "_" + i + "_" + pageID + '_' + 'P');
			var MainScrollBlock = DropdownBlock.children[0];
			var HingeMass = DropdownBlock.children[2].children[0].children[0];
			var Pieces_1000	= DropdownBlock.children[4].children[0].children[0];

			//Основные параметры
			var percent = MainScrollBlock.children[0].children[0];
			var gram = MainScrollBlock.children[1].children[0];
			var pieces = MainScrollBlock.children[2].children[0];
			var pieces_kg = MainScrollBlock.children[3].children[0];
			var ppm = MainScrollBlock.children[4].children[0];
			
			//Основное значение
			switch(idFraction){
				case "1":
					percent.value = Number(pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.unitOption.percent).toFixed(2);
					break;
				case "2":
					percent.value =  Number(pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.unitOption.percent).toFixed(2);
					break;
				case "3":
					percent.value =  Number(pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.unitOption.percent).toFixed(2);
					break;
			}
			
			//Остальные значения
			gram.value = Number(HingeMass.value / 100 * percent.value).toFixed(2);
			pieces.value = Number(gram.value / (Pieces_1000.value / 1000)).toFixed(2);
			pieces_kg.value =  Number((percent.value * 10) / (Pieces_1000.value / 1000)).toFixed(2);
			//Значение компонента
			switch(idFraction){
				case "1":
					//Значение компонента
					pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.unitOption.percent = percent.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.unitOption.gram = gram.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.unitOption.pieces = pieces.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.hingeMass = HingeMass.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.pieces_1000 = Pieces_1000.value;
					break;
				case "2":
					pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.unitOption.percent = percent.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.unitOption.gram = gram.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.unitOption.pieces = pieces.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.hingeMass = HingeMass.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.pieces_1000 = Pieces_1000.value;
					break;
				case "3":
					pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.unitOption.percent = percent.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.unitOption.gram = gram.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.unitOption.pieces = pieces.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.hingeMass = HingeMass.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.pieces_1000 = Pieces_1000.value;
					break;
			}
			if(DropdownBlock.parentNode.parentNode.children[0].children[0].children[0].type == 'number'){
				DropdownBlock.parentNode.parentNode.children[0].children[0].children[0].value = percent.value;
				DropdownBlock.parentNode.parentNode.children[1].children[0].value = percent.value + " %";
			}
			
		}
		requirementsPurityUpdateProtocol(pageID);
		updatePPM_ComponentsProtocol(idFraction, pageID);
	}
}

//Обновление значениий граммовок
function componentGramUpdateProtocol(idFraction){
	return function e(){
		var DropdownBlock = this.parentNode.parentNode.parentNode;
		var MainScrollBlock = DropdownBlock.children[0];
		var HingeMass = DropdownBlock.children[2].children[0].children[0];
		var Pieces_1000	= DropdownBlock.children[4].children[0].children[0];
		
		//Основные параметры
		var percent = MainScrollBlock.children[0].children[0];
		var gram = MainScrollBlock.children[1].children[0];
		var pieces = MainScrollBlock.children[2].children[0];
		var pieces_kg = MainScrollBlock.children[3].children[0];
		var ppm = MainScrollBlock.children[4].children[0];
		
		var idRow = DropdownBlock.id.split("_")[2];
		var pageID = DropdownBlock.id.split("_")[3];
		
		percent.value = Number(gram.value / HingeMass.value * 100).toFixed(2);
		
		switch(idFraction){
			case "1":
				var firstElement = pageProtocolRow[pageID-1].ProtocolRow[0].mainFractionData.unitOption;
				var targetElement = pageProtocolRow[pageID-1].ProtocolRow[idRow-1].mainFractionData.unitOption;
				var lastElement = pageProtocolRow[pageID-1].ProtocolRow[pageProtocolRow[pageID-1].ProtocolRow.length-1].mainFractionData.unitOption;
				break;
			case "2":
				var firstElement = pageProtocolRow[pageID-1].ProtocolRow[0].suitableFractionData.unitOption;
				var targetElement = pageProtocolRow[pageID-1].ProtocolRow[idRow-1].suitableFractionData.unitOption;
				var lastElement = pageProtocolRow[pageID-1].ProtocolRow[pageProtocolRow[pageID-1].ProtocolRow.length-1].suitableFractionData.unitOption;
				break;
			case "3":
				var firstElement = pageProtocolRow[pageID-1].ProtocolRow[0].weedFractionData.unitOption;
				var targetElement = pageProtocolRow[pageID-1].ProtocolRow[idRow-1].weedFractionData.unitOption;
				var lastElement = pageProtocolRow[pageID-1].ProtocolRow[pageProtocolRow[pageID-1].ProtocolRow.length-1].weedFractionData.unitOption;
				break;
		}

		//Основное значение
		if(idRow == 1){
			targetElement.percent = percent.value <= Number(targetElement.percent) + Number(lastElement.percent) ? Number(percent.value).toFixed(2) : Number(Number(targetElement.percent) + Number(lastElement.percent)).toFixed(2)
			lastElement.percent = lastElement.percent - (sumComponentPercentProtocol(idFraction, pageID) - 100);
		}
		else{
			targetElement.percent = percent.value <= Number(firstElement.percent) + Number(targetElement.percent) ? Number(percent.value).toFixed(2) : Number(Number(firstElement.percent) + Number(targetElement.percent)).toFixed(2)
			firstElement.percent = firstElement.percent - (sumComponentPercentProtocol(idFraction, pageID) - 100);
		}
		
		for(var i = 1; i <= pageProtocolRow[pageID-1].ProtocolRow.length; i++){
			var DropdownBlock = document.getElementById("massDropdown_" + idFraction + "_" + i + "_" + pageID + '_' + 'P');
			var MainScrollBlock = DropdownBlock.children[0];
			var HingeMass = DropdownBlock.children[2].children[0].children[0];
			var Pieces_1000	= DropdownBlock.children[4].children[0].children[0];

			//Основные параметры
			var percent = MainScrollBlock.children[0].children[0];
			var gram = MainScrollBlock.children[1].children[0];
			var pieces = MainScrollBlock.children[2].children[0];
			var pieces_kg = MainScrollBlock.children[3].children[0];
			var ppm = MainScrollBlock.children[4].children[0];
			
			//Основное значение
			switch(idFraction){
				case "1":
					percent.value = Number(pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.unitOption.percent).toFixed(2);
					break;
				case "2":
					percent.value =  Number(pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.unitOption.percent).toFixed(2);
					break;
				case "3":
					percent.value =  Number(pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.unitOption.percent).toFixed(2);
					break;
			}

			//Остальные значения
			gram.value = Number(HingeMass.value / 100 * percent.value).toFixed(2);
			pieces.value = Number(gram.value / (Pieces_1000.value / 1000)).toFixed(2);
			pieces_kg.value =  Number((percent.value * 10) / (Pieces_1000.value / 1000)).toFixed(2);
			//Значение компонента
			switch(idFraction){
				case "1":
					//Значение компонента
					pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.unitOption.percent = percent.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.unitOption.gram = gram.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.unitOption.pieces = pieces.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.hingeMass = HingeMass.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.pieces_1000 = Pieces_1000.value;
					break;
				case "2":
					pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.unitOption.percent = percent.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.unitOption.gram = gram.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.unitOption.pieces = pieces.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.hingeMass = HingeMass.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.pieces_1000 = Pieces_1000.value;
					break;
				case "3":
					pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.unitOption.percent = percent.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.unitOption.gram = gram.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.unitOption.pieces = pieces.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.hingeMass = HingeMass.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.pieces_1000 = Pieces_1000.value;
					break;
			}
			DropdownBlock.parentNode.parentNode.children[0].children[0].children[0].value = percent.value;
			DropdownBlock.parentNode.parentNode.children[1].children[0].value = percent.value + " %"
		}
		requirementsPurityUpdateProtocol(pageID);
		updatePPM_ComponentsProtocol(idFraction, pageID);
	}
}

function componentPiecesUpdateProtocol(idFraction){
	return function e(){
		var DropdownBlock = this.parentNode.parentNode.parentNode;
		var MainScrollBlock = DropdownBlock.children[0];
		var HingeMass = DropdownBlock.children[2].children[0].children[0];
		var Pieces_1000	= DropdownBlock.children[4].children[0].children[0];
		
		//Основные параметры
		var percent = MainScrollBlock.children[0].children[0];
		var gram = MainScrollBlock.children[1].children[0];
		var pieces = MainScrollBlock.children[2].children[0];
		var pieces_kg = MainScrollBlock.children[3].children[0];
		var ppm = MainScrollBlock.children[4].children[0];
		
		var idRow = DropdownBlock.id.split("_")[2];
		var pageID = DropdownBlock.id.split("_")[3];
		
		gram.value = Number(pieces.value * (Pieces_1000.value / 1000)).toFixed(2);
		percent.value = Number(gram.value / HingeMass.value * 100).toFixed(2);
		
		switch(idFraction){
			case "1":
				var firstElement = pageProtocolRow[pageID-1].ProtocolRow[0].mainFractionData.unitOption;
				var targetElement = pageProtocolRow[pageID-1].ProtocolRow[idRow-1].mainFractionData.unitOption;
				var lastElement = pageProtocolRow[pageID-1].ProtocolRow[pageProtocolRow[pageID-1].ProtocolRow.length-1].mainFractionData.unitOption;
				break;
			case "2":
				var firstElement = pageProtocolRow[pageID-1].ProtocolRow[0].suitableFractionData.unitOption;
				var targetElement = pageProtocolRow[pageID-1].ProtocolRow[idRow-1].suitableFractionData.unitOption;
				var lastElement = pageProtocolRow[pageID-1].ProtocolRow[pageProtocolRow[pageID-1].ProtocolRow.length-1].suitableFractionData.unitOption;
				break;
			case "3":
				var firstElement = pageProtocolRow[pageID-1].ProtocolRow[0].weedFractionData.unitOption;
				var targetElement = pageProtocolRow[pageID-1].ProtocolRow[idRow-1].weedFractionData.unitOption;
				var lastElement = pageProtocolRow[pageID-1].ProtocolRow[pageProtocolRow[pageID-1].ProtocolRow.length-1].weedFractionData.unitOption;
				break;
		}

		//Основное значение
		if(idRow == 1){
			targetElement.percent = percent.value <= Number(targetElement.percent) + Number(lastElement.percent) ? Number(percent.value).toFixed(2) : Number(Number(targetElement.percent) + Number(lastElement.percent)).toFixed(2)
			lastElement.percent = lastElement.percent - (sumComponentPercentProtocol(idFraction, pageID) - 100);
		}
		else{
			targetElement.percent = percent.value <= Number(firstElement.percent) + Number(targetElement.percent) ? Number(percent.value).toFixed(2) : Number(Number(firstElement.percent) + Number(targetElement.percent)).toFixed(2)
			firstElement.percent = firstElement.percent - (sumComponentPercentProtocol(idFraction, pageID) - 100);
		}
		
		for(var i = 1; i <= pageProtocolRow[pageID-1].ProtocolRow.length; i++){
			var DropdownBlock = document.getElementById("massDropdown_"+idFraction+"_"+i+"_"+pageID + '_' + 'P');
			var MainScrollBlock = DropdownBlock.children[0];
			var HingeMass = DropdownBlock.children[2].children[0].children[0];
			var Pieces_1000	= DropdownBlock.children[4].children[0].children[0];

			//Основные параметры
			var percent = MainScrollBlock.children[0].children[0];
			var gram = MainScrollBlock.children[1].children[0];
			var pieces = MainScrollBlock.children[2].children[0];
			var pieces_kg = MainScrollBlock.children[3].children[0];
			var ppm = MainScrollBlock.children[4].children[0];
			
			//Основное значение
			switch(idFraction){
				case "1":
					percent.value = Number(pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.unitOption.percent).toFixed(2);
					break;
				case "2":
					percent.value =  Number(pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.unitOption.percent).toFixed(2);
					break;
				case "3":
					percent.value =  Number(pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.unitOption.percent).toFixed(2);
					break;
			}

			//Остальные значения
			gram.value = Number(HingeMass.value / 100 * percent.value).toFixed(2);
			pieces.value = Number(gram.value / (Pieces_1000.value / 1000)).toFixed(2);
			pieces_kg.value =  Number((percent.value * 10) / (Pieces_1000.value / 1000)).toFixed(2);
			//Значение компонента
			switch(idFraction){
				case "1":
					//Значение компонента
					pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.unitOption.percent = percent.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.unitOption.gram = gram.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.unitOption.pieces = pieces.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.hingeMass = HingeMass.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.pieces_1000 = Pieces_1000.value;
					break;
				case "2":
					pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.unitOption.percent = percent.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.unitOption.gram = gram.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.unitOption.pieces = pieces.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.hingeMass = HingeMass.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.pieces_1000 = Pieces_1000.value;
					break;
				case "3":
					pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.unitOption.percent = percent.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.unitOption.gram = gram.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.unitOption.pieces = pieces.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.hingeMass = HingeMass.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.pieces_1000 = Pieces_1000.value;
					break;
			}
			DropdownBlock.parentNode.parentNode.children[0].children[0].children[0].value = percent.value;
			DropdownBlock.parentNode.parentNode.children[1].children[0].value = percent.value + " %"
		}
		requirementsPurityUpdateProtocol(pageID);
		updatePPM_ComponentsProtocol(idFraction, pageID);
	}
}
//Обновление значениий штук/кг
function componentPiecesKgUpdateProtocol(idFraction){
	return function e(){
		var DropdownBlock = this.parentNode.parentNode.parentNode;
		var MainScrollBlock = DropdownBlock.children[0];
		var HingeMass = DropdownBlock.children[2].children[0].children[0];
		var Pieces_1000	= DropdownBlock.children[4].children[0].children[0];
		
		//Основные параметры
		var percent = MainScrollBlock.children[0].children[0];
		var gram = MainScrollBlock.children[1].children[0];
		var pieces = MainScrollBlock.children[2].children[0];
		var pieces_kg = MainScrollBlock.children[3].children[0];
		var ppm = MainScrollBlock.children[4].children[0];
		
		var idRow = DropdownBlock.id.split("_")[2];
		var pageID = DropdownBlock.id.split("_")[3];
		
		percent.value = Number((pieces_kg.value / 10) * (Pieces_1000.value / 1000)).toFixed(2);
		
		switch(idFraction){
			case "1":
				var firstElement = pageProtocolRow[pageID-1].ProtocolRow[0].mainFractionData.unitOption;
				var targetElement = pageProtocolRow[pageID-1].ProtocolRow[idRow-1].mainFractionData.unitOption;
				var lastElement = pageProtocolRow[pageID-1].ProtocolRow[pageProtocolRow[pageID-1].ProtocolRow.length-1].mainFractionData.unitOption;
				break;
			case "2":
				var firstElement = pageProtocolRow[pageID-1].ProtocolRow[0].suitableFractionData.unitOption;
				var targetElement = pageProtocolRow[pageID-1].ProtocolRow[idRow-1].suitableFractionData.unitOption;
				var lastElement = pageProtocolRow[pageID-1].ProtocolRow[pageProtocolRow[pageID-1].ProtocolRow.length-1].suitableFractionData.unitOption;
				break;
			case "3":
				var firstElement = pageProtocolRow[pageID-1].ProtocolRow[0].weedFractionData.unitOption;
				var targetElement = pageProtocolRow[pageID-1].ProtocolRow[idRow-1].weedFractionData.unitOption;
				var lastElement = pageProtocolRow[pageID-1].ProtocolRow[pageProtocolRow[pageID-1].ProtocolRow.length-1].weedFractionData.unitOption;
				break;
		}

		//Основное значение
		if(idRow == 1){
			targetElement.percent = percent.value <= Number(targetElement.percent) + Number(lastElement.percent) ? Number(percent.value).toFixed(2) : Number(Number(targetElement.percent) + Number(lastElement.percent)).toFixed(2)
			lastElement.percent = lastElement.percent - (sumComponentPercentProtocol(idFraction, pageID) - 100);
		}
		else{
			targetElement.percent = percent.value <= Number(firstElement.percent) + Number(targetElement.percent) ? Number(percent.value).toFixed(2) : Number(Number(firstElement.percent) + Number(targetElement.percent)).toFixed(2)
			firstElement.percent = firstElement.percent - (sumComponentPercentProtocol(idFraction, pageID) - 100);
		}
		
		for(var i = 1; i <= pageProtocolRow[pageID-1].ProtocolRow.length; i++){
			var DropdownBlock = document.getElementById("massDropdown_" + idFraction + "_" + i + "_" + pageID + '_' + 'P');
			var MainScrollBlock = DropdownBlock.children[0];
			var HingeMass = DropdownBlock.children[2].children[0].children[0];
			var Pieces_1000	= DropdownBlock.children[4].children[0].children[0];

			//Основные параметры
			var percent = MainScrollBlock.children[0].children[0];
			var gram = MainScrollBlock.children[1].children[0];
			var pieces = MainScrollBlock.children[2].children[0];
			var pieces_kg = MainScrollBlock.children[3].children[0];
			var ppm = MainScrollBlock.children[4].children[0];
			
			//Основное значение
			switch(idFraction){
				case "1":
					percent.value = Number(pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.unitOption.percent).toFixed(2);
					break;
				case "2":
					percent.value =  Number(pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.unitOption.percent).toFixed(2);
					break;
				case "3":
					percent.value =  Number(pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.unitOption.percent).toFixed(2);
					break;
			}

			//Остальные значения
			gram.value = Number(HingeMass.value / 100 * percent.value).toFixed(2);
			pieces.value = Number(gram.value / (Pieces_1000.value / 1000)).toFixed(2);
			pieces_kg.value =  Number((percent.value * 10) / (Pieces_1000.value / 1000)).toFixed(2);
			ppm.value = Number(1000000 / sumComponentPieces_KGProtocol(idFraction, pageID) * pieces_kg.value);
			//Значение компонента
			switch(idFraction){
				case "1":
					//Значение компонента
					pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.unitOption.percent = percent.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.unitOption.gram = gram.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.unitOption.pieces = pieces.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.hingeMass = HingeMass.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.pieces_1000 = Pieces_1000.value;
					break;
				case "2":
					pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.unitOption.percent = percent.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.unitOption.gram = gram.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.unitOption.pieces = pieces.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.hingeMass = HingeMass.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.pieces_1000 = Pieces_1000.value;
					break;
				case "3":
					pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.unitOption.percent = percent.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.unitOption.gram = gram.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.unitOption.pieces = pieces.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.hingeMass = HingeMass.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.pieces_1000 = Pieces_1000.value;
					break;
			}
			DropdownBlock.parentNode.parentNode.children[0].children[0].children[0].value = percent.value;
			DropdownBlock.parentNode.parentNode.children[1].children[0].value = percent.value + " %"
		}
		requirementsPurityUpdateProtocol(pageID);
		updatePPM_ComponentsProtocol(idFraction, pageID);
	}
}
//Обновление значениий промилий
function componentPPM_UpdateProtocol(idFraction){
	return function e(){
		var DropdownBlock = this.parentNode.parentNode.parentNode;
		var MainScrollBlock = DropdownBlock.children[0];
		var HingeMass = DropdownBlock.children[2].children[0].children[0];
		var Pieces_1000	= DropdownBlock.children[4].children[0].children[0];
		
		//Основные параметры
		var percent = MainScrollBlock.children[0].children[0];
		var gram = MainScrollBlock.children[1].children[0];
		var pieces = MainScrollBlock.children[2].children[0];
		var pieces_kg = MainScrollBlock.children[3].children[0];
		var ppm = MainScrollBlock.children[4].children[0];
		
		var idRow = DropdownBlock.id.split("_")[2];
		var pageID = DropdownBlock.id.split("_")[3];
		
		pieces_kg.value = Number(ppm.value / (1000000 / sumComponentPieces_KGProtocol(idFraction, pageID))).toFixed(2);
		percent.value = Number((pieces_kg.value / 10) * (Pieces_1000.value / 1000)).toFixed(2);
		
		switch(idFraction){
			case "1":
				var firstElement = pageProtocolRow[pageID-1].ProtocolRow[0].mainFractionData.unitOption;
				var targetElement = pageProtocolRow[pageID-1].ProtocolRow[idRow-1].mainFractionData.unitOption;
				var lastElement = pageProtocolRow[pageID-1].ProtocolRow[pageProtocolRow[pageID-1].ProtocolRow.length-1].mainFractionData.unitOption;
				break;
			case "2":
				var firstElement = pageProtocolRow[pageID-1].ProtocolRow[0].suitableFractionData.unitOption;
				var targetElement = pageProtocolRow[pageID-1].ProtocolRow[idRow-1].suitableFractionData.unitOption;
				var lastElement = pageProtocolRow[pageID-1].ProtocolRow[pageProtocolRow[pageID-1].ProtocolRow.length-1].suitableFractionData.unitOption;
				break;
			case "3":
				var firstElement = pageProtocolRow[pageID-1].ProtocolRow[0].weedFractionData.unitOption;
				var targetElement = pageProtocolRow[pageID-1].ProtocolRow[idRow-1].weedFractionData.unitOption;
				var lastElement = pageProtocolRow[pageID-1].ProtocolRow[ProtocolRow.length-1].weedFractionData.unitOption;
				break;
		}

		//Основное значение
		if(idRow == 1){
			targetElement.percent = percent.value <= Number(targetElement.percent) + Number(lastElement.percent) ? Number(percent.value).toFixed(2) : Number(Number(targetElement.percent) + Number(lastElement.percent)).toFixed(2)
			lastElement.percent = lastElement.percent - (sumComponentPercentProtocol(idFraction, pageID) - 100);
		}
		else{
			targetElement.percent = percent.value <= Number(firstElement.percent) + Number(targetElement.percent) ? Number(percent.value).toFixed(2) : Number(Number(firstElement.percent) + Number(targetElement.percent)).toFixed(2)
			firstElement.percent = firstElement.percent - (sumComponentPercentProtocol(idFraction, pageID) - 100);
		}
		
		for(var i = 1; i <= pageProtocolRow[pageID-1].ProtocolRow.length; i++){
			var DropdownBlock = document.getElementById("massDropdown_" + idFraction + "_" + i + "_" + pageID + '_' + 'P');
			var MainScrollBlock = DropdownBlock.children[0];
			var HingeMass = DropdownBlock.children[2].children[0].children[0];
			var Pieces_1000	= DropdownBlock.children[4].children[0].children[0];

			//Основные параметры
			var percent = MainScrollBlock.children[0].children[0];
			var gram = MainScrollBlock.children[1].children[0];
			var pieces = MainScrollBlock.children[2].children[0];
			var pieces_kg = MainScrollBlock.children[3].children[0];
			var ppm = MainScrollBlock.children[4].children[0];
			
			//Основное значение
			switch(idFraction){
				case "1":
					percent.value = Number(pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.unitOption.percent).toFixed(2);
					break;
				case "2":
					percent.value =  Number(pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.unitOption.percent).toFixed(2);
					break;
				case "3":
					percent.value =  Number(pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.unitOption.percent).toFixed(2);
					break;
			}
			
			//Остальные значения
			gram.value = Number(HingeMass.value / 100 * percent.value).toFixed(2);
			pieces.value = Number(gram.value / (Pieces_1000.value / 1000)).toFixed(2);
			pieces_kg.value =  Number((percent.value * 10) / (Pieces_1000.value / 1000)).toFixed(2);
			//Значение компонента
			switch(idFraction){
				case "1":
					//Значение компонента
					pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.unitOption.percent = percent.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.unitOption.gram = gram.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.unitOption.pieces = pieces.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.hingeMass = HingeMass.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.pieces_1000 = Pieces_1000.value;
					break;
				case "2":
					pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.unitOption.percent = percent.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.unitOption.gram = gram.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.unitOption.pieces = pieces.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.hingeMass = HingeMass.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.pieces_1000 = Pieces_1000.value;
					break;
				case "3":
					pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.unitOption.percent = percent.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.unitOption.gram = gram.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.unitOption.pieces = pieces.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.hingeMass = HingeMass.value;
					pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.pieces_1000 = Pieces_1000.value;
					break;
			}
			DropdownBlock.parentNode.parentNode.children[0].children[0].children[0].value = percent.value;
			DropdownBlock.parentNode.parentNode.children[1].children[0].value = percent.value + " %"
		}
		requirementsPurityUpdateProtocol(pageID);
		updatePPM_ComponentsProtocol(idFraction, pageID);
	}
}

function updateHingeMassProtocol(idFraction, pageID){
	return function e(){
		for(var i = 1; i <= pageProtocolRow[pageID-1].ProtocolRow.length; i++){
			var DropdownBlock = document.getElementById("massDropdown_" + idFraction + "_" + i + "_" + pageID + '_' + 'P');
			var HingeMass = DropdownBlock.children[2].children[0].children[0];
		
			pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.hingeMass = this.value;
			HingeMass.value = pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.hingeMass;
		}
	}
}
function updatePieces_1000Protocol(idRow, pageID){
	return function e(){
		for(var idFraction = 1; idFraction <= 3; idFraction++){ 
			var DropdownBlock = document.getElementById("massDropdown_" + idFraction + "_" + idRow + "_" + pageID + '_' + 'P');
			var Pieces_1000	= DropdownBlock.children[4].children[0].children[0];
			
			pageProtocolRow[pageID-1].ProtocolRow[idRow-1].mainFractionData.pieces_1000 = this.value;
			pageProtocolRow[pageID-1].ProtocolRow[idRow-1].suitableFractionData.pieces_1000 = this.value;
			pageProtocolRow[pageID-1].ProtocolRow[idRow-1].weedFractionData.pieces_1000 = this.value;
			
			Pieces_1000.value = this.value;
		}
	}
}

function updateRemovedPercentProtocol(pageID){
	if(pageProtocolRow[pageID-1].ProtocolRow.length){
		pageProtocolRow[pageID-1].ProtocolRow[0].mainFractionData.unitOption.percent = pageProtocolRow[pageID-1].ProtocolRow[0].mainFractionData.unitOption.percent - (sumComponentPercentProtocol("1", pageID) - 100);
		pageProtocolRow[pageID-1].ProtocolRow[0].suitableFractionData.unitOption.percent = pageProtocolRow[pageID-1].ProtocolRow[0].suitableFractionData.unitOption.percent - (sumComponentPercentProtocol("2", pageID) - 100);
		pageProtocolRow[pageID-1].ProtocolRow[0].weedFractionData.unitOption.percent = pageProtocolRow[pageID-1].ProtocolRow[0].weedFractionData.unitOption.percent - (sumComponentPercentProtocol("3", pageID) - 100);
		
		for(var idFraction = 1; idFraction <= 3; idFraction++){ 
			for(var i = 1; i <= pageProtocolRow[pageID-1].ProtocolRow.length; i++){
				var DropdownBlock = document.getElementById("massDropdown_" + idFraction + "_" + i + "_" + pageID + '_' + 'P');
				var MainScrollBlock = DropdownBlock.children[0];
				var HingeMass = DropdownBlock.children[2].children[0].children[0];
				var Pieces_1000	= DropdownBlock.children[4].children[0].children[0];

				//Основные параметры
				var percent = MainScrollBlock.children[0].children[0];
				var gram = MainScrollBlock.children[1].children[0];
				var pieces = MainScrollBlock.children[2].children[0];
				var pieces_kg = MainScrollBlock.children[3].children[0];
				var ppm = MainScrollBlock.children[4].children[0];
				
				//Основное значение
				switch(String(idFraction)){
					case "1":
						percent.value = Number(pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.unitOption.percent).toFixed(2);
						break;
					case "2":
						percent.value =  Number(pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.unitOption.percent).toFixed(2);
						break;
					case "3":
						percent.value =  Number(pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.unitOption.percent).toFixed(2);
						break;
				}

				//Остальные значения
				gram.value = Number(HingeMass.value / 100 * percent.value).toFixed(2);
				pieces.value = Number(gram.value / (Pieces_1000.value / 1000)).toFixed(2);
				pieces_kg.value =  Number((percent.value * 10) / (Pieces_1000.value / 1000)).toFixed(2);
				
				//Значение компонента
				switch(String(idFraction)){
					case "1":
						//Значение компонента
						pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.unitOption.percent = percent.value;
						pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.unitOption.gram = gram.value;
						pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.unitOption.pieces = pieces.value;
						pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.unitOption.pieces_kg = pieces_kg.value;
						pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.unitOption.ppm = ppm.value;
						
						pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.hingeMass = HingeMass.value;
						pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.pieces_1000 = Pieces_1000.value;
						break;
					case "2":
						pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.unitOption.percent = percent.value;
						pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.unitOption.gram = gram.value;
						pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.unitOption.pieces = pieces.value;
						pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.unitOption.pieces_kg = pieces_kg.value;
						
						pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.hingeMass = HingeMass.value;
						pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.pieces_1000 = Pieces_1000.value;
						break;
					case "3":
						pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.unitOption.percent = percent.value;
						pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.unitOption.gram = gram.value;
						pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.unitOption.pieces = pieces.value;
						pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.unitOption.pieces_kg = pieces_kg.value;
						
						pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.hingeMass = HingeMass.value;
						pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.pieces_1000 = Pieces_1000.value;
						break;
				}
				if(DropdownBlock.parentNode.parentNode.children[0].children[0].children[0].type == 'number'){
					DropdownBlock.parentNode.parentNode.children[0].children[0].children[0].value = percent.value;
					DropdownBlock.parentNode.parentNode.children[1].children[0].value = percent.value + " %"
				}
				
			}
			updatePPM_ComponentsProtocol(String(idFraction), pageID);
		}
		requirementsPurityUpdateProtocol(pageID);
	}
}
function updatePPM_ComponentsProtocol(idFraction, pageID){
	for(var i = 1; i <= pageProtocolRow[pageID-1].ProtocolRow.length; i++){
		var DropdownBlock = document.getElementById("massDropdown_" + idFraction + "_" + i + "_" + pageID + '_' + 'P');
		var MainScrollBlock = DropdownBlock.children[0];

		//Основные параметры
		var pieces_kg = MainScrollBlock.children[3].children[0];
		var ppm = MainScrollBlock.children[4].children[0]

		ppm.value = Number(1000000 / sumComponentPieces_KGProtocol(idFraction, pageID) * pieces_kg.value).toFixed(2);
		
		switch(idFraction){
			case "1":
				pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.unitOption.ppm = ppm.value;
				break;
			case "2":
				pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.unitOption.ppm = ppm.value;
				break;
			case "3":
				pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.unitOption.ppm = ppm.value;
				break;
		}
	}
	requirementsPercentUpdateProtocol(pageID);
	setupDefaulUnitValueProtocol(pageID);
	updateDataProtocol(pageID);
}
function updateDataProtocol(pageID){
	var acceptFractionMass = pageProtocolRow[pageID-1].requirementsTable.suitableFraction.mass;
	var rejectFractionMass = pageProtocolRow[pageID-1].requirementsTable.weedFraction.mass;
	var acceptFractionPurity = pageProtocolRow[pageID-1].requirementsTable.suitableFraction.purity;
	var rejectFractionPurity = pageProtocolRow[pageID-1].requirementsTable.weedFraction.purity;
	
	var accept = acceptFractionMass/100*(acceptFractionPurity);
	var weedInAccept = acceptFractionMass/100*(100-acceptFractionPurity);
	var reject = rejectFractionMass/100*(100-rejectFractionPurity);
	var productInReject = rejectFractionMass/100*(rejectFractionPurity);	

	chartData = [accept,weedInAccept,reject,productInReject];
	handler(chartData);
}
function requirementsPercentUpdateProtocol(pageID){
	var sustamentID = pageProtocolRow[pageID-1].Sustatment.ColumnState.indexOf("active");
	
	var outputGood = document.getElementById('outputGood_' + pageID + '_' + 'P');
	var percentGood = document.getElementById('percentGood_' + pageID + '_' + 'P');
	var outputTrash = document.getElementById('outputTrash_' + pageID + '_' + 'P');
	var percentTrash = document.getElementById('percentTrash_' + pageID + '_' + 'P');
	switch(sustamentID){
		case 0:
			if(pageProtocolRow[pageID-1].Sustatment.ColumnState[1] != "lock" || pageProtocolRow[pageID-1].Sustatment.ColumnState[2] != "lock"){
				percentGood.value = percentGood.value < 0 ? Number(pageProtocolRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2) : Number(percentGood.value).toFixed(2);
				pageProtocolRow[pageID-1].requirementsTable.suitableFraction.percent_exit = Number(percentGood.value) <= requirementsMaxExitProtocol("suitableFractionData", pageID) ? Number(percentGood.value) : requirementsMaxExitProtocol("suitableFractionData", pageID);
				
				percentTrash.value = percentTrash.value < 0 ? Number(pageProtocolRow[pageID-1].requirementsTable.weedFraction.percent_exit).toFixed(2) : Number(percentTrash.value).toFixed(2);
				pageProtocolRow[pageID-1].requirementsTable.weedFraction.percent_exit = Number(percentTrash.value) <= requirementsMaxExitProtocol("weedFractionData", pageID) ? Number(percentTrash.value) : requirementsMaxExitProtocol("weedFractionData", pageID);
			}
			break;
		case 1:
			percentGood.value = percentGood.value < 0 ? Number(pageProtocolRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2) : Number(percentGood.value).toFixed(2);
			pageProtocolRow[pageID-1].requirementsTable.suitableFraction.percent_exit = Number(percentGood.value) <= requirementsMaxExitProtocol("suitableFractionData", pageID) ? Number(percentGood.value) : requirementsMaxExitProtocol("suitableFractionData", pageID);
			
			pageProtocolRow[pageID-1].requirementsTable.weedFraction.percent_exit = Number(pageProtocolRow[pageID-1].requirementsTable.mainFractionData.percent_exit - pageProtocolRow[pageID-1].requirementsTable.suitableFraction.percent_exit);
			
			pageProtocolRow[pageID-1].requirementsTable.suitableFraction.mass = Number(pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass / pageProtocolRow[pageID-1].requirementsTable.mainFractionData.percent_exit * pageProtocolRow[pageID-1].requirementsTable.suitableFraction.percent_exit);
			pageProtocolRow[pageID-1].requirementsTable.weedFraction.mass = Number(pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass / pageProtocolRow[pageID-1].requirementsTable.mainFractionData.percent_exit * pageProtocolRow[pageID-1].requirementsTable.weedFraction.percent_exit);
			
			outputGood.value = Number(pageProtocolRow[pageID-1].requirementsTable.suitableFraction.mass).toFixed(3);
			outputTrash.value = Number(pageProtocolRow[pageID-1].requirementsTable.weedFraction.mass).toFixed(3);
			percentGood.value = Number(pageProtocolRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2);
			percentTrash.value = Number(pageProtocolRow[pageID-1].requirementsTable.weedFraction.percent_exit).toFixed(2);
			break;
		case 2:
			percentTrash.value = percentTrash.value < 0 ? Number(pageProtocolRow[pageID-1].requirementsTable.weedFraction.percent_exit).toFixed(2) : Number(percentTrash.value).toFixed(2);
			pageProtocolRow[pageID-1].requirementsTable.weedFraction.percent_exit = Number(percentTrash.value) <= requirementsMaxExitProtocol("weedFractionData", pageID) ? Number(percentTrash.value) : requirementsMaxExitProtocol("weedFractionData", pageID);
			
			pageProtocolRow[pageID-1].requirementsTable.suitableFraction.percent_exit = Number(pageProtocolRow[pageID-1].requirementsTable.mainFractionData.percent_exit - pageProtocolRow[pageID-1].requirementsTable.weedFraction.percent_exit);
			
			pageProtocolRow[pageID-1].requirementsTable.suitableFraction.mass = Number(pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass / pageProtocolRow[pageID-1].requirementsTable.mainFractionData.percent_exit * pageProtocolRow[pageID-1].requirementsTable.suitableFraction.percent_exit);
			pageProtocolRow[pageID-1].requirementsTable.weedFraction.mass = Number(pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass / pageProtocolRow[pageID-1].requirementsTable.mainFractionData.percent_exit * pageProtocolRow[pageID-1].requirementsTable.weedFraction.percent_exit);
			
			outputGood.value = Number(pageProtocolRow[pageID-1].requirementsTable.suitableFraction.mass).toFixed(3);
			outputTrash.value = Number(pageProtocolRow[pageID-1].requirementsTable.weedFraction.mass).toFixed(3);
			percentGood.value = Number(pageProtocolRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2);
			percentTrash.value = Number(pageProtocolRow[pageID-1].requirementsTable.weedFraction.percent_exit).toFixed(2);
			break;
	}
	setupFractionExitProtocol(pageID);
	handler(chartData);
}
function setupFractionExitProtocol(pageID){
	var __suitable = Number(requirementsMaxExitProtocol("suitableFractionData", pageID));
	var __weed = Number(requirementsMaxExitProtocol("weedFractionData", pageID));
	
	var outputGood = document.getElementById('outputGood_' + pageID + '_' + 'P');
	var percentGood = document.getElementById('percentGood_' + pageID + '_' + 'P');
	var outputTrash = document.getElementById('outputTrash_' + pageID + '_' + 'P');
	var percentTrash = document.getElementById('percentTrash_' + pageID + '_' + 'P');
	
	var sustamentID = pageProtocolRow[pageID-1].Sustatment.ColumnState.indexOf("active");
	switch(sustamentID){
		case 0:
			if(Number(percentGood.value) > __suitable){
				pageProtocolRow[pageID-1].requirementsTable.suitableFraction.percent_exit = __suitable;
				pageProtocolRow[pageID-1].requirementsTable.weedFraction.percent_exit = Number(pageProtocolRow[pageID-1].requirementsTable.mainFractionData.percent_exit - pageProtocolRow[pageID-1].requirementsTable.suitableFraction.percent_exit);
					
				pageProtocolRow[pageID-1].requirementsTable.suitableFraction.mass = Number(pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass / pageProtocolRow[pageID-1].requirementsTable.mainFractionData.percent_exit * pageProtocolRow[pageID-1].requirementsTable.suitableFraction.percent_exit);
				pageProtocolRow[pageID-1].requirementsTable.weedFraction.mass = Number(pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass / pageProtocolRow[pageID-1].requirementsTable.mainFractionData.percent_exit * pageProtocolRow[pageID-1].requirementsTable.weedFraction.percent_exit);
				
				outputGood.value = Number(pageProtocolRow[pageID-1].requirementsTable.suitableFraction.mass).toFixed(3);
				outputTrash.value = Number(pageProtocolRow[pageID-1].requirementsTable.weedFraction.mass).toFixed(3);
				percentGood.value = Number(pageProtocolRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2);
				percentTrash.value = Number(pageProtocolRow[pageID-1].requirementsTable.weedFraction.percent_exit).toFixed(2);
			}
			if(Number(percentTrash.value) > __weed){
				pageProtocolRow[pageID-1].requirementsTable.weedFraction.percent_exit = __weed;
				pageProtocolRow[pageID-1].requirementsTable.suitableFraction.percent_exit = Number(pageProtocolRow[pageID-1].requirementsTable.mainFractionData.percent_exit - pageProtocolRow[pageID-1].requirementsTable.weedFraction.percent_exit);
				
				pageProtocolRow[pageID-1].requirementsTable.suitableFraction.mass = Number(pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass / pageProtocolRow[pageID-1].requirementsTable.mainFractionData.percent_exit * pageProtocolRow[pageID-1].requirementsTable.suitableFraction.percent_exit);
				pageProtocolRow[pageID-1].requirementsTable.weedFraction.mass = Number(pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass / pageProtocolRow[pageID-1].requirementsTable.mainFractionData.percent_exit * pageProtocolRow[pageID-1].requirementsTable.weedFraction.percent_exit);
				
				outputGood.value = Number(pageProtocolRow[pageID-1].requirementsTable.suitableFraction.mass).toFixed(3);
				outputTrash.value = Number(pageProtocolRow[pageID-1].requirementsTable.weedFraction.mass).toFixed(3);
				percentGood.value = Number(pageProtocolRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2);
				percentTrash.value = Number(pageProtocolRow[pageID-1].requirementsTable.weedFraction.percent_exit).toFixed(2);
			}
			if(pageProtocolRow[pageID-1].Sustatment.ColumnState[1] == "unlock"){
				for(var i = 0; i < pageProtocolRow[pageID-1].ProtocolRow.length; i++){
					var mainComponentMass = Number(pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass / 100 * pageProtocolRow[pageID-1].ProtocolRow[i].mainFractionData.unitOption.percent).toFixed(5);
					var weedComponentMass = Number(pageProtocolRow[pageID-1].requirementsTable.weedFraction.mass / 100 * pageProtocolRow[pageID-1].ProtocolRow[i].weedFractionData.unitOption.percent).toFixed(5);
					
					var suitableComponentMass = Number(mainComponentMass - weedComponentMass);
					pageProtocolRow[pageID-1].ProtocolRow[i].suitableFractionData.unitOption.percent = suitableComponentMass / (pageProtocolRow[pageID-1].requirementsTable.suitableFraction.mass / 100);
					
					if(isNaN(pageProtocolRow[pageID-1].ProtocolRow[i].suitableFractionData.unitOption.percent) || pageProtocolRow[pageID-1].ProtocolRow[i].suitableFractionData.unitOption.percent == "Infinity" || pageProtocolRow[pageID-1].ProtocolRow[i].suitableFractionData.unitOption.percent == "-Infinity")
						pageProtocolRow[pageID-1].ProtocolRow[i].suitableFractionData.unitOption.percent = i == 0 ? 100 : 0;
					
					pageProtocolRow[pageID-1].ProtocolRow[i].suitableFractionData.unitOption.percent = pageProtocolRow[pageID-1].ProtocolRow[i].suitableFractionData.unitOption.percent < 0 ? 0 : pageProtocolRow[pageID-1].ProtocolRow[i].suitableFractionData.unitOption.percent;
					pageProtocolRow[pageID-1].ProtocolRow[i].suitableFractionData.unitOption.percent = pageProtocolRow[pageID-1].ProtocolRow[i].suitableFractionData.unitOption.percent > 100 ? 100 : pageProtocolRow[pageID-1].ProtocolRow[i].suitableFractionData.unitOption.percent;
				
					pageProtocolRow[pageID-1].ProtocolRow[i].suitableFractionData.unitOption.percent = parseFloat(pageProtocolRow[pageID-1].ProtocolRow[i].suitableFractionData.unitOption.percent).toFixed(2);
				}
			}
			else if(pageProtocolRow[pageID-1].Sustatment.ColumnState[2] == "unlock"){
				for(var i = 0; i < pageProtocolRow[pageID-1].ProtocolRow.length; i++){
					var mainComponentMass = Number(pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass / 100 * pageProtocolRow[pageID-1].ProtocolRow[i].mainFractionData.unitOption.percent).toFixed(5);
					var suitableComponentMass = Number(pageProtocolRow[pageID-1].requirementsTable.suitableFraction.mass / 100 * pageProtocolRow[pageID-1].ProtocolRow[i].suitableFractionData.unitOption.percent).toFixed(5);
					
					var weedComponentMass = Number(mainComponentMass - suitableComponentMass);
					pageProtocolRow[pageID-1].ProtocolRow[i].weedFractionData.unitOption.percent = weedComponentMass / (pageProtocolRow[pageID-1].requirementsTable.weedFraction.mass / 100);
					
					if(isNaN(pageProtocolRow[pageID-1].ProtocolRow[i].weedFractionData.unitOption.percent) || pageProtocolRow[pageID-1].ProtocolRow[i].weedFractionData.unitOption.percent == "Infinity" || pageProtocolRow[pageID-1].ProtocolRow[i].weedFractionData.unitOption.percent == "-Infinity")
						pageProtocolRow[pageID-1].ProtocolRow[i].weedFractionData.unitOption.percent = i != pageProtocolRow[pageID-1].ProtocolRow.length-1 ? 0 : 100;
					
					pageProtocolRow[pageID-1].ProtocolRow[i].weedFractionData.unitOption.percent = pageProtocolRow[pageID-1].ProtocolRow[i].weedFractionData.unitOption.percent < 0 ? 0 : pageProtocolRow[pageID-1].ProtocolRow[i].weedFractionData.unitOption.percent;
					pageProtocolRow[pageID-1].ProtocolRow[i].weedFractionData.unitOption.percent = pageProtocolRow[pageID-1].ProtocolRow[i].weedFractionData.unitOption.percent > 100 ? 100 : pageProtocolRow[pageID-1].ProtocolRow[i].weedFractionData.unitOption.percent;
				
					pageProtocolRow[pageID-1].ProtocolRow[i].weedFractionData.unitOption.percent = parseFloat(pageProtocolRow[pageID-1].ProtocolRow[i].weedFractionData.unitOption.percent).toFixed(2);
				}
			}
			break;
		case 1:
			if(pageProtocolRow[pageID-1].Sustatment.ColumnState[0] == "unlock"){
				for(var i = 0; i < pageProtocolRow[pageID-1].ProtocolRow.length; i++){
					var suitableComponentMass = Number(pageProtocolRow[pageID-1].requirementsTable.suitableFraction.mass / 100 * pageProtocolRow[pageID-1].ProtocolRow[i].suitableFractionData.unitOption.percent).toFixed(5);
					var weedComponentMass = Number(pageProtocolRow[pageID-1].requirementsTable.weedFraction.mass / 100 * pageProtocolRow[pageID-1].ProtocolRow[i].weedFractionData.unitOption.percent).toFixed(5);
					
					var mainComponentMass =  Number(suitableComponentMass) +  Number(weedComponentMass);
					pageProtocolRow[pageID-1].ProtocolRow[i].mainFractionData.unitOption.percent = mainComponentMass / (pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass / 100);
					
					pageProtocolRow[pageID-1].ProtocolRow[i].mainFractionData.unitOption.percent = pageProtocolRow[pageID-1].ProtocolRow[i].mainFractionData.unitOption.percent < 0 ? 0 : pageProtocolRow[pageID-1].ProtocolRow[i].mainFractionData.unitOption.percent;
					pageProtocolRow[pageID-1].ProtocolRow[i].mainFractionData.unitOption.percent = pageProtocolRow[pageID-1].ProtocolRow[i].mainFractionData.unitOption.percent > 100 ? 100 : pageProtocolRow[pageID-1].ProtocolRow[i].mainFractionData.unitOption.percent;
				
					pageProtocolRow[pageID-1].ProtocolRow[i].mainFractionData.unitOption.percent = parseFloat(pageProtocolRow[pageID-1].ProtocolRow[i].mainFractionData.unitOption.percent).toFixed(2);
				}
			}
			else{
				for(var i = 0; i < pageProtocolRow[pageID-1].ProtocolRow.length; i++){
					var suitableComponentMass = Number(pageProtocolRow[pageID-1].requirementsTable.suitableFraction.mass / 100 * pageProtocolRow[pageID-1].ProtocolRow[i].suitableFractionData.unitOption.percent).toFixed(5);
					var mainComponentMass = Number(pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass / 100 * pageProtocolRow[pageID-1].ProtocolRow[i].mainFractionData.unitOption.percent).toFixed(5);
					
					var weedComponentMass =  Number(mainComponentMass - suitableComponentMass);
					pageProtocolRow[pageID-1].ProtocolRow[i].weedFractionData.unitOption.percent = weedComponentMass / (pageProtocolRow[pageID-1].requirementsTable.weedFraction.mass / 100);
					
					pageProtocolRow[pageID-1].ProtocolRow[i].weedFractionData.unitOption.percent = pageProtocolRow[pageID-1].ProtocolRow[i].weedFractionData.unitOption.percent < 0 ? 0 : pageProtocolRow[pageID-1].ProtocolRow[i].weedFractionData.unitOption.percent;
					pageProtocolRow[pageID-1].ProtocolRow[i].weedFractionData.unitOption.percent = pageProtocolRow[pageID-1].ProtocolRow[i].weedFractionData.unitOption.percent > 100 ? 100 : pageProtocolRow[pageID-1].ProtocolRow[i].weedFractionData.unitOption.percent;
				
					pageProtocolRow[pageID-1].ProtocolRow[i].weedFractionData.unitOption.percent = parseFloat(pageProtocolRow[pageID-1].ProtocolRow[i].weedFractionData.unitOption.percent).toFixed(2);
				}
			}
			break;
		case 2:
			if(pageProtocolRow[pageID-1].Sustatment.ColumnState[0] == "unlock"){
				for(var i = 0; i < pageProtocolRow[pageID-1].ProtocolRow.length; i++){
					var suitableComponentMass = Number(pageProtocolRow[pageID-1].requirementsTable.suitableFraction.mass / 100 * pageProtocolRow[pageID-1].ProtocolRow[i].suitableFractionData.unitOption.percent).toFixed(5);
					var weedComponentMass = Number(pageProtocolRow[pageID-1].requirementsTable.weedFraction.mass / 100 * pageProtocolRow[pageID-1].ProtocolRow[i].weedFractionData.unitOption.percent).toFixed(5);
					
					var mainComponentMass =  Number(suitableComponentMass) +  Number(weedComponentMass);
					pageProtocolRow[pageID-1].ProtocolRow[i].mainFractionData.unitOption.percent = mainComponentMass / (pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass / 100).toFixed(5);
					
					pageProtocolRow[pageID-1].ProtocolRow[i].mainFractionData.unitOption.percent = pageProtocolRow[pageID-1].ProtocolRow[i].mainFractionData.unitOption.percent < 0 ? 0 : pageProtocolRow[pageID-1].ProtocolRow[i].mainFractionData.unitOption.percent;
					pageProtocolRow[pageID-1].ProtocolRow[i].mainFractionData.unitOption.percent = pageProtocolRow[pageID-1].ProtocolRow[i].mainFractionData.unitOption.percent > 100 ? 100 : pageProtocolRow[pageID-1].ProtocolRow[i].mainFractionData.unitOption.percent;
					
					pageProtocolRow[pageID-1].ProtocolRow[i].mainFractionData.unitOption.percent = parseFloat(pageProtocolRow[pageID-1].ProtocolRow[i].mainFractionData.unitOption.percent).toFixed(2);
				}
			}
			else{
				for(var i = 0; i < pageProtocolRow[pageID-1].ProtocolRow.length; i++){
					var weedComponentMass = Number(pageProtocolRow[pageID-1].requirementsTable.weedFraction.mass / 100 * pageProtocolRow[pageID-1].ProtocolRow[i].weedFractionData.unitOption.percent).toFixed(5);
					var mainComponentMass = Number(pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass / 100 * pageProtocolRow[pageID-1].ProtocolRow[i].mainFractionData.unitOption.percent).toFixed(5);
					
					var suitableComponentMass =  Number(mainComponentMass - weedComponentMass);
					pageProtocolRow[pageID-1].ProtocolRow[i].suitableFractionData.unitOption.percent = suitableComponentMass / (pageProtocolRow[pageID-1].requirementsTable.suitableFraction.mass / 100);
					
					pageProtocolRow[pageID-1].ProtocolRow[i].suitableFractionData.unitOption.percent = pageProtocolRow[pageID-1].ProtocolRow[i].weedFractionData.unitOption.percent < 0 ? 0 : pageProtocolRow[pageID-1].ProtocolRow[i].suitableFractionData.unitOption.percent;
					pageProtocolRow[pageID-1].ProtocolRow[i].suitableFractionData.unitOption.percent = pageProtocolRow[pageID-1].ProtocolRow[i].weedFractionData.unitOption.percent > 100 ? 100 : pageProtocolRow[pageID-1].ProtocolRow[i].suitableFractionData.unitOption.percent;
					
					pageProtocolRow[pageID-1].ProtocolRow[i].suitableFractionData.unitOption.percent = parseFloat(pageProtocolRow[pageID-1].ProtocolRow[i].suitableFractionData.unitOption.percent).toFixed(2);
				}
			}
			break;
	}
}
function requirementsMaxExitProtocol(fraction, pageID){
	var minFractionMass = Number(Infinity);
	for(var i = 0; i < pageProtocolRow[pageID-1].ProtocolRow.length; i++){
		var requirementsComponentMass = Number(pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass / 100 * pageProtocolRow[pageID-1].ProtocolRow[i].mainFractionData.unitOption.percent);
		
		var maxFractionComponentMass = Number(requirementsComponentMass / Number(pageProtocolRow[pageID-1].ProtocolRow[i][fraction].unitOption.percent) * 100);
		
		if(maxFractionComponentMass == "NaN" || maxFractionComponentMass == "Infinity" || maxFractionComponentMass == "-Infinity")
			maxFractionComponentMass = 0;
		
		if(maxFractionComponentMass <= minFractionMass && maxFractionComponentMass != 0)
			minFractionMass = maxFractionComponentMass
	}
	//Назначение максимальнового выхода для фракции
	var fractionMaxExitPercent = minFractionMass/pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass * 100;
	fractionMaxExitPercent = (fractionMaxExitPercent == "NaN" || fractionMaxExitPercent == "Infinity" || fractionMaxExitPercent == "-Infinity") ? 0 : fractionMaxExitPercent;
	
	return Number(fractionMaxExitPercent).toFixed(2);
}
function setupTargetDefaltUnitProtocol(inputOptions, unit){
	return function e(){
		var pageID = inputOptions.parentNode.parentNode.parentNode.parentNode.parentNode.id.split('_')[1];
		var targetBlock = inputOptions.parentNode.parentNode.children;
		if (inputOptions.style.backgroundColor != "") {
			for (var i = 0; i < targetBlock.length; i++) {
				targetBlock[i].style.display = "";
				inputOptions.style.backgroundColor = "";
			}
			pageProtocolRow[pageID-1].Sustatment.DefaultUnit = "percent";
		}
		else {
			for (var i = 0; i < targetBlock.length; i++) {
				targetBlock[i].style.display = "none";
			}

			this.parentNode.style.display = "";
			inputOptions.style.backgroundColor = "#ffb23f";
			pageProtocolRow[pageID-1].Sustatment.DefaultUnit = unit;
		}
		setupDefaulUnitValueProtocol(pageID);
	}
}
function setupDefaulUnitValueProtocol(pageID){
	//Дефолтный тескт
	var text = returnUnitDefaultText(pageProtocolRow[pageID-1].Sustatment.DefaultUnit);
	
	//цикл назначение дефолных значений
	for(var i = 1; i <= pageProtocolRow[pageID-1].ProtocolRow.length; i++){
		for(var idFraction = 1; idFraction <= 3; idFraction++){
			var massInput = document.getElementById("massInput_" + idFraction + "_" + i + "_" + pageID + '_' + 'P');
			var massInputBlock = document.getElementById("massInputBlock_" + idFraction + "_" + i + "_" + pageID + '_' + 'P');
			var duplicateMassInput = massInputBlock.children[0].children[0];
			var duplicateType = duplicateMassInput.type;

			const startType = duplicateMassInput.value;

			switch(String(idFraction)){
				case "1":
					if(pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.selectUnitOption == null){
						massInput.value = pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.unitOption[pageProtocolRow[pageID-1].Sustatment.DefaultUnit] + text;
						duplicateMassInput.value = pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.unitOption[pageProtocolRow[pageID-1].Sustatment.DefaultUnit];
					}
					else{
						var selectUnitOption = pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.selectUnitOption;
						var __text = returnUnitDefaultText(selectUnitOption);
						massInput.value = pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.unitOption[selectUnitOption] + __text;
						duplicateMassInput.value = pageProtocolRow[pageID-1].ProtocolRow[i-1].mainFractionData.unitOption[selectUnitOption];
					}
					break;
				case "2":
					if(pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.selectUnitOption == null){
						massInput.value = pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.unitOption[pageProtocolRow[pageID-1].Sustatment.DefaultUnit] + text;
						duplicateMassInput.value = pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.unitOption[pageProtocolRow[pageID-1].Sustatment.DefaultUnit];
					}
					else{
						var selectUnitOption = pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.selectUnitOption;
						var __text = returnUnitDefaultText(selectUnitOption);
						massInput.value = pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.unitOption[selectUnitOption] + __text;
						duplicateMassInput.value = pageProtocolRow[pageID-1].ProtocolRow[i-1].suitableFractionData.unitOption[selectUnitOption];
					}
					break;
				case "3":
					if(pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.selectUnitOption == null){
						massInput.value = pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.unitOption[pageProtocolRow[pageID-1].Sustatment.DefaultUnit] + text;
						duplicateMassInput.value = pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.unitOption[pageProtocolRow[pageID-1].Sustatment.DefaultUnit];
					}
					else{
						var selectUnitOption = pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.selectUnitOption;
						var __text = returnUnitDefaultText(selectUnitOption);
						massInput.value = pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.unitOption[selectUnitOption] + __text;
						duplicateMassInput.value = pageProtocolRow[pageID-1].ProtocolRow[i-1].weedFractionData.unitOption[selectUnitOption];
					}
					break;
			}
			if(duplicateType == 'text'){
				duplicateMassInput.value = startType;
				massInput.value = startType;
			}
		}
	}
}
function CheckLockInputProtocol(element){
	return function e(){
		var el = document.getElementById(element);
		var element_id = el.id.split('_')[1];
		var pageID = el.id.split('_')[2];
		var activeEl;
		for(var i = 0; i< pageProtocolRow[pageID-1].Sustatment.ColumnState.length; i++){
			if(pageProtocolRow[pageID-1].Sustatment.ColumnState[i] == 'active'){
				activeEl = i;
				break;
			}
		}
		switch(activeEl){
			case 0:            
				var activeEl = element_id;
				var passiveEl = element_id == '2' ?  '3' : '2';
				pageProtocolRow[pageID-1].Sustatment.ColumnState[activeEl-1] =  pageProtocolRow[pageID-1].Sustatment.ColumnState[activeEl-1]  != 'unlock' ? 'unlock' : 'lock';
				pageProtocolRow[pageID-1].Sustatment.ColumnState[passiveEl-1] =  pageProtocolRow[pageID-1].Sustatment.ColumnState[activeEl-1]  != 'unlock' ? 'unlock' : 'lock';
				break;
			case 1:
				var activeEl = element_id;
				var passiveEl = element_id == '1' ?  '3' : '1';
				pageProtocolRow[pageID-1].Sustatment.ColumnState[activeEl-1] =  pageProtocolRow[pageID-1].Sustatment.ColumnState[activeEl-1]  != 'unlock' ? 'unlock' : 'lock';
				pageProtocolRow[pageID-1].Sustatment.ColumnState[passiveEl-1] =  pageProtocolRow[pageID-1].Sustatment.ColumnState[activeEl-1]  != 'unlock' ? 'unlock' : 'lock';
				break;
			case 2:
				var activeEl = element_id;
				var passiveEl = element_id == '1' ?  '2' : '1';
				pageProtocolRow[pageID-1].Sustatment.ColumnState[activeEl-1] =  pageProtocolRow[pageID-1].Sustatment.ColumnState[activeEl-1]  != 'unlock' ? 'unlock' : 'lock';
				pageProtocolRow[pageID-1].Sustatment.ColumnState[passiveEl-1] =  pageProtocolRow[pageID-1].Sustatment.ColumnState[activeEl-1]  != 'unlock' ? 'unlock' : 'lock';
				break;
		}
		
		setupIMGProtocol(pageID);
	}       
}
function setupIMGProtocol(pageID){
    for(var i = 0; i< pageProtocolRow[pageID-1].Sustatment.ColumnState.length; i++){
        var img = document.getElementById('Lock_' + (i+1) + '_' + pageID + '_' + 'P');
        var parent = document.getElementById('fractionLockValue_' + (i+1) + '_' + pageID + '_' + 'P');
        switch(pageProtocolRow[pageID-1].Sustatment.ColumnState[i]){
            case'active':                
                parent.children[0].children[0].style.display = 'none';
                parent.children[0].children[1].style.display = 'flex';
                img.setAttribute('status', 'active');
                break;
            case'lock':
                img.style.backgroundImage = "url(/static/TestClassifier/img/classifier/lock.png)";  
                parent.children[0].children[0].style.display = 'flex';
                parent.children[0].children[1].style.display = 'none';
                img.setAttribute('status', 'lock');             
                break;
            case'unlock':
                img.style.backgroundImage = "url(/static/TestClassifier/img/classifier/unlock.png)";
                parent.children[0].children[0].style.display = 'flex';
                parent.children[0].children[1].style.display = 'none';
                img.setAttribute('status', 'unlock'); 
                break;
        }
    }
}
//Переключение допольных опций весов компонета
function switchDropdownMassProtocol(element){
	var elementl = document.getElementById(element);
	var sliderBlock = elementl.children[0];
	
	//Псевдофункция
	function e(){
		var selectRow = this.parentNode;
		var sliderBlock = selectRow.parentNode;
		
		//Определение фракций и строки
		var idFraction = sliderBlock.parentNode.id.split("_")[1];
		var idRow = sliderBlock.parentNode.id.split("_")[2];
		var pageID = sliderBlock.parentNode.id.split("_")[3];
		
		switch(idFraction){
			case "1":
				var component = pageProtocolRow[pageID-1].ProtocolRow[idRow-1].mainFractionData;
				break;
			case "2":
				var component = pageProtocolRow[pageID-1].ProtocolRow[idRow-1].suitableFractionData;
				break;
			case "3":
				var component = pageProtocolRow[pageID-1].ProtocolRow[idRow-1].weedFractionData;
				break;
		}
		
		if(selectRow.children[1].style.backgroundColor != "rgb(255, 178, 63)"){
			for(var i = 0 ; i < sliderBlock.children.length; i++){
				sliderBlock.children[i].style.display = "none";
			}
			selectRow.style.display = "flex";
			selectRow.children[1].style.backgroundColor = "#ffb23f";
			
			switch(selectRow.children[1].value){
				case "%":
					component.selectUnitOption = "percent";
					break;
				case "грамм":
					component.selectUnitOption = "gram";
					break;
				case "штук":
					component.selectUnitOption = "pieces";
					break;
				case "штук/кг.":
					component.selectUnitOption = "pieces_kg";
					break;
				case "ppm":
					component.selectUnitOption = "ppm";
					break;
			}
		}
		else {
			for(var i = 0 ; i < sliderBlock.children.length; i++){
				sliderBlock.children[i].style.display = "flex";
			}
			selectRow.children[1].style.backgroundColor = "#f1f1f1";
			
			component.selectUnitOption = null;
		}
		setupDefaulUnitValueProtocol(pageID);
	}
	//Добавление слушателя на элементы ниспадающего списка
	for(var i = 0; i < sliderBlock.children.length; i++){
		sliderBlock.children[i].children[1].addEventListener("click", e);
	}
	for(var i = 2; i <= 3; i++){
		var newID = "massDropdown_" + i + '_' + element.split('_')[2] + '_' + element.split('_')[3] + '_' + 'P';
		var elementl = document.getElementById(newID);
		var sliderBlock = elementl.children[0];
		//Псевдофункция
		function e(){
			var selectRow = this.parentNode;
			var sliderBlock = selectRow.parentNode;
			
			//Определение фракций и строки
			var idFraction = sliderBlock.parentNode.id.split("_")[1];
			var idRow = sliderBlock.parentNode.id.split("_")[2];
			var pageID = sliderBlock.parentNode.id.split("_")[3];
			
			switch(idFraction){
				case "1":
					var component = pageProtocolRow[pageID-1].ProtocolRow[idRow-1].mainFractionData;
					break;
				case "2":
					var component = pageProtocolRow[pageID-1].ProtocolRow[idRow-1].suitableFractionData;
					break;
				case "3":
					var component = pageProtocolRow[pageID-1].ProtocolRow[idRow-1].weedFractionData;
					break;
			}
			
			if(selectRow.children[1].style.backgroundColor != "rgb(255, 178, 63)"){
				for(var i = 0 ; i < sliderBlock.children.length; i++){
					sliderBlock.children[i].style.display = "none";
				}
				selectRow.style.display = "flex";
				selectRow.children[1].style.backgroundColor = "#ffb23f";
				
				switch(selectRow.children[1].value){
					case "%":
						component.selectUnitOption = "percent";
						break;
					case "грамм":
						component.selectUnitOption = "gram";
						break;
					case "штук":
						component.selectUnitOption = "pieces";
						break;
					case "штук/кг.":
						component.selectUnitOption = "pieces_kg";
						break;
					case "ppm":
						component.selectUnitOption = "ppm";
						break;
				}
			}
			else {
				for(var i = 0 ; i < sliderBlock.children.length; i++){
					sliderBlock.children[i].style.display = "flex";
				}
				selectRow.children[1].style.backgroundColor = "#f1f1f1";
				
				component.selectUnitOption = null;
			}
			setupDefaulUnitValueProtocol(pageID);
		}
		//Добавление слушателя на элементы ниспадающего списка
		for(var k = 0; k < sliderBlock.children.length; k++){
			sliderBlock.children[k].children[1].addEventListener("click", e);
		}
	}	
}

function requirementsBlockVievProtocol(idRow){
	return function e(){
		var defaultUnit = document.getElementById('defaultUnit_' + idRow + '_' + 'P');
		var arrowElement = defaultUnit.children[0].children[1];
		var blocklElement = defaultUnit.children[1].children[0];

		if (blocklElement.style.display != "flex" && blocklElement.style.display != "") {
			blocklElement.style.display = "flex";
			arrowElement.style.transform = "rotate(0deg)";
		}
		else {
			blocklElement.style.display = "none";
			arrowElement.style.transform = "rotate(180deg)";
		}
	}

}
function prepareDefaultProtocolUnit(idRow){
	var defaultUnit = document.getElementById('defaultUnit_' + idRow + '_' + 'P');
	var scrollBlock = defaultUnit.getElementsByClassName('scrollBlock')[0];
	var dropdownElements = scrollBlock.children;
	
	var percentInput = dropdownElements[0].children[0];
	var gramInput = dropdownElements[1].children[0];
	var piecesInput = dropdownElements[2].children[0];
	var pieces_kgInput = dropdownElements[3].children[0];
	var ppmInput = dropdownElements[4].children[0];
	
	percentInput.addEventListener("click", setupTargetDefaltUnitProtocol(percentInput, "percent"));
	gramInput.addEventListener("click", setupTargetDefaltUnitProtocol(gramInput, "gram"));
	piecesInput.addEventListener("click", setupTargetDefaltUnitProtocol(piecesInput, "pieces"));
	pieces_kgInput.addEventListener("click", setupTargetDefaltUnitProtocol(pieces_kgInput, "pieces_kg"));
	ppmInput.addEventListener("click", setupTargetDefaltUnitProtocol(ppmInput, "ppm"));
	
	percentInput.click();
}
function HideDropdownProtocol(idElement){
	return function e(){
		var button = document.getElementById(idElement);
		var pageID = button.id.split('_')[2];
		var idRow = button.id.split('_')[1];
		var main = button.parentNode.parentNode.parentNode;
		var dropdown = main.children[2];	
		var otherCheckbox = main.children[1].children[0].children[1];
		var clsInput_testRow = main.children[1].children[0].children[0];
		var classifierInpurResultElement = main.children[0].children[0];
		var lockBlock = document.getElementById('lockBlock_' + pageID + '_' + 'P');
		dropdown.style.display = "none";	
		resultTextView(clsInput_testRow, classifierInpurResultElement);
		classifierInpurResultElement.style.display="none";
		main.children[0].style.display="none";
		otherCheckbox.style.display="none";
		lockBlock.style.display = 'none';
		if(pageProtocolRow[pageID-1].ProtocolRow[idRow-1].SearchProductResult.length == 0){
			for(var i = 0; i < classifierInpurResultElement.children.length; i++){
				pageProtocolRow[pageID-1].ProtocolRow[idRow-1].SearchProductResult.push(classifierInpurResultElement.children[i].textContent);
			}
		}
		else{
			pageProtocolRow[pageID-1].ProtocolRow[idRow-1].SearchProductResult = [];
			for(var i = 0; i < classifierInpurResultElement.children.length; i++){
				pageProtocolRow[pageID-1].ProtocolRow[idRow-1].SearchProductResult.push(classifierInpurResultElement.children[i].textContent);
			}
		}
	}
}
function ShowDropdownProtocol(idRow, pageID){
	return function e(){
		HideAllDropdownProtocol(pageID);
		var dropdown = document.getElementById('clsDropdown_' + idRow + '_' + pageID + '_' + 'P');
		var clsInput_test = document.getElementById('clsInput_test_' + idRow + '_' + pageID + '_' + 'P');
		var otherCheckbox = document.getElementById('addOption_' + idRow + '_' + pageID + '_' + 'P');
		var classifierInpurResult = document.getElementById('classifierInpurResult_' + idRow + '_' + pageID + '_' + 'P');
		var clsInputResultBlock = document.getElementById('clsInputResultBlock_' + idRow + '_' + pageID + '_' + 'P');
		var lockBlock = document.getElementById('lockBlock_' + pageID + '_' + 'P');

		dropdown.style.display="flex";
		clsInput_test.value = ""
		classifierInpurResult.style.display="flex";
		clsInputResultBlock.style.display="flex";
		otherCheckbox.style.display="flex";
		lockBlock.style.display = "none";

		StartInputProtocol(idRow, pageID);
	}
}
function refreshMassof1000Protocol(idRow, pageID){
	return function e(){
		var product = pageProtocolRow[pageID-1].ProtocolRow[idRow-1].SearchProductResult;
		var gramm1 = document.getElementById('massDropdown_1_'+ idRow + '_' + pageID + '_' + 'P').children[4].children[0].children[0];
		var gramm2 = document.getElementById('massDropdown_2_'+ idRow + '_' + pageID + '_' + 'P').children[4].children[0].children[0];
		var gramm3 = document.getElementById('massDropdown_3_'+ idRow + '_' + pageID + '_' + 'P').children[4].children[0].children[0];
		var resultType =  returnResultType(product);
		switch(resultType){
			case'product':
				for(var i = 0; i< list_product.length; i++){
					if(list_product[i].productName == product){
						if(list_product[i].mass_of_1000 == "-"){
							gramm1.value = 35;
							gramm1.style.borderColor = "red";
							gramm1.style.color = "red";
							gramm1.style.fontWeight = "bold";
							gramm2.value = 35;
							gramm2.style.borderColor = "red";
							gramm2.style.color = "red";
							gramm2.style.fontWeight = "bold";
							gramm3.value = 35;	
							gramm3.style.borderColor = "red";
							gramm3.style.color = "red";
							gramm3.style.fontWeight = "bold";
						}
						else{
							gramm1.value = parseFloat(list_product[i].mass_of_1000);
							gramm2.value = parseFloat(list_product[i].mass_of_1000);
							gramm3.value = parseFloat(list_product[i].mass_of_1000);
							gramm1.style.borderColor = "";
							gramm1.style.color = "";
							gramm1.style.fontWeight = "";
							gramm2.style.borderColor = "";
							gramm2.style.color = "";
							gramm2.style.fontWeight = "";
							gramm3.style.borderColor = "";
							gramm3.style.color = "";
							gramm3.style.fontWeight = "";
						}				
					}
				}
				break;
			case'weed':
				for(var i = 0; i< list_weed.length; i++){
					if(list_weed[i].weedName == product){
						if(list_weed[i].weedMass == "-"){
							gramm1.value = 35;
							gramm1.style.borderColor = "red";
							gramm1.style.color = "red";
							gramm1.style.fontWeight = "bold";
							gramm2.value = 35;
							gramm2.style.borderColor = "red";
							gramm2.style.color = "red";
							gramm2.style.fontWeight = "bold";
							gramm3.value = 35;	
							gramm3.style.borderColor = "red";
							gramm3.style.color = "red";
							gramm3.style.fontWeight = "bold";
						}
						else{
							gramm1.value = parseFloat(list_weed[i].weedMass);
							gramm2.value = parseFloat(list_weed[i].weedMass);
							gramm3.value = parseFloat(list_weed[i].weedMass);
							gramm1.style.borderColor = "";
							gramm1.style.color = "";
							gramm1.style.fontWeight = "";
							gramm2.style.borderColor = "";
							gramm2.style.color = "";
							gramm2.style.fontWeight = "";
							gramm3.style.borderColor = "";
							gramm3.style.color = "";
							gramm3.style.fontWeight = "";
						}				
					}
				}
				break;
			case'customeOption':
				gramm1.value = 35;
				gramm1.style.borderColor = "red";
				gramm1.style.color = "red";
				gramm1.style.fontWeight = "bold";
				gramm2.value = 35;
				gramm2.style.borderColor = "red";
				gramm2.style.color = "red";
				gramm2.style.fontWeight = "bold";
				gramm3.value = 35;	
				gramm3.style.borderColor = "red";
				gramm3.style.color = "red";
				gramm3.style.fontWeight = "bold";
				break;
		}
		if(product == ""){
			gramm1.value = 35;
			gramm1.style.borderColor = "red";
			gramm1.style.color = "red";
			gramm1.style.fontWeight = "bold";
			gramm2.value = 35;
			gramm2.style.borderColor = "red";
			gramm2.style.color = "red";
			gramm2.style.fontWeight = "bold";
			gramm3.value = 35;	
			gramm3.style.borderColor = "red";
			gramm3.style.color = "red";
			gramm3.style.fontWeight = "bold";
		}
		var event = new Event('change');
		gramm1.dispatchEvent(event);
	}	
}
function StartInputListenersProtocol(idRow, pageID){
	return function e(){
		var inputBlock = document.getElementById("clsInput_test_" + idRow + '_' + pageID + '_' + 'P');
		var clsDropdown = document.getElementById("clsDropdown_" + idRow + '_' + pageID + '_' + 'P');
		DoropdownOptionClearProtocol(idRow, pageID);
		if(inputBlock.value.length == 0){
			DropdownOptionDefaultProtocol(idRow, pageID);
		}
		else{
			DropdownSearchProtocol(idRow, pageID);
		}	
		clsDropdown.style.display="flex";
	}
}
function searchidProtocol(idRow, pageID){
	return function e(){
		var addOption = document.getElementById('addOption_' + idRow + '_' + pageID + '_' + 'P');
		var main = addOption.parentNode.parentNode.parentNode;
		var clsDropdown = main.children[2].id;
		addCustomOptionProtocol(idRow, pageID);
	}
}
function addCustomOptionProtocol(idRow, pageID){
	var dropdown = document.getElementById('clsDropdown_' + idRow + '_' + pageID + '_' + 'P');
	var main = dropdown.parentNode;
	var classifierInpurResult = main.children[0].children[0].id;
	var clsInput_test = main.children[1].children[0].children[0].id;
	var cls = document.getElementById(clsInput_test);
	if(dropdown.style.display != "none" && cls.value != ""){
		var object = document.createElement("div");
		object.classList.add("wordElement");
		object.textContent = cls.value;
		object.addEventListener("click", function(){
			this.remove();
			StartInputProtocol(idRow, pageID);
		});
		document.getElementById(classifierInpurResult).appendChild(object);
		sortResultBlockProtocol(idRow, pageID);
	}
	ShowDropdownProtocol(idRow, pageID);
}
function sortResultBlockProtocol(idRow, pageID){
	var resultBlock = document.getElementById('clsInputResultBlock_' + idRow + '_' + pageID + '_' + 'P');
	var keyList = ["product", "weed", "productType", "weedClass", "discription", "parts", "status", "color", "customeOption"];
	
	for(var i = 0; i < resultBlock.children.length; i++){
		var type = resultBlock.children[i].id != "" ? resultBlock.children[i].id.split("_")[1] : "customeOption";
		for(var k = 0; k < keyList.length; k++){
			if(type == keyList[k])
				resultBlock.children[i].setAttribute('name', k);
		}
	}	
	[].map.call( resultBlock.children, Object ).sort( function ( a, b ) {
		return +a.getAttribute("name") - +b.getAttribute("name");
	}).forEach( function ( elem ) {resultBlock.appendChild( elem )}); 
	
}
function infoBlockProtocol(idRow, pageID){
	return function e(){
		if (document.getElementById('infoBlock_' + idRow + '_' + pageID + '_' + 'P').style.display=="none"){
			document.getElementById('infoBlock_' + idRow + '_' + pageID + '_' + 'P').style.display="flex";
			document.getElementById('infoBlockButton_' + idRow + '_' + pageID + '_' + 'P').style.transform = "rotate(180deg)";
			document.getElementById('infoTitle_' + idRow + '_' + pageID + '_' + 'P').style.borderBottomWidth="0px"
			document.getElementById('infoTitle_' + idRow + '_' + pageID + '_' + 'P').style.marginBottom="8px";
		}else{
			document.getElementById('infoBlock_' + idRow + '_' + pageID + '_' + 'P').style.display="none";
			document.getElementById('infoBlockButton_' + idRow + '_' + pageID + '_' + 'P').style.transform = "rotate(0deg)";
			document.getElementById('infoTitle_' + idRow + '_' + pageID + '_' + 'P').style.borderBottomWidth="1px"
			document.getElementById('infoTitle_' + idRow + '_' + pageID + '_' + 'P').style.marginBottom="0px";
		}
	}
}
function photoBlockProtocol(idRow, pageID){
	return function e(){
		if (document.getElementById("photoBlock_" + idRow + '_' + pageID + '_' + 'P').style.display=="none"){
			document.getElementById("photoBlock_" + idRow + '_' + pageID + '_' + 'P').style.display="flex";
			document.getElementById("photoBlockButton_" + idRow + '_' + pageID + '_' + 'P').style.transform = "rotate(180deg)";
			document.getElementById("photoTitle_" + idRow + '_' + pageID + '_' + 'P').style.borderBottomWidth="0px"
			document.getElementById("photoTitle_" + idRow + '_' + pageID + '_' + 'P').style.marginBottom="8px";
		}else{
			document.getElementById("photoBlock_" + idRow + '_' + pageID + '_' + 'P').style.display="none";
			document.getElementById("photoBlockButton_" + idRow + '_' + pageID + '_' + 'P').style.transform = "rotate(0deg)";
			document.getElementById("photoTitle_" + idRow + '_' + pageID + '_' + 'P').style.borderBottomWidth="1px"
			document.getElementById("photoTitle_" + idRow + '_' + pageID + '_' + 'P').style.marginBottom="0px";
		}
	}
}
function changeMassValueProtocol(mass, input){
	return function e(){
		var massDropdown = document.getElementById(mass);
		var massInputBlock = document.getElementById(input);
		var dropdownElements = massDropdown.children[0].children;
		
		var percentInput = dropdownElements[0].children[0];
		var gramInput = dropdownElements[1].children[0];
		var piecesInput = dropdownElements[2].children[0];
		var pieces_kgInput = dropdownElements[3].children[0];
		var ppmInput = dropdownElements[4].children[0];
		var valueType;
		var fraction;
		var event = new Event('change');

		if(this.type != 'text'){
			valueType = Number(this.value);
			this.value = valueType < 0 ? 0 : valueType.toFixed(2);
		}
		else{
			valueType = this.value;
		}
		
		//Определение фракций и строки
		var idFraction = massDropdown.id.split("_")[1];
		var idRow = massDropdown.id.split("_")[2];
		var pageID = massDropdown.id.split("_")[3];
		
		if(this.type != 'text'){
			switch(idFraction){
				case "1":
					var selectUnitOption = pageProtocolRow[pageID-1].ProtocolRow[idRow-1].mainFractionData.selectUnitOption;
					break;
				case "2":
					var selectUnitOption = pageProtocolRow[pageID-1].ProtocolRow[idRow-1].suitableFractionData.selectUnitOption;
					break;
				case "3":
					var selectUnitOption = pageProtocolRow[pageID-1].ProtocolRow[idRow-1].weedFractionData.selectUnitOption;
					break;
			}		
			selectUnitOption = selectUnitOption != null ? selectUnitOption : pageProtocolRow[pageID-1].Sustatment.DefaultUnit;			
		}
		else{
			switch(idFraction){
				case'1':
					fraction = 'mainFractionData';
					break;
				case'2':
					fraction = 'suitableFractionData';
					break;
				case'3':
					fraction = 'weedFractionData';
					break;
			}
			pageProtocolRow[pageID-1].ProtocolRow[idRow-1][fraction].custom = valueType;
		}	
		//Переключение для дефолтных единиц измерений.
		if(this.type != 'text'){
			switch(pageProtocolRow[pageID-1].Sustatment.DefaultUnit){
				case "percent":
					this.value =  Number(this.value) <= 100 ? Number(this.value).toFixed(2) : 100;
					percentInput.value = this.value;
					percentInput.dispatchEvent(event);
					break;
				case "gram":
					gramInput.value = this.value;
					gramInput.dispatchEvent(event);
					break;
				case "pieces":
					piecesInput.value = this.value;
					piecesInput.dispatchEvent(event);
					break;
				case "pieces_kg":
					pieces_kgInput.value = this.value;
					pieces_kgInput.dispatchEvent(event);
					break;
				case "ppm":
					ppmInput.value = this.value;
					ppmInput.dispatchEvent(event);
					break;
			}
		}
		else{
			var massInput = massInputBlock.parentNode.children[1].children[0];
			massInput.value = valueType;	
		}
		if(!refreshSortCheck){
			refreshSortCheck = true;
			refreshSortData();
			refreshSortCheck = false;
		}	
	}
}

//создание клона листа
function addPageСustomerProtocol(){
	// postWebDate();
	var row = protocolRequirements_0.cloneNode(true);
	var idRow = Number(protocolRequirements_MainBlock.children.length);

	row.style.display = '';
	row.id = 'protocolRequirements_' + idRow;
	//  titleBlock
	row.children[0].children[2].children[0].children[1].id = 'companyName_' + idRow + '_' + 'P';
	row.children[0].children[2].children[0].children[2].addEventListener('click', function (){addPageСustomerSort(); setupProtocoVersion()});
	row.children[0].children[2].children[1].children[1].id = 'userManagerName_' + idRow + '_P';
	row.children[0].children[2].children[1].children[1].addEventListener('change', setTitleTablePR('userManagerName_' + idRow + '_P'));
	row.children[0].children[2].children[2].children[1].id = 'createDateProtocol_' + idRow + '_P';
	row.children[0].children[2].children[2].children[1].addEventListener('change', setTitleTablePR('createDateProtocol_' + idRow + '_P'));
	//  pageContent
	row.children[1].children[0].children[0].id = 'defaultUnit_' + idRow + '_' + 'P';
	row.children[1].children[0].children[0].children[0].children[1].addEventListener('click', requirementsBlockVievProtocol(idRow));	
	row.children[1].children[0].children[0].children[2].children[1].children[0].id = 'massSelector_'+ idRow;	
	row.children[1].children[0].children[0].children[2].children[1].children[1].id = 'timeSelector_'+ idRow;		
	row.children[1].children[0].children[0].children[2].children[1].children[2].id = 'timeInput_'+ idRow;	
	row.children[1].children[0].children[0].children[2].children[2].children[0].id = 'mainFractionInput_'+ idRow;	
	row.children[1].children[0].children[0].children[2].children[2].children[1].id = 'suitableFractionInput_'+ idRow;	
	row.children[1].children[0].children[0].children[2].children[2].children[2].id = 'weedFractionInput_'+ idRow;	
	row.children[1].children[0].children[1].id = 'fraction_' + idRow + '_' + 'P';
	row.children[1].children[0].children[1].children[1].id = 'fractionSource_1_' + idRow + '_' + 'P';
	row.children[1].children[0].children[1].children[1].children[0].children[0].id = 'Source_1_' + idRow + '_' + 'P';
	row.children[1].children[0].children[1].children[1].children[1].id = 'ProtList_' + idRow + '_P';
	row.children[1].children[0].children[1].children[1].children[1].children[0].addEventListener('click', ProtListContentBlockViev('ProtListContent_' + idRow + '_P'));
	row.children[1].children[0].children[1].children[1].children[1].children[1].id = 'ProtListContent_' + idRow + '_P';
	row.children[1].children[0].children[1].children[2].id = 'fractionSource_2_' + idRow + '_' + 'P';
	row.children[1].children[0].children[1].children[2].children[0].children[0].id = 'Source_2_' + idRow + '_' + 'P';
	row.children[1].children[0].children[1].children[3].id = 'fractionSource_3_' + idRow + '_' + 'P';
	row.children[1].children[0].children[1].children[3].children[0].children[0].id = 'Source_3_' + idRow + '_' + 'P';

	row.children[1].children[0].children[2].children[1].id = 'fractionMainValues_1_' + idRow + '_' + 'P'; 
	row.children[1].children[0].children[2].children[1].children[0].children[0].children[0].id = 'pureInpStart_' + idRow + '_' + 'P';
	row.children[1].children[0].children[2].children[1].children[0].children[0].children[1].id = 'pureInpStartFake_' + idRow + '_P';
	row.children[1].children[0].children[2].children[1].children[0].children[0].children[1].addEventListener('change', setFakeProtocol('pureInpStartFake_' + idRow + '_P', 1));
	row.children[1].children[0].children[2].children[1].children[1].children[0].children[0].id = 'outputStart_' + idRow + '_' + 'P';
	row.children[1].children[0].children[2].children[1].children[1].children[0].children[0].addEventListener('click', ShowUpsertDropdownProtocol('outputStart_' + idRow + '_' + 'P', idRow));
	row.children[1].children[0].children[2].children[1].children[1].children[0].children[1].id = 'outputStartButton_' + idRow + '_' + 'P';
	row.children[1].children[0].children[2].children[1].children[2].children[0].children[0].id = 'percentStart_' + idRow + '_' + 'P';
	row.children[1].children[0].children[2].children[2].id = 'fractionMainValues_2_' + idRow + '_' + 'P';
	row.children[1].children[0].children[2].children[2].children[0].children[0].children[0].id = 'pureInpGood_' + idRow + '_' + 'P';
	row.children[1].children[0].children[2].children[2].children[0].children[0].children[1].id = 'pureInpGoodFake_' + idRow + '_P';
	row.children[1].children[0].children[2].children[2].children[0].children[0].children[1].addEventListener('change', setFakeProtocol('pureInpGoodFake_' + idRow + '_P', 2));
	row.children[1].children[0].children[2].children[2].children[1].children[0].children[0].id = 'outputGood_' + idRow + '_' + 'P';
	row.children[1].children[0].children[2].children[2].children[1].children[0].children[0].addEventListener('click', ShowUpsertDropdownProtocol('outputGood_' + idRow + '_' + 'P', idRow));
	row.children[1].children[0].children[2].children[2].children[1].children[0].children[1].id = 'outputGoodButton_' + idRow + '_' + 'P';
	row.children[1].children[0].children[2].children[2].children[2].children[0].children[0].id = 'percentGood_' + idRow + '_' + 'P';
	row.children[1].children[0].children[2].children[2].children[2].children[0].children[0].addEventListener('click', ShowUpsertDropdownProtocol('percentGood_' + idRow + '_' + 'P', idRow));
	row.children[1].children[0].children[2].children[2].children[2].children[1].id = 'percentGoodButton_' + idRow + '_' + 'P';
	row.children[1].children[0].children[2].children[3].id = 'fractionMainValues_3_' + idRow + '_' + 'P';
	row.children[1].children[0].children[2].children[3].children[0].children[0].children[0].id = 'pureInpTrash_' + idRow + '_' + 'P';
	row.children[1].children[0].children[2].children[3].children[0].children[0].children[1].id = 'pureInpTrashFake_' + idRow + '_P';
	row.children[1].children[0].children[2].children[3].children[0].children[0].children[1].addEventListener('change', setFakeProtocol('pureInpTrashFake_' + idRow + '_P', 3));
	row.children[1].children[0].children[2].children[3].children[1].children[0].children[0].id = 'outputTrash_' + idRow + '_' + 'P';
	row.children[1].children[0].children[2].children[3].children[1].children[0].children[0].addEventListener('click', ShowUpsertDropdownProtocol('outputTrash_' + idRow + '_' + 'P', idRow));
	row.children[1].children[0].children[2].children[3].children[1].children[1].id = 'outputTrashButton_' + idRow + '_' + 'P';
	row.children[1].children[0].children[2].children[3].children[2].children[0].children[0].id = 'percentTrash_' + idRow + '_' + 'P';
	row.children[1].children[0].children[2].children[3].children[2].children[0].children[0].addEventListener('click', ShowUpsertDropdownProtocol('percentTrash_' + idRow + '_' + 'P', idRow));
	row.children[1].children[0].children[2].children[3].children[2].children[1].id = 'percentTrashButton_' + idRow + '_' + 'P';
	row.children[1].children[0].children[3].id = 'lockBlock_' + idRow + '_' + 'P';
	row.children[1].children[0].children[3].children[1].id = 'fractionLockValue_1_' + idRow + '_' + 'P';
	row.children[1].children[0].children[3].children[1].children[0].children[0].children[0].id = 'Lock_1_' + idRow + '_' + 'P';
	row.children[1].children[0].children[3].children[1].children[0].children[0].children[0].addEventListener('click', CheckLockInputProtocol('Lock_1_' + idRow + '_' + 'P'));
	row.children[1].children[0].children[3].children[2].id = 'fractionLockValue_2_' + idRow + '_' + 'P';
	row.children[1].children[0].children[3].children[2].children[0].children[0].children[0].id = 'Lock_2_' + idRow + '_' + 'P';
	row.children[1].children[0].children[3].children[2].children[0].children[0].children[0].addEventListener('click', CheckLockInputProtocol('Lock_2_' + idRow + '_' + 'P'));
	row.children[1].children[0].children[3].children[3].id = 'fractionLockValue_3_' + idRow + '_' + 'P';
	row.children[1].children[0].children[3].children[3].children[0].children[0].children[0].id = 'Lock_3_' + idRow + '_' + 'P';
	row.children[1].children[0].children[3].children[3].children[0].children[0].children[0].addEventListener('click', CheckLockInputProtocol('Lock_3_' + idRow + '_' + 'P'));
	row.children[1].children[0].children[4].id  = 'rows_' + idRow + '_' + 'P'; 
	row.children[1].children[0].children[4].children[0].id = 'mainRow_0' + '_' + idRow + '_' + 'P';
	row.children[1].children[0].children[4].children[0].children[0].children[0].children[0].children[0].children[0].id = 'photoComponent_' + (idRow-1) + '_' + 'P';
	row.children[1].children[0].children[4].children[0].children[0].children[0].children[0].children[1].id = 'componentNumber_' + (idRow-1) + '_' + 'P';
	row.children[1].children[0].children[4].children[0].children[0].children[0].children[0].children[2].id = 'deleteButton_' + (idRow-1) + '_' + 'P';
	// 																rowBlock	rowOptionBlock filterBlock scrollRow	
	row.children[1].children[0].children[4].children[0].children[0].children[0].children[1].children[1].children[0].children[1].id = 'addOption_' + (idRow-1) + '_' + 'P';
	row.children[1].children[0].children[4].children[0].children[0].children[0].children[1].children[2].children[0].children[0].children[0].id = 'clsOption_0_' + (idRow-1) + '_' + 'P';
	row.children[1].children[0].children[4].children[0].children[0].children[0].children[1].children[2].children[3].children[1].id = 'photoBlockButton_' + (idRow-1) + '_' + 'P';
	row.children[1].children[0].children[5].children[0].id = 'addButton_' + idRow + '_' + 'P';
	row.children[1].children[0].children[5].children[0].addEventListener('click', addrowProtocol(idRow));
	var rowButton = row.children[1].children[0].children[5].children[0];
	protocolRequirements_MainBlock.appendChild(row);
	setupProtocolRow();
	prepareDefaultProtocolUnit(idRow);	
	createReqOrProtDiv(1, idRow, false);
	rowButton.click();
	rowButton.click();
	setupRequirementsTableProtocol(idRow);	
	hideProtocolAfterAddList();
	CalculateListNumberProtocol();
	document.getElementById('massSelector_'+ idRow).children[0].children[0].click();
	document.getElementById('timeSelector_'+ idRow).children[0].children[0].click();
	document.getElementById('dropdown-contentProtocol').children[0].lastElementChild.click();
	autoPageNumber();
		
	if(economicType != 'Prot'){
		document.getElementById('economicd_Req').click();
		document.getElementById('economicd_Prot').click();		
	}
	if(pageProtocolRow.length != 0){
		resetRowValueProt();	
	}
	var idRR = idRow + '_P';
	createExplainPage(idRR);
	TranslateProtPage(idRow);
	for(var i = 1; i < explain.children.length; i++){
        explain.children[i].children[0].children[1].children[0].textContent = Translate[0].Title[7][GlobalLang];
    }
}
	//удаление листа
function removePageCustomerProtocol(){
	var main = document.getElementById('dropdown-contentProtocol').children[0];
	if(pageProtocolRow.length >= 1){
		var mainBlock = document.getElementById('sortProtocol_MainBlock');
		for(var i = mainBlock.children.length; i > 1; i--){
			mainBlock.children[i-1].remove();
		}
		document.getElementById('protocolRequirements_' + ProtocolPage).remove();
		document.getElementById('explainPage_' + ProtocolPage + '_P').remove();
		document.getElementById('IMGTrash').children[1].children[ProtocolPage-1].remove();
		pageProtocolRow.splice(ProtocolPage-1, 1);
		//перезапись списка листов
		CalculateListNumberProtocol();
		refreshIDProtocolPage();
		
		/*переписывание айдишников страниц пояснения*/
		explainProtocolID = 0; 
		for(var i = 1; i < explain_MainBlock.children.length; i++){
			if(explain_MainBlock.children[i].id.split("_")[2] == "P"){
				explainProtocolID++;
				explain_MainBlock.children[i].id = "explainPage_" + explainProtocolID + "_P";
				explain_MainBlock.children[i].getElementsByClassName("newsBlock")[0].id = "NewsBlock_" + explainProtocolID + "_P";
				explain_MainBlock.children[i].getElementsByClassName("Messblock")[0].children[1].id = "Message_text_" + explainProtocolID + "_P";
				
				explain_MainBlock.children[i].getElementsByClassName("newsBlock")[0].getElementsByClassName("ql-link")[0].id = "NewPhoto_" + explainProtocolID + "_P"
				explain_MainBlock.children[i].getElementsByClassName("newsBlock")[0].getElementsByTagName("input")[0].id = "inpPhoto_" + explainProtocolID + "_P"
			}
		}
		/*Переписывание объекта картинок*/
		var imagesProtocolBlock = IMGTrash.children[1];
		for(var i = 1; i <= imagesProtocolBlock.children.length; i++){
			//Переписываем название блока
			var elementBlock = imagesProtocolBlock.children[i-1];
			elementBlock.setAttribute("type", "ProtPage_" + i);
			//Переписываем внутренние содержимое блока
			var FractionDataBlock = imagesProtocolBlock.children[i-1].children[0];
			var rowsFractionBlock = imagesProtocolBlock.children[i-1].children[1];
			var sortBlock = imagesProtocolBlock.children[i-1].children[2];
			
			/*Фотографии основных фракций*/
			var mainFractionBlock = FractionDataBlock.children[0];
			refreshFractionData(mainFractionBlock, i);
			var suitableFractionBlock  = FractionDataBlock.children[1];
			refreshFractionData(suitableFractionBlock, i);
			var weedFractionBlock  = FractionDataBlock.children[2];
			refreshFractionData(weedFractionBlock, i);
			
			
			/*Фотографии строк продуктов*/
			for(var k = 0; k < rowsFractionBlock.children.length; k++){
				var elementBlock = rowsFractionBlock.children[k];
				elementBlock.setAttribute("type", "prot_" + i + "_row_" + Number(k+1));
				refreshRowsFractionData(elementBlock, i);
			}
			
			/*Фотографии сортировок*/
			for(var k = 0; k < sortBlock.children.length; k++){				
				//Переписываем название блока
				var elementBlock = sortBlock.children[k];
				elementBlock.setAttribute("type", "ProtPage_" + i + "_SortPage_" + Number(k+1));
				//Переписываем внутренние содержимое блока
				var FractionDataBlock = elementBlock.children[0];
				var rowsFractionBlock = elementBlock.children[1];

				/*Фотографии основных фракций*/
				var mainFractionBlock = FractionDataBlock.children[0];
				refreshFractionDataSort(mainFractionBlock, k+1, i);
				var suitableFractionBlock  = FractionDataBlock.children[1];
				refreshFractionDataSort(suitableFractionBlock, k+1, i);
				var weedFractionBlock  = FractionDataBlock.children[2];
				refreshFractionDataSort(weedFractionBlock, k+1, i);

				/*Фотографии строк продуктов*/
				for(var z = 0; z < rowsFractionBlock.children.length; z++){
					var elementBlock = rowsFractionBlock.children[z];
					elementBlock.setAttribute("type", "prot_" + i + "_Sort_row_" + Number(z+1));
					refreshRowsFractionData(elementBlock, (k+1), i);
				}
			}
		}
		
		
	}
	
	if(pageProtocolRow.length != 0)
		main.children[1].click();
	else
		dropdown_ListNumberProtocol.textContent = "0"; 
	
	autoPageNumber();
}

function refreshFractionData(block, idProtocol){
	for(var i = 1; i <= block.children.length; i++){
		if(i < 9){
			block.children[i-1].id = block.children[i-1].id.replaceAt(15, String(idProtocol));
		}
		else{
			block.children[i-1].id = block.children[i-1].id.replaceAt(15, "");
			block.children[i-1].id = block.children[i-1].id.replaceAt(15, String(idProtocol));
		}
	}
}

function refreshRowsFractionData(block, idProtocol){
	for(var i = 0; i < block.children.length; i++){
		if(idProtocol < 9){
			block.children[0].id = block.children[0].id.replaceAt(23, String(idProtocol));
		}
		else{
			block.children[i].id = block.children[i].id.replaceAt(23, "");
			block.children[i].id = block.children[i].id.replaceAt(23, String(idProtocol));
		}
	}
}

function refreshFractionDataSort(block, idS, idProtocol){
	for(var i = 1; i <= block.children.length; i++){
		if(i < 9){
			block.children[i-1].id = block.children[i-1].id.replaceAt(15, String(idS));
			block.children[i-1].id = block.children[i-1].id.replaceAt(19, String(idProtocol));
		}
		else{
			block.children[i-1].id = block.children[i-1].id.replaceAt(15, "");
			block.children[i-1].id = block.children[i-1].id.replaceAt(15, String(idS));
			block.children[i-1].id = block.children[i-1].id.replaceAt(19, "");
			block.children[i-1].id = block.children[i-1].id.replaceAt(19, String(idProtocol));
		}
	}
}
function refreshRowsFractionData(block, idS, idProtocol){
	for(var i = 0; i < block.children.length; i++){
		if(idProtocol < 9){
			block.children[0].id = block.children[0].id.replaceAt(23, String(idS));
			block.children[0].id = block.children[0].id.replaceAt(27, String(idProtocol));
		}
		else{
			block.children[i].id = block.children[i].id.replaceAt(23, "");
			block.children[i].id = block.children[i].id.replaceAt(23, String(idS));
			block.children[i].id = block.children[i].id.replaceAt(27, "");
			block.children[i].id = block.children[i].id.replaceAt(23, String(idProtocol));
		}
	}
}



	//перезапись айди и слушателей листа и сторк в нем(тут еще хз в эту функу пихать или отдельно потом перебирать)
function refreshIDProtocolPage(){
	var pages = document.getElementById('protocolRequirements_MainBlock');
	for(var i = 1; i < pages.children.length; i++){
		var idRow = i;
		var cloneRow = clearEventListener(pages.children[i]);
		cloneRow.id = 'protocolRequirements_' + idRow;
		//  titleBlock
		cloneRow.children[0].children[2].children[0].children[1].id = 'companyName_' + idRow + '_' + 'P';
		cloneRow.children[0].children[2].children[0].children[2].addEventListener('click', function (){addPageСustomerSort(); setupProtocoVersion()});
		cloneRow.children[0].children[2].children[1].children[1].id = 'userManagerName_' + idRow + '_P';
		cloneRow.children[0].children[2].children[1].children[1].addEventListener('change', setTitleTablePR('userManagerName_' + idRow + '_P'));
		cloneRow.children[0].children[2].children[2].children[1].id = 'createDateProtocol_' + idRow + '_P';
		cloneRow.children[0].children[2].children[2].children[1].addEventListener('change', setTitleTablePR('createDateProtocol_' + idRow + '_P'));
		//  pageContent
		cloneRow.children[1].children[0].children[0].id = 'defaultUnit_' + idRow + '_' + 'P';
		cloneRow.children[1].children[0].children[0].children[0].children[1].addEventListener('click', requirementsBlockVievProtocol(idRow));	
		cloneRow.children[1].children[0].children[0].children[2].children[1].children[0].id = 'massSelector_'+ idRow;	
		cloneRow.children[1].children[0].children[0].children[2].children[1].children[1].id = 'timeSelector_'+ idRow;	
		cloneRow.children[1].children[0].children[0].children[2].children[1].children[2].id = 'timeInput_'+ idRow;	
		cloneRow.children[1].children[0].children[0].children[2].children[2].children[0].id = 'mainFractionInput_'+ idRow;	
		cloneRow.children[1].children[0].children[0].children[2].children[2].children[1].id = 'suitableFractionInput_'+ idRow;	
		cloneRow.children[1].children[0].children[0].children[2].children[2].children[2].id = 'weedFractionInput_'+ idRow;	
		cloneRow.children[1].children[0].children[1].id = 'fraction_' + idRow + '_' + 'P';
		cloneRow.children[1].children[0].children[1].children[1].id = 'fractionSource_1_' + idRow + '_' + 'P';
		cloneRow.children[1].children[0].children[1].children[1].children[0].children[0].id = 'Source_1_' + idRow + '_' + 'P';		
		cloneRow.children[1].children[0].children[1].children[1].children[1].id = 'ProtList_' + idRow + '_P';
		cloneRow.children[1].children[0].children[1].children[1].children[1].children[0].addEventListener('click', ProtListContentBlockViev('ProtListContent_' + idRow + '_P'));
		cloneRow.children[1].children[0].children[1].children[1].children[1].children[1].id = 'ProtListContent_' + idRow + '_P';
		cloneRow.children[1].children[0].children[1].children[2].id = 'fractionSource_2_' + idRow + '_' + 'P';
		cloneRow.children[1].children[0].children[1].children[2].children[0].children[0].id = 'Source_2_' + idRow + '_' + 'P';
		cloneRow.children[1].children[0].children[1].children[3].id = 'fractionSource_3_' + idRow + '_' + 'P';
		cloneRow.children[1].children[0].children[1].children[3].children[0].children[0].id = 'Source_3_' + idRow + '_' + 'P';
		cloneRow.children[1].children[0].children[2].children[1].id = 'fractionMainValues_1_' + idRow; 
		cloneRow.children[1].children[0].children[2].children[1].children[0].children[0].children[0].id = 'pureInpStart_' + idRow + '_' + 'P';
		cloneRow.children[1].children[0].children[2].children[1].children[0].children[0].children[1].id = 'pureInpStartFake_' + idRow + '_P';
		cloneRow.children[1].children[0].children[2].children[1].children[0].children[0].children[1].addEventListener('change', setFakeProtocol('pureInpStartFake_' + idRow + '_P', 1));
		cloneRow.children[1].children[0].children[2].children[1].children[1].children[0].children[0].id = 'outputStart_' + idRow + '_' + 'P';
		cloneRow.children[1].children[0].children[2].children[1].children[1].children[0].children[0].addEventListener('click', ShowUpsertDropdownProtocol('outputStart_' + idRow + '_' + 'P', idRow));
		cloneRow.children[1].children[0].children[2].children[1].children[1].children[0].children[1].id = 'outputStartButton_' + idRow + '_' + 'P';
		cloneRow.children[1].children[0].children[2].children[1].children[2].children[0].children[0].id = 'percentStart_' + idRow + '_' + 'P';
		cloneRow.children[1].children[0].children[2].children[2].id = 'fractionMainValues_2_' + idRow + '_' + 'P';
		cloneRow.children[1].children[0].children[2].children[2].children[0].children[0].children[0].id = 'pureInpGood_' + idRow + '_' + 'P';
		cloneRow.children[1].children[0].children[2].children[2].children[0].children[0].children[1].id = 'pureInpGoodFake_' + idRow + '_P';
		cloneRow.children[1].children[0].children[2].children[2].children[0].children[0].children[1].addEventListener('change', setFakeProtocol('pureInpGoodFake_' + idRow + '_P', 2));
		cloneRow.children[1].children[0].children[2].children[2].children[1].children[0].children[0].id = 'outputGood_' + idRow + '_' + 'P';
		cloneRow.children[1].children[0].children[2].children[2].children[1].children[0].children[0].addEventListener('click', ShowUpsertDropdownProtocol('outputGood_' + idRow + '_' + 'P', idRow));
		cloneRow.children[1].children[0].children[2].children[2].children[1].children[0].children[1].id = 'outputGoodButton_' + idRow + '_' + 'P';
		cloneRow.children[1].children[0].children[2].children[2].children[2].children[0].children[0].id = 'percentGood_' + idRow + '_' + 'P';
		cloneRow.children[1].children[0].children[2].children[2].children[2].children[0].children[0].addEventListener('click', ShowUpsertDropdownProtocol('percentGood_' + idRow + '_' + 'P', idRow));
		cloneRow.children[1].children[0].children[2].children[2].children[2].children[1].id = 'percentGoodButton_' + idRow + '_' + 'P';
		cloneRow.children[1].children[0].children[2].children[3].id = 'fractionMainValues_3_' + idRow + '_' + 'P';
		cloneRow.children[1].children[0].children[2].children[3].children[0].children[0].children[0].id = 'pureInpTrash_' + idRow + '_' + 'P';
		cloneRow.children[1].children[0].children[2].children[3].children[0].children[0].children[1].id = 'pureInpTrashFake_' + idRow + '_P';
		cloneRow.children[1].children[0].children[2].children[3].children[0].children[0].children[1].addEventListener('change', setFakeProtocol('pureInpTrashFake_' + idRow + '_P', 3));
		cloneRow.children[1].children[0].children[2].children[3].children[1].children[0].children[0].id = 'outputTrash_' + idRow + '_' + 'P';
		cloneRow.children[1].children[0].children[2].children[3].children[1].children[0].children[0].addEventListener('click', ShowUpsertDropdownProtocol('outputTrash_' + idRow + '_' + 'P', idRow));
		cloneRow.children[1].children[0].children[2].children[3].children[1].children[1].id = 'outputTrashButton_' + idRow + '_' + 'P';
		cloneRow.children[1].children[0].children[2].children[3].children[2].children[0].children[0].id = 'percentTrash_' + idRow + '_' + 'P';
		cloneRow.children[1].children[0].children[2].children[3].children[2].children[0].children[0].addEventListener('click', ShowUpsertDropdownProtocol('percentTrash_' + idRow + '_' + 'P', idRow));
		cloneRow.children[1].children[0].children[2].children[3].children[2].children[1].id = 'percentTrashButton_' + idRow + '_' + 'P';
		cloneRow.children[1].children[0].children[3].id = 'lockBlock_' + idRow + '_' + 'P';
		cloneRow.children[1].children[0].children[3].children[1].id = 'fractionLockValue_1_' + idRow + '_' + 'P';
		cloneRow.children[1].children[0].children[3].children[1].children[0].children[0].children[0].id = 'Lock_1_' + idRow + '_' + 'P';
		cloneRow.children[1].children[0].children[3].children[1].children[0].children[0].children[0].addEventListener('click', CheckLockInputProtocol('Lock_1_' + idRow + '_' + 'P'));
		cloneRow.children[1].children[0].children[3].children[2].id = 'fractionLockValue_2_' + idRow + '_' + 'P';
		cloneRow.children[1].children[0].children[3].children[2].children[0].children[0].children[0].id = 'Lock_2_' + idRow + '_' + 'P';
		cloneRow.children[1].children[0].children[3].children[2].children[0].children[0].children[0].addEventListener('click', CheckLockInputProtocol('Lock_2_' + idRow + '_' + 'P'));
		cloneRow.children[1].children[0].children[3].children[3].id = 'fractionLockValue_3_' + idRow + '_' + 'P';
		cloneRow.children[1].children[0].children[3].children[3].children[0].children[0].children[0].id = 'Lock_3_' + idRow + '_' + 'P';
		cloneRow.children[1].children[0].children[3].children[3].children[0].children[0].children[0].addEventListener('click', CheckLockInputProtocol('Lock_3_' + idRow + '_' + 'P'));
		cloneRow.children[1].children[0].children[4].id  = 'rows_' + idRow + '_' + 'P'; 		
		cloneRow.children[1].children[0].children[4].children[0].id = 'mainRow_0' + '_' + idRow + '_' + 'P';
		cloneRow.children[1].children[0].children[4].children[0].children[0].children[0].children[0].children[0].children[0].id = 'photoComponent_' + (idRow-1) + '_' + 'P';
		cloneRow.children[1].children[0].children[4].children[0].children[0].children[0].children[0].children[1].id = 'componentNumber_' + (idRow-1) + '_' + 'P';
		cloneRow.children[1].children[0].children[4].children[0].children[0].children[0].children[0].children[2].id = 'deleteButton_' + (idRow-1) + '_' + 'P';
		// 																rowBlock	rowOptionBlock filterBlock scrollRow	
		cloneRow.children[1].children[0].children[4].children[0].children[0].children[0].children[1].children[1].children[0].children[1].id = 'addOption_' + (idRow-1) + '_' + 'P';
		cloneRow.children[1].children[0].children[4].children[0].children[0].children[0].children[1].children[2].children[0].children[0].children[0].id = 'clsOption_0_' + (idRow-1) + '_' + 'P';
		cloneRow.children[1].children[0].children[4].children[0].children[0].children[0].children[1].children[2].children[3].children[1].id = 'photoBlockButton_' + (idRow-1) + '_' + 'P';
		cloneRow.children[1].children[0].children[5].children[0].id = 'addButton_' + idRow + '_' + 'P';
		cloneRow.children[1].children[0].children[5].children[0].addEventListener('click', addrowProtocol(idRow));
		var list = cloneRow.children[1].children[0].children[4];
		for(var k = 0; k < list.children.length; k++){
			list.children[k].id = 'mainRow_' + k + '_' + idRow + '_' + 'P';
		}		
		
		refreshIDProtocol(idRow);
	}
}
//создание клона строки
function addrowProtocol(pageID){
	return function e(){
		HideAllDropdownProtocol(pageID);
		var mainRow = document.getElementById('mainRow_0_' + (pageID) + '_' + 'P');
		var row = mainRow.cloneNode(true);
		var rows = document.getElementById('rows_' + pageID + '_' + 'P');
		var idRow = Number(rows.children.length);
		row.style.display = 'flex';
		row.id = 'mainRow_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[0].id = 'rowNumberId_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[0].addEventListener('mouseenter', ShowDeleteButton('rowNumberId_' + idRow + '_' + pageID + '_' + 'P'));
		row.children[0].children[0].children[0].addEventListener('mouseleave', HideDeleteButton('rowNumberId_' + idRow + '_' + pageID + '_' + 'P'));
		row.children[0].children[0].children[0].children[0].children[0].id = 'photoComponent_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[0].children[1].id = 'componentNumber_00_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[0].children[1].textContent = idRow;
		row.children[0].children[0].children[0].children[2].id = 'deleteButton_00_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[0].children[2].addEventListener('click', removeRowProtocol('deleteButton_00_' + idRow + '_' + pageID + '_' + 'P'));
		// classifier
		row.children[0].children[0].children[1].id = 'classifier_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[1].children[0].id = 'clsInputResultBlock_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[1].children[0].children[0].id = 'classifierInpurResult_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[1].children[0].children[1].children[0].id = 'controlButtonIdHide_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[1].children[0].children[1].children[0].addEventListener('click', HideDropdownProtocol('controlButtonIdHide_' + idRow + '_' + pageID + '_' + 'P'));
		row.children[0].children[0].children[1].children[0].children[1].children[0].addEventListener('click', refreshMassof1000Protocol(idRow, pageID));
		row.children[0].children[0].children[1].children[1].children[0].children[0].id = 'clsInput_test_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[1].children[1].children[0].children[0].addEventListener('focus', ShowDropdownProtocol(idRow, pageID));
		row.children[0].children[0].children[1].children[1].children[0].children[0].addEventListener('input', StartInputListenersProtocol(idRow, pageID));
		row.children[0].children[0].children[1].children[1].children[0].children[1].id = 'addOption_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[1].children[1].children[0].children[1].addEventListener('click', searchidProtocol(idRow, pageID));
		row.children[0].children[0].children[1].children[2].id = 'clsDropdown_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[1].children[2].children[0].children[0].children[0].id = 'clsOption_0_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[1].children[2].children[1].id = 'infoTitle_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[1].children[2].children[1].children[1].id = 'infoBlockButton_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[1].children[2].children[1].children[1].addEventListener('click', infoBlockProtocol(idRow, pageID));
		row.children[0].children[0].children[1].children[2].children[2].id = 'infoBlock_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[1].children[2].children[3].id = 'photoTitle_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[1].children[2].children[3].children[1].id = 'photoBlockButton_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[1].children[2].children[3].children[1].addEventListener('click', photoBlockProtocol(idRow, pageID));
		row.children[0].children[0].children[1].children[2].children[4].id = 'photoBlock_' + idRow + '_' + pageID + '_' + 'P';
		// valueBlock	
		row.children[0].children[0].children[2].id = 'valueBlock_1_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[2].children[0].id = 'massInputBlock_1_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[2].children[0].children[0].children[0].addEventListener('change', changeMassValueProtocol('massDropdown_1_' + idRow + '_' + pageID + '_' + 'P', 'massInputBlock_1_' + idRow + '_' + pageID + '_' + 'P'));
		row.children[0].children[0].children[2].children[0].children[4].id = 'controlButtonId_1_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[2].children[0].children[4].addEventListener('click', HideMassDropdownProtocol('controlButtonId_1_' + idRow + '_' + pageID + '_' + 'P'));
		row.children[0].children[0].children[2].children[1].id = 'massInputResultBlock_1_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[2].children[1].children[0].id = 'massInput_1_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[2].children[1].children[0].addEventListener('click', ShowMassDropdownProtocol('massInput_1_' + idRow + '_' + pageID + '_' + 'P'));
		row.children[0].children[0].children[2].children[2].id = 'moreTitle_1_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[2].children[2].children[1].id = 'moreBlockButton_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[2].children[2].children[1].addEventListener('click', moreBlock('moreBlock_' + idRow + '_' + pageID + '_' + 'P','moreBlockButton_' + idRow + '_' + pageID + '_' + 'P' , 'moreTitle_1_' + idRow + '_' + pageID + '_' + 'P'));
		row.children[0].children[0].children[2].children[3].id = 'moreBlock_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[2].children[3].children[0].id = 'massDropdown_1_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[2].children[0].children[1].children[0].addEventListener("click", switchToggleProtocol);
		row.children[0].children[0].children[2].children[0].children[1].children[0].addEventListener("click", checkotherToggleProtocol(idRow, pageID));
		row.children[0].children[0].children[2].children[0].children[2].children[0].addEventListener("click", switchToggleProtocol);
		row.children[0].children[0].children[2].children[0].children[3].children[0].addEventListener("click", switchToggleProtocol);
		// valueBlock_2	
		row.children[0].children[0].children[3].id = 'valueBlock_2_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[3].children[0].id = 'massInputBlock_2_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[3].children[0].children[0].children[0].addEventListener('change', changeMassValueProtocol('massDropdown_2_' + idRow + '_' + pageID + '_' + 'P', 'massInputBlock_2_' + idRow + '_' + pageID + '_' + 'P'));
		row.children[0].children[0].children[3].children[0].children[4].id = 'controlButtonId_2_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[3].children[0].children[4].addEventListener('click', HideMassDropdownProtocol('controlButtonId_2_' + idRow + '_' + pageID + '_' + 'P'));
		row.children[0].children[0].children[3].children[1].id = 'massInputResultBlock_2_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[3].children[1].children[0].id = 'massInput_2_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[3].children[1].children[0].addEventListener('click', ShowMassDropdownProtocol('massInput_2_' + idRow + '_' + pageID + '_' + 'P'));
		row.children[0].children[0].children[3].children[2].id = 'moreTitle_2_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[3].children[2].children[1].id = 'moreBlockButton_2_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[3].children[2].children[1].addEventListener('click', moreBlock('moreBlock_2_' + idRow + '_' + pageID + '_' + 'P','moreBlockButton_2_' + idRow + '_' + pageID + '_' + 'P', 'moreTitle_2_' + idRow + '_' + pageID + '_' + 'P'));
		row.children[0].children[0].children[3].children[3].id = 'moreBlock_2_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[3].children[3].children[0].id = 'massDropdown_2_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[3].children[0].children[1].children[0].addEventListener("click", switchToggleProtocol);
		row.children[0].children[0].children[3].children[0].children[1].children[0].addEventListener("click", checkotherToggleProtocol(idRow, pageID));
		row.children[0].children[0].children[3].children[0].children[2].children[0].addEventListener("click", switchToggleProtocol);
		row.children[0].children[0].children[3].children[0].children[3].children[0].addEventListener("click", switchToggleProtocol);
		// valueBlock_3	
		row.children[0].children[0].children[4].id = 'valueBlock_3_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[4].children[0].id = 'massInputBlock_3_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[4].children[0].children[0].children[0].addEventListener('change', changeMassValueProtocol('massDropdown_3_' + idRow + '_' + pageID + '_' + 'P', 'massInputBlock_3_' + idRow + '_' + pageID + '_' + 'P'));
		row.children[0].children[0].children[4].children[0].children[4].id = 'controlButtonId_3_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[4].children[0].children[4].addEventListener('click', HideMassDropdownProtocol('controlButtonId_3_' + idRow + '_' + pageID + '_' + 'P'));
		row.children[0].children[0].children[4].children[1].id = 'massInputResultBlock_3_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[4].children[1].children[0].id = 'massInput_3_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[4].children[1].children[0].addEventListener('click', ShowMassDropdownProtocol('massInput_3_' + idRow + '_' + pageID + '_' + 'P'));
		row.children[0].children[0].children[4].children[2].id = 'moreTitle_3_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[4].children[2].children[1].id = 'moreBlockButton_3_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[4].children[2].children[1].addEventListener('click', moreBlock('moreBlock_3_' + idRow + '_' + pageID + '_' + 'P','moreBlockButton_3_' + idRow + '_' + pageID + '_' + 'P', 'moreTitle_3_' + idRow + '_' + pageID + '_' + 'P'));
		row.children[0].children[0].children[4].children[3].id = 'moreBlock_3_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[4].children[3].children[0].id = 'massDropdown_3_' + idRow + '_' + pageID + '_' + 'P';
		row.children[0].children[0].children[4].children[0].children[1].children[0].addEventListener("click", switchToggleProtocol);
		row.children[0].children[0].children[4].children[0].children[1].children[0].addEventListener("click", checkotherToggleProtocol(idRow, pageID));
		row.children[0].children[0].children[4].children[0].children[2].children[0].addEventListener("click", switchToggleProtocol);
		row.children[0].children[0].children[4].children[0].children[3].children[0].addEventListener("click", switchToggleProtocol);
		rows.appendChild(row);
		//Изначальное значение строк
		generateProtocolRow(pageID-1);
		mathfComponentFunctionProtocol('massDropdown_1_' + idRow + '_' + pageID + '_' + 'P');
		mathfComponentFunctionProtocol('massDropdown_2_' + idRow + '_' + pageID + '_' + 'P');
		mathfComponentFunctionProtocol('massDropdown_3_' + idRow + '_' + pageID + '_' + 'P');
		pageProtocolRow[pageID-1].ProtocolRow[idRow-1].component_name = document.getElementById("clsInput_test_"+idRow + '_' + pageID + '_' + 'P').placeholder;
		switch(String(idRow)){
			case'1':
				document.getElementById("clsInput_test_"+idRow + '_' + pageID + '_' + 'P').placeholder = 'Продукт';
				pageProtocolRow[pageID-1].ProtocolRow[idRow-1].component_name = document.getElementById("clsInput_test_"+idRow + '_' + pageID + '_' + 'P').placeholder;
				break;
			case'2':
				document.getElementById("clsInput_test_"+idRow + '_' + pageID + '_' + 'P').placeholder = 'Засоритель';
				pageProtocolRow[pageID-1].ProtocolRow[idRow-1].component_name = document.getElementById("clsInput_test_"+idRow + '_' + pageID + '_' + 'P').placeholder;
				document.getElementById('massInputBlock_1_2' + '_' + pageID + '_' + 'P').children[3].children[0].click();
				document.getElementById('massInputBlock_2_2' + '_' + pageID + '_' + 'P').children[3].children[0].click();
				document.getElementById('massInputBlock_3_2' + '_' + pageID + '_' + 'P').children[3].children[0].click();
				break;
			default:
				document.getElementById('massInputBlock_1_'+idRow + '_' + pageID + '_' + 'P').children[3].children[0].click();
				document.getElementById('massInputBlock_2_'+idRow + '_' + pageID + '_' + 'P').children[3].children[0].click();
				document.getElementById('massInputBlock_3_'+idRow + '_' + pageID + '_' + 'P').children[3].children[0].click();
				break;
		}	
		switchDropdownMassProtocol('massDropdown_1_' + idRow + '_' + pageID + '_' + 'P');
		updateRemovedPercentProtocol(pageID);
		// тут функа на проверку и добавление строк в сортировки
		addSortRowByProtocol();
		if(token == true){
			setupProtocoVersion();
		}	
		setupPhotosProtRow(pageID-1);
		addRowDiv(1,pageID, idRow, false);
		changeRowProtLang(pageID, idRow);
	}
	
}
function removeRowProtocol(remove){
	return function e(){
		var pageID = Number(remove.split('_')[3]);
		var rowID = Number(remove.split('_')[2]);
		var elementRemove = document.getElementById(remove).parentNode.parentNode.parentNode.parentNode.id;
		document.getElementById(elementRemove).remove();
		
		var idComponentRow = Number(elementRemove.split("_")[1]-1);
		document.getElementById('IMGTrash').children[1].children[ProtocolPage-1].children[1].children[idComponentRow].remove();		
		pageProtocolRow[pageID-1].ProtocolRow.splice(idComponentRow, 1);
		pageProtocolRow[pageID-1].photoContainer.rowsFraction.splice(idComponentRow, 1);		
		refreshIDProtocol(pageID);
		updateRemovedPercentProtocol(pageID);
		removeSortRowByProtocol(rowID);
	}
}
function refreshIDProtocol(pageID){
	var rows = document.getElementById('rows_' + pageID + '_' + 'P');
	for(var i = 1; i < rows.children.length; i++){
		var idRow = i;
		var cloneRow = clearEventListener(rows.children[i]);
		
		cloneRow.id = 'mainRow_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[0].id = 'rowNumberId_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[0].addEventListener('mouseenter', ShowDeleteButton('rowNumberId_' + idRow + '_' + pageID + '_' + 'P'));
		cloneRow.children[0].children[0].children[0].addEventListener('mouseleave', HideDeleteButton('rowNumberId_' + idRow + '_' + pageID + '_' + 'P'));
		cloneRow.children[0].children[0].children[0].children[0].children[0].id = 'photoComponent_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[0].children[1].id = 'componentNumber_00_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[0].children[1].textContent = idRow;
		cloneRow.children[0].children[0].children[0].children[2].id = 'deleteButton_00_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[0].children[2].addEventListener('click', removeRowProtocol('deleteButton_00_' + idRow + '_' + pageID + '_' + 'P'));
		// classifier
		cloneRow.children[0].children[0].children[1].id = 'classifier_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[1].children[0].id = 'clsInputResultBlock_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[1].children[0].children[0].id = 'classifierInpurResult_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[1].children[0].children[1].children[0].id = 'controlButtonIdHide_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[1].children[0].children[1].children[0].addEventListener('click', HideDropdownProtocol('controlButtonIdHide_' + idRow + '_' + pageID + '_' + 'P'));
		cloneRow.children[0].children[0].children[1].children[0].children[1].children[0].addEventListener('click', refreshMassof1000Protocol(idRow, pageID));
		cloneRow.children[0].children[0].children[1].children[1].children[0].children[0].id = 'clsInput_test_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[1].children[1].children[0].children[0].addEventListener('focus', ShowDropdownProtocol(idRow, pageID));
		cloneRow.children[0].children[0].children[1].children[1].children[0].children[0].addEventListener('input', StartInputListenersProtocol(idRow, pageID));
		cloneRow.children[0].children[0].children[1].children[1].children[0].children[1].id = 'addOption_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[1].children[1].children[0].children[1].addEventListener('click', searchidProtocol(idRow, pageID));
		cloneRow.children[0].children[0].children[1].children[2].id = 'clsDropdown_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[1].children[2].children[0].children[0].children[0].id = 'clsOption_0_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[1].children[2].children[1].id = 'infoTitle_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[1].children[2].children[1].children[1].id = 'infoBlockButton_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[1].children[2].children[1].children[1].addEventListener('click', infoBlockProtocol(idRow, pageID));
		cloneRow.children[0].children[0].children[1].children[2].children[2].id = 'infoBlock_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[1].children[2].children[3].id = 'photoTitle_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[1].children[2].children[3].children[1].id = 'photoBlockButton_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[1].children[2].children[3].children[1].addEventListener('click', photoBlockProtocol(idRow, pageID));
		cloneRow.children[0].children[0].children[1].children[2].children[4].id = 'photoBlock_' + idRow + '_' + pageID + '_' + 'P';
		// valueBlock	
		cloneRow.children[0].children[0].children[2].id = 'valueBlock_1_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[2].children[0].id = 'massInputBlock_1_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[2].children[0].children[0].children[0].addEventListener('change', changeMassValueProtocol('massDropdown_1_' + idRow + '_' + pageID + '_' + 'P', 'massInputBlock_1_' + idRow + '_' + pageID + '_' + 'P'));
		cloneRow.children[0].children[0].children[2].children[0].children[4].id = 'controlButtonId_1_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[2].children[0].children[4].addEventListener('click', HideMassDropdownProtocol('controlButtonId_1_' + idRow + '_' + pageID + '_' + 'P'));
		cloneRow.children[0].children[0].children[2].children[1].id = 'massInputResultBlock_1_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[2].children[1].children[0].id = 'massInput_1_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[2].children[1].children[0].addEventListener('click', ShowMassDropdownProtocol('massInput_1_' + idRow + '_' + pageID + '_' + 'P'));
		cloneRow.children[0].children[0].children[2].children[2].id = 'moreTitle_1_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[2].children[2].children[1].id = 'moreBlockButton_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[2].children[2].children[1].addEventListener('click', moreBlock('moreBlock_' + idRow + '_' + pageID + '_' + 'P','moreBlockButton_' + idRow + '_' + pageID + '_' + 'P' , 'moreTitle_1_' + idRow + '_' + pageID + '_' + 'P'));
		cloneRow.children[0].children[0].children[2].children[3].id = 'moreBlock_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[2].children[3].children[0].id = 'massDropdown_1_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[2].children[0].children[1].children[0].addEventListener("click", switchToggleProtocol);
		cloneRow.children[0].children[0].children[2].children[0].children[1].children[0].addEventListener("click", checkotherToggleProtocol(idRow, pageID));
		cloneRow.children[0].children[0].children[2].children[0].children[2].children[0].addEventListener("click", switchToggleProtocol);
		cloneRow.children[0].children[0].children[2].children[0].children[3].children[0].addEventListener("click", switchToggleProtocol);
		mathfComponentFunctionProtocol('massDropdown_1_' + idRow + '_' + pageID + '_' + 'P');
		// valueBlock_2	
		cloneRow.children[0].children[0].children[3].id = 'valueBlock_2_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[3].children[0].id = 'massInputBlock_2_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[3].children[0].children[0].children[0].addEventListener('change', changeMassValueProtocol('massDropdown_2_' + idRow + '_' + pageID + '_' + 'P', 'massInputBlock_2_' + idRow + '_' + pageID + '_' + 'P'));
		cloneRow.children[0].children[0].children[3].children[0].children[4].id = 'controlButtonId_2_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[3].children[0].children[4].addEventListener('click', HideMassDropdownProtocol('controlButtonId_2_' + idRow + '_' + pageID + '_' + 'P'));
		cloneRow.children[0].children[0].children[3].children[1].id = 'massInputResultBlock_2_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[3].children[1].children[0].id = 'massInput_2_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[3].children[1].children[0].addEventListener('click', ShowMassDropdownProtocol('massInput_2_' + idRow + '_' + pageID + '_' + 'P'));
		cloneRow.children[0].children[0].children[3].children[2].id = 'moreTitle_2_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[3].children[2].children[1].id = 'moreBlockButton_2_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[3].children[2].children[1].addEventListener('click', moreBlock('moreBlock_2_' + idRow + '_' + pageID,'moreBlockButton_2_' + idRow + '_' + pageID + '_' + 'P', 'moreTitle_2_' + idRow + '_' + pageID + '_' + 'P'));
		cloneRow.children[0].children[0].children[3].children[3].id = 'moreBlock_2_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[3].children[3].children[0].id = 'massDropdown_2_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[3].children[0].children[1].children[0].addEventListener("click", switchToggleProtocol);
		cloneRow.children[0].children[0].children[3].children[0].children[1].children[0].addEventListener("click", checkotherToggleProtocol(idRow, pageID));
		cloneRow.children[0].children[0].children[3].children[0].children[2].children[0].addEventListener("click", switchToggleProtocol);
		cloneRow.children[0].children[0].children[3].children[0].children[3].children[0].addEventListener("click", switchToggleProtocol);
		mathfComponentFunctionProtocol('massDropdown_2_' + idRow + '_' + pageID + '_' + 'P');
		// valueBlock_3	
		cloneRow.children[0].children[0].children[4].id = 'valueBlock_3_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[4].children[0].id = 'massInputBlock_3_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[4].children[0].children[0].children[0].addEventListener('change', changeMassValueProtocol('massDropdown_3_' + idRow + '_' + pageID + '_' + 'P', 'massInputBlock_3_' + idRow + '_' + pageID + '_' + 'P'));
		cloneRow.children[0].children[0].children[4].children[0].children[4].id = 'controlButtonId_3_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[4].children[0].children[4].addEventListener('click', HideMassDropdownProtocol('controlButtonId_3_' + idRow + '_' + pageID + '_' + 'P'));
		cloneRow.children[0].children[0].children[4].children[1].id = 'massInputResultBlock_3_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[4].children[1].children[0].id = 'massInput_3_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[4].children[1].children[0].addEventListener('click', ShowMassDropdownProtocol('massInput_3_' + idRow + '_' + pageID + '_' + 'P'));
		cloneRow.children[0].children[0].children[4].children[2].id = 'moreTitle_3_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[4].children[2].children[1].id = 'moreBlockButton_3_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[4].children[2].children[1].addEventListener('click', moreBlock('moreBlock_3_' + idRow + '_' + pageID + '_' + 'P','moreBlockButton_3_' + idRow + '_' + pageID + '_' + 'P', 'moreTitle_3_' + idRow + '_' + pageID + '_' + 'P'));
		cloneRow.children[0].children[0].children[4].children[3].id = 'moreBlock_3_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[4].children[3].children[0].id = 'massDropdown_3_' + idRow + '_' + pageID + '_' + 'P';
		cloneRow.children[0].children[0].children[4].children[0].children[1].children[0].addEventListener("click", switchToggleProtocol);
		cloneRow.children[0].children[0].children[4].children[0].children[1].children[0].addEventListener("click", checkotherToggleProtocol(idRow, pageID));
		cloneRow.children[0].children[0].children[4].children[0].children[2].children[0].addEventListener("click", switchToggleProtocol);
		cloneRow.children[0].children[0].children[4].children[0].children[3].children[0].addEventListener("click", switchToggleProtocol);
		mathfComponentFunctionProtocol('massDropdown_3_' + idRow + '_' + pageID + '_' + 'P');
		switchDropdownMassProtocol('massDropdown_1_' + idRow + '_' + pageID + '_' + 'P');
		switch(String(idRow)){
			case'1':
				var clsInput_test1 = document.getElementById('clsInput_test_1_' + pageID + '_' + 'P');
				clsInput_test1.placeholder = 'Продукт';
				break;
			case'2':
				var clsInput_test2 = document.getElementById('clsInput_test_2_' + pageID + '_' + 'P');
				clsInput_test2.placeholder = 'Засоритель';
				break;
		}	
		refreshListenersProtocol(idRow, pageID);		
	}
}
function refreshListenersProtocol(idRow, pageID){
	var rows = document.getElementById('rows_' + pageID + '_' + 'P');
	for(var i = 1; i < rows.children.length;i++){
		var classifierInpurResult = document.getElementById('classifierInpurResult_'+ i + '_' + pageID + '_' + 'P');
		if(classifierInpurResult != null && classifierInpurResult.children.length != 0 ){
			for(var k = 0; k < classifierInpurResult.children.length; k++){
				classifierInpurResult.children[k].addEventListener("click", function(){
					this.remove();
					StartInputProtocol(idRow, pageID);
					// changeClassifierProtocol(idRow, pageID);
				});
			}
		}
		
	}
}
function StartInputProtocol(idRow, pageID){
	var inputBlock = document.getElementById("clsInput_test_" + idRow + '_' + pageID + '_' + 'P');
	var clsDropdown = document.getElementById("clsDropdown_" + idRow + '_' + pageID + '_' + 'P');
	DoropdownOptionClearProtocol(idRow, pageID);
	if(inputBlock.value.length == 0){
		DropdownOptionDefaultProtocol(idRow, pageID);
	}
	else{
		DropdownSearchProtocol(idRow, pageID);
	}	
	clsDropdown.style.display="flex";
}
function DoropdownOptionClearProtocol(idRow, pageID){
	var clsDropdown = document.getElementById("clsDropdown_" + idRow + '_' + pageID + '_' + 'P');
	var dropdownOptions = clsDropdown.children[0];
	//Стартовая отчиска от лишних элементов
	for(var i = dropdownOptions.children.length - 1; i > 0; i--){
		dropdownOptions.children[i].remove();
	}
}
function DropdownOptionDefaultProtocol(idRow, pageID){
	var clsDropdown = document.getElementById("clsDropdown_" + idRow + '_' + pageID + '_' + 'P');
	var dropdownOptions =  clsDropdown.children[0];
	var dropdownOptionClone = clsDropdown.children[0].children[0];
	var classifierInpurResult = document.getElementById("classifierInpurResult_" + idRow + '_' + pageID + '_' + 'P');
	
	var listElements = [productNameList, weedNameList, productTypeList, weedClassList, descriptionList, componentPartsList, componentStatusList, componentColorList];
	
	//Проверки
	for(var i = 0; i < classifierInpurResult.children.length; i++){
		var resultType = classifierInpurResult.children[i].id.split('_')[1];
		if(resultType == "product"){
			var ID_product = Number(classifierInpurResult.children[i].id.split('_')[2]);
			listElements = checkResultOption(listElements, productNameList);
			listElements = checkResultOption(listElements, weedNameList);
			listElements = checkResultOption(listElements, componentColorList);
		}
		if(resultType == "weed"){
			var ID_weed = Number(classifierInpurResult.children[i].id.split('_')[2]);
			listElements = checkResultOption(listElements, productNameList);
			listElements = checkResultOption(listElements, weedNameList);
			listElements = checkResultOption(listElements, descriptionList);
			listElements = checkResultOption(listElements, componentPartsList);
			listElements = checkResultOption(listElements, componentStatusList);
		}
		if(resultType == "productType"){
			var ID_productType = Number(classifierInpurResult.children[i].id.split('_')[2]);
			listElements = checkResultOption(listElements, weedNameList);
			listElements = checkResultOption(listElements, productTypeList);
		}
		if(resultType == "weedClass"){
			var ID_weedClass = Number(classifierInpurResult.children[i].id.split('_')[2]);
			listElements = checkResultOption(listElements, productNameList);
			listElements = checkResultOption(listElements, weedClassList);
			listElements = checkResultOption(listElements, descriptionList)
		}
		if(resultType == "discription"){
			listElements = checkResultOption(listElements, descriptionList);
			listElements = checkResultOption(listElements, weedNameList);
		}
		if(resultType == "parts"){
			listElements = checkResultOption(listElements, componentPartsList);
		}
		if(resultType == "status"){
			listElements = checkResultOption(listElements, componentStatusList);
		}
		if(resultType == "color"){
			listElements = checkResultOption(listElements, componentColorList);
		}
	}
	
	for(var i = 0; i < listElements.length; i++){
		var __list = listElements[i];	
		if(__list == productNameList || __list == weedNameList){
			if(ID_productType == null && ID_weedClass == null){
				for(var k = 0; k < list_protocolTop.length; k++){
					for(var el = 0 ; el < __list.length; el++){
						if(list_protocolTop[k] == __list[el].name){
							var option = dropdownOptionClone.cloneNode(true);
							option.style.display = "";
							option.children[0].setAttribute('name', returnTableType(listElements[i]));
							option.children[0].id = returnTableType(listElements[i]) + "_" + __list[el].id;
							option.children[0].value = __list[el].name;
							dropdownOptions.appendChild(option);
							
							option.children[0].addEventListener("click", function(){addResultOptionProtocol(this.id, idRow, pageID)});
							break;
						}
					}
				}
			}
			else if(ID_productType != null){
				var id = list_productType[ID_productType].id_product;
				var option = dropdownOptionClone.cloneNode(true);
				option.style.display = "";
				option.children[0].setAttribute('name', "product");
				option.children[0].id =  "product_" + list_product[id].id_product;
				option.children[0].value = list_product[id].productName;
				dropdownOptions.appendChild(option);
				
				option.children[0].addEventListener("click", function(){addResultOptionProtocol(this.id, idRow, pageID)});
			}
			else if (ID_weedClass != null){
				for(var k = 0; k < list_weed.length; k++){
					if(list_weed[k].id_class == ID_weedClass){
						var option = dropdownOptionClone.cloneNode(true);
						option.style.display = "";
						option.children[0].setAttribute('name', "weed");
						option.children[0].id = "weed_" + list_weed[k].id_weed;
						option.children[0].value = list_weed[k].weedName;
						dropdownOptions.appendChild(option);
						
						option.children[0].addEventListener("click", function(){addResultOptionProtocol(this.id, idRow, pageID)});
					}
				}
			}
		}
		else if(__list == productTypeList && ID_product != null){
			for(var k = 0; k < list_productType.length; k++){
				for(var el = 0 ; el < __list.length; el++){
					if(list_productType[k].id_product == ID_product && list_productType[k].productTypeName == __list[el].name){
						var option = dropdownOptionClone.cloneNode(true);
						option.style.display = "";
						option.children[0].setAttribute('name', returnTableType(listElements[i]));
						option.children[0].id = returnTableType(listElements[i]) + "_" + __list[el].id;
						option.children[0].value = __list[el].name;
						dropdownOptions.appendChild(option);
						
						option.children[0].addEventListener("click", function(){addResultOptionProtocol(this.id, idRow, pageID)});
						break;
					}
				}
			}
		}
		else if(__list == weedClassList && ID_weed != null){
			for(var k = 0; k < list_classWeed.length; k++){
				for(var el = 0 ; el < __list.length; el++){
					if(list_classWeed[k].id_class == list_weed[ID_weed].id_class && list_classWeed[k].className == __list[el].name){
						var option = dropdownOptionClone.cloneNode(true);
						option.style.display = "";
						option.children[0].setAttribute('name', returnTableType(listElements[i]));
						option.children[0].id = returnTableType(listElements[i]) + "_" + __list[el].id;
						option.children[0].value = __list[el].name;
						dropdownOptions.appendChild(option);
						
						option.children[0].addEventListener("click", function(){addResultOptionProtocol(this.id, idRow, pageID)});
						break;
					}
				}
			}
		}
		else if (__list == descriptionList && (ID_product != null || ID_weed != null)){
			for(var el = 0 ; el < __list.length; el++){
				var option = dropdownOptionClone.cloneNode(true);
				option.style.display = "";
				option.children[0].setAttribute('name', returnTableType(listElements[i]));
				option.children[0].id = returnTableType(listElements[i]) + "_" + __list[el].id;
				option.children[0].value = __list[el].name;
				dropdownOptions.appendChild(option);
				
				option.children[0].addEventListener("click", function(){addResultOptionProtocol(this.id, idRow, pageID)});
			}
			break;
		}
		else if((__list == componentPartsList || __list == componentStatusList || __list == componentColorList) && (ID_product != null || ID_weed != null)){
			for(var el = 0 ; el < __list.length; el++){
				var option = dropdownOptionClone.cloneNode(true);
				option.style.display = "";
				option.children[0].setAttribute('name', returnTableType(listElements[i]));
				option.children[0].id = returnTableType(listElements[i]) + "_" + __list[el].id;
				option.children[0].value = __list[el].name;
				dropdownOptions.appendChild(option);
				
				option.children[0].addEventListener("click", function(){addResultOptionProtocol(this.id, idRow, pageID)});
			}
			break;
		}
	}

}
function DropdownSearchProtocol(idRow, pageID){
	var inputBlock = document.getElementById('clsInput_test_' + idRow + '_' + pageID + '_' + 'P');
	var dropdownBlock = document.getElementById('clsDropdown_' + idRow + '_' + pageID + '_' + 'P');
	var classifierInpurResultRow = document.getElementById('classifierInpurResult_' + idRow + '_' + pageID + '_' + 'P');
	var dropdownOptions = dropdownBlock.children[0];
	var dropdownOptionClone = dropdownBlock.children[0].children[0];
	
	var listElements = [productNameList, weedNameList, productTypeList, weedClassList, descriptionList, componentPartsList, componentStatusList, componentColorList];
	//Проверки
	for(var i = 0; i < classifierInpurResultRow.children.length; i++){
		var resultType = classifierInpurResultRow.children[i].id.split('_')[1];
		if(resultType == "product"){
			var ID_product = Number(classifierInpurResultRow.children[i].id.split('_')[2]);
			listElements = checkResultOption(listElements, productNameList);
			listElements = checkResultOption(listElements, weedNameList);
			listElements = checkResultOption(listElements, componentColorList);
		}
		if(resultType == "weed"){
			var ID_weed = Number(classifierInpurResultRow.children[i].id.split('_')[2]);
			listElements = checkResultOption(listElements, productNameList);
			listElements = checkResultOption(listElements, weedNameList);
			listElements = checkResultOption(listElements, descriptionList);
			listElements = checkResultOption(listElements, componentPartsList);
			listElements = checkResultOption(listElements, componentStatusList);
		}
		if(resultType == "productType"){
			var ID_productType = Number(classifierInpurResultRow.children[i].id.split('_')[2]);
			listElements = checkResultOption(listElements, weedNameList);
			listElements = checkResultOption(listElements, productTypeList);
		}
		if(resultType == "weedClass"){
			var ID_weedClass = Number(classifierInpurResultRow.children[i].id.split('_')[2]);
			listElements = checkResultOption(listElements, productNameList);
			listElements = checkResultOption(listElements, weedClassList);
		}
		if(resultType == "discription"){
			listElements = checkResultOption(listElements, descriptionList);
			listElements = checkResultOption(listElements, weedNameList);
		}
		if(resultType == "parts"){
			listElements = checkResultOption(listElements, componentPartsList);
		}
		if(resultType == "status"){
			listElements = checkResultOption(listElements, componentStatusList);
		}
		if(resultType == "color"){
			listElements = checkResultOption(listElements, componentColorList);
		}
	}	
	//Поиск/определение
	for(var id = 0; id < listElements.length; id++){
		for(var i = 0; i < listElements[id].length; i++){
			if(listElements[id][i].name.split(' ').length == 1 ||  inputBlock.value.split(' ').length > 1){
				var element = listElements[id][i].name.split('').slice(0,inputBlock.value.length).join('');
				element = element.toUpperCase()[0] + element.slice(1);
				
				var string = inputBlock.value.toUpperCase()[0] + inputBlock.value.slice(1);
				if(element == string){
					var option = dropdownOptionClone.cloneNode(true);
					option.style.display = "";
					option.children[0].setAttribute('name', returnTableType(listElements[id]));
					option.children[0].id = returnTableType(listElements[id]) + "_" + listElements[id][i].id;
					option.children[0].value = listElements[id][i].name;
					dropdownOptions.appendChild(option);
					
					option.children[0].addEventListener("click", function(){addResultOptionProtocol(this.id, idRow, pageID)});
				}	
			}
			else{
				var elements = listElements[id][i].name.split(' ');
				var string = inputBlock.value.toUpperCase()[0] + inputBlock.value.slice(1);
				
				for(var k = 0; k < elements.length; k++){
					var element = elements[k].split('').slice(0,inputBlock.value.length).join('');
					element = element.toUpperCase()[0] + element.slice(1);
	
					if(element == string){
						var option = dropdownOptionClone.cloneNode(true);
						option.style.display = "";
						option.children[0].setAttribute('name', returnTableType(listElements[id]));
						option.children[0].id = returnTableType(listElements[id]) + "_" + listElements[id][i].id;
						option.children[0].value = listElements[id][i].name;
						dropdownOptions.appendChild(option);
						
						option.children[0].addEventListener("click", function(){addResultOptionProtocol(this.id, idRow, pageID)});
					}
				}
			}
		}
	}
	if(dropdownOptions.children.length == 1){
		var option = dropdownOptionClone.cloneNode(true);
		option.style.display = "";
		option.children[0].value = "Ничего не найдено!";
		dropdownOptions.appendChild(option);
	}
	
}
function addResultOptionProtocol(elenentid, idRow, pageID){
	var elementid = document.getElementById(elenentid);
	var inputBlock = document.getElementById("clsInput_test_" + idRow + '_' + pageID + '_' + 'P');
	var main = inputBlock.parentNode.parentNode.parentNode;
	var classifierInpurResultRow = main.children[0].children[0];
	var option = elementid;
	var object = document.createElement("div");
	object.classList.add("wordElement");
	object.id = "result_" + option.id;
	object.textContent = option.value;
	object.addEventListener("click", function(){
		if(elementid.id.split("_")[1] = "product"){
			removeProductInfoProtocol(idRow, pageID)
		}
		this.remove();
		StartInputProtocol(idRow, pageID);
		// changeClassifierProtocol(idRow, pageID);
	});
	classifierInpurResultRow.appendChild(object);
	sortResultBlockProtocol(idRow, pageID);
	// changeClassifierProtocol(idRow, pageID);
	
	if(elementid.getAttribute("name") == "product"){
		addProductInfoProtocol(elementid, idRow, pageID);
	}
	
	document.getElementById("clsInput_test_" + idRow + '_' + pageID + '_' + 'P').focus();
	document.getElementById("clsInput_test_" + idRow + '_' + pageID + '_' + 'P').value="";
}
function removeProductInfoProtocol(idRow, pageID){
	var inputBlock = document.getElementById('clsInput_test_' + idRow + '_' + pageID + '_' + 'P');
	var main = inputBlock.parentNode.parentNode.parentNode;
	var infoTitle = main.children[2].children[1].id;
	var infoBlock = main.children[2].children[2].id;
	document.getElementById(infoTitle).style.display = "none";
	for(var i = document.getElementById(infoBlock).children.length - 1; i > 0; i--){
		document.getElementById(infoBlock).children[i].remove();
	}
}
//Изменение параметров классификатора
function changeClassifierProtocol(idRow, pageID){
	//Дефолтная установка
	var classifier = componentElementClassifier;
	var resultBlock = document.getElementById('clsInputResultBlock_' + idRow + '_' + pageID + '_' + 'P');
	var classifierInpurResult = document.getElementById('classifierInpurResult_' + idRow + '_' + pageID + '_' + 'P');
	classifier.classifierType = 0;
	classifier.classifierProduct.useADD = false;
	classifier.classifierProduct.mainOptions.industryID = 0;
	classifier.classifierProduct.addCustomOption = "";
	classifier.classifierWeed.useADD = false;
	classifier.classifierWeed.mainOptions.industryID = 0;
	classifier.classifierWeed.addCustomOption = "";
	//Основные установки
	for(var i = 0; i < resultBlock.children[0].children.length; i++){
		resultType = resultBlock.children[0].children[i].id != "" ? resultBlock.children[0].children[i].id.split("_")[1] : "customeOption";
		var resultID = classifierInpurResult.children[i].id.split('_')[2];
		switch(resultType){
			case "product":
				classifier.classifierType = 0;
				classifier.classifierProduct.mainOptions.productID = list_product[resultID].id_product;
				classifier.classifierProduct.mainOptions.groupProductID = list_product[resultID].id_productGroup;
				break;
			case "weed":
				classifier.classifierType = 1;
				classifier.classifierWeed.mainOptions.weedNameID = list_weed[resultID].weedName;
				classifier.classifierWeed.mainOptions.classWeedID = list_weed[resultID].id_class;
				break;
			case "productType":
				classifier.classifierType = 0;
				classifier.classifierProduct.mainOptions.productTypeID = list_productType[resultID].id_productType;
				break;
			case "weedClass":
				classifier.classifierType = 1;
				classifier.classifierWeed.mainOptions.classWeedID = list_weed[resultID].id_class;
				classifier.classifierWeed.mainOptions.categoryID = list_weed[resultID].id_category;
				break;
			case "discription":
				classifier.classifierProduct.mainOptions.descriptionID = list_descriptionSeed[resultID].id_description;
				break;
			case "parts":
				classifier.classifierProduct.mainOptions.partsID = list_productPart[resultID].id_number;
				break;
			case "status":
				classifier.classifierProduct.mainOptions.statusID = list_productStatus[resultID].id_number;
				break;
			case "color":
				classifier.classifierWeed.mainOptions.colorID = list_productColor[resultID].id_number;
				break;
			case "customeOption":
				if (classifier.classifierType == 0){
					classifier.classifierProduct.addCustomOption += resultBlock.children[i].textContent + ", ";
				}
				else{
					classifier.classifierWeed.addCustomOption += resultBlock.children[i].textContent + ", ";
				}
				break;
		}
	}
}
function addProductInfoProtocol(product_id, idRow, pageID){
	var infoBlockElement = document.getElementById("infoBlock_" + idRow + '_' + pageID + '_' + 'P');
	var cloneOptionInfo = infoBlockElement.children[0].cloneNode(true);
	var infoTitle = document.getElementById("infoTitle_" + idRow + '_' + pageID + '_' + 'P');
	var ID = product_id.id.split("_")[1];
	//ссылка на википедию
	cloneOptionInfo.style.display = "";
	cloneOptionInfo.children[0].value = "WIKI";
	cloneOptionInfo.children[0].addEventListener("click", function(){
		window.open(list_product[ID].wikilink)
	});
	infoBlockElement.appendChild(cloneOptionInfo);
	//ссылки на госты
	var ID_GOSTS_LIST = list_product[ID].purpose_seed.concat(list_product[ID].purpose_fodder, list_product[ID].purpose_raw, list_product[ID].purpose_export, list_product[ID].purpose_groats)
	
	for(var i = 0; i < list_product[ID].purpose_seed.length; i++){
		if(list_product[ID].purpose_seed[i] != "-"){
			var cloneOptionInfo = infoBlockElement.children[0].cloneNode(true);
			var id = list_product[ID].purpose_seed[i];
			
			cloneOptionInfo.style.display = "";
			cloneOptionInfo.children[0].value = list_GOST[id-1].gostName;
			cloneOptionInfo.children[0].addEventListener("click", function(){
				window.open(list_GOST[id-1].link);
			});
			infoBlockElement.appendChild(cloneOptionInfo);
		}
	}
	for(var i = 0; i < list_product[ID].purpose_fodder.length; i++){
		if(list_product[ID].purpose_fodder[i] != "-"){
			var cloneOptionInfo = infoBlockElement.children[0].cloneNode(true);
			var id = list_product[ID].purpose_fodder[i];
			
			cloneOptionInfo.style.display = "";
			cloneOptionInfo.children[0].value = list_GOST[id-1].gostName;
			cloneOptionInfo.children[0].addEventListener("click", function(){
				window.open(list_GOST[id-1].link);
			});
			infoBlockElement.appendChild(cloneOptionInfo);
		}
	}
	for(var i = 0; i < list_product[ID].purpose_raw.length; i++){
		if(list_product[ID].purpose_raw[i] != "-"){
			var cloneOptionInfo = infoBlockElement.children[0].cloneNode(true);
			var id = list_product[ID].purpose_raw[i];
			
			cloneOptionInfo.style.display = "";
			cloneOptionInfo.children[0].value = list_GOST[id-1].gostName;
			cloneOptionInfo.children[0].addEventListener("click", function(){
				window.open(list_GOST[id-1].link);
			});
			infoBlockElement.appendChild(cloneOptionInfo);
		}
	}
	for(var i = 0; i < list_product[ID].purpose_export.length; i++){
		if(list_product[ID].purpose_export[i] != "-"){
			var cloneOptionInfo = infoBlockElement.children[0].cloneNode(true);
			var id = list_product[ID].purpose_export[i];
			
			cloneOptionInfo.style.display = "";
			cloneOptionInfo.children[0].value = list_GOST[id-1].gostName;
			cloneOptionInfo.children[0].addEventListener("click", function(){
				window.open(list_GOST[id-1].link);
			});
			infoBlockElement.appendChild(cloneOptionInfo);
		}
	}
	for(var i = 0; i < list_product[ID].purpose_groats.length; i++){
		if(list_product[ID].purpose_groats[i] != "-"){
			var cloneOptionInfo = infoBlockElement.children[0].cloneNode(true);
			var id = list_product[ID].purpose_groats[i];
			
			cloneOptionInfo.style.display = "";
			cloneOptionInfo.children[0].value = list_GOST[id-1].gostName;
			cloneOptionInfo.children[0].addEventListener("click", function(){
				window.open(list_GOST[id-1].link);
			});
			infoBlockElement.appendChild(cloneOptionInfo);
		}
	}	
	if(infoBlockElement.children.length != 0)
		infoTitle.style.display = "";
}
// Matan
// она на старте страницы висеть должна но в моем случае скорее при создании листа
function setupRequirementsTableProtocol(pageID){
	//Айдишники на странице выделенны явно
	var pureInpStart = document.getElementById('pureInpStart_' + pageID + '_' + 'P');	
	var outputStart = document.getElementById('outputStart_' + pageID + '_' + 'P');
	var percentStart = document.getElementById('percentStart_' + pageID + '_' + 'P');
	var pureInpGood = document.getElementById('pureInpGood_' + pageID + '_' + 'P');
	var outputGood = document.getElementById('outputGood_' + pageID + '_' + 'P');
	var percentGood = document.getElementById('percentGood_' + pageID + '_' + 'P');
	var pureInpTrash = document.getElementById('pureInpTrash_' + pageID + '_' + 'P');
	var outputTrash = document.getElementById('outputTrash_' + pageID + '_' + 'P');
	var percentTrash = document.getElementById('percentTrash_' + pageID + '_' + 'P');
	
	pureInpStart.value = Number(pageProtocolRow[pageID-1].requirementsTable.mainFractionData.purity).toFixed(3);
	outputStart.value = Number(pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass).toFixed(3);
	percentStart.value = Number(pageProtocolRow[pageID-1].requirementsTable.mainFractionData.percent_exit).toFixed(2);	
	pureInpGood.value = Number(pageProtocolRow[pageID-1].requirementsTable.suitableFraction.purity).toFixed(3);
	outputGood.value = Number(pageProtocolRow[pageID-1].requirementsTable.suitableFraction.mass).toFixed(3);
	percentGood.value = Number(pageProtocolRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2);	
	pureInpTrash.value = Number(pageProtocolRow[pageID-1].requirementsTable.weedFraction.purity).toFixed(3);
	outputTrash.value = Number(pageProtocolRow[pageID-1].requirementsTable.weedFraction.mass).toFixed(3);
	percentTrash.value = Number(pageProtocolRow[pageID-1].requirementsTable.weedFraction.percent_exit).toFixed(2);
	//Привязка функций
	outputStart.addEventListener("change",function (){requirementsMassUpdateProtocol(pageID)});
	outputGood.addEventListener("change",function (){requirementsMassUpdateProtocol(pageID)});
	outputTrash.addEventListener("change",function (){requirementsMassUpdateProtocol(pageID)});
	
	percentGood.addEventListener("change",function (){requirementsPercentUpdateProtocol(pageID)});
	percentTrash.addEventListener("change",function (){requirementsPercentUpdateProtocol(pageID)});
	
	outputStart.addEventListener("change",function (){updateRemovedPercentProtocol(pageID)});
	outputGood.addEventListener("change",function (){updateRemovedPercentProtocol(pageID)});
	outputTrash.addEventListener("change",function (){updateRemovedPercentProtocol(pageID)});
	
	percentGood.addEventListener("change",function (){updateRemovedPercentProtocol(pageID)});
	percentTrash.addEventListener("change",function (){updateRemovedPercentProtocol(pageID)});
	
	outputStart.addEventListener("change",function (){updateDataProtocol(pageID)});
	outputGood.addEventListener("change",function (){updateDataProtocol(pageID)});
	outputTrash.addEventListener("change",function (){updateDataProtocol(pageID)});
	
	percentGood.addEventListener("change",function (){updateDataProtocol(pageID)});
	percentTrash.addEventListener("change",function (){updateDataProtocol(pageID)});
	
	//Дефолтное обновление масс
	requirementsMassUpdateProtocol(pageID);

	//Вызов привязки слушателей для страницы экономического обоснования economic_model.js	
	setupOperationGraph();
}
function requirementsMassUpdateProtocol(pageID){
	var sustamentID = pageProtocolRow[pageID-1].Sustatment.ColumnState.indexOf("active");
	var outputStart = document.getElementById('outputStart_' + pageID + '_' + 'P');
	var outputGood = document.getElementById('outputGood_' + pageID + '_' + 'P');
	var percentGood = document.getElementById('percentGood_' + pageID + '_' + 'P');
	var outputTrash = document.getElementById('outputTrash_' + pageID + '_' + 'P');
	var percentTrash = document.getElementById('percentTrash_' + pageID + '_' + 'P');
	switch(sustamentID){
		case 0:
			outputStart.value = outputStart.value < 0 ? Number(pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass).toFixed(3) : Number(outputStart.value).toFixed(3);
			pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass = Number(outputStart.value);			
			pageProtocolRow[pageID-1].requirementsTable.suitableFraction.mass = pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass/100 * pageProtocolRow[pageID-1].requirementsTable.suitableFraction.percent_exit;
			pageProtocolRow[pageID-1].requirementsTable.weedFraction.mass = pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass/100 * pageProtocolRow[pageID-1].requirementsTable.weedFraction.percent_exit;
			
			outputGood.value = Number(pageProtocolRow[pageID-1].requirementsTable.suitableFraction.mass).toFixed(3);
			outputTrash.value = Number(pageProtocolRow[pageID-1].requirementsTable.weedFraction.mass).toFixed(3);
			percentGood.value = Number(pageProtocolRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2);
			percentTrash.value = Number(pageProtocolRow[pageID-1].requirementsTable.weedFraction.percent_exit).toFixed(2);
			break;
		case 1:
			outputGood.value = outputGood.value < 0 ? Number(pageProtocolRow[pageID-1].requirementsTable.suitableFraction.mass).toFixed(3) : Number(outputGood.value).toFixed(3);
			pageProtocolRow[pageID-1].requirementsTable.suitableFraction.mass = Number(outputGood.value);
			//Проверка максимального выхода
			checkSuitableFractionExit();
			if(pageProtocolRow[pageID-1].Sustatment.ColumnState[0] == "unlock"){
				pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass += Number(pageProtocolRow[pageID-1].requirementsTable.suitableFraction.mass - pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass + pageProtocolRow[pageID-1].requirementsTable.weedFraction.mass);
				outputStart.value = Number(pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass).toFixed(3);
				
				pageProtocolRow[pageID-1].requirementsTable.suitableFraction.percent_exit = Number(pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass) > 0 ? Number(pageProtocolRow[pageID-1].requirementsTable.suitableFraction.mass /pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass * 100).toFixed(2) : 0;
				pageProtocolRow[pageID-1].requirementsTable.weedFraction.percent_exit = Number(pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass) > 0 ? Number(pageProtocolRow[pageID-1].requirementsTable.mainFractionData.percent_exit - pageProtocolRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2) : 0;

				outputGood.value = Number(pageProtocolRow[pageID-1].requirementsTable.suitableFraction.mass).toFixed(3);
				outputTrash.value = Number(pageProtocolRow[pageID-1].requirementsTable.weedFraction.mass).toFixed(3);
				percentGood.value = Number(pageProtocolRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2);
				percentTrash.value = Number(pageProtocolRow[pageID-1].requirementsTable.weedFraction.percent_exit).toFixed(2);
			} 
			else{
				pageProtocolRow[pageID-1].requirementsTable.weedFraction.mass = Number(pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass - pageProtocolRow[pageID-1].requirementsTable.suitableFraction.mass);
				if(pageProtocolRow[pageID-1].requirementsTable.weedFraction.mass < 0){
					pageProtocolRow[pageID-1].requirementsTable.suitableFraction.mass = Number(pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass);
					outputGood.value = Number(pageProtocolRow[pageID-1].requirementsTable.suitableFraction.mass).toFixed(3);
					pageProtocolRow[pageID-1].requirementsTable.weedFraction.mass = 0;
				}
				
				pageProtocolRow[pageID-1].requirementsTable.weedFraction.percent_exit = Number(pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass) > 0 ? Number(pageProtocolRow[pageID-1].requirementsTable.weedFraction.mass / pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass * 100).toFixed(2) : 0;
				pageProtocolRow[pageID-1].requirementsTable.suitableFraction.percent_exit = Number(pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass) > 0 ? Number(pageProtocolRow[pageID-1].requirementsTable.mainFractionData.percent_exit - pageProtocolRow[pageID-1].requirementsTable.weedFraction.percent_exit).toFixed(2) : 0;
				
				outputGood.value = Number(pageProtocolRow[pageID-1].requirementsTable.suitableFraction.mass).toFixed(3);
				outputTrash.value = Number(pageProtocolRow[pageID-1].requirementsTable.weedFraction.mass).toFixed(3);
				percentGood.value = Number(pageProtocolRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2);
				percentTrash.value = Number(pageProtocolRow[pageID-1].requirementsTable.weedFraction.percent_exit).toFixed(2)
			}
			break;
		case 2:
			outputTrash.value = outputTrash.value < 0 ? Number(pageProtocolRow[pageID-1].requirementsTable.weedFraction.mass).toFixed(3) : Number(outputTrash.value).toFixed(3);
			pageProtocolRow[pageID-1].requirementsTable.weedFraction.mass = Number(outputTrash.value);
			//Проверка максимального выхода
			checkWeedFractionExit();
			if(pageProtocolRow[pageID-1].Sustatment.ColumnState[0] == "unlock"){
				pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass += Number(pageProtocolRow[pageID-1].requirementsTable.weedFraction.mass - pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass + pageProtocolRow[pageID-1].requirementsTable.suitableFraction.mass);
				outputStart.value = Number(pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass).toFixed(3);
				
				pageProtocolRow[pageID-1].requirementsTable.suitableFraction.percent_exit = Number(pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass) > 0 ? Number(pageProtocolRow[pageID-1].requirementsTable.suitableFraction.mass / pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass * 100).toFixed(2) : 0;
				pageProtocolRow[pageID-1].requirementsTable.weedFraction.percent_exit = Number(pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass) > 0 ? Number(pageProtocolRow[pageID-1].requirementsTable.mainFractionData.percent_exit - pageProtocolRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2) : 0;

				outputGood.value = Number(pageProtocolRow[pageID-1].requirementsTable.suitableFraction.mass).toFixed(3);
				outputTrash.value = Number(pageProtocolRow[pageID-1].requirementsTable.weedFraction.mass).toFixed(3);
				percentGood.value = Number(pageProtocolRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2);
				percentTrash.value = Number(pageProtocolRow[pageID-1].requirementsTable.weedFraction.percent_exit).toFixed(2);
			} 
			else{
				pageProtocolRow[pageID-1].requirementsTable.suitableFraction.mass = Number(pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass - pageProtocolRow[pageID-1].requirementsTable.weedFraction.mass);
				if(pageProtocolRow[pageID-1].requirementsTable.suitableFraction.mass < 0){
					pageProtocolRow[pageID-1].requirementsTable.weedFraction.mass = Number(pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass);
					outputTrash.value = Number(pageProtocolRow[pageID-1].requirementsTable.suitableFraction.mass).toFixed(3);
					pageProtocolRow[pageID-1].requirementsTable.suitableFraction.mass = 0;
				}
				
				pageProtocolRow[pageID-1].requirementsTable.suitableFraction.percent_exit = Number(pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass) > 0 ? Number(pageProtocolRow[pageID-1].requirementsTable.suitableFraction.mass / pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass * 100).toFixed(2) : 0;
				pageProtocolRow[pageID-1].requirementsTable.weedFraction.percent_exit = Number(pageProtocolRow[pageID-1].requirementsTable.mainFractionData.mass) > 0 ? Number(pageProtocolRow[pageID-1].requirementsTable.mainFractionData.percent_exit - pageProtocolRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2) : 0;

				outputGood.value = Number(pageProtocolRow[pageID-1].requirementsTable.suitableFraction.mass).toFixed(3);
				outputTrash.value = Number(pageProtocolRow[pageID-1].requirementsTable.weedFraction.mass).toFixed(3);
				percentGood.value = Number(pageProtocolRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2);
				percentTrash.value = Number(pageProtocolRow[pageID-1].requirementsTable.weedFraction.percent_exit).toFixed(2);
			}
			break;
	}
	setupFractionExitProtocol(pageID);
	if(!refreshSortCheck){
		refreshSortCheck = true;
		refreshSortData();
		refreshSortCheck = false;
	}	
}

//выбор листа требований

function CalculateListNumberProtocol(){
	var menu = document.getElementById('dropdown-contentProtocol');
	var protocolRequirements_MainBlock = document.getElementById('protocolRequirements_MainBlock');
	if(menu.style.display == 'none'){
		var menuLength = menu.children[0].children.length-2;
		if(menu.children[0].children.length > 1){
			for(var i = Number(menu.children[0].children.length); i > 1; i--){
				menu.children[0].children[i-1].remove();
			}
		}
		for(var i = 0; i < protocolRequirements_MainBlock.children.length; i++){
			var row = menu.children[0].children[0].cloneNode(true);
			row.value = i;
			row.style= 'display :flex; flex-direction: column';
			row.addEventListener('click', function(){				
				pageID = Number(this.value);
				if(this.value != 0){
					var operatingModeBlock = document.getElementById('operatingModeBlock');
					var dropdownMenu = document.getElementById('dropdown-contentProtocol');
					var previusPageID = Number(dropdown_ListNumberProtocol.textContent);
					if(menuLength == pageProtocolRow.length){
						if(pageProtocolRow[previusPageID-1] != null){
							if(Object.keys(pageProtocolRow[previusPageID-1].economicRowDataProt).length == 1|| pageProtocolRow[previusPageID-1].economicRowDataProt.elements.length == 0){
								pageProtocolRow[previusPageID-1].economicRowDataProt = economicRowDataProt;					
							}
						}						
					}
					ProtocolPage = pageID;
					dropdown_ListNumberProtocol.textContent = pageID;
					economicRowDataProt = pageProtocolRow[pageID-1].economicRowDataProt;	
					if(economicType == 'Prot'){
						removeEconomicRow();
						fillEconomicRowByProtocol(ProtocolPage);
						viewCurrentlyParam();
						operatingModeBlock.children[0].children[0].children[0].click();
						update2();
						operatingModeViev(); 
						updateDataProtocol(ProtocolPage);
						for(var z = 1; z<= economicRowDataProt.elements.length; z++){
							addResult(z);
						}
					}
					hideRequirementsProtocol(ProtocolPage);
					dropdownMenu.style.display = 'none';
					if(pageProtocolRow.length != 0){
						resetRowValueProt();	
					}	
							
					clearSortList(pageID);
				}
				else{ 
					ProtocolPage = pageID;
					dropdown_ListNumberProtocol.textContent = 0;
					hideRequirementsProtocol(0);
					var mainBlock = document.getElementById('sortProtocol_MainBlock');
					for(var k = mainBlock.children.length; k > 1; k--){
						mainBlock.children[k-1].remove();
					}
				}
				setupPageId(id_document);
				switchExplain();
				autoPageNumber();
				setProtocolIMG(ProtocolPage);
			});
			menu.children[0].appendChild(row);			
		}		
	}
	dropdownListViewProtocol();
}
// отображение меню списка листов требований
function dropdownListViewProtocol(){
	var menu = document.getElementById('dropdown-contentProtocol');
	if(menu.style.display == 'none'){
		menu.style= 'display :flex; flex-direction: column';
	}
	else{
		menu.style.display = 'none';
	}
}

//  функа на запись econom row
function fillEconomicRowByProtocol(pageId){
	var custom = pageProtocolRow[pageId-1].economicRowDataProt.elements.length;
	for(var i = 0; i < custom; i++){
		addrowGraph();		
	}
	cloneFixRow();
	cloneArticleRow();		
		
}
function hideRequirementsProtocol(pageId){
	for(var i = 0; i< protocolRequirements_MainBlock.children.length; i++){
		protocolRequirements_MainBlock.children[i].style.display = 'none';
	}
	if(pageId != 0)
		protocolRequirements_MainBlock.children[pageId].style= 'display :flex; flex-direction: column';
}
function hideProtocolAfterAddList(){
	for(var i = 0; i< protocolRequirements_MainBlock.children.length; i++){
		protocolRequirements_MainBlock.children[i].style.display = 'none';
	}
	protocolRequirements_MainBlock.lastChild.style= 'display :flex; flex-direction: column';
	var number = protocolRequirements_MainBlock.lastChild.id.split("_")[1];
	dropdown_ListNumberProtocol.textContent = number;
	ProtocolPage = number;
}

document.onclick = function (event){
	var СustomerRequirementsMenu = document.getElementById('СustomerRequirementsMenu');
	var ProtocolRequirementsMenu = document.getElementById('ProtocolRequirementsMenu');
	var req = document.getElementById('dropdown-content');
	var prot = document.getElementById('dropdown-contentProtocol');
    if (event.target != СustomerRequirementsMenu && req.style.display != 'none'){
        req.style.display = 'none';
		prot.style.display = 'none';
    }
	if (event.target != ProtocolRequirementsMenu && prot.style.display != 'none'){
		req.style.display = 'none';
        prot.style.display = 'none';
    }
}


function changeMassInputBlockFormatProtocol(object, imgName){
	var main = object.parentNode.parentNode;
	var fraction = main.id.split('_')[1];	
	var pageID =  main.id.split('_')[3];
	var idRow =  main.id.split('_')[2];
	var typeSustatment = pageProtocolRow[pageID-1].Sustatment.DefaultUnit;
	
	switch(fraction){
		case'1':
			fraction = 'mainFractionData';
			break;
		case'2':
			fraction = 'suitableFractionData';
			break;
		case'3':
			fraction = 'weedFractionData';
			break;
	}
	if(imgName == "calcOn"){
		main.children[0].children[0].type = 'text';
		main.children[0].children[0].value = pageProtocolRow[pageID-1].ProtocolRow[idRow-1][fraction].custom;
	}
	else{
		main.children[0].children[0].type = 'number';
		main.children[0].children[0].value = pageProtocolRow[pageID-1].ProtocolRow[idRow-1][fraction].unitOption[typeSustatment];
	}
}

function addSortRowByProtocol(){
	if (pageProtocolRow[ProtocolPage-1].pageSortRow.length > 0){
		for(var i = 0; i < pageProtocolRow[ProtocolPage-1].pageSortRow.length; i++){
			if(pageProtocolRow[ProtocolPage-1].ProtocolRow.length > pageProtocolRow[ProtocolPage-1].pageSortRow[i].ProtocolSort.length){
				addrowsSort(i+1);				
				refreshIDSort(i+1);
			}			
		}
	}
}

function removeSortRowByProtocol(rowID){
	if (pageProtocolRow[ProtocolPage-1].pageSortRow.length > 0){
		for(var i = 0; i < pageProtocolRow[ProtocolPage-1].pageSortRow.length; i++){
			if(pageProtocolRow[ProtocolPage-1].ProtocolRow.length < pageProtocolRow[ProtocolPage-1].pageSortRow[i].ProtocolSort.length){
				var rows = document.getElementById('rows_' + (i+1) + '_' + 'S');
				rows.children[rowID].children[0].children[0].children[0].children[2].click();
				pageProtocolSustatement[ProtocolPage-1].Protocol[i].RowPercent.splice((rowID-1), 1);
			}			
		}
	}
}

// формирование списка для исхода протокола
function ProtListContentBlockViev(blickId){
	return function(e){
		var block = document.getElementById(blickId);
		var number = Number(block.id.split('_')[1]);		
		var style = block.style.display;		
		switch(style){
			case 'none':
				generateProtList(block.children[0], number);
				break;
			case 'flex':
				for(var k = block.children[0].children.length; k > 1; k--){
					block.children[0].children[k-1].remove();
				}
				break;
		}
		block.style.display = style == 'none' ? 'flex' : 'none';
	}
}

function generateProtList(elem, number){
	var pageNumber = pageProtocolRow[ProtocolPage-1].pageSortRow.length;
	for(var k = elem.children.length; k > 1; k--){
		elem.children[k-1].remove();
	}
	for(var k = 1; k <= pageNumber; k++){		
		var row1 = elem.children[0].cloneNode(true);
		var row2 = elem.children[0].cloneNode(true);
		row1.value =  Translate[0].Prot[9][GlobalLang] + ' 0' + (k+1);
		row1.id =  'Sort_suitableFraction_' + k;
		row2.value =  Translate[0].Prot[10][GlobalLang] + ' 0' + (k+1);
		row2.id =  'Sort_weedFraction_' + k;
		row1.style.display = 'flex';
		row2.style.display = 'flex';		
		
		row1.addEventListener('click', setProtocolValue(row1.id));
		row1.addEventListener('click', setupMainFractionParentProt(row1.id));
		row1.addEventListener('click', setSumValueProt(number, row1.id));
		row1.addEventListener('click', setVAlueColorProt(row1.id));
		
		row2.addEventListener('click', setProtocolValue(row2.id));
		row2.addEventListener('click', setupMainFractionParentProt(row2.id));
		row2.addEventListener('click', setSumValueProt(number, row2.id));
		row2.addEventListener('click', setVAlueColorProt(row2.id));

		elem.appendChild(row1);
		elem.appendChild(row2);		
	}
	for(var k = 0; k < elem.children.length; k++){
		var elemObj = document.getElementById(elem.children[k].id);
		for(var f = 0; f < pageProtocolRow[ProtocolPage-1].mainFractionParent.length; f++){
			if(elem.children[k].id == pageProtocolRow[ProtocolPage-1].mainFractionParent[f]){
				elemObj.style.backgroundColor = "#ffb23f";
			}
		}
		
	}
}
function setupMainFractionParentProt(name){
	return function(e){
		pageProtocolRow[ProtocolPage-1].mainFractionParent.push(name);				
	}
}
function setSumValueProt(number, ID){
	return function(e){
		var idRow = Number(ID.split('_')[2]);
		var fraction = ID.split('_')[1];
		var objCol = document.getElementById(ID);
		pageProtocolRow[ProtocolPage-1].Sustatment.ColumnState = ["active", "lock", "unlock"];
		if(objCol.style.backgroundColor == ''){
			var mainRow = document.getElementById('rows_' + number + '_P');
			var event = new Event('change');

			var protMass = pageProtocolRow[ProtocolPage-1].requirementsTable.mainFractionData.mass;
			
			var protMassGood = (protMass / 100) * pageProtocolRow[ProtocolPage-1].requirementsTable.mainFractionData.purity;		
			
			var sortTotalMass = 0;
			var sortTotalMassGood = 0;
			for(var i = 0; i < pageProtocolRow[ProtocolPage-1].mainFractionParent.length; i++){
				var idSort = pageProtocolRow[ProtocolPage-1].mainFractionParent[i].split('_')[2];
				var fraction = pageProtocolRow[ProtocolPage-1].mainFractionParent[i].split('_')[1];
				var sortMass = pageProtocolRow[ProtocolPage-1].pageSortRow[idSort-1].requirementsTable[fraction].mass;
				var sortMassGood =  (sortMass / 100) * pageProtocolRow[ProtocolPage-1].pageSortRow[idSort-1].requirementsTable[fraction].purity;
				sortTotalMass = sortTotalMass + sortMass;
				sortTotalMassGood = sortTotalMassGood + sortMassGood;
			}
			var totalMass = protMass + sortTotalMass;
			var totalMassGood = protMassGood + sortTotalMassGood;
			var newPercent = (totalMassGood / totalMass) * 100;			
			mainRow.children[1].children[0].children[0].children[2].children[3].children[0].children[0].children[0].children[0].value = newPercent.toFixed(2);
			mainRow.children[1].children[0].children[0].children[2].children[3].children[0].children[0].children[0].children[0].dispatchEvent(event);
			
			// обновление
			if(!refreshSortCheck){
				refreshSortCheck = true;
				refreshSortData();
				refreshSortCheck = false;
			}	
		}
		else{
			var mainRow = document.getElementById('rows_' + number + '_P');
			var event = new Event('change');			
			for(var k = 1; k < mainRow.children.length; k++){
				mainRow.children[k].children[0].children[0].children[2].children[3].children[0].children[0].children[0].children[0].value = pageProtocolSustatement[ProtocolPage-1].Protocol[idRow-1].RowPercent[k-1];
				mainRow.children[k].children[0].children[0].children[2].children[3].children[0].children[0].children[0].children[0].dispatchEvent(event);
			}
		}
	}
}
function setVAlueColorProt(idRow){
	return function (e){
		var main = document.getElementById(idRow);
		var ID = Number(idRow.split('_')[2]);
		var textObj = main.parentNode.parentNode.parentNode.children[0];
		if (main.style.backgroundColor != "") {
			main.style.backgroundColor = "";
			
			var newMas = pageProtocolRow[ProtocolPage-1].mainFractionParent.filter(word => word != idRow);
			pageProtocolRow[ProtocolPage-1].mainFractionParent = newMas;
			textObj.textContent = "Исходный Продукт";
			if(pageProtocolRow[ProtocolPage-1].mainFractionParent.length < 1){
				pageProtocolSustatement[ProtocolPage-1].Protocol[ID-1].componentName = '';
			}

		}
		else {
			main.style.backgroundColor = "#ffb23f";
			textObj.textContent = main.value;
		}
	}
}
function setProtocolValue(ID){
	return function(e){
		var idRow = Number(ID.split('_')[2]);
		if(pageProtocolSustatement[ProtocolPage-1].Protocol[idRow-1].componentName == ""){
			pageProtocolSustatement[ProtocolPage-1].Protocol[idRow-1].componentName = ID;
			pageProtocolSustatement[ProtocolPage-1].Protocol[idRow-1].protocolMass = pageProtocolRow[ProtocolPage-1].requirementsTable.mainFractionData.mass;
			for(var i = 0; i < pageProtocolSustatement[ProtocolPage-1].Protocol[idRow-1].RowPercent.length; i++){
				pageProtocolSustatement[ProtocolPage-1].Protocol[idRow-1].RowPercent[i] = pageProtocolRow[ProtocolPage-1].ProtocolRow[i].mainFractionData.unitOption.percent;
			}
		}		
	}	
}

function valueTime(idRow){// atavism
	return function(e){
		var main = document.getElementById('TimeNumber_' + idRow + '_P');
		ValueTime = Number(main.value);
	}
}
function InputMenuView(idRow){// atavism
	return function(e){
		var timeOrMass = this.id.split('_')[0];
		switch(timeOrMass){
			case 'massInp':
				var main = document.getElementById('massMenu_' + idRow + '_P');
				break;
			case 'timeInp':
				var main = document.getElementById('timeMenu_' + idRow + '_P');
				break;
		}
		main.style.display = main.style.display == 'block' ? 'none' : 'block';
	}
}
function massMenuRow(idRow){// atavism
	return function(e){
		var menu = this.parentNode.parentNode;
		var old = pageProtocolRow[idRow-1].Sustatment.MassValue;
		var mainFractionData = pageProtocolRow[idRow-1].requirementsTable.mainFractionData.mass;
		var suitableFraction = pageProtocolRow[idRow-1].requirementsTable.suitableFraction.mass;
		var weedFraction = pageProtocolRow[idRow-1].requirementsTable.weedFraction.mass;

		switch(old){
			case 'T/H':
				var mod = 1;
				break;
			case 'T/M':
				var mod = 60;
				break;
			case 'KG/H':
				var mod = 1/1000;
				break;
			case 'KG/M':
				var mod = 60/1000;
				break;
		}
		mainFractionData = mainFractionData * mod;
		suitableFraction = suitableFraction * mod;
		weedFraction = weedFraction * mod;

		switch(this.value){
			case 'тонн':
				var main = document.getElementById('massInp_' + idRow + '_P');
				main.value = 'тонн';
				pageProtocolRow[idRow-1].Sustatment.MassValue = 'T/' + pageProtocolRow[idRow-1].Sustatment.MassValue.split('/')[1];				
				break;
			case 'килограмм':
				var main = document.getElementById('massInp_' + idRow + '_P');
				main.value = 'килограмм';
				pageProtocolRow[idRow-1].Sustatment.MassValue = 'KG/' + pageProtocolRow[idRow-1].Sustatment.MassValue.split('/')[1];
				break;
			case 'час':
				var main = document.getElementById('timeInp_' + idRow + '_P');
				main.value = 'час';
				pageProtocolRow[idRow-1].Sustatment.MassValue = pageProtocolRow[idRow-1].Sustatment.MassValue.split('/')[0] + '/H';

				break;
			case 'минут':
				var main = document.getElementById('timeInp_' + idRow + '_P');
				main.value = 'минут';
				pageProtocolRow[idRow-1].Sustatment.MassValue = pageProtocolRow[idRow-1].Sustatment.MassValue.split('/')[0] + '/M';

				break;
		}
		menu.style.display = menu.style.display == 'block' ? 'none' : 'block';
		
		switch(pageProtocolRow[idRow-1].Sustatment.MassValue){
			case 'T/H':
				var mod = 1;
				break;
			case 'T/M':
				var mod = 1/60;
				break;
			case 'KG/H':
				var mod = 1000;
				break;
			case 'KG/M':
				var mod = 1000/60;
				break;
		}
		pageProtocolRow[idRow-1].requirementsTable.mainFractionData.mass = mainFractionData * mod;
		pageProtocolRow[idRow-1].requirementsTable.suitableFraction.mass = suitableFraction * mod;
		pageProtocolRow[idRow-1].requirementsTable.weedFraction.mass = weedFraction * mod;
		var outputStart = document.getElementById('outputStart_' + idRow + '_P');
		outputStart.value = mainFractionData * mod;
	}
}
function changeMassText(ID){// atavism
	return function (e){
		var main = document.getElementById(ID);
		main.children[0].textContent = this.value;
		var idRow = Number(ID.split('_')[1]);
		var old = pageProtocolRow[idRow-1].Sustatment.MassValue;
		var mainFractionData = pageProtocolRow[idRow-1].requirementsTable.mainFractionData.mass;
		var suitableFraction = pageProtocolRow[idRow-1].requirementsTable.suitableFraction.mass;
		var weedFraction = pageProtocolRow[idRow-1].requirementsTable.weedFraction.mass;
		switch(old){
			case 'T/H':
				var mod = 1;
				break;
			case 'T/M':
				var mod = 60;
				break;
			case 'KG/H':
				var mod = 1000;
				break;
			case 'KG/M':
				var mod = 60000;
				break;
			case 'GR/H':
				var mod = 1000000;
				break;
		}
		mainFractionData = mainFractionData * mod;
		suitableFraction = suitableFraction * mod;
		weedFraction = weedFraction * mod;
		pageProtocolRow[idRow-1].Sustatment.MassValue = this.getAttribute('mass');
		switch(pageProtocolRow[idRow-1].Sustatment.MassValue){
			case 'T/H':
				var mod = 1;
				break;
			case 'T/M':
				var mod = 1/60;
				break;
			case 'KG/H':
				var mod = 1/1000;
				break;
			case 'KG/M':
				var mod = (1/60)/1000;
				break;
			case 'GR/H':
				var mod = 1/(1000*1000);
				break;
		}
		pageProtocolRow[idRow-1].requirementsTable.mainFractionData.mass = mainFractionData * mod;
		pageProtocolRow[idRow-1].requirementsTable.suitableFraction.mass = suitableFraction * mod;
		pageProtocolRow[idRow-1].requirementsTable.weedFraction.mass = weedFraction * mod;
		var outputStart = document.getElementById('outputStart_' + idRow + '_P');
		outputStart.value = mainFractionData * mod;
	}
}


function resetRowValueProt(){
	for(var i = 0; i < pageProtocolRow.length; i++){1
		if(pageProtocolRow[i].ProtocolRow[0].weedFractionData.unitOption.percent == "NaN"){
			var massInp = document.getElementById("massInput_3_1_" + (i+1) + "_P");
			var massInpBlock = document.getElementById("massInputBlock_3_1_" + (i+1) + "_P");
			massInp.click();
			massInpBlock.children[0].children[0].value = 0;
			massInpBlock.children[0].children[0].dispatchEvent(event_3);
			massInpBlock.children[4].children[0].click();
			massInp.click();
			massInpBlock.children[0].children[0].value = 0;
			massInpBlock.children[0].children[0].dispatchEvent(event_3);
			massInpBlock.children[4].children[0].click();
		}
	}
}


function setTitleTablePR(obj){
	return function e(){
		var objBlock = document.getElementById(obj);
		var pageID = objBlock.id.split("_")[1];
		var position = objBlock.id.split("_")[0];

		if(pageProtocolRow[pageID-1].Sustatment.TitleTable == null){
			pageProtocolRow[pageID-1].Sustatment.TitleTable = {
					"companyName": '0',
					"userManagerName": '0',
					"createDateProtocol": '0'
			  	}
			
		}
		pageProtocolRow[pageID-1].Sustatment.TitleTable[position] = objBlock.value;
	}
}
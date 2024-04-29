/*prime*/
var pageRow = [];
var currentPage = 1;
function setupPageRow(){
  pageRow.push({
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
    },
    "Sustatment": {
      "ColumnState": ["active","lock","lock"],
      "DefaultUnit": "percent",
	  "TitleTable":{
		"companyName": '0',
		"userManagerName": '0',
		"createDateProtocol": '0'
	  }
    },
    "componentRow": [],
	'economicRowData':{
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
function setupPhotosRow(pageID){
	pageRow[pageID].photoContainer.rowsFraction.push({
		'photoData':[]
	});
}
function setupPhotoData(pageID,idRow){
	pageRow[pageID].photoContainer.rowsFraction[idRow].photoData.push({
		'photoName':null
	});
}
function generateComponentRow(pageID){
  pageRow[pageID].componentRow.push({
    "component_name": "component_name",
	"SearchProductResult":[],
    "mainFractionData":{
      "calcToggle": true,
      "impToggle": false,
      "acceptRejectToggle":  pageRow[pageID].componentRow.length == 0 ? true : false,
      "selectUnitOption": null,
      "unitOption":{
        "percent":  pageRow[pageID].componentRow.length == 0 ? 100.0 : 0.00,
        "gram": 0.0,
        "pieces": 0.0,
        "pieces_kg": 0.0,
        "ppm": 0.0
      },
      "hingeMass":  pageRow[pageID].componentRow[0] != null ?  pageRow[pageID].componentRow[0].mainFractionData.hingeMass : 100.00,
      "pieces_1000": 100.00
    },
    "suitableFractionData":{
      "calcToggle": true,
      "impToggle": false,
      "acceptRejectToggle": true,
      "selectUnitOption": null,
      "unitOption":{
        "percent":  pageRow[pageID].componentRow.length == 0 ? true : false,
        "gram": 0.0,
        "pieces": 0.0,
        "pieces_kg": 0.0,
        "ppm": 0.0
        //"iterfraction_percent": 0.0
      },
      "hingeMass":  pageRow[pageID].componentRow[0] != null ?  pageRow[pageID].componentRow[0].suitableFractionData.hingeMass : 100.00,
      "pieces_1000": 100.000
    },
    "weedFractionData":{
      "calcToggle": true,
      "impToggle": false,
      "acceptRejectToggle":  pageRow[pageID].componentRow.length == 0 ? true : false,
      "selectUnitOption": null,
      "unitOption":{
        "percent":  pageRow[pageID].componentRow.length == 1 ? 100.0 : 0.00,
        "gram": 0.0,
        "pieces": 0.0,
        "pieces_kg": 0.0,
        "ppm": 0.0
        //"iterfraction_percent": 0.0
      },
      "hingeMass":  pageRow[pageID].componentRow[0] != null ?  pageRow[pageID].componentRow[0].weedFractionData.hingeMass : 100.00,
      "pieces_1000": 100.00
    },
  });
}
// смена отображения элементов
function ShowUpsertDropdownClone(elementID, idRow){
	return function e(){
		var element = document.getElementById(elementID);
		var parent = element.parentNode.parentNode.parentNode;

		if(parent.children[0].style.width != '188px'){
			if(parent.id.split('_')[1] == '1'){
	 			var input = document.getElementById('massInput_' + parent.id.split('_')[1] +'_1' + '_' + idRow);
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
				var input = document.getElementById('massInput_' + parent.id.split('_')[1] +'_1' + '_' + idRow);
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
		if(element.id == "outputStart_" + idRow){
			document.getElementById("outputStartButton_" + idRow).style.display = "flex";
			document.getElementById("outputGoodButton_" + idRow).style.display = "none";
			document.getElementById("outputTrashButton_" + idRow).style.display = "none";
			document.getElementById("percentGoodButton_" + idRow).style.display = "none";
			document.getElementById("percentTrashButton_" + idRow).style.display = "none";
			document.getElementById("lockBlock_" + idRow).style.display = "flex";
		}else if (element.id == "outputGood_" + idRow){
			document.getElementById("outputGoodButton_" + idRow).style.display = "flex";
			document.getElementById("outputStartButton_" + idRow).style.display = "none";
			document.getElementById("outputTrashButton_" + idRow).style.display = "none";
			document.getElementById("percentGoodButton_" + idRow).style.display = "none";
			document.getElementById("percentTrashButton_" + idRow).style.display = "none";
			document.getElementById("lockBlock_" + idRow).style.display = "flex";
		}else if (element.id == "outputTrash_" + idRow){
			document.getElementById("outputTrashButton_" + idRow).style.display = "flex";
			document.getElementById("outputStartButton_" + idRow).style.display = "none";
			document.getElementById("outputGoodButton_" + idRow).style.display = "none";
			document.getElementById("percentGoodButton_" + idRow).style.display = "none";
			document.getElementById("percentTrashButton_" + idRow).style.display = "none";
			document.getElementById("lockBlock_" + idRow).style.display = "flex";
		}else if (element.id == "percentGood_" + idRow){
			document.getElementById("percentGoodButton_" + idRow).style.display = "flex";	
			document.getElementById("outputStartButton_" + idRow).style.display = "none";
			document.getElementById("outputGoodButton_" + idRow).style.display = "none";
			document.getElementById("outputTrashButton_" + idRow).style.display = "none";
			document.getElementById("percentTrashButton_" + idRow).style.display = "none";
			document.getElementById("lockBlock_" + idRow).style.display = "flex";
		}else if (element.id == "percentTrash_" + idRow){
			document.getElementById("percentGoodButton_" + idRow).style.display = "none";	
			document.getElementById("outputStartButton_" + idRow).style.display = "none";
			document.getElementById("outputGoodButton_" + idRow).style.display = "none";
			document.getElementById("outputTrashButton_" + idRow).style.display = "none";
			document.getElementById("percentTrashButton_" + idRow).style.display = "flex";
			document.getElementById("lockBlock_" + idRow).style.display = "flex";
		}else{
			document.getElementById("percentTrashButton_" + idRow).style.display = "flex";	
			document.getElementById("outputStartButton_" + idRow).style.display = "none";
			document.getElementById("outputGoodButton_" + idRow).style.display = "none";
			document.getElementById("outputTrashButton_" + idRow).style.display = "none";
			document.getElementById("percentGoodButton_" + idRow).style.display = "none";
			document.getElementById("lockBlock_" + idRow).style.display = "none";
		}
	}
	
	
}
function ShowMassDropdownClone(elementID){
	return function e(){
		HideAllDropdownClone(elementID.split('_')[3]);
		var massInputElement = document.getElementById(elementID);
		var main = massInputElement.parentNode.parentNode;
		var massInputResultBlockEl = main.children[1];
		var massInputBlockEl = main.children[0];
		var moreTitleEl = main.children[2];
		var massDropdownEl = main.children[3].children[0];
		var fractionMainValues = document.getElementById('fractionMainValues_' + elementID.split('_')[1] + '_' + elementID.split('_')[3]);
		var fractionSource = document.getElementById('fractionSource_' + elementID.split('_')[1] + '_' + elementID.split('_')[3]);
		var lockBlock = document.getElementById('lockBlock_' + elementID.split('_')[3]);
		var fractionLockValue = document.getElementById('fractionLockValue_' + elementID.split('_')[1] + '_' + elementID.split('_')[3]);

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
					var massInputResultBlockEl2 = document.getElementById(massInputResultBlockEl.id.split('_')[0] + '_2_' + numberRow + '_' + elementID.split('_')[3]);
					var massInputBlockEl2 = document.getElementById(massInputBlockEl.id.split('_')[0] + '_2_' + numberRow + '_' + elementID.split('_')[3]);
					var moreTitleEl2 = document.getElementById(moreTitleEl.id.split('_')[0] + '_2_' + numberRow + '_' + elementID.split('_')[3]);
					var massDropdownEl2 = document.getElementById(massDropdownEl.id.split('_')[0] + '_2_' + numberRow + '_' + elementID.split('_')[3]);

					var massInputResultBlockEl3 = document.getElementById(massInputResultBlockEl.id.split('_')[0] + '_3_' + numberRow + '_' + elementID.split('_')[3]);
					var massInputBlockEl3 = document.getElementById(massInputBlockEl.id.split('_')[0] + '_3_' + numberRow + '_' + elementID.split('_')[3]);
					var moreTitleEl3 = document.getElementById(moreTitleEl.id.split('_')[0] + '_3_' + numberRow + '_' + elementID.split('_')[3]);
					var massDropdownEl3 = document.getElementById(massDropdownEl.id.split('_')[0] + '_3_' + numberRow + '_' + elementID.split('_')[3]);

					var main2 = document.getElementById(main.id.split('_')[0] + '_2_' + numberRow + '_' + elementID.split('_')[3]);
					var main3 = document.getElementById(main.id.split('_')[0] + '_3_' + numberRow + '_' + elementID.split('_')[3]);

					var fractionMainValues2 = document.getElementById(fractionMainValues.id.split('_')[0] + '_2' + '_' + elementID.split('_')[3]);
					var fractionMainValues3 = document.getElementById(fractionMainValues.id.split('_')[0] + '_3' + '_' + elementID.split('_')[3]);
					var fractionSource2 = document.getElementById(fractionSource.id.split('_')[0] + '_2' + '_' + elementID.split('_')[3]);
					var fractionSource3 = document.getElementById(fractionSource.id.split('_')[0] + '_3' + '_' + elementID.split('_')[3]);
					
					var fractionLockValue2 = document.getElementById(fractionLockValue.id.split('_')[0] + '_2' + '_' + elementID.split('_')[3]);
					var fractionLockValue3 = document.getElementById(fractionLockValue.id.split('_')[0] + '_3' + '_' + elementID.split('_')[3]);
					

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
					var massInputResultBlockEl2 = document.getElementById(massInputResultBlockEl.id.split('_')[0] + '_1_' + numberRow + '_' + elementID.split('_')[3]);
					var massInputBlockEl2 = document.getElementById(massInputBlockEl.id.split('_')[0] + '_1_' + numberRow + '_' + elementID.split('_')[3]);
					var moreTitleEl2 = document.getElementById(moreTitleEl.id.split('_')[0] + '_1_' + numberRow + '_' + elementID.split('_')[3]);
					var massDropdownEl2 = document.getElementById(massDropdownEl.id.split('_')[0] + '_1_' + numberRow + '_' + elementID.split('_')[3]);

					var massInputResultBlockEl3 = document.getElementById(massInputResultBlockEl.id.split('_')[0] + '_3_' + numberRow + '_' + elementID.split('_')[3]);
					var massInputBlockEl3 = document.getElementById(massInputBlockEl.id.split('_')[0] + '_3_' + numberRow + '_' + elementID.split('_')[3]);
					var moreTitleEl3 = document.getElementById(moreTitleEl.id.split('_')[0] + '_3_' + numberRow + '_' + elementID.split('_')[3]);
					var massDropdownEl3 = document.getElementById(massDropdownEl.id.split('_')[0] + '_3_' + numberRow + '_' + elementID.split('_')[3]);

					var main2 = document.getElementById(main.id.split('_')[0] + '_1_' + numberRow + '_' + elementID.split('_')[3]);
					var main3 = document.getElementById(main.id.split('_')[0] + '_3_' + numberRow + '_' + elementID.split('_')[3]);

					var fractionMainValues2 = document.getElementById(fractionMainValues.id.split('_')[0] + '_1' + '_' + elementID.split('_')[3]);
					var fractionMainValues3 = document.getElementById(fractionMainValues.id.split('_')[0] + '_3' + '_' + elementID.split('_')[3]);
					var fractionSource2 = document.getElementById(fractionSource.id.split('_')[0] + '_1' + '_' + elementID.split('_')[3]);
					var fractionSource3 = document.getElementById(fractionSource.id.split('_')[0] + '_3' + '_' + elementID.split('_')[3]);
					var fractionLockValue2 = document.getElementById(fractionLockValue.id.split('_')[0] + '_1' + '_' + elementID.split('_')[3]);
					var fractionLockValue3 = document.getElementById(fractionLockValue.id.split('_')[0] + '_3' + '_' + elementID.split('_')[3]);

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
					var massInputResultBlockEl2 = document.getElementById(massInputResultBlockEl.id.split('_')[0] + '_2_' + numberRow + '_' + elementID.split('_')[3]);
					var massInputBlockEl2 = document.getElementById(massInputBlockEl.id.split('_')[0] + '_2_' + numberRow + '_' + elementID.split('_')[3]);
					var moreTitleEl2 = document.getElementById(moreTitleEl.id.split('_')[0] + '_2_' + numberRow + '_' + elementID.split('_')[3]);
					var massDropdownEl2 = document.getElementById(massDropdownEl.id.split('_')[0] + '_2_' + numberRow + '_' + elementID.split('_')[3]);

					var massInputResultBlockEl3 = document.getElementById(massInputResultBlockEl.id.split('_')[0] + '_1_' + numberRow + '_' + elementID.split('_')[3]);
					var massInputBlockEl3 = document.getElementById(massInputBlockEl.id.split('_')[0] + '_1_' + numberRow + '_' + elementID.split('_')[3]);
					var moreTitleEl3 = document.getElementById(moreTitleEl.id.split('_')[0] + '_1_' + numberRow + '_' + elementID.split('_')[3]);
					var massDropdownEl3 = document.getElementById(massDropdownEl.id.split('_')[0] + '_1_' + numberRow + '_' + elementID.split('_')[3]);

					var main2 = document.getElementById(main.id.split('_')[0] + '_2_' + numberRow + '_' + elementID.split('_')[3]);
					var main3 = document.getElementById(main.id.split('_')[0] + '_1_' + numberRow + '_' + elementID.split('_')[3]);

					var fractionMainValues2 = document.getElementById(fractionMainValues.id.split('_')[0] + '_2' + '_' + elementID.split('_')[3]);
					var fractionMainValues3 = document.getElementById(fractionMainValues.id.split('_')[0] + '_1' + '_' + elementID.split('_')[3]);
					var fractionSource2 = document.getElementById(fractionSource.id.split('_')[0] + '_2' + '_' + elementID.split('_')[3]);
					var fractionSource3 = document.getElementById(fractionSource.id.split('_')[0] + '_1' + '_' + elementID.split('_')[3]);
					var fractionLockValue2 = document.getElementById(fractionLockValue.id.split('_')[0] + '_2' + '_' + elementID.split('_')[3]);
					var fractionLockValue3 = document.getElementById(fractionLockValue.id.split('_')[0] + '_1' + '_' + elementID.split('_')[3]);

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
			var rows = document.getElementById('rows_' + elementID.split('_')[3]);
			for (var k = 1; k< rows.children.length; k++){
				rows.children[k].children[0].children[0].children[Number(numberBlock)+1].style.width = '184px';
			}		
		}
		
		GetLockSustateClone(elementID.split('_')[1], elementID.split('_')[3]);
	}
}
function GetLockSustateClone(column_id, pageID){
	switch(column_id){
		case'1':
			pageRow[pageID-1].Sustatment.ColumnState[0] = 'active';
			pageRow[pageID-1].Sustatment.ColumnState[1] = 'lock';
			pageRow[pageID-1].Sustatment.ColumnState[2] = 'unlock';
			break;
		case'2':
			pageRow[pageID-1].Sustatment.ColumnState[0] = 'lock';
			pageRow[pageID-1].Sustatment.ColumnState[1] = 'active';
			pageRow[pageID-1].Sustatment.ColumnState[2] = 'unlock';
			break;
		case'3':
			pageRow[pageID-1].Sustatment.ColumnState[0] = 'lock';
			pageRow[pageID-1].Sustatment.ColumnState[1] = 'unlock';
			pageRow[pageID-1].Sustatment.ColumnState[2] = 'active';
			break;
	}
	setupIMGClone(pageID);
}
function HideMassDropdownClone(elementID){
	return function e(){
		HideAllDropdownClone(elementID.split('_')[3]);
		var controlButton = document.getElementById(elementID);
		var main = controlButton.parentNode.parentNode;
		var massInputBlockEl = main.children[0];
		var massInputResultBlockEl = main.children[1];
		var moreTitleEl = main.children[2];
		var massDropdownEl = main.children[3].children[0];
		var fractionMainValues = document.getElementById('fractionMainValues_' + elementID.split('_')[1] + '_' + elementID.split('_')[3]);
		var fractionSource = document.getElementById('fractionSource_' + elementID.split('_')[1] + '_' + elementID.split('_')[3]);
		var lockBlock = document.getElementById('lockBlock_' + elementID.split('_')[3]);
		var fractionLockValue = document.getElementById('fractionLockValue_' + elementID.split('_')[1] + '_' + elementID.split('_')[3]);

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

function HideAllDropdownClone(el){
	if(el.length > 1){
		el = el.split('_')[1];
	}
	document.getElementById("outputStartButton_" + el).style.display = "none";
	document.getElementById("outputGoodButton_" + el).style.display = "none";
	document.getElementById("outputTrashButton_" + el).style.display = "none";
	document.getElementById("percentGoodButton_" + el).style.display = "none";
	document.getElementById("percentTrashButton_" + el).style.display = "none";
	
	for (var i= 1; i<= 3; i++){
		var fractionSource = document.getElementById('fractionSource_' + i + '_' + el);
		var fractionMainValues = document.getElementById('fractionMainValues_' + i + '_' + el);
		var fractionLockValue = document.getElementById('fractionLockValue_' + i + '_' + el);
		var lockBlock = document.getElementById('lockBlock_' + el);
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
	var rows = document.getElementById('rows_' + el)
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
function switchToggleClone(){
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
	setupComponentTogglesClone(this);
	changeMassInputBlockFormat(this, imgName);
}
function setupComponentTogglesClone(toggle){
	var idRow = toggle.parentNode.parentNode.parentNode.id.split("_")[2];
	var pageID = toggle.parentNode.parentNode.parentNode.id.split("_")[3];
	var idFraction = toggle.parentNode.parentNode.parentNode.id.split("_")[1];
	var imgName = toggle.style.backgroundImage.split('/')[5].split('.')[0];
	
	var massInput = document.getElementById("massInput_" + idFraction + "_" + idRow + "_" + pageID);
	var massInputBlock = document.getElementById("massInputBlock_" + idFraction + "_" + idRow + "_" + pageID);
	var duplicateMassInput = massInputBlock.children[0].children[0];
	
	//Определение фракции
	switch(idFraction){
		case "1":
			var fractionData =  pageRow[pageID-1].componentRow[idRow-1].mainFractionData;
			break;
		case "2":
			var fractionData =  pageRow[pageID-1].componentRow[idRow-1].suitableFractionData;
			break;
		case "3":
			var fractionData =  pageRow[pageID-1].componentRow[idRow-1].weedFractionData;
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
	requirementsPurityUpdateClone(pageID);
}
function requirementsPurityUpdateClone(pageID){
	var purityMainFraction = 0;
	var puritySuitableFraction = 0;
	var purityWeedFraction = 0;
	
	var pureInpStart_ = document.getElementById('pureInpStart_' + pageID);
	var pureInpGood_ = document.getElementById('pureInpGood_' + pageID);
	var pureInpTrash_ = document.getElementById('pureInpTrash_' + pageID);
	
	for(var i = 0; i < pageRow[pageID-1].componentRow.length; i++){
		purityMainFraction += pageRow[pageID-1].componentRow[i].mainFractionData.acceptRejectToggle ? Number(pageRow[pageID-1].componentRow[i].mainFractionData.unitOption.percent) : 0;
		puritySuitableFraction += pageRow[pageID-1].componentRow[i].suitableFractionData.acceptRejectToggle ? Number(pageRow[pageID-1].componentRow[i].suitableFractionData.unitOption.percent) : 0;
		purityWeedFraction += pageRow[pageID-1].componentRow[i].weedFractionData.acceptRejectToggle ? Number(pageRow[pageID-1].componentRow[i].weedFractionData.unitOption.percent) : 0;
	}
	
	pageRow[pageID-1].requirementsTable.mainFractionData.purity = purityMainFraction;
	pageRow[pageID-1].requirementsTable.suitableFraction.purity = puritySuitableFraction;
	pageRow[pageID-1].requirementsTable.weedFraction.purity = purityWeedFraction;
	pureInpStart_.value = Number(pageRow[pageID-1].requirementsTable.mainFractionData.purity).toFixed(2);
	pureInpGood_.value = Number(pageRow[pageID-1].requirementsTable.suitableFraction.purity).toFixed(2);
	pureInpTrash_.value = Number(pageRow[pageID-1].requirementsTable.weedFraction.purity).toFixed(2);
}
function checkotherToggle(idRow, pageID){
	return function e(){
		var idFraction = this.parentNode.parentNode.parentNode.id.split("_")[1];
		var pureInpStart = document.getElementById('pureInpStart_' + pageID);
		var pureInpGood = document.getElementById('pureInpGood_' + pageID);
		var pureInpTrash = document.getElementById('pureInpTrash_' + pageID);
		var massInputBlock =  this.parentNode.parentNode.children[0].children[0];
		var pureInpStartFake = document.getElementById('pureInpStartFake_' + pageID);
		var pureInpGoodFake = document.getElementById('pureInpGoodFake_' + pageID);
		var pureInpTrashFake = document.getElementById('pureInpTrashFake_' + pageID);
		var imgName = this.style.backgroundImage.split('/')[5].split('.')[0];
		switch(idFraction){
			case "1":
				var toggeValue =  pageRow[pageID-1].componentRow[idRow-1].mainFractionData.calcToggle;
				break;
			case "2":
				var toggeValue =  pageRow[pageID-1].componentRow[idRow-1].suitableFractionData.calcToggle;
				break;
			case "3":
				var toggeValue =  pageRow[pageID-1].componentRow[idRow-1].weedFractionData.calcToggle;
				break;
		}
		rows = document.getElementById('rows_' + pageID);
		for(var i = 1; i < rows.children.length; i++){
			if(i != idRow){
				var toggle = rows.children[i].children[0].children[0].children[Number(idFraction)+1].children[0].children[1].children[0];
				var mib = toggle.parentNode.parentNode.children[0].children[0];
				//Определение фракции
				switch(idFraction){
					case "1":
						var fractionData =  pageRow[pageID-1].componentRow[i-1].mainFractionData;
						break;
					case "2":
						var fractionData =  pageRow[pageID-1].componentRow[i-1].suitableFractionData;
						break;
					case "3":
						var fractionData =  pageRow[pageID-1].componentRow[i-1].weedFractionData;
						break;
				}
				toggle.style.backgroundImage = this.style.backgroundImage;
				fractionData.calcToggle = toggeValue;
				mib.type = massInputBlock.type;
			}
			
		}
		switch(imgName){
			case "calcOn":				
				var main = pageRow[pageID-1].componentRow[0].mainFractionData.calcToggle;
				var suit = pageRow[pageID-1].componentRow[0].suitableFractionData.calcToggle;
				var weed = pageRow[pageID-1].componentRow[0].weedFractionData.calcToggle;
				if(main && suit && weed){
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
function setFake(id, fractionNumber){
	return function e(){
		var fake = document.getElementById(id);
		switch(fractionNumber){
			case 1:
				pageRow[currentPage-1].requirementsTable.mainFractionData.Fake = fake.value;
				break;
			case 2:
				pageRow[currentPage-1].requirementsTable.suitableFraction.Fake = fake.value;
				break;
			case 3:
				pageRow[currentPage-1].requirementsTable.weedFraction.Fake = fake.value;
				break;
	
		}
	}
	
}
//Функции компоментов фракций
function mathfComponentFunctionClone(element_id){
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
			var fractionData = pageRow[pageID-1].componentRow[idRow-1].mainFractionData;
			break;
		case "2":
			var fractionData = pageRow[pageID-1].componentRow[idRow-1].suitableFractionData;
			break;
		case "3":
			var fractionData = pageRow[pageID-1].componentRow[idRow-1].weedFractionData;
			break;
	}
	
	hingeMassBlock.children[0].children[0].value = fractionData.hingeMass;
	
	sliderBlock.children[0].children[0].addEventListener("change", componentPercentUpdate(idFraction));
	sliderBlock.children[1].children[0].addEventListener("change", componentGramUpdateClone(idFraction));
	sliderBlock.children[2].children[0].addEventListener("change", componentPiecesUpdateClone(idFraction));
	sliderBlock.children[3].children[0].addEventListener("change", componentPiecesKgUpdateClone(idFraction));
	sliderBlock.children[4].children[0].addEventListener("change", componentPPM_UpdateClone(idFraction));
	
	hingeMassBlock.children[0].children[0].addEventListener("change", componentPercentUpdate(idFraction));
	piecesBlock.children[0].children[0].addEventListener("change", componentPercentUpdate(idFraction));
	
	hingeMassBlock.children[0].children[0].addEventListener("change", updateHingeMassClone(idFraction, pageID));
	piecesBlock.children[0].children[0].addEventListener("change", updatePieces_1000Clone(idRow, pageID));
	
	sliderBlock.children[0].children[0].addEventListener("change", function (){updateRemovedPercentClone(pageID)});
	sliderBlock.children[1].children[0].addEventListener("change", function (){updateRemovedPercentClone(pageID)});
	sliderBlock.children[2].children[0].addEventListener("change", function (){updateRemovedPercentClone(pageID)});
	sliderBlock.children[3].children[0].addEventListener("change", function (){updateRemovedPercentClone(pageID)});
	sliderBlock.children[4].children[0].addEventListener("change", function (){updateRemovedPercentClone(pageID)});
	
	hingeMassBlock.children[0].children[0].addEventListener("change", function (){updateRemovedPercentClone(pageID)});
	piecesBlock.children[0].children[0].addEventListener("change", function (){updateRemovedPercentClone(pageID)});
}
function sumComponentPercentClone(idFraction, pageID){
	var sumComponent = 0;
	for(var i = 0; i < pageRow[pageID-1].componentRow.length; i++){
		switch(idFraction){
			case "1":
				sumComponent += Number(pageRow[pageID-1].componentRow[i].mainFractionData.unitOption.percent);
				break;
			case "2":
				sumComponent += Number(pageRow[pageID-1].componentRow[i].suitableFractionData.unitOption.percent);
				break;
			case "3":
				sumComponent += Number(pageRow[pageID-1].componentRow[i].weedFractionData.unitOption.percent);
				break;
		}
	}
	return sumComponent;
}
function sumComponentPieces_KGClone(idFraction, pageID){
	var sumComponent = 0;
	for(var i = 0; i < pageRow[pageID-1].componentRow.length; i++){
		switch(idFraction){
			case "1":
				sumComponent += Number(pageRow[pageID-1].componentRow[i].mainFractionData.unitOption.pieces_kg);
				break;
			case "2":
				sumComponent += Number(pageRow[pageID-1].componentRow[i].suitableFractionData.unitOption.pieces_kg);
				break;
			case "3":
				sumComponent += Number(pageRow[pageID-1].componentRow[i].weedFractionData.unitOption.pieces_kg);
				break;
		}
	}
	return sumComponent;
}

//Создание клона первого листа

//Обновление значениий процентовок

function componentPercentUpdate(idFraction){
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
				var firstElement = pageRow[pageID-1].componentRow[0].mainFractionData.unitOption;
				var targetElement = pageRow[pageID-1].componentRow[idRow-1].mainFractionData.unitOption;
				var lastElement = pageRow[pageID-1].componentRow[pageRow[pageID-1].componentRow.length-1].mainFractionData.unitOption;
				break;
			case "2":
				var firstElement = pageRow[pageID-1].componentRow[0].suitableFractionData.unitOption;
				var targetElement = pageRow[pageID-1].componentRow[idRow-1].suitableFractionData.unitOption;
				var lastElement = pageRow[pageID-1].componentRow[pageRow[pageID-1].componentRow.length-1].suitableFractionData.unitOption;
				break;
			case "3":
				var firstElement = pageRow[pageID-1].componentRow[0].weedFractionData.unitOption;
				var targetElement = pageRow[pageID-1].componentRow[idRow-1].weedFractionData.unitOption;
				var lastElement = pageRow[pageID-1].componentRow[pageRow[pageID-1].componentRow.length-1].weedFractionData.unitOption;
				break;
		}
		
		//Основное значение
		if(idRow == 1){
			targetElement.percent = percent.value <= Number(targetElement.percent) + Number(lastElement.percent) ? Number(percent.value).toFixed(2) : Number(Number(targetElement.percent) + Number(lastElement.percent)).toFixed(2)
			lastElement.percent = lastElement.percent - (sumComponentPercentClone(idFraction, pageID) - 100);
		}
		else{
			targetElement.percent = percent.value <= Number(firstElement.percent) + Number(targetElement.percent) ? Number(percent.value).toFixed(2) : Number(Number(firstElement.percent) + Number(targetElement.percent)).toFixed(2)
			firstElement.percent = firstElement.percent - (sumComponentPercentClone(idFraction, pageID) - 100);
		}
		
		for(var i = 1; i <= pageRow[pageID-1].componentRow.length; i++){
			var DropdownBlock = document.getElementById("massDropdown_"+ idFraction + "_" + i + "_" + pageID);
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
					percent.value = Number(pageRow[pageID-1].componentRow[i-1].mainFractionData.unitOption.percent).toFixed(2);
					break;
				case "2":
					percent.value =  Number(pageRow[pageID-1].componentRow[i-1].suitableFractionData.unitOption.percent).toFixed(2);
					break;
				case "3":
					percent.value =  Number(pageRow[pageID-1].componentRow[i-1].weedFractionData.unitOption.percent).toFixed(2);
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
					pageRow[pageID-1].componentRow[i-1].mainFractionData.unitOption.percent = percent.value;
					pageRow[pageID-1].componentRow[i-1].mainFractionData.unitOption.gram = gram.value;
					pageRow[pageID-1].componentRow[i-1].mainFractionData.unitOption.pieces = pieces.value;
					pageRow[pageID-1].componentRow[i-1].mainFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageRow[pageID-1].componentRow[i-1].mainFractionData.hingeMass = HingeMass.value;
					pageRow[pageID-1].componentRow[i-1].mainFractionData.pieces_1000 = Pieces_1000.value;
					break;
				case "2":
					pageRow[pageID-1].componentRow[i-1].suitableFractionData.unitOption.percent = percent.value;
					pageRow[pageID-1].componentRow[i-1].suitableFractionData.unitOption.gram = gram.value;
					pageRow[pageID-1].componentRow[i-1].suitableFractionData.unitOption.pieces = pieces.value;
					pageRow[pageID-1].componentRow[i-1].suitableFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageRow[pageID-1].componentRow[i-1].suitableFractionData.hingeMass = HingeMass.value;
					pageRow[pageID-1].componentRow[i-1].suitableFractionData.pieces_1000 = Pieces_1000.value;
					break;
				case "3":
					pageRow[pageID-1].componentRow[i-1].weedFractionData.unitOption.percent = percent.value;
					pageRow[pageID-1].componentRow[i-1].weedFractionData.unitOption.gram = gram.value;
					pageRow[pageID-1].componentRow[i-1].weedFractionData.unitOption.pieces = pieces.value;
					pageRow[pageID-1].componentRow[i-1].weedFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageRow[pageID-1].componentRow[i-1].weedFractionData.hingeMass = HingeMass.value;
					pageRow[pageID-1].componentRow[i-1].weedFractionData.pieces_1000 = Pieces_1000.value;
					break;
			}
			if(DropdownBlock.parentNode.parentNode.children[0].children[0].children[0].type != 'text'){
				DropdownBlock.parentNode.parentNode.children[0].children[0].children[0].value = percent.value;
				DropdownBlock.parentNode.parentNode.children[1].children[0].value = percent.value + " %";
			}
		}
		requirementsPurityUpdateClone(pageID);
		updatePPM_ComponentsClone(idFraction, pageID);
	}
}

//Обновление значениий граммовок
function componentGramUpdateClone(idFraction){
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
				var firstElement = pageRow[pageID-1].componentRow[0].mainFractionData.unitOption;
				var targetElement = pageRow[pageID-1].componentRow[idRow-1].mainFractionData.unitOption;
				var lastElement = pageRow[pageID-1].componentRow[pageRow[pageID-1].componentRow.length-1].mainFractionData.unitOption;
				break;
			case "2":
				var firstElement = pageRow[pageID-1].componentRow[0].suitableFractionData.unitOption;
				var targetElement = pageRow[pageID-1].componentRow[idRow-1].suitableFractionData.unitOption;
				var lastElement = pageRow[pageID-1].componentRow[pageRow[pageID-1].componentRow.length-1].suitableFractionData.unitOption;
				break;
			case "3":
				var firstElement = pageRow[pageID-1].componentRow[0].weedFractionData.unitOption;
				var targetElement = pageRow[pageID-1].componentRow[idRow-1].weedFractionData.unitOption;
				var lastElement = pageRow[pageID-1].componentRow[pageRow[pageID-1].componentRow.length-1].weedFractionData.unitOption;
				break;
		}

		//Основное значение
		if(idRow == 1){
			targetElement.percent = percent.value <= Number(targetElement.percent) + Number(lastElement.percent) ? Number(percent.value).toFixed(2) : Number(Number(targetElement.percent) + Number(lastElement.percent)).toFixed(2)
			lastElement.percent = lastElement.percent - (sumComponentPercentClone(idFraction, pageID) - 100);
		}
		else{
			targetElement.percent = percent.value <= Number(firstElement.percent) + Number(targetElement.percent) ? Number(percent.value).toFixed(2) : Number(Number(firstElement.percent) + Number(targetElement.percent)).toFixed(2)
			firstElement.percent = firstElement.percent - (sumComponentPercentClone(idFraction, pageID) - 100);
		}
		
		for(var i = 1; i <= pageRow[pageID-1].componentRow.length; i++){
			var DropdownBlock = document.getElementById("massDropdown_" + idFraction + "_" + i + "_" + pageID);
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
					percent.value = Number(pageRow[pageID-1].componentRow[i-1].mainFractionData.unitOption.percent).toFixed(2);
					break;
				case "2":
					percent.value =  Number(pageRow[pageID-1].componentRow[i-1].suitableFractionData.unitOption.percent).toFixed(2);
					break;
				case "3":
					percent.value =  Number(pageRow[pageID-1].componentRow[i-1].weedFractionData.unitOption.percent).toFixed(2);
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
					pageRow[pageID-1].componentRow[i-1].mainFractionData.unitOption.percent = percent.value;
					pageRow[pageID-1].componentRow[i-1].mainFractionData.unitOption.gram = gram.value;
					pageRow[pageID-1].componentRow[i-1].mainFractionData.unitOption.pieces = pieces.value;
					pageRow[pageID-1].componentRow[i-1].mainFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageRow[pageID-1].componentRow[i-1].mainFractionData.hingeMass = HingeMass.value;
					pageRow[pageID-1].componentRow[i-1].mainFractionData.pieces_1000 = Pieces_1000.value;
					break;
				case "2":
					pageRow[pageID-1].componentRow[i-1].suitableFractionData.unitOption.percent = percent.value;
					pageRow[pageID-1].componentRow[i-1].suitableFractionData.unitOption.gram = gram.value;
					pageRow[pageID-1].componentRow[i-1].suitableFractionData.unitOption.pieces = pieces.value;
					pageRow[pageID-1].componentRow[i-1].suitableFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageRow[pageID-1].componentRow[i-1].suitableFractionData.hingeMass = HingeMass.value;
					pageRow[pageID-1].componentRow[i-1].suitableFractionData.pieces_1000 = Pieces_1000.value;
					break;
				case "3":
					pageRow[pageID-1].componentRow[i-1].weedFractionData.unitOption.percent = percent.value;
					pageRow[pageID-1].componentRow[i-1].weedFractionData.unitOption.gram = gram.value;
					pageRow[pageID-1].componentRow[i-1].weedFractionData.unitOption.pieces = pieces.value;
					pageRow[pageID-1].componentRow[i-1].weedFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageRow[pageID-1].componentRow[i-1].weedFractionData.hingeMass = HingeMass.value;
					pageRow[pageID-1].componentRow[i-1].weedFractionData.pieces_1000 = Pieces_1000.value;
					break;
			}
			if(DropdownBlock.parentNode.parentNode.children[0].children[0].children[0].type != 'text'){
				DropdownBlock.parentNode.parentNode.children[0].children[0].children[0].value = percent.value;
				DropdownBlock.parentNode.parentNode.children[1].children[0].value = percent.value + " %";
			}
		}
		requirementsPurityUpdateClone(pageID);
		updatePPM_ComponentsClone(idFraction, pageID);
	}
}

function componentPiecesUpdateClone(idFraction){
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
				var firstElement = pageRow[pageID-1].componentRow[0].mainFractionData.unitOption;
				var targetElement = pageRow[pageID-1].componentRow[idRow-1].mainFractionData.unitOption;
				var lastElement = pageRow[pageID-1].componentRow[pageRow[pageID-1].componentRow.length-1].mainFractionData.unitOption;
				break;
			case "2":
				var firstElement = pageRow[pageID-1].componentRow[0].suitableFractionData.unitOption;
				var targetElement = pageRow[pageID-1].componentRow[idRow-1].suitableFractionData.unitOption;
				var lastElement = pageRow[pageID-1].componentRow[pageRow[pageID-1].componentRow.length-1].suitableFractionData.unitOption;
				break;
			case "3":
				var firstElement = pageRow[pageID-1].componentRow[0].weedFractionData.unitOption;
				var targetElement = pageRow[pageID-1].componentRow[idRow-1].weedFractionData.unitOption;
				var lastElement = pageRow[pageID-1].componentRow[pageRow[pageID-1].componentRow.length-1].weedFractionData.unitOption;
				break;
		}

		//Основное значение
		if(idRow == 1){
			targetElement.percent = percent.value <= Number(targetElement.percent) + Number(lastElement.percent) ? Number(percent.value).toFixed(2) : Number(Number(targetElement.percent) + Number(lastElement.percent)).toFixed(2)
			lastElement.percent = lastElement.percent - (sumComponentPercentClone(idFraction, pageID) - 100);
		}
		else{
			targetElement.percent = percent.value <= Number(firstElement.percent) + Number(targetElement.percent) ? Number(percent.value).toFixed(2) : Number(Number(firstElement.percent) + Number(targetElement.percent)).toFixed(2)
			firstElement.percent = firstElement.percent - (sumComponentPercentClone(idFraction, pageID) - 100);
		}
		
		for(var i = 1; i <= pageRow[pageID-1].componentRow.length; i++){
			var DropdownBlock = document.getElementById("massDropdown_"+idFraction+"_"+i+"_"+pageID);
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
					percent.value = Number(pageRow[pageID-1].componentRow[i-1].mainFractionData.unitOption.percent).toFixed(2);
					break;
				case "2":
					percent.value =  Number(pageRow[pageID-1].componentRow[i-1].suitableFractionData.unitOption.percent).toFixed(2);
					break;
				case "3":
					percent.value =  Number(pageRow[pageID-1].componentRow[i-1].weedFractionData.unitOption.percent).toFixed(2);
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
					pageRow[pageID-1].componentRow[i-1].mainFractionData.unitOption.percent = percent.value;
					pageRow[pageID-1].componentRow[i-1].mainFractionData.unitOption.gram = gram.value;
					pageRow[pageID-1].componentRow[i-1].mainFractionData.unitOption.pieces = pieces.value;
					pageRow[pageID-1].componentRow[i-1].mainFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageRow[pageID-1].componentRow[i-1].mainFractionData.hingeMass = HingeMass.value;
					pageRow[pageID-1].componentRow[i-1].mainFractionData.pieces_1000 = Pieces_1000.value;
					break;
				case "2":
					pageRow[pageID-1].componentRow[i-1].suitableFractionData.unitOption.percent = percent.value;
					pageRow[pageID-1].componentRow[i-1].suitableFractionData.unitOption.gram = gram.value;
					pageRow[pageID-1].componentRow[i-1].suitableFractionData.unitOption.pieces = pieces.value;
					pageRow[pageID-1].componentRow[i-1].suitableFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageRow[pageID-1].componentRow[i-1].suitableFractionData.hingeMass = HingeMass.value;
					pageRow[pageID-1].componentRow[i-1].suitableFractionData.pieces_1000 = Pieces_1000.value;
					break;
				case "3":
					pageRow[pageID-1].componentRow[i-1].weedFractionData.unitOption.percent = percent.value;
					pageRow[pageID-1].componentRow[i-1].weedFractionData.unitOption.gram = gram.value;
					pageRow[pageID-1].componentRow[i-1].weedFractionData.unitOption.pieces = pieces.value;
					pageRow[pageID-1].componentRow[i-1].weedFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageRow[pageID-1].componentRow[i-1].weedFractionData.hingeMass = HingeMass.value;
					pageRow[pageID-1].componentRow[i-1].weedFractionData.pieces_1000 = Pieces_1000.value;
					break;
			}
			if(DropdownBlock.parentNode.parentNode.children[0].children[0].children[0].type != 'text'){
				DropdownBlock.parentNode.parentNode.children[0].children[0].children[0].value = percent.value;
				DropdownBlock.parentNode.parentNode.children[1].children[0].value = percent.value + " %";
			}
		}
		requirementsPurityUpdateClone(pageID);
		updatePPM_ComponentsClone(idFraction, pageID);
	}
}
//Обновление значениий штук/кг
function componentPiecesKgUpdateClone(idFraction){
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
				var firstElement = pageRow[pageID-1].componentRow[0].mainFractionData.unitOption;
				var targetElement = pageRow[pageID-1].componentRow[idRow-1].mainFractionData.unitOption;
				var lastElement = pageRow[pageID-1].componentRow[pageRow[pageID-1].componentRow.length-1].mainFractionData.unitOption;
				break;
			case "2":
				var firstElement = pageRow[pageID-1].componentRow[0].suitableFractionData.unitOption;
				var targetElement = pageRow[pageID-1].componentRow[idRow-1].suitableFractionData.unitOption;
				var lastElement = pageRow[pageID-1].componentRow[pageRow[pageID-1].componentRow.length-1].suitableFractionData.unitOption;
				break;
			case "3":
				var firstElement = pageRow[pageID-1].componentRow[0].weedFractionData.unitOption;
				var targetElement = pageRow[pageID-1].componentRow[idRow-1].weedFractionData.unitOption;
				var lastElement = pageRow[pageID-1].componentRow[pageRow[pageID-1].componentRow.length-1].weedFractionData.unitOption;
				break;
		}

		//Основное значение
		if(idRow == 1){
			targetElement.percent = percent.value <= Number(targetElement.percent) + Number(lastElement.percent) ? Number(percent.value).toFixed(2) : Number(Number(targetElement.percent) + Number(lastElement.percent)).toFixed(2)
			lastElement.percent = lastElement.percent - (sumComponentPercentClone(idFraction, pageID) - 100);
		}
		else{
			targetElement.percent = percent.value <= Number(firstElement.percent) + Number(targetElement.percent) ? Number(percent.value).toFixed(2) : Number(Number(firstElement.percent) + Number(targetElement.percent)).toFixed(2)
			firstElement.percent = firstElement.percent - (sumComponentPercentClone(idFraction, pageID) - 100);
		}
		
		for(var i = 1; i <= pageRow[pageID-1].componentRow.length; i++){
			var DropdownBlock = document.getElementById("massDropdown_" + idFraction + "_" + i + "_" + pageID);
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
					percent.value = Number(pageRow[pageID-1].componentRow[i-1].mainFractionData.unitOption.percent).toFixed(2);
					break;
				case "2":
					percent.value =  Number(pageRow[pageID-1].componentRow[i-1].suitableFractionData.unitOption.percent).toFixed(2);
					break;
				case "3":
					percent.value =  Number(pageRow[pageID-1].componentRow[i-1].weedFractionData.unitOption.percent).toFixed(2);
					break;
			}

			//Остальные значения
			gram.value = Number(HingeMass.value / 100 * percent.value).toFixed(2);
			pieces.value = Number(gram.value / (Pieces_1000.value / 1000)).toFixed(2);
			pieces_kg.value =  Number((percent.value * 10) / (Pieces_1000.value / 1000)).toFixed(2);
			ppm.value = Number(1000000 / sumComponentPieces_KGClone(idFraction, pageID) * pieces_kg.value);
			//Значение компонента
			switch(idFraction){
				case "1":
					//Значение компонента
					pageRow[pageID-1].componentRow[i-1].mainFractionData.unitOption.percent = percent.value;
					pageRow[pageID-1].componentRow[i-1].mainFractionData.unitOption.gram = gram.value;
					pageRow[pageID-1].componentRow[i-1].mainFractionData.unitOption.pieces = pieces.value;
					pageRow[pageID-1].componentRow[i-1].mainFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageRow[pageID-1].componentRow[i-1].mainFractionData.hingeMass = HingeMass.value;
					pageRow[pageID-1].componentRow[i-1].mainFractionData.pieces_1000 = Pieces_1000.value;
					break;
				case "2":
					pageRow[pageID-1].componentRow[i-1].suitableFractionData.unitOption.percent = percent.value;
					pageRow[pageID-1].componentRow[i-1].suitableFractionData.unitOption.gram = gram.value;
					pageRow[pageID-1].componentRow[i-1].suitableFractionData.unitOption.pieces = pieces.value;
					pageRow[pageID-1].componentRow[i-1].suitableFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageRow[pageID-1].componentRow[i-1].suitableFractionData.hingeMass = HingeMass.value;
					pageRow[pageID-1].componentRow[i-1].suitableFractionData.pieces_1000 = Pieces_1000.value;
					break;
				case "3":
					pageRow[pageID-1].componentRow[i-1].weedFractionData.unitOption.percent = percent.value;
					pageRow[pageID-1].componentRow[i-1].weedFractionData.unitOption.gram = gram.value;
					pageRow[pageID-1].componentRow[i-1].weedFractionData.unitOption.pieces = pieces.value;
					pageRow[pageID-1].componentRow[i-1].weedFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageRow[pageID-1].componentRow[i-1].weedFractionData.hingeMass = HingeMass.value;
					pageRow[pageID-1].componentRow[i-1].weedFractionData.pieces_1000 = Pieces_1000.value;
					break;
			}
			if(DropdownBlock.parentNode.parentNode.children[0].children[0].children[0].type != 'text'){
				DropdownBlock.parentNode.parentNode.children[0].children[0].children[0].value = percent.value;
				DropdownBlock.parentNode.parentNode.children[1].children[0].value = percent.value + " %";
			}
		}
		requirementsPurityUpdateClone(pageID);
		updatePPM_ComponentsClone(idFraction, pageID);
	}
}
//Обновление значениий промилий
function componentPPM_UpdateClone(idFraction){
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
		
		pieces_kg.value = Number(ppm.value / (1000000 / sumComponentPieces_KGClone(idFraction, pageID))).toFixed(2);
		percent.value = Number((pieces_kg.value / 10) * (Pieces_1000.value / 1000)).toFixed(2);
		
		switch(idFraction){
			case "1":
				var firstElement = pageRow[pageID-1].componentRow[0].mainFractionData.unitOption;
				var targetElement = pageRow[pageID-1].componentRow[idRow-1].mainFractionData.unitOption;
				var lastElement = pageRow[pageID-1].componentRow[pageRow[pageID-1].componentRow.length-1].mainFractionData.unitOption;
				break;
			case "2":
				var firstElement = pageRow[pageID-1].componentRow[0].suitableFractionData.unitOption;
				var targetElement = pageRow[pageID-1].componentRow[idRow-1].suitableFractionData.unitOption;
				var lastElement = pageRow[pageID-1].componentRow[pageRow[pageID-1].componentRow.length-1].suitableFractionData.unitOption;
				break;
			case "3":
				var firstElement = pageRow[pageID-1].componentRow[0].weedFractionData.unitOption;
				var targetElement = pageRow[pageID-1].componentRow[idRow-1].weedFractionData.unitOption;
				var lastElement = pageRow[pageID-1].componentRow[componentRow.length-1].weedFractionData.unitOption;
				break;
		}

		//Основное значение
		if(idRow == 1){
			targetElement.percent = percent.value <= Number(targetElement.percent) + Number(lastElement.percent) ? Number(percent.value).toFixed(2) : Number(Number(targetElement.percent) + Number(lastElement.percent)).toFixed(2)
			lastElement.percent = lastElement.percent - (sumComponentPercentClone(idFraction, pageID) - 100);
		}
		else{
			targetElement.percent = percent.value <= Number(firstElement.percent) + Number(targetElement.percent) ? Number(percent.value).toFixed(2) : Number(Number(firstElement.percent) + Number(targetElement.percent)).toFixed(2)
			firstElement.percent = firstElement.percent - (sumComponentPercentClone(idFraction, pageID) - 100);
		}
		
		for(var i = 1; i <= pageRow[pageID-1].componentRow.length; i++){
			var DropdownBlock = document.getElementById("massDropdown_" + idFraction + "_" + i + "_" + pageID);
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
					percent.value = Number(pageRow[pageID-1].componentRow[i-1].mainFractionData.unitOption.percent).toFixed(2);
					break;
				case "2":
					percent.value =  Number(pageRow[pageID-1].componentRow[i-1].suitableFractionData.unitOption.percent).toFixed(2);
					break;
				case "3":
					percent.value =  Number(pageRow[pageID-1].componentRow[i-1].weedFractionData.unitOption.percent).toFixed(2);
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
					pageRow[pageID-1].componentRow[i-1].mainFractionData.unitOption.percent = percent.value;
					pageRow[pageID-1].componentRow[i-1].mainFractionData.unitOption.gram = gram.value;
					pageRow[pageID-1].componentRow[i-1].mainFractionData.unitOption.pieces = pieces.value;
					pageRow[pageID-1].componentRow[i-1].mainFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageRow[pageID-1].componentRow[i-1].mainFractionData.hingeMass = HingeMass.value;
					pageRow[pageID-1].componentRow[i-1].mainFractionData.pieces_1000 = Pieces_1000.value;
					break;
				case "2":
					pageRow[pageID-1].componentRow[i-1].suitableFractionData.unitOption.percent = percent.value;
					pageRow[pageID-1].componentRow[i-1].suitableFractionData.unitOption.gram = gram.value;
					pageRow[pageID-1].componentRow[i-1].suitableFractionData.unitOption.pieces = pieces.value;
					pageRow[pageID-1].componentRow[i-1].suitableFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageRow[pageID-1].componentRow[i-1].suitableFractionData.hingeMass = HingeMass.value;
					pageRow[pageID-1].componentRow[i-1].suitableFractionData.pieces_1000 = Pieces_1000.value;
					break;
				case "3":
					pageRow[pageID-1].componentRow[i-1].weedFractionData.unitOption.percent = percent.value;
					pageRow[pageID-1].componentRow[i-1].weedFractionData.unitOption.gram = gram.value;
					pageRow[pageID-1].componentRow[i-1].weedFractionData.unitOption.pieces = pieces.value;
					pageRow[pageID-1].componentRow[i-1].weedFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageRow[pageID-1].componentRow[i-1].weedFractionData.hingeMass = HingeMass.value;
					pageRow[pageID-1].componentRow[i-1].weedFractionData.pieces_1000 = Pieces_1000.value;
					break;
			}
			if(DropdownBlock.parentNode.parentNode.children[0].children[0].children[0].type != 'text'){
				DropdownBlock.parentNode.parentNode.children[0].children[0].children[0].value = percent.value;
				DropdownBlock.parentNode.parentNode.children[1].children[0].value = percent.value + " %";
			}
		}
		requirementsPurityUpdateClone(pageID);
		updatePPM_ComponentsClone(idFraction, pageID);
	}
}

function updateHingeMassClone(idFraction, pageID){
	return function e(){
		for(var i = 1; i <= pageRow[pageID-1].componentRow.length; i++){
			var DropdownBlock = document.getElementById("massDropdown_" + idFraction + "_" + i + "_" + pageID);
			var HingeMass = DropdownBlock.children[2].children[0].children[0];
		
			pageRow[pageID-1].componentRow[i-1].mainFractionData.hingeMass = this.value;
			HingeMass.value = pageRow[pageID-1].componentRow[i-1].mainFractionData.hingeMass;
		}
	}
}
function updatePieces_1000Clone(idRow, pageID){
	return function e(){
		for(var idFraction = 1; idFraction <= 3; idFraction++){ 
			var DropdownBlock = document.getElementById("massDropdown_" + idFraction + "_" + idRow + "_" + pageID);
			var Pieces_1000	= DropdownBlock.children[4].children[0].children[0];
			
			pageRow[pageID-1].componentRow[idRow-1].mainFractionData.pieces_1000 = this.value;
			pageRow[pageID-1].componentRow[idRow-1].suitableFractionData.pieces_1000 = this.value;
			pageRow[pageID-1].componentRow[idRow-1].weedFractionData.pieces_1000 = this.value;
			
			Pieces_1000.value = this.value;
		}
	}
}

function updateRemovedPercentClone(pageID){
	if(pageRow[pageID-1].componentRow.length){
		pageRow[pageID-1].componentRow[0].mainFractionData.unitOption.percent = pageRow[pageID-1].componentRow[0].mainFractionData.unitOption.percent - (sumComponentPercentClone("1", pageID) - 100);
		pageRow[pageID-1].componentRow[0].suitableFractionData.unitOption.percent = pageRow[pageID-1].componentRow[0].suitableFractionData.unitOption.percent - (sumComponentPercentClone("2", pageID) - 100);
		pageRow[pageID-1].componentRow[0].weedFractionData.unitOption.percent = pageRow[pageID-1].componentRow[0].weedFractionData.unitOption.percent - (sumComponentPercentClone("3", pageID) - 100);
		pageRow[pageID-1].componentRow[0].weedFractionData.unitOption.percent = isNaN(pageRow[pageID-1].componentRow[0].weedFractionData.unitOption.percent) ? 0 : pageRow[pageID-1].componentRow[0].weedFractionData.unitOption.percent;
		for(var idFraction = 1; idFraction <= 3; idFraction++){ 
			for(var i = 1; i <= pageRow[pageID-1].componentRow.length; i++){
				var DropdownBlock = document.getElementById("massDropdown_" + idFraction + "_" + i + "_" + pageID);
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
						percent.value = Number(pageRow[pageID-1].componentRow[i-1].mainFractionData.unitOption.percent).toFixed(2);
						break;
					case "2":
						percent.value =  Number(pageRow[pageID-1].componentRow[i-1].suitableFractionData.unitOption.percent).toFixed(2);
						break;
					case "3":
						percent.value =  Number(pageRow[pageID-1].componentRow[i-1].weedFractionData.unitOption.percent).toFixed(2);
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
						pageRow[pageID-1].componentRow[i-1].mainFractionData.unitOption.percent = percent.value;
						pageRow[pageID-1].componentRow[i-1].mainFractionData.unitOption.gram = gram.value;
						pageRow[pageID-1].componentRow[i-1].mainFractionData.unitOption.pieces = pieces.value;
						pageRow[pageID-1].componentRow[i-1].mainFractionData.unitOption.pieces_kg = pieces_kg.value;
						pageRow[pageID-1].componentRow[i-1].mainFractionData.unitOption.ppm = ppm.value;
						
						pageRow[pageID-1].componentRow[i-1].mainFractionData.hingeMass = HingeMass.value;
						pageRow[pageID-1].componentRow[i-1].mainFractionData.pieces_1000 = Pieces_1000.value;
						break;
					case "2":
						pageRow[pageID-1].componentRow[i-1].suitableFractionData.unitOption.percent = percent.value;
						pageRow[pageID-1].componentRow[i-1].suitableFractionData.unitOption.gram = gram.value;
						pageRow[pageID-1].componentRow[i-1].suitableFractionData.unitOption.pieces = pieces.value;
						pageRow[pageID-1].componentRow[i-1].suitableFractionData.unitOption.pieces_kg = pieces_kg.value;
						
						pageRow[pageID-1].componentRow[i-1].suitableFractionData.hingeMass = HingeMass.value;
						pageRow[pageID-1].componentRow[i-1].suitableFractionData.pieces_1000 = Pieces_1000.value;
						break;
					case "3":
						pageRow[pageID-1].componentRow[i-1].weedFractionData.unitOption.percent = percent.value;
						pageRow[pageID-1].componentRow[i-1].weedFractionData.unitOption.gram = gram.value;
						pageRow[pageID-1].componentRow[i-1].weedFractionData.unitOption.pieces = pieces.value;
						pageRow[pageID-1].componentRow[i-1].weedFractionData.unitOption.pieces_kg = pieces_kg.value;
						
						pageRow[pageID-1].componentRow[i-1].weedFractionData.hingeMass = HingeMass.value;
						pageRow[pageID-1].componentRow[i-1].weedFractionData.pieces_1000 = Pieces_1000.value;
						break;
				}
				if(DropdownBlock.parentNode.parentNode.children[0].children[0].children[0].type != 'text'){
					DropdownBlock.parentNode.parentNode.children[0].children[0].children[0].value = percent.value;
					DropdownBlock.parentNode.parentNode.children[1].children[0].value = percent.value + " %";
				}
			}
			updatePPM_ComponentsClone(String(idFraction), pageID);
		}
		requirementsPurityUpdateClone(pageID);
	}
}
function updatePPM_ComponentsClone(idFraction, pageID){
	for(var i = 1; i <= pageRow[pageID-1].componentRow.length; i++){
		var DropdownBlock = document.getElementById("massDropdown_" + idFraction + "_" + i + "_" + pageID);
		var MainScrollBlock = DropdownBlock.children[0];

		//Основные параметры
		var pieces_kg = MainScrollBlock.children[3].children[0];
		var ppm = MainScrollBlock.children[4].children[0]

		ppm.value = Number(1000000 / sumComponentPieces_KGClone(idFraction, pageID) * pieces_kg.value).toFixed(2);
		
		switch(idFraction){
			case "1":
				pageRow[pageID-1].componentRow[i-1].mainFractionData.unitOption.ppm = ppm.value;
				break;
			case "2":
				pageRow[pageID-1].componentRow[i-1].suitableFractionData.unitOption.ppm = ppm.value;
				break;
			case "3":
				pageRow[pageID-1].componentRow[i-1].weedFractionData.unitOption.ppm = ppm.value;
				break;
		}
	}
	requirementsPercentUpdateClone(pageID);
	setupDefaulUnitValueClone(pageID);
	updateDataClone(pageID);
}
function updateDataClone(pageID){
	var acceptFractionMass = pageRow[pageID-1].requirementsTable.suitableFraction.mass;
	var rejectFractionMass = pageRow[pageID-1].requirementsTable.weedFraction.mass;
	var acceptFractionPurity = pageRow[pageID-1].requirementsTable.suitableFraction.purity;
	var rejectFractionPurity = pageRow[pageID-1].requirementsTable.weedFraction.purity;
	
	var accept = acceptFractionMass/100*(acceptFractionPurity);
	var weedInAccept = acceptFractionMass/100*(100-acceptFractionPurity);
	var reject = rejectFractionMass/100*(100-rejectFractionPurity);
	var productInReject = rejectFractionMass/100*(rejectFractionPurity);
	
	chartData = [accept,weedInAccept,reject,productInReject];
	handler(chartData);
}
function requirementsPercentUpdateClone(pageID){
	var sustamentID = pageRow[pageID-1].Sustatment.ColumnState.indexOf("active");
	
	var outputGood = document.getElementById('outputGood_' + pageID);
	var percentGood = document.getElementById('percentGood_' + pageID);
	var outputTrash = document.getElementById('outputTrash_' + pageID);
	var percentTrash = document.getElementById('percentTrash_' + pageID);
	switch(sustamentID){
		case 0:
			if(pageRow[pageID-1].Sustatment.ColumnState[1] != "lock" || pageRow[pageID-1].Sustatment.ColumnState[2] != "lock"){
				percentGood.value = percentGood.value < 0 ? Number(pageRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2) : Number(percentGood.value).toFixed(2);
				pageRow[pageID-1].requirementsTable.suitableFraction.percent_exit = Number(percentGood.value) <= requirementsMaxExitClone("suitableFractionData", pageID) ? Number(percentGood.value) : requirementsMaxExitClone("suitableFractionData", pageID);
				
				percentTrash.value = percentTrash.value < 0 ? Number(pageRow[pageID-1].requirementsTable.weedFraction.percent_exit).toFixed(2) : Number(percentTrash.value).toFixed(2);
				pageRow[pageID-1].requirementsTable.weedFraction.percent_exit = Number(percentTrash.value) <= requirementsMaxExitClone("weedFractionData", pageID) ? Number(percentTrash.value) : requirementsMaxExitClone("weedFractionData", pageID);
			}
			break;
		case 1:
			percentGood.value = percentGood.value < 0 ? Number(pageRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2) : Number(percentGood.value).toFixed(2);
			pageRow[pageID-1].requirementsTable.suitableFraction.percent_exit = Number(percentGood.value) <= requirementsMaxExitClone("suitableFractionData", pageID) ? Number(percentGood.value) : requirementsMaxExitClone("suitableFractionData", pageID);
			
			pageRow[pageID-1].requirementsTable.weedFraction.percent_exit = Number(pageRow[pageID-1].requirementsTable.mainFractionData.percent_exit - pageRow[pageID-1].requirementsTable.suitableFraction.percent_exit);
			
			pageRow[pageID-1].requirementsTable.suitableFraction.mass = Number(pageRow[pageID-1].requirementsTable.mainFractionData.mass / pageRow[pageID-1].requirementsTable.mainFractionData.percent_exit * pageRow[pageID-1].requirementsTable.suitableFraction.percent_exit);
			pageRow[pageID-1].requirementsTable.weedFraction.mass = Number(pageRow[pageID-1].requirementsTable.mainFractionData.mass / pageRow[pageID-1].requirementsTable.mainFractionData.percent_exit * pageRow[pageID-1].requirementsTable.weedFraction.percent_exit);
			
			outputGood.value = Number(pageRow[pageID-1].requirementsTable.suitableFraction.mass).toFixed(3);
			outputTrash.value = Number(pageRow[pageID-1].requirementsTable.weedFraction.mass).toFixed(3);
			percentGood.value = Number(pageRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2);
			percentTrash.value = Number(pageRow[pageID-1].requirementsTable.weedFraction.percent_exit).toFixed(2);
			break;
		case 2:
			percentTrash.value = percentTrash.value < 0 ? Number(pageRow[pageID-1].requirementsTable.weedFraction.percent_exit).toFixed(2) : Number(percentTrash.value).toFixed(2);
			pageRow[pageID-1].requirementsTable.weedFraction.percent_exit = Number(percentTrash.value) <= requirementsMaxExitClone("weedFractionData", pageID) ? Number(percentTrash.value) : requirementsMaxExitClone("weedFractionData", pageID);
			
			pageRow[pageID-1].requirementsTable.suitableFraction.percent_exit = Number(pageRow[pageID-1].requirementsTable.mainFractionData.percent_exit - pageRow[pageID-1].requirementsTable.weedFraction.percent_exit);
			
			pageRow[pageID-1].requirementsTable.suitableFraction.mass = Number(pageRow[pageID-1].requirementsTable.mainFractionData.mass / pageRow[pageID-1].requirementsTable.mainFractionData.percent_exit * pageRow[pageID-1].requirementsTable.suitableFraction.percent_exit);
			pageRow[pageID-1].requirementsTable.weedFraction.mass = Number(pageRow[pageID-1].requirementsTable.mainFractionData.mass / pageRow[pageID-1].requirementsTable.mainFractionData.percent_exit * pageRow[pageID-1].requirementsTable.weedFraction.percent_exit);
			
			outputGood.value = Number(pageRow[pageID-1].requirementsTable.suitableFraction.mass).toFixed(3);
			outputTrash.value = Number(pageRow[pageID-1].requirementsTable.weedFraction.mass).toFixed(3);
			percentGood.value = Number(pageRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2);
			percentTrash.value = Number(pageRow[pageID-1].requirementsTable.weedFraction.percent_exit).toFixed(2);
			break;
	}
	setupFractionExitClone(pageID);
	handler(chartData);
}
function setupFractionExitClone(pageID){
	var __suitable = Number(requirementsMaxExitClone("suitableFractionData", pageID));
	var __weed = Number(requirementsMaxExitClone("weedFractionData", pageID));
	
	var outputGood = document.getElementById('outputGood_' + pageID);
	var percentGood = document.getElementById('percentGood_' + pageID);
	var outputTrash = document.getElementById('outputTrash_' + pageID);
	var percentTrash = document.getElementById('percentTrash_' + pageID);
	
	var sustamentID = pageRow[pageID-1].Sustatment.ColumnState.indexOf("active");
	switch(sustamentID){
		case 0:
			if(Number(percentGood.value) > __suitable){
				pageRow[pageID-1].requirementsTable.suitableFraction.percent_exit = __suitable;
				pageRow[pageID-1].requirementsTable.weedFraction.percent_exit = Number(pageRow[pageID-1].requirementsTable.mainFractionData.percent_exit - pageRow[pageID-1].requirementsTable.suitableFraction.percent_exit);
					
				pageRow[pageID-1].requirementsTable.suitableFraction.mass = Number(pageRow[pageID-1].requirementsTable.mainFractionData.mass / pageRow[pageID-1].requirementsTable.mainFractionData.percent_exit * pageRow[pageID-1].requirementsTable.suitableFraction.percent_exit);
				pageRow[pageID-1].requirementsTable.weedFraction.mass = Number(pageRow[pageID-1].requirementsTable.mainFractionData.mass / pageRow[pageID-1].requirementsTable.mainFractionData.percent_exit * pageRow[pageID-1].requirementsTable.weedFraction.percent_exit);
				
				outputGood.value = Number(pageRow[pageID-1].requirementsTable.suitableFraction.mass).toFixed(3);
				outputTrash.value = Number(pageRow[pageID-1].requirementsTable.weedFraction.mass).toFixed(3);
				percentGood.value = Number(pageRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2);
				percentTrash.value = Number(pageRow[pageID-1].requirementsTable.weedFraction.percent_exit).toFixed(2);
			}
			if(Number(percentTrash.value) > __weed){
				pageRow[pageID-1].requirementsTable.weedFraction.percent_exit = __weed;
				pageRow[pageID-1].requirementsTable.suitableFraction.percent_exit = Number(pageRow[pageID-1].requirementsTable.mainFractionData.percent_exit - pageRow[pageID-1].requirementsTable.weedFraction.percent_exit);
				
				pageRow[pageID-1].requirementsTable.suitableFraction.mass = Number(pageRow[pageID-1].requirementsTable.mainFractionData.mass / pageRow[pageID-1].requirementsTable.mainFractionData.percent_exit * pageRow[pageID-1].requirementsTable.suitableFraction.percent_exit);
				pageRow[pageID-1].requirementsTable.weedFraction.mass = Number(pageRow[pageID-1].requirementsTable.mainFractionData.mass / pageRow[pageID-1].requirementsTable.mainFractionData.percent_exit * pageRow[pageID-1].requirementsTable.weedFraction.percent_exit);
				
				outputGood.value = Number(pageRow[pageID-1].requirementsTable.suitableFraction.mass).toFixed(3);
				outputTrash.value = Number(pageRow[pageID-1].requirementsTable.weedFraction.mass).toFixed(3);
				percentGood.value = Number(pageRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2);
				percentTrash.value = Number(pageRow[pageID-1].requirementsTable.weedFraction.percent_exit).toFixed(2);
			}
			if(pageRow[pageID-1].Sustatment.ColumnState[1] == "unlock"){
				for(var i = 0; i < pageRow[pageID-1].componentRow.length; i++){
					var mainComponentMass = Number(pageRow[pageID-1].requirementsTable.mainFractionData.mass / 100 * pageRow[pageID-1].componentRow[i].mainFractionData.unitOption.percent).toFixed(5);
					var weedComponentMass = Number(pageRow[pageID-1].requirementsTable.weedFraction.mass / 100 * pageRow[pageID-1].componentRow[i].weedFractionData.unitOption.percent).toFixed(5);
					
					var suitableComponentMass = Number(mainComponentMass - weedComponentMass);
					pageRow[pageID-1].componentRow[i].suitableFractionData.unitOption.percent = suitableComponentMass / (pageRow[pageID-1].requirementsTable.suitableFraction.mass / 100);
					
					if(isNaN(pageRow[pageID-1].componentRow[i].suitableFractionData.unitOption.percent) || pageRow[pageID-1].componentRow[i].suitableFractionData.unitOption.percent == "Infinity" || pageRow[pageID-1].componentRow[i].suitableFractionData.unitOption.percent == "-Infinity")
						pageRow[pageID-1].componentRow[i].suitableFractionData.unitOption.percent = i == 0 ? 100 : 0;
					
					pageRow[pageID-1].componentRow[i].suitableFractionData.unitOption.percent = pageRow[pageID-1].componentRow[i].suitableFractionData.unitOption.percent < 0 ? 0 : pageRow[pageID-1].componentRow[i].suitableFractionData.unitOption.percent;
					pageRow[pageID-1].componentRow[i].suitableFractionData.unitOption.percent = pageRow[pageID-1].componentRow[i].suitableFractionData.unitOption.percent > 100 ? 100 : pageRow[pageID-1].componentRow[i].suitableFractionData.unitOption.percent;
				
					pageRow[pageID-1].componentRow[i].suitableFractionData.unitOption.percent = parseFloat(pageRow[pageID-1].componentRow[i].suitableFractionData.unitOption.percent).toFixed(2);
				}
			}
			else if(pageRow[pageID-1].Sustatment.ColumnState[2] == "unlock"){
				for(var i = 0; i < pageRow[pageID-1].componentRow.length; i++){
					var mainComponentMass = Number(pageRow[pageID-1].requirementsTable.mainFractionData.mass / 100 * pageRow[pageID-1].componentRow[i].mainFractionData.unitOption.percent).toFixed(5);
					var suitableComponentMass = Number(pageRow[pageID-1].requirementsTable.suitableFraction.mass / 100 * pageRow[pageID-1].componentRow[i].suitableFractionData.unitOption.percent).toFixed(5);
					
					var weedComponentMass = Number(mainComponentMass - suitableComponentMass);
					pageRow[pageID-1].componentRow[i].weedFractionData.unitOption.percent = weedComponentMass / (pageRow[pageID-1].requirementsTable.weedFraction.mass / 100);
					
					if(isNaN(pageRow[pageID-1].componentRow[i].weedFractionData.unitOption.percent) || pageRow[pageID-1].componentRow[i].weedFractionData.unitOption.percent == "Infinity" || pageRow[pageID-1].componentRow[i].weedFractionData.unitOption.percent == "-Infinity")
						pageRow[pageID-1].componentRow[i].weedFractionData.unitOption.percent = i != pageRow[pageID-1].componentRow.length-1 ? 0 : 100;
					
					pageRow[pageID-1].componentRow[i].weedFractionData.unitOption.percent = pageRow[pageID-1].componentRow[i].weedFractionData.unitOption.percent < 0 ? 0 : pageRow[pageID-1].componentRow[i].weedFractionData.unitOption.percent;
					pageRow[pageID-1].componentRow[i].weedFractionData.unitOption.percent = pageRow[pageID-1].componentRow[i].weedFractionData.unitOption.percent > 100 ? 100 : pageRow[pageID-1].componentRow[i].weedFractionData.unitOption.percent;
				
					pageRow[pageID-1].componentRow[i].weedFractionData.unitOption.percent = parseFloat(pageRow[pageID-1].componentRow[i].weedFractionData.unitOption.percent).toFixed(2);
				}
			}
			break;
		case 1:
			if(pageRow[pageID-1].Sustatment.ColumnState[0] == "unlock"){
				for(var i = 0; i < pageRow[pageID-1].componentRow.length; i++){
					var suitableComponentMass = Number(pageRow[pageID-1].requirementsTable.suitableFraction.mass / 100 * pageRow[pageID-1].componentRow[i].suitableFractionData.unitOption.percent).toFixed(5);
					var weedComponentMass = Number(pageRow[pageID-1].requirementsTable.weedFraction.mass / 100 * pageRow[pageID-1].componentRow[i].weedFractionData.unitOption.percent).toFixed(5);
					
					var mainComponentMass =  Number(suitableComponentMass) +  Number(weedComponentMass);
					pageRow[pageID-1].componentRow[i].mainFractionData.unitOption.percent = mainComponentMass / (pageRow[pageID-1].requirementsTable.mainFractionData.mass / 100);
					
					pageRow[pageID-1].componentRow[i].mainFractionData.unitOption.percent = pageRow[pageID-1].componentRow[i].mainFractionData.unitOption.percent < 0 ? 0 : pageRow[pageID-1].componentRow[i].mainFractionData.unitOption.percent;
					pageRow[pageID-1].componentRow[i].mainFractionData.unitOption.percent = pageRow[pageID-1].componentRow[i].mainFractionData.unitOption.percent > 100 ? 100 : pageRow[pageID-1].componentRow[i].mainFractionData.unitOption.percent;
				
					pageRow[pageID-1].componentRow[i].mainFractionData.unitOption.percent = parseFloat(pageRow[pageID-1].componentRow[i].mainFractionData.unitOption.percent).toFixed(2);
				}
			}
			else{
				for(var i = 0; i < pageRow[pageID-1].componentRow.length; i++){
					var suitableComponentMass = Number(pageRow[pageID-1].requirementsTable.suitableFraction.mass / 100 * pageRow[pageID-1].componentRow[i].suitableFractionData.unitOption.percent).toFixed(5);
					var mainComponentMass = Number(pageRow[pageID-1].requirementsTable.mainFractionData.mass / 100 * pageRow[pageID-1].componentRow[i].mainFractionData.unitOption.percent).toFixed(5);
					
					var weedComponentMass =  Number(mainComponentMass - suitableComponentMass);
					pageRow[pageID-1].componentRow[i].weedFractionData.unitOption.percent = weedComponentMass / (pageRow[pageID-1].requirementsTable.weedFraction.mass / 100);
					
					pageRow[pageID-1].componentRow[i].weedFractionData.unitOption.percent = pageRow[pageID-1].componentRow[i].weedFractionData.unitOption.percent < 0 ? 0 : pageRow[pageID-1].componentRow[i].weedFractionData.unitOption.percent;
					pageRow[pageID-1].componentRow[i].weedFractionData.unitOption.percent = pageRow[pageID-1].componentRow[i].weedFractionData.unitOption.percent > 100 ? 100 : pageRow[pageID-1].componentRow[i].weedFractionData.unitOption.percent;
				
					pageRow[pageID-1].componentRow[i].weedFractionData.unitOption.percent = parseFloat(pageRow[pageID-1].componentRow[i].weedFractionData.unitOption.percent).toFixed(2);
				}
			}
			break;
		case 2:
			if(pageRow[pageID-1].Sustatment.ColumnState[0] == "unlock"){
				for(var i = 0; i < pageRow[pageID-1].componentRow.length; i++){
					var suitableComponentMass = Number(pageRow[pageID-1].requirementsTable.suitableFraction.mass / 100 * pageRow[pageID-1].componentRow[i].suitableFractionData.unitOption.percent).toFixed(5);
					var weedComponentMass = Number(pageRow[pageID-1].requirementsTable.weedFraction.mass / 100 * pageRow[pageID-1].componentRow[i].weedFractionData.unitOption.percent).toFixed(5);
					
					var mainComponentMass =  Number(suitableComponentMass) +  Number(weedComponentMass);
					pageRow[pageID-1].componentRow[i].mainFractionData.unitOption.percent = mainComponentMass / (pageRow[pageID-1].requirementsTable.mainFractionData.mass / 100).toFixed(5);
					
					pageRow[pageID-1].componentRow[i].mainFractionData.unitOption.percent = pageRow[pageID-1].componentRow[i].mainFractionData.unitOption.percent < 0 ? 0 : pageRow[pageID-1].componentRow[i].mainFractionData.unitOption.percent;
					pageRow[pageID-1].componentRow[i].mainFractionData.unitOption.percent = pageRow[pageID-1].componentRow[i].mainFractionData.unitOption.percent > 100 ? 100 : pageRow[pageID-1].componentRow[i].mainFractionData.unitOption.percent;
					
					pageRow[pageID-1].componentRow[i].mainFractionData.unitOption.percent = parseFloat(pageRow[pageID-1].componentRow[i].mainFractionData.unitOption.percent).toFixed(2);
				}
			}
			else{
				for(var i = 0; i < pageRow[pageID-1].componentRow.length; i++){
					var weedComponentMass = Number(pageRow[pageID-1].requirementsTable.weedFraction.mass / 100 * pageRow[pageID-1].componentRow[i].weedFractionData.unitOption.percent).toFixed(5);
					var mainComponentMass = Number(pageRow[pageID-1].requirementsTable.mainFractionData.mass / 100 * pageRow[pageID-1].componentRow[i].mainFractionData.unitOption.percent).toFixed(5);
					
					var suitableComponentMass =  Number(mainComponentMass - weedComponentMass);
					pageRow[pageID-1].componentRow[i].suitableFractionData.unitOption.percent = suitableComponentMass / (pageRow[pageID-1].requirementsTable.suitableFraction.mass / 100);
					
					pageRow[pageID-1].componentRow[i].suitableFractionData.unitOption.percent = pageRow[pageID-1].componentRow[i].weedFractionData.unitOption.percent < 0 ? 0 : pageRow[pageID-1].componentRow[i].suitableFractionData.unitOption.percent;
					pageRow[pageID-1].componentRow[i].suitableFractionData.unitOption.percent = pageRow[pageID-1].componentRow[i].weedFractionData.unitOption.percent > 100 ? 100 : pageRow[pageID-1].componentRow[i].suitableFractionData.unitOption.percent;
					
					pageRow[pageID-1].componentRow[i].suitableFractionData.unitOption.percent = parseFloat(pageRow[pageID-1].componentRow[i].suitableFractionData.unitOption.percent).toFixed(2);
				}
			}
			break;
	}
}
function requirementsMaxExitClone(fraction, pageID){
	var minFractionMass = Number(Infinity);
	for(var i = 0; i < pageRow[pageID-1].componentRow.length; i++){
		var requirementsComponentMass = Number(pageRow[pageID-1].requirementsTable.mainFractionData.mass / 100 * pageRow[pageID-1].componentRow[i].mainFractionData.unitOption.percent);
		
		var maxFractionComponentMass = Number(requirementsComponentMass / Number(pageRow[pageID-1].componentRow[i][fraction].unitOption.percent) * 100);
		
		if(maxFractionComponentMass == "NaN" || maxFractionComponentMass == "Infinity" || maxFractionComponentMass == "-Infinity")
			maxFractionComponentMass = 0;
		
		if(maxFractionComponentMass <= minFractionMass && maxFractionComponentMass != 0)
			minFractionMass = maxFractionComponentMass
	}
	//Назначение максимальнового выхода для фракции
	var fractionMaxExitPercent = minFractionMass/pageRow[pageID-1].requirementsTable.mainFractionData.mass * 100;
	fractionMaxExitPercent = (fractionMaxExitPercent == "NaN" || fractionMaxExitPercent == "Infinity" || fractionMaxExitPercent == "-Infinity") ? 0 : fractionMaxExitPercent;
	
	return Number(fractionMaxExitPercent).toFixed(2);
}
function setupTargetDefaltUnitClone(inputOptions, unit){
	return function e(){
		var pageID = inputOptions.parentNode.parentNode.parentNode.parentNode.parentNode.id.split('_')[1];
		var targetBlock = inputOptions.parentNode.parentNode.children;
		if (inputOptions.style.backgroundColor != "") {
			for (var i = 0; i < targetBlock.length; i++) {
				targetBlock[i].style.display = "";
				inputOptions.style.backgroundColor = "";
			}
			pageRow[pageID-1].Sustatment.DefaultUnit = "percent";
		}
		else {
			for (var i = 0; i < targetBlock.length; i++) {
				targetBlock[i].style.display = "none";
			}

			this.parentNode.style.display = "";
			inputOptions.style.backgroundColor = "#ffb23f";
			pageRow[pageID-1].Sustatment.DefaultUnit = unit;
		}
		setupDefaulUnitValueClone(pageID);
	}
}
function setupDefaulUnitValueClone(pageID){
	//Дефолтный тескт
	var text = returnUnitDefaultText(pageRow[pageID-1].Sustatment.DefaultUnit);
	
	//цикл назначение дефолных значений
	for(var i = 1; i <= pageRow[pageID-1].componentRow.length; i++){
		for(var idFraction = 1; idFraction <= 3; idFraction++){
			var massInput = document.getElementById("massInput_" + idFraction + "_" + i + "_" + pageID);
			var massInputBlock = document.getElementById("massInputBlock_" + idFraction + "_" + i + "_" + pageID);
			var duplicateMassInput = massInputBlock.children[0].children[0];
			var duplicateType = duplicateMassInput.type;

			const startType = duplicateMassInput.value;

			switch(String(idFraction)){
				case "1":
					if(pageRow[pageID-1].componentRow[i-1].mainFractionData.selectUnitOption == null){
						massInput.value = pageRow[pageID-1].componentRow[i-1].mainFractionData.unitOption[pageRow[pageID-1].Sustatment.DefaultUnit] + text;
						duplicateMassInput.value = pageRow[pageID-1].componentRow[i-1].mainFractionData.unitOption[pageRow[pageID-1].Sustatment.DefaultUnit];
					}
					else{
						var selectUnitOption = pageRow[pageID-1].componentRow[i-1].mainFractionData.selectUnitOption;
						var __text = returnUnitDefaultText(selectUnitOption);
						massInput.value = pageRow[pageID-1].componentRow[i-1].mainFractionData.unitOption[selectUnitOption] + __text;
						duplicateMassInput.value = pageRow[pageID-1].componentRow[i-1].mainFractionData.unitOption[selectUnitOption];
					}
					break;
				case "2":
					if(pageRow[pageID-1].componentRow[i-1].suitableFractionData.selectUnitOption == null){
						massInput.value = pageRow[pageID-1].componentRow[i-1].suitableFractionData.unitOption[pageRow[pageID-1].Sustatment.DefaultUnit] + text;
						duplicateMassInput.value = pageRow[pageID-1].componentRow[i-1].suitableFractionData.unitOption[pageRow[pageID-1].Sustatment.DefaultUnit];
					}
					else{
						var selectUnitOption = pageRow[pageID-1].componentRow[i-1].suitableFractionData.selectUnitOption;
						var __text = returnUnitDefaultText(selectUnitOption);
						massInput.value = pageRow[pageID-1].componentRow[i-1].suitableFractionData.unitOption[selectUnitOption] + __text;
						duplicateMassInput.value = pageRow[pageID-1].componentRow[i-1].suitableFractionData.unitOption[selectUnitOption];
					}
					break;
				case "3":
					if(pageRow[pageID-1].componentRow[i-1].weedFractionData.selectUnitOption == null){
						massInput.value = pageRow[pageID-1].componentRow[i-1].weedFractionData.unitOption[pageRow[pageID-1].Sustatment.DefaultUnit] + text;
						duplicateMassInput.value = pageRow[pageID-1].componentRow[i-1].weedFractionData.unitOption[pageRow[pageID-1].Sustatment.DefaultUnit];
					}
					else{
						var selectUnitOption = pageRow[pageID-1].componentRow[i-1].weedFractionData.selectUnitOption;
						var __text = returnUnitDefaultText(selectUnitOption);
						massInput.value = pageRow[pageID-1].componentRow[i-1].weedFractionData.unitOption[selectUnitOption] + __text;
						duplicateMassInput.value = pageRow[pageID-1].componentRow[i-1].weedFractionData.unitOption[selectUnitOption];
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
function CheckLockInputClone(element){
	return function e(){
		var el = document.getElementById(element);
		var element_id = el.id.split('_')[1];
		var pageID = el.id.split('_')[2];
		var activeEl;
		for(var i = 0; i< pageRow[pageID-1].Sustatment.ColumnState.length; i++){
			if(pageRow[pageID-1].Sustatment.ColumnState[i] == 'active'){
				activeEl = i;
				break;
			}
		}
		switch(activeEl){
			case 0:            
				var activeEl = element_id;
				var passiveEl = element_id == '2' ?  '3' : '2';
				pageRow[pageID-1].Sustatment.ColumnState[activeEl-1] =  pageRow[pageID-1].Sustatment.ColumnState[activeEl-1]  != 'unlock' ? 'unlock' : 'lock';
				pageRow[pageID-1].Sustatment.ColumnState[passiveEl-1] =  pageRow[pageID-1].Sustatment.ColumnState[activeEl-1]  != 'unlock' ? 'unlock' : 'lock';
				break;
			case 1:
				var activeEl = element_id;
				var passiveEl = element_id == '1' ?  '3' : '1';
				pageRow[pageID-1].Sustatment.ColumnState[activeEl-1] =  pageRow[pageID-1].Sustatment.ColumnState[activeEl-1]  != 'unlock' ? 'unlock' : 'lock';
				pageRow[pageID-1].Sustatment.ColumnState[passiveEl-1] =  pageRow[pageID-1].Sustatment.ColumnState[activeEl-1]  != 'unlock' ? 'unlock' : 'lock';
				break;
			case 2:
				var activeEl = element_id;
				var passiveEl = element_id == '1' ?  '2' : '1';
				pageRow[pageID-1].Sustatment.ColumnState[activeEl-1] =  pageRow[pageID-1].Sustatment.ColumnState[activeEl-1]  != 'unlock' ? 'unlock' : 'lock';
				pageRow[pageID-1].Sustatment.ColumnState[passiveEl-1] =  pageRow[pageID-1].Sustatment.ColumnState[activeEl-1]  != 'unlock' ? 'unlock' : 'lock';
				break;
		}
		
		setupIMGClone(pageID);
	}       
}
function setupIMGClone(pageID){
    for(var i = 0; i< pageRow[pageID-1].Sustatment.ColumnState.length; i++){
        var img = document.getElementById('Lock_' + (i+1) + '_' + pageID);
        var parent = document.getElementById('fractionLockValue_' + (i+1) + '_' + pageID);
        switch(pageRow[pageID-1].Sustatment.ColumnState[i]){
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
function switchDropdownMassClone(element){
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
				var component = pageRow[pageID-1].componentRow[idRow-1].mainFractionData;
				break;
			case "2":
				var component = pageRow[pageID-1].componentRow[idRow-1].suitableFractionData;
				break;
			case "3":
				var component = pageRow[pageID-1].componentRow[idRow-1].weedFractionData;
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
		setupDefaulUnitValueClone(pageID);
	}
	//Добавление слушателя на элементы ниспадающего списка
	for(var i = 0; i < sliderBlock.children.length; i++){
		sliderBlock.children[i].children[1].addEventListener("click", e);
	}
	for(var i = 2; i <= 3; i++){
		var newID = "massDropdown_" + i + '_' + element.split('_')[2] + '_' + element.split('_')[3];
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
					var component = pageRow[pageID-1].componentRow[idRow-1].mainFractionData;
					break;
				case "2":
					var component = pageRow[pageID-1].componentRow[idRow-1].suitableFractionData;
					break;
				case "3":
					var component = pageRow[pageID-1].componentRow[idRow-1].weedFractionData;
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
			setupDefaulUnitValueClone(pageID);
		}
		//Добавление слушателя на элементы ниспадающего списка
		for(var k = 0; k < sliderBlock.children.length; k++){
			sliderBlock.children[k].children[1].addEventListener("click", e);
		}
	}	
}

function requirementsBlockViev(idRow){
	return function e(){
		var defaultUnit = document.getElementById('defaultUnit_' + idRow);
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
function prepareDefaultCloneUnit(idRow){
	var defaultUnit = document.getElementById('defaultUnit_' + idRow);
	var scrollBlock = defaultUnit.getElementsByClassName('scrollBlock')[0];
	var dropdownElements = scrollBlock.children;
	
	var percentInput = dropdownElements[0].children[0];
	var gramInput = dropdownElements[1].children[0];
	var piecesInput = dropdownElements[2].children[0];
	var pieces_kgInput = dropdownElements[3].children[0];
	var ppmInput = dropdownElements[4].children[0];
	
	percentInput.addEventListener("click", setupTargetDefaltUnitClone(percentInput, "percent"));
	gramInput.addEventListener("click", setupTargetDefaltUnitClone(gramInput, "gram"));
	piecesInput.addEventListener("click", setupTargetDefaltUnitClone(piecesInput, "pieces"));
	pieces_kgInput.addEventListener("click", setupTargetDefaltUnitClone(pieces_kgInput, "pieces_kg"));
	ppmInput.addEventListener("click", setupTargetDefaltUnitClone(ppmInput, "ppm"));
	
	percentInput.click();
}
function HideDropdownClone(idElement){
	return function e(){
		var button = document.getElementById(idElement);
		var pageID = button.id.split('_')[2];
		var idRow = button.id.split('_')[1];
		var main = button.parentNode.parentNode.parentNode;
		var dropdown = main.children[2];	
		var otherCheckbox = main.children[1].children[0].children[1];
		var clsInput_testRow = main.children[1].children[0].children[0];
		var classifierInpurResultElement = main.children[0].children[0];
		var lockBlock = document.getElementById('lockBlock_' + pageID);
		dropdown.style.display = "none";	
		resultTextView(clsInput_testRow, classifierInpurResultElement);
		classifierInpurResultElement.style.display="none";
		main.children[0].style.display="none";
		otherCheckbox.style.display="none";
		lockBlock.style.display = 'none';
		if(pageRow[pageID-1].componentRow[idRow-1].SearchProductResult.length == 0){
			for(var i = 0; i < classifierInpurResultElement.children.length; i++){
				pageRow[pageID-1].componentRow[idRow-1].SearchProductResult.push(classifierInpurResultElement.children[i].textContent)
			}
		}
		else{
			pageRow[pageID-1].componentRow[idRow-1].SearchProductResult = [];
			for(var i = 0; i < classifierInpurResultElement.children.length; i++){
				pageRow[pageID-1].componentRow[idRow-1].SearchProductResult.push(classifierInpurResultElement.children[i].textContent)
				
			}
		}
	}
}
function ShowDropdownClone(idRow, pageID){
	return function e(){
		HideAllDropdownClone(pageID);
		var dropdown = document.getElementById('clsDropdown_' + idRow + '_' + pageID);
		var clsInput_test = document.getElementById('clsInput_test_' + idRow + '_' + pageID);
		var otherCheckbox = document.getElementById('addOption_' + idRow + '_' + pageID);
		var classifierInpurResult = document.getElementById('classifierInpurResult_' + idRow + '_' + pageID);
		var clsInputResultBlock = document.getElementById('clsInputResultBlock_' + idRow + '_' + pageID);
		var lockBlock = document.getElementById('lockBlock_' + pageID);

		dropdown.style.display="flex";
		clsInput_test.value = ""
		classifierInpurResult.style.display="flex";
		clsInputResultBlock.style.display="flex";
		otherCheckbox.style.display="flex";
		lockBlock.style.display = "none";

		StartInputClone(idRow, pageID);
	}
}
function refreshMassof1000Clone(idRow, pageID){
	return function e(){
		var product = pageRow[pageID-1].componentRow[idRow-1].SearchProductResult;
		var gramm1 = document.getElementById('massDropdown_1_'+ idRow + '_' + pageID).children[4].children[0].children[0];
		var gramm2 = document.getElementById('massDropdown_2_'+ idRow + '_' + pageID).children[4].children[0].children[0];
		var gramm3 = document.getElementById('massDropdown_3_'+ idRow + '_' + pageID).children[4].children[0].children[0];
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
function StartInputListenersClone(idRow, pageID){
	return function e(){
		var inputBlock = document.getElementById("clsInput_test_" + idRow + '_' + pageID);
		var clsDropdown = document.getElementById("clsDropdown_" + idRow + '_' + pageID);
		DoropdownOptionClearClone(idRow, pageID);
		if(inputBlock.value.length == 0){
			DropdownOptionDefaultClone(idRow, pageID);
		}
		else{
			DropdownSearchClone(idRow, pageID);
		}	
		clsDropdown.style.display="flex";
	}
}
function searchidClone(idRow, pageID){
	return function e(){
		var addOption = document.getElementById('addOption_' + idRow + '_' + pageID);
		var main = addOption.parentNode.parentNode.parentNode;
		var clsDropdown = main.children[2].id;
		addCustomOptionClone(idRow, pageID);
	}
}
function addCustomOptionClone(idRow, pageID){
	var dropdown = document.getElementById('clsDropdown_' + idRow + '_' + pageID);
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
			StartInputClone(idRow, pageID);
		});
		document.getElementById(classifierInpurResult).appendChild(object);
		sortResultBlockClone(idRow, pageID);
	}
	ShowDropdownClone(idRow, pageID);
}
function sortResultBlockClone(idRow, pageID){
	var resultBlock = document.getElementById('clsInputResultBlock_' + idRow + '_' + pageID);
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
function infoBlockClone(idRow, pageID){
	return function e(){
		if (document.getElementById('infoBlock_' + idRow + '_' + pageID).style.display=="none"){
			document.getElementById('infoBlock_' + idRow + '_' + pageID).style.display="flex";
			document.getElementById('infoBlockButton_' + idRow + '_' + pageID).style.transform = "rotate(180deg)";
			document.getElementById('infoTitle_' + idRow + '_' + pageID).style.borderBottomWidth="0px"
			document.getElementById('infoTitle_' + idRow + '_' + pageID).style.marginBottom="8px";
		}else{
			document.getElementById('infoBlock_' + idRow + '_' + pageID).style.display="none";
			document.getElementById('infoBlockButton_' + idRow + '_' + pageID).style.transform = "rotate(0deg)";
			document.getElementById('infoTitle_' + idRow + '_' + pageID).style.borderBottomWidth="1px"
			document.getElementById('infoTitle_' + idRow + '_' + pageID).style.marginBottom="0px";
		}
	}
}
function photoBlockClone(idRow, pageID){
	return function e(){
		if (document.getElementById("photoBlock_" + idRow + '_' + pageID).style.display=="none"){
			document.getElementById("photoBlock_" + idRow + '_' + pageID).style.display="flex";
			document.getElementById("photoBlockButton_" + idRow + '_' + pageID).style.transform = "rotate(180deg)";
			document.getElementById("photoTitle_" + idRow + '_' + pageID).style.borderBottomWidth="0px"
			document.getElementById("photoTitle_" + idRow + '_' + pageID).style.marginBottom="8px";
		}else{
			document.getElementById("photoBlock_" + idRow + '_' + pageID).style.display="none";
			document.getElementById("photoBlockButton_" + idRow + '_' + pageID).style.transform = "rotate(0deg)";
			document.getElementById("photoTitle_" + idRow + '_' + pageID).style.borderBottomWidth="1px"
			document.getElementById("photoTitle_" + idRow + '_' + pageID).style.marginBottom="0px";
		}
	}
}
function changeMassValue(mass, input){
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
					var selectUnitOption = pageRow[pageID-1].componentRow[idRow-1].mainFractionData.selectUnitOption;
					break;
				case "2":
					var selectUnitOption = pageRow[pageID-1].componentRow[idRow-1].suitableFractionData.selectUnitOption;
					break;
				case "3":
					var selectUnitOption = pageRow[pageID-1].componentRow[idRow-1].weedFractionData.selectUnitOption;
					break;
			}
			selectUnitOption = selectUnitOption != null ? selectUnitOption : pageRow[pageID-1].Sustatment.DefaultUnit;
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
			pageRow[pageID-1].componentRow[idRow-1][fraction].custom = valueType;
		}		
		//Переключение для дефолтных единиц измерений.		
		if(this.type != 'text'){
			switch(pageRow[pageID-1].Sustatment.DefaultUnit){
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
		
	}
}

//создание клона листа
function addrowСustomerRequirements(){
	var row = customerRequirements_0.cloneNode(true);
	var idRow = Number(customerRequirements_MainBlock.children.length);

	row.style.display = '';
	row.id = 'customerRequirements_' + idRow;
	//  titleBlock
	row.children[0].children[2].children[0].children[1].id = 'companyName_' + idRow;
	row.children[0].children[2].children[0].children[1].addEventListener('change', setTitleTable('companyName_' + idRow));
	row.children[0].children[2].children[1].children[1].id = 'userManagerName_' + idRow;
	row.children[0].children[2].children[1].children[1].addEventListener('change', setTitleTable('userManagerName_' + idRow));
	row.children[0].children[2].children[2].children[1].id = 'createDateProtocol_' + idRow;
	row.children[0].children[2].children[2].children[1].addEventListener('change', setTitleTable('createDateProtocol_' + idRow));
	//  pageContent
	row.children[1].children[0].children[0].id = 'defaultUnit_' + idRow;
	row.children[1].children[0].children[0].children[0].children[1].addEventListener('click', requirementsBlockViev(idRow));
	row.children[1].children[0].children[1].id = 'fraction_' + idRow;
	row.children[1].children[0].children[1].children[1].id = 'fractionSource_1_' + idRow;
	row.children[1].children[0].children[1].children[1].children[0].children[0].id = 'Source_1_' + idRow;
	row.children[1].children[0].children[1].children[2].id = 'fractionSource_2_' + idRow;
	row.children[1].children[0].children[1].children[2].children[0].children[0].id = 'Source_2_' + idRow;
	row.children[1].children[0].children[1].children[3].id = 'fractionSource_3_' + idRow;
	row.children[1].children[0].children[1].children[3].children[0].children[0].id = 'Source_3_' + idRow;
	row.children[1].children[0].children[2].children[1].id = 'fractionMainValues_1_' + idRow; 
	row.children[1].children[0].children[2].children[1].children[0].children[0].children[0].id = 'pureInpStart_' + idRow;
	row.children[1].children[0].children[2].children[1].children[0].children[0].children[1].id = 'pureInpStartFake_' + idRow;
	row.children[1].children[0].children[2].children[1].children[0].children[0].children[1].addEventListener('change', setFake('pureInpStartFake_' + idRow, 1));
	row.children[1].children[0].children[2].children[1].children[1].children[0].children[0].id = 'outputStart_' + idRow;
	row.children[1].children[0].children[2].children[1].children[1].children[0].children[0].addEventListener('click', ShowUpsertDropdownClone('outputStart_' + idRow, idRow));
	row.children[1].children[0].children[2].children[1].children[1].children[0].children[1].id = 'outputStartButton_' + idRow;
	row.children[1].children[0].children[2].children[1].children[2].children[0].children[0].id = 'percentStart_' + idRow;
	row.children[1].children[0].children[2].children[2].id = 'fractionMainValues_2_' + idRow;
	row.children[1].children[0].children[2].children[2].children[0].children[0].children[0].id = 'pureInpGood_' + idRow;
	row.children[1].children[0].children[2].children[2].children[0].children[0].children[1].id = 'pureInpGoodFake_' + idRow;
	row.children[1].children[0].children[2].children[2].children[0].children[0].children[1].addEventListener('change', setFake('pureInpGoodFake_' + idRow, 2));
	row.children[1].children[0].children[2].children[2].children[1].children[0].children[0].id = 'outputGood_' + idRow;
	row.children[1].children[0].children[2].children[2].children[1].children[0].children[0].addEventListener('click', ShowUpsertDropdownClone('outputGood_' + idRow, idRow));
	row.children[1].children[0].children[2].children[2].children[1].children[0].children[1].id = 'outputGoodButton_' + idRow;
	row.children[1].children[0].children[2].children[2].children[2].children[0].children[0].id = 'percentGood_' + idRow;
	row.children[1].children[0].children[2].children[2].children[2].children[0].children[0].addEventListener('click', ShowUpsertDropdownClone('percentGood_' + idRow, idRow));
	row.children[1].children[0].children[2].children[2].children[2].children[1].id = 'percentGoodButton_' + idRow;
	row.children[1].children[0].children[2].children[3].id = 'fractionMainValues_3_' + idRow;
	row.children[1].children[0].children[2].children[3].children[0].children[0].children[0].id = 'pureInpTrash_' + idRow;
	row.children[1].children[0].children[2].children[3].children[0].children[0].children[1].id = 'pureInpTrashFake_' + idRow;
	row.children[1].children[0].children[2].children[3].children[0].children[0].children[1].addEventListener('change', setFake('pureInpTrashFake_' + idRow, 3));
	row.children[1].children[0].children[2].children[3].children[1].children[0].children[0].id = 'outputTrash_' + idRow;
	row.children[1].children[0].children[2].children[3].children[1].children[0].children[0].addEventListener('click', ShowUpsertDropdownClone('outputTrash_' + idRow, idRow));
	row.children[1].children[0].children[2].children[3].children[1].children[1].id = 'outputTrashButton_' + idRow;
	row.children[1].children[0].children[2].children[3].children[2].children[0].children[0].id = 'percentTrash_' + idRow;
	row.children[1].children[0].children[2].children[3].children[2].children[0].children[0].addEventListener('click', ShowUpsertDropdownClone('percentTrash_' + idRow, idRow));
	row.children[1].children[0].children[2].children[3].children[2].children[1].id = 'percentTrashButton_' + idRow;
	row.children[1].children[0].children[3].id = 'lockBlock_' + idRow;
	row.children[1].children[0].children[3].children[1].id = 'fractionLockValue_1_' + idRow;
	row.children[1].children[0].children[3].children[1].children[0].children[0].children[0].id = 'Lock_1_' + idRow;
	row.children[1].children[0].children[3].children[1].children[0].children[0].children[0].addEventListener('click', CheckLockInputClone('Lock_1_' + idRow));
	row.children[1].children[0].children[3].children[2].id = 'fractionLockValue_2_' + idRow;
	row.children[1].children[0].children[3].children[2].children[0].children[0].children[0].id = 'Lock_2_' + idRow;
	row.children[1].children[0].children[3].children[2].children[0].children[0].children[0].addEventListener('click', CheckLockInputClone('Lock_2_' + idRow));
	row.children[1].children[0].children[3].children[3].id = 'fractionLockValue_3_' + idRow;
	row.children[1].children[0].children[3].children[3].children[0].children[0].children[0].id = 'Lock_3_' + idRow;
	row.children[1].children[0].children[3].children[3].children[0].children[0].children[0].addEventListener('click', CheckLockInputClone('Lock_3_' + idRow));
	row.children[1].children[0].children[4].id  = 'rows_' + idRow; 
	row.children[1].children[0].children[4].children[0].id = 'mainRow_0' + '_' + idRow;
	row.children[1].children[0].children[4].children[0].children[0].children[0].children[0].children[0].children[0].id = 'photoComponent_' + (idRow-1);
	row.children[1].children[0].children[4].children[0].children[0].children[0].children[0].children[1].id = 'componentNumber_00_' + (idRow-1);
	row.children[1].children[0].children[4].children[0].children[0].children[0].children[0].children[2].id = 'deleteButton_00_' + (idRow-1);
	// 																rowBlock	rowOptionBlock filterBlock scrollRow	
	row.children[1].children[0].children[4].children[0].children[0].children[0].children[1].children[1].children[0].children[1].id = 'addOption_' + (idRow-1);
	row.children[1].children[0].children[4].children[0].children[0].children[0].children[1].children[2].children[0].children[0].children[0].id = 'clsOption_0_' + (idRow-1);
	row.children[1].children[0].children[4].children[0].children[0].children[0].children[1].children[2].children[3].children[1].id = 'photoBlockButton_' + (idRow-1);
	row.children[1].children[0].children[5].children[0].id = 'addButton_' + idRow;
	row.children[1].children[0].children[5].children[0].addEventListener('click', addrowClone(idRow));
	var rowButton = row.children[1].children[0].children[5].children[0];
	customerRequirements_MainBlock.appendChild(row);
	setupPageRow();
	prepareDefaultCloneUnit(idRow);	
	createReqOrProtDiv(0, idRow, false);
	rowButton.click();
	rowButton.click();
	setupRequirementsTableClone(idRow);	
	hideRequirementsAfterAddList();
	
	CalculateListNumber();
	if(document.getElementById('dropdown-content').children[0].lastElementChild.value != currentPage){
		document.getElementById('dropdown-content').children[0].lastElementChild.click();
	}
	else{
		document.getElementById('dropdown-content').children[0].style.display = 'none';
	}
	
	autoPageNumber();

	if(economicType != 'Req'){
		document.getElementById('economicd_Prot').click();
		document.getElementById('economicd_Req').click();
	}	
	if(pageRow.length != 0){
		resetRowValueReq();
	}
	createExplainPage(idRow);
	TranslateReqPage(idRow);
}
	//удаление листа
function removeRowСustomerRequirements(){
	var main = document.getElementById('dropdown-content').children[0];
	if(pageRow.length >0){
		document.getElementById('customerRequirements_' + currentPage).remove();
		document.getElementById('explainPage_' + currentPage).remove();
		document.getElementById('IMGTrash').children[0].children[currentPage-1].remove();
		pageRow.splice(currentPage-1, 1);
		//перезапись списка листов
		CalculateListNumber();
		refreshIDPage();
		/*переписывание айдишников страниц пояснения*/
		explainReqID = 0; 
		for(var i = 1; i < explain_MainBlock.children.length; i++){
			if(explain_MainBlock.children[i].id.split("_")[2] == null){
				explainReqID++;
				explain_MainBlock.children[i].id = "explainPage_" + explainReqID;
				explain_MainBlock.children[i].getElementsByClassName("newsBlock")[0].id = "NewsBlock_" + explainReqID;
				explain_MainBlock.children[i].getElementsByClassName("Messblock")[0].children[1].id = "Message_text_" + explainReqID;
				
				explain_MainBlock.children[i].getElementsByClassName("newsBlock")[0].getElementsByClassName("ql-link")[0].id = "NewPhoto_" + explainReqID;
				explain_MainBlock.children[i].getElementsByClassName("newsBlock")[0].getElementsByTagName("input")[0].id = "inpPhoto_" + explainReqID;
			}
		}
		/*Переписывание объекта картинок*/
		var imagesReqBlock = IMGTrash.children[0];
		for(var i = 1; i <= imagesReqBlock.children.length; i++){
			//Переписываем название блока
			var elementBlock = imagesReqBlock.children[i-1];
			elementBlock.setAttribute("type", "reqPage_" + i);
			//Переписываем внутренние содержимое блока
			var FractionDataBlock = imagesReqBlock.children[i-1].children[0];
			var rowsFractionBlock = imagesReqBlock.children[i-1].children[1];
			
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
				elementBlock.setAttribute("type", "req_" + i + "_row_" + Number(k+1));
				refreshRowsFractionData(elementBlock, i);
			}
		}
		if(main.children.length > 1){
			main.children[1].click();
		}
		else{
			dropdown_ListNumber.textContent = 0;
		}		
	}
	autoPageNumber();
	for(var i = 1; i < explain.children.length; i++){
        explain.children[i].children[0].children[1].children[0].textContent = Translate[0].Title[7][GlobalLang];
    }
}
	//перезапись айди и слушателей листа и сторк в нем(тут еще хз в эту функу пихать или отдельно потом перебирать)
function refreshIDPage(){
	var pages = document.getElementById('customerRequirements_MainBlock');
	for(var i = 1; i < pages.children.length; i++){
		var idRow = i;
		var cloneRow = clearEventListener(pages.children[i]);
		cloneRow.id = 'customerRequirements_' + idRow;
		//  titleBlock
		cloneRow.children[0].children[2].children[0].children[1].id = 'companyName_' + idRow;
		cloneRow.children[0].children[2].children[0].children[1].addEventListener('change', setTitleTable('companyName_' + idRow));
		cloneRow.children[0].children[2].children[1].children[1].id = 'userManagerName_' + idRow;
		cloneRow.children[0].children[2].children[1].children[1].addEventListener('change', setTitleTable('userManagerName_' + idRow));
		cloneRow.children[0].children[2].children[2].children[1].id = 'createDateProtocol_' + idRow;
		cloneRow.children[0].children[2].children[2].children[1].addEventListener('change', setTitleTable('createDateProtocol_' + idRow));
		//  pageContent
		cloneRow.children[1].children[0].children[0].id = 'defaultUnit_' + idRow;
		cloneRow.children[1].children[0].children[0].children[0].children[1].addEventListener('click', requirementsBlockViev(idRow));
		cloneRow.children[1].children[0].children[1].id = 'fraction_' + idRow;
		cloneRow.children[1].children[0].children[1].children[1].id = 'fractionSource_1_' + idRow;
		cloneRow.children[1].children[0].children[1].children[1].children[0].children[0].id = 'Source_1_' + idRow;
		cloneRow.children[1].children[0].children[1].children[2].id = 'fractionSource_2_' + idRow;
		cloneRow.children[1].children[0].children[1].children[2].children[0].children[0].id = 'Source_2_' + idRow;
		cloneRow.children[1].children[0].children[1].children[3].id = 'fractionSource_3_' + idRow;
		cloneRow.children[1].children[0].children[1].children[3].children[0].children[0].id = 'Source_3_' + idRow;
		cloneRow.children[1].children[0].children[2].children[1].id = 'fractionMainValues_1_' + idRow; 
		cloneRow.children[1].children[0].children[2].children[1].children[0].children[0].children[0].id = 'pureInpStart_' + idRow;
		cloneRow.children[1].children[0].children[2].children[1].children[0].children[0].children[1].id = 'pureInpStartFake_' + idRow;
		cloneRow.children[1].children[0].children[2].children[1].children[0].children[0].children[1].addEventListener('change', setFake('pureInpStartFake_' + idRow, 1));
		cloneRow.children[1].children[0].children[2].children[1].children[1].children[0].children[0].id = 'outputStart_' + idRow;
		cloneRow.children[1].children[0].children[2].children[1].children[1].children[0].children[0].addEventListener('click', ShowUpsertDropdownClone('outputStart_' + idRow, idRow));
		cloneRow.children[1].children[0].children[2].children[1].children[1].children[0].children[1].id = 'outputStartButton_' + idRow;
		cloneRow.children[1].children[0].children[2].children[1].children[2].children[0].children[0].id = 'percentStart_' + idRow;
		cloneRow.children[1].children[0].children[2].children[2].id = 'fractionMainValues_2_' + idRow;
		cloneRow.children[1].children[0].children[2].children[2].children[0].children[0].children[0].id = 'pureInpGood_' + idRow;
		cloneRow.children[1].children[0].children[2].children[2].children[0].children[0].children[1].id = 'pureInpGoodFake_' + idRow;
		cloneRow.children[1].children[0].children[2].children[2].children[0].children[0].children[1].addEventListener('change', setFake('pureInpGoodFake_' + idRow, 2));
		cloneRow.children[1].children[0].children[2].children[2].children[1].children[0].children[0].id = 'outputGood_' + idRow;
		cloneRow.children[1].children[0].children[2].children[2].children[1].children[0].children[0].addEventListener('click', ShowUpsertDropdownClone('outputGood_' + idRow, idRow));
		cloneRow.children[1].children[0].children[2].children[2].children[1].children[0].children[1].id = 'outputGoodButton_' + idRow;
		cloneRow.children[1].children[0].children[2].children[2].children[2].children[0].children[0].id = 'percentGood_' + idRow;
		cloneRow.children[1].children[0].children[2].children[2].children[2].children[0].children[0].addEventListener('click', ShowUpsertDropdownClone('percentGood_' + idRow, idRow));
		cloneRow.children[1].children[0].children[2].children[2].children[2].children[1].id = 'percentGoodButton_' + idRow;
		cloneRow.children[1].children[0].children[2].children[3].id = 'fractionMainValues_3_' + idRow;
		cloneRow.children[1].children[0].children[2].children[3].children[0].children[0].children[0].id = 'pureInpTrash_' + idRow;
		cloneRow.children[1].children[0].children[2].children[3].children[0].children[0].children[1].id = 'pureInpTrashFake_' + idRow;
		cloneRow.children[1].children[0].children[2].children[3].children[0].children[0].children[1].addEventListener('change', setFake('pureInpTrashFake_' + idRow, 3));
		cloneRow.children[1].children[0].children[2].children[3].children[1].children[0].children[0].id = 'outputTrash_' + idRow;
		cloneRow.children[1].children[0].children[2].children[3].children[1].children[0].children[0].addEventListener('click', ShowUpsertDropdownClone('outputTrash_' + idRow, idRow));
		cloneRow.children[1].children[0].children[2].children[3].children[1].children[1].id = 'outputTrashButton_' + idRow;
		cloneRow.children[1].children[0].children[2].children[3].children[2].children[0].children[0].id = 'percentTrash_' + idRow;
		cloneRow.children[1].children[0].children[2].children[3].children[2].children[0].children[0].addEventListener('click', ShowUpsertDropdownClone('percentTrash_' + idRow, idRow));
		cloneRow.children[1].children[0].children[2].children[3].children[2].children[1].id = 'percentTrashButton_' + idRow;
		cloneRow.children[1].children[0].children[3].id = 'lockBlock_' + idRow;
		cloneRow.children[1].children[0].children[3].children[1].id = 'fractionLockValue_1_' + idRow;
		cloneRow.children[1].children[0].children[3].children[1].children[0].children[0].children[0].id = 'Lock_1_' + idRow;
		cloneRow.children[1].children[0].children[3].children[1].children[0].children[0].children[0].addEventListener('click', CheckLockInputClone('Lock_1_' + idRow));
		cloneRow.children[1].children[0].children[3].children[2].id = 'fractionLockValue_2_' + idRow;
		cloneRow.children[1].children[0].children[3].children[2].children[0].children[0].children[0].id = 'Lock_2_' + idRow;
		cloneRow.children[1].children[0].children[3].children[2].children[0].children[0].children[0].addEventListener('click', CheckLockInputClone('Lock_2_' + idRow));
		cloneRow.children[1].children[0].children[3].children[3].id = 'fractionLockValue_3_' + idRow;
		cloneRow.children[1].children[0].children[3].children[3].children[0].children[0].children[0].id = 'Lock_3_' + idRow;
		cloneRow.children[1].children[0].children[3].children[3].children[0].children[0].children[0].addEventListener('click', CheckLockInputClone('Lock_3_' + idRow));
		cloneRow.children[1].children[0].children[4].id  = 'rows_' + idRow; 		
		cloneRow.children[1].children[0].children[4].children[0].id = 'mainRow_0' + '_' + idRow;
		cloneRow.children[1].children[0].children[4].children[0].children[0].children[0].children[0].children[0].children[0].id = 'photoComponent_' + (idRow-1);
		cloneRow.children[1].children[0].children[4].children[0].children[0].children[0].children[0].children[1].id = 'componentNumber_00_' + (idRow-1);
		cloneRow.children[1].children[0].children[4].children[0].children[0].children[0].children[0].children[2].id = 'deleteButton_00_' + (idRow-1);
		// 																rowBlock	rowOptionBlock filterBlock scrollRow	
		cloneRow.children[1].children[0].children[4].children[0].children[0].children[0].children[1].children[1].children[0].children[1].id = 'addOption_' + (idRow-1);
		cloneRow.children[1].children[0].children[4].children[0].children[0].children[0].children[1].children[2].children[0].children[0].children[0].id = 'clsOption_0_' + (idRow-1);
		cloneRow.children[1].children[0].children[4].children[0].children[0].children[0].children[1].children[2].children[3].children[1].id = 'photoBlockButton_' + (idRow-1);
		cloneRow.children[1].children[0].children[5].children[0].id = 'addButton_' + idRow;
		cloneRow.children[1].children[0].children[5].children[0].addEventListener('click', addrowClone(idRow));
		var list = cloneRow.children[1].children[0].children[4];
		for(var k = 0; k < list.children.length; k++){
			list.children[k].id = 'mainRow_' + k + '_' + idRow;
		}
		setupRequirementsTableClone(idRow);	
		refreshIDClone(idRow);
	}
}
//создание клона строки
function addrowClone(pageID){
	return function e(){
		HideAllDropdownClone(pageID);
		var mainRow = document.getElementById('mainRow_0_' + (pageID));
		var row = mainRow.cloneNode(true);
		var rows = document.getElementById('rows_' + pageID);
		var idRow = Number(rows.children.length);
		row.style.display = 'flex';
		row.id = 'mainRow_' + idRow + '_' + pageID;
		row.children[0].children[0].children[0].id = 'rowNumberId_' + idRow + '_' + pageID;
		row.children[0].children[0].children[0].addEventListener('mouseenter', ShowDeleteButton('rowNumberId_' + idRow + '_' + pageID));
		row.children[0].children[0].children[0].addEventListener('mouseleave', HideDeleteButton('rowNumberId_' + idRow + '_' + pageID));
		row.children[0].children[0].children[0].children[0].children[0].id = 'photoComponent_' + idRow + '_' + pageID;
		row.children[0].children[0].children[0].children[1].id = 'componentNumber_00_' + idRow + '_' + pageID;
		row.children[0].children[0].children[0].children[1].textContent = idRow;
		row.children[0].children[0].children[0].children[2].id = 'deleteButton_00_' + idRow + '_' + pageID;
		row.children[0].children[0].children[0].children[2].addEventListener('click', removeRowClone('deleteButton_00_' + idRow + '_' + pageID));
		// classifier
		row.children[0].children[0].children[1].id = 'classifier_' + idRow + '_' + pageID;
		row.children[0].children[0].children[1].children[0].id = 'clsInputResultBlock_' + idRow + '_' + pageID;
		row.children[0].children[0].children[1].children[0].children[0].id = 'classifierInpurResult_' + idRow + '_' + pageID;
		row.children[0].children[0].children[1].children[0].children[1].children[0].id = 'controlButtonIdHide_' + idRow + '_' + pageID;
		row.children[0].children[0].children[1].children[0].children[1].children[0].addEventListener('click', HideDropdownClone('controlButtonIdHide_' + idRow + '_' + pageID));
		row.children[0].children[0].children[1].children[0].children[1].children[0].addEventListener('click', refreshMassof1000Clone(idRow, pageID));
		row.children[0].children[0].children[1].children[1].children[0].children[0].id = 'clsInput_test_' + idRow + '_' + pageID;
		row.children[0].children[0].children[1].children[1].children[0].children[0].addEventListener('focus', ShowDropdownClone(idRow, pageID));
		row.children[0].children[0].children[1].children[1].children[0].children[0].addEventListener('input', StartInputListenersClone(idRow, pageID));
		row.children[0].children[0].children[1].children[1].children[0].children[1].id = 'addOption_' + idRow + '_' + pageID;
		row.children[0].children[0].children[1].children[1].children[0].children[1].addEventListener('click', searchidClone(idRow, pageID));
		row.children[0].children[0].children[1].children[2].id = 'clsDropdown_' + idRow + '_' + pageID;
		row.children[0].children[0].children[1].children[2].children[0].children[0].children[0].id = 'clsOption_0_' + idRow + '_' + pageID;
		row.children[0].children[0].children[1].children[2].children[1].id = 'infoTitle_' + idRow + '_' + pageID;
		row.children[0].children[0].children[1].children[2].children[1].children[1].id = 'infoBlockButton_' + idRow + '_' + pageID;
		row.children[0].children[0].children[1].children[2].children[1].children[1].addEventListener('click', infoBlockClone(idRow, pageID));
		row.children[0].children[0].children[1].children[2].children[2].id = 'infoBlock_' + idRow + '_' + pageID;
		row.children[0].children[0].children[1].children[2].children[3].id = 'photoTitle_' + idRow + '_' + pageID;
		row.children[0].children[0].children[1].children[2].children[3].children[1].id = 'photoBlockButton_' + idRow + '_' + pageID;
		row.children[0].children[0].children[1].children[2].children[3].children[1].addEventListener('click', photoBlockClone(idRow, pageID));
		row.children[0].children[0].children[1].children[2].children[4].id = 'photoBlock_' + idRow + '_' + pageID;
		// valueBlock	
		row.children[0].children[0].children[2].id = 'valueBlock_1_' + idRow + '_' + pageID;
		row.children[0].children[0].children[2].children[0].id = 'massInputBlock_1_' + idRow + '_' + pageID;
		row.children[0].children[0].children[2].children[0].children[0].children[0].addEventListener('change', changeMassValue('massDropdown_1_' + idRow + '_' + pageID, 'massInputBlock_1_' + idRow + '_' + pageID));
		row.children[0].children[0].children[2].children[0].children[4].id = 'controlButtonId_1_' + idRow + '_' + pageID;
		row.children[0].children[0].children[2].children[0].children[4].addEventListener('click', HideMassDropdownClone('controlButtonId_1_' + idRow + '_' + pageID));
		row.children[0].children[0].children[2].children[1].id = 'massInputResultBlock_1_' + idRow + '_' + pageID;
		row.children[0].children[0].children[2].children[1].children[0].id = 'massInput_1_' + idRow + '_' + pageID;
		row.children[0].children[0].children[2].children[1].children[0].addEventListener('click', ShowMassDropdownClone('massInput_1_' + idRow + '_' + pageID));
		row.children[0].children[0].children[2].children[2].id = 'moreTitle_1_' + idRow + '_' + pageID;
		row.children[0].children[0].children[2].children[2].children[1].id = 'moreBlockButton_' + idRow + '_' + pageID;
		row.children[0].children[0].children[2].children[2].children[1].addEventListener('click', moreBlock('moreBlock_' + idRow + '_' + pageID,'moreBlockButton_' + idRow + '_' + pageID , 'moreTitle_1_' + idRow + '_' + pageID));
		row.children[0].children[0].children[2].children[3].id = 'moreBlock_' + idRow + '_' + pageID;
		row.children[0].children[0].children[2].children[3].children[0].id = 'massDropdown_1_' + idRow + '_' + pageID;
		row.children[0].children[0].children[2].children[0].children[1].children[0].addEventListener("click", switchToggleClone);
		row.children[0].children[0].children[2].children[0].children[1].children[0].addEventListener("click",checkotherToggle(idRow, pageID));
		row.children[0].children[0].children[2].children[0].children[2].children[0].addEventListener("click", switchToggleClone);
		row.children[0].children[0].children[2].children[0].children[3].children[0].addEventListener("click", switchToggleClone);
		// valueBlock_2	
		row.children[0].children[0].children[3].id = 'valueBlock_2_' + idRow + '_' + pageID;
		row.children[0].children[0].children[3].children[0].id = 'massInputBlock_2_' + idRow + '_' + pageID;
		row.children[0].children[0].children[3].children[0].children[0].children[0].addEventListener('change', changeMassValue('massDropdown_2_' + idRow + '_' + pageID, 'massInputBlock_2_' + idRow + '_' + pageID));
		row.children[0].children[0].children[3].children[0].children[4].id = 'controlButtonId_2_' + idRow + '_' + pageID;
		row.children[0].children[0].children[3].children[0].children[4].addEventListener('click', HideMassDropdownClone('controlButtonId_2_' + idRow + '_' + pageID));
		row.children[0].children[0].children[3].children[1].id = 'massInputResultBlock_2_' + idRow + '_' + pageID;
		row.children[0].children[0].children[3].children[1].children[0].id = 'massInput_2_' + idRow + '_' + pageID;
		row.children[0].children[0].children[3].children[1].children[0].addEventListener('click', ShowMassDropdownClone('massInput_2_' + idRow + '_' + pageID));
		row.children[0].children[0].children[3].children[2].id = 'moreTitle_2_' + idRow + '_' + pageID;
		row.children[0].children[0].children[3].children[2].children[1].id = 'moreBlockButton_2_' + idRow + '_' + pageID;
		row.children[0].children[0].children[3].children[2].children[1].addEventListener('click', moreBlock('moreBlock_2_' + idRow + '_' + pageID,'moreBlockButton_2_' + idRow + '_' + pageID, 'moreTitle_2_' + idRow + '_' + pageID));
		row.children[0].children[0].children[3].children[3].id = 'moreBlock_2_' + idRow + '_' + pageID;
		row.children[0].children[0].children[3].children[3].children[0].id = 'massDropdown_2_' + idRow + '_' + pageID;
		row.children[0].children[0].children[3].children[0].children[1].children[0].addEventListener("click", switchToggleClone);
		row.children[0].children[0].children[3].children[0].children[1].children[0].addEventListener("click",checkotherToggle(idRow, pageID));
		row.children[0].children[0].children[3].children[0].children[2].children[0].addEventListener("click", switchToggleClone);
		row.children[0].children[0].children[3].children[0].children[3].children[0].addEventListener("click", switchToggleClone);
		// valueBlock_3	
		row.children[0].children[0].children[4].id = 'valueBlock_3_' + idRow + '_' + pageID;
		row.children[0].children[0].children[4].children[0].id = 'massInputBlock_3_' + idRow + '_' + pageID;
		row.children[0].children[0].children[4].children[0].children[0].children[0].addEventListener('change', changeMassValue('massDropdown_3_' + idRow + '_' + pageID, 'massInputBlock_3_' + idRow + '_' + pageID));
		row.children[0].children[0].children[4].children[0].children[4].id = 'controlButtonId_3_' + idRow + '_' + pageID;
		row.children[0].children[0].children[4].children[0].children[4].addEventListener('click', HideMassDropdownClone('controlButtonId_3_' + idRow + '_' + pageID));
		row.children[0].children[0].children[4].children[1].id = 'massInputResultBlock_3_' + idRow + '_' + pageID;
		row.children[0].children[0].children[4].children[1].children[0].id = 'massInput_3_' + idRow + '_' + pageID;
		row.children[0].children[0].children[4].children[1].children[0].addEventListener('click', ShowMassDropdownClone('massInput_3_' + idRow + '_' + pageID));
		row.children[0].children[0].children[4].children[2].id = 'moreTitle_3_' + idRow + '_' + pageID;
		row.children[0].children[0].children[4].children[2].children[1].id = 'moreBlockButton_3_' + idRow + '_' + pageID;
		row.children[0].children[0].children[4].children[2].children[1].addEventListener('click', moreBlock('moreBlock_3_' + idRow + '_' + pageID,'moreBlockButton_3_' + idRow + '_' + pageID, 'moreTitle_3_' + idRow + '_' + pageID));
		row.children[0].children[0].children[4].children[3].id = 'moreBlock_3_' + idRow + '_' + pageID;
		row.children[0].children[0].children[4].children[3].children[0].id = 'massDropdown_3_' + idRow + '_' + pageID;
		row.children[0].children[0].children[4].children[0].children[1].children[0].addEventListener("click", switchToggleClone);
		row.children[0].children[0].children[4].children[0].children[1].children[0].addEventListener("click",checkotherToggle(idRow, pageID));
		row.children[0].children[0].children[4].children[0].children[2].children[0].addEventListener("click", switchToggleClone);
		row.children[0].children[0].children[4].children[0].children[3].children[0].addEventListener("click", switchToggleClone);
		rows.appendChild(row);
		//Изначальное значение строк
		generateComponentRow(pageID-1);
		mathfComponentFunctionClone('massDropdown_1_' + idRow + '_' + pageID);
		mathfComponentFunctionClone('massDropdown_2_' + idRow + '_' + pageID);
		mathfComponentFunctionClone('massDropdown_3_' + idRow + '_' + pageID);
		pageRow[pageID-1].componentRow[idRow-1].component_name = document.getElementById("clsInput_test_"+idRow + '_' + pageID).placeholder;
		switch(String(idRow)){
			case'1':
				document.getElementById("clsInput_test_"+idRow + '_' + pageID).placeholder = 'Продукт';
				pageRow[pageID-1].componentRow[idRow-1].component_name = document.getElementById("clsInput_test_"+idRow + '_' + pageID).placeholder;
				break;
			case'2':
				document.getElementById("clsInput_test_"+idRow + '_' + pageID).placeholder = 'Засоритель';
				pageRow[pageID-1].componentRow[idRow-1].component_name = document.getElementById("clsInput_test_"+idRow + '_' + pageID).placeholder;
				document.getElementById('massInputBlock_1_2' + '_' + pageID).children[3].children[0].click();
				document.getElementById('massInputBlock_2_2' + '_' + pageID).children[3].children[0].click();
				document.getElementById('massInputBlock_3_2' + '_' + pageID).children[3].children[0].click();
				break;
			default:
				document.getElementById('massInputBlock_1_'+idRow + '_' + pageID).children[3].children[0].click();
				document.getElementById('massInputBlock_2_'+idRow + '_' + pageID).children[3].children[0].click();
				document.getElementById('massInputBlock_3_'+idRow + '_' + pageID).children[3].children[0].click();
				break;
		}	
		switchDropdownMassClone('massDropdown_1_' + idRow + '_' + pageID);
		updateRemovedPercentClone(pageID);
		setupPhotosRow(pageID-1);
		addRowDiv(0,pageID, idRow, false);
		changeRowReqLang(pageID, idRow);
	}
	
}
function removeRowClone(remove){
	return function e(){
		var pageID = Number(remove.split('_')[3]);
		var elementRemove = document.getElementById(remove).parentNode.parentNode.parentNode.parentNode.id;
		document.getElementById(elementRemove).remove();
		
		var idComponentRow = Number(elementRemove.split("_")[1]-1);
		pageRow[pageID-1].componentRow.splice(idComponentRow, 1);
		pageRow[pageID-1].photoContainer.rowsFraction.splice(idComponentRow, 1);
		document.getElementById('IMGTrash').children[0].children[currentPage-1].children[1].children[idComponentRow].remove();	
		refreshIDTrashRow(pageID, idComponentRow);
		refreshIDClone(pageID);
		updateRemovedPercentClone(pageID);
	}
}
function refreshIDClone(pageID){
	var rows = document.getElementById('rows_' + pageID);
	for(var i = 1; i < rows.children.length; i++){
		var idRow = i;
		var cloneRow = clearEventListener(rows.children[i]);
		
		cloneRow.id = 'mainRow_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[0].id = 'rowNumberId_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[0].addEventListener('mouseenter', ShowDeleteButton('rowNumberId_' + idRow + '_' + pageID));
		cloneRow.children[0].children[0].children[0].addEventListener('mouseleave', HideDeleteButton('rowNumberId_' + idRow + '_' + pageID));
		cloneRow.children[0].children[0].children[0].children[0].children[0].id = 'photoComponent_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[0].children[1].id = 'componentNumber_00_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[0].children[1].textContent = idRow;
		cloneRow.children[0].children[0].children[0].children[2].id = 'deleteButton_00_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[0].children[2].addEventListener('click', removeRowClone('deleteButton_00_' + idRow + '_' + pageID));
		// classifier
		cloneRow.children[0].children[0].children[1].id = 'classifier_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[1].children[0].id = 'clsInputResultBlock_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[1].children[0].children[0].id = 'classifierInpurResult_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[1].children[0].children[1].children[0].id = 'controlButtonIdHide_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[1].children[0].children[1].children[0].addEventListener('click', HideDropdownClone('controlButtonIdHide_' + idRow + '_' + pageID));
		cloneRow.children[0].children[0].children[1].children[0].children[1].children[0].addEventListener('click', refreshMassof1000Clone(idRow, pageID));
		cloneRow.children[0].children[0].children[1].children[1].children[0].children[0].id = 'clsInput_test_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[1].children[1].children[0].children[0].addEventListener('focus', ShowDropdownClone(idRow, pageID));
		cloneRow.children[0].children[0].children[1].children[1].children[0].children[0].addEventListener('input', StartInputListenersClone(idRow, pageID));
		cloneRow.children[0].children[0].children[1].children[1].children[0].children[1].id = 'addOption_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[1].children[1].children[0].children[1].addEventListener('click', searchidClone(idRow, pageID));
		cloneRow.children[0].children[0].children[1].children[2].id = 'clsDropdown_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[1].children[2].children[0].children[0].children[0].id = 'clsOption_0_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[1].children[2].children[1].id = 'infoTitle_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[1].children[2].children[1].children[1].id = 'infoBlockButton_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[1].children[2].children[1].children[1].addEventListener('click', infoBlockClone(idRow, pageID));
		cloneRow.children[0].children[0].children[1].children[2].children[2].id = 'infoBlock_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[1].children[2].children[3].id = 'photoTitle_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[1].children[2].children[3].children[1].id = 'photoBlockButton_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[1].children[2].children[3].children[1].addEventListener('click', photoBlockClone(idRow, pageID));
		cloneRow.children[0].children[0].children[1].children[2].children[4].id = 'photoBlock_' + idRow + '_' + pageID;
		// valueBlock	
		cloneRow.children[0].children[0].children[2].id = 'valueBlock_1_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[2].children[0].id = 'massInputBlock_1_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[2].children[0].children[0].children[0].addEventListener('change', changeMassValue('massDropdown_1_' + idRow + '_' + pageID, 'massInputBlock_1_' + idRow + '_' + pageID));
		cloneRow.children[0].children[0].children[2].children[0].children[4].id = 'controlButtonId_1_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[2].children[0].children[4].addEventListener('click', HideMassDropdownClone('controlButtonId_1_' + idRow + '_' + pageID));
		cloneRow.children[0].children[0].children[2].children[1].id = 'massInputResultBlock_1_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[2].children[1].children[0].id = 'massInput_1_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[2].children[1].children[0].addEventListener('click', ShowMassDropdownClone('massInput_1_' + idRow + '_' + pageID));
		cloneRow.children[0].children[0].children[2].children[2].id = 'moreTitle_1_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[2].children[2].children[1].id = 'moreBlockButton_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[2].children[2].children[1].addEventListener('click', moreBlock('moreBlock_' + idRow + '_' + pageID,'moreBlockButton_' + idRow + '_' + pageID , 'moreTitle_1_' + idRow + '_' + pageID));
		cloneRow.children[0].children[0].children[2].children[3].id = 'moreBlock_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[2].children[3].children[0].id = 'massDropdown_1_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[2].children[0].children[1].children[0].addEventListener("click", switchToggleClone);
		cloneRow.children[0].children[0].children[2].children[0].children[1].children[0].addEventListener("click",checkotherToggle(idRow, pageID));
		cloneRow.children[0].children[0].children[2].children[0].children[2].children[0].addEventListener("click", switchToggleClone);
		cloneRow.children[0].children[0].children[2].children[0].children[3].children[0].addEventListener("click", switchToggleClone);
		mathfComponentFunctionClone('massDropdown_1_' + idRow + '_' + pageID);
		// valueBlock_2	
		cloneRow.children[0].children[0].children[3].id = 'valueBlock_2_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[3].children[0].id = 'massInputBlock_2_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[3].children[0].children[0].children[0].addEventListener('change', changeMassValue('massDropdown_2_' + idRow + '_' + pageID, 'massInputBlock_2_' + idRow + '_' + pageID));
		cloneRow.children[0].children[0].children[3].children[0].children[4].id = 'controlButtonId_2_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[3].children[0].children[4].addEventListener('click', HideMassDropdownClone('controlButtonId_2_' + idRow + '_' + pageID));
		cloneRow.children[0].children[0].children[3].children[1].id = 'massInputResultBlock_2_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[3].children[1].children[0].id = 'massInput_2_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[3].children[1].children[0].addEventListener('click', ShowMassDropdownClone('massInput_2_' + idRow + '_' + pageID));
		cloneRow.children[0].children[0].children[3].children[2].id = 'moreTitle_2_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[3].children[2].children[1].id = 'moreBlockButton_2_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[3].children[2].children[1].addEventListener('click', moreBlock('moreBlock_2_' + idRow + '_' + pageID,'moreBlockButton_2_' + idRow + '_' + pageID, 'moreTitle_2_' + idRow + '_' + pageID));
		cloneRow.children[0].children[0].children[3].children[3].id = 'moreBlock_2_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[3].children[3].children[0].id = 'massDropdown_2_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[3].children[0].children[1].children[0].addEventListener("click", switchToggleClone);
		cloneRow.children[0].children[0].children[3].children[0].children[1].children[0].addEventListener("click",checkotherToggle(idRow, pageID));
		cloneRow.children[0].children[0].children[3].children[0].children[2].children[0].addEventListener("click", switchToggleClone);
		cloneRow.children[0].children[0].children[3].children[0].children[3].children[0].addEventListener("click", switchToggleClone);
		mathfComponentFunctionClone('massDropdown_2_' + idRow + '_' + pageID);
		// valueBlock_3	
		cloneRow.children[0].children[0].children[4].id = 'valueBlock_3_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[4].children[0].id = 'massInputBlock_3_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[4].children[0].children[0].children[0].addEventListener('change', changeMassValue('massDropdown_3_' + idRow + '_' + pageID, 'massInputBlock_3_' + idRow + '_' + pageID));
		cloneRow.children[0].children[0].children[4].children[0].children[4].id = 'controlButtonId_3_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[4].children[0].children[4].addEventListener('click', HideMassDropdownClone('controlButtonId_3_' + idRow + '_' + pageID));
		cloneRow.children[0].children[0].children[4].children[1].id = 'massInputResultBlock_3_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[4].children[1].children[0].id = 'massInput_3_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[4].children[1].children[0].addEventListener('click', ShowMassDropdownClone('massInput_3_' + idRow + '_' + pageID));
		cloneRow.children[0].children[0].children[4].children[2].id = 'moreTitle_3_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[4].children[2].children[1].id = 'moreBlockButton_3_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[4].children[2].children[1].addEventListener('click', moreBlock('moreBlock_3_' + idRow + '_' + pageID,'moreBlockButton_3_' + idRow + '_' + pageID, 'moreTitle_3_' + idRow + '_' + pageID));
		cloneRow.children[0].children[0].children[4].children[3].id = 'moreBlock_3_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[4].children[3].children[0].id = 'massDropdown_3_' + idRow + '_' + pageID;
		cloneRow.children[0].children[0].children[4].children[0].children[1].children[0].addEventListener("click", switchToggleClone);
		cloneRow.children[0].children[0].children[4].children[0].children[1].children[0].addEventListener("click",checkotherToggle(idRow, pageID));
		cloneRow.children[0].children[0].children[4].children[0].children[2].children[0].addEventListener("click", switchToggleClone);
		cloneRow.children[0].children[0].children[4].children[0].children[3].children[0].addEventListener("click", switchToggleClone);
		mathfComponentFunctionClone('massDropdown_3_' + idRow + '_' + pageID);
		switchDropdownMassClone('massDropdown_1_' + idRow + '_' + pageID);
		switch(String(idRow)){
			case'1':
				var clsInput_test1 = document.getElementById('clsInput_test_1_' + pageID);
				clsInput_test1.placeholder = 'Продукт';
				break;
			case'2':
				var clsInput_test2 = document.getElementById('clsInput_test_2_' + pageID);
				clsInput_test2.placeholder = 'Засоритель';
				break;
		}	
		refreshListenersClone(idRow, pageID);		
	}
}
function refreshListenersClone(idRow, pageID){
	var rows = document.getElementById('rows_' + pageID);
	for(var i = 1; i < rows.children.length;i++){
		var classifierInpurResult = document.getElementById('classifierInpurResult_'+ i + '_' + pageID);
		if(classifierInpurResult != null && classifierInpurResult.children.length != 0 ){
			for(var k = 0; k < classifierInpurResult.children.length; k++){
				classifierInpurResult.children[k].addEventListener("click", function(){
					this.remove();
					StartInputClone(idRow, pageID);
				});
			}
		}
		
	}
}
function StartInputClone(idRow, pageID){
	var inputBlock = document.getElementById("clsInput_test_" + idRow + '_' + pageID);
	var clsDropdown = document.getElementById("clsDropdown_" + idRow + '_' + pageID);
	DoropdownOptionClearClone(idRow, pageID);
	if(inputBlock.value.length == 0){
		DropdownOptionDefaultClone(idRow, pageID);
	}
	else{
		DropdownSearchClone(idRow, pageID);
	}	
	clsDropdown.style.display="flex";
}
function DoropdownOptionClearClone(idRow, pageID){
	var clsDropdown = document.getElementById("clsDropdown_" + idRow + '_' + pageID);
	var dropdownOptions = clsDropdown.children[0];
	//Стартовая отчиска от лишних элементов
	for(var i = dropdownOptions.children.length - 1; i > 0; i--){
		dropdownOptions.children[i].remove();
	}
}
function DropdownOptionDefaultClone(idRow, pageID){
	var clsDropdown = document.getElementById("clsDropdown_" + idRow + '_' + pageID);
	var dropdownOptions =  clsDropdown.children[0];
	var dropdownOptionClone = clsDropdown.children[0].children[0];
	var classifierInpurResult = document.getElementById("classifierInpurResult_" + idRow + '_' + pageID);
	
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
							
							option.children[0].addEventListener("click", function(){addResultOptionClone(this.id, idRow, pageID)});
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
				
				option.children[0].addEventListener("click", function(){addResultOptionClone(this.id, idRow, pageID)});
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
						
						option.children[0].addEventListener("click", function(){addResultOptionClone(this.id, idRow, pageID)});
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
						
						option.children[0].addEventListener("click", function(){addResultOptionClone(this.id, idRow, pageID)});
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
						
						option.children[0].addEventListener("click", function(){addResultOptionClone(this.id, idRow, pageID)});
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
				
				option.children[0].addEventListener("click", function(){addResultOptionClone(this.id, idRow, pageID)});
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
				
				option.children[0].addEventListener("click", function(){addResultOptionClone(this.id, idRow, pageID)});
			}
			break;
		}
	}

}
function DropdownSearchClone(idRow, pageID){
	var inputBlock = document.getElementById('clsInput_test_' + idRow + '_' + pageID);
	var dropdownBlock = document.getElementById('clsDropdown_' + idRow + '_' + pageID);
	var classifierInpurResultRow = document.getElementById('classifierInpurResult_' + idRow + '_' + pageID);
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
					
					option.children[0].addEventListener("click", function(){addResultOptionClone(this.id, idRow, pageID)});
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
						
						option.children[0].addEventListener("click", function(){addResultOptionClone(this.id, idRow, pageID)});
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
function addResultOptionClone(elenentid, idRow, pageID){
	var elementid = document.getElementById(elenentid);
	var inputBlock = document.getElementById("clsInput_test_" + idRow + '_' + pageID);
	var main = inputBlock.parentNode.parentNode.parentNode;
	var classifierInpurResultRow = main.children[0].children[0];
	var option = elementid;
	var object = document.createElement("div");
	object.classList.add("wordElement");
	object.id = "result_" + option.id;
	object.textContent = option.value;
	object.addEventListener("click", function(){
		if(elementid.id.split("_")[1] = "product"){
			removeProductInfoClone(idRow, pageID)
		}
		this.remove();
		StartInputClone(idRow, pageID);
	});
	classifierInpurResultRow.appendChild(object);
	sortResultBlockClone(idRow, pageID);
	
	if(elementid.getAttribute("name") == "product"){
		addProductInfoClone(elementid, idRow, pageID);
	}
	
	document.getElementById("clsInput_test_" + idRow + '_' + pageID).focus();
	document.getElementById("clsInput_test_" + idRow + '_' + pageID).value="";
}
function removeProductInfoClone(idRow, pageID){
	var inputBlock = document.getElementById('clsInput_test_' + idRow + '_' + pageID);
	var main = inputBlock.parentNode.parentNode.parentNode;
	var infoTitle = main.children[2].children[1].id;
	var infoBlock = main.children[2].children[2].id;
	document.getElementById(infoTitle).style.display = "none";
	for(var i = document.getElementById(infoBlock).children.length - 1; i > 0; i--){
		document.getElementById(infoBlock).children[i].remove();
	}
}
function addProductInfoClone(product_id, idRow, pageID){
	var infoBlockElement = document.getElementById("infoBlock_" + idRow + '_' + pageID);
	var cloneOptionInfo = infoBlockElement.children[0].cloneNode(true);
	var infoTitle = document.getElementById("infoTitle_" + idRow + '_' + pageID);
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
function setupRequirementsTableClone(pageID){
	//Айдишники на странице выделенны явно
	var pureInpStart = document.getElementById('pureInpStart_' + pageID);	
	var outputStart = document.getElementById('outputStart_' + pageID);
	var percentStart = document.getElementById('percentStart_' + pageID);
	var pureInpGood = document.getElementById('pureInpGood_' + pageID);
	var outputGood = document.getElementById('outputGood_' + pageID);
	var percentGood = document.getElementById('percentGood_' + pageID);
	var pureInpTrash = document.getElementById('pureInpTrash_' + pageID);
	var outputTrash = document.getElementById('outputTrash_' + pageID);
	var percentTrash = document.getElementById('percentTrash_' + pageID);
	
	pureInpStart.value = Number(pageRow[pageID-1].requirementsTable.mainFractionData.purity).toFixed(3);
	outputStart.value = Number(pageRow[pageID-1].requirementsTable.mainFractionData.mass).toFixed(3);
	percentStart.value = Number(pageRow[pageID-1].requirementsTable.mainFractionData.percent_exit).toFixed(2);	
	pureInpGood.value = Number(pageRow[pageID-1].requirementsTable.suitableFraction.purity).toFixed(3);
	outputGood.value = Number(pageRow[pageID-1].requirementsTable.suitableFraction.mass).toFixed(3);
	percentGood.value = Number(pageRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2);	
	pureInpTrash.value = Number(pageRow[pageID-1].requirementsTable.weedFraction.purity).toFixed(3);
	outputTrash.value = Number(pageRow[pageID-1].requirementsTable.weedFraction.mass).toFixed(3);
	percentTrash.value = Number(pageRow[pageID-1].requirementsTable.weedFraction.percent_exit).toFixed(2);
	//Привязка функций

	outputStart.addEventListener("change",function (){requirementsMassUpdateClone(pageID)});
	outputGood.addEventListener("change",function (){requirementsMassUpdateClone(pageID)});
	outputTrash.addEventListener("change",function (){requirementsMassUpdateClone(pageID)});
	
	percentGood.addEventListener("change",function (){requirementsPercentUpdateClone(pageID)});
	percentTrash.addEventListener("change",function (){requirementsPercentUpdateClone(pageID)});
	
	outputStart.addEventListener("change",function (){updateRemovedPercentClone(pageID)});
	outputGood.addEventListener("change",function (){updateRemovedPercentClone(pageID)});
	outputTrash.addEventListener("change",function (){updateRemovedPercentClone(pageID)});
	
	percentGood.addEventListener("change",function (){updateRemovedPercentClone(pageID)});
	percentTrash.addEventListener("change",function (){updateRemovedPercentClone(pageID)});
	
	outputStart.addEventListener("change",function (){updateDataClone(pageID)});
	outputGood.addEventListener("change",function (){updateDataClone(pageID)});
	outputTrash.addEventListener("change",function (){updateDataClone(pageID)});
	
	percentGood.addEventListener("change",function (){updateDataClone(pageID)});
	percentTrash.addEventListener("change",function (){updateDataClone(pageID)});
	
	//Дефолтное обновление масс
	requirementsMassUpdateClone(pageID);

	//Вызов привязки слушателей для страницы экономического обоснования economic_model.js	
	setupOperationGraph();
}
function requirementsMassUpdateClone(pageID){
	var sustamentID = pageRow[pageID-1].Sustatment.ColumnState.indexOf("active");
	var outputStart = document.getElementById('outputStart_' + pageID);
	var outputGood = document.getElementById('outputGood_' + pageID);
	var percentGood = document.getElementById('percentGood_' + pageID);
	var outputTrash = document.getElementById('outputTrash_' + pageID);
	var percentTrash = document.getElementById('percentTrash_' + pageID);

	switch(sustamentID){
		case 0:
			outputStart.value = outputStart.value < 0 ? Number(pageRow[pageID-1].requirementsTable.mainFractionData.mass).toFixed(3) : Number(outputStart.value).toFixed(3);
			pageRow[pageID-1].requirementsTable.mainFractionData.mass = Number(outputStart.value);			
			pageRow[pageID-1].requirementsTable.suitableFraction.mass = pageRow[pageID-1].requirementsTable.mainFractionData.mass/100 * pageRow[pageID-1].requirementsTable.suitableFraction.percent_exit;
			pageRow[pageID-1].requirementsTable.weedFraction.mass = pageRow[pageID-1].requirementsTable.mainFractionData.mass/100 * pageRow[pageID-1].requirementsTable.weedFraction.percent_exit;
			
			outputGood.value = Number(pageRow[pageID-1].requirementsTable.suitableFraction.mass).toFixed(3);
			outputTrash.value = Number(pageRow[pageID-1].requirementsTable.weedFraction.mass).toFixed(3);
			percentGood.value = Number(pageRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2);
			percentTrash.value = Number(pageRow[pageID-1].requirementsTable.weedFraction.percent_exit).toFixed(2);
			break;
		case 1:
			outputGood.value = outputGood.value < 0 ? Number(pageRow[pageID-1].requirementsTable.suitableFraction.mass).toFixed(3) : Number(outputGood.value).toFixed(3);
			pageRow[pageID-1].requirementsTable.suitableFraction.mass = Number(outputGood.value);
			//Проверка максимального выхода
			checkSuitableFractionExit();
			if(pageRow[pageID-1].Sustatment.ColumnState[0] == "unlock"){
				pageRow[pageID-1].requirementsTable.mainFractionData.mass += Number(pageRow[pageID-1].requirementsTable.suitableFraction.mass - pageRow[pageID-1].requirementsTable.mainFractionData.mass + pageRow[pageID-1].requirementsTable.weedFraction.mass);
				outputStart.value = Number(pageRow[pageID-1].requirementsTable.mainFractionData.mass).toFixed(3);
				
				pageRow[pageID-1].requirementsTable.suitableFraction.percent_exit = Number(pageRow[pageID-1].requirementsTable.mainFractionData.mass) > 0 ? Number(pageRow[pageID-1].requirementsTable.suitableFraction.mass /pageRow[pageID-1].requirementsTable.mainFractionData.mass * 100).toFixed(2) : 0;
				pageRow[pageID-1].requirementsTable.weedFraction.percent_exit = Number(pageRow[pageID-1].requirementsTable.mainFractionData.mass) > 0 ? Number(pageRow[pageID-1].requirementsTable.mainFractionData.percent_exit - pageRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2) : 0;

				outputGood.value = Number(pageRow[pageID-1].requirementsTable.suitableFraction.mass).toFixed(3);
				outputTrash.value = Number(pageRow[pageID-1].requirementsTable.weedFraction.mass).toFixed(3);
				percentGood.value = Number(pageRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2);
				percentTrash.value = Number(pageRow[pageID-1].requirementsTable.weedFraction.percent_exit).toFixed(2);
			} 
			else{
				pageRow[pageID-1].requirementsTable.weedFraction.mass = Number(pageRow[pageID-1].requirementsTable.mainFractionData.mass - pageRow[pageID-1].requirementsTable.suitableFraction.mass);
				if(pageRow[pageID-1].requirementsTable.weedFraction.mass < 0){
					pageRow[pageID-1].requirementsTable.suitableFraction.mass = Number(pageRow[pageID-1].requirementsTable.mainFractionData.mass);
					outputGood.value = Number(pageRow[pageID-1].requirementsTable.suitableFraction.mass).toFixed(3);
					pageRow[pageID-1].requirementsTable.weedFraction.mass = 0;
				}
				
				pageRow[pageID-1].requirementsTable.weedFraction.percent_exit = Number(pageRow[pageID-1].requirementsTable.mainFractionData.mass) > 0 ? Number(pageRow[pageID-1].requirementsTable.weedFraction.mass / pageRow[pageID-1].requirementsTable.mainFractionData.mass * 100).toFixed(2) : 0;
				pageRow[pageID-1].requirementsTable.suitableFraction.percent_exit = Number(pageRow[pageID-1].requirementsTable.mainFractionData.mass) > 0 ? Number(pageRow[pageID-1].requirementsTable.mainFractionData.percent_exit - pageRow[pageID-1].requirementsTable.weedFraction.percent_exit).toFixed(2) : 0;
				
				outputGood.value = Number(pageRow[pageID-1].requirementsTable.suitableFraction.mass).toFixed(3);
				outputTrash.value = Number(pageRow[pageID-1].requirementsTable.weedFraction.mass).toFixed(3);
				percentGood.value = Number(pageRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2);
				percentTrash.value = Number(pageRow[pageID-1].requirementsTable.weedFraction.percent_exit).toFixed(2)
			}
			break;
		case 2:
			outputTrash.value = outputTrash.value < 0 ? Number(pageRow[pageID-1].requirementsTable.weedFraction.mass).toFixed(3) : Number(outputTrash.value).toFixed(3);
			pageRow[pageID-1].requirementsTable.weedFraction.mass = Number(outputTrash.value);
			//Проверка максимального выхода
			checkWeedFractionExit();
			if(pageRow[pageID-1].Sustatment.ColumnState[0] == "unlock"){
				pageRow[pageID-1].requirementsTable.mainFractionData.mass += Number(pageRow[pageID-1].requirementsTable.weedFraction.mass - pageRow[pageID-1].requirementsTable.mainFractionData.mass + pageRow[pageID-1].requirementsTable.suitableFraction.mass);
				outputStart.value = Number(pageRow[pageID-1].requirementsTable.mainFractionData.mass).toFixed(3);
				
				pageRow[pageID-1].requirementsTable.suitableFraction.percent_exit = Number(pageRow[pageID-1].requirementsTable.mainFractionData.mass) > 0 ? Number(pageRow[pageID-1].requirementsTable.suitableFraction.mass / pageRow[pageID-1].requirementsTable.mainFractionData.mass * 100).toFixed(2) : 0;
				pageRow[pageID-1].requirementsTable.weedFraction.percent_exit = Number(pageRow[pageID-1].requirementsTable.mainFractionData.mass) > 0 ? Number(pageRow[pageID-1].requirementsTable.mainFractionData.percent_exit - pageRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2) : 0;

				outputGood.value = Number(pageRow[pageID-1].requirementsTable.suitableFraction.mass).toFixed(3);
				outputTrash.value = Number(pageRow[pageID-1].requirementsTable.weedFraction.mass).toFixed(3);
				percentGood.value = Number(pageRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2);
				percentTrash.value = Number(pageRow[pageID-1].requirementsTable.weedFraction.percent_exit).toFixed(2);
			} 
			else{
				pageRow[pageID-1].requirementsTable.suitableFraction.mass = Number(pageRow[pageID-1].requirementsTable.mainFractionData.mass - pageRow[pageID-1].requirementsTable.weedFraction.mass);
				if(pageRow[pageID-1].requirementsTable.suitableFraction.mass < 0){
					pageRow[pageID-1].requirementsTable.weedFraction.mass = Number(pageRow[pageID-1].requirementsTable.mainFractionData.mass);
					outputTrash.value = Number(pageRow[pageID-1].requirementsTable.suitableFraction.mass).toFixed(3);
					pageRow[pageID-1].requirementsTable.suitableFraction.mass = 0;
				}
				
				pageRow[pageID-1].requirementsTable.suitableFraction.percent_exit = Number(pageRow[pageID-1].requirementsTable.mainFractionData.mass) > 0 ? Number(pageRow[pageID-1].requirementsTable.suitableFraction.mass / pageRow[pageID-1].requirementsTable.mainFractionData.mass * 100).toFixed(2) : 0;
				pageRow[pageID-1].requirementsTable.weedFraction.percent_exit = Number(pageRow[pageID-1].requirementsTable.mainFractionData.mass) > 0 ? Number(pageRow[pageID-1].requirementsTable.mainFractionData.percent_exit - pageRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2) : 0;

				outputGood.value = Number(pageRow[pageID-1].requirementsTable.suitableFraction.mass).toFixed(3);
				outputTrash.value = Number(pageRow[pageID-1].requirementsTable.weedFraction.mass).toFixed(3);
				percentGood.value = Number(pageRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2);
				percentTrash.value = Number(pageRow[pageID-1].requirementsTable.weedFraction.percent_exit).toFixed(2);
			}
			break;
	}
	setupFractionExitClone(pageID);
}
//выбор листа требований

function CalculateListNumber(){
	var menu = document.getElementById('dropdown-content');
	var customerRequirements_MainBlock = document.getElementById('customerRequirements_MainBlock');
	if(menu.style.display == 'none'){
		var menuLength = menu.children[0].children.length-2;
		if(menu.children[0].children.length > 1){
			for(var i = Number(menu.children[0].children.length); i > 1; i--){
				menu.children[0].children[i-1].remove();
			}
		}
		for(var i = 0; i < customerRequirements_MainBlock.children.length; i++){
			var row = menu.children[0].children[0].cloneNode(true);
			row.value = i;
			row.style= 'display :flex; flex-direction: column';
			row.addEventListener('click', function(){
				pageID = Number(this.value);
				if(this.value != 0){
					var operatingModeBlock = document.getElementById('operatingModeBlock');
					var dropdownMenu = document.getElementById('dropdown-content');
					var previusPageID = Number(dropdown_ListNumber.textContent);
					if(menuLength == pageRow.length){
						if(pageRow[previusPageID-1] != null){
							if(Object.keys(pageRow[previusPageID-1].economicRowData).length == 1 || pageRow[previusPageID-1].economicRowData.elements.length == 0){
								pageRow[previusPageID-1].economicRowData = economicRowData;					
							}
						}
					}				
					currentPage = pageID;
					dropdown_ListNumber.textContent = pageID;
					economicRowData = pageRow[pageID-1].economicRowData;	
					if(economicType == 'Req'){
						removeEconomicRow();
						fillEconomicRow(currentPage);
						viewCurrentlyParam();
						operatingModeBlock.children[0].children[0].children[0].click();
						update2();
						operatingModeViev(); 
						updateDataClone(currentPage);
						for(var z = 1; z<= economicRowData.elements.length; z++){
							addResult(z);
						}
					}	
					hideRequirements(currentPage);
					dropdownMenu.style.display = 'none';
					switchExplain();
				}
				else{
					currentPage = pageID;
					dropdown_ListNumber.textContent = 0;
					hideRequirements(0);
				}
				if(pageRow.length != 0){
					resetRowValueReq();
				}
				setupPageId(id_document);
			});
			menu.children[0].appendChild(row);			
		}
		
	}
	dropdownListView();
}

function update2(){
	var hour_in_day = operationDateBlock.getElementsByClassName('inputElement')[0];
	var day_in_week = operationDateBlock.getElementsByClassName('inputElement')[1];
	hour_in_day.value = economicRowData.Additiona.HourDay
	day_in_week.value = economicRowData.Additiona.DayWeek
}
// отображение меню списка листов требований
function dropdownListView(){
	var menu = document.getElementById('dropdown-content');
	menu.children[0].style.display = 'flex';
	if(menu.style.display == 'none'){
		menu.style= 'display :flex; flex-direction: column';
	}
	else{
		menu.style.display = 'none';
	}
}

//  функа на запись econom row
function removeEconomicRow(){
	for(var i = economicMainRow.children.length; i > 1; i--){
		economicMainRow.children[i-1].remove();
	}
}
function fillEconomicRow(pageId){	
	pageRow[pageId-1].economicRowData = economicRowData;
	var custom = pageRow[pageId-1].economicRowData.elements.length;
	for(var i = 0; i < custom; i++){
		addrowGraph();		
	}
	cloneFixRow();
	cloneArticleRow();		
		
}
function viewCurrentlyParam(){
	EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;
	for(var i = 1; i <= EconomicRowType.elements.length; i++){
		var economicComponent = document.getElementById("economicComponent_" + i);

		var economSumModelType = document.getElementById("economSumModelType_" + i);
		var economSumParam = document.getElementById("economSumParam_" + i);

		var economDateModelType = document.getElementById("economDateModelType_" + i);
		var economDate = document.getElementById("economDateParam_" + i);
		var economDateParam = economDate.children[0].children[0].children;

		var economPeriodParam = document.getElementById("economPeriodParam_" + i);
		var startPer = economPeriodParam.children[0].children[0].children[0].children[0];
		var endPer = economPeriodParam.children[0].children[0].children[1].children[0];

		var economFixedDate = document.getElementById("economFixedDate_" + i);

		var economFraction = document.getElementById("economFraction_" + i);
		var economFractionParam = economFraction.children[0].children[0].children;

		var economFractionMass = document.getElementById("economFractionMass_" + i);
		var economFractionMassParam = economFractionMass.children[0].children[0].children;

		var scrollBlockSumParam = economSumParam.children[0].children[0].children;
		// установка диапозона даты
		
		startPer.value = EconomicRowType.elements[i-1].DateParameters.periodParametres.startPeriod;
		endPer.value = EconomicRowType.elements[i-1].DateParameters.periodParametres.endPeriod;
		// установка параметров суммы
		switch(EconomicRowType.elements[i-1].SumParameters.modelType){
			case'currentyParameters':
				economSumModelType.getElementsByClassName('inputOption')[0].click();
				EconomicRowType.elements[i-1].SumParameters.modelType = 'currentyParameters';				
				break;
			case'fractionParameters':
				economSumModelType.getElementsByClassName('inputOption')[1].click();
				EconomicRowType.elements[i-1].SumParameters.modelType = 'fractionParameters';
				//установка фракции
				switch(economicType){
					case "Req":
						switch(EconomicRowType.elements[i-1].SumParameters.fractionParameters.targetFraction){
							case "Исходный продукт":
								economFractionParam[0].children[0].click();
								EconomicRowType.elements[i-1].SumParameters.fractionParameters.targetFraction = 'Исходный продукт';
								break;
							case "Проход":
								economFractionParam[1].children[0].click();
								EconomicRowType.elements[i-1].SumParameters.fractionParameters.targetFraction = 'Проход';
								break;
							case "Отбой":
								economFractionParam[2].children[0].click();
								EconomicRowType.elements[i-1].SumParameters.fractionParameters.targetFraction = 'Отбой';
								break;
						}
						break;
					case "Prot":
						for(var k = 0; k < economFractionParam.length; k++){
							if(economFractionParam[k].children[0].value == EconomicRowType.elements[i-1].SumParameters.fractionParameters.targetFraction){
								economFractionParam[k].children[0].click();
								EconomicRowType.elements[i-1].SumParameters.fractionParameters.targetFraction = economFractionParam[k].children[0].value;
							}
						}
						break;
				}				
				//установка массы
				switch(EconomicRowType.elements[i-1].SumParameters.fractionParameters.targetMassType){
					case "ton":
						economFractionMassParam[0].children[0].value = Number(EconomicRowType.elements[i-1].SumParameters.fractionParameters.massValue.ton);
						economFractionMassParam[0].children[1].click();
						EconomicRowType.elements[i-1].SumParameters.fractionParameters.targetMassType = 'ton';
						break;
					case "cwt":
						economFractionMassParam[1].children[0].value = Number(EconomicRowType.elements[i-1].SumParameters.fractionParameters.massValue.cwt);
						economFractionMassParam[1].children[1].click();
						EconomicRowType.elements[i-1].SumParameters.fractionParameters.targetMassType = 'cwt';
						break;
					case "kg":
						economFractionMassParam[2].children[0].value = Number(EconomicRowType.elements[i-1].SumParameters.fractionParameters.massValue.kg);
						economFractionMassParam[2].children[1].click();
						EconomicRowType.elements[i-1].SumParameters.fractionParameters.targetMassType = 'kg';
						break;
				}
				break;
			case'percentParameters':
				economSumModelType.getElementsByClassName('inputOption')[2].click();
				EconomicRowType.elements[i-1].SumParameters.modelType = 'percentParameters';
				break;	
		}
			// установка валюты параметра суммы
		switch(EconomicRowType.elements[i-1].SumParameters.currentyParameters.targetCurrent){
			case "RUB":
				scrollBlockSumParam[0].children[0].value = Number(EconomicRowType.elements[i-1].SumParameters.currentyParameters.curentyValue.RUB);
				scrollBlockSumParam[0].children[1].click();
				EconomicRowType.elements[i-1].SumParameters.currentyParameters.targetCurrent = 'RUB';
				break;
			case "USD":
				scrollBlockSumParam[1].children[0].value = Number(EconomicRowType.elements[i-1].SumParameters.currentyParameters.curentyValue.USD);
				scrollBlockSumParam[1].children[1].click();
				EconomicRowType.elements[i-1].SumParameters.currentyParameters.targetCurrent = 'USD';
				break;
			case "EUR":
				scrollBlockSumParam[2].children[0].value = Number(EconomicRowType.elements[i-1].SumParameters.currentyParameters.curentyValue.EUR);
				scrollBlockSumParam[2].children[1].click();
				EconomicRowType.elements[i-1].SumParameters.currentyParameters.targetCurrent = 'EUR';
				break;
		}
		// установка параметров даты
		switch(EconomicRowType.elements[i-1].DateParameters.modelType){
			case'calendarTime':
				var time = EconomicRowType.elements[i-1].DateParameters.timeParameters.targetTime;
				economDateModelType.getElementsByClassName('inputOption')[0].click();
				EconomicRowType.elements[i-1].DateParameters.modelType = 'calendarTime';
				break;
			case'equipmentOperatingTime':
				var time = EconomicRowType.elements[i-1].DateParameters.timeParameters.targetTime;
				economDateModelType.getElementsByClassName('inputOption')[1].click();
				EconomicRowType.elements[i-1].DateParameters.modelType = 'equipmentOperatingTime';
				break;
			case'fixedDate':
				economDateModelType.getElementsByClassName('inputOption')[2].click();
				EconomicRowType.elements[i-1].DateParameters.modelType = 'fixedDate';
				var massive = EconomicRowType.elements[i-1].DateParameters.fixedDate;
				EconomicRowType.elements[i-1].DateParameters.fixedDate = [];
				for(var k = 0; k < massive.length; k++){
					var value = massive[k];
					economFixedDate.children[0].children[0].children[value].children[0].click();
				}
				break;	
		}
		// установка шага параметров даты
		switch(time){
			case "hour":
				economDateParam[0].children[0].value = Number(EconomicRowType.elements[i-1].DateParameters.timeParameters.timeValue.hour);
				EconomicRowType.elements[i-1].DateParameters.timeParameters.targetTime = 'hour';
				break;
			case "day":
				economDateParam[1].children[0].value = Number(EconomicRowType.elements[i-1].DateParameters.timeParameters.timeValue.day);
				EconomicRowType.elements[i-1].DateParameters.timeParameters.targetTime = 'day';
				break;
			case "week":
				economDateParam[2].children[0].value = Number(EconomicRowType.elements[i-1].DateParameters.timeParameters.timeValue.week);
				EconomicRowType.elements[i-1].DateParameters.timeParameters.targetTime = 'week';
				break;
			case "month":
				economDateParam[3].children[0].value = Number(EconomicRowType.elements[i-1].DateParameters.timeParameters.timeValue.month);
				EconomicRowType.elements[i-1].DateParameters.timeParameters.targetTime = 'month';
				break;
			case "year":
				economDateParam[4].children[0].value = Number(EconomicRowType.elements[i-1].DateParameters.timeParameters.timeValue.year);
				EconomicRowType.elements[i-1].DateParameters.timeParameters.targetTime = 'year';
				break;		
		}
		
		if(EconomicRowType.elements[i-1].IncomeArrow == false){
			economicComponent.children[0].children[3].children[0].children[0].children[0].click();
			EconomicRowType.elements[i-1].IncomeArrow == false;
		}
	}
	economicHideAll();

}

function hideRequirements(pageId){
	for(var i = 0; i< customerRequirements_MainBlock.children.length; i++){
		customerRequirements_MainBlock.children[i].style.display = 'none';
	}
	if(pageId != 0)
		customerRequirements_MainBlock.children[pageId].style= 'display :flex; flex-direction: column';
}
function hideRequirementsAfterAddList(){
	for(var i = 0; i< customerRequirements_MainBlock.children.length; i++){
		customerRequirements_MainBlock.children[i].style.display = 'none';
	}
	customerRequirements_MainBlock.lastChild.style= 'display :flex; flex-direction: column';
	var number = customerRequirements_MainBlock.lastChild.id.split("_")[1];
	dropdown_ListNumber.textContent = number;	
}

function addResult(idRow){
	EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;
	var text = EconomicRowType.elements[idRow-1].Discription;
	var inputBlock = document.getElementById("economicInput_" + idRow);
	var classifierInpurResult = document.getElementById("economicInputResult_" + idRow);
	var object = document.createElement("div");
	//блок со списком элементов для перебора text
	var main = inputBlock.parentNode.parentNode.parentNode;
	var classifierInpurResultRow = main.children[0].children[0];
	for(var i = 0; i< list_economic.length; i++){
		if(list_economic[i].name == text){
			object.classList.add("wordElement");
			object.id = "result_economic_" + i;
			object.textContent = text;
			object.addEventListener("click", function(){
				removeEconomicClassifier(idRow);
				this.remove();
				economicrefreshID();
				StartEconomicInput(idRow);
				refreshEconomicChart();
			});
			break;
		}
		else if(list_economic[i].name != text && i == list_economic.length-1){
			object.classList.add("wordElement");
			object.id = "result_customOption";
			object.textContent = text;
			object.addEventListener("click", function(){
				removeEconomicClassifier(idRow);
				this.remove();
				economicrefreshID();
				StartEconomicInput(idRow);
				refreshEconomicChart();
			});
		}
	}
	classifierInpurResultRow.appendChild(object);	
	resultTextView(inputBlock, classifierInpurResult);
}

function changeMassInputBlockFormat(object, imgName){
	var main = object.parentNode.parentNode;
	var fraction = main.id.split('_')[1];	
	var pageID =  main.id.split('_')[3];
	var idRow =  main.id.split('_')[2];
	var typeSustatment = pageRow[pageID-1].Sustatment.DefaultUnit;
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
		main.children[0].children[0].value = pageRow[pageID-1].componentRow[idRow-1][fraction].custom;
	}
	else{
		main.children[0].children[0].type = 'number';
		main.children[0].children[0].value = pageRow[pageID-1].componentRow[idRow-1][fraction].unitOption[typeSustatment];
	}
}

function resetRowValueReq(){
	for(var i = 0; i < pageRow.length; i++){1
		if(pageRow[i].componentRow[0].weedFractionData.unitOption.percent == "NaN"){
			var massInp = document.getElementById("massInput_3_1_" + (i+1));
			var massInpBlock = document.getElementById("massInputBlock_3_1_" + (i+1));
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


function setTitleTable(obj){
	return function e(){
		var objBlock = document.getElementById(obj);
		var pageID = objBlock.id.split("_")[1];
		var position = objBlock.id.split("_")[0];

		if(pageRow[pageID-1].Sustatment.TitleTable == null){
			pageRow[pageID-1].Sustatment.TitleTable = {
					"companyName": '0',
					"userManagerName": '0',
					"createDateProtocol": '0'
			  	}
			
		}
		pageRow[pageID-1].Sustatment.TitleTable[position] = objBlock.value;
	}
}
/*prime*/
var refreshSortCheck = false;
var SortPage = 1;

function setupProtocolSort(){
	pageProtocolRow[ProtocolPage-1].pageSortRow.push({
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
	  "TitleTable":{
		"userManagerName": '0',
		"createDateProtocol": '0'
	  }
    },
	"mainFractionParent":[],
	"ProtocolSort":[],
	'economicRowData':{
		'elements':[],
		"Additiona":{
			"HourDay":8,
			"DayWeek":5
		}
	},
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
function setupPhotosSortRow(pageID,k){
	pageProtocolRow[pageID].pageSortRow[k].photoContainer.rowsFraction.push({
		'photoData':[]
	});
}
function setupPhotoSortData(pageID,k,idRow){
	pageProtocolRow[pageID].pageSortRow[k].photoContainer.rowsFraction[idRow].photoData.push({
		'photoName':null
	});
}
function generateProtocolSort(pageID,i){
	pageProtocolRow[ProtocolPage-1].pageSortRow[pageID].ProtocolSort.push({
	  "component_name": pageProtocolRow[ProtocolPage-1].ProtocolRow[i].component_name,
	  "mainFractionData":{
		"calcToggle": pageProtocolRow[ProtocolPage-1].ProtocolRow[i].mainFractionData.calcToggle,
		"impToggle": pageProtocolRow[ProtocolPage-1].ProtocolRow[i].mainFractionData.impToggle,
		"acceptRejectToggle":  pageProtocolRow[ProtocolPage-1].ProtocolRow[i].mainFractionData.acceptRejectToggle,
		"selectUnitOption": pageProtocolRow[ProtocolPage-1].ProtocolRow[i].mainFractionData.selectUnitOption,
		"unitOption":{
		  "percent":  pageProtocolRow[ProtocolPage-1].ProtocolRow[i].mainFractionData.unitOption.percent,
		  "gram": pageProtocolRow[ProtocolPage-1].ProtocolRow[i].mainFractionData.unitOption.gram,
		  "pieces": pageProtocolRow[ProtocolPage-1].ProtocolRow[i].mainFractionData.unitOption.pieces,
		  "pieces_kg": pageProtocolRow[ProtocolPage-1].ProtocolRow[i].mainFractionData.unitOption.pieces_kg,
		  "ppm": pageProtocolRow[ProtocolPage-1].ProtocolRow[i].mainFractionData.unitOption.ppm
		},
		"hingeMass": pageProtocolRow[ProtocolPage-1].ProtocolRow[i].mainFractionData.hingeMass,
		"pieces_1000": pageProtocolRow[ProtocolPage-1].ProtocolRow[i].mainFractionData.pieces_1000,
		"custom": pageProtocolRow[ProtocolPage-1].ProtocolRow[i].mainFractionData.custom
	  },
	  "suitableFractionData":{
		"calcToggle": pageProtocolRow[ProtocolPage-1].ProtocolRow[i].suitableFractionData.calcToggle,
		"impToggle": pageProtocolRow[ProtocolPage-1].ProtocolRow[i].suitableFractionData.impToggle,
		"acceptRejectToggle": pageProtocolRow[ProtocolPage-1].ProtocolRow[i].suitableFractionData.acceptRejectToggle,
		"selectUnitOption": pageProtocolRow[ProtocolPage-1].ProtocolRow[i].suitableFractionData.selectUnitOption,
		"unitOption":{
		  "percent":  pageProtocolRow[ProtocolPage-1].ProtocolRow[i].suitableFractionData.unitOption.percent,
		  "gram": pageProtocolRow[ProtocolPage-1].ProtocolRow[i].suitableFractionData.unitOption.gram,
		  "pieces": pageProtocolRow[ProtocolPage-1].ProtocolRow[i].suitableFractionData.unitOption.pieces,
		  "pieces_kg": pageProtocolRow[ProtocolPage-1].ProtocolRow[i].suitableFractionData.unitOption.pieces_kg,
		  "ppm": pageProtocolRow[ProtocolPage-1].ProtocolRow[i].suitableFractionData.unitOption.ppm
		  //"iterfraction_percent": 0.0
		},
		"hingeMass": pageProtocolRow[ProtocolPage-1].ProtocolRow[i].suitableFractionData.hingeMass,
		"pieces_1000": pageProtocolRow[ProtocolPage-1].ProtocolRow[i].suitableFractionData.pieces_1000,
		"custom": pageProtocolRow[ProtocolPage-1].ProtocolRow[i].suitableFractionData.custom
	  },
	  "weedFractionData":{
		"calcToggle": pageProtocolRow[ProtocolPage-1].ProtocolRow[i].weedFractionData.calcToggle,
		"impToggle": pageProtocolRow[ProtocolPage-1].ProtocolRow[i].weedFractionData.impToggle,
		"acceptRejectToggle": pageProtocolRow[ProtocolPage-1].ProtocolRow[i].weedFractionData.acceptRejectToggle,
		"selectUnitOption": pageProtocolRow[ProtocolPage-1].ProtocolRow[i].weedFractionData.selectUnitOption,
		"unitOption":{
		  "percent": pageProtocolRow[ProtocolPage-1].ProtocolRow[i].weedFractionData.unitOption.percent,
		  "gram": pageProtocolRow[ProtocolPage-1].ProtocolRow[i].weedFractionData.unitOption.gram,
		  "pieces": pageProtocolRow[ProtocolPage-1].ProtocolRow[i].weedFractionData.unitOption.pieces,
		  "pieces_kg": pageProtocolRow[ProtocolPage-1].ProtocolRow[i].weedFractionData.unitOption.pieces_kg,
		  "ppm": pageProtocolRow[ProtocolPage-1].ProtocolRow[i].weedFractionData.unitOption.ppm
		  //"iterfraction_percent": 0.0
		},
		"hingeMass": pageProtocolRow[ProtocolPage-1].ProtocolRow[i].weedFractionData.hingeMass,
		"pieces_1000": pageProtocolRow[ProtocolPage-1].ProtocolRow[i].weedFractionData.pieces_1000,
		"custom": pageProtocolRow[ProtocolPage-1].ProtocolRow[i].weedFractionData.custom
	  },
	  'SearchProductResult':pageProtocolRow[ProtocolPage-1].ProtocolRow[i].SearchProductResult
	});
}
// смена отображения элементов
function ShowUpsertDropdownSort(elementID, idRow){
	return function e(){
		var element = document.getElementById(elementID);
		var parent = element.parentNode.parentNode.parentNode;

		if(parent.children[0].style.width != '188px'){
			if(parent.id.split('_')[1] == '1'){
	 			var input = document.getElementById('massInput_' + parent.id.split('_')[1] +'_1' + '_' + idRow + '_' + 'S');
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
				var input = document.getElementById('massInput_' + parent.id.split('_')[1] +'_1' + '_' + idRow + '_' + 'S');
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
		if(element.id == "outputStart_" + idRow + '_' + 'S'){
			document.getElementById("outputStartButton_" + idRow + '_' + 'S').style.display = "flex";
			document.getElementById("outputGoodButton_" + idRow + '_' + 'S').style.display = "none";
			document.getElementById("outputTrashButton_" + idRow + '_' + 'S').style.display = "none";
			document.getElementById("percentGoodButton_" + idRow + '_' + 'S').style.display = "none";
			document.getElementById("percentTrashButton_" + idRow + '_' + 'S').style.display = "none";
			// document.getElementById("lockBlock_" + idRow + '_' + 'S').style.display = "none";
		}else if (element.id == "outputGood_" + idRow + '_' + 'S'){
			document.getElementById("outputGoodButton_" + idRow + '_' + 'S').style.display = "flex";
			document.getElementById("outputStartButton_" + idRow + '_' + 'S').style.display = "none";
			document.getElementById("outputTrashButton_" + idRow + '_' + 'S').style.display = "none";
			document.getElementById("percentGoodButton_" + idRow + '_' + 'S').style.display = "none";
			document.getElementById("percentTrashButton_" + idRow + '_' + 'S').style.display = "none";
			document.getElementById("lockBlock_" + idRow + '_' + 'S').style.display = "flex";
		}else if (element.id == "outputTrash_" + idRow + '_' + 'S'){
			document.getElementById("outputTrashButton_" + idRow + '_' + 'S').style.display = "flex";
			document.getElementById("outputStartButton_" + idRow + '_' + 'S').style.display = "none";
			document.getElementById("outputGoodButton_" + idRow + '_' + 'S').style.display = "none";
			document.getElementById("percentGoodButton_" + idRow + '_' + 'S').style.display = "none";
			document.getElementById("percentTrashButton_" + idRow + '_' + 'S').style.display = "none";
			document.getElementById("lockBlock_" + idRow + '_' + 'S').style.display = "flex";
		}else if (element.id == "percentGood_" + idRow + '_' + 'S'){
			document.getElementById("percentGoodButton_" + idRow + '_' + 'S').style.display = "flex";	
			document.getElementById("outputStartButton_" + idRow + '_' + 'S').style.display = "none";
			document.getElementById("outputGoodButton_" + idRow + '_' + 'S').style.display = "none";
			document.getElementById("outputTrashButton_" + idRow + '_' + 'S').style.display = "none";
			document.getElementById("percentTrashButton_" + idRow + '_' + 'S').style.display = "none";
			// document.getElementById("lockBlock_" + idRow + '_' + 'S').style.display = "none";
		}else if (element.id == "percentTrash_" + idRow + '_' + 'S'){
			document.getElementById("percentGoodButton_" + idRow + '_' + 'S').style.display = "none";	
			document.getElementById("outputStartButton_" + idRow + '_' + 'S').style.display = "none";
			document.getElementById("outputGoodButton_" + idRow + '_' + 'S').style.display = "none";
			document.getElementById("outputTrashButton_" + idRow + '_' + 'S').style.display = "none";
			document.getElementById("percentTrashButton_" + idRow + '_' + 'S').style.display = "flex";
			// document.getElementById("lockBlock_" + idRow + '_' + 'S').style.display = "none";
		}else{
			document.getElementById("percentTrashButton_" + idRow + '_' + 'S').style.display = "flex";	
			document.getElementById("outputStartButton_" + idRow + '_' + 'S').style.display = "none";
			document.getElementById("outputGoodButton_" + idRow + '_' + 'S').style.display = "none";
			document.getElementById("outputTrashButton_" + idRow + '_' + 'S').style.display = "none";
			document.getElementById("percentGoodButton_" + idRow + '_' + 'S').style.display = "none";
			document.getElementById("lockBlock_" + idRow + '_' + 'S').style.display = "none";
		}
	}
	
	
}
function ShowMassDropdownSort(elementID){
	return function e(){
		HideAllDropdownSort(elementID.split('_')[3]);
		var massInputElement = document.getElementById(elementID);
		var main = massInputElement.parentNode.parentNode;
		var massInputResultBlockEl = main.children[1];
		var massInputBlockEl = main.children[0];
		var moreTitleEl = main.children[2];
		var massDropdownEl = main.children[3].children[0];
		var fractionMainValues = document.getElementById('fractionMainValues_' + elementID.split('_')[1] + '_' + elementID.split('_')[3] + '_' + 'S');
		var fractionSource = document.getElementById('fractionSource_' + elementID.split('_')[1] + '_' + elementID.split('_')[3] + '_' + 'S');
		var lockBlock = document.getElementById('lockBlock_' + elementID.split('_')[3] + '_' + 'S');
		var fractionLockValue = document.getElementById('fractionLockValue_' + elementID.split('_')[1] + '_' + elementID.split('_')[3] + '_' + 'S');

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
					var massInputResultBlockEl2 = document.getElementById(massInputResultBlockEl.id.split('_')[0] + '_2_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'S');
					var massInputBlockEl2 = document.getElementById(massInputBlockEl.id.split('_')[0] + '_2_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'S');
					var moreTitleEl2 = document.getElementById(moreTitleEl.id.split('_')[0] + '_2_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'S');
					var massDropdownEl2 = document.getElementById(massDropdownEl.id.split('_')[0] + '_2_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'S');

					var massInputResultBlockEl3 = document.getElementById(massInputResultBlockEl.id.split('_')[0] + '_3_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'S');
					var massInputBlockEl3 = document.getElementById(massInputBlockEl.id.split('_')[0] + '_3_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'S');
					var moreTitleEl3 = document.getElementById(moreTitleEl.id.split('_')[0] + '_3_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'S');
					var massDropdownEl3 = document.getElementById(massDropdownEl.id.split('_')[0] + '_3_' + numberRow + '_' + elementID.split('_')[3]+ '_' + 'S');

					var main2 = document.getElementById(main.id.split('_')[0] + '_2_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'S');
					var main3 = document.getElementById(main.id.split('_')[0] + '_3_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'S');

					var fractionMainValues2 = document.getElementById(fractionMainValues.id.split('_')[0] + '_2' + '_' + elementID.split('_')[3] + '_' + 'S');
					var fractionMainValues3 = document.getElementById(fractionMainValues.id.split('_')[0] + '_3' + '_' + elementID.split('_')[3] + '_' + 'S');
					var fractionSource2 = document.getElementById(fractionSource.id.split('_')[0] + '_2' + '_' + elementID.split('_')[3] + '_' + 'S');
					var fractionSource3 = document.getElementById(fractionSource.id.split('_')[0] + '_3' + '_' + elementID.split('_')[3] + '_' + 'S');
					
					var fractionLockValue2 = document.getElementById(fractionLockValue.id.split('_')[0] + '_2' + '_' + elementID.split('_')[3] + '_' + 'S');
					var fractionLockValue3 = document.getElementById(fractionLockValue.id.split('_')[0] + '_3' + '_' + elementID.split('_')[3] + '_' + 'S');
					

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
					var massInputResultBlockEl2 = document.getElementById(massInputResultBlockEl.id.split('_')[0] + '_1_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'S');
					var massInputBlockEl2 = document.getElementById(massInputBlockEl.id.split('_')[0] + '_1_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'S');
					var moreTitleEl2 = document.getElementById(moreTitleEl.id.split('_')[0] + '_1_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'S');
					var massDropdownEl2 = document.getElementById(massDropdownEl.id.split('_')[0] + '_1_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'S');

					var massInputResultBlockEl3 = document.getElementById(massInputResultBlockEl.id.split('_')[0] + '_3_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'S');
					var massInputBlockEl3 = document.getElementById(massInputBlockEl.id.split('_')[0] + '_3_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'S');
					var moreTitleEl3 = document.getElementById(moreTitleEl.id.split('_')[0] + '_3_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'S');
					var massDropdownEl3 = document.getElementById(massDropdownEl.id.split('_')[0] + '_3_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'S');

					var main2 = document.getElementById(main.id.split('_')[0] + '_1_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'S');
					var main3 = document.getElementById(main.id.split('_')[0] + '_3_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'S');

					var fractionMainValues2 = document.getElementById(fractionMainValues.id.split('_')[0] + '_1' + '_' + elementID.split('_')[3] + '_' + 'S');
					var fractionMainValues3 = document.getElementById(fractionMainValues.id.split('_')[0] + '_3' + '_' + elementID.split('_')[3] + '_' + 'S');
					var fractionSource2 = document.getElementById(fractionSource.id.split('_')[0] + '_1' + '_' + elementID.split('_')[3] + '_' + 'S');
					var fractionSource3 = document.getElementById(fractionSource.id.split('_')[0] + '_3' + '_' + elementID.split('_')[3] + '_' + 'S');
					var fractionLockValue2 = document.getElementById(fractionLockValue.id.split('_')[0] + '_1' + '_' + elementID.split('_')[3] + '_' + 'S');
					var fractionLockValue3 = document.getElementById(fractionLockValue.id.split('_')[0] + '_3' + '_' + elementID.split('_')[3] + '_' + 'S');

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
					var massInputResultBlockEl2 = document.getElementById(massInputResultBlockEl.id.split('_')[0] + '_2_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'S');
					var massInputBlockEl2 = document.getElementById(massInputBlockEl.id.split('_')[0] + '_2_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'S');
					var moreTitleEl2 = document.getElementById(moreTitleEl.id.split('_')[0] + '_2_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'S');
					var massDropdownEl2 = document.getElementById(massDropdownEl.id.split('_')[0] + '_2_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'S');

					var massInputResultBlockEl3 = document.getElementById(massInputResultBlockEl.id.split('_')[0] + '_1_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'S');
					var massInputBlockEl3 = document.getElementById(massInputBlockEl.id.split('_')[0] + '_1_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'S');
					var moreTitleEl3 = document.getElementById(moreTitleEl.id.split('_')[0] + '_1_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'S');
					var massDropdownEl3 = document.getElementById(massDropdownEl.id.split('_')[0] + '_1_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'S');

					var main2 = document.getElementById(main.id.split('_')[0] + '_2_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'S');
					var main3 = document.getElementById(main.id.split('_')[0] + '_1_' + numberRow + '_' + elementID.split('_')[3] + '_' + 'S');

					var fractionMainValues2 = document.getElementById(fractionMainValues.id.split('_')[0] + '_2' + '_' + elementID.split('_')[3] + '_' + 'S');
					var fractionMainValues3 = document.getElementById(fractionMainValues.id.split('_')[0] + '_1' + '_' + elementID.split('_')[3] + '_' + 'S');
					var fractionSource2 = document.getElementById(fractionSource.id.split('_')[0] + '_2' + '_' + elementID.split('_')[3] + '_' + 'S');
					var fractionSource3 = document.getElementById(fractionSource.id.split('_')[0] + '_1' + '_' + elementID.split('_')[3] + '_' + 'S');
					var fractionLockValue2 = document.getElementById(fractionLockValue.id.split('_')[0] + '_2' + '_' + elementID.split('_')[3] + '_' + 'S');
					var fractionLockValue3 = document.getElementById(fractionLockValue.id.split('_')[0] + '_1' + '_' + elementID.split('_')[3] + '_' + 'S');

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
			var rows = document.getElementById('rows_' + elementID.split('_')[3] + '_' + 'S');
			for (var k = 1; k< rows.children.length; k++){
				rows.children[k].children[0].children[0].children[Number(numberBlock)+1].style.width = '184px';
			}		
		}
		
		GetLockSustateSort(elementID.split('_')[1], elementID.split('_')[3]);
	}
}
function GetLockSustateSort(column_id, pageID){//
	switch(column_id){
		case'1':
			pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.ColumnState[0] = 'active';
			pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.ColumnState[1] = 'lock';
			pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.ColumnState[2] = 'unlock';
			break;
		case'2':
			pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.ColumnState[0] = 'lock';
			pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.ColumnState[1] = 'active';
			pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.ColumnState[2] = 'unlock';
			break;
		case'3':
			pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.ColumnState[0] = 'lock';
			pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.ColumnState[1] = 'unlock';
			pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.ColumnState[2] = 'active';
			break;
	}
	setupIMGSort(pageID);
}
function HideMassDropdownSort(elementID){//
	return function e(){
		HideAllDropdownSort(elementID.split('_')[3]);
		var controlButton = document.getElementById(elementID);
		var main = controlButton.parentNode.parentNode;
		var massInputBlockEl = main.children[0];
		var massInputResultBlockEl = main.children[1];
		var moreTitleEl = main.children[2];
		var massDropdownEl = main.children[3].children[0];
		var fractionMainValues = document.getElementById('fractionMainValues_' + elementID.split('_')[1] + '_' + elementID.split('_')[3] + '_' + 'S');
		var fractionSource = document.getElementById('fractionSource_' + elementID.split('_')[1] + '_' + elementID.split('_')[3] + '_' + 'S');
		var lockBlock = document.getElementById('lockBlock_' + elementID.split('_')[3] + '_' + 'S');
		var fractionLockValue = document.getElementById('fractionLockValue_' + elementID.split('_')[1] + '_' + elementID.split('_')[3] + '_' + 'S');

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

function HideAllDropdownSort(el){//
	if(el.length > 1){
		el = el.split('_')[1];
	}
	document.getElementById("outputStartButton_" + el + '_' + 'S').style.display = "none";
	document.getElementById("outputGoodButton_" + el + '_' + 'S').style.display = "none";
	document.getElementById("outputTrashButton_" + el + '_' + 'S').style.display = "none";
	document.getElementById("percentGoodButton_" + el + '_' + 'S').style.display = "none";
	document.getElementById("percentTrashButton_" + el + '_' + 'S').style.display = "none";
	
	for (var i= 1; i<= 3; i++){
		var fractionSource = document.getElementById('fractionSource_' + i + '_' + el + '_' + 'S');
		var fractionMainValues = document.getElementById('fractionMainValues_' + i + '_' + el + '_' + 'S');
		var fractionLockValue = document.getElementById('fractionLockValue_' + i + '_' + el + '_' + 'S');
		var lockBlock = document.getElementById('lockBlock_' + el + '_' + 'S');
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
	var rows = document.getElementById('rows_' + el + '_' + 'S')
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
function switchToggleSort(){
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
	setupComponentTogglesSort(this);
	changeMassInputBlockFormatSort(this, imgName);
}
function setupComponentTogglesSort(toggle){//+
	var idRow = toggle.parentNode.parentNode.parentNode.id.split("_")[2];
	var pageID = toggle.parentNode.parentNode.parentNode.id.split("_")[3];
	var idFraction = toggle.parentNode.parentNode.parentNode.id.split("_")[1];
	var imgName = toggle.style.backgroundImage.split('/')[5].split('.')[0];
	
	var massInput = document.getElementById("massInput_" + idFraction + "_" + idRow + "_" + pageID + '_' + 'S');
	var massInputBlock = document.getElementById("massInputBlock_" + idFraction + "_" + idRow + "_" + pageID + '_' + 'S');
	var duplicateMassInput = massInputBlock.children[0].children[0];
	
	//Определение фракции
	switch(idFraction){
		case "1":
			var fractionData =  pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].mainFractionData;
			break;
		case "2":
			var fractionData =  pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].suitableFractionData;
			break;
		case "3":
			var fractionData =  pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].weedFractionData;
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
	requirementsPurityUpdateSort(pageID);
}
function requirementsPurityUpdateSort(pageID){//+
	var purityMainFraction = 0;
	var puritySuitableFraction = 0;
	var purityWeedFraction = 0;
	
	var pureInpStart_ = document.getElementById('pureInpStart_' + pageID + '_' + 'S');
	var pureInpGood_ = document.getElementById('pureInpGood_' + pageID + '_' + 'S');
	var pureInpTrash_ = document.getElementById('pureInpTrash_' + pageID + '_' + 'S');
	
	for(var i = 0; i < pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort.length; i++){
		purityMainFraction += pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].mainFractionData.acceptRejectToggle ? Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].mainFractionData.unitOption.percent) : 0;
		puritySuitableFraction += pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].suitableFractionData.acceptRejectToggle ? Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].suitableFractionData.unitOption.percent) : 0;
		purityWeedFraction += pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].weedFractionData.acceptRejectToggle ? Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].weedFractionData.unitOption.percent) : 0;
	}
	
	pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.purity = purityMainFraction;
	pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.purity = puritySuitableFraction;
	pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.purity = purityWeedFraction;
	pureInpStart_.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.purity).toFixed(2);
	pureInpGood_.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.purity).toFixed(2);
	pureInpTrash_.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.purity).toFixed(2);
}
function checkotherToggleSort(idRow, pageID){
	return function e(){
		var idFraction = this.parentNode.parentNode.parentNode.id.split("_")[1];
		var pureInpStart = document.getElementById('pureInpStart_' + pageID + '_S');
		var pureInpGood = document.getElementById('pureInpGood_' + pageID + '_S');
		var pureInpTrash = document.getElementById('pureInpTrash_' + pageID + '_S');
		
		var pureInpStartFake = document.getElementById('pureInpStartFake_' + pageID + '_S');
		var pureInpGoodFake = document.getElementById('pureInpGoodFake_' + pageID + '_S');
		var pureInpTrashFake = document.getElementById('pureInpTrashFake_' + pageID + '_S');
		var imgName = this.style.backgroundImage.split('/')[5].split('.')[0];
		switch(idFraction){
			case "1":
				var toggeValue =  pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].mainFractionData.calcToggle;
				break;
			case "2":
				var toggeValue =  pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].suitableFractionData.calcToggle;
				break;
			case "3":
				var toggeValue =  pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].weedFractionData.calcToggle;
				break;
		}
		rows = document.getElementById('rows_' + pageID + '_S');
		for(var i = 1; i < rows.children.length; i++){
			if(i != idRow){
				var toggle = rows.children[i].children[0].children[0].children[Number(idFraction)+1].children[0].children[1].children[0];
				//Определение фракции
				switch(idFraction){
					case "1":
						var fractionData =  pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData;
						break;
					case "2":
						var fractionData =  pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData;
						break;
					case "3":
						var fractionData =  pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData;
						break;
				}
				toggle.style.backgroundImage = this.style.backgroundImage;
				fractionData.calcToggle = toggeValue;
			}
			
		}
		switch(imgName){
			case "calcOn":			
				var main = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[0].mainFractionData.calcToggle;
				var suit = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[0].suitableFractionData.calcToggle;
				var weed = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[0].weedFractionData.calcToggle;
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

function setFakeSort(id, fractionNumber){
	return function e(){
		var fake = document.getElementById(id);
		switch(fractionNumber){
			case 1:
				pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.Fake = fake.value;
				break;
			case 2:
				pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.Fake = fake.value;
				break;
			case 3:
				pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.Fake = fake.value;
				break;
	
		}
	}
	
}
//Функции компоментов фракций
function mathfComponentFunctionSort(element_id){//+
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
			var fractionData = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].mainFractionData;
			break;
		case "2":
			var fractionData = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].suitableFractionData;
			break;
		case "3":
			var fractionData = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].weedFractionData;
			break;
	}
	
	hingeMassBlock.children[0].children[0].value = fractionData.hingeMass;
	
	sliderBlock.children[0].children[0].addEventListener("change", componentPercentUpdateSort(idFraction));
	sliderBlock.children[1].children[0].addEventListener("change", componentGramUpdateSort(idFraction));
	sliderBlock.children[2].children[0].addEventListener("change", componentPiecesUpdateSort(idFraction));
	sliderBlock.children[3].children[0].addEventListener("change", componentPiecesKgUpdateSort(idFraction));
	sliderBlock.children[4].children[0].addEventListener("change", componentPPM_UpdateSort(idFraction));
	
	hingeMassBlock.children[0].children[0].addEventListener("change", componentPercentUpdateSort(idFraction));
	piecesBlock.children[0].children[0].addEventListener("change", componentPercentUpdateSort(idFraction));
	
	hingeMassBlock.children[0].children[0].addEventListener("change", updateHingeMassSort(idFraction, pageID));
	piecesBlock.children[0].children[0].addEventListener("change", updatePieces_1000Sort(idRow, pageID));
	
	sliderBlock.children[0].children[0].addEventListener("change", function (){updateRemovedPercentSort(pageID)});
	sliderBlock.children[1].children[0].addEventListener("change", function (){updateRemovedPercentSort(pageID)});
	sliderBlock.children[2].children[0].addEventListener("change", function (){updateRemovedPercentSort(pageID)});
	sliderBlock.children[3].children[0].addEventListener("change", function (){updateRemovedPercentSort(pageID)});
	sliderBlock.children[4].children[0].addEventListener("change", function (){updateRemovedPercentSort(pageID)});
	
	hingeMassBlock.children[0].children[0].addEventListener("change", function (){updateRemovedPercentSort(pageID)});
	piecesBlock.children[0].children[0].addEventListener("change", function (){updateRemovedPercentSort(pageID)});
}
function sumComponentPercentSort(idFraction, pageID){//+
	var sumComponent = 0;
	for(var i = 0; i < pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort.length; i++){
		switch(idFraction){
			case "1":
				sumComponent += Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].mainFractionData.unitOption.percent);
				break;
			case "2":
				sumComponent += Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].suitableFractionData.unitOption.percent);
				break;
			case "3":
				sumComponent += Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].weedFractionData.unitOption.percent);
				break;
		}
	}
	return sumComponent;
}
function sumComponentPieces_KGSort(idFraction, pageID){//+
	var sumComponent = 0;
	for(var i = 0; i < pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort.length; i++){
		switch(idFraction){
			case "1":
				sumComponent += Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].mainFractionData.unitOption.pieces_kg);
				break;
			case "2":
				sumComponent += Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].suitableFractionData.unitOption.pieces_kg);
				break;
			case "3":
				sumComponent += Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].weedFractionData.unitOption.pieces_kg);
				break;
		}
	}
	return sumComponent;
}

//Создание клона первого листа

//Обновление значениий процентовок

function componentPercentUpdateSort(idFraction){//+
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
				var firstElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[0].mainFractionData.unitOption;
				var targetElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].mainFractionData.unitOption;
				var lastElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort.length-1].mainFractionData.unitOption;
				// percent = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[0].mainFractionData.unitOption.percent;
				break;
			case "2":
				var firstElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[0].suitableFractionData.unitOption;
				var targetElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].suitableFractionData.unitOption;
				var lastElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort.length-1].suitableFractionData.unitOption;
				// percent = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[0].suitableFractionData.unitOption.percent;
				break;
			case "3":
				var firstElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[0].weedFractionData.unitOption;
				var targetElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].weedFractionData.unitOption;
				var lastElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort.length-1].weedFractionData.unitOption;
				// percent = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[0].weedFractionData.unitOption.percent;
				break;
		}
		
		//Основное значение
		if(idRow == 1){
			targetElement.percent = percent.value <= Number(targetElement.percent) + Number(lastElement.percent) ? Number(percent.value).toFixed(2) : Number(Number(targetElement.percent) + Number(lastElement.percent)).toFixed(2)
			lastElement.percent = lastElement.percent - (sumComponentPercentSort(idFraction, pageID) - 100);
		}
		else{
			targetElement.percent = percent.value <= Number(firstElement.percent) + Number(targetElement.percent) ? Number(percent.value).toFixed(2) : Number(Number(firstElement.percent) + Number(targetElement.percent)).toFixed(2)
			firstElement.percent = firstElement.percent - (sumComponentPercentSort(idFraction, pageID) - 100);
		}
		
		for(var i = 1; i <= pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort.length; i++){
			var DropdownBlock = document.getElementById("massDropdown_"+ idFraction + "_" + i + "_" + pageID + '_' + 'S');
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
					percent.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.unitOption.percent).toFixed(2);
					break;
				case "2":
					percent.value =  Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.unitOption.percent).toFixed(2);
					break;
				case "3":
					percent.value =  Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.unitOption.percent).toFixed(2);
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
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.unitOption.percent = percent.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.unitOption.gram = gram.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.unitOption.pieces = pieces.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.hingeMass = HingeMass.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.pieces_1000 = Pieces_1000.value;
					break;
				case "2":
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.unitOption.percent = percent.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.unitOption.gram = gram.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.unitOption.pieces = pieces.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.hingeMass = HingeMass.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.pieces_1000 = Pieces_1000.value;
					break;
				case "3":
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.unitOption.percent = percent.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.unitOption.gram = gram.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.unitOption.pieces = pieces.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.hingeMass = HingeMass.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.pieces_1000 = Pieces_1000.value;
					break;
			}
			if(DropdownBlock.parentNode.parentNode.children[0].children[0].children[0].type == 'number'){
				DropdownBlock.parentNode.parentNode.children[0].children[0].children[0].value = percent.value;
				DropdownBlock.parentNode.parentNode.children[1].children[0].value = percent.value + " %";
			}
			
		}
		requirementsPurityUpdateSort(pageID);
		updatePPM_ComponentsSort(idFraction, pageID);
	}
}

//Обновление значениий граммовок
function componentGramUpdateSort(idFraction){//+
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
				var firstElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[0].mainFractionData.unitOption;
				var targetElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].mainFractionData.unitOption;
				var lastElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort.length-1].mainFractionData.unitOption;
				break;
			case "2":
				var firstElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[0].suitableFractionData.unitOption;
				var targetElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].suitableFractionData.unitOption;
				var lastElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort.length-1].suitableFractionData.unitOption;
				break;
			case "3":
				var firstElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[0].weedFractionData.unitOption;
				var targetElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].weedFractionData.unitOption;
				var lastElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort.length-1].weedFractionData.unitOption;
				break;
		}

		//Основное значение
		if(idRow == 1){
			targetElement.percent = percent.value <= Number(targetElement.percent) + Number(lastElement.percent) ? Number(percent.value).toFixed(2) : Number(Number(targetElement.percent) + Number(lastElement.percent)).toFixed(2)
			lastElement.percent = lastElement.percent - (sumComponentPercentSort(idFraction, pageID) - 100);
		}
		else{
			targetElement.percent = percent.value <= Number(firstElement.percent) + Number(targetElement.percent) ? Number(percent.value).toFixed(2) : Number(Number(firstElement.percent) + Number(targetElement.percent)).toFixed(2)
			firstElement.percent = firstElement.percent - (sumComponentPercentSort(idFraction, pageID) - 100);
		}
		
		for(var i = 1; i <= pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort.length; i++){
			var DropdownBlock = document.getElementById("massDropdown_" + idFraction + "_" + i + "_" + pageID + '_' + 'S');
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
					percent.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.unitOption.percent).toFixed(2);
					break;
				case "2":
					percent.value =  Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.unitOption.percent).toFixed(2);
					break;
				case "3":
					percent.value =  Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.unitOption.percent).toFixed(2);
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
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.unitOption.percent = percent.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.unitOption.gram = gram.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.unitOption.pieces = pieces.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.hingeMass = HingeMass.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.pieces_1000 = Pieces_1000.value;
					break;
				case "2":
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.unitOption.percent = percent.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.unitOption.gram = gram.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.unitOption.pieces = pieces.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.hingeMass = HingeMass.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.pieces_1000 = Pieces_1000.value;
					break;
				case "3":
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.unitOption.percent = percent.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.unitOption.gram = gram.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.unitOption.pieces = pieces.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.hingeMass = HingeMass.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.pieces_1000 = Pieces_1000.value;
					break;
			}
			DropdownBlock.parentNode.parentNode.children[0].children[0].children[0].value = percent.value;
			DropdownBlock.parentNode.parentNode.children[1].children[0].value = percent.value + " %"
		}
		requirementsPurityUpdateSort(pageID);
		updatePPM_ComponentsSort(idFraction, pageID);
	}
}

function componentPiecesUpdateSort(idFraction){//+
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
				var firstElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[0].mainFractionData.unitOption;
				var targetElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].mainFractionData.unitOption;
				var lastElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort.length-1].mainFractionData.unitOption;
				break;
			case "2":
				var firstElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[0].suitableFractionData.unitOption;
				var targetElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].suitableFractionData.unitOption;
				var lastElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort.length-1].suitableFractionData.unitOption;
				break;
			case "3":
				var firstElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[0].weedFractionData.unitOption;
				var targetElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].weedFractionData.unitOption;
				var lastElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort.length-1].weedFractionData.unitOption;
				break;
		}

		//Основное значение
		if(idRow == 1){
			targetElement.percent = percent.value <= Number(targetElement.percent) + Number(lastElement.percent) ? Number(percent.value).toFixed(2) : Number(Number(targetElement.percent) + Number(lastElement.percent)).toFixed(2)
			lastElement.percent = lastElement.percent - (sumComponentPercentSort(idFraction, pageID) - 100);
		}
		else{
			targetElement.percent = percent.value <= Number(firstElement.percent) + Number(targetElement.percent) ? Number(percent.value).toFixed(2) : Number(Number(firstElement.percent) + Number(targetElement.percent)).toFixed(2)
			firstElement.percent = firstElement.percent - (sumComponentPercentSort(idFraction, pageID) - 100);
		}
		
		for(var i = 1; i <= pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort.length; i++){
			var DropdownBlock = document.getElementById("massDropdown_"+idFraction+"_"+i+"_"+pageID + '_' + 'S');
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
					percent.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.unitOption.percent).toFixed(2);
					break;
				case "2":
					percent.value =  Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.unitOption.percent).toFixed(2);
					break;
				case "3":
					percent.value =  Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.unitOption.percent).toFixed(2);
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
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.unitOption.percent = percent.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.unitOption.gram = gram.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.unitOption.pieces = pieces.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.hingeMass = HingeMass.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.pieces_1000 = Pieces_1000.value;
					break;
				case "2":
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.unitOption.percent = percent.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.unitOption.gram = gram.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.unitOption.pieces = pieces.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.hingeMass = HingeMass.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.pieces_1000 = Pieces_1000.value;
					break;
				case "3":
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.unitOption.percent = percent.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.unitOption.gram = gram.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.unitOption.pieces = pieces.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.hingeMass = HingeMass.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.pieces_1000 = Pieces_1000.value;
					break;
			}
			DropdownBlock.parentNode.parentNode.children[0].children[0].children[0].value = percent.value;
			DropdownBlock.parentNode.parentNode.children[1].children[0].value = percent.value + " %"
		}
		requirementsPurityUpdateSort(pageID);
		updatePPM_ComponentsSort(idFraction, pageID);
	}
}
//Обновление значениий штук/кг
function componentPiecesKgUpdateSort(idFraction){//+
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
				var firstElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[0].mainFractionData.unitOption;
				var targetElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].mainFractionData.unitOption;
				var lastElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort.length-1].mainFractionData.unitOption;
				break;
			case "2":
				var firstElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[0].suitableFractionData.unitOption;
				var targetElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].suitableFractionData.unitOption;
				var lastElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort.length-1].suitableFractionData.unitOption;
				break;
			case "3":
				var firstElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[0].weedFractionData.unitOption;
				var targetElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].weedFractionData.unitOption;
				var lastElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort.length-1].weedFractionData.unitOption;
				break;
		}

		//Основное значение
		if(idRow == 1){
			targetElement.percent = percent.value <= Number(targetElement.percent) + Number(lastElement.percent) ? Number(percent.value).toFixed(2) : Number(Number(targetElement.percent) + Number(lastElement.percent)).toFixed(2)
			lastElement.percent = lastElement.percent - (sumComponentPercentSort(idFraction, pageID) - 100);
		}
		else{
			targetElement.percent = percent.value <= Number(firstElement.percent) + Number(targetElement.percent) ? Number(percent.value).toFixed(2) : Number(Number(firstElement.percent) + Number(targetElement.percent)).toFixed(2)
			firstElement.percent = firstElement.percent - (sumComponentPercentSort(idFraction, pageID) - 100);
		}
		
		for(var i = 1; i <= pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort.length; i++){
			var DropdownBlock = document.getElementById("massDropdown_" + idFraction + "_" + i + "_" + pageID + '_' + 'S');
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
					percent.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.unitOption.percent).toFixed(2);
					break;
				case "2":
					percent.value =  Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.unitOption.percent).toFixed(2);
					break;
				case "3":
					percent.value =  Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.unitOption.percent).toFixed(2);
					break;
			}

			//Остальные значения
			gram.value = Number(HingeMass.value / 100 * percent.value).toFixed(2);
			pieces.value = Number(gram.value / (Pieces_1000.value / 1000)).toFixed(2);
			pieces_kg.value =  Number((percent.value * 10) / (Pieces_1000.value / 1000)).toFixed(2);
			ppm.value = Number(1000000 / sumComponentPieces_KGSort(idFraction, pageID) * pieces_kg.value);
			//Значение компонента
			switch(idFraction){
				case "1":
					//Значение компонента
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.unitOption.percent = percent.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.unitOption.gram = gram.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.unitOption.pieces = pieces.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.hingeMass = HingeMass.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.pieces_1000 = Pieces_1000.value;
					break;
				case "2":
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.unitOption.percent = percent.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.unitOption.gram = gram.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.unitOption.pieces = pieces.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.hingeMass = HingeMass.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.pieces_1000 = Pieces_1000.value;
					break;
				case "3":
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.unitOption.percent = percent.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.unitOption.gram = gram.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.unitOption.pieces = pieces.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.hingeMass = HingeMass.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.pieces_1000 = Pieces_1000.value;
					break;
			}
			DropdownBlock.parentNode.parentNode.children[0].children[0].children[0].value = percent.value;
			DropdownBlock.parentNode.parentNode.children[1].children[0].value = percent.value + " %"
		}
		requirementsPurityUpdateSort(pageID);
		updatePPM_ComponentsSort(idFraction, pageID);
	}
}
//Обновление значениий промилий
function componentPPM_UpdateSort(idFraction){//+
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
		
		pieces_kg.value = Number(ppm.value / (1000000 / sumComponentPieces_KGSort(idFraction, pageID))).toFixed(2);
		percent.value = Number((pieces_kg.value / 10) * (Pieces_1000.value / 1000)).toFixed(2);
		
		switch(idFraction){
			case "1":
				var firstElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[0].mainFractionData.unitOption;
				var targetElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].mainFractionData.unitOption;
				var lastElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort.length-1].mainFractionData.unitOption;
				break;
			case "2":
				var firstElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[0].suitableFractionData.unitOption;
				var targetElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].suitableFractionData.unitOption;
				var lastElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort.length-1].suitableFractionData.unitOption;
				break;
			case "3":
				var firstElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[0].weedFractionData.unitOption;
				var targetElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].weedFractionData.unitOption;
				var lastElement = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[ProtocolSort.length-1].weedFractionData.unitOption;
				break;
		}

		//Основное значение
		if(idRow == 1){
			targetElement.percent = percent.value <= Number(targetElement.percent) + Number(lastElement.percent) ? Number(percent.value).toFixed(2) : Number(Number(targetElement.percent) + Number(lastElement.percent)).toFixed(2)
			lastElement.percent = lastElement.percent - (sumComponentPercentSort(idFraction, pageID) - 100);
		}
		else{
			targetElement.percent = percent.value <= Number(firstElement.percent) + Number(targetElement.percent) ? Number(percent.value).toFixed(2) : Number(Number(firstElement.percent) + Number(targetElement.percent)).toFixed(2)
			firstElement.percent = firstElement.percent - (sumComponentPercentSort(idFraction, pageID) - 100);
		}
		
		for(var i = 1; i <= pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort.length; i++){
			var DropdownBlock = document.getElementById("massDropdown_" + idFraction + "_" + i + "_" + pageID + '_' + 'S');
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
					percent.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.unitOption.percent).toFixed(2);
					break;
				case "2":
					percent.value =  Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.unitOption.percent).toFixed(2);
					break;
				case "3":
					percent.value =  Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.unitOption.percent).toFixed(2);
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
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.unitOption.percent = percent.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.unitOption.gram = gram.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.unitOption.pieces = pieces.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.hingeMass = HingeMass.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.pieces_1000 = Pieces_1000.value;
					break;
				case "2":
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.unitOption.percent = percent.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.unitOption.gram = gram.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.unitOption.pieces = pieces.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.hingeMass = HingeMass.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.pieces_1000 = Pieces_1000.value;
					break;
				case "3":
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.unitOption.percent = percent.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.unitOption.gram = gram.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.unitOption.pieces = pieces.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.hingeMass = HingeMass.value;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.pieces_1000 = Pieces_1000.value;
					break;
			}
			DropdownBlock.parentNode.parentNode.children[0].children[0].children[0].value = percent.value;
			DropdownBlock.parentNode.parentNode.children[1].children[0].value = percent.value + " %"
		}
		requirementsPurityUpdateSort(pageID);
		updatePPM_ComponentsSort(idFraction, pageID);
	}
}

function updateHingeMassSort(idFraction, pageID){//+
	return function e(){
		for(var i = 1; i <= pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort.length; i++){
			var DropdownBlock = document.getElementById("massDropdown_" + idFraction + "_" + i + "_" + pageID + '_' + 'S');
			var HingeMass = DropdownBlock.children[2].children[0].children[0];
		
			pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.hingeMass = this.value;
			HingeMass.value = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.hingeMass;
		}
	}
}
function updatePieces_1000Sort(idRow, pageID){//+
	return function e(){
		for(var idFraction = 1; idFraction <= 3; idFraction++){ 
			var DropdownBlock = document.getElementById("massDropdown_" + idFraction + "_" + idRow + "_" + pageID + '_' + 'S');
			var Pieces_1000	= DropdownBlock.children[4].children[0].children[0];
			
			pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].mainFractionData.pieces_1000 = this.value;
			pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].suitableFractionData.pieces_1000 = this.value;
			pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].weedFractionData.pieces_1000 = this.value;
			
			Pieces_1000.value = this.value;
		}
	}
}

function updateRemovedPercentSort(pageID){//+
	if(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort.length){
		pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[0].mainFractionData.unitOption.percent = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[0].mainFractionData.unitOption.percent - (sumComponentPercentSort("1", pageID) - 100);
		pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[0].suitableFractionData.unitOption.percent = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[0].suitableFractionData.unitOption.percent - (sumComponentPercentSort("2", pageID) - 100);
		pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[0].weedFractionData.unitOption.percent = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[0].weedFractionData.unitOption.percent - (sumComponentPercentSort("3", pageID) - 100);
		
		for(var idFraction = 1; idFraction <= 3; idFraction++){ 
			for(var i = 1; i <= pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort.length; i++){
				var DropdownBlock = document.getElementById("massDropdown_" + idFraction + "_" + i + "_" + pageID + '_' + 'S');
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
						percent.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.unitOption.percent).toFixed(2);
						break;
					case "2":
						percent.value =  Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.unitOption.percent).toFixed(2);
						break;
					case "3":
						percent.value =  Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.unitOption.percent).toFixed(2);
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
						pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.unitOption.percent = percent.value;
						pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.unitOption.gram = gram.value;
						pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.unitOption.pieces = pieces.value;
						pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.unitOption.pieces_kg = pieces_kg.value;
						pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.unitOption.ppm = ppm.value;
						
						pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.hingeMass = HingeMass.value;
						pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.pieces_1000 = Pieces_1000.value;
						break;
					case "2":
						pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.unitOption.percent = percent.value;
						pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.unitOption.gram = gram.value;
						pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.unitOption.pieces = pieces.value;
						pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.unitOption.pieces_kg = pieces_kg.value;
						
						pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.hingeMass = HingeMass.value;
						pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.pieces_1000 = Pieces_1000.value;
						break;
					case "3":
						pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.unitOption.percent = percent.value;
						pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.unitOption.gram = gram.value;
						pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.unitOption.pieces = pieces.value;
						pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.unitOption.pieces_kg = pieces_kg.value;
						
						pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.hingeMass = HingeMass.value;
						pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.pieces_1000 = Pieces_1000.value;
						break;
				}
				if(DropdownBlock.parentNode.parentNode.children[0].children[0].children[0].type == 'number'){
					DropdownBlock.parentNode.parentNode.children[0].children[0].children[0].value = percent.value;
					DropdownBlock.parentNode.parentNode.children[1].children[0].value = percent.value + " %"
				}
				
			}
			updatePPM_ComponentsSort(String(idFraction), pageID);
		}
		requirementsPurityUpdateSort(pageID);
	}
}
function updatePPM_ComponentsSort(idFraction, pageID){//+
	for(var i = 1; i <= pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort.length; i++){
		var DropdownBlock = document.getElementById("massDropdown_" + idFraction + "_" + i + "_" + pageID + '_' + 'S');
		var MainScrollBlock = DropdownBlock.children[0];

		//Основные параметры
		var pieces_kg = MainScrollBlock.children[3].children[0];
		var ppm = MainScrollBlock.children[4].children[0]

		ppm.value = Number(1000000 / sumComponentPieces_KGSort(idFraction, pageID) * pieces_kg.value).toFixed(2);
		
		switch(idFraction){
			case "1":
				pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.unitOption.ppm = ppm.value;
				break;
			case "2":
				pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.unitOption.ppm = ppm.value;
				break;
			case "3":
				pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.unitOption.ppm = ppm.value;
				break;
		}
	}
	requirementsPercentUpdateSort(pageID);
	setupDefaulUnitValueSort(pageID);
	updateDataSort(pageID);
}
function updateDataSort(pageID){
	var acceptFractionMass = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.mass;
	var rejectFractionMass = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.mass;
	var acceptFractionPurity = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.purity;
	var rejectFractionPurity = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.purity;
	
	var accept = acceptFractionMass/100*(acceptFractionPurity);
	var weedInAccept = acceptFractionMass/100*(100-acceptFractionPurity);
	var reject = rejectFractionMass/100*(100-rejectFractionPurity);
	var productInReject = rejectFractionMass/100*(rejectFractionPurity);

	chartData = [accept,weedInAccept,reject,productInReject];
	handler(chartData);
}
function requirementsPercentUpdateSort(pageID){//+
	var sustamentID = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.ColumnState.indexOf("active");
	
	var outputGood = document.getElementById('outputGood_' + pageID + '_' + 'S');
	var percentGood = document.getElementById('percentGood_' + pageID + '_' + 'S');
	var outputTrash = document.getElementById('outputTrash_' + pageID + '_' + 'S');
	var percentTrash = document.getElementById('percentTrash_' + pageID + '_' + 'S');
	switch(sustamentID){
		case 0:
			if(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.ColumnState[1] != "lock" || pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.ColumnState[2] != "lock"){
				percentGood.value = percentGood.value < 0 ? Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2) : Number(percentGood.value).toFixed(2);
				pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.percent_exit = Number(percentGood.value) <= requirementsMaxExitSort("suitableFractionData", pageID) ? Number(percentGood.value) : requirementsMaxExitSort("suitableFractionData", pageID);
				
				percentTrash.value = percentTrash.value < 0 ? Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.percent_exit).toFixed(2) : Number(percentTrash.value).toFixed(2);
				pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.percent_exit = Number(percentTrash.value) <= requirementsMaxExitSort("weedFractionData", pageID) ? Number(percentTrash.value) : requirementsMaxExitSort("weedFractionData", pageID);
			}
			break;
		case 1:
			percentGood.value = percentGood.value < 0 ? Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2) : Number(percentGood.value).toFixed(2);
			pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.percent_exit = Number(percentGood.value) <= requirementsMaxExitSort("suitableFractionData", pageID) ? Number(percentGood.value) : requirementsMaxExitSort("suitableFractionData", pageID);
			
			pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.percent_exit = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.percent_exit - pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.percent_exit);
			
			pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.mass = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass / pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.percent_exit * pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.percent_exit);
			pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.mass = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass / pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.percent_exit * pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.percent_exit);
			
			outputGood.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.mass).toFixed(3);
			outputTrash.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.mass).toFixed(3);
			percentGood.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2);
			percentTrash.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.percent_exit).toFixed(2);
			break;
		case 2:
			percentTrash.value = percentTrash.value < 0 ? Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.percent_exit).toFixed(2) : Number(percentTrash.value).toFixed(2);
			pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.percent_exit = Number(percentTrash.value) <= requirementsMaxExitSort("weedFractionData", pageID) ? Number(percentTrash.value) : requirementsMaxExitSort("weedFractionData", pageID);
			
			pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.percent_exit = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.percent_exit - pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.percent_exit);
			
			pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.mass = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass / pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.percent_exit * pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.percent_exit);
			pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.mass = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass / pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.percent_exit * pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.percent_exit);
			
			outputGood.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.mass).toFixed(3);
			outputTrash.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.mass).toFixed(3);
			percentGood.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2);
			percentTrash.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.percent_exit).toFixed(2);
			break;
	}
	setupFractionExitSort(pageID);
	handler(chartData);
}
function setupFractionExitSort(pageID){//+
	var __suitable = Number(requirementsMaxExitSort("suitableFractionData", pageID));
	var __weed = Number(requirementsMaxExitSort("weedFractionData", pageID));
	
	var outputGood = document.getElementById('outputGood_' + pageID + '_' + 'S');
	var percentGood = document.getElementById('percentGood_' + pageID + '_' + 'S');
	var outputTrash = document.getElementById('outputTrash_' + pageID + '_' + 'S');
	var percentTrash = document.getElementById('percentTrash_' + pageID + '_' + 'S');
	
	var sustamentID = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.ColumnState.indexOf("active");
	switch(sustamentID){
		case 0:
			if(Number(percentGood.value) > __suitable){
				pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.percent_exit = __suitable;
				pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.percent_exit = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.percent_exit - pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.percent_exit);
					
				pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.mass = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass / pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.percent_exit * pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.percent_exit);
				pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.mass = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass / pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.percent_exit * pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.percent_exit);
				
				outputGood.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.mass).toFixed(3);
				outputTrash.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.mass).toFixed(3);
				percentGood.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2);
				percentTrash.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.percent_exit).toFixed(2);
			}
			if(Number(percentTrash.value) > __weed){
				pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.percent_exit = __weed;
				pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.percent_exit = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.percent_exit - pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.percent_exit);
				
				pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.mass = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass / pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.percent_exit * pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.percent_exit);
				pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.mass = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass / pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.percent_exit * pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.percent_exit);
				
				outputGood.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.mass).toFixed(3);
				outputTrash.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.mass).toFixed(3);
				percentGood.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2);
				percentTrash.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.percent_exit).toFixed(2);
			}
			if(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.ColumnState[1] == "unlock"){
				for(var i = 0; i < pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort.length; i++){
					var mainComponentMass = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass / 100 * pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].mainFractionData.unitOption.percent).toFixed(5);
					var weedComponentMass = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.mass / 100 * pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].weedFractionData.unitOption.percent).toFixed(5);
					
					var suitableComponentMass = Number(mainComponentMass - weedComponentMass);
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].suitableFractionData.unitOption.percent = suitableComponentMass / (pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.mass / 100);
					
					if(isNaN(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].suitableFractionData.unitOption.percent) || pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].suitableFractionData.unitOption.percent == "Infinity" || pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].suitableFractionData.unitOption.percent == "-Infinity")
						pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].suitableFractionData.unitOption.percent = i == 0 ? 100 : 0;
					
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].suitableFractionData.unitOption.percent = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].suitableFractionData.unitOption.percent < 0 ? 0 : pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].suitableFractionData.unitOption.percent;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].suitableFractionData.unitOption.percent = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].suitableFractionData.unitOption.percent > 100 ? 100 : pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].suitableFractionData.unitOption.percent;
				
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].suitableFractionData.unitOption.percent = parseFloat(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].suitableFractionData.unitOption.percent).toFixed(2);
				}
			}
			else if(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.ColumnState[2] == "unlock"){
				for(var i = 0; i < pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort.length; i++){
					var mainComponentMass = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass / 100 * pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].mainFractionData.unitOption.percent).toFixed(5);
					var suitableComponentMass = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.mass / 100 * pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].suitableFractionData.unitOption.percent).toFixed(5);
					
					var weedComponentMass = Number(mainComponentMass - suitableComponentMass);
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].weedFractionData.unitOption.percent = weedComponentMass / (pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.mass / 100);
					
					if(isNaN(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].weedFractionData.unitOption.percent) || pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].weedFractionData.unitOption.percent == "Infinity" || pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].weedFractionData.unitOption.percent == "-Infinity")
						pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].weedFractionData.unitOption.percent = i != pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort.length-1 ? 0 : 100;
					
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].weedFractionData.unitOption.percent = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].weedFractionData.unitOption.percent < 0 ? 0 : pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].weedFractionData.unitOption.percent;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].weedFractionData.unitOption.percent = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].weedFractionData.unitOption.percent > 100 ? 100 : pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].weedFractionData.unitOption.percent;
				
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].weedFractionData.unitOption.percent = parseFloat(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].weedFractionData.unitOption.percent).toFixed(2);
				}
			}
			break;
		case 1:
			if(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.ColumnState[0] == "unlock"){
				for(var i = 0; i < pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort.length; i++){
					var suitableComponentMass = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.mass / 100 * pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].suitableFractionData.unitOption.percent).toFixed(5);
					var weedComponentMass = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.mass / 100 * pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].weedFractionData.unitOption.percent).toFixed(5);
					
					var mainComponentMass =  Number(suitableComponentMass) +  Number(weedComponentMass);
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].mainFractionData.unitOption.percent = mainComponentMass / (pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass / 100);
					
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].mainFractionData.unitOption.percent = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].mainFractionData.unitOption.percent < 0 ? 0 : pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].mainFractionData.unitOption.percent;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].mainFractionData.unitOption.percent = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].mainFractionData.unitOption.percent > 100 ? 100 : pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].mainFractionData.unitOption.percent;
				
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].mainFractionData.unitOption.percent = parseFloat(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].mainFractionData.unitOption.percent).toFixed(2);
				}
			}
			else{
				//suitableFractionPercent();
				for(var i = 0; i < pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort.length; i++){
					var suitableComponentMass = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.mass / 100 * pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].suitableFractionData.unitOption.percent).toFixed(5);
					var mainComponentMass = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass / 100 * pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].mainFractionData.unitOption.percent).toFixed(5);
					
					var weedComponentMass =  Number(mainComponentMass - suitableComponentMass);
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].weedFractionData.unitOption.percent = weedComponentMass / (pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.mass / 100);
					
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].weedFractionData.unitOption.percent = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].weedFractionData.unitOption.percent < 0 ? 0 : pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].weedFractionData.unitOption.percent;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].weedFractionData.unitOption.percent = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].weedFractionData.unitOption.percent > 100 ? 100 : pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].weedFractionData.unitOption.percent;
				
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].weedFractionData.unitOption.percent = parseFloat(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].weedFractionData.unitOption.percent).toFixed(2);
				}
			}
			break;
		case 2:
			if(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.ColumnState[0] == "unlock"){
				for(var i = 0; i < pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort.length; i++){
					var suitableComponentMass = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.mass / 100 * pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].suitableFractionData.unitOption.percent).toFixed(5);
					var weedComponentMass = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.mass / 100 * pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].weedFractionData.unitOption.percent).toFixed(5);
					
					var mainComponentMass =  Number(suitableComponentMass) +  Number(weedComponentMass);
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].mainFractionData.unitOption.percent = mainComponentMass / (pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass / 100).toFixed(5);
					
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].mainFractionData.unitOption.percent = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].mainFractionData.unitOption.percent < 0 ? 0 : pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].mainFractionData.unitOption.percent;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].mainFractionData.unitOption.percent = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].mainFractionData.unitOption.percent > 100 ? 100 : pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].mainFractionData.unitOption.percent;
					
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].mainFractionData.unitOption.percent = parseFloat(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].mainFractionData.unitOption.percent).toFixed(2);
				}
			}
			else{
				//weedFractionPercent();
				for(var i = 0; i < pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort.length; i++){
					var weedComponentMass = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.mass / 100 * pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].weedFractionData.unitOption.percent).toFixed(5);
					var mainComponentMass = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass / 100 * pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].mainFractionData.unitOption.percent).toFixed(5);
					
					var suitableComponentMass =  Number(mainComponentMass - weedComponentMass);
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].suitableFractionData.unitOption.percent = suitableComponentMass / (pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.mass / 100);
					
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].suitableFractionData.unitOption.percent = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].weedFractionData.unitOption.percent < 0 ? 0 : pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].suitableFractionData.unitOption.percent;
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].suitableFractionData.unitOption.percent = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].weedFractionData.unitOption.percent > 100 ? 100 : pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].suitableFractionData.unitOption.percent;
					
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].suitableFractionData.unitOption.percent = parseFloat(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].suitableFractionData.unitOption.percent).toFixed(2);
				}
			}
			break;
	}
}
function requirementsMaxExitSort(fraction, pageID){//+
	var minFractionMass = Number(Infinity);
	for(var i = 0; i < pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort.length; i++){
		var requirementsComponentMass = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass / 100 * pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i].mainFractionData.unitOption.percent);
		
		var maxFractionComponentMass = Number(requirementsComponentMass / Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i][fraction].unitOption.percent) * 100);
		
		if(maxFractionComponentMass == "NaN" || maxFractionComponentMass == "Infinity" || maxFractionComponentMass == "-Infinity")
			maxFractionComponentMass = 0;
		
		if(maxFractionComponentMass <= minFractionMass && maxFractionComponentMass != 0)
			minFractionMass = maxFractionComponentMass
	}
	//Назначение максимальнового выхода для фракции
	var fractionMaxExitPercent = minFractionMass/pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass * 100;
	fractionMaxExitPercent = (fractionMaxExitPercent == "NaN" || fractionMaxExitPercent == "Infinity" || fractionMaxExitPercent == "-Infinity") ? 0 : fractionMaxExitPercent;
	
	return Number(fractionMaxExitPercent).toFixed(2);
}
function setupTargetDefaltUnitSort(inputOptions, unit){//+
	return function e(){
		var pageID = inputOptions.parentNode.parentNode.parentNode.parentNode.parentNode.id.split('_')[1];
		var targetBlock = inputOptions.parentNode.parentNode.children;
		if (inputOptions.style.backgroundColor != "") {
			for (var i = 0; i < targetBlock.length; i++) {
				targetBlock[i].style.display = "";
				inputOptions.style.backgroundColor = "";
			}
			pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.DefaultUnit = "percent";
		}
		else {
			for (var i = 0; i < targetBlock.length; i++) {
				targetBlock[i].style.display = "none";
			}

			this.parentNode.style.display = "";
			inputOptions.style.backgroundColor = "#ffb23f";
			pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.DefaultUnit = unit;
		}
		setupDefaulUnitValueSort(pageID);
	}
}
function setupDefaulUnitValueSort(pageID){//+
	//Дефолтный тескт
	var text = returnUnitDefaultText(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.DefaultUnit);
	
	//цикл назначение дефолных значений
	for(var i = 1; i <= pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort.length; i++){
		for(var idFraction = 1; idFraction <= 3; idFraction++){
			var massInput = document.getElementById("massInput_" + idFraction + "_" + i + "_" + pageID + '_' + 'S');
			var massInputBlock = document.getElementById("massInputBlock_" + idFraction + "_" + i + "_" + pageID + '_' + 'S');
			var duplicateMassInput = massInputBlock.children[0].children[0];
			var duplicateType = duplicateMassInput.type;

			const startType = duplicateMassInput.value;

			switch(String(idFraction)){
				case "1":
					if(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.selectUnitOption == null){
						massInput.value = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.unitOption[pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.DefaultUnit] + text;
						duplicateMassInput.value = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.unitOption[pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.DefaultUnit];
					}
					else{
						var selectUnitOption = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.selectUnitOption;
						var __text = returnUnitDefaultText(selectUnitOption);
						massInput.value = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.unitOption[selectUnitOption] + __text;
						duplicateMassInput.value = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].mainFractionData.unitOption[selectUnitOption];
					}
					break;
				case "2":
					if(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.selectUnitOption == null){
						massInput.value = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.unitOption[pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.DefaultUnit] + text;
						duplicateMassInput.value = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.unitOption[pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.DefaultUnit];
					}
					else{
						var selectUnitOption = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.selectUnitOption;
						var __text = returnUnitDefaultText(selectUnitOption);
						massInput.value = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.unitOption[selectUnitOption] + __text;
						duplicateMassInput.value = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].suitableFractionData.unitOption[selectUnitOption];
					}
					break;
				case "3":
					if(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.selectUnitOption == null){
						massInput.value = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.unitOption[pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.DefaultUnit] + text;
						duplicateMassInput.value = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.unitOption[pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.DefaultUnit];
					}
					else{
						var selectUnitOption = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.selectUnitOption;
						var __text = returnUnitDefaultText(selectUnitOption);
						massInput.value = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.unitOption[selectUnitOption] + __text;
						duplicateMassInput.value = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[i-1].weedFractionData.unitOption[selectUnitOption];
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
function CheckLockInputSort(element){//+
	return function e(){
		var el = document.getElementById(element);
		var element_id = el.id.split('_')[1];
		var pageID = el.id.split('_')[2];
		var activeEl;
		for(var i = 0; i< pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.ColumnState.length; i++){
			if(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.ColumnState[i] == 'active'){
				activeEl = i;
				break;
			}
		}
		switch(activeEl){
			case 0:            
				var activeEl = element_id;
				var passiveEl = element_id == '2' ?  '3' : '2';
				pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.ColumnState[activeEl-1] =  pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.ColumnState[activeEl-1]  != 'unlock' ? 'unlock' : 'lock';
				pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.ColumnState[passiveEl-1] =  pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.ColumnState[activeEl-1]  != 'unlock' ? 'unlock' : 'lock';
				break;
			case 1:
				var activeEl = element_id;
				var passiveEl = element_id == '1' ?  '3' : '1';
				pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.ColumnState[activeEl-1] =  pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.ColumnState[activeEl-1]  != 'unlock' ? 'unlock' : 'lock';
				pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.ColumnState[passiveEl-1] =  pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.ColumnState[activeEl-1]  != 'unlock' ? 'unlock' : 'lock';
				break;
			case 2:
				var activeEl = element_id;
				var passiveEl = element_id == '1' ?  '2' : '1';
				pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.ColumnState[activeEl-1] =  pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.ColumnState[activeEl-1]  != 'unlock' ? 'unlock' : 'lock';
				pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.ColumnState[passiveEl-1] =  pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.ColumnState[activeEl-1]  != 'unlock' ? 'unlock' : 'lock';
				break;
		}
		
		setupIMGSort(pageID);
	}       
}
function setupIMGSort(pageID){//+
    for(var i = 0; i< pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.ColumnState.length; i++){
        var img = document.getElementById('Lock_' + (i+1) + '_' + pageID + '_' + 'S');
        var parent = document.getElementById('fractionLockValue_' + (i+1) + '_' + pageID + '_' + 'S');
        switch(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.ColumnState[i]){
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
function switchDropdownMassSort(element){
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
				var component = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].mainFractionData;
				break;
			case "2":
				var component = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].suitableFractionData;
				break;
			case "3":
				var component = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].weedFractionData;
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
		setupDefaulUnitValueSort(pageID);
	}
	//Добавление слушателя на элементы ниспадающего списка
	for(var i = 0; i < sliderBlock.children.length; i++){
		sliderBlock.children[i].children[1].addEventListener("click", e);
	}
	for(var i = 2; i <= 3; i++){
		var newID = "massDropdown_" + i + '_' + element.split('_')[2] + '_' + element.split('_')[3] + '_' + 'S';
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
					var component = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].mainFractionData;
					break;
				case "2":
					var component = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].suitableFractionData;
					break;
				case "3":
					var component = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].weedFractionData;
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
			setupDefaulUnitValueSort(pageID);
		}
		//Добавление слушателя на элементы ниспадающего списка
		for(var k = 0; k < sliderBlock.children.length; k++){
			sliderBlock.children[k].children[1].addEventListener("click", e);
		}
	}	
}

function requirementsBlockVievSort(idRow){
	return function e(){
		var defaultUnit = document.getElementById('defaultUnit_' + idRow + '_' + 'S');
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
function prepareDefaultUnitSort(idRow){
	var defaultUnit = document.getElementById('defaultUnit_' + idRow + '_' + 'S');
	var scrollBlock = defaultUnit.getElementsByClassName('scrollBlock')[0];
	var dropdownElements = scrollBlock.children;
	
	var percentInput = dropdownElements[0].children[0];
	var gramInput = dropdownElements[1].children[0];
	var piecesInput = dropdownElements[2].children[0];
	var pieces_kgInput = dropdownElements[3].children[0];
	var ppmInput = dropdownElements[4].children[0];
	
	percentInput.addEventListener("click", setupTargetDefaltUnitSort(percentInput, "percent"));
	gramInput.addEventListener("click", setupTargetDefaltUnitSort(gramInput, "gram"));
	piecesInput.addEventListener("click", setupTargetDefaltUnitSort(piecesInput, "pieces"));
	pieces_kgInput.addEventListener("click", setupTargetDefaltUnitSort(pieces_kgInput, "pieces_kg"));
	ppmInput.addEventListener("click", setupTargetDefaltUnitSort(ppmInput, "ppm"));
	switch(pageProtocolRow[ProtocolPage-1].pageSortRow[idRow-1].Sustatment.DefaultUnit){
		case"percent":
			percentInput.click();
			break;
		case"gram":
			gramInput.click();
			break;
		case"pieces":
			piecesInput.click();
			break;
		case"pieces_kg":
			pieces_kgInput.click();
			break;
		case"ppm":
			ppmInput.click();
			break;			
	}
	// percentInput.click();
}
function HideDropdownSort(idElement){
	return function e(){
		var button = document.getElementById(idElement);
		var pageID = button.id.split('_')[2];
		var idRow = button.id.split('_')[1];
		var main = button.parentNode.parentNode.parentNode;
		var dropdown = main.children[2];	
		var otherCheckbox = main.children[1].children[0].children[1];
		var clsInput_testRow = main.children[1].children[0].children[0];
		var classifierInpurResultElement = main.children[0].children[0];
		var lockBlock = document.getElementById('lockBlock_' + pageID + '_' + 'S');
		dropdown.style.display = "none";	
		resultTextView(clsInput_testRow, classifierInpurResultElement);
		classifierInpurResultElement.style.display="none";
		main.children[0].style.display="none";
		otherCheckbox.style.display="none";
		lockBlock.style.display = 'none';
		if(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].SearchProductResult.length == 0){
			for(var i = 0; i < classifierInpurResultElement.children.length; i++){
				pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].SearchProductResult.push(classifierInpurResultElement.children[i].textContent);
			}
		}
		else{
			pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].SearchProductResult = [];
			for(var i = 0; i < classifierInpurResultElement.children.length; i++){
				pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].SearchProductResult.push(classifierInpurResultElement.children[i].textContent);
			}
		}
	}
}
function ShowDropdownSort(idRow, pageID){
	return function e(){
		HideAllDropdownSort(pageID);
		var dropdown = document.getElementById('clsDropdown_' + idRow + '_' + pageID + '_' + 'S');
		var clsInput_test = document.getElementById('clsInput_test_' + idRow + '_' + pageID + '_' + 'S');
		var otherCheckbox = document.getElementById('addOption_' + idRow + '_' + pageID + '_' + 'S');
		var classifierInpurResult = document.getElementById('classifierInpurResult_' + idRow + '_' + pageID + '_' + 'S');
		var clsInputResultBlock = document.getElementById('clsInputResultBlock_' + idRow + '_' + pageID + '_' + 'S');
		var lockBlock = document.getElementById('lockBlock_' + pageID + '_' + 'S');

		dropdown.style.display="flex";
		clsInput_test.value = ""
		classifierInpurResult.style.display="flex";
		clsInputResultBlock.style.display="flex";
		otherCheckbox.style.display="flex";
		lockBlock.style.display = "none";

		StartInputSort(idRow, pageID);
	}
}
function refreshMassof1000Sort(idRow, pageID){
	return function e(){
		var product = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].SearchProductResult;
		var gramm1 = document.getElementById('massDropdown_1_'+ idRow + '_' + pageID + '_' + 'S').children[4].children[0].children[0];
		var gramm2 = document.getElementById('massDropdown_2_'+ idRow + '_' + pageID + '_' + 'S').children[4].children[0].children[0];
		var gramm3 = document.getElementById('massDropdown_3_'+ idRow + '_' + pageID + '_' + 'S').children[4].children[0].children[0];
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
function StartInputListenersSort(idRow, pageID){
	return function e(){
		var inputBlock = document.getElementById("clsInput_test_" + idRow + '_' + pageID + '_' + 'S');
		var clsDropdown = document.getElementById("clsDropdown_" + idRow + '_' + pageID + '_' + 'S');
		DoropdownOptionClearSort(idRow, pageID);
		if(inputBlock.value.length == 0){
			DropdownOptionDefaultSort(idRow, pageID);
		}
		else{
			DropdownSearchSort(idRow, pageID);
		}	
		clsDropdown.style.display="flex";
	}
}
function searchidSort(idRow, pageID){
	return function e(){
		var addOption = document.getElementById('addOption_' + idRow + '_' + pageID + '_' + 'S');
		var main = addOption.parentNode.parentNode.parentNode;
		var clsDropdown = main.children[2].id;
		addCustomOptionSort(idRow, pageID);
	}
}
function addCustomOptionSort(idRow, pageID){
	var dropdown = document.getElementById('clsDropdown_' + idRow + '_' + pageID + '_' + 'S');
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
			StartInputSort(idRow, pageID);
			// changeClassifierSort(idRow, pageID);
		});
		document.getElementById(classifierInpurResult).appendChild(object);
		sortResultBlockSort(idRow, pageID);
		// changeClassifierSort(idRow, pageID);
	}
	ShowDropdownSort(idRow, pageID);
}
function sortResultBlockSort(idRow, pageID){
	var resultBlock = document.getElementById('clsInputResultBlock_' + idRow + '_' + pageID + '_' + 'S');
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
function infoBlockSort(idRow, pageID){
	return function e(){
		if (document.getElementById('infoBlock_' + idRow + '_' + pageID + '_' + 'S').style.display=="none"){
			document.getElementById('infoBlock_' + idRow + '_' + pageID + '_' + 'S').style.display="flex";
			document.getElementById('infoBlockButton_' + idRow + '_' + pageID + '_' + 'S').style.transform = "rotate(180deg)";
			document.getElementById('infoTitle_' + idRow + '_' + pageID + '_' + 'S').style.borderBottomWidth="0px"
			document.getElementById('infoTitle_' + idRow + '_' + pageID + '_' + 'S').style.marginBottom="8px";
		}else{
			document.getElementById('infoBlock_' + idRow + '_' + pageID + '_' + 'S').style.display="none";
			document.getElementById('infoBlockButton_' + idRow + '_' + pageID + '_' + 'S').style.transform = "rotate(0deg)";
			document.getElementById('infoTitle_' + idRow + '_' + pageID + '_' + 'S').style.borderBottomWidth="1px"
			document.getElementById('infoTitle_' + idRow + '_' + pageID + '_' + 'S').style.marginBottom="0px";
		}
	}
}
function photoBlockSort(idRow, pageID){
	return function e(){
		if (document.getElementById("photoBlock_" + idRow + '_' + pageID + '_' + 'S').style.display=="none"){
			document.getElementById("photoBlock_" + idRow + '_' + pageID + '_' + 'S').style.display="flex";
			document.getElementById("photoBlockButton_" + idRow + '_' + pageID + '_' + 'S').style.transform = "rotate(180deg)";
			document.getElementById("photoTitle_" + idRow + '_' + pageID + '_' + 'S').style.borderBottomWidth="0px"
			document.getElementById("photoTitle_" + idRow + '_' + pageID + '_' + 'S').style.marginBottom="8px";
		}else{
			document.getElementById("photoBlock_" + idRow + '_' + pageID + '_' + 'S').style.display="none";
			document.getElementById("photoBlockButton_" + idRow + '_' + pageID + '_' + 'S').style.transform = "rotate(0deg)";
			document.getElementById("photoTitle_" + idRow + '_' + pageID + '_' + 'S').style.borderBottomWidth="1px"
			document.getElementById("photoTitle_" + idRow + '_' + pageID + '_' + 'S').style.marginBottom="0px";
		}
	}
}
function changeMassValueSort(mass, input){
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
					var selectUnitOption = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].mainFractionData.selectUnitOption;
					break;
				case "2":
					var selectUnitOption = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].suitableFractionData.selectUnitOption;
					break;
				case "3":
					var selectUnitOption = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].weedFractionData.selectUnitOption;
					break;
			}		
			selectUnitOption = selectUnitOption != null ? selectUnitOption : pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.DefaultUnit;			
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
			pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1][fraction].custom = valueType;
		}
		//Переключение для дефолтных единиц измерений.
		if(this.type != 'text'){
			switch(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.DefaultUnit){
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
			refreshSortData(pageID);
			refreshSortCheck = false;
		}	
	}
}

//создание клона листа
function addPageСustomerSort(){
	var row = sortProtocol_0.cloneNode(true);
	var idRow = Number(sortProtocol_MainBlock.children.length);

	row.style.display = '';
	row.id = 'sortProtocol_' + idRow;
	//  titleBlock
	row.children[0].children[2].children[0].children[1].id = 'companyName_' + idRow + '_' + 'S';
	row.children[0].children[2].children[0].children[1].value = idRow + 1;
	row.children[0].children[2].children[0].children[2].addEventListener('click', removePageCustomerSort(idRow));
	row.children[0].children[2].children[1].children[1].id = 'userManagerName_' + idRow + '_S';
	row.children[0].children[2].children[1].children[1].addEventListener('change', setTitleTableSR('userManagerName_' + idRow + '_S'));
	row.children[0].children[2].children[2].children[1].id = 'createDateProtocol_' + idRow + '_S';
	row.children[0].children[2].children[2].children[1].addEventListener('change', setTitleTableSR('createDateProtocol_' + idRow + '_S'));
	//  pageContent
	row.children[1].children[0].children[0].id = 'defaultUnit_' + idRow + '_' + 'S';
	row.children[1].children[0].children[0].children[0].children[1].addEventListener('click', requirementsBlockVievSort(idRow));
	row.children[1].children[0].children[1].id = 'fraction_' + idRow + '_' + 'S';
	row.children[1].children[0].children[1].children[1].id = 'fractionSource_1_' + idRow + '_' + 'S';
	row.children[1].children[0].children[1].children[1].children[0].children[0].id = 'Source_1_' + idRow + '_' + 'S';
	row.children[1].children[0].children[1].children[1].children[1].id = 'SortList_1_' + idRow + '_' + 'S';
	row.children[1].children[0].children[1].children[1].children[1].children[0].addEventListener('click', SortListContentBlockViev('SortListContent_1_' + idRow + '_' + 'S'));
	row.children[1].children[0].children[1].children[1].children[1].children[1].id = 'SortListContent_1_' + idRow + '_' + 'S';
	row.children[1].children[0].children[1].children[2].id = 'fractionSource_2_' + idRow + '_' + 'S';
	row.children[1].children[0].children[1].children[2].children[0].children[0].id = 'Source_2_' + idRow + '_' + 'S';
	row.children[1].children[0].children[1].children[3].id = 'fractionSource_3_' + idRow + '_' + 'S';
	row.children[1].children[0].children[1].children[3].children[0].children[0].id = 'Source_3_' + idRow + '_' + 'S';
	row.children[1].children[0].children[2].children[1].id = 'fractionMainValues_1_' + idRow + '_' + 'S'; 
	row.children[1].children[0].children[2].children[1].children[0].children[0].children[0].id = 'pureInpStart_' + idRow + '_' + 'S';
	row.children[1].children[0].children[2].children[1].children[0].children[0].children[1].id = 'pureInpStartFake_' + idRow + '_' + 'S';
	row.children[1].children[0].children[2].children[1].children[0].children[0].children[1].addEventListener('change', setFakeSort('pureInpStartFake_' + idRow + '_S', 1));
	row.children[1].children[0].children[2].children[1].children[1].children[0].children[0].id = 'outputStart_' + idRow + '_' + 'S';
	row.children[1].children[0].children[2].children[1].children[1].children[0].children[0].addEventListener('click', ShowUpsertDropdownSort('outputStart_' + idRow + '_' + 'S', idRow));
	row.children[1].children[0].children[2].children[1].children[1].children[0].children[1].id = 'outputStartButton_' + idRow + '_' + 'S';
	row.children[1].children[0].children[2].children[1].children[2].children[0].children[0].id = 'percentStart_' + idRow + '_' + 'S';
	row.children[1].children[0].children[2].children[2].id = 'fractionMainValues_2_' + idRow + '_' + 'S';
	row.children[1].children[0].children[2].children[2].children[0].children[0].children[0].id = 'pureInpGood_' + idRow + '_' + 'S';
	row.children[1].children[0].children[2].children[2].children[0].children[0].children[1].id = 'pureInpGoodFake_' + idRow + '_' + 'S';
	row.children[1].children[0].children[2].children[2].children[0].children[0].children[1].addEventListener('change', setFakeSort('pureInpGoodFake_' + idRow + '_S', 2));
	row.children[1].children[0].children[2].children[2].children[1].children[0].children[0].id = 'outputGood_' + idRow + '_' + 'S';
	row.children[1].children[0].children[2].children[2].children[1].children[0].children[0].addEventListener('click', ShowUpsertDropdownSort('outputGood_' + idRow + '_' + 'S', idRow));
	row.children[1].children[0].children[2].children[2].children[1].children[0].children[1].id = 'outputGoodButton_' + idRow + '_' + 'S';
	row.children[1].children[0].children[2].children[2].children[2].children[0].children[0].id = 'percentGood_' + idRow + '_' + 'S';
	row.children[1].children[0].children[2].children[2].children[2].children[0].children[0].addEventListener('click', ShowUpsertDropdownSort('percentGood_' + idRow + '_' + 'S', idRow));
	row.children[1].children[0].children[2].children[2].children[2].children[1].id = 'percentGoodButton_' + idRow + '_' + 'S';
	row.children[1].children[0].children[2].children[3].id = 'fractionMainValues_3_' + idRow + '_' + 'S';
	row.children[1].children[0].children[2].children[3].children[0].children[0].children[0].id = 'pureInpTrash_' + idRow + '_' + 'S';
	row.children[1].children[0].children[2].children[3].children[0].children[0].children[1].id = 'pureInpTrashFake_' + idRow + '_' + 'S';
	row.children[1].children[0].children[2].children[3].children[0].children[0].children[1].addEventListener('change', setFakeSort('pureInpTrashFake_' + idRow + '_S', 3));
	row.children[1].children[0].children[2].children[3].children[1].children[0].children[0].id = 'outputTrash_' + idRow + '_' + 'S';
	row.children[1].children[0].children[2].children[3].children[1].children[0].children[0].addEventListener('click', ShowUpsertDropdownSort('outputTrash_' + idRow + '_' + 'S', idRow));
	row.children[1].children[0].children[2].children[3].children[1].children[1].id = 'outputTrashButton_' + idRow + '_' + 'S';
	row.children[1].children[0].children[2].children[3].children[2].children[0].children[0].id = 'percentTrash_' + idRow + '_' + 'S';
	row.children[1].children[0].children[2].children[3].children[2].children[0].children[0].addEventListener('click', ShowUpsertDropdownSort('percentTrash_' + idRow + '_' + 'S', idRow));
	row.children[1].children[0].children[2].children[3].children[2].children[1].id = 'percentTrashButton_' + idRow + '_' + 'S';
	row.children[1].children[0].children[3].id = 'lockBlock_' + idRow + '_' + 'S';
	row.children[1].children[0].children[3].children[1].id = 'fractionLockValue_1_' + idRow + '_' + 'S';
	row.children[1].children[0].children[3].children[1].children[0].children[0].children[0].id = 'Lock_1_' + idRow + '_' + 'S';
	row.children[1].children[0].children[3].children[1].children[0].children[0].children[0].addEventListener('click', CheckLockInputSort('Lock_1_' + idRow + '_' + 'S'));
	row.children[1].children[0].children[3].children[2].id = 'fractionLockValue_2_' + idRow + '_' + 'S';
	row.children[1].children[0].children[3].children[2].children[0].children[0].children[0].id = 'Lock_2_' + idRow + '_' + 'S';
	row.children[1].children[0].children[3].children[2].children[0].children[0].children[0].addEventListener('click', CheckLockInputSort('Lock_2_' + idRow + '_' + 'S'));
	row.children[1].children[0].children[3].children[3].id = 'fractionLockValue_3_' + idRow + '_' + 'S';
	row.children[1].children[0].children[3].children[3].children[0].children[0].children[0].id = 'Lock_3_' + idRow + '_' + 'S';
	row.children[1].children[0].children[3].children[3].children[0].children[0].children[0].addEventListener('click', CheckLockInputSort('Lock_3_' + idRow + '_' + 'S'));
	row.children[1].children[0].children[4].id  = 'rows_' + idRow + '_' + 'S'; 
	row.children[1].children[0].children[4].children[0].id = 'mainRow_0' + '_' + idRow + '_' + 'S';
	row.children[1].children[0].children[4].children[0].children[0].children[0].children[0].children[0].children[0].id = 'photoComponent_' + (idRow-1) + '_' + 'S';
	row.children[1].children[0].children[4].children[0].children[0].children[0].children[0].children[1].id = 'componentNumber_' + (idRow-1) + '_' + 'S';
	row.children[1].children[0].children[4].children[0].children[0].children[0].children[0].children[2].id = 'deleteButton_' + (idRow-1) + '_' + 'S';
	// 																rowBlock	rowOptionBlock filterBlock scrollRow	
	row.children[1].children[0].children[4].children[0].children[0].children[0].children[1].children[1].children[0].children[1].id = 'addOption_' + (idRow-1) + '_' + 'S';
	row.children[1].children[0].children[4].children[0].children[0].children[0].children[1].children[2].children[0].children[0].children[0].id = 'clsOption_0_' + (idRow-1) + '_' + 'S';
	row.children[1].children[0].children[4].children[0].children[0].children[0].children[1].children[2].children[3].children[1].id = 'photoBlockButton_' + (idRow-1) + '_' + 'S';
	row.children[1].children[0].children[5].children[0].id = 'addButton_' + idRow + '_' + 'S';
	row.children[1].children[0].children[5].children[0].style.display = 'none';
	sortProtocol_MainBlock.appendChild(row);
	setupProtocolSort();
	prepareDefaultUnitSort(idRow);
	createReqOrProtDiv(1, idRow, true);
	addSortRowByProtocol();
	setupRequirementsTableSort(idRow);
	autoPageNumber();
	TranslateSortPage(idRow);
}
	//удаление листа
function removePageCustomerSort(idRow){
	return function(e){
		if(pageProtocolRow[ProtocolPage-1].pageSortRow.length >= 1){			
			document.getElementById('sortProtocol_' + idRow).remove();
			var sortObj = document.getElementById('IMGTrash').children[1].children[ProtocolPage-1].children[2].querySelector("div[type=" + 'ProtPage_'+ (ProtocolPage-1) +'_SortPage_' + idRow + "]")
			sortObj.remove();
			pageProtocolRow[ProtocolPage-1].pageSortRow.splice(idRow-1, 1);
			if(pageProtocolSustatement.length > 0){
				pageProtocolSustatement[ProtocolPage-1].Protocol.splice((idRow-1), 1);
				if(pageProtocolSustatement[ProtocolPage-1].Protocol.length == 0){
					pageProtocolSustatement.splice((ProtocolPage-1), 1);
				}
			}			
			//перезапись списка листов
			CalculateListNumberSort();
			refreshIDPageSort();
		}
		autoPageNumber();
	}
	
}
	//перезапись айди и слушателей листа и сторк в нем(тут еще хз в эту функу пихать или отдельно потом перебирать)
function refreshIDPageSort(){
	var pages = document.getElementById('sortProtocol_MainBlock');
	for(var i = 1; i < pages.children.length; i++){
		var idRow = i;
		var cloneRow = clearEventListener(pages.children[i]);
		cloneRow.id = 'sortProtocol_' + idRow;
		//  titleBlock
		cloneRow.children[0].children[2].children[0].children[1].id = 'companyName_' + idRow + '_' + 'S';
		cloneRow.children[0].children[2].children[0].children[1].value = idRow + 1;
		cloneRow.children[0].children[2].children[0].children[2].addEventListener('click', removePageCustomerSort(idRow));
		cloneRow.children[0].children[2].children[1].children[1].id = 'userManagerName_' + idRow + '_S';
		cloneRow.children[0].children[2].children[1].children[1].addEventListener('change', setTitleTableSR('userManagerName_' + idRow + '_S'));
		cloneRow.children[0].children[2].children[2].children[1].id = 'createDateProtocol_' + idRow + '_S';
		cloneRow.children[0].children[2].children[2].children[1].addEventListener('change', setTitleTableSR('createDateProtocol_' + idRow + '_S'));
		//  pageContent
		cloneRow.children[1].children[0].children[0].id = 'defaultUnit_' + idRow + '_' + 'S';
		cloneRow.children[1].children[0].children[0].children[0].children[1].addEventListener('click', requirementsBlockVievSort(idRow));
		cloneRow.children[1].children[0].children[1].id = 'fraction_' + idRow + '_' + 'S';
		cloneRow.children[1].children[0].children[1].children[1].id = 'fractionSource_1_' + idRow + '_' + 'S';
		cloneRow.children[1].children[0].children[1].children[1].children[0].children[0].id = 'Source_1_' + idRow + '_' + 'S';
		cloneRow.children[1].children[0].children[1].children[1].children[1].id = 'SortList_1_' + idRow + '_' + 'S';
		cloneRow.children[1].children[0].children[1].children[1].children[1].children[0].addEventListener('click', SortListContentBlockViev('SortListContent_1_' + idRow + '_' + 'S'));
		cloneRow.children[1].children[0].children[1].children[1].children[1].children[1].id = 'SortListContent_1_' + idRow + '_' + 'S';
		cloneRow.children[1].children[0].children[1].children[2].id = 'fractionSource_2_' + idRow + '_' + 'S';
		cloneRow.children[1].children[0].children[1].children[2].children[0].children[0].id = 'Source_2_' + idRow + '_' + 'S';
		cloneRow.children[1].children[0].children[1].children[3].id = 'fractionSource_3_' + idRow + '_' + 'S';
		cloneRow.children[1].children[0].children[1].children[3].children[0].children[0].id = 'Source_3_' + idRow + '_' + 'S';
		cloneRow.children[1].children[0].children[2].children[1].id = 'fractionMainValues_1_' + idRow + '_S'; 
		cloneRow.children[1].children[0].children[2].children[1].children[0].children[0].children[0].id = 'pureInpStart_' + idRow + '_' + 'S';
		cloneRow.children[1].children[0].children[2].children[1].children[0].children[0].children[1].id = 'pureInpStartFake_' + idRow + '_' + 'S';
		cloneRow.children[1].children[0].children[2].children[1].children[0].children[0].children[1].addEventListener('change', setFakeSort('pureInpStartFake_' + idRow + '_S', 1));
		cloneRow.children[1].children[0].children[2].children[1].children[1].children[0].children[0].id = 'outputStart_' + idRow + '_' + 'S';
		cloneRow.children[1].children[0].children[2].children[1].children[1].children[0].children[0].addEventListener('click', ShowUpsertDropdownSort('outputStart_' + idRow + '_' + 'S', idRow));
		cloneRow.children[1].children[0].children[2].children[1].children[1].children[0].children[1].id = 'outputStartButton_' + idRow + '_' + 'S';
		cloneRow.children[1].children[0].children[2].children[1].children[2].children[0].children[0].id = 'percentStart_' + idRow + '_' + 'S';
		cloneRow.children[1].children[0].children[2].children[2].id = 'fractionMainValues_2_' + idRow + '_' + 'S';
		cloneRow.children[1].children[0].children[2].children[2].children[0].children[0].children[0].id = 'pureInpGood_' + idRow + '_' + 'S';
		cloneRow.children[1].children[0].children[2].children[2].children[0].children[0].children[1].id = 'pureInpGoodFake_' + idRow + '_' + 'S';
		cloneRow.children[1].children[0].children[2].children[2].children[0].children[0].children[1].addEventListener('change', setFakeSort('pureInpGoodFake_' + idRow + '_S', 2));
		cloneRow.children[1].children[0].children[2].children[2].children[1].children[0].children[0].id = 'outputGood_' + idRow + '_' + 'S';
		cloneRow.children[1].children[0].children[2].children[2].children[1].children[0].children[0].addEventListener('click', ShowUpsertDropdownSort('outputGood_' + idRow + '_' + 'S', idRow));
		cloneRow.children[1].children[0].children[2].children[2].children[1].children[0].children[1].id = 'outputGoodButton_' + idRow + '_' + 'S';
		cloneRow.children[1].children[0].children[2].children[2].children[2].children[0].children[0].id = 'percentGood_' + idRow + '_' + 'S';
		cloneRow.children[1].children[0].children[2].children[2].children[2].children[0].children[0].addEventListener('click', ShowUpsertDropdownSort('percentGood_' + idRow + '_' + 'S', idRow));
		cloneRow.children[1].children[0].children[2].children[2].children[2].children[1].id = 'percentGoodButton_' + idRow + '_' + 'S';
		cloneRow.children[1].children[0].children[2].children[3].id = 'fractionMainValues_3_' + idRow + '_' + 'S';
		cloneRow.children[1].children[0].children[2].children[3].children[0].children[0].children[0].id = 'pureInpTrash_' + idRow + '_' + 'S';
		cloneRow.children[1].children[0].children[2].children[3].children[0].children[0].children[1].id = 'pureInpTrashFake_' + idRow + '_' + 'S';
		cloneRow.children[1].children[0].children[2].children[3].children[0].children[0].children[1].addEventListener('change', setFakeSort('pureInpTrashFake_' + idRow + '_S', 3));
		cloneRow.children[1].children[0].children[2].children[3].children[1].children[0].children[0].id = 'outputTrash_' + idRow + '_' + 'S';
		cloneRow.children[1].children[0].children[2].children[3].children[1].children[0].children[0].addEventListener('click', ShowUpsertDropdownSort('outputTrash_' + idRow + '_' + 'S', idRow));
		cloneRow.children[1].children[0].children[2].children[3].children[1].children[1].id = 'outputTrashButton_' + idRow + '_' + 'S';
		cloneRow.children[1].children[0].children[2].children[3].children[2].children[0].children[0].id = 'percentTrash_' + idRow + '_' + 'S';
		cloneRow.children[1].children[0].children[2].children[3].children[2].children[0].children[0].addEventListener('click', ShowUpsertDropdownSort('percentTrash_' + idRow + '_' + 'S', idRow));
		cloneRow.children[1].children[0].children[2].children[3].children[2].children[1].id = 'percentTrashButton_' + idRow + '_' + 'S';
		cloneRow.children[1].children[0].children[3].id = 'lockBlock_' + idRow + '_' + 'S';
		cloneRow.children[1].children[0].children[3].children[1].id = 'fractionLockValue_1_' + idRow + '_' + 'S';
		cloneRow.children[1].children[0].children[3].children[1].children[0].children[0].children[0].id = 'Lock_1_' + idRow + '_' + 'S';
		cloneRow.children[1].children[0].children[3].children[1].children[0].children[0].children[0].addEventListener('click', CheckLockInputSort('Lock_1_' + idRow + '_' + 'S'));
		cloneRow.children[1].children[0].children[3].children[2].id = 'fractionLockValue_2_' + idRow + '_' + 'S';
		cloneRow.children[1].children[0].children[3].children[2].children[0].children[0].children[0].id = 'Lock_2_' + idRow + '_' + 'S';
		cloneRow.children[1].children[0].children[3].children[2].children[0].children[0].children[0].addEventListener('click', CheckLockInputSort('Lock_2_' + idRow + '_' + 'S'));
		cloneRow.children[1].children[0].children[3].children[3].id = 'fractionLockValue_3_' + idRow + '_' + 'S';
		cloneRow.children[1].children[0].children[3].children[3].children[0].children[0].children[0].id = 'Lock_3_' + idRow + '_' + 'S';
		cloneRow.children[1].children[0].children[3].children[3].children[0].children[0].children[0].addEventListener('click', CheckLockInputSort('Lock_3_' + idRow + '_' + 'S'));
		cloneRow.children[1].children[0].children[4].id  = 'rows_' + idRow + '_' + 'S'; 		
		cloneRow.children[1].children[0].children[4].children[0].id = 'mainRow_0' + '_' + idRow + '_' + 'S';
		cloneRow.children[1].children[0].children[4].children[0].children[0].children[0].children[0].children[0].children[0].id = 'photoComponent_' + (idRow-1) + '_' + 'S';
		cloneRow.children[1].children[0].children[4].children[0].children[0].children[0].children[0].children[1].id = 'componentNumber_' + (idRow-1) + '_' + 'S';
		cloneRow.children[1].children[0].children[4].children[0].children[0].children[0].children[0].children[2].id = 'deleteButton_' + (idRow-1) + '_' + 'S';
		// 																rowBlock	rowOptionBlock filterBlock scrollRow	
		cloneRow.children[1].children[0].children[4].children[0].children[0].children[0].children[1].children[1].children[0].children[1].id = 'addOption_' + (idRow-1) + '_' + 'S';
		cloneRow.children[1].children[0].children[4].children[0].children[0].children[0].children[1].children[2].children[0].children[0].children[0].id = 'clsOption_0_' + (idRow-1) + '_' + 'S';
		cloneRow.children[1].children[0].children[4].children[0].children[0].children[0].children[1].children[2].children[3].children[1].id = 'photoBlockButton_' + (idRow-1) + '_' + 'S';
		cloneRow.children[1].children[0].children[5].children[0].id = 'addButton_' + idRow + '_' + 'S';
		// cloneRow.children[1].children[0].children[5].children[0].addEventListener('click', addrowSort(idRow));
		var list = cloneRow.children[1].children[0].children[4];
		for(var k = 0; k < list.children.length; k++){
			list.children[k].id = 'mainRow_' + k + '_' + idRow + '_' + 'S';
		}
		refreshIDSort(idRow);
		
	}
}
function SortListContentBlockViev(blickId){
	return function(e){
		var block = document.getElementById(blickId);
		var number = Number(block.id.split('_')[2]);		
		var style = block.style.display;		
		switch(style){
			case 'none':
				generateSortList(block.children[0], number);
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
function generateSortList(elem, number){
	var pageNumber = pageProtocolRow[ProtocolPage-1].pageSortRow.length;
	for(var k = elem.children.length; k > 1; k--){
		elem.children[k-1].remove();
	}
	for(var k = 1; k <= pageNumber; k++){		
		var row1 = elem.children[0].cloneNode(true);
		var row2 = elem.children[0].cloneNode(true);
		row1.value =  Translate[0].Sort[9][GlobalLang] + ' 0' + (k+1);
		row1.id =  'Sort_suitableFraction_' + k;
		row2.value =  Translate[0].Sort[10][GlobalLang] + ' 0' + (k+1);
		row2.id =  'Sort_weedFraction_' + k;
		row1.style.display = 'flex';
		row2.style.display = 'flex';		
		
		row1.addEventListener('click', setupMainFractionParent(number, row1.id));
		row1.addEventListener('click', setSumValue(number));
		row1.addEventListener('click', setVAlueColor(number,row1.id));
		
		row2.addEventListener('click', setupMainFractionParent(number, row2.id));
		row2.addEventListener('click', setSumValue(number));
		row2.addEventListener('click', setVAlueColor(number,row2.id));

		elem.appendChild(row1);
		elem.appendChild(row2);		
	}
	for(var k = 0; k < elem.children.length; k++){
		var rowPoint = Number(elem.children[k].value.split(' ')[1]);
		if(rowPoint == number+1){
			elem.children[k].style.display = 'none';
		}
	}
	for(var k = 1; k <= 1; k++){		
		var row1 = elem.children[0].cloneNode(true);
		var row2 = elem.children[0].cloneNode(true);
		row1.value =  Translate[0].Sort[9][GlobalLang] + ' 01';
		row1.id =  'Prot_suitableFraction_' + ProtocolPage;
		row2.value =  Translate[0].Sort[10][GlobalLang] + ' 01';
		row2.id =  'Prot_weedFraction_' + ProtocolPage;
		row1.style.display = 'flex';
		row2.style.display = 'flex';
		
		row1.addEventListener('click', setupMainFractionParent(number,row1.id));
		row1.addEventListener('click', setSumValue(number));
		row1.addEventListener('click', setVAlueColor(number,row1.id));
		
		row2.addEventListener('click', setupMainFractionParent(number,row2.id));
		row2.addEventListener('click', setSumValue(number));
		row2.addEventListener('click', setVAlueColor(number,row2.id));

		elem.appendChild(row1);
		elem.appendChild(row2);		
	}
	for(var k = 0; k < elem.children.length; k++){
		var elemObj = document.getElementById(elem.children[k].id);
		for(var f = 0; f < pageProtocolRow[ProtocolPage-1].pageSortRow[number-1].mainFractionParent.length; f++){
			if(elem.children[k].id == pageProtocolRow[ProtocolPage-1].pageSortRow[number-1].mainFractionParent[f]){
				elemObj.style.backgroundColor = "#ffb23f";
			}
		}
		
	}
}

function setSumValue(number){
	return function(e){
		var mainRow = document.getElementById('rows_' + number + '_S');
		var fractionMainValues = document.getElementById('fractionMainValues_1_' + number + '_S');
		var event = new Event('change');
		
		var sortTotalMass = 0;
		var protTotaMass = 0;
		var protTotalMassGood = 0;
		var sortTotalMassGood = 0;
		for(var i = 0; i< pageProtocolRow[ProtocolPage-1].pageSortRow[number-1].mainFractionParent.length; i++){
			var sortOrProt = pageProtocolRow[ProtocolPage-1].pageSortRow[number-1].mainFractionParent[i].split('_')[0];
			var fraction = pageProtocolRow[ProtocolPage-1].pageSortRow[number-1].mainFractionParent[i].split('_')[1];			
			var idPage = pageProtocolRow[ProtocolPage-1].pageSortRow[number-1].mainFractionParent[i].split('_')[2];
			
			switch(sortOrProt){
				case 'Prot':
					var protMass = pageProtocolRow[ProtocolPage-1].requirementsTable[fraction].mass;
					protTotaMass  = protTotaMass + protMass;
					var protMassGood = (protMass / 100) * pageProtocolRow[ProtocolPage-1].requirementsTable[fraction].purity;
					protTotalMassGood = protTotalMassGood + protMassGood;
					break;
				case 'Sort':
					var sortMass = pageProtocolRow[ProtocolPage-1].pageSortRow[Number(idPage)-1].requirementsTable[fraction].mass;
					sortTotalMass = sortTotalMass + sortMass;
					var sortMassGood =  (sortMass / 100) * pageProtocolRow[ProtocolPage-1].pageSortRow[Number(idPage)-1].requirementsTable[fraction].purity;
					sortTotalMassGood = sortTotalMassGood + sortMassGood;
					break;
			}
				
		}
		var totalMass = protTotaMass + sortTotalMass;
		var totalMassGood = protTotalMassGood + sortTotalMassGood;
		var newPercent = (totalMassGood / totalMass) * 100;	
				
		mainRow.children[1].children[0].children[0].children[2].children[3].children[0].children[0].children[0].children[0].value = newPercent.toFixed(2);
		mainRow.children[1].children[0].children[0].children[2].children[3].children[0].children[0].children[0].children[0].dispatchEvent(event);
		
		fractionMainValues.children[1].children[0].children[0].value = totalMass.toFixed(4);
		fractionMainValues.children[1].children[0].children[0].dispatchEvent(event);
	}
}
function setVAlueColor(number ,id){
	return function (e){
		var main = document.getElementById(id);
		var textObj = main.parentNode.parentNode.parentNode.children[0];
		var pageID = Number(number) - 1;
		if (main.style.backgroundColor != "") {
			main.style.backgroundColor = "";
			
			var newMas = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID].mainFractionParent.filter(word => word != id);
			pageProtocolRow[ProtocolPage-1].pageSortRow[pageID].mainFractionParent = newMas;
			textObj.textContent = "Исходный Продукт";

		}
		else {
			main.style.backgroundColor = "#ffb23f";
			textObj.textContent = main.value;
		}
	}
}
// Асоздание клона строки
function addrowsSort(pageID){
	pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort.length = 0;
	for(var i = 0; i < pageProtocolRow[ProtocolPage-1].ProtocolRow.length; i++){
		generateProtocolSort(pageID-1, i);
	}	
	var mainRow = document.getElementById('mainRow_0_' + (pageID) + '_' + 'S');	
	var rows = document.getElementById('rows_' + pageID + '_' + 'S');
	var objectRow = pageProtocolRow[ProtocolPage-1].ProtocolRow.length;
	var sortRows =  Number(rows.children.length);
	var pageNumber = objectRow - (sortRows-1);	
	for(var k = 0; k < pageNumber; k++){
		var row = mainRow.cloneNode(true);
		var idRow = Number(rows.children.length);
		row.style.display = 'flex';
		row.id = 'mainRow_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[0].id = 'rowNumberId_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[0].addEventListener('mouseleave', HideDeleteButton('rowNumberId_' + idRow + '_' + pageID + '_' + 'S'));
		row.children[0].children[0].children[0].children[0].children[0].id = 'photoComponent_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[0].children[1].id = 'componentNumber_00_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[0].children[1].textContent = idRow;
		row.children[0].children[0].children[0].children[2].id = 'deleteButton_00_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[0].children[2].addEventListener('click', removeRowSort('deleteButton_00_' + idRow + '_' + pageID + '_' + 'S'));
		// classifier
		row.children[0].children[0].children[1].id = 'classifier_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[1].children[0].id = 'clsInputResultBlock_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[1].children[0].children[0].id = 'classifierInpurResult_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[1].children[0].children[1].children[0].id = 'controlButtonIdHide_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[1].children[0].children[1].children[0].addEventListener('click', HideDropdownSort('controlButtonIdHide_' + idRow + '_' + pageID + '_' + 'S'));
		row.children[0].children[0].children[1].children[0].children[1].children[0].addEventListener('click', refreshMassof1000Sort(idRow, pageID));
		row.children[0].children[0].children[1].children[1].children[0].children[0].id = 'clsInput_test_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[1].children[1].children[0].children[0].addEventListener('focus', ShowDropdownSort(idRow, pageID));
		row.children[0].children[0].children[1].children[1].children[0].children[0].addEventListener('input', StartInputListenersSort(idRow, pageID));
		row.children[0].children[0].children[1].children[1].children[0].children[1].id = 'addOption_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[1].children[1].children[0].children[1].addEventListener('click', searchidSort(idRow, pageID));
		row.children[0].children[0].children[1].children[2].id = 'clsDropdown_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[1].children[2].children[0].children[0].children[0].id = 'clsOption_0_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[1].children[2].children[1].id = 'infoTitle_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[1].children[2].children[1].children[1].id = 'infoBlockButton_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[1].children[2].children[1].children[1].addEventListener('click', infoBlockSort(idRow, pageID));
		row.children[0].children[0].children[1].children[2].children[2].id = 'infoBlock_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[1].children[2].children[3].id = 'photoTitle_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[1].children[2].children[3].children[1].id = 'photoBlockButton_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[1].children[2].children[3].children[1].addEventListener('click', photoBlockSort(idRow, pageID));
		row.children[0].children[0].children[1].children[2].children[4].id = 'photoBlock_' + idRow + '_' + pageID + '_' + 'S';
		// valueBlock	
		row.children[0].children[0].children[2].id = 'valueBlock_1_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[2].children[0].id = 'massInputBlock_1_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[2].children[0].children[0].children[0].addEventListener('change', changeMassValueSort('massDropdown_1_' + idRow + '_' + pageID + '_' + 'S', 'massInputBlock_1_' + idRow + '_' + pageID + '_' + 'S'));
		row.children[0].children[0].children[2].children[0].children[4].id = 'controlButtonId_1_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[2].children[0].children[4].addEventListener('click', HideMassDropdownSort('controlButtonId_1_' + idRow + '_' + pageID + '_' + 'S'));
		row.children[0].children[0].children[2].children[1].id = 'massInputResultBlock_1_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[2].children[1].children[0].id = 'massInput_1_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[2].children[1].children[0].addEventListener('click', ShowMassDropdownSort('massInput_1_' + idRow + '_' + pageID + '_' + 'S'));
		row.children[0].children[0].children[2].children[2].id = 'moreTitle_1_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[2].children[2].children[1].id = 'moreBlockButton_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[2].children[2].children[1].addEventListener('click', moreBlock('moreBlock_' + idRow + '_' + pageID + '_' + 'S','moreBlockButton_' + idRow + '_' + pageID + '_' + 'S' , 'moreTitle_1_' + idRow + '_' + pageID + '_' + 'S'));
		row.children[0].children[0].children[2].children[3].id = 'moreBlock_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[2].children[3].children[0].id = 'massDropdown_1_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[2].children[0].children[1].children[0].addEventListener("click", switchToggleSort);
		row.children[0].children[0].children[2].children[0].children[1].children[0].addEventListener("click", checkotherToggleSort(idRow, pageID));
		row.children[0].children[0].children[2].children[0].children[2].children[0].addEventListener("click", switchToggleSort);
		row.children[0].children[0].children[2].children[0].children[3].children[0].addEventListener("click", switchToggleSort);
		// valueBlock_2	
		row.children[0].children[0].children[3].id = 'valueBlock_2_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[3].children[0].id = 'massInputBlock_2_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[3].children[0].children[0].children[0].addEventListener('change', changeMassValueSort('massDropdown_2_' + idRow + '_' + pageID + '_' + 'S', 'massInputBlock_2_' + idRow + '_' + pageID + '_' + 'S'));
		row.children[0].children[0].children[3].children[0].children[4].id = 'controlButtonId_2_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[3].children[0].children[4].addEventListener('click', HideMassDropdownSort('controlButtonId_2_' + idRow + '_' + pageID + '_' + 'S'));
		row.children[0].children[0].children[3].children[1].id = 'massInputResultBlock_2_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[3].children[1].children[0].id = 'massInput_2_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[3].children[1].children[0].addEventListener('click', ShowMassDropdownSort('massInput_2_' + idRow + '_' + pageID + '_' + 'S'));
		row.children[0].children[0].children[3].children[2].id = 'moreTitle_2_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[3].children[2].children[1].id = 'moreBlockButton_2_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[3].children[2].children[1].addEventListener('click', moreBlock('moreBlock_2_' + idRow + '_' + pageID + '_S', 'moreBlockButton_2_' + idRow + '_' + pageID + '_' + 'S', 'moreTitle_2_' + idRow + '_' + pageID + '_' + 'S'));
		row.children[0].children[0].children[3].children[3].id = 'moreBlock_2_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[3].children[3].children[0].id = 'massDropdown_2_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[3].children[0].children[1].children[0].addEventListener("click", switchToggleSort);
		row.children[0].children[0].children[3].children[0].children[1].children[0].addEventListener("click", checkotherToggleSort(idRow, pageID));
		row.children[0].children[0].children[3].children[0].children[2].children[0].addEventListener("click", switchToggleSort);
		row.children[0].children[0].children[3].children[0].children[3].children[0].addEventListener("click", switchToggleSort);
		// valueBlock_3	
		row.children[0].children[0].children[4].id = 'valueBlock_3_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[4].children[0].id = 'massInputBlock_3_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[4].children[0].children[0].children[0].addEventListener('change', changeMassValueSort('massDropdown_3_' + idRow + '_' + pageID + '_' + 'S', 'massInputBlock_3_' + idRow + '_' + pageID + '_' + 'S'));
		row.children[0].children[0].children[4].children[0].children[4].id = 'controlButtonId_3_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[4].children[0].children[4].addEventListener('click', HideMassDropdownSort('controlButtonId_3_' + idRow + '_' + pageID + '_' + 'S'));
		row.children[0].children[0].children[4].children[1].id = 'massInputResultBlock_3_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[4].children[1].children[0].id = 'massInput_3_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[4].children[1].children[0].addEventListener('click', ShowMassDropdownSort('massInput_3_' + idRow + '_' + pageID + '_' + 'S'));
		row.children[0].children[0].children[4].children[2].id = 'moreTitle_3_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[4].children[2].children[1].id = 'moreBlockButton_3_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[4].children[2].children[1].addEventListener('click', moreBlock('moreBlock_3_' + idRow + '_' + pageID + '_' + 'S','moreBlockButton_3_' + idRow + '_' + pageID + '_' + 'S', 'moreTitle_3_' + idRow + '_' + pageID + '_' + 'S'));
		row.children[0].children[0].children[4].children[3].id = 'moreBlock_3_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[4].children[3].children[0].id = 'massDropdown_3_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[4].children[0].children[1].children[0].addEventListener("click", switchToggleSort);
		row.children[0].children[0].children[4].children[0].children[1].children[0].addEventListener("click", checkotherToggleSort(idRow, pageID));
		row.children[0].children[0].children[4].children[0].children[2].children[0].addEventListener("click", switchToggleSort);
		row.children[0].children[0].children[4].children[0].children[3].children[0].addEventListener("click", switchToggleSort);
		rows.appendChild(row);
		mathfComponentFunctionSort('massDropdown_1_' + idRow + '_' + pageID + '_' + 'S');
		mathfComponentFunctionSort('massDropdown_2_' + idRow + '_' + pageID + '_' + 'S');
		mathfComponentFunctionSort('massDropdown_3_' + idRow + '_' + pageID + '_' + 'S');
		//строка поиска
		var clsInput_testRow = document.getElementById('clsInput_test_' + idRow + '_' + pageID + '_S');
		//результат поиска
		var clsDropdown = document.getElementById('clsDropdown_' + idRow + '_' + pageID + '_S');
		//кнопка ок
		var controlButtonIdHide = document.getElementById('controlButtonIdHide_' + idRow + '_' + pageID + '_S');
		var addOption = document.getElementById('addOption_' + idRow + '_' + pageID + '_S');

		dispatchEV(clsInput_testRow, clsDropdown, pageID, idRow, addOption);		
		switchDropdownMassSort('massDropdown_1_' + idRow + '_' + pageID + '_' + 'S');
		setupPhotosSortRow(ProtocolPage-1,pageID-1);
		addRowDiv(1,pageID, idRow, true)
	}	
	controlButtonIdHide.click();
	updateRemovedPercentSort(pageID);
	changeRowSortLang(pageID, idRow);
}
function dispatchEV(clsInput_testRow, clsDropdown, pageID, k, addOption){	
	var event_1 = new Event('focus');
	var event_2 = new Event('input');
	clsInput_testRow.dispatchEvent(event_1);
	var splitValue = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[k-1].SearchProductResult;
	var inputOption = clsDropdown.children[0];
	var temp = '';
	for(var i = 0; i < splitValue.length; i++){
		clsInput_testRow.value = temp == '' ? splitValue[i] : temp + ' ' + splitValue[i];
		clsInput_testRow.dispatchEvent(event_2);
		if(inputOption.children.length > 1 && clsInput_testRow.value == inputOption.children[1].children[0].value){
			var temp = '';
			inputOption.children[1].children[0].click();
		}
		else{
			var temp = clsInput_testRow.value;
			addOption.click();
		}
	}
}
function removeRowSort(remove){
	return function e(){
		var pageID = Number(remove.split('_')[3]);
		var elementRemove = document.getElementById(remove).parentNode.parentNode.parentNode.parentNode.id;
		document.getElementById(elementRemove).remove();
		
		var idComponentRow = Number(elementRemove.split("_")[1]-1);
		pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort.splice(idComponentRow, 1);
		pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].photoContainer.rowsFraction.splice(idComponentRow, 1);
		document.getElementById('IMGTrash').children[1].children[ProtocolPage-1].children[2].children[pageID-1].children[1].children[idComponentRow].remove();
		refreshIDSort(pageID);
		updateRemovedPercentSort(pageID);
	}
}
function refreshIDSort(pageID){
	var rows = document.getElementById('rows_' + pageID + '_' + 'S');
	for(var i = 1; i < rows.children.length; i++){
		var idRow = i;
		var cloneRow = clearEventListener(rows.children[i]);
		
		cloneRow.id = 'mainRow_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[0].id = 'rowNumberId_' + idRow + '_' + pageID + '_' + 'S';
		// cloneRow.children[0].children[0].children[0].addEventListener('mouseenter', ShowDeleteButton('rowNumberId_' + idRow + '_' + pageID + '_' + 'S'));
		cloneRow.children[0].children[0].children[0].addEventListener('mouseleave', HideDeleteButton('rowNumberId_' + idRow + '_' + pageID + '_' + 'S'));
		cloneRow.children[0].children[0].children[0].children[0].children[0].id = 'photoComponent_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[0].children[1].id = 'componentNumber_00_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[0].children[1].textContent = idRow;
		cloneRow.children[0].children[0].children[0].children[2].id = 'deleteButton_00_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[0].children[2].addEventListener('click', removeRowSort('deleteButton_00_' + idRow + '_' + pageID + '_' + 'S'));
		// classifier
		cloneRow.children[0].children[0].children[1].id = 'classifier_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[1].children[0].id = 'clsInputResultBlock_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[1].children[0].children[0].id = 'classifierInpurResult_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[1].children[0].children[1].children[0].id = 'controlButtonIdHide_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[1].children[0].children[1].children[0].addEventListener('click', HideDropdownSort('controlButtonIdHide_' + idRow + '_' + pageID + '_' + 'S'));
		cloneRow.children[0].children[0].children[1].children[0].children[1].children[0].addEventListener('click', refreshMassof1000Sort(idRow, pageID));
		cloneRow.children[0].children[0].children[1].children[1].children[0].children[0].id = 'clsInput_test_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[1].children[1].children[0].children[0].addEventListener('focus', ShowDropdownSort(idRow, pageID));
		cloneRow.children[0].children[0].children[1].children[1].children[0].children[0].addEventListener('input', StartInputListenersSort(idRow, pageID));
		cloneRow.children[0].children[0].children[1].children[1].children[0].children[1].id = 'addOption_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[1].children[1].children[0].children[1].addEventListener('click', searchidSort(idRow, pageID));
		cloneRow.children[0].children[0].children[1].children[2].id = 'clsDropdown_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[1].children[2].children[0].children[0].children[0].id = 'clsOption_0_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[1].children[2].children[1].id = 'infoTitle_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[1].children[2].children[1].children[1].id = 'infoBlockButton_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[1].children[2].children[1].children[1].addEventListener('click', infoBlockSort(idRow, pageID));
		cloneRow.children[0].children[0].children[1].children[2].children[2].id = 'infoBlock_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[1].children[2].children[3].id = 'photoTitle_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[1].children[2].children[3].children[1].id = 'photoBlockButton_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[1].children[2].children[3].children[1].addEventListener('click', photoBlockSort(idRow, pageID));
		cloneRow.children[0].children[0].children[1].children[2].children[4].id = 'photoBlock_' + idRow + '_' + pageID + '_' + 'S';
		// valueBlock	
		cloneRow.children[0].children[0].children[2].id = 'valueBlock_1_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[2].children[0].id = 'massInputBlock_1_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[2].children[0].children[0].children[0].addEventListener('change', changeMassValueSort('massDropdown_1_' + idRow + '_' + pageID + '_' + 'S', 'massInputBlock_1_' + idRow + '_' + pageID + '_' + 'S'));
		cloneRow.children[0].children[0].children[2].children[0].children[4].id = 'controlButtonId_1_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[2].children[0].children[4].addEventListener('click', HideMassDropdownSort('controlButtonId_1_' + idRow + '_' + pageID + '_' + 'S'));
		cloneRow.children[0].children[0].children[2].children[1].id = 'massInputResultBlock_1_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[2].children[1].children[0].id = 'massInput_1_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[2].children[1].children[0].addEventListener('click', ShowMassDropdownSort('massInput_1_' + idRow + '_' + pageID + '_' + 'S'));
		cloneRow.children[0].children[0].children[2].children[2].id = 'moreTitle_1_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[2].children[2].children[1].id = 'moreBlockButton_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[2].children[2].children[1].addEventListener('click', moreBlock('moreBlock_' + idRow + '_' + pageID + '_' + 'S','moreBlockButton_' + idRow + '_' + pageID + '_' + 'S' , 'moreTitle_1_' + idRow + '_' + pageID + '_' + 'S'));
		cloneRow.children[0].children[0].children[2].children[3].id = 'moreBlock_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[2].children[3].children[0].id = 'massDropdown_1_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[2].children[0].children[1].children[0].addEventListener("click", switchToggleSort);
		cloneRow.children[0].children[0].children[2].children[0].children[1].children[0].addEventListener("click", checkotherToggleSort(idRow, pageID));
		cloneRow.children[0].children[0].children[2].children[0].children[2].children[0].addEventListener("click", switchToggleSort);
		cloneRow.children[0].children[0].children[2].children[0].children[3].children[0].addEventListener("click", switchToggleSort);
		mathfComponentFunctionSort('massDropdown_1_' + idRow + '_' + pageID + '_' + 'S');
		// valueBlock_2	
		cloneRow.children[0].children[0].children[3].id = 'valueBlock_2_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[3].children[0].id = 'massInputBlock_2_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[3].children[0].children[0].children[0].addEventListener('change', changeMassValueSort('massDropdown_2_' + idRow + '_' + pageID + '_' + 'S', 'massInputBlock_2_' + idRow + '_' + pageID + '_' + 'S'));
		cloneRow.children[0].children[0].children[3].children[0].children[4].id = 'controlButtonId_2_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[3].children[0].children[4].addEventListener('click', HideMassDropdownSort('controlButtonId_2_' + idRow + '_' + pageID + '_' + 'S'));
		cloneRow.children[0].children[0].children[3].children[1].id = 'massInputResultBlock_2_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[3].children[1].children[0].id = 'massInput_2_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[3].children[1].children[0].addEventListener('click', ShowMassDropdownSort('massInput_2_' + idRow + '_' + pageID + '_' + 'S'));
		cloneRow.children[0].children[0].children[3].children[2].id = 'moreTitle_2_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[3].children[2].children[1].id = 'moreBlockButton_2_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[3].children[2].children[1].addEventListener('click', moreBlock('moreBlock_2_' + idRow + '_' + pageID+ '_S','moreBlockButton_2_' + idRow + '_' + pageID + '_' + 'S', 'moreTitle_2_' + idRow + '_' + pageID + '_' + 'S'));
		cloneRow.children[0].children[0].children[3].children[3].id = 'moreBlock_2_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[3].children[3].children[0].id = 'massDropdown_2_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[3].children[0].children[1].children[0].addEventListener("click", switchToggleSort);
		cloneRow.children[0].children[0].children[3].children[0].children[1].children[0].addEventListener("click", checkotherToggleSort(idRow, pageID));
		cloneRow.children[0].children[0].children[3].children[0].children[2].children[0].addEventListener("click", switchToggleSort);
		cloneRow.children[0].children[0].children[3].children[0].children[3].children[0].addEventListener("click", switchToggleSort);
		mathfComponentFunctionSort('massDropdown_2_' + idRow + '_' + pageID + '_' + 'S');
		// valueBlock_3	
		cloneRow.children[0].children[0].children[4].id = 'valueBlock_3_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[4].children[0].id = 'massInputBlock_3_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[4].children[0].children[0].children[0].addEventListener('change', changeMassValueSort('massDropdown_3_' + idRow + '_' + pageID + '_' + 'S', 'massInputBlock_3_' + idRow + '_' + pageID + '_' + 'S'));
		cloneRow.children[0].children[0].children[4].children[0].children[4].id = 'controlButtonId_3_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[4].children[0].children[4].addEventListener('click', HideMassDropdownSort('controlButtonId_3_' + idRow + '_' + pageID + '_' + 'S'));
		cloneRow.children[0].children[0].children[4].children[1].id = 'massInputResultBlock_3_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[4].children[1].children[0].id = 'massInput_3_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[4].children[1].children[0].addEventListener('click', ShowMassDropdownSort('massInput_3_' + idRow + '_' + pageID + '_' + 'S'));
		cloneRow.children[0].children[0].children[4].children[2].id = 'moreTitle_3_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[4].children[2].children[1].id = 'moreBlockButton_3_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[4].children[2].children[1].addEventListener('click', moreBlock('moreBlock_3_' + idRow + '_' + pageID + '_' + 'S','moreBlockButton_3_' + idRow + '_' + pageID + '_' + 'S', 'moreTitle_3_' + idRow + '_' + pageID + '_' + 'S'));
		cloneRow.children[0].children[0].children[4].children[3].id = 'moreBlock_3_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[4].children[3].children[0].id = 'massDropdown_3_' + idRow + '_' + pageID + '_' + 'S';
		cloneRow.children[0].children[0].children[4].children[0].children[1].children[0].addEventListener("click", switchToggleSort);
		cloneRow.children[0].children[0].children[4].children[0].children[1].children[0].addEventListener("click", checkotherToggleSort(idRow, pageID));
		cloneRow.children[0].children[0].children[4].children[0].children[2].children[0].addEventListener("click", switchToggleSort);
		cloneRow.children[0].children[0].children[4].children[0].children[3].children[0].addEventListener("click", switchToggleSort);
		mathfComponentFunctionSort('massDropdown_3_' + idRow + '_' + pageID + '_' + 'S');
		switchDropdownMassSort('massDropdown_1_' + idRow + '_' + pageID + '_' + 'S');
		switch(String(idRow)){
			case'1':
				var clsInput_test1 = document.getElementById('clsInput_test_1_' + pageID + '_' + 'S');
				clsInput_test1.placeholder = 'Продукт';
				break;
			case'2':
				var clsInput_test2 = document.getElementById('clsInput_test_2_' + pageID + '_' + 'S');
				clsInput_test2.placeholder = 'Засоритель';
				break;
		}	
		refreshListenersSort(idRow, pageID);		
	}
}
function refreshListenersSort(idRow, pageID){
	var rows = document.getElementById('rows_' + pageID + '_' + 'S');
	for(var i = 1; i < rows.children.length;i++){
		var classifierInpurResult = document.getElementById('classifierInpurResult_'+ i + '_' + pageID + '_' + 'S');
		if(classifierInpurResult != null && classifierInpurResult.children.length != 0 ){
			for(var k = 0; k < classifierInpurResult.children.length; k++){
				classifierInpurResult.children[k].addEventListener("click", function(){
					this.remove();
					StartInputSort(idRow, pageID);
				});
			}
		}
		
	}
}
function StartInputSort(idRow, pageID){
	var inputBlock = document.getElementById("clsInput_test_" + idRow + '_' + pageID + '_' + 'S');
	var clsDropdown = document.getElementById("clsDropdown_" + idRow + '_' + pageID + '_' + 'S');
	DoropdownOptionClearSort(idRow, pageID);
	if(inputBlock.value.length == 0){
		DropdownOptionDefaultSort(idRow, pageID);
	}
	else{
		DropdownSearchSort(idRow, pageID);
	}	
	clsDropdown.style.display="flex";
}
function DoropdownOptionClearSort(idRow, pageID){
	var clsDropdown = document.getElementById("clsDropdown_" + idRow + '_' + pageID + '_' + 'S');
	var dropdownOptions = clsDropdown.children[0];
	//Стартовая отчиска от лишних элементов
	for(var i = dropdownOptions.children.length - 1; i > 0; i--){
		dropdownOptions.children[i].remove();
	}
}
function DropdownOptionDefaultSort(idRow, pageID){
	var clsDropdown = document.getElementById("clsDropdown_" + idRow + '_' + pageID + '_' + 'S');
	var dropdownOptions =  clsDropdown.children[0];
	var dropdownOptionClone = clsDropdown.children[0].children[0];
	var classifierInpurResult = document.getElementById("classifierInpurResult_" + idRow + '_' + pageID + '_' + 'S');
	
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
							
							option.children[0].addEventListener("click", function(){addResultOptionSort(this.id, idRow, pageID)});
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
				
				option.children[0].addEventListener("click", function(){addResultOptionSort(this.id, idRow, pageID)});
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
						
						option.children[0].addEventListener("click", function(){addResultOptionSort(this.id, idRow, pageID)});
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
						
						option.children[0].addEventListener("click", function(){addResultOptionSort(this.id, idRow, pageID)});
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
						
						option.children[0].addEventListener("click", function(){addResultOptionSort(this.id, idRow, pageID)});
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
				
				option.children[0].addEventListener("click", function(){addResultOptionSort(this.id, idRow, pageID)});
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
				
				option.children[0].addEventListener("click", function(){addResultOptionSort(this.id, idRow, pageID)});
			}
			break;
		}
	}

}
function DropdownSearchSort(idRow, pageID){
	var inputBlock = document.getElementById('clsInput_test_' + idRow + '_' + pageID + '_' + 'S');
	var dropdownBlock = document.getElementById('clsDropdown_' + idRow + '_' + pageID + '_' + 'S');
	var classifierInpurResultRow = document.getElementById('classifierInpurResult_' + idRow + '_' + pageID + '_' + 'S');
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
					
					option.children[0].addEventListener("click", function(){addResultOptionSort(this.id, idRow, pageID)});
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
						
						option.children[0].addEventListener("click", function(){addResultOptionSort(this.id, idRow, pageID)});
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
function addResultOptionSort(elenentid, idRow, pageID){
	var elementid = document.getElementById(elenentid);
	var inputBlock = document.getElementById("clsInput_test_" + idRow + '_' + pageID + '_' + 'S');
	var main = inputBlock.parentNode.parentNode.parentNode;
	var classifierInpurResultRow = main.children[0].children[0];
	var option = elementid;
	var object = document.createElement("div");
	object.classList.add("wordElement");
	object.id = "result_" + option.id;
	object.textContent = option.value;
	object.addEventListener("click", function(){
		if(elementid.id.split("_")[1] = "product"){
			removeProductInfoSort(idRow, pageID)
		}
		this.remove();
		StartInputSort(idRow, pageID);
	});
	classifierInpurResultRow.appendChild(object);
	sortResultBlockSort(idRow, pageID);
	
	if(elementid.getAttribute("name") == "product"){
		addProductInfoSort(elementid, idRow, pageID);
	}
	
	document.getElementById("clsInput_test_" + idRow + '_' + pageID + '_' + 'S').focus();
	document.getElementById("clsInput_test_" + idRow + '_' + pageID + '_' + 'S').value="";
}

function removeProductInfoSort(idRow, pageID){
	var inputBlock = document.getElementById('clsInput_test_' + idRow + '_' + pageID + '_' + 'S');
	var main = inputBlock.parentNode.parentNode.parentNode;
	var infoTitle = main.children[2].children[1].id;
	var infoBlock = main.children[2].children[2].id;
	document.getElementById(infoTitle).style.display = "none";
	for(var i = document.getElementById(infoBlock).children.length - 1; i > 0; i--){
		document.getElementById(infoBlock).children[i].remove();
	}
}
//Изменение параметров классификатора
function changeClassifierSort(idRow, pageID){
	//Дефолтная установка
	var classifier = componentElementClassifier;
	var resultBlock = document.getElementById('clsInputResultBlock_' + idRow + '_' + pageID + '_' + 'S');
	var classifierInpurResult = document.getElementById('classifierInpurResult_' + idRow + '_' + pageID + '_' + 'S');
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
function addProductInfoSort(product_id, idRow, pageID){
	var infoBlockElement = document.getElementById("infoBlock_" + idRow + '_' + pageID + '_' + 'S');
	var cloneOptionInfo = infoBlockElement.children[0].cloneNode(true);
	var infoTitle = document.getElementById("infoTitle_" + idRow + '_' + pageID + '_' + 'S');
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
function setupRequirementsTableSort(pageID){
	//Айдишники на странице выделенны явно
	var pureInpStart = document.getElementById('pureInpStart_' + pageID + '_S');	
	var outputStart = document.getElementById('outputStart_' + pageID + '_S');
	var percentStart = document.getElementById('percentStart_' + pageID + '_S');
	var pureInpGood = document.getElementById('pureInpGood_' + pageID + '_S');
	var outputGood = document.getElementById('outputGood_' + pageID + '_S');
	var percentGood = document.getElementById('percentGood_' + pageID + '_S');
	var pureInpTrash = document.getElementById('pureInpTrash_' + pageID + '_S');
	var outputTrash = document.getElementById('outputTrash_' + pageID + '_S');
	var percentTrash = document.getElementById('percentTrash_' + pageID + '_S');

	var userManagerName = document.getElementById('userManagerName_' + pageID + '_S');
	var createDateProtocol = document.getElementById('createDateProtocol_' + pageID + '_S');

	userManagerName.value = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.TitleTable.userManagerName;
	createDateProtocol.value = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.TitleTable.createDateProtocol;
	
	pureInpStart.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.purity).toFixed(3);
	outputStart.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass).toFixed(3);
	percentStart.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.percent_exit).toFixed(2);	
	pureInpGood.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.purity).toFixed(3);
	outputGood.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.mass).toFixed(3);
	percentGood.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2);	
	pureInpTrash.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.purity).toFixed(3);
	outputTrash.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.mass).toFixed(3);
	percentTrash.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.percent_exit).toFixed(2);
	//Привязка функций
	outputStart.addEventListener("change",function (){requirementsMassUpdateSort(pageID)});
	outputGood.addEventListener("change",function (){requirementsMassUpdateSort(pageID)});
	outputTrash.addEventListener("change",function (){requirementsMassUpdateSort(pageID)});
	
	percentGood.addEventListener("change",function (){requirementsPercentUpdateSort(pageID)});
	percentTrash.addEventListener("change",function (){requirementsPercentUpdateSort(pageID)});
	
	outputStart.addEventListener("change",function (){updateRemovedPercentSort(pageID)});
	outputGood.addEventListener("change",function (){updateRemovedPercentSort(pageID)});
	outputTrash.addEventListener("change",function (){updateRemovedPercentSort(pageID)});
	
	percentGood.addEventListener("change",function (){updateRemovedPercentSort(pageID)});
	percentTrash.addEventListener("change",function (){updateRemovedPercentSort(pageID)});
	
	outputStart.addEventListener("change",function (){updateDataSort(pageID)});
	outputGood.addEventListener("change",function (){updateDataSort(pageID)});
	outputTrash.addEventListener("change",function (){updateDataSort(pageID)});
	
	percentGood.addEventListener("change",function (){updateDataSort(pageID)});
	percentTrash.addEventListener("change",function (){updateDataSort(pageID)});
	
	//Дефолтное обновление масс
	requirementsMassUpdateSort(pageID);

	//Вызов привязки слушателей для страницы экономического обоснования economic_model.js	
	setupOperationGraph();
}
function requirementsMassUpdateSort(pageID){
	var sustamentID = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.ColumnState.indexOf("active");
	var outputStart = document.getElementById('outputStart_' + pageID + '_' + 'S');
	var outputGood = document.getElementById('outputGood_' + pageID + '_' + 'S');
	var percentGood = document.getElementById('percentGood_' + pageID + '_' + 'S');
	var outputTrash = document.getElementById('outputTrash_' + pageID + '_' + 'S');
	var percentTrash = document.getElementById('percentTrash_' + pageID + '_' + 'S');

	switch(sustamentID){
		case 0:
			outputStart.value = outputStart.value < 0 ? Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass).toFixed(3) : Number(outputStart.value).toFixed(3);
			pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass = Number(outputStart.value);			
			pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.mass = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass/100 * pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.percent_exit;
			pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.mass = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass/100 * pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.percent_exit;
			
			outputGood.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.mass).toFixed(3);
			outputTrash.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.mass).toFixed(3);
			percentGood.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2);
			percentTrash.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.percent_exit).toFixed(2);
			break;
		case 1:
			outputGood.value = outputGood.value < 0 ? Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.mass).toFixed(3) : Number(outputGood.value).toFixed(3);
			pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.mass = Number(outputGood.value);
			//Проверка максимального выхода
			checkSuitableFractionExit();
			if(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.ColumnState[0] == "unlock"){
				pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass += Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.mass - pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass + pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.mass);
				outputStart.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass).toFixed(3);
				
				pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.percent_exit = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass) > 0 ? Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.mass /pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass * 100).toFixed(2) : 0;
				pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.percent_exit = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass) > 0 ? Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.percent_exit - pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2) : 0;

				outputGood.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.mass).toFixed(3);
				outputTrash.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.mass).toFixed(3);
				percentGood.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2);
				percentTrash.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.percent_exit).toFixed(2);
			} 
			else{
				pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.mass = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass - pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.mass);
				if(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.mass < 0){
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.mass = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass);
					outputGood.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.mass).toFixed(3);
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.mass = 0;
				}
				
				pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.percent_exit = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass) > 0 ? Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.mass / pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass * 100).toFixed(2) : 0;
				pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.percent_exit = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass) > 0 ? Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.percent_exit - pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.percent_exit).toFixed(2) : 0;
				
				outputGood.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.mass).toFixed(3);
				outputTrash.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.mass).toFixed(3);
				percentGood.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2);
				percentTrash.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.percent_exit).toFixed(2)
			}
			break;
		case 2:
			outputTrash.value = outputTrash.value < 0 ? Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.mass).toFixed(3) : Number(outputTrash.value).toFixed(3);
			pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.mass = Number(outputTrash.value);
			//Проверка максимального выхода
			checkWeedFractionExit();
			if(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.ColumnState[0] == "unlock"){
				pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass += Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.mass - pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass + pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.mass);
				outputStart.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass).toFixed(3);
				
				pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.percent_exit = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass) > 0 ? Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.mass / pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass * 100).toFixed(2) : 0;
				pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.percent_exit = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass) > 0 ? Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.percent_exit - pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2) : 0;

				outputGood.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.mass).toFixed(3);
				outputTrash.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.mass).toFixed(3);
				percentGood.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2);
				percentTrash.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.percent_exit).toFixed(2);
			} 
			else{
				pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.mass = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass - pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.mass);
				if(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.mass < 0){
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.mass = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass);
					outputTrash.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.mass).toFixed(3);
					pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.mass = 0;
				}
				
				pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.percent_exit = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass) > 0 ? Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.mass / pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass * 100).toFixed(2) : 0;
				pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.percent_exit = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass) > 0 ? Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.percent_exit - pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2) : 0;

				outputGood.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.mass).toFixed(3);
				outputTrash.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.mass).toFixed(3);
				percentGood.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(2);
				percentTrash.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.weedFraction.percent_exit).toFixed(2);
			}
			break;
	}
	setupFractionExitSort(pageID);
	if(!refreshSortCheck){
		refreshSortCheck = true;
		refreshSortData(pageID);
		refreshSortCheck = false;
	}	
}

//выбор листа требований

function CalculateListNumberSort(){
	var menu = document.getElementById('dropdown-contentProtocol');
	var sortProtocol_MainBlock = document.getElementById('sortProtocol_MainBlock');
	if(menu.style.display == 'none'){
		var menuLength = menu.children[0].children.length-1;
		if(menu.children[0].children.length > 1){
			for(var i = Number(menu.children[0].children.length); i > 1; i--){
				menu.children[0].children[i-1].remove();
			}
		}
		for(var i = 1; i < sortProtocol_MainBlock.children.length; i++){
			var row = menu.children[0].children[0].cloneNode(true);
			row.value = i;
			row.style= 'display :flex; flex-direction: column';
			row.addEventListener('click', function(){
				var operatingModeBlock = document.getElementById('operatingModeBlock');
				var dropdownMenu = document.getElementById('dropdown-contentProtocol');
				var previusPageID = Number(dropdown_ListNumberProtocol.textContent);
				if(menuLength == pageProtocolRow[ProtocolPage-1].pageSortRow.length){
					if(pageProtocolRow[ProtocolPage-1].pageSortRow[previusPageID-1].economicRowData.length == 0 || pageProtocolRow[ProtocolPage-1].pageSortRow[previusPageID-1].economicRowData.elements.length == 0){
						pageProtocolRow[ProtocolPage-1].pageSortRow[previusPageID-1].economicRowData = economicRowData;					
					}
				}				
				pageId = Number(this.value);
				SortPage = pageId;
				dropdown_ListNumberProtocol.textContent = pageId;
				economicRowData = pageProtocolRow[ProtocolPage-1].pageSortRow[pageId-1].economicRowData;				
				removeEconomicRow();
				fillEconomicRowBySort(SortPage);
				viewCurrentlyParam();
				operatingModeBlock.children[0].children[0].children[0].click();
				operatingModeViev(); 
				updateDataSort(SortPage);
				hideRequirementsSort(SortPage);
				dropdownMenu.style.display = 'none';
				for(var z = 1; z<= economicRowData.elements.length; z++){
					addResult(z);
				}
				if(pageProtocolRow.length != 0 && pageProtocolRow[ProtocolPage-1].pageSortRow.length != 0){
					resetRowValueSort();
				}
			});
			menu.children[0].appendChild(row);			
		}		
	}
	dropdownListViewSort();
}
// отображение меню списка листов требований
function dropdownListViewSort(){
	var menu = document.getElementById('dropdown-contentProtocol');
	if(menu.style.display == 'none'){
		menu.style= 'display :flex; flex-direction: column';
	}
	else{
		menu.style.display = 'none';
	}
}

//  функа на запись econom row
function fillEconomicRowBySort(pageId){
	var custom = pageProtocolRow[ProtocolPage-1].pageSortRow[pageId-1].economicRowData.elements.length;
	for(var i = 0; i < custom; i++){
		addrowGraph();		
	}
	cloneFixRow();
	cloneArticleRow();		
		
}
function hideRequirementsSort(pageId){
	for(var i = 0; i< sortProtocol_MainBlock.children.length; i++){
		sortProtocol_MainBlock.children[i].style.display = 'none';
	}
	sortProtocol_MainBlock.children[pageId].style= 'display :flex; flex-direction: column';
}

// очистка листов перед заполнением под выбранный протокол
function clearSortList(pageId){
	var mainBlock = document.getElementById('sortProtocol_MainBlock');
	for(var i = mainBlock.children.length; i > 1; i--){
		mainBlock.children[i-1].remove();
	}
	createSortList(pageId);
	
	if(pageProtocolRow.length != 0 && pageProtocolRow[ProtocolPage-1].pageSortRow.length != 0){
		resetRowValueSort();
	}
	
}
// создание листов перед заполнением под выбранный протокол
function createSortList(pageId){
	for(var i = 0; i < pageProtocolRow[pageId-1].pageSortRow.length; i++){		
		var row = sortProtocol_0.cloneNode(true);
		var idRow = Number(sortProtocol_MainBlock.children.length);

		row.style.display = '';
		row.id = 'sortProtocol_' + idRow;
		//  titleBlock
		row.children[0].children[2].children[0].children[1].id = 'companyName_' + idRow + '_' + 'S';
		row.children[0].children[2].children[0].children[1].value = idRow + 1;
		row.children[0].children[2].children[0].children[2].addEventListener('click', removePageCustomerSort(idRow));
		row.children[0].children[2].children[1].children[1].id = 'userManagerName_' + idRow + '_S';
		row.children[0].children[2].children[1].children[1].addEventListener('change', setTitleTableSR('userManagerName_' + idRow + '_S'));
		row.children[0].children[2].children[2].children[1].id = 'createDateProtocol_' + idRow + '_S';
		row.children[0].children[2].children[2].children[1].addEventListener('change', setTitleTableSR('createDateProtocol_' + idRow + '_S'));
		//  pageContent
		row.children[1].children[0].children[0].id = 'defaultUnit_' + idRow + '_' + 'S';
		row.children[1].children[0].children[0].children[0].children[1].addEventListener('click', requirementsBlockVievSort(idRow));
		row.children[1].children[0].children[1].id = 'fraction_' + idRow + '_' + 'S';
		row.children[1].children[0].children[1].children[1].id = 'fractionSource_1_' + idRow + '_' + 'S';
		row.children[1].children[0].children[1].children[1].children[0].children[0].id = 'Source_1_' + idRow + '_' + 'S';
		row.children[1].children[0].children[1].children[1].children[1].id = 'SortList_1_' + idRow + '_' + 'S';
		row.children[1].children[0].children[1].children[1].children[1].children[0].addEventListener('click', SortListContentBlockViev('SortListContent_1_' + idRow + '_' + 'S'));
		row.children[1].children[0].children[1].children[1].children[1].children[1].id = 'SortListContent_1_' + idRow + '_' + 'S';
		row.children[1].children[0].children[1].children[2].id = 'fractionSource_2_' + idRow + '_' + 'S';
		row.children[1].children[0].children[1].children[2].children[0].children[0].id = 'Source_2_' + idRow + '_' + 'S';
		row.children[1].children[0].children[1].children[3].id = 'fractionSource_3_' + idRow + '_' + 'S';
		row.children[1].children[0].children[1].children[3].children[0].children[0].id = 'Source_3_' + idRow + '_' + 'S';
		row.children[1].children[0].children[2].children[1].id = 'fractionMainValues_1_' + idRow + '_' + 'S'; 
		row.children[1].children[0].children[2].children[1].children[0].children[0].children[0].id = 'pureInpStart_' + idRow + '_' + 'S';
		row.children[1].children[0].children[2].children[1].children[1].children[0].children[0].id = 'outputStart_' + idRow + '_' + 'S';
		row.children[1].children[0].children[2].children[1].children[1].children[0].children[0].addEventListener('click', ShowUpsertDropdownSort('outputStart_' + idRow + '_' + 'S', idRow));
		row.children[1].children[0].children[2].children[1].children[1].children[0].children[1].id = 'outputStartButton_' + idRow + '_' + 'S';
		row.children[1].children[0].children[2].children[1].children[2].children[0].children[0].id = 'percentStart_' + idRow + '_' + 'S';
		row.children[1].children[0].children[2].children[2].id = 'fractionMainValues_2_' + idRow + '_' + 'S';
		row.children[1].children[0].children[2].children[2].children[0].children[0].children[0].id = 'pureInpGood_' + idRow + '_' + 'S';
		row.children[1].children[0].children[2].children[2].children[1].children[0].children[0].id = 'outputGood_' + idRow + '_' + 'S';
		row.children[1].children[0].children[2].children[2].children[1].children[0].children[0].addEventListener('click', ShowUpsertDropdownSort('outputGood_' + idRow + '_' + 'S', idRow));
		row.children[1].children[0].children[2].children[2].children[1].children[0].children[1].id = 'outputGoodButton_' + idRow + '_' + 'S';
		row.children[1].children[0].children[2].children[2].children[2].children[0].children[0].id = 'percentGood_' + idRow + '_' + 'S';
		row.children[1].children[0].children[2].children[2].children[2].children[0].children[0].addEventListener('click', ShowUpsertDropdownSort('percentGood_' + idRow + '_' + 'S', idRow));
		row.children[1].children[0].children[2].children[2].children[2].children[1].id = 'percentGoodButton_' + idRow + '_' + 'S';
		row.children[1].children[0].children[2].children[3].id = 'fractionMainValues_3_' + idRow + '_' + 'S';
		row.children[1].children[0].children[2].children[3].children[0].children[0].children[0].id = 'pureInpTrash_' + idRow + '_' + 'S';
		row.children[1].children[0].children[2].children[3].children[1].children[0].children[0].id = 'outputTrash_' + idRow + '_' + 'S';
		row.children[1].children[0].children[2].children[3].children[1].children[0].children[0].addEventListener('click', ShowUpsertDropdownSort('outputTrash_' + idRow + '_' + 'S', idRow));
		row.children[1].children[0].children[2].children[3].children[1].children[1].id = 'outputTrashButton_' + idRow + '_' + 'S';
		row.children[1].children[0].children[2].children[3].children[2].children[0].children[0].id = 'percentTrash_' + idRow + '_' + 'S';
		row.children[1].children[0].children[2].children[3].children[2].children[0].children[0].addEventListener('click', ShowUpsertDropdownSort('percentTrash_' + idRow + '_' + 'S', idRow));
		row.children[1].children[0].children[2].children[3].children[2].children[1].id = 'percentTrashButton_' + idRow + '_' + 'S';
		row.children[1].children[0].children[3].id = 'lockBlock_' + idRow + '_' + 'S';
		row.children[1].children[0].children[3].children[1].id = 'fractionLockValue_1_' + idRow + '_' + 'S';
		row.children[1].children[0].children[3].children[1].children[0].children[0].children[0].id = 'Lock_1_' + idRow + '_' + 'S';
		row.children[1].children[0].children[3].children[1].children[0].children[0].children[0].addEventListener('click', CheckLockInputSort('Lock_1_' + idRow + '_' + 'S'));
		row.children[1].children[0].children[3].children[2].id = 'fractionLockValue_2_' + idRow + '_' + 'S';
		row.children[1].children[0].children[3].children[2].children[0].children[0].children[0].id = 'Lock_2_' + idRow + '_' + 'S';
		row.children[1].children[0].children[3].children[2].children[0].children[0].children[0].addEventListener('click', CheckLockInputSort('Lock_2_' + idRow + '_' + 'S'));
		row.children[1].children[0].children[3].children[3].id = 'fractionLockValue_3_' + idRow + '_' + 'S';
		row.children[1].children[0].children[3].children[3].children[0].children[0].children[0].id = 'Lock_3_' + idRow + '_' + 'S';
		row.children[1].children[0].children[3].children[3].children[0].children[0].children[0].addEventListener('click', CheckLockInputSort('Lock_3_' + idRow + '_' + 'S'));
		row.children[1].children[0].children[4].id  = 'rows_' + idRow + '_' + 'S'; 
		row.children[1].children[0].children[4].children[0].id = 'mainRow_0' + '_' + idRow + '_' + 'S';
		row.children[1].children[0].children[4].children[0].children[0].children[0].children[0].children[0].children[0].id = 'photoComponent_' + (idRow-1) + '_' + 'S';
		row.children[1].children[0].children[4].children[0].children[0].children[0].children[0].children[1].id = 'componentNumber_' + (idRow-1) + '_' + 'S';
		row.children[1].children[0].children[4].children[0].children[0].children[0].children[0].children[2].id = 'deleteButton_' + (idRow-1) + '_' + 'S';
		// 																rowBlock	rowOptionBlock filterBlock scrollRow	
		row.children[1].children[0].children[4].children[0].children[0].children[0].children[1].children[1].children[0].children[1].id = 'addOption_' + (idRow-1) + '_' + 'S';
		row.children[1].children[0].children[4].children[0].children[0].children[0].children[1].children[2].children[0].children[0].children[0].id = 'clsOption_0_' + (idRow-1) + '_' + 'S';
		row.children[1].children[0].children[4].children[0].children[0].children[0].children[1].children[2].children[3].children[1].id = 'photoBlockButton_' + (idRow-1) + '_' + 'S';
		row.children[1].children[0].children[5].children[0].id = 'addButton_' + idRow + '_' + 'S';
		// row.children[1].children[0].children[5].children[0].addEventListener('click', addrowSort(idRow));
		sortProtocol_MainBlock.appendChild(row);
		setupRequirementsTableSort(idRow);
	}
	
	for(var i = 1; i < sortProtocol_MainBlock.children.length; i++){
		if(pageProtocolRow[ProtocolPage-1].pageSortRow.length > 0){
			addrowSortAfterRefresh(i);
		}
	}
	
		
}
// создание строк листов перед заполнением под выбранный протокол
function addrowSortAfterRefresh(pageID){
	var pageNumber = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort.length;
	for(var k = 1; k <= pageNumber; k++){
		var mainRow = document.getElementById('mainRow_0_' + (pageID) + '_' + 'S');
		var row = mainRow.cloneNode(true);
		var rows = document.getElementById('rows_' + pageID + '_' + 'S');
		var idRow = Number(rows.children.length);
		row.style.display = 'flex';
		row.id = 'mainRow_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[0].id = 'rowNumberId_' + idRow + '_' + pageID + '_' + 'S';
		// row.children[0].children[0].children[0].addEventListener('mouseenter', ShowDeleteButton('rowNumberId_' + idRow + '_' + pageID + '_' + 'S'));
		row.children[0].children[0].children[0].addEventListener('mouseleave', HideDeleteButton('rowNumberId_' + idRow + '_' + pageID + '_' + 'S'));
		row.children[0].children[0].children[0].children[0].children[0].id = 'photoComponent_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[0].children[1].id = 'componentNumber_00_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[0].children[1].textContent = idRow;
		row.children[0].children[0].children[0].children[2].id = 'deleteButton_00_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[0].children[2].addEventListener('click', removeRowSort('deleteButton_00_' + idRow + '_' + pageID + '_' + 'S'));
		// classifier
		row.children[0].children[0].children[1].id = 'classifier_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[1].children[0].id = 'clsInputResultBlock_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[1].children[0].children[0].id = 'classifierInpurResult_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[1].children[0].children[1].children[0].id = 'controlButtonIdHide_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[1].children[0].children[1].children[0].addEventListener('click', HideDropdownSort('controlButtonIdHide_' + idRow + '_' + pageID + '_' + 'S'));
		row.children[0].children[0].children[1].children[0].children[1].children[0].addEventListener('click', refreshMassof1000Sort(idRow, pageID));
		row.children[0].children[0].children[1].children[1].children[0].children[0].id = 'clsInput_test_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[1].children[1].children[0].children[0].addEventListener('focus', ShowDropdownSort(idRow, pageID));
		row.children[0].children[0].children[1].children[1].children[0].children[0].addEventListener('input', StartInputListenersSort(idRow, pageID));
		row.children[0].children[0].children[1].children[1].children[0].children[1].id = 'addOption_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[1].children[1].children[0].children[1].addEventListener('click', searchidSort(idRow, pageID));
		row.children[0].children[0].children[1].children[2].id = 'clsDropdown_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[1].children[2].children[0].children[0].children[0].id = 'clsOption_0_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[1].children[2].children[1].id = 'infoTitle_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[1].children[2].children[1].children[1].id = 'infoBlockButton_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[1].children[2].children[1].children[1].addEventListener('click', infoBlockSort(idRow, pageID));
		row.children[0].children[0].children[1].children[2].children[2].id = 'infoBlock_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[1].children[2].children[3].id = 'photoTitle_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[1].children[2].children[3].children[1].id = 'photoBlockButton_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[1].children[2].children[3].children[1].addEventListener('click', photoBlockSort(idRow, pageID));
		row.children[0].children[0].children[1].children[2].children[4].id = 'photoBlock_' + idRow + '_' + pageID + '_' + 'S';
		// valueBlock	
		row.children[0].children[0].children[2].id = 'valueBlock_1_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[2].children[0].id = 'massInputBlock_1_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[2].children[0].children[0].children[0].addEventListener('change', changeMassValueSort('massDropdown_1_' + idRow + '_' + pageID + '_' + 'S', 'massInputBlock_1_' + idRow + '_' + pageID + '_' + 'S'));
		row.children[0].children[0].children[2].children[0].children[4].id = 'controlButtonId_1_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[2].children[0].children[4].addEventListener('click', HideMassDropdownSort('controlButtonId_1_' + idRow + '_' + pageID + '_' + 'S'));
		row.children[0].children[0].children[2].children[1].id = 'massInputResultBlock_1_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[2].children[1].children[0].id = 'massInput_1_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[2].children[1].children[0].addEventListener('click', ShowMassDropdownSort('massInput_1_' + idRow + '_' + pageID + '_' + 'S'));
		row.children[0].children[0].children[2].children[2].id = 'moreTitle_1_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[2].children[2].children[1].id = 'moreBlockButton_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[2].children[2].children[1].addEventListener('click', moreBlock('moreBlock_' + idRow + '_' + pageID + '_' + 'S','moreBlockButton_' + idRow + '_' + pageID + '_' + 'S' , 'moreTitle_1_' + idRow + '_' + pageID + '_' + 'S'));
		row.children[0].children[0].children[2].children[3].id = 'moreBlock_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[2].children[3].children[0].id = 'massDropdown_1_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[2].children[0].children[1].children[0].addEventListener("click", switchToggleSort);
		row.children[0].children[0].children[2].children[0].children[1].children[0].addEventListener("click", checkotherToggleSort(idRow, pageID));
		row.children[0].children[0].children[2].children[0].children[2].children[0].addEventListener("click", switchToggleSort);
		row.children[0].children[0].children[2].children[0].children[3].children[0].addEventListener("click", switchToggleSort);
		// valueBlock_2	
		row.children[0].children[0].children[3].id = 'valueBlock_2_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[3].children[0].id = 'massInputBlock_2_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[3].children[0].children[0].children[0].addEventListener('change', changeMassValueSort('massDropdown_2_' + idRow + '_' + pageID + '_' + 'S', 'massInputBlock_2_' + idRow + '_' + pageID + '_' + 'S'));
		row.children[0].children[0].children[3].children[0].children[4].id = 'controlButtonId_2_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[3].children[0].children[4].addEventListener('click', HideMassDropdownSort('controlButtonId_2_' + idRow + '_' + pageID + '_' + 'S'));
		row.children[0].children[0].children[3].children[1].id = 'massInputResultBlock_2_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[3].children[1].children[0].id = 'massInput_2_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[3].children[1].children[0].addEventListener('click', ShowMassDropdownSort('massInput_2_' + idRow + '_' + pageID + '_' + 'S'));
		row.children[0].children[0].children[3].children[2].id = 'moreTitle_2_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[3].children[2].children[1].id = 'moreBlockButton_2_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[3].children[2].children[1].addEventListener('click', moreBlock('moreBlock_2_' + idRow + '_' + pageID + '_' + 'S','moreBlockButton_2_' + idRow + '_' + pageID + '_' + 'S', 'moreTitle_2_' + idRow + '_' + pageID + '_' + 'S'));
		row.children[0].children[0].children[3].children[3].id = 'moreBlock_2_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[3].children[3].children[0].id = 'massDropdown_2_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[3].children[0].children[1].children[0].addEventListener("click", switchToggleSort);
		row.children[0].children[0].children[3].children[0].children[1].children[0].addEventListener("click", checkotherToggleSort(idRow, pageID));
		row.children[0].children[0].children[3].children[0].children[2].children[0].addEventListener("click", switchToggleSort);
		row.children[0].children[0].children[3].children[0].children[3].children[0].addEventListener("click", switchToggleSort);
		// valueBlock_3	
		row.children[0].children[0].children[4].id = 'valueBlock_3_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[4].children[0].id = 'massInputBlock_3_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[4].children[0].children[0].children[0].addEventListener('change', changeMassValueSort('massDropdown_3_' + idRow + '_' + pageID + '_' + 'S', 'massInputBlock_3_' + idRow + '_' + pageID + '_' + 'S'));
		row.children[0].children[0].children[4].children[0].children[4].id = 'controlButtonId_3_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[4].children[0].children[4].addEventListener('click', HideMassDropdownSort('controlButtonId_3_' + idRow + '_' + pageID + '_' + 'S'));
		row.children[0].children[0].children[4].children[1].id = 'massInputResultBlock_3_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[4].children[1].children[0].id = 'massInput_3_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[4].children[1].children[0].addEventListener('click', ShowMassDropdownSort('massInput_3_' + idRow + '_' + pageID + '_' + 'S'));
		row.children[0].children[0].children[4].children[2].id = 'moreTitle_3_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[4].children[2].children[1].id = 'moreBlockButton_3_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[4].children[2].children[1].addEventListener('click', moreBlock('moreBlock_3_' + idRow + '_' + pageID + '_' + 'S','moreBlockButton_3_' + idRow + '_' + pageID + '_' + 'S', 'moreTitle_3_' + idRow + '_' + pageID + '_' + 'S'));
		row.children[0].children[0].children[4].children[3].id = 'moreBlock_3_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[4].children[3].children[0].id = 'massDropdown_3_' + idRow + '_' + pageID + '_' + 'S';
		row.children[0].children[0].children[4].children[0].children[1].children[0].addEventListener("click", switchToggleSort);
		row.children[0].children[0].children[4].children[0].children[1].children[0].addEventListener("click", checkotherToggleSort(idRow, pageID));
		row.children[0].children[0].children[4].children[0].children[2].children[0].addEventListener("click", switchToggleSort);
		row.children[0].children[0].children[4].children[0].children[3].children[0].addEventListener("click", switchToggleSort);
		rows.appendChild(row);
		
	}		
	
	
	if(idRow != pageNumber){
		switchDropdownMassSort('massDropdown_1_' + (idRow-1) + '_' + pageID + '_' + 'S');
	}
	else{
		switchDropdownMassSort('massDropdown_1_' + idRow + '_' + pageID + '_' + 'S');
	}
	updateRemovedPercentSort(pageID);
	for(var k = 1; k <= pageNumber; k++){
		mathfComponentFunctionSort('massDropdown_1_' + k + '_' + pageID + '_' + 'S');
		mathfComponentFunctionSort('massDropdown_2_' + k + '_' + pageID + '_' + 'S');
		mathfComponentFunctionSort('massDropdown_3_' + k + '_' + pageID + '_' + 'S');
		uploadRowsSortText(pageID, k);
		setPercentSortText(pageID, k);
	}	
	prepareDefaultUnitSort(pageID);
}
//заполнение результатов поиска для сортировки
function uploadRowsSortText(pageID, idRow){
	//строка поиска
	var clsInput_testRow = document.getElementById('clsInput_test_' + idRow + '_' + pageID + '_S');
	//результат поиска
	var clsDropdown = document.getElementById('clsDropdown_' + idRow + '_' + pageID + '_S');
	//кнопка ок
	var controlButtonIdHide = document.getElementById('controlButtonIdHide_' + idRow + '_' + pageID + '_S');
	//кнопка своего варианта
	var addOption = document.getElementById('addOption_' + idRow + '_' + pageID + '_S');
	
	dispatchEVSortText(clsInput_testRow, clsDropdown, pageID, idRow, addOption);		
	switchDropdownMassSort('massDropdown_1_' + idRow + '_' + pageID + '_S');
	controlButtonIdHide.click();
		
}
function dispatchEVSortText(clsInput_testRow, clsDropdown, pageID, idRow, addOption){
	clsInput_testRow.dispatchEvent(event_1);
	var splitValue = pageProtocolRow[ProtocolPage-1].ProtocolRow[idRow-1].SearchProductResult;
	var inputOption = clsDropdown.children[0]; 
	var temp = '';
	for(var f = 0; f < splitValue.length; f++){
		clsInput_testRow.value = temp == '' ? splitValue[f] : temp + ' ' + splitValue[f];
		clsInput_testRow.dispatchEvent(event_2);
		if(clsInput_testRow.value == inputOption.children[1].children[0].value){
			var temp = '';
			inputOption.children[1].children[0].click();
		}
		else{
			var temp = clsInput_testRow.value;
			addOption.click();
		}
	}
}
function setPercentSortText(pageID,idRow){
	var massInput1 = document.getElementById('massInput_1_' + idRow + '_' + pageID + '_S');
	var massInputBlock1 = document.getElementById('massInputBlock_1_' + idRow + '_' + pageID + '_S');
	var controlButtonId1 = document.getElementById('controlButtonId_1_' + idRow + '_' + pageID + '_S');

	var massInput2 = document.getElementById('massInput_2_' + idRow + '_' + pageID + '_S');
	var massInputBlock2 = document.getElementById('massInputBlock_2_' + idRow + '_' + pageID + '_S');
	var controlButtonId2 = document.getElementById('controlButtonId_2_' + idRow + '_' + pageID + '_S');

	var outputStart = document.getElementById('outputStart_' +  pageID + '_S');
	var outputStartButton = document.getElementById('outputStartButton_' + pageID + '_S');

	if(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].mainFractionParent == ''){
		outputStart.dispatchEvent(event_4);
		outputStart.value =  pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass;
		outputStart.dispatchEvent(event_3);
		outputStartButton.dispatchEvent(event_4);
		massInput1.dispatchEvent(event_4);
		massInputBlock1.children[0].children[0].value = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].mainFractionData.unitOption.percent;
		massInputBlock1.children[0].children[0].dispatchEvent(event_3);
		controlButtonId1.dispatchEvent(event_4);
	}
	massInput2.dispatchEvent(event_4);
	massInputBlock2.children[0].children[0].value = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1].suitableFractionData.unitOption.percent;
	massInputBlock2.children[0].children[0].dispatchEvent(event_3);
	controlButtonId2.dispatchEvent(event_4);
}


function changeMassInputBlockFormatSort(object, imgName){
	var main = object.parentNode.parentNode;
	var fraction = main.id.split('_')[1];	
	var pageID =  main.id.split('_')[3];
	var idRow =  main.id.split('_')[2];
	var typeSustatment = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.DefaultUnit;
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
		main.children[0].children[0].value = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1][fraction].custom;
	}
	else{
		main.children[0].children[0].type = 'number';
		main.children[0].children[0].value = pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].ProtocolSort[idRow-1][fraction].unitOption[typeSustatment];
	}
}

function setupMainFractionParent(idRow, name){
	return function(e){
		var pageID = Number(idRow) - 1;
		pageProtocolRow[ProtocolPage-1].pageSortRow[pageID].mainFractionParent.push(name);				
	}
}
function refreshSortData(pageID){
	var event = new Event('change');
	for(var z = 0; z < 9; z++){
		for(var i = 0; i < pageProtocolRow[ProtocolPage-1].pageSortRow.length; i++){
			if(pageProtocolRow[ProtocolPage-1].pageSortRow[i].mainFractionParent.length != 0 && (pageID) != i && pageProtocolRow[ProtocolPage-1].pageSortRow[i].mainFractionParent.length == 1){
	
				var SortOrProt = pageProtocolRow[ProtocolPage-1].pageSortRow[i].mainFractionParent[0].split('_')[0];
				var fraction = pageProtocolRow[ProtocolPage-1].pageSortRow[i].mainFractionParent[0].split('_')[1];
				var parentNumber = pageProtocolRow[ProtocolPage-1].pageSortRow[i].mainFractionParent[0].split('_')[2];			
				pageProtocolRow[ProtocolPage-1].pageSortRow[i].Sustatment.ColumnState = ["active", "lock", "unlock"];
				var rowsBlock = document.getElementById('rows_' + (i+1) + '_S');
				switch(SortOrProt){
					case 'Prot':
						switch(fraction){
							case 'suitableFraction':
								var outputStart = document.getElementById('outputStart_' + (i+1) + '_S');
								outputStart.value = pageProtocolRow[ProtocolPage-1].requirementsTable.suitableFraction.mass;
								outputStart.dispatchEvent(event);
								
								for(var k= 0; k < pageProtocolRow[ProtocolPage-1].pageSortRow[i].ProtocolSort.length; k++){
									rowsBlock.children[k+1].children[0].children[0].children[2].children[3].children[0].children[0].children[0].children[0].value = pageProtocolRow[ProtocolPage-1].ProtocolRow[k].suitableFractionData.unitOption.percent;
									rowsBlock.children[k+1].children[0].children[0].children[2].children[3].children[0].children[0].children[0].children[0].dispatchEvent(event);
								}							
								break;
							case 'weedFraction':
								var outputStart = document.getElementById('outputStart_' + (i+1) + '_S');								
								outputStart.value = pageProtocolRow[ProtocolPage-1].requirementsTable.weedFraction.mass;
								outputStart.dispatchEvent(event);
	
								for(var k= 0; k < pageProtocolRow[ProtocolPage-1].pageSortRow[i].ProtocolSort.length; k++){
									rowsBlock.children[k+1].children[0].children[0].children[2].children[3].children[0].children[0].children[0].children[0].value = pageProtocolRow[ProtocolPage-1].ProtocolRow[k].weedFractionData.unitOption.percent;
									rowsBlock.children[k+1].children[0].children[0].children[2].children[3].children[0].children[0].children[0].children[0].dispatchEvent(event);
								}
								break;
						}					
						break;
					case 'Sort':
						switch(fraction){
							case 'suitableFraction':
								var outputStart = document.getElementById('outputStart_' + (i+1) + '_S');
								outputStart.value = pageProtocolRow[ProtocolPage-1].pageSortRow[parentNumber-1].requirementsTable.suitableFraction.mass;
								outputStart.dispatchEvent(event);
	
								for(var k= 0; k < pageProtocolRow[ProtocolPage-1].pageSortRow[i].ProtocolSort.length; k++){
									if((pageID-1) != k){
										rowsBlock.children[k+1].children[0].children[0].children[2].children[3].children[0].children[0].children[0].children[0].value = pageProtocolRow[ProtocolPage-1].pageSortRow[parentNumber-1].ProtocolSort[k].suitableFractionData.unitOption.percent;
										rowsBlock.children[k+1].children[0].children[0].children[2].children[3].children[0].children[0].children[0].children[0].dispatchEvent(event);
									}								
								}
								break;
							case 'weedFraction':
								var outputStart = document.getElementById('outputStart_' + (i+1) + '_S');
								outputStart.value = pageProtocolRow[ProtocolPage-1].pageSortRow[parentNumber-1].requirementsTable.weedFraction.mass;
								outputStart.dispatchEvent(event);
	
								for(var k= 0; k < pageProtocolRow[ProtocolPage-1].pageSortRow[i].ProtocolSort.length; k++){
									if((pageID-1) != k){
										rowsBlock.children[k+1].children[0].children[0].children[2].children[3].children[0].children[0].children[0].children[0].value = pageProtocolRow[ProtocolPage-1].pageSortRow[parentNumber-1].ProtocolSort[k].weedFractionData.unitOption.percent;
										rowsBlock.children[k+1].children[0].children[0].children[2].children[3].children[0].children[0].children[0].children[0].dispatchEvent(event);
									}								
								}
								break;
						}
						break;
				}
			}
		}
	}
	// for(var i = 0; i < pageProtocolRow[ProtocolPage-1].pageSortRow.length; i++){
	// 	if(pageProtocolRow[ProtocolPage-1].pageSortRow[i].mainFractionParent.length != 0 && (pageID-1) != i && pageProtocolRow[ProtocolPage-1].pageSortRow[i].mainFractionParent.length == 1){

	// 		var SortOrProt = pageProtocolRow[ProtocolPage-1].pageSortRow[i].mainFractionParent[0].split('_')[0];
	// 		var fraction = pageProtocolRow[ProtocolPage-1].pageSortRow[i].mainFractionParent[0].split('_')[1];
	// 		var parentNumber = pageProtocolRow[ProtocolPage-1].pageSortRow[i].mainFractionParent[0].split('_')[2];			
	// 		pageProtocolRow[ProtocolPage-1].pageSortRow[i].Sustatment.ColumnState = ["active", "lock", "lock"];
	// 		var rowsBlock = document.getElementById('rows_' + (i+1) + '_S');
	// 		switch(SortOrProt){
	// 			case 'Prot':
	// 				switch(fraction){
	// 					case 'suitableFraction':
	// 						var outputStart = document.getElementById('outputStart_' + (i+1) + '_S');
	// 						outputStart.value = pageProtocolRow[ProtocolPage-1].requirementsTable.suitableFraction.mass;
	// 						outputStart.dispatchEvent(event);
							
	// 						for(var k= 0; k < pageProtocolRow[ProtocolPage-1].pageSortRow[i].ProtocolSort.length; k++){
	// 							rowsBlock.children[k+1].children[0].children[0].children[2].children[3].children[0].children[0].children[0].children[0].value = pageProtocolRow[ProtocolPage-1].ProtocolRow[k].suitableFractionData.unitOption.percent;
	// 							rowsBlock.children[k+1].children[0].children[0].children[2].children[3].children[0].children[0].children[0].children[0].dispatchEvent(event);
	// 						}							
	// 						break;
	// 					case 'weedFraction':
	// 						var outputStart = document.getElementById('outputStart_' + (i+1) + '_S');								
	// 						outputStart.value = pageProtocolRow[ProtocolPage-1].requirementsTable.weedFraction.mass;
	// 						outputStart.dispatchEvent(event);

	// 						for(var k= 0; k < pageProtocolRow[ProtocolPage-1].pageSortRow[i].ProtocolSort.length; k++){
	// 							rowsBlock.children[k+1].children[0].children[0].children[2].children[3].children[0].children[0].children[0].children[0].value = pageProtocolRow[ProtocolPage-1].ProtocolRow[k].suitableFractionData.unitOption.percent;
	// 							rowsBlock.children[k+1].children[0].children[0].children[2].children[3].children[0].children[0].children[0].children[0].dispatchEvent(event);
	// 						}
	// 						break;
	// 				}					
	// 				break;
	// 			case 'Sort':
	// 				switch(fraction){
	// 					case 'suitableFraction':
	// 						var outputStart = document.getElementById('outputStart_' + (i+1) + '_S');
	// 						outputStart.value = pageProtocolRow[ProtocolPage-1].pageSortRow[parentNumber-1].requirementsTable.suitableFraction.mass;
	// 						outputStart.dispatchEvent(event);

	// 						for(var k= 0; k < pageProtocolRow[ProtocolPage-1].pageSortRow[i].ProtocolSort.length; k++){
	// 							if((pageID-1) != k){
	// 								rowsBlock.children[k+1].children[0].children[0].children[2].children[3].children[0].children[0].children[0].children[0].value = pageProtocolRow[ProtocolPage-1].pageSortRow[parentNumber-1].ProtocolSort[k].suitableFractionData.unitOption.percent;
	// 								rowsBlock.children[k+1].children[0].children[0].children[2].children[3].children[0].children[0].children[0].children[0].dispatchEvent(event);
	// 							}								
	// 						}
	// 						break;
	// 					case 'weedFraction':
	// 						var outputStart = document.getElementById('outputStart_' + (i+1) + '_S');
	// 						outputStart.value = pageProtocolRow[ProtocolPage-1].pageSortRow[parentNumber-1].requirementsTable.weedFraction.mass;
	// 						outputStart.dispatchEvent(event);

	// 						for(var k= 0; k < pageProtocolRow[ProtocolPage-1].pageSortRow[i].ProtocolSort.length; k++){
	// 							if((pageID-1) != k){
	// 								rowsBlock.children[k+1].children[0].children[0].children[2].children[3].children[0].children[0].children[0].children[0].value = pageProtocolRow[ProtocolPage-1].pageSortRow[parentNumber-1].ProtocolSort[k].weedFractionData.unitOption.percent;
	// 								rowsBlock.children[k+1].children[0].children[0].children[2].children[3].children[0].children[0].children[0].children[0].dispatchEvent(event);
	// 							}								
	// 						}
	// 						break;
	// 				}
	// 				break;
	// 		}
	// 	}
	// }
}

function resetRowValueSort(){
	for(var i = 0; i < pageProtocolRow[ProtocolPage-1].pageSortRow.length; i++){
		if(pageProtocolRow[ProtocolPage-1].pageSortRow[i].ProtocolSort[0].weedFractionData.unitOption.percent == "NaN"){
			var massInp = document.getElementById("massInput_3_1_" + (i+1) + "_S");
			var massInpBlock = document.getElementById("massInputBlock_3_1_" + (i+1) + "_S");
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

function setTitleTableSR(obj){
	return function e(){
		var objBlock = document.getElementById(obj);
		var pageID = objBlock.id.split("_")[1];
		var position = objBlock.id.split("_")[0];

		if(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.TitleTable == null){
			pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.TitleTable = {
					"companyName": '0',
					"userManagerName": '0',
					"createDateProtocol": '0'
			  	}
			
		}
		pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].Sustatment.TitleTable[position] = objBlock.value;
	}
}
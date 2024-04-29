var event_1 = new Event('focus');
var event_2 = new Event('input');
var event_3 = new Event('change');
var event_4 = new Event('click');

function createPages(data){
	//document.getElementById('dropdown_ListNumber').textContent = currentPage;
	//document.getElementById('dropdown_ListNumberProtocol').textContent = ProtocolPage;
	
	var contentRequirements = document.getElementById('dropdown-content');
	var contentProtocol = document.getElementById('dropdown-contentProtocol');
	var addReqButton = document.getElementById('addReqButton');
	var addProtButton = document.getElementById('addProtButton');	
	//создание требований
	for(var i = 0; i < data.requirements.length; i++){
		addReqButton.click();	
		setDeafult(i+1, data);
		setMassReq((i+1), data);
		setFakeReq(i+1,data);
		setTitleReq(i+1,data);
		//создание строк 
		for(var k = 2; k< data.requirements[i].componentRow.length; k++){
			document.getElementById('addButton_' + (i+1)).click();		
		}
		//заполнение строк 
		for(var k = 0; k< data.requirements[i].componentRow.length; k++){
			addrowsReq(i+1, k+1, data);
			settoggleReq(i+1, k+1 ,data);	
			setPercentReq(i+1, k+1 ,data);					
		}	
		setMassReq((i+1), data);
	}	
	pageRow = data.requirements;
	
	if(pageRow.length != 0)
		CalculateListNumber();
	
	contentRequirements.children[0].lastElementChild.click();
	
	//создание протоколов
	for(var i = 0; i < data.protocol.length; i++){
		addProtButton.click();
		setDeafultProt(i+1, data);
		setMassProt((i+1) ,data);
		setFakeProt(i+1, data);
		setTitleProt(i+1, data);
		//создание строк 
		for(var k = 2; k< data.protocol[i].ProtocolRow.length; k++){
			document.getElementById('addButton_' + (i+1) + '_P').click();	
		}
		//заполнение строк 
		for(var k = 0; k< data.protocol[i].ProtocolRow.length; k++){
			addrowsProt(i+1, k+1, data);
			settoggleProt(i+1, k+1 ,data);
			setPercentProt(i+1, k+1 ,data);			
		}
		setMassProt((i+1) ,data);
		
		//создание сортировок
		for(var k = 0; k < data.protocol[i].pageSortRow.length; k++){
			addPageСustomerSort();
			setDeafultSort(i ,k+1, data);
			setFakeSortValue(i+1, k,data);
			setTitleSort(i+1, k,data);
			for(var z = 0; z < data.protocol[i].pageSortRow[k].ProtocolSort.length; z++){
				uploadRowsSort(k+1,i, z+1, data);
				settoggleSort(k+1, i, k, z+1 ,data);
				setPercentSort(k+1, i, k, z+1 ,data);				
			}
			
		}
		for(var k = 0; k < data.protocol[i].pageSortRow.length; k++){	
			if(data.protocol[i].pageSortRow[k].mainFractionParent != ''){
				var SortList = document.getElementById('SortList_1_' + (k+1) + '_S');
				var SortListContent = document.getElementById('SortListContent_1_' + (k+1) + '_S');
				SortList.children[0].dispatchEvent(event_4);
				for(var h = 0; h < SortListContent.children[0].children.length; h++){
					if(SortListContent.children[0].children[h].id == data.protocol[i].pageSortRow[k].mainFractionParent){
						SortListContent.children[0].children[h].click();
						SortList.children[0].dispatchEvent(event_4);
					}					
				}
			}

			
		}
	}
	pageProtocolRow = data.protocol;
	
	if(pageProtocolRow.length != 0)
		CalculateListNumberProtocol();
	
	if(pageProtocolRow.length != 0){
		resetRowValueProt();	
	}
	if(pageProtocolRow.length != 0 && pageProtocolRow[ProtocolPage-1].pageSortRow.length != 0){
		resetRowValueSort();
	}
	family = data.family;
	if(pageProtocolRow.length > 1)
		contentProtocol.children[0].lastElementChild.click();
	else 
		ProtocolRequirementsMenu.click();
}
// ТРЕБОВАНИЯ
//заполнение результатов поиска для требований
function addrowsReq(pageID, idRow, data){
	//строка поиска
	var clsInput_testRow = document.getElementById('clsInput_test_' + idRow + '_' + pageID);
	//результат поиска
	var clsDropdown = document.getElementById('clsDropdown_' + idRow + '_' + pageID);
	//кнопка ок
	var controlButtonIdHide = document.getElementById('controlButtonIdHide_' + idRow + '_' + pageID);
	dispatchEVReq(clsInput_testRow, clsDropdown, pageID, idRow, data);
	controlButtonIdHide.click();
		
}
function dispatchEVReq(clsInput_testRow, clsDropdown, pageID, idRow, data){
	clsInput_testRow.dispatchEvent(event_1);
	var splitValue = data.requirements[pageID-1].componentRow[idRow-1].SearchProductResult;
	var inputOption = clsDropdown.children[0];
	var temp = '';
	splitValue = Array.isArray(splitValue) ? splitValue : [splitValue];
	for(var f = 0; f < splitValue.length; f++){
		clsInput_testRow.value = temp == '' ? splitValue[f] : temp + ' ' + splitValue[f];
		clsInput_testRow.dispatchEvent(event_2);
		if(clsInput_testRow.value == inputOption.children[1].children[0].value){
			var temp = '';
			inputOption.children[1].children[0].click();
		}
		else{
			var temp = clsInput_testRow.value;
		}
	}
}
//заполнение куба 3-3 для требований
function setMassReq(pageID ,data){
	var outputStart = document.getElementById('outputStart_' + pageID);
	var outputStartButton = document.getElementById('outputStartButton_' + pageID);
	
	var outputGood = document.getElementById('outputGood_' + pageID);
	var outputGoodButton = document.getElementById('outputGoodButton_' + pageID);
	
	var outputTrash = document.getElementById('outputTrash_' + pageID);
	var outputTrashButton = document.getElementById('outputTrashButton_' + pageID);
	
	outputStart.dispatchEvent(event_4);
	outputStart.value = data.requirements[pageID-1].requirementsTable.mainFractionData.mass;
	outputStart.dispatchEvent(event_3);	
	outputStartButton.dispatchEvent(event_4);
	
	outputGood.dispatchEvent(event_4);
	outputGood.value = data.requirements[pageID-1].requirementsTable.suitableFraction.mass;
	outputGood.dispatchEvent(event_3);	
	outputGoodButton.dispatchEvent(event_4);
	
	outputTrash.dispatchEvent(event_4);
	outputTrash.value = data.requirements[pageID-1].requirementsTable.weedFraction.mass;
	outputTrash.dispatchEvent(event_3);	
	outputTrashButton.dispatchEvent(event_4);
}
//заполнение данных шапки  для требований
function setTitleReq(pageID,data){
	var companyName = document.getElementById("companyName_" + pageID);
	var userManagerName = document.getElementById("userManagerName_" + pageID);
	var createDateProtocol = document.getElementById("createDateProtocol_" + pageID);
	if(data.requirements[pageID-1].Sustatment.TitleTable == null){
		data.requirements[pageID-1].Sustatment.TitleTable = {
				"companyName": "XXXXXXX",
				"userManagerName": "XXXXXXX",
				"createDateProtocol": "XXXXXXX"
			  }
		
	}
	companyName.value = data.requirements[pageID-1].Sustatment.TitleTable.companyName;
	userManagerName.value = data.requirements[pageID-1].Sustatment.TitleTable.userManagerName;
	createDateProtocol.value = data.requirements[pageID-1].Sustatment.TitleTable.createDateProtocol;

}
//заполнение % в строках для требований
function setPercentReq(pageID, idRow ,data){
	var massInput1 = document.getElementById('massInput_1_' + idRow + '_' + pageID);
	var massInputBlock1 = document.getElementById('massInputBlock_1_' + idRow + '_' + pageID);
	var controlButtonId1 = document.getElementById('controlButtonId_1_' + idRow + '_' + pageID);

	var massInput2 = document.getElementById('massInput_2_' + idRow + '_' + pageID);
	var massInputBlock2 = document.getElementById('massInputBlock_2_' + idRow + '_' + pageID);
	var controlButtonId2 = document.getElementById('controlButtonId_2_' + idRow + '_' + pageID);

	var massInput3 = document.getElementById('massInput_3_' + idRow + '_' + pageID);
	var massInputBlock3 = document.getElementById('massInputBlock_3_' + idRow + '_' + pageID);
	var controlButtonId3 = document.getElementById('controlButtonId_3_' + idRow + '_' + pageID);

	var customM = data.requirements[pageID-1].componentRow[idRow-1].mainFractionData.custom;
	var calcVM = data.requirements[pageID-1].componentRow[idRow-1].mainFractionData.calcToggle;
	var coreM = data.requirements[pageID-1].componentRow[idRow-1].mainFractionData.unitOption.percent;

	var customS = data.requirements[pageID-1].componentRow[idRow-1].suitableFractionData.custom;
	var calcVS = data.requirements[pageID-1].componentRow[idRow-1].suitableFractionData.calcToggle;
	var coreS = data.requirements[pageID-1].componentRow[idRow-1].suitableFractionData.unitOption.percent;

	var customW = data.requirements[pageID-1].componentRow[idRow-1].weedFractionData.custom;
	var calcVW = data.requirements[pageID-1].componentRow[idRow-1].weedFractionData.calcToggle;
	var coreW = data.requirements[pageID-1].componentRow[idRow-1].weedFractionData.unitOption.percent;

	massInput1.dispatchEvent(event_4);
	massInputBlock1.children[0].children[0].value = calcVM ? coreM : customM;
	massInputBlock1.children[0].children[0].dispatchEvent(event_3);
	controlButtonId1.dispatchEvent(event_4);

	massInput2.dispatchEvent(event_4);
	massInputBlock2.children[0].children[0].value = calcVS ? coreS : customS;
	massInputBlock2.children[0].children[0].dispatchEvent(event_3);
	controlButtonId2.dispatchEvent(event_4);

	massInput3.dispatchEvent(event_4);
	massInputBlock3.children[0].children[0].value = calcVW ? coreW : customW;
	massInputBlock3.children[0].children[0].dispatchEvent(event_3);
	controlButtonId3.dispatchEvent(event_4);
}
function setDeafult(ID, data){
	var defaultUnit = document.getElementById('defaultUnit_' + ID);
	var scrollBlock = defaultUnit.getElementsByClassName('scrollBlock')[0];
	var dropdownElements = scrollBlock.children;
	var percentInput = dropdownElements[0].children[0];
	var gramInput = dropdownElements[1].children[0];
	var piecesInput = dropdownElements[2].children[0];
	var pieces_kgInput = dropdownElements[3].children[0];
	var ppmInput = dropdownElements[4].children[0];

	var type = data.requirements[ID-1].Sustatment.DefaultUnit;

	percentInput.click();

	switch(type){
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

}
//заполнение toggles в строках для требований
function settoggleReq(pageID, idRow ,data){
	var massInput1 = document.getElementById('massInput_1_' + idRow + '_' + pageID);
	var massInputBlock1 = document.getElementById('massInputBlock_1_' + idRow + '_' + pageID);
	var controlButtonId1 = document.getElementById('controlButtonId_1_' + idRow + '_' + pageID);

	var massInput2 = document.getElementById('massInput_2_' + idRow + '_' + pageID);
	var massInputBlock2 = document.getElementById('massInputBlock_2_' + idRow + '_' + pageID);
	var controlButtonId2 = document.getElementById('controlButtonId_2_' + idRow + '_' + pageID);

	var massInput3 = document.getElementById('massInput_3_' + idRow + '_' + pageID);
	var massInputBlock3 = document.getElementById('massInputBlock_3_' + idRow + '_' + pageID);
	var controlButtonId3 = document.getElementById('controlButtonId_3_' + idRow + '_' + pageID);

	var mfd = data.requirements[pageID-1].componentRow[idRow-1].mainFractionData;
	var sfd = data.requirements[pageID-1].componentRow[idRow-1].suitableFractionData;
	var wfd = data.requirements[pageID-1].componentRow[idRow-1].weedFractionData;

	if(mfd.calcToggle == false && massInputBlock1.children[1].children[0].style.backgroundImage.split('/')[5].split('.')[0] != 'calcOff'){
		massInput1.dispatchEvent(event_4);
		massInputBlock1.children[1].children[0].dispatchEvent(event_4);
		controlButtonId1.dispatchEvent(event_4);
	}
	
	if(sfd.calcToggle == false && massInputBlock2.children[1].children[0].style.backgroundImage.split('/')[5].split('.')[0] != 'calcOff'){
		massInput2.dispatchEvent(event_4);
		massInputBlock2.children[1].children[0].dispatchEvent(event_4);
		controlButtonId2.dispatchEvent(event_4);
	}
	if(wfd.calcToggle == false && massInputBlock3.children[1].children[0].style.backgroundImage.split('/')[5].split('.')[0] != 'calcOff'){
		massInput3.dispatchEvent(event_4);
		massInputBlock3.children[1].children[0].dispatchEvent(event_4);
		controlButtonId3.dispatchEvent(event_4);
	}
}
function setFakeReq(pageID, data){
	var pure = document.getElementById('pureInpStartFake_' + pageID);
	var suit = document.getElementById('pureInpGoodFake_' + pageID);
	var weed = document.getElementById('pureInpTrashFake_' + pageID);
	pure.value = data.requirements[pageID-1].requirementsTable.mainFractionData.Fake;
	suit.value = data.requirements[pageID-1].requirementsTable.suitableFraction.Fake;
	weed.value = data.requirements[pageID-1].requirementsTable.weedFraction.Fake;
}
// ПРОТОКОЛЫ
//заполнение результатов поиска для протокола
function addrowsProt(pageID, idRow, data){
	//строка поиска
	var clsInput_testRow = document.getElementById('clsInput_test_' + idRow + '_' + pageID + '_P');
	//результат поиска
	var clsDropdown = document.getElementById('clsDropdown_' + idRow + '_' + pageID + '_P');
	//кнопка ок
	var controlButtonIdHide = document.getElementById('controlButtonIdHide_' + idRow + '_' + pageID + '_P');
	
	dispatchEVProt(clsInput_testRow, clsDropdown, pageID, idRow, data);
	controlButtonIdHide.click();
		
}
function dispatchEVProt(clsInput_testRow, clsDropdown, pageID, idRow, data){
	// кнопка добавить
	var enter = document.getElementById('addOption_' + idRow + '_' + pageID + '_P');
	clsInput_testRow.dispatchEvent(event_1);
	var splitValue = data.protocol[pageID-1].ProtocolRow[idRow-1].SearchProductResult;
	var inputOption = clsDropdown.children[0];
	var temp = '';
	splitValue = Array.isArray(splitValue) ? splitValue : [splitValue];
	for(var f = 0; f < splitValue.length; f++){
		clsInput_testRow.value = temp == '' ? splitValue[f] : temp + ' ' + splitValue[f];
		clsInput_testRow.dispatchEvent(event_2);
		if(clsInput_testRow.value == inputOption.children[1].children[0].value){
			var temp = '';
			inputOption.children[1].children[0].click();
		}
		else{
			var temp = clsInput_testRow.value;
			enter.click();
			// clsInput_testRow.value = '';
		}
	}
}
//заполнение куба 3-3 для protocol
function setMassProt(pageID ,data){
	var outputStart = document.getElementById('outputStart_' + pageID + '_P');
	var outputStartButton = document.getElementById('outputStartButton_' + pageID + '_P');
	
	var outputGood = document.getElementById('outputGood_' + pageID + '_P');
	var outputGoodButton = document.getElementById('outputGoodButton_' + pageID + '_P');
	
	var outputTrash = document.getElementById('outputTrash_' + pageID + '_P');
	var outputTrashButton = document.getElementById('outputTrashButton_' + pageID + '_P');
	
	outputStart.dispatchEvent(event_4);
	outputStart.value = data.protocol[pageID-1].requirementsTable.mainFractionData.mass;
	outputStart.dispatchEvent(event_3);	
	outputStartButton.dispatchEvent(event_4);
	
	outputGood.dispatchEvent(event_4);
	outputGood.value = data.protocol[pageID-1].requirementsTable.suitableFraction.mass;
	outputGood.dispatchEvent(event_3);	
	outputGoodButton.dispatchEvent(event_4);
	
	outputTrash.dispatchEvent(event_4);
	outputTrash.value = data.protocol[pageID-1].requirementsTable.weedFraction.mass;
	outputTrash.dispatchEvent(event_3);	
	outputTrashButton.dispatchEvent(event_4);
}
//заполнение данных шапки  для protocol
function setTitleProt(pageID,data){
	var userManagerName = document.getElementById("userManagerName_" + pageID + "_P");
	var createDateProtocol = document.getElementById("createDateProtocol_" + pageID + "_P");
	if(data.protocol[pageID-1].Sustatment.TitleTable == null){
		data.protocol[pageID-1].Sustatment.TitleTable = {
				"userManagerName": "YYYYYY",
				"createDateProtocol": "YYYYY"
			  }
		
	}
	userManagerName.value = data.protocol[pageID-1].Sustatment.TitleTable.userManagerName;
	createDateProtocol.value = data.protocol[pageID-1].Sustatment.TitleTable.createDateProtocol;

}
//заполнение % в строках для protocol
function setPercentProt(pageID, idRow ,data){
	var massInput1 = document.getElementById('massInput_1_' + idRow + '_' + pageID + '_P');
	var massInputBlock1 = document.getElementById('massInputBlock_1_' + idRow + '_' + pageID + '_P');
	var controlButtonId1 = document.getElementById('controlButtonId_1_' + idRow + '_' + pageID + '_P');

	var massInput2 = document.getElementById('massInput_2_' + idRow + '_' + pageID + '_P');
	var massInputBlock2 = document.getElementById('massInputBlock_2_' + idRow + '_' + pageID + '_P');
	var controlButtonId2 = document.getElementById('controlButtonId_2_' + idRow + '_' + pageID + '_P');

	var massInput3 = document.getElementById('massInput_3_' + idRow + '_' + pageID + '_P');
	var massInputBlock3 = document.getElementById('massInputBlock_3_' + idRow + '_' + pageID + '_P');
	var controlButtonId3 = document.getElementById('controlButtonId_3_' + idRow + '_' + pageID + '_P');

	var customM = data.protocol[pageID-1].ProtocolRow[idRow-1].mainFractionData.custom;
	var calcVM = data.protocol[pageID-1].ProtocolRow[idRow-1].mainFractionData.calcToggle;
	var coreM = data.protocol[pageID-1].ProtocolRow[idRow-1].mainFractionData.unitOption.percent;

	var customS = data.protocol[pageID-1].ProtocolRow[idRow-1].suitableFractionData.custom;
	var calcVS = data.protocol[pageID-1].ProtocolRow[idRow-1].suitableFractionData.calcToggle;
	var coreS = data.protocol[pageID-1].ProtocolRow[idRow-1].suitableFractionData.unitOption.percent;

	var customW = data.protocol[pageID-1].ProtocolRow[idRow-1].weedFractionData.custom;
	var calcVW = data.protocol[pageID-1].ProtocolRow[idRow-1].weedFractionData.calcToggle;
	var coreW = data.protocol[pageID-1].ProtocolRow[idRow-1].weedFractionData.unitOption.percent;

	massInput1.dispatchEvent(event_4);
	massInputBlock1.children[0].children[0].value = calcVM ? coreM : customM;
	massInputBlock1.children[0].children[0].dispatchEvent(event_3);
	controlButtonId1.dispatchEvent(event_4);

	massInput2.dispatchEvent(event_4);
	massInputBlock2.children[0].children[0].value = calcVS ? coreS : customS;
	massInputBlock2.children[0].children[0].dispatchEvent(event_3);
	controlButtonId2.dispatchEvent(event_4);

	massInput3.dispatchEvent(event_4);
	massInputBlock3.children[0].children[0].value = calcVW ? coreW : customW;
	massInputBlock3.children[0].children[0].dispatchEvent(event_3);
	controlButtonId3.dispatchEvent(event_4);
}
function setDeafultProt(ID, data){
	var defaultUnit = document.getElementById('defaultUnit_' + ID + '_P');
	var scrollBlock = defaultUnit.getElementsByClassName('scrollBlock')[0];
	var dropdownElements = scrollBlock.children;
	var percentInput = dropdownElements[0].children[0];
	var gramInput = dropdownElements[1].children[0];
	var piecesInput = dropdownElements[2].children[0];
	var pieces_kgInput = dropdownElements[3].children[0];
	var ppmInput = dropdownElements[4].children[0];

	var type = data.protocol[ID-1].Sustatment.DefaultUnit;

	percentInput.click();

	switch(type){
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

}
function settoggleProt(pageID, idRow ,data){
	var massInput1 = document.getElementById('massInput_1_' + idRow + '_' + pageID + "_P");
	var massInputBlock1 = document.getElementById('massInputBlock_1_' + idRow + '_' + pageID + "_P");
	var controlButtonId1 = document.getElementById('controlButtonId_1_' + idRow + '_' + pageID + "_P");

	var massInput2 = document.getElementById('massInput_2_' + idRow + '_' + pageID + "_P");
	var massInputBlock2 = document.getElementById('massInputBlock_2_' + idRow + '_' + pageID + "_P");
	var controlButtonId2 = document.getElementById('controlButtonId_2_' + idRow + '_' + pageID + "_P");

	var massInput3 = document.getElementById('massInput_3_' + idRow + '_' + pageID + "_P");
	var massInputBlock3 = document.getElementById('massInputBlock_3_' + idRow + '_' + pageID + "_P");
	var controlButtonId3 = document.getElementById('controlButtonId_3_' + idRow + '_' + pageID + "_P");

	var mfd = data.protocol[pageID-1].ProtocolRow[idRow-1].mainFractionData;
	var sfd = data.protocol[pageID-1].ProtocolRow[idRow-1].suitableFractionData;
	var wfd = data.protocol[pageID-1].ProtocolRow[idRow-1].weedFractionData;

	if(mfd.calcToggle == false && massInputBlock1.children[1].children[0].style.backgroundImage.split('/')[5].split('.')[0] != 'calcOff'){
		massInput1.dispatchEvent(event_4);
		massInputBlock1.children[1].children[0].dispatchEvent(event_4);
		controlButtonId1.dispatchEvent(event_4);
	}
	
	if(sfd.calcToggle == false && massInputBlock2.children[1].children[0].style.backgroundImage.split('/')[5].split('.')[0] != 'calcOff'){
		massInput2.dispatchEvent(event_4);
		massInputBlock2.children[1].children[0].dispatchEvent(event_4);
		controlButtonId2.dispatchEvent(event_4);
	}
	if(wfd.calcToggle == false && massInputBlock3.children[1].children[0].style.backgroundImage.split('/')[5].split('.')[0] != 'calcOff'){
		massInput3.dispatchEvent(event_4);
		massInputBlock3.children[1].children[0].dispatchEvent(event_4);
		controlButtonId3.dispatchEvent(event_4);
	}
}
function setFakeProt(pageID, data){
	var pure = document.getElementById('pureInpStartFake_' + pageID + "_P");
	var suit = document.getElementById('pureInpGoodFake_' + pageID + "_P");
	var weed = document.getElementById('pureInpTrashFake_' + pageID + "_P");
	pure.value = data.protocol[pageID-1].requirementsTable.mainFractionData.Fake;
	suit.value = data.protocol[pageID-1].requirementsTable.suitableFraction.Fake;
	weed.value = data.protocol[pageID-1].requirementsTable.weedFraction.Fake;
}

//заполнение результатов поиска для сортировки
function uploadRowsSort(pageID,i, idRow, data){
	//строка поиска
	var clsInput_testRow = document.getElementById('clsInput_test_' + idRow + '_' + pageID + '_S');
	//результат поиска
	var clsDropdown = document.getElementById('clsDropdown_' + idRow + '_' + pageID + '_S');
	//кнопка ок
	var controlButtonIdHide = document.getElementById('controlButtonIdHide_' + idRow + '_' + pageID + '_S');
	dispatchEVSort(clsInput_testRow, clsDropdown, pageID,i, idRow, data);
	controlButtonIdHide.click();
		
}
function dispatchEVSort(clsInput_testRow, clsDropdown, pageID,i, idRow, data){
	clsInput_testRow.dispatchEvent(event_1);
	var splitValue = data.protocol[i].ProtocolRow[idRow-1].SearchProductResult;
	var inputOption = clsDropdown.children[0];
	var temp = '';
	splitValue = Array.isArray(splitValue) ? splitValue : [splitValue];
	for(var f = 0; f < splitValue.length; f++){
		clsInput_testRow.value = temp == '' ? splitValue[f] : temp + ' ' + splitValue[f];
		clsInput_testRow.dispatchEvent(event_2);
		if(clsInput_testRow.value == inputOption.children[1].children[0].value){
			var temp = '';
			inputOption.children[1].children[0].click();
		}
		else{
			var temp = clsInput_testRow.value;
		}
	}
}
//заполнение % в строках для sort
function setPercentSort(pageID, i, k, idRow ,data){
	var massInput1 = document.getElementById('massInput_1_' + idRow + '_' + pageID + '_S');
	var massInputBlock1 = document.getElementById('massInputBlock_1_' + idRow + '_' + pageID + '_S');
	var controlButtonId1 = document.getElementById('controlButtonId_1_' + idRow + '_' + pageID + '_S');

	var massInput2 = document.getElementById('massInput_2_' + idRow + '_' + pageID + '_S');
	var massInputBlock2 = document.getElementById('massInputBlock_2_' + idRow + '_' + pageID + '_S');
	var controlButtonId2 = document.getElementById('controlButtonId_2_' + idRow + '_' + pageID + '_S');

	var massInput3 = document.getElementById('massInput_3_' + idRow + '_' + pageID + '_S');
	var massInputBlock3 = document.getElementById('massInputBlock_3_' + idRow + '_' + pageID + '_S');
	var controlButtonId3 = document.getElementById('controlButtonId_3_' + idRow + '_' + pageID + '_S');

	var outputStart = document.getElementById('outputStart_' +  pageID + '_S');
	var outputStartButton = document.getElementById('outputStartButton_' + pageID + '_S');

	var customM = data.protocol[i].pageSortRow[k].ProtocolSort[idRow-1].mainFractionData.custom;
	var calcVM = data.protocol[i].pageSortRow[k].ProtocolSort[idRow-1].mainFractionData.calcToggle;
	var coreM = data.protocol[i].pageSortRow[k].ProtocolSort[idRow-1].mainFractionData.unitOption.percent;

	var customS = data.protocol[i].pageSortRow[k].ProtocolSort[idRow-1].suitableFractionData.custom;
	var calcVS = data.protocol[i].pageSortRow[k].ProtocolSort[idRow-1].suitableFractionData.calcToggle;
	var coreS = data.protocol[i].pageSortRow[k].ProtocolSort[idRow-1].suitableFractionData.unitOption.percent;

	var customW = data.protocol[i].pageSortRow[k].ProtocolSort[idRow-1].weedFractionData.custom;
	var calcVW = data.protocol[i].pageSortRow[k].ProtocolSort[idRow-1].weedFractionData.calcToggle;
	var coreSW = data.protocol[i].pageSortRow[k].ProtocolSort[idRow-1].weedFractionData.unitOption.percent;

	if(data.protocol[i].pageSortRow[k].mainFractionParent == ''){
		outputStart.dispatchEvent(event_4);
		outputStart.value = data.protocol[i].pageSortRow[k].requirementsTable.mainFractionData.mass;
		outputStart.dispatchEvent(event_3);
		outputStartButton.dispatchEvent(event_4);
		massInput1.dispatchEvent(event_4);
		massInputBlock1.children[0].children[0].value = calcVM ? coreM : customM;
		massInputBlock1.children[0].children[0].dispatchEvent(event_3);
		controlButtonId1.dispatchEvent(event_4);
	}
	massInput2.dispatchEvent(event_4);
	massInputBlock2.children[0].children[0].value = calcVS ? coreS : customS;
	massInputBlock2.children[0].children[0].dispatchEvent(event_3);
	controlButtonId2.dispatchEvent(event_4);

	massInput3.dispatchEvent(event_4);
	massInputBlock3.children[0].children[0].value = calcVW ? coreSW : customW;
	massInputBlock3.children[0].children[0].dispatchEvent(event_3);
	controlButtonId3.dispatchEvent(event_4);
}
function setDeafultSort(prID ,ID, data){
	var defaultUnit = document.getElementById('defaultUnit_' + ID + '_S');
	var scrollBlock = defaultUnit.getElementsByClassName('scrollBlock')[0];
	var dropdownElements = scrollBlock.children;
	var percentInput = dropdownElements[0].children[0];
	var gramInput = dropdownElements[1].children[0];
	var piecesInput = dropdownElements[2].children[0];
	var pieces_kgInput = dropdownElements[3].children[0];
	var ppmInput = dropdownElements[4].children[0];

	var type = data.protocol[prID].pageSortRow[ID-1].Sustatment.DefaultUnit;

	percentInput.click();

	switch(type){
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

}
function settoggleSort(pageID, i, k, idRow ,data){
	var massInput1 = document.getElementById('massInput_1_' + idRow + '_' + pageID + '_S');
	var massInputBlock1 = document.getElementById('massInputBlock_1_' + idRow + '_' + pageID + '_S');
	var controlButtonId1 = document.getElementById('controlButtonId_1_' + idRow + '_' + pageID + '_S');

	var massInput2 = document.getElementById('massInput_2_' + idRow + '_' + pageID + '_S');
	var massInputBlock2 = document.getElementById('massInputBlock_2_' + idRow + '_' + pageID + '_S');
	var controlButtonId2 = document.getElementById('controlButtonId_2_' + idRow + '_' + pageID + '_S');

	var massInput3 = document.getElementById('massInput_3_' + idRow + '_' + pageID + "_S");
	var massInputBlock3 = document.getElementById('massInputBlock_3_' + idRow + '_' + pageID + "_S");
	var controlButtonId3 = document.getElementById('controlButtonId_3_' + idRow + '_' + pageID + "_S");

	var mfd = data.protocol[i].pageSortRow[k].ProtocolSort[idRow-1].mainFractionData;
	var sfd = data.protocol[i].pageSortRow[k].ProtocolSort[idRow-1].suitableFractionData;
	var wfd = data.protocol[i].pageSortRow[k].ProtocolSort[idRow-1].weedFractionData;

	if(mfd.calcToggle == false && massInputBlock1.children[1].children[0].style.backgroundImage.split('/')[5].split('.')[0] != 'calcOff'){
		massInput1.dispatchEvent(event_4);
		massInputBlock1.children[1].children[0].dispatchEvent(event_4);
		controlButtonId1.dispatchEvent(event_4);
	}
	
	if(sfd.calcToggle == false && massInputBlock2.children[1].children[0].style.backgroundImage.split('/')[5].split('.')[0] != 'calcOff'){
		massInput2.dispatchEvent(event_4);
		massInputBlock2.children[1].children[0].dispatchEvent(event_4);
		controlButtonId2.dispatchEvent(event_4);
	}
	if(wfd.calcToggle == false && massInputBlock3.children[1].children[0].style.backgroundImage.split('/')[5].split('.')[0] != 'calcOff'){
		massInput3.dispatchEvent(event_4);
		massInputBlock3.children[1].children[0].dispatchEvent(event_4);
		controlButtonId3.dispatchEvent(event_4);
	}
}
function setFakeSortValue(pageID, k,data){
	var srtid = (k+1);
	var pure = document.getElementById('pureInpStartFake_' + srtid + "_S");
	var suit = document.getElementById('pureInpGoodFake_' + srtid + "_S");
	var weed = document.getElementById('pureInpTrashFake_' + srtid + "_S");
	pure.value = data.protocol[pageID-1].pageSortRow[k].requirementsTable.mainFractionData.Fake;
	suit.value = data.protocol[pageID-1].pageSortRow[k].requirementsTable.suitableFraction.Fake;
	weed.value = data.protocol[pageID-1].pageSortRow[k].requirementsTable.weedFraction.Fake;
}
//заполнение данных шапки  для сортировки
function setTitleSort(pageID, k,data){
	var srtid = (k+1);
	var userManagerName = document.getElementById("userManagerName_" + srtid + "_S");
	var createDateProtocol = document.getElementById("createDateProtocol_" + srtid + "_S");
	if(data.protocol[pageID-1].pageSortRow[k].Sustatment.TitleTable == null){
		data.protocol[pageID-1].pageSortRow[k].Sustatment.TitleTable = {
				"userManagerName": "ZZZZ",
				"createDateProtocol": "ZZZZ"
			  }
		
	}
	userManagerName.value = data.protocol[pageID-1].pageSortRow[k].Sustatment.TitleTable.userManagerName;
	createDateProtocol.value = data.protocol[pageID-1].pageSortRow[k].Sustatment.TitleTable.createDateProtocol;

}
// ЭКОНОМИКА
function createEconomicRows(){
	if(pageRow.length > 0){
		economicRowData = pageRow[currentPage-1].economicRowData;
	}
	if(pageProtocolRow.length > 0){
		economicRowDataProt = pageProtocolRow[ProtocolPage-1].economicRowDataProt;
	}	
	switch(economicType){
		case 'Req':
			// sliderType = 'Prot';				
			document.getElementById('economicd_Req').click();
			document.getElementById('economicd_Req').click();
			// document.getElementById('economicd_Prot').click();
			break;
		case 'Prot':
			// sliderType = 'Req';
			document.getElementById('economicd_Prot').click();	
			document.getElementById('economicd_Prot').click();	
			// document.getElementById('economicd_Req').click();
			break;
	}
}

// СПЕЦИФИКАЦИИ
function createSpecificRows(data){
	var addRowSpecification = document.getElementById('addRowSpecification');
	//создание строк
	for(var i = 0; i < data.SpecificData.length; i++){
		addRowSpecification.click();
		//заполнение строк 
		var priceInput = document.getElementById('priceInput_' + (i+1));
		var priceMenuClassifire = document.getElementById('priceMenuClassifire_' + (i+1));
		var specificOkButton = document.getElementById('specificOkButton_' + (i+1));
		var Model = data.SpecificData[i].apparat.model;
		var Comp = data.SpecificData[i].compressor;
		if(Model != 'model'){
			priceInput.click();
			priceMenuClassifire.children[0].children[0].children[0].click();			
			var priceApparatModel = document.getElementById('priceApparatModel_' + (i+1));
			var priceApparatConf = document.getElementById('priceApparatConf_' + (i+1));
			var priceApparatLot = document.getElementById('priceApparatLot_' + (i+1));
			for( var k = 0; k < priceApparatModel.children[0].children.length; k++){
				switch(Model){
					case "SmartSort B":
						if(priceApparatModel.children[0].children[k].children[0].value == 'СмартСорт'){
							priceApparatModel.children[0].children[k].children[0].click();
							for(var z = 0; z < priceApparatConf.children[0].children.length; z++){
								if(priceApparatConf.children[0].children[z].children[0].value == data.SpecificData[i].apparat.configuration){
									priceApparatConf.children[0].children[z].children[0].click();
									for(var l = 0; l < priceApparatLot.children[0].children.length; l++){
										if(priceApparatLot.children[0].children[l].children[0].value == data.SpecificData[i].apparat.tray)
											priceApparatLot.children[0].children[l].children[0].click()
									}
								}
							}
						}
						specificOkButton.click();
						break;
					case "MiniSort":
						if(priceApparatModel.children[0].children[k].children[0].value == 'МиниСорт')
							priceApparatModel.children[0].children[k].children[0].click()
						specificOkButton.click();
						break;
				}
				
			}

		}
		if(data.SpecificData[i].compressor.model != 'model'){
			priceInput.click();
			priceMenuClassifire.children[0].children[2].children[0].click();
			var priceCompressorModel = document.getElementById('priceCompressorModel_' + (i+1));
			var priceCompressorSale = document.getElementById('priceCompressorSale_' + (i+1));
			var priceCompressorProd = document.getElementById('priceCompressorProd_' + (i+1));
			for( var k = 0; k < priceCompressorModel.children[0].children.length; k++){
				switch(Comp.model){
					case "Comaro":
						for(var w = 0; w < priceCompressorModel.children[0].children.length; w++){	
							if(priceCompressorModel.children[0].children[w].children[0].value == Comp.model){					
								priceCompressorModel.children[0].children[w].children[0].click();
								for(var z = 0; z < priceCompressorSale.children[0].children.length; z++){
									if(priceCompressorSale.children[0].children[z].children[0].value == Comp.manufacturer){
										priceCompressorSale.children[0].children[z].children[0].click();
										for(var l = 0; l < priceCompressorProd.children[0].children.length; l++){
											if(priceCompressorProd.children[0].children[l].children[0].value == Comp.capacity)
												priceCompressorProd.children[0].children[l].children[0].click()
										}
									}
								}
							}
						}
						specificOkButton.click();
						break;
					case "ABAC":
						for(var w = 0; w < priceCompressorModel.children[0].children.length; w++){	
							if(priceCompressorModel.children[0].children[w].children[0].value == Comp.model){						
								priceCompressorModel.children[0].children[w].children[0].click();
								for(var z = 0; z < priceCompressorSale.children[0].children.length; z++){
									if(priceCompressorSale.children[0].children[z].children[0].value == Comp.manufacturer){
										priceCompressorSale.children[0].children[z].children[0].click();
										for(var l = 0; l < priceCompressorProd.children[0].children.length; l++){
											if(priceCompressorProd.children[0].children[l].children[0].value == Comp.capacity)
												priceCompressorProd.children[0].children[l].children[0].click()
										}
									}
								}
							}
						}
						specificOkButton.click();
						break;
				}
				
			}
		}
		
	}
	SpecificData = data.SpecificData;
}



// ФОТКИ

function getIMG(data){
	family = data.family;
	var typeFam = (typeof family) == 'string';
	if(typeFam == true && family.indexOf('new_1.0') != -1){
		IMGTrash.innerHTML = family;
	}
	
	var mass = IMGTrash.getElementsByTagName("input");
	for(var i = 0; i < mass.length; i++){
		var __fileName = mass[i].id  + '.jpg';
		var url = '/static/web_data/' + data.id_document + '/' + __fileName;
		
		if(mass[i].parentNode.parentNode.parentNode.parentNode.getAttribute('type') != 'sort'){
			var parentID = mass[i].id.slice(6, -2);
		}
		else{
			var parentID = mass[i].id.slice(6, -4);
		}
		document.getElementById(parentID).style.backgroundImage = 'url('+url+')';
		loadURLToInputFiled(url, __fileName, mass[i]);
	}
}

function loadURLToInputFiled(url, __fileName, inputElement){
	// url это '/static/web_data/b69br9/' + __fileName + '.jpg'
	// __fileName это имя картинки
	// inputElement собственно сам инпут куда кладем(достаточно его айди указать)
    getImgURL(url, (imgBlob)=>{
		var fileName = __fileName;
		var file = new File([imgBlob], fileName,{type:"image/jpeg"}, 'utf-8');
		var container = new DataTransfer();
		container.items.add(file);
		inputElement.files = container.files;    
    });
  }
  function getImgURL(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      callback(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
	
  }
function loadInputFieldToPreview(inputElement){
    // Load preview to img tag
    var reader = new FileReader();
    reader.onload = function(e) {
    imgTS.src = e.target.result;
    }
    reader.readAsDataURL(inputElement.files[0]); // convert to base64 string
}
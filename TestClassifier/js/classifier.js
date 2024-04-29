//Таблицы
var productNameList = [];
var productTypeList = [];
var weedNameList = [];
var weedClassList = []
var descriptionList = [];

var componentPartsList = [];
var componentStatusList = [];
var componentColorList = [];

var clsDropdown;
//Протокол
var protocol = [];
var fiel;
var allNames = document.getElementsByName('fractionSource');
var resultType;//не перенесено
var id_document;

var componentElementClassifier = {//дублировать или нет???? что эт вообще??
	classifierType: 0,
	classifierProduct: {
		useADD: false,
		mainOptions:{
			industryID: 9999,
			groupProductID: 9999,
			productID: 9999,
			descriptionID: 9999,
			productTypeID: 9999,
			productSortID: 9999,
			purposeID: 9999,
			GOST_ID: 9999,
			partsID: 9999,
			statusID: 9999
		},
		addCustomOption: ""
	},
	classifierWeed:{
		useADD: false,
		mainOptions:{
			industryID: 9999,
			categoryID: 9999,
			classWeedID: 9999,
			weedNameID: 9999,
			descriptionID: 9999,
			colorID: 9999
		},
		addCustomOption: "" 
	}
};

function startApp(){
	read_industry();
	get_protocolTop();
	img_script();
	ewe();
	// данные для спецификации
	get_separation_model();	
	get_separator_machine();
	get_separator_configuration();
	get_separation_KompressorType();
	get_aspiration();	
	get_product_K();
	get_crd_daily_ru();
	
	var main = document.getElementById('defaultUnit_Econom');
	var menu = document.getElementById('inpMenu');
	menu.children[1].click();
	
	main.children[1].children[0].children[0].children[1].style.display = "none";
	main.children[1].children[0].children[0].children[0].children[0].style.backgroundColor = "#ffb23f";
	menu.style.display = inpMenu.style.display == 'none' ? 'flex' : 'none';	
	
	id_document = location.search.substr(1).split("=")[1];
	
	id_document = id_document == null ? Math.random().toString(36).substring(2,8) : id_document;
	if(location.search != ''){
		// тут должен быть экран ожидания
		overlay2.style.display = "flex";
	}
	sortSliderRun(1)
}


function setupTableInfo(){
	//Продукты
	for(var i = 0; i < list_product.length; i++){
		productNameList.push({
			"id": list_product[i].id_product,
			"name": list_product[i].productName
		});
	}
	//Засорители
	for(var i = 0; i < list_weed.length; i++){
		weedNameList.push({
			"id": list_weed[i].id_weed,
			"name": list_weed[i].weedName
		});
	}
	//Тип продукта(описание);
	for(var i = 0; i < list_productType.length; i++){
		if(list_productType[i].productTypeName != "-"){
			productTypeList.push({
				"id": list_productType[i].id_productType,
				"name": list_productType[i].productTypeName
			});
		}
	}
	//Классы засорителя
	for(var i = 0; i < list_classWeed.length; i++){
		weedClassList.push({
			"id": list_classWeed[i].id_class,
			"name": list_classWeed[i].className
		});
	}
	//Описания семян(зерна)
	for(var i = 0; i < list_descriptionSeed.length; i++){
		descriptionList.push({
			"id": list_descriptionSeed[i].id_description,
			"name": list_descriptionSeed[i].descriptionName
		});
	}
	//Дополнительные описания для компонетов(продуктов и засорителей)
	for(var i = 0; i < list_productPart.length; i++){
		componentPartsList.push({
			"id": list_productPart[i].id_number,
			"name": list_productPart[i].productPart
		})
	}
	for(var i = 0; i < list_productStatus.length; i++){
		componentStatusList.push({
			"id": list_productStatus[i].id_number,
			"name": list_productStatus[i].productStatus
		})
	}
	for(var i = 0; i < list_productColor.length; i++){
		componentColorList.push({
			"id": list_productColor[i].id_number,
			"name": list_productColor[i].productColor
		})
	}
	
	if(location.search != ''){
		setTimeout(() => getWebDocument(id_document), 1000);
	}
}
function returnTableType(tableID){
	switch(tableID){
		case productNameList:
			var id = "product";
			break;
		case productTypeList:
			var id = "productType";
			break;
		case weedNameList:
			var id =  "weed";
			break;
		case weedClassList:
			var id =  "weedClass";
			break;
		case descriptionList:
			var id = "discription";
			break;
		case componentPartsList:
			var id = "parts";
			break;
		case componentStatusList:
			var id = "status";
			break;
		case componentColorList:
			var id = "color";
			break;
	}
	return id;
}

function resultTextView(clsInput_testRow, classifierInpurResultElement){//не перенесен
	clsInput_testRow.value = "";
	for(var i = 0; i < classifierInpurResultElement.children.length; i++){
		clsInput_testRow.value = clsInput_testRow.value != "" ? clsInput_testRow.value + " " + classifierInpurResultElement.children[i].textContent : classifierInpurResultElement.children[i].textContent;
	}
}
function checkResultOption(list, listElement){
	var index = list.indexOf(listElement);
	if(index > -1)
		list.splice(index, 1);
	
	return list;
}

function checkboxOption(elementID, bool){
	var option = document.getElementById(elementID);
	if(option != null){
		var checkbox = option.parentNode.children[1].children[0];
		checkbox.checked = bool;
	}
}
function ShowDropdown(idRow){
	return function e(){
		HideAllDropdownClone();
		var dropdown = document.getElementById('clsDropdown_' + idRow);
		var clsInput_test = document.getElementById('clsInput_test_' + idRow);
		var otherCheckbox = document.getElementById('addOption_' + idRow);
		var classifierInpurResult = document.getElementById('classifierInpurResult_' + idRow);
		var clsInputResultBlock = document.getElementById('clsInputResultBlock_' + idRow);
		var lockBlock = document.getElementById('lockBlock');

		dropdown.style.display="flex";
		clsInput_test.value = ""
		classifierInpurResult.style.display="flex";
		clsInputResultBlock.style.display="flex";
		otherCheckbox.style.display="flex";
		lockBlock.style.display = "none";

		StartInput(idRow);
	}
}
function HideDropdown(idElement){
	return function e(){
		var button = document.getElementById(idElement);
		var main = button.parentNode.parentNode.parentNode;
		var dropdown = main.children[2];	
		var otherCheckbox = main.children[1].children[0].children[1];
		var clsInput_testRow = main.children[1].children[0].children[0];
		var classifierInpurResultElement = main.children[0].children[0];
		var lockBlock = document.getElementById('lockBlock');
		dropdown.style.display = "none";	
		resultTextView(clsInput_testRow, classifierInpurResultElement);
		classifierInpurResultElement.style.display="none";
		main.children[0].style.display="none";
		otherCheckbox.style.display="none";
		lockBlock.style.display = 'none';
	}
}
//Работа с интерфейсом весовых категорий
function ShowUpsertDropdown(element){
	var parent = element.parentNode.parentNode.parentNode;

	if(parent.children[0].style.width != '188px'){
		if(parent.id.split('_')[1] == '1'){
			var input = document.getElementById('massInput_' + parent.id.split('_')[1] +'_1');
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
			var input = document.getElementById('massInput_' + parent.id.split('_')[1] +'_1');
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
	if(element.id == "outputStart"){
		document.getElementById("outputStartButton").style.display = "flex";
		document.getElementById("outputGoodButton").style.display = "none";
		document.getElementById("outputTrashButton").style.display = "none";
		document.getElementById("percentGoodButton").style.display = "none";
		document.getElementById("percentTrashButton").style.display = "none";
		document.getElementById("lockBlock").style.display = "none";
	}else if (element.id == "outputGood"){
		document.getElementById("outputGoodButton").style.display = "flex";
		document.getElementById("outputStartButton").style.display = "none";
		document.getElementById("outputTrashButton").style.display = "none";
		document.getElementById("percentGoodButton").style.display = "none";
		document.getElementById("percentTrashButton").style.display = "none";
		document.getElementById("lockBlock").style.display = "flex";
	}else if (element.id == "outputTrash"){
		document.getElementById("outputTrashButton").style.display = "flex";
		document.getElementById("outputStartButton").style.display = "none";
		document.getElementById("outputGoodButton").style.display = "none";
		document.getElementById("percentGoodButton").style.display = "none";
		document.getElementById("percentTrashButton").style.display = "none";
		document.getElementById("lockBlock").style.display = "flex";
	}else if (element.id == "percentGood"){
		document.getElementById("percentGoodButton").style.display = "flex";	
		document.getElementById("outputStartButton").style.display = "none";
		document.getElementById("outputGoodButton").style.display = "none";
		document.getElementById("outputTrashButton").style.display = "none";
		document.getElementById("percentTrashButton").style.display = "none";
		document.getElementById("lockBlock").style.display = "none";
	}else if (element.id == "percentTrash"){
		document.getElementById("percentGoodButton").style.display = "none";	
		document.getElementById("outputStartButton").style.display = "none";
		document.getElementById("outputGoodButton").style.display = "none";
		document.getElementById("outputTrashButton").style.display = "none";
		document.getElementById("percentTrashButton").style.display = "flex";
		document.getElementById("lockBlock").style.display = "none";
	}else{
		document.getElementById("percentTrashButton").style.display = "flex";	
		document.getElementById("outputStartButton").style.display = "none";
		document.getElementById("outputGoodButton").style.display = "none";
		document.getElementById("outputTrashButton").style.display = "none";
		document.getElementById("percentGoodButton").style.display = "none";
		document.getElementById("lockBlock").style.display = "none";
	}
	
}
function ShowMassDropdown(elementID){
	return function e(){
		HideAllDropdownClone();
		var massInputElement = document.getElementById(elementID);
		var main = massInputElement.parentNode.parentNode;
		var massInputResultBlockEl = main.children[1];
		var massInputBlockEl = main.children[0];
		var moreTitleEl = main.children[2];
		var massDropdownEl = main.children[3].children[0];
		var fractionMainValues = document.getElementById('fractionMainValues_' + elementID.split('_')[1]);
		var fractionSource = document.getElementById('fractionSource_' + elementID.split('_')[1]);
		var lockBlock = document.getElementById('lockBlock');
		var fractionLockValue = document.getElementById('fractionLockValue_' + elementID.split('_')[1]);

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
					var massInputResultBlockEl2 = document.getElementById(massInputResultBlockEl.id.split('_')[0] + '_2_' + numberRow);
					var massInputBlockEl2 = document.getElementById(massInputBlockEl.id.split('_')[0] + '_2_' + numberRow);
					var moreTitleEl2 = document.getElementById(moreTitleEl.id.split('_')[0] + '_2_' + numberRow);
					var massDropdownEl2 = document.getElementById(massDropdownEl.id.split('_')[0] + '_2_' + numberRow);

					var massInputResultBlockEl3 = document.getElementById(massInputResultBlockEl.id.split('_')[0] + '_3_' + numberRow);
					var massInputBlockEl3 = document.getElementById(massInputBlockEl.id.split('_')[0] + '_3_' + numberRow);
					var moreTitleEl3 = document.getElementById(moreTitleEl.id.split('_')[0] + '_3_' + numberRow);
					var massDropdownEl3 = document.getElementById(massDropdownEl.id.split('_')[0] + '_3_' + numberRow);

					var main2 = document.getElementById(main.id.split('_')[0] + '_2_' + numberRow);
					var main3 = document.getElementById(main.id.split('_')[0] + '_3_' + numberRow);

					var fractionMainValues2 = document.getElementById(fractionMainValues.id.split('_')[0] + '_2');
					var fractionMainValues3 = document.getElementById(fractionMainValues.id.split('_')[0] + '_3');
					var fractionSource2 = document.getElementById(fractionSource.id.split('_')[0] + '_2');
					var fractionSource3 = document.getElementById(fractionSource.id.split('_')[0] + '_3');
					
					var fractionLockValue2 = document.getElementById(fractionLockValue.id.split('_')[0] + '_2');
					var fractionLockValue3 = document.getElementById(fractionLockValue.id.split('_')[0] + '_3');
					

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
					var massInputResultBlockEl2 = document.getElementById(massInputResultBlockEl.id.split('_')[0] + '_1_' + numberRow);
					var massInputBlockEl2 = document.getElementById(massInputBlockEl.id.split('_')[0] + '_1_' + numberRow);
					var moreTitleEl2 = document.getElementById(moreTitleEl.id.split('_')[0] + '_1_' + numberRow);
					var massDropdownEl2 = document.getElementById(massDropdownEl.id.split('_')[0] + '_1_' + numberRow);

					var massInputResultBlockEl3 = document.getElementById(massInputResultBlockEl.id.split('_')[0] + '_3_' + numberRow);
					var massInputBlockEl3 = document.getElementById(massInputBlockEl.id.split('_')[0] + '_3_' + numberRow);
					var moreTitleEl3 = document.getElementById(moreTitleEl.id.split('_')[0] + '_3_' + numberRow);
					var massDropdownEl3 = document.getElementById(massDropdownEl.id.split('_')[0] + '_3_' + numberRow);

					var main2 = document.getElementById(main.id.split('_')[0] + '_1_' + numberRow);
					var main3 = document.getElementById(main.id.split('_')[0] + '_3_' + numberRow);

					var fractionMainValues2 = document.getElementById(fractionMainValues.id.split('_')[0] + '_1');
					var fractionMainValues3 = document.getElementById(fractionMainValues.id.split('_')[0] + '_3');
					var fractionSource2 = document.getElementById(fractionSource.id.split('_')[0] + '_1');
					var fractionSource3 = document.getElementById(fractionSource.id.split('_')[0] + '_3');
					var fractionLockValue2 = document.getElementById(fractionLockValue.id.split('_')[0] + '_1');
					var fractionLockValue3 = document.getElementById(fractionLockValue.id.split('_')[0] + '_3');

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
					var massInputResultBlockEl2 = document.getElementById(massInputResultBlockEl.id.split('_')[0] + '_2_' + numberRow);
					var massInputBlockEl2 = document.getElementById(massInputBlockEl.id.split('_')[0] + '_2_' + numberRow);
					var moreTitleEl2 = document.getElementById(moreTitleEl.id.split('_')[0] + '_2_' + numberRow);
					var massDropdownEl2 = document.getElementById(massDropdownEl.id.split('_')[0] + '_2_' + numberRow);

					var massInputResultBlockEl3 = document.getElementById(massInputResultBlockEl.id.split('_')[0] + '_1_' + numberRow);
					var massInputBlockEl3 = document.getElementById(massInputBlockEl.id.split('_')[0] + '_1_' + numberRow);
					var moreTitleEl3 = document.getElementById(moreTitleEl.id.split('_')[0] + '_1_' + numberRow);
					var massDropdownEl3 = document.getElementById(massDropdownEl.id.split('_')[0] + '_1_' + numberRow);

					var main2 = document.getElementById(main.id.split('_')[0] + '_2_' + numberRow);
					var main3 = document.getElementById(main.id.split('_')[0] + '_1_' + numberRow);

					var fractionMainValues2 = document.getElementById(fractionMainValues.id.split('_')[0] + '_2');
					var fractionMainValues3 = document.getElementById(fractionMainValues.id.split('_')[0] + '_1');
					var fractionSource2 = document.getElementById(fractionSource.id.split('_')[0] + '_2');
					var fractionSource3 = document.getElementById(fractionSource.id.split('_')[0] + '_1');
					var fractionLockValue2 = document.getElementById(fractionLockValue.id.split('_')[0] + '_2');
					var fractionLockValue3 = document.getElementById(fractionLockValue.id.split('_')[0] + '_1');

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
			for (var k = 1; k< rows.children.length; k++){
				rows.children[k].children[0].children[0].children[Number(numberBlock)+1].style.width = '184px';
			}		
		}
		
		GetLockSustate(elementID.split('_')[1]);
	}
}
function HideMassDropdown(elementID){
	return function e(){
		HideAllDropdownClone();
		var controlButton = document.getElementById(elementID);
		var main = controlButton.parentNode.parentNode;
		var massInputBlockEl = main.children[0];
		var massInputResultBlockEl = main.children[1];
		var moreTitleEl = main.children[2];
		var massDropdownEl = main.children[3].children[0];
		var fractionMainValues = document.getElementById('fractionMainValues_' + elementID.split('_')[1]);
		var fractionSource = document.getElementById('fractionSource_' + elementID.split('_')[1]);
		var lockBlock = document.getElementById('lockBlock');
		var fractionLockValue = document.getElementById('fractionLockValue_' + elementID.split('_')[1]);

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
function ShowDeleteButton(elementID){//не перенесено
	return function e(){
		var thisElement = document.getElementById(elementID);
		thisElement.children[1].style.display="none";
		thisElement.children[2].style.display="flex";
	}	
}
function HideDeleteButton(elementID){//не перенесено
	return function e(){
		var thisElement = document.getElementById(elementID);
		thisElement.children[1].style.display="flex";
		thisElement.children[2].style.display="none";
	}
}
function moreBlock(more, mBtton, mTitle){// не перенесено
	return function e(){
		if (document.getElementById(more).style.display=="none"){
			document.getElementById(more).style.display="";
			document.getElementById(mBtton).style.transform = "rotate(180deg)";
			document.getElementById(mTitle).style.borderBottomWidth="0px"
			document.getElementById(mTitle).style.marginBottom="8px";
		}else{
			document.getElementById(more).style.display="none";
			document.getElementById(mBtton).style.transform = "rotate(0deg)";
			document.getElementById(mTitle).style.borderBottomWidth="1px"
			document.getElementById(mTitle).style.marginBottom="0px";
		}
	}
}

function clearEventListener(element){//это вспомогательный для очистки слушатеlей
	const clonedElement = element.cloneNode(true);
	element.replaceWith(clonedElement);
	return clonedElement;
}
//ГРАФИКИ 
var maasPipChart;
var chartData =[50,50,50,50];

function updateData(){
	var sourceFractionMass = pageRow[currentPage-1].requirementsTable.mainFractionData.mass;
	var acceptFractionMass = pageRow[currentPage-1].requirementsTable.suitableFraction.mass;
	var rejectFractionMass = pageRow[currentPage-1].requirementsTable.weedFraction.mass;
	var acceptFractionPurity = pageRow[currentPage-1].requirementsTable.suitableFraction.purity;
	var rejectFractionPurity = pageRow[currentPage-1].requirementsTable.weedFraction.purity;
	
	var accept = acceptFractionMass/100*(acceptFractionPurity);
	var weedInAccept = acceptFractionMass/100*(100-acceptFractionPurity);
	var reject = rejectFractionMass/100*(100-rejectFractionPurity);
	var productInReject = rejectFractionMass/100*(rejectFractionPurity);
	
	//Обновление ползуков
	//inputCapacity.value = sourceFractionMass;
	//acceptInputCapacity.value = acceptCapasityTypeSelect.options[acceptCapasityTypeSelect.value-1].textContent == "Проход" ? requirementsTable.suitableFraction.percent_exit : requirementsTable.weedFraction.percent_exit;
	//inputCapacity.onchange();
	//acceptInputCapacity.onchange();

	chartData = [accept,weedInAccept,reject,productInReject];
	handler(chartData);
}

function handler(chartData){
	maasPipChart.data.datasets.forEach(dataset => {
	dataset.data = chartData;
	});
	maasPipChart.update();
}
function ewe(){
	var doughnut = document.getElementById('doughnut').getContext('2d');
	var economic = document.getElementById('economic').getContext('2d');

	
	// настройки графика экономики
	 economicChart = new Chart(economic,{
		type: "line",
		data:{
			labels:['1','2','3','4','5','6','7','8','9','10','11','12'],
			datasets: [{
			label: 'расходы',
			data: [0,0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			
			borderColor: 'rgb(65,74,91)',
			backgroundColor: 'rgba(65,74,91, .1)',
			fill: "start",
			
			  },
			{
			label: 'доходы',
			data: [0,0, 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
			
			borderColor: 'rgb(238, 164, 31)',
			backgroundColor: 'rgba(238, 164, 31, .5)',
			fill: "start",
			},]
			  
		},
	
		});
	economicChart.options.plugins.legend.align = 'end';
	


	// настройки графика производительности
	 maasPipChart = new Chart(doughnut,{
		type: "doughnut",
		data:{
			labels:['Проход','Проход (засоритель)','Отбой','Отбой (продукт)'],
			datasets: [{
				label: 'capacity',
				data: [0,0, 0, 0],
				backgroundColor: ['#3354a1','red','#414a5b','#eea41f'],
				borderWidth: [1,0,1,1],
				hoverOffset: 12,
				rotation: 120,
				radius: 100,
				offset:[0,0,12,12],
			  },]
		},
		options:{
			responsive: true,
			maintainAspectRatio: false,

			plugins: {
				legend:{
					position: "left",
					align:"center",
						}
					 }
				}
		});
		
}

function testLable(label){
	 economicChart.data.labels = label;
	 economicChart.update();
}

function economicShowDeleteButton(elementID){
	return function e(){
		var thisElement = document.getElementById(elementID);
		thisElement.children[0].style.display="none";
		thisElement.children[1].style.display="flex";
	}	
}
function economicHideDeleteButton(elementID){
	return function e(){
		var thisElement = document.getElementById(elementID);
		thisElement.children[0].style.display="flex";
		thisElement.children[1].style.display="none";
	}
}
function economicRemoveRow(remove){
	return function e(){
		EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;

		var elementNumber = Number(remove.split('_')[1]);
		var elementRemove = document.getElementById(remove).parentNode.parentNode.parentNode.id;
		document.getElementById(elementRemove).remove();
		EconomicRowType.elements.splice(elementNumber-1, 1);
		economicrefreshID();
		// cloneArticleRow();
	}
}
//добавление и удаление строк для графика
function addrowGraph(){	
	economicHideAll();
	var row = economicComponent_0.cloneNode(true);
	var idRow = Number(economicMainRow.children.length);	

	row.style.display = 'flex';
	row.id = 'economicComponent_' + idRow;	
	row.children[0].children[0].id = 'economicRowNumber_' + idRow;
	row.children[0].children[0].addEventListener('mouseenter', economicShowDeleteButton('economicRowNumber_' + idRow));
	row.children[0].children[0].addEventListener('mouseleave', economicHideDeleteButton('economicRowNumber_' + idRow));
	row.children[0].children[0].children[0].id = 'economicComponentNumber_' + idRow;
	row.children[0].children[0].children[0].textContent = idRow;
	row.children[0].children[0].children[1].id = 'economicDeleteButton_' + idRow;
	row.children[0].children[0].children[1].addEventListener('click', economicRemoveRow('economicDeleteButton_' + idRow));
	row.children[0].children[0].children[1].addEventListener('click', refreshEconomicChart);
	//economDiscriptionClassifier
	row.children[0].children[1].id = "economicClassifier_" + idRow;
	row.children[0].children[1].children[0].id = "economicResultBlock_" + idRow;
	row.children[0].children[1].children[0].children[0].id = "economicInputResult_" + idRow;
	row.children[0].children[1].children[1].children[0].children[0].id = "economicInput_" + idRow;
	row.children[0].children[1].children[2].id = "economicDropdown_" + idRow;
	//economicSumParametr 
	row.children[0].children[2].id = "economicSumParametr_" + idRow;
	row.children[0].children[2].children[1].children[0].children[0].id = 'economSumModelType_' + idRow;
					//параметры суммы
	row.children[0].children[2].children[1].children[0].children[1].children[1].addEventListener('click', economicBlockVievs(row.children[0].children[2].children[1].children[0].children[1].children[1], row.children[0].children[2].children[1].children[0].children[2].children[0]));
	row.children[0].children[2].children[1].children[0].children[2].id = 'economSumParam_' + idRow;
	row.children[0].children[2].children[1].children[0].children[2].children[2].id = 'economFraction_' + idRow;
	row.children[0].children[2].children[1].children[0].children[2].children[3].id = 'economFractionMass_' + idRow;
	row.children[0].children[2].children[1].children[0].children[2].children[5].id = 'economPercentParam_' + idRow;
	row.children[0].children[2].children[1].children[0].children[2].children[5].children[1].id = 'economArticle_' + idRow;
	//economicDataParametr
	row.children[0].children[2].children[1].children[1].children[0].id = 'economicDateParameter_' + idRow;
	row.children[0].children[2].children[1].children[1].children[0].children[0].id = 'economDateModelType_' + idRow;
					//параметры времени
	row.children[0].children[2].children[1].children[1].children[0].children[1].children[1].addEventListener('click', economicBlockVievs(row.children[0].children[2].children[1].children[1].children[0].children[1].children[1], row.children[0].children[2].children[1].children[1].children[0].children[2].children[0]));
	row.children[0].children[2].children[1].children[1].children[0].children[2].id = 'economDateParam_' + idRow;
	row.children[0].children[2].children[1].children[1].children[0].children[3].children[1].addEventListener('click', economicBlockVievs(row.children[0].children[2].children[1].children[1].children[0].children[3].children[1], row.children[0].children[2].children[1].children[1].children[0].children[4].children[0]));
	row.children[0].children[2].children[1].children[1].children[0].children[4].id = 'economPeriodParam_' + idRow;
	row.children[0].children[2].children[1].children[1].children[0].children[5].children[1].addEventListener('click', economicBlockVievs(row.children[0].children[2].children[1].children[1].children[0].children[5].children[1], row.children[0].children[2].children[1].children[1].children[0].children[6].children[0]));
	row.children[0].children[2].children[1].children[1].children[0].children[6].id = 'economFixedDate_' + idRow;
	//economicIncomeArrow
	row.children[0].children[3].children[0].children[0].children[0].id = 'arrow_' + idRow;

	economicMainRow.appendChild(row);	
	
	switch(economicType){
		case 'Req':
			// CalculateListNumber();
			if(idRow > economicRowData.elements.length){
				generateEconomicRowData();
				cloneFixRow();
				cloneArticleRow();
			}			
			break;
		case 'Prot':	
			if(idRow > economicRowDataProt.elements.length){		
				generateEconomicRowDataProt();							
				cloneFixRow();
				cloneArticleRow();
			}
			break;
	}
	
	setupEconomicFunction(row);
	//запишем дефонлтные данные строки
	setupSumParametrText(idRow);
	getTranslateEconom();
}
function economicrefreshID(){
	var rows = document.getElementById('economicMainRow');
	for(var z = 1; z < rows.children.length; z++){		
		var cloneRow = clearEventListener(rows.children[z]);
		var idRow = z;

		cloneRow.id = 'economicComponent_' + idRow;
		cloneRow.children[0].children[0].id = 'economicRowNumber_' + idRow;
		cloneRow.children[0].children[0].addEventListener('mouseenter', economicShowDeleteButton('economicRowNumber_' + idRow));
		cloneRow.children[0].children[0].addEventListener('mouseleave', economicHideDeleteButton('economicRowNumber_' + idRow));
		cloneRow.children[0].children[0].children[0].id = 'economicComponentNumber_' + idRow;
		cloneRow.children[0].children[0].children[0].textContent = idRow;
		cloneRow.children[0].children[0].children[1].id = 'economicDeleteButton_' + idRow;
		cloneRow.children[0].children[0].children[1].addEventListener('click', economicRemoveRow('economicDeleteButton_' + idRow));
		cloneRow.children[0].children[0].children[1].addEventListener('click', refreshEconomicChart);
		//economDiscriptionClassifier
		cloneRow.children[0].children[1].id = "economicClassifier_" + idRow;
		cloneRow.children[0].children[1].children[0].id = "economicResultBlock_" + idRow;
		cloneRow.children[0].children[1].children[0].children[0].id = "economicInputResult_" + idRow;
		cloneRow.children[0].children[1].children[1].children[0].children[0].id = "economicInput_" + idRow;
		cloneRow.children[0].children[1].children[2].id = "economicDropdown_" + idRow;
		//economicSumParametr 
		cloneRow.children[0].children[2].id = "economicSumParametr_" + idRow;
		cloneRow.children[0].children[2].children[1].children[0].children[0].id = 'economSumModelType_' + idRow;
		cloneRow.children[0].children[2].children[1].children[0].children[1].children[1].addEventListener('click', economicBlockVievs(cloneRow.children[0].children[2].children[1].children[0].children[1].children[1], cloneRow.children[0].children[2].children[1].children[0].children[2].children[0]));
		cloneRow.children[0].children[2].children[1].children[0].children[2].id = 'economSumParam_' + idRow;
		cloneRow.children[0].children[2].children[1].children[0].children[2].children[2].id = 'economFraction_' + idRow;
		cloneRow.children[0].children[2].children[1].children[0].children[2].children[3].id = 'economFractionMass_' + idRow;
		cloneRow.children[0].children[2].children[1].children[0].children[2].children[5].id = 'economPercentParam_' + idRow;
		cloneRow.children[0].children[2].children[1].children[0].children[2].children[5].children[1].id = 'economArticle_' + idRow;
		//economicDataParametr
		cloneRow.children[0].children[2].children[1].children[1].children[0].id = 'economicDateParameter_' + idRow;
		cloneRow.children[0].children[2].children[1].children[1].children[0].children[0].id = 'economDateModelType_' + idRow;
		cloneRow.children[0].children[2].children[1].children[1].children[0].children[1].children[1].addEventListener('click', economicBlockVievs(cloneRow.children[0].children[2].children[1].children[1].children[0].children[1].children[1], cloneRow.children[0].children[2].children[1].children[1].children[0].children[2].children[0]));
		cloneRow.children[0].children[2].children[1].children[1].children[0].children[2].id = 'economDateParam_' + idRow;
		cloneRow.children[0].children[2].children[1].children[1].children[0].children[3].children[1].addEventListener('click', economicBlockVievs(cloneRow.children[0].children[2].children[1].children[1].children[0].children[3].children[1], cloneRow.children[0].children[2].children[1].children[1].children[0].children[4].children[0]));
		cloneRow.children[0].children[2].children[1].children[1].children[0].children[4].id = 'economPeriodParam_' + idRow;
		cloneRow.children[0].children[2].children[1].children[1].children[0].children[5].children[1].addEventListener('click', economicBlockVievs(cloneRow.children[0].children[2].children[1].children[1].children[0].children[5].children[1], cloneRow.children[0].children[2].children[1].children[1].children[0].children[6].children[0]));
		cloneRow.children[0].children[2].children[1].children[1].children[0].children[6].id = 'economFixedDate_' + idRow;
		//economicIncomeArrow
		cloneRow.children[0].children[3].children[0].children[0].children[0].id = 'arrow_' + idRow;
		setupEconomicFunction(cloneRow);
		//запишем дефонлтные данные строки
		setupSumParametrText(idRow);
	}
	cloneFixRow();	
	cloneArticleRow();
}

function refreshMassof1000(idRow){
	return function e(){
		var product = document.getElementById('clsInput_test_' + idRow).value;
		var gramm1 = document.getElementById('massDropdown_1_'+ idRow).children[4].children[0].children[0];
		var gramm2 = document.getElementById('massDropdown_2_'+ idRow).children[4].children[0].children[0];
		var gramm3 = document.getElementById('massDropdown_3_'+ idRow).children[4].children[0].children[0];
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
function refreshMassof1000ForStart(idRow){
	var product = document.getElementById('clsInput_test_' + idRow).value;
	var gramm1 = document.getElementById('massDropdown_1_'+ idRow).children[4].children[0].children[0];
	var gramm2 = document.getElementById('massDropdown_2_'+ idRow).children[4].children[0].children[0];
	var gramm3 = document.getElementById('massDropdown_3_'+ idRow).children[4].children[0].children[0];
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
function economicHideAll(){
	var rows = document.getElementById('economicMainRow');
	for (var i = 1; i< rows.children.length; i++){
		var economicResultBlock = document.getElementById("economicResultBlock_"+i);
		var economicInputResult = document.getElementById("economicInputResult_"+i);
		var economicDropdown = document.getElementById("economicDropdown_"+i);
		var econimicInput = document.getElementById("economicInput_"+i);
		var addOption = econimicInput.parentNode.children[1];
		
		var economicSumBlock = document.getElementById("economicSumParametr_" + i);
		var economSumModelType = document.getElementById("economSumModelType_" + i);
		var economSumParamType = document.getElementById("economSumParam_" + i);

		var economicDateParameter = document.getElementById("economicDateParameter_" + i);
		var economDateModelType = document.getElementById("economDateModelType_" + i);
		var economDateParam = document.getElementById("economDateParam_" + i);
		var economPeriodParam = document.getElementById("economPeriodParam_" + i);
		var economFixedDate = document.getElementById("economFixedDate_" + i);

		var ok_button = economicSumBlock.getElementsByClassName('okButton')[0];

		var economSumParamTitle = economicSumBlock.getElementsByClassName('inputTitle')[0];
		var economFractionTitle = economicSumBlock.getElementsByClassName('inputTitle')[1];
		var economPercentParamTitle = economicSumBlock.getElementsByClassName('inputTitle')[2];

		var economDateParamTitle = economicDateParameter.getElementsByClassName('inputTitle')[0];
		var economPeriodParamTitle = economicDateParameter.getElementsByClassName('inputTitle')[1];
		var economFixedDateTitle = economicDateParameter.getElementsByClassName('inputTitle')[2];
		
		ok_button.style.display = "none";

		economicResultBlock.style.display = "none";
		economicDropdown.style.display = "none"
		addOption.style.display = "none"
		
		economSumModelType.style.display = "none";
		economSumParamType.style.display = "none";

		economSumParamTitle.style.display = "none";
		economFractionTitle.style.display = "none";
		economPercentParamTitle.style.display = "none";

		economDateModelType.style.display = "none";
		economDateParam.style.display = "none";
		economPeriodParam.style.display = "none";
		economFixedDate.style.display = "none"

		economDateParamTitle.style.display = "none";
		economPeriodParamTitle.style.display = "none";
		economFixedDateTitle.style.display = "none";
		
		resultTextView(econimicInput, economicInputResult);
	}
}

function calculateCalendar(element){
	var current = Number(element.value);
	var param = element.parentNode.children[1].value;
	var main = element.parentNode.parentNode;
	switch(param){
	  case 'час':
		main.children[4].children[0].value = Number((current/24)/365).toFixed(2);
		main.children[3].children[0].value = Number(((current/24)/4)/12).toFixed(2);
		main.children[2].children[0].value = Number((current/24)/4).toFixed(2);
		main.children[1].children[0].value = Number(current/24).toFixed(2);
		main.children[0].children[0].value = Number(current).toFixed(2);
		break;
	  case 'день':
		main.children[4].children[0].value = Number((1/365)*current).toFixed(2);
		main.children[3].children[0].value = Number((1/12)*current).toFixed(2);
		main.children[2].children[0].value = Number((1/48)*current).toFixed(2);
		main.children[1].children[0].value = Number(current).toFixed(2);
		main.children[0].children[0].value = Number(current*24).toFixed(2);
		break;
	  case 'неделя':
		main.children[4].children[0].value = Number((1/48)*current).toFixed(2);
		main.children[3].children[0].value = Number(current/4).toFixed(2);
		main.children[2].children[0].value = Number(current).toFixed(2);
		main.children[1].children[0].value = Number(current*7).toFixed(2);
		main.children[0].children[0].value = Number(current*7*24).toFixed(2);
		break;
	  case 'месяц':
		main.children[4].children[0].value = Number(current/12).toFixed(2);
		main.children[3].children[0].value = Number(current).toFixed(2);
		main.children[2].children[0].value = Number(current*4).toFixed(2);
		main.children[1].children[0].value = Number(current*4*7).toFixed(2);
		main.children[0].children[0].value = Number(current*4*7*24).toFixed(2);
		break;
	  case 'год':
		main.children[4].children[0].value =  Number(current).toFixed(2);
		main.children[3].children[0].value =  Number(current*12).toFixed(2);
		main.children[2].children[0].value =  Number(current*12*4).toFixed(2);
		main.children[1].children[0].value =  Number(current*12*4*7).toFixed(2);
		main.children[0].children[0].value =  Number(current*12*4*7*24).toFixed(2);
		break;
	}
	refreshEconomicChart();
  }
function calculateCalendarMass(element){
	var current = Number(element.value);
	var param = element.parentNode.children[1].value;
	var main = element.parentNode.parentNode;
	switch(param){
	  case 'тонн':
		main.children[0].children[0].value = Number(current).toFixed(3);
		main.children[1].children[0].value = Number(current*10).toFixed(3);
		main.children[2].children[0].value = Number(current*1000).toFixed(3);
		break;
	  case 'центнеров':
		main.children[0].children[0].value = Number(current/10).toFixed(3);
		main.children[1].children[0].value = Number(current).toFixed(3);
		main.children[2].children[0].value = Number(current*100).toFixed(3);
		break;
	  case 'килограмм':
		main.children[0].children[0].value = Number(current/1000).toFixed(3);
		main.children[1].children[0].value = Number(current/100).toFixed(3);
		main.children[2].children[0].value = Number(current).toFixed(3);
		break;
	}
	//refreshEconomicChart();
}

function calculateCalendarPrice(element){
	var current = Number(element.value);
	var param = element.parentNode.children[1].value;
	var main = element.parentNode.parentNode;
	switch(param){
	  case 'тысяч рублей':
		main.children[0].children[0].value = Number(current).toFixed(3);
		// main.children[1].children[0].value = Number(current*(CRB_RUB_RATE["USD"].Value)).toFixed(3);
		// main.children[2].children[0].value = Number(current*(CRB_RUB_RATE["EUR"].Value)).toFixed(3);
		break;
	  case 'тысяч долларов':
		var inRUB = Number(current*(CRB_RUB_RATE["USD"].Value)).toFixed(3);
		main.children[0].children[0].value = inRUB;
		main.children[1].children[0].value = Number(current).toFixed(3);
		main.children[2].children[0].value = Number(inRUB/(CRB_RUB_RATE["EUR"].Value)).toFixed(3);
		break;
	  case 'тысяч евро':
		var inRUB = Number(current*(CRB_RUB_RATE["EUR"].Value)).toFixed(3);
		main.children[0].children[0].value = inRUB;
		main.children[1].children[0].value = Number(inRUB/(CRB_RUB_RATE["USD"].Value)).toFixed(3);
		main.children[2].children[0].value = Number(current).toFixed(3);
		break;
	}
	//refreshEconomicChart();
}

function returnResultType(product){
	var resultType;
	if(list_product.map((el) => el.productName).indexOf(product[0]) != -1){
		resultType = 'product';
	}
	else if(list_weed.map((el) => el.weedName).indexOf(product[0]) != -1){
		resultType = 'weed';
	}
	else{
		resultType = 'customeOption';
	}
	return resultType;
}


function createExplainPage(idRow){
	var page = explainPage.cloneNode(true);
	page.style.display = '';
	page.id = 'explainPage_' + idRow;
	page.children[1].children[0].id = 'NewsBlock_' + idRow;
	page.children[1].children[0].children[0].children[0].children[0].children[0].children[0].children[0].id = 'Message_text_' + idRow;
	explain_MainBlock.appendChild(page);
	try{
		var type = idRow.split("_")[1];
		pageProtocolRow[ProtocolPage-1].explainPage.push({
			"idPage":idRow,
			"text": 0,
			"img": []
		});
	}
	catch{
		pageRow[currentPage-1].explainPage.push({
			"idPage":idRow,
			"text": 0,
			"img": []
		});
	}	
	setupExplainParam(idRow);
	switchExplain();
}
function setupExplainParam(idRow){
	var quill = new Quill('#Message_text_' + idRow,{
		modules: {
		  toolbar: [
			['bold', 'italic', 'underline', 'strike'],
			['link', ],//'image',
			[{ 'indent': '-1'}, { 'indent': '+1' }]// outdent/indent
		  ]
		},
		theme: 'snow'  // or 'bubble'
	  });
	var ButtonCase = document.getElementById('NewsBlock_'+ idRow).getElementsByClassName('ql-toolbar ql-snow')[0];
	var Block = document.createElement('span');
	
	var BlockbuttonUp = document.createElement('button');
	var BlockbuttonLow = document.createElement('button');
	var ImgEl = document.createElement('button');
	var inpIMG = document.createElement('input');

	Block.classList ='ql-formats'
	BlockbuttonUp.classList ='ql-indent';
	BlockbuttonUp.innerHTML = 'AA';
	BlockbuttonUp.id = "UpperCaseText_" + idRow;
	
	BlockbuttonLow.classList ='ql-indent';
	BlockbuttonLow.innerHTML = 'aa';
	BlockbuttonLow.id = "UpperLowerText_" + idRow;

	ImgEl.classList = 'ql-video';
	ImgEl.style="padding: 12px;background-image:url(/static/TestClassifier/img/classifier/NewPhoto.png);background-size:cover;width: 25px;";
	ImgEl.id = 'NewPhoto_' + idRow;

	inpIMG.id = 'inpPhoto_' + idRow;
	inpIMG.type = 'file';
	inpIMG.setAttribute('accept', "image/png, image/gif, image/jpeg");
	inpIMG.style.display = 'none';
// 
	Block.appendChild(BlockbuttonUp);
	Block.appendChild(BlockbuttonLow);

	document.getElementById('NewsBlock_'+ idRow).getElementsByClassName('ql-toolbar ql-snow')[0].children[1].appendChild(ImgEl);
	document.getElementById('NewsBlock_'+ idRow).getElementsByClassName('ql-toolbar ql-snow')[0].children[1].appendChild(inpIMG);

	BlockbuttonUp.addEventListener('click',function(){UpperCaseText(this.id)});
	BlockbuttonLow.addEventListener('click',function(){UpperLowerText(this.id)});
	
	ImgEl.addEventListener('click',function(){createInpClone(idRow)});
	
	ButtonCase.appendChild(Block);

}
function createInpClone(idRow){
	var urlObject = window.URL || window.webkitURL; 
	
	var inpIMG = document.getElementById('inpPhoto_'+ idRow);
	var PrOrReq = String(idRow).search('P') != -1 ? '_P' : '';
	var inpIMGClone = inpIMG.cloneNode(true);
	var idNum = document.getElementById('NewsBlock_'+ idRow).getElementsByClassName('ql-toolbar ql-snow')[0].children[1].children.length-1;
	inpIMGClone.id = 'inpPhoto_' + idNum + PrOrReq;
	inpIMGClone.addEventListener('change', function(){createImg(idNum, idRow, urlObject, PrOrReq)});
	document.getElementById('NewsBlock_'+ idRow).getElementsByClassName('ql-toolbar ql-snow')[0].children[1].appendChild(inpIMGClone);
	inpIMGClone.click();
	
}
function createImg(idNum, idRow, urlObject,PrOrReq){
	var inpIMG = document.getElementById('inpPhoto_' + idNum + PrOrReq);
	var imgBlock = document.createElement('img');
	var typeFile = inpIMG.files[0].type;
	if(typeFile.split('/')[0] == 'image'){
		imgBlock.className  = 'hoverView';
		imgBlock.setAttribute('src', urlObject.createObjectURL(inpIMG.files[0]));
		imgBlock.setAttribute('name', inpIMG.files[0].name);
		document.getElementById('Message_text_'+ idRow).getElementsByClassName('ql-editor')[0].appendChild(imgBlock);
	}
	else{
		imgBlock.setAttribute('src', '/static/TestClassifier/img/classifier/file.png');		
		imgBlock.setAttribute('name', inpIMG.files[0].name);
		document.getElementById('Message_text_'+ idRow).getElementsByClassName('ql-editor')[0].appendChild(imgBlock);
	}	
}
function UpperCaseText(id){
	var block  = document.getElementById('NewsBlock_' +id.split('_')[1]).getElementsByClassName('ql-editor')[0].innerHTML
	var select = window.getSelection();
	document.getElementById('NewsBlock_' +id.split('_')[1]).getElementsByClassName('ql-editor')[0].innerHTML =block.replace(select.toString(), select.toString().toUpperCase())
}
function UpperLowerText(id){
	var block  = document.getElementById('NewsBlock_' +id.split('_')[1]).getElementsByClassName('ql-editor')[0].innerHTML
	var select = window.getSelection();
	document.getElementById('NewsBlock_' +id.split('_')[1]).getElementsByClassName('ql-editor')[0].innerHTML =block.replace(select.toString(), select.toString().toLowerCase())
}

function switchExplain(){
	explain = document.getElementById("explain_MainBlock");
	for(var i = 1; i < explain.children.length; i++){
		explain.children[i].style.display = "none"
	}
	var req = document.getElementById("explainPage_" + currentPage);
	var prot = document.getElementById("explainPage_" + ProtocolPage + "_P");

	if(req != null){req.style.display = ""};
	if(prot != null){prot.style.display = ""};
}

function resortIdExplain(){
	for(var i = 0; i < pageRow.length; i++){
		var current = document.getElementById("explainPage_" + pageRow[i].explainPage[0].idPage);
		current.id = "explainPage_" + (i+1);
		pageRow[i].explainPage[0].idPage = (i+1);
	}
	for(var i = 0; i < pageProtocolRow.length; i++){
		var current = document.getElementById("explainPage_" + pageProtocolRow[i].explainPage[0].idPage);
		current.id = "explainPage_" + (i+1) + "_P";
		pageProtocolRow[i].explainPage[0].idPage = (i+1)  + "_P";
	}
}

function saveExplain(){
	for(var i = 1; i< explain_MainBlock.children.length; i++){
		var idPage = explain_MainBlock.children[i].id;
		var numberP = idPage.split("_")[1];
		var type = idPage.split("_")[2];
		if(type != null){	
			var Message_text = document.getElementById( "Message_text_" + numberP + '_' + type).children[0].innerHTML;			
			pageProtocolRow[numberP-1].explainPage[0].text = Message_text;
			var inputMass = document.getElementById('NewPhoto_'+ numberP + '_' + type).parentNode.getElementsByTagName("input");
			for(var k = 1; k< inputMass.length; k++){
				if(inputMass[k].getAttribute('cannotLoad') == null){
					pageProtocolRow[numberP-1].explainPage[0].img.push(inputMass[k].files[0].name);
				}
			}
		}
		else{
			var Message_text = document.getElementById( "Message_text_" + numberP).children[0].innerHTML;			
			pageRow[numberP-1].explainPage[0].text = Message_text;
			var inputMass = document.getElementById('NewPhoto_'+ numberP).parentNode.getElementsByTagName("input");
			for(var k = 1; k< inputMass.length; k++){
				if(inputMass[k].getAttribute('cannotLoad') == null){
					pageRow[numberP-1].explainPage[0].img.push(inputMass[k].files[0].name);
				}
			}
			
		}
	}
}




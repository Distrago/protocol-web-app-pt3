var manufacturer = [];
var dillers = [];
var model = [];
var seria = [];
var lotok =[];
var CompRow = {
	"elements": [],
};
CompRow.elements.description
function generateCompetitorRowData(){
	CompRow.elements.push({
		'model':{
			'modelName':'modelName',
			'series': 'seria',
			'tray': 0,
		},
		'price':{
			'price': 0,
			'discount': 0,
			'priceDiscount': 0,
			'NDS': 0
		},
		'info': {
			'middlePrice': 0,
			'customs': 0,
			'minimalPrice': 0,
			'imported': 0
		},
		'description':{
			'diller': 'diller',
			'manufacturer': 'manufacturer',
		}
	});
}
function createTable(){
	for(var i = 0; i < list_Model.length; i++){
		manufacturer.push({'id': list_Model[i].id_group, 'name': list_Model[i].manufacturer});
	}
	manufacturer = multiDimensionalUnique(manufacturer);

	for(var i = 0; i < list_Dillers.length; i++){
		dillers.push({'id': list_Dillers[i].id, "id_group": list_Dillers[i].id_group, 'name': list_Dillers[i].dillers});
	}
	for(var i = 0; i < list_Model.length; i++){
		model.push({'id': list_Model[i].id, "id_group": list_Model[i].id_group, 'name': list_Model[i].model, 'series': list_Model[i].series});
	}	
	for(var i = 0; i < list_Model.length; i++){
		seria.push({'series': list_Model[i].series});		
	}
	seria = multiDimensionalUnique(seria);

	for(var i = 0; i < list_Model.length; i++){
		lotok.push({'trays': list_Model[i].trays});		
	}
	lotok = multiDimensionalUnique(lotok);
	lotok.sort((a, b) => parseFloat(a.trays) - parseFloat(b.trays));
}

function StartInputComp(idRow){
	var inputBlock = document.getElementById("CompInput_" + idRow);
	var clsDropdown = document.getElementById("CompDropdown_" + idRow);
	DoropdownCompOptionClear(idRow);
	if(inputBlock.value.length == 0){
		DropdownCompOptionDefault(idRow)
	}
	else{
		DropdownCompSearch(idRow)
	}	
	// clsDropdown.style.display="flex";
}
function StartInputListeners(idRow){
	return function e(){
		var inputBlock = document.getElementById("CompInput_" + idRow);
		var clsDropdown = document.getElementById("CompDropdown_" + idRow);
		DoropdownCompOptionClear(idRow);
		if(inputBlock.value.length == 0){
			DropdownCompOptionDefault(idRow)
		}
		else{
			DropdownCompSearch(idRow)
		}	
		clsDropdown.style.display="flex";
	}
}
function DoropdownCompOptionClear(idRow){
	var clsDropdown = document.getElementById("CompDropdown_" + idRow);
	var dropdownOptions = clsDropdown.children[0];
	//Стартовая отчиска от лишних элементов
	for(var i = dropdownOptions.children.length - 1; i > 0; i--){
		dropdownOptions.children[i].remove();
	}
}
function DropdownCompOptionDefault(idRow){
	var clsDropdown = document.getElementById("CompDropdown_" + idRow);
	var dropdownOptions =  clsDropdown.children[0];
	var dropdownOptionClone = clsDropdown.children[0].children[0];
	var classifierInpurResult = document.getElementById("CompInpurResult_" + idRow);
	var listElements = [dillers, manufacturer];	// model
	
	//Проверки
	for(var i = 0; i < classifierInpurResult.children.length; i++){
		var resultType = classifierInpurResult.children[i].id.split('_')[1];		
		if(resultType == "dillers"){
			var dillerName = classifierInpurResult.children[i].textContent;
			var ID_diller = Number(classifierInpurResult.children[i].id.split('_')[2]);
			listElements = checkResultOptionCom(listElements, dillers);
		}
		if(resultType == "manufacturer"){
			var manufactureName = classifierInpurResult.children[i].textContent;
			var ID_manufacturer = Number(classifierInpurResult.children[i].id.split('_')[2]);
			listElements = checkResultOptionCom(listElements, manufacturer);
		}	
	}
	if(ID_diller == null || ID_manufacturer == null){
		listElements = checkResultOptionCom(listElements, model);
	}
	for(var i = 0; i < listElements.length; i++){
		var __list = listElements[i];
		for(var el = 0 ; el < __list.length; el++){
			if(ID_diller == null && ID_manufacturer == null){
				var option = dropdownOptionClone.cloneNode(true);
				option.style.display = "";
				option.children[0].setAttribute('name', returnTableTypeComp(listElements[i]));			
				option.children[0].id = returnTableTypeComp(listElements[i]) + "_" + __list[el].id;
				option.children[0].value = __list[el].name;
				dropdownOptions.appendChild(option);			
				option.children[0].addEventListener("click", function(){addResultOptionComp(this.id, idRow)});
				option.children[0].addEventListener("click", filterLotok(idRow));
				option.children[0].addEventListener("click", filterSeria(idRow));
				option.children[0].addEventListener("click", filterModel(idRow));
			}
			else if(ID_diller != null && list_Dillers[ID_diller].id_group != "all" && __list != model){
				var id_group = list_Dillers[ID_diller].id_group.split(',');
				for(var lz = 0; lz < id_group.length; lz++){
					if(id_group[lz] == __list[el].id){
						var option = dropdownOptionClone.cloneNode(true);
						option.style.display = "";
						option.children[0].setAttribute('name', returnTableTypeComp(listElements[i]));			
						option.children[0].id = returnTableTypeComp(listElements[i]) + "_" + __list[el].id;
						option.children[0].value = __list[el].name;
						dropdownOptions.appendChild(option);			
						option.children[0].addEventListener("click", function(){addResultOptionComp(this.id, idRow)});
						option.children[0].addEventListener("click", filterLotok(idRow));
						option.children[0].addEventListener("click", filterSeria(idRow));
						option.children[0].addEventListener("click", filterModel(idRow));
					}					
				}
			}
			else if(ID_diller != null && list_Dillers[ID_diller].id_group == "all" && __list != model){
				var option = dropdownOptionClone.cloneNode(true);
				option.style.display = "";
				option.children[0].setAttribute('name', returnTableTypeComp(listElements[i]));			
				option.children[0].id = returnTableTypeComp(listElements[i]) + "_" + __list[el].id;
				option.children[0].value = __list[el].name;
				dropdownOptions.appendChild(option);			
				option.children[0].addEventListener("click", function(){addResultOptionComp(this.id, idRow)});
				option.children[0].addEventListener("click", filterLotok(idRow));
				option.children[0].addEventListener("click", filterSeria(idRow));
				option.children[0].addEventListener("click", filterModel(idRow));
			}				
			else if(ID_manufacturer != null && __list != model && (__list[el].id_group == 'all' || __list[el].id_group.split(',').indexOf(String(ID_manufacturer)) != -1)){
				var option = dropdownOptionClone.cloneNode(true);
				option.style.display = "";
				option.children[0].setAttribute('name', returnTableTypeComp(listElements[i]));			
				option.children[0].id = returnTableTypeComp(listElements[i]) + "_" + __list[el].id;
				option.children[0].value = __list[el].name;
				dropdownOptions.appendChild(option);			
				option.children[0].addEventListener("click", function(){addResultOptionComp(this.id, idRow)});
				option.children[0].addEventListener("click", filterLotok(idRow));
				option.children[0].addEventListener("click", filterSeria(idRow));
				option.children[0].addEventListener("click", filterModel(idRow));
			}
		}	
	}

}
function DropdownCompSearch(idRow){
	var inputBlock = document.getElementById('CompInput_' + idRow);
	var dropdownBlock = document.getElementById('CompDropdown_' + idRow);
	var classifierInpurResult = document.getElementById('CompInpurResult_' + idRow);
	var dropdownOptions = dropdownBlock.children[0];
	var dropdownOptionClone = dropdownBlock.children[0].children[0];	
	
	var listElements = [dillers, manufacturer];//model

	//Проверки
	for(var i = 0; i < classifierInpurResult.children.length; i++){
		var resultType = classifierInpurResult.children[i].id.split('_')[1];
		if(resultType == "manufacturer"){
			ID_manufacturer = Number(classifierInpurResult.children[i].id.split('_')[2]);
			listElements = checkResultOptionCom(listElements, manufacturer);
		}
		if(resultType == "diller"){
			ID_diller = Number(classifierInpurResult.children[i].id.split('_')[2]);
			listElements = checkResultOptionCom(listElements, diller);
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
					
					option.children[0].addEventListener("click", function(){addResultOptionComp(this.id, idRow)});
					option.children[0].addEventListener("click", filterLotok(idRow));
					option.children[0].addEventListener("click", filterSeria(idRow));
					option.children[0].addEventListener("click", filterModel(idRow));
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
						
						option.children[0].addEventListener("click", function(){addResultOptionComp(this.id, idRow)});
						option.children[0].addEventListener("click", filterLotok(idRow));
						option.children[0].addEventListener("click", filterSeria(idRow));
						option.children[0].addEventListener("click", filterModel(idRow));
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
function addResultOptionComp(elenentid, idRow){
	var elementid = document.getElementById(elenentid);
	var inputBlock = document.getElementById("CompInput_" + idRow);
	var main = inputBlock.parentNode.parentNode.parentNode;
	var classifierInpurResultRow = main.children[0].children[0];
	var option = elementid;
	var object = document.createElement("div");
	object.classList.add("wordElement");
	object.id = "result_" + option.id;
	object.textContent = option.value;
	
	switch(option.id.split('_')[0]){
		case'dillers':
			CompRow.elements[idRow-1].description.diller = option.value;
			break;
		case'manufacturer':
			CompRow.elements[idRow-1].description.manufacturer = option.value;
			break;
	}	
	object.addEventListener("click", removeCompInputResult(idRow));	
	object.addEventListener("click", filterLotok(idRow));
	object.addEventListener("click", filterSeria(idRow));
	object.addEventListener("click", filterModel(idRow));
	
	classifierInpurResultRow.appendChild(object);
	cloneCompetitorInfoRow(idRow);
	sortResultBlockComp(idRow);
	
	StartInputComp(idRow);
	document.getElementById("CompInput_" + idRow).focus();
	document.getElementById("CompInput_" + idRow).value="";
} 
function addResultOptionCustom(idRow){
	return function e(){
		var inputBlock = document.getElementById("CompInput_" + idRow);
		var main = inputBlock.parentNode.parentNode.parentNode;
		var classifierInpurResultRow = main.children[0].children[0];
		var object = document.createElement("div");
		object.classList.add("wordElement");
		object.id = "result_Custom";
		object.textContent = inputBlock.value;
		object.addEventListener("click", removeCompInputResult(idRow));
		classifierInpurResultRow.appendChild(object);
		cloneCompetitorInfoRow(idRow);
		sortResultBlockComp(idRow);
		
		StartInputComp(idRow);
		document.getElementById("CompInput_" + idRow).focus();
		document.getElementById("CompInput_" + idRow).value="";
	}
	
	
}
function removeProductInfoComp(idRow){
	var inputBlock = document.getElementById('CompInput_' + idRow);
	var main = inputBlock.parentNode.parentNode.parentNode;
	var infoTitle = main.children[2].children[1].id;
	var infoBlock = main.children[2].children[2].id;
	document.getElementById(infoTitle).style.display = "none";
	for(var i = document.getElementById(infoBlock).children.length - 1; i > 0; i--){
		document.getElementById(infoBlock).children[i].remove();
	}
}
function removeCompInputResult(idRow){
	return function e(){
		switch(this.id.split('_')[1]){
			case'dillers':
				CompRow.elements[idRow-1].description.diller = 'dillers';
				break;
			case'manufacturer':
				CompRow.elements[idRow-1].description.manufacturer = 'manufacturer';
				break;
		}			
		this.remove();
		cloneCompetitorInfoRow(idRow);
		StartInputComp(idRow);
	}
}

function checkResultOptionCom(list, listElement){
	var index = list.indexOf(listElement);
	if(index > -1)
		list.splice(index, 1);
	
	return list;
}
function returnTableTypeComp(tableID){
	switch(tableID){		
		case dillers:
			var id = "dillers";
			break;
		case manufacturer:
			var id = "manufacturer";
			break;	
		case model:
			var id = "model";
			break;	
	}
	return id;
}
function sortResultBlockComp(idRow){
	var resultBlock = document.getElementById('CompInpurResultBlock_' + idRow);
	var keyList = ["dillers", "manufacturer", "model"];
	
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

function multiDimensionalUnique(arr){
    var uniques = [];
    var itemsFound = {};
    for(var i = 0, l = arr.length; i < l; i++) {
        var stringified = JSON.stringify(arr[i]);
        if(itemsFound[stringified]) { continue; }
        uniques.push(arr[i]);
        itemsFound[stringified] = true;
    }
    return uniques;
}
// изменение ОТОБРАЖЕНИЕ ЭЛЕМЕНТОВ строк
function CompViewRow(inpId){
	return function e(){
		var CompInput = document.getElementById('CompInput_' + inpId);
		var CompInpurResultBlock = document.getElementById('CompInpurResultBlock_' + inpId);
		var CompDropdown = document.getElementById('CompDropdown_' + inpId);
		CompInpurResultBlock.style.display = 'flex';
		CompDropdown.style.display = 'flex';
		CompInput.parentNode.children[1].style.display = 'flex';
		CompInput.value = '';
		StartInputComp(inpId);
		
	}
	
}
function CompHideRow(inpId){
	return function e(){
		var CompControlButton = document.getElementById('CompControlButton_' + inpId);
		var CompInpurResultBlock = document.getElementById('CompInpurResultBlock_' + inpId);
		var CompInpurResult = document.getElementById('CompInpurResult_' + inpId);
		var CompDropdown = document.getElementById('CompDropdown_' + inpId);
		var CompInput = document.getElementById('CompInput_' + inpId);
		CompInpurResultBlock.style.display = 'none';
		CompDropdown.style.display = 'none';
		CompInput.parentNode.children[1].style.display = 'none';
		resultTextView(CompInput, CompInpurResult);
	}
	
}
function changeParametrRowstyle(idRow){	
	return function e(){
		var parametrRow = document.getElementById('parametrRow_'+ idRow);
		if(parametrRow.style.display == 'flex' ){
			hideContentRow();
		}
		else{
			hideContentRow();
			parametrRow.style.display = 'flex'
		}
	}
	
}
function hideContentRow(){
	var mainRow = document.getElementById('competitorMainRow');
	for(var i = 1; i< mainRow.children.length; i++){
		var row = mainRow.children[i];
		row.children[0].children[1].children[0].style.display = 'none';
		row.children[0].children[1].children[1].children[0].children[1].style.display = 'none';
		row.children[0].children[1].children[2].style.display = 'none';
		row.children[0].children[2].children[1].style.display = 'none';
	}
	
}

// ДОБАВЛЕНИЕ и УДАЛЕНИЕ строк клонов
function competitorShowDeleteButton(elementID){
	return function e(){
		var thisElement = document.getElementById(elementID);
		thisElement.children[0].style.display="none";
		thisElement.children[1].style.display="flex";
	}	
}
function competitorHideDeleteButton(elementID){
	return function e(){
		var thisElement = document.getElementById(elementID);
		thisElement.children[0].style.display="flex";
		thisElement.children[1].style.display="none";
	}
}
function competitorRemoveRow(remove){
	return function e(){
		var elementNumber = Number(remove.split('_')[1]);
		var elementRemove = document.getElementById(remove).parentNode.parentNode.parentNode.id;
		document.getElementById(elementRemove).remove();
		CompRow.elements.splice(elementNumber-1, 1);
		competitorRefreshID();
	}
}
function addrowCompetitor(){
	var row = competitorComponent_0.cloneNode(true);
	var idRow = Number(competitorMainRow.children.length);	

	row.style.display = 'flex';
	row.id = 'competitorComponent_' + idRow;
	row.children[0].children[0].id = 'CompRowNumber_' + idRow;
	row.children[0].children[0].addEventListener('mouseenter', competitorShowDeleteButton('CompRowNumber_' + idRow));
	row.children[0].children[0].addEventListener('mouseleave', competitorHideDeleteButton('CompRowNumber_' + idRow));
	row.children[0].children[0].children[0].id = 'CompComponentNumber_' + idRow;
	row.children[0].children[0].children[0].textContent = idRow;
	row.children[0].children[0].children[1].id = 'CompDeleteButton_' + idRow;
	row.children[0].children[0].children[1].addEventListener('click', competitorRemoveRow('CompDeleteButton_' + idRow));

	//              rowOptionBlock 1 addResultOptionCustom(idRow)
	row.children[0].children[1].children[0].id = 'CompInpurResultBlock_' +idRow;
	row.children[0].children[1].children[0].children[0].id = 'CompInpurResult_' + idRow;
	row.children[0].children[1].children[0].children[1].children[0].id = 'CompControlButton_' + idRow;
	row.children[0].children[1].children[0].children[1].children[0].addEventListener('click', CompHideRow(idRow));
	row.children[0].children[1].children[1].children[0].children[0].id = 'CompInput_' + idRow;
	row.children[0].children[1].children[1].children[0].children[0].addEventListener('click', CompViewRow(idRow));
	row.children[0].children[1].children[1].children[0].children[1].addEventListener('click', addResultOptionCustom(idRow));
	row.children[0].children[1].children[2].id = 'CompDropdown_' + idRow;
	//              rowOptionBlock 2
	row.children[0].children[2].children[0].children[0].id = 'controlInput_' + idRow;
	row.children[0].children[2].children[0].children[0].addEventListener('click', changeParametrRowstyle(idRow));
	row.children[0].children[2].children[0].children[1].children[0].addEventListener('click', changeParametrRowstyle(idRow));
	row.children[0].children[2].children[0].children[1].children[0].addEventListener('click', CompRowTextForm(idRow));	
	row.children[0].children[2].children[1].id = 'parametrRow_' + idRow;
	row.children[0].children[2].children[1].children[0].children[0].children[1].id = 'lotkiContentRow_' + idRow;
	row.children[0].children[2].children[1].children[0].children[1].id = 'dropdownCompLotki_' + idRow;
	row.children[0].children[2].children[1].children[0].children[2].children[1].id = 'seriaContentRow_' + idRow;
	row.children[0].children[2].children[1].children[0].children[3].id = 'dropdownCompSeria_' + idRow;
	row.children[0].children[2].children[1].children[0].children[4].children[1].id = 'modelContentRow_' + idRow;
	row.children[0].children[2].children[1].children[0].children[5].id = 'dropdownCompModel_' + idRow;
	row.children[0].children[2].children[1].children[1].children[0].children[1].id = 'priceContentRow_' + idRow;
	row.children[0].children[2].children[1].children[1].children[1].id = 'dropdownCompPrice_' + idRow;
	row.children[0].children[2].children[1].children[1].children[1].children[0].children[0].children[0].addEventListener('change', changeCompPrice(idRow));
	row.children[0].children[2].children[1].children[1].children[1].children[0].children[1].children[0].addEventListener('change', changeCompPrice(idRow));
	row.children[0].children[2].children[1].children[1].children[1].children[0].children[2].children[0].addEventListener('change', changeCompPrice(idRow));
	row.children[0].children[2].children[1].children[1].children[1].children[0].children[3].children[0].addEventListener('change', changeCompPrice(idRow));	

	row.children[0].children[2].children[1].children[1].children[1].children[0].children[0].children[0].addEventListener('change', compRowDiscontPrice(idRow));
	row.children[0].children[2].children[1].children[1].children[1].children[0].children[1].children[0].addEventListener('change', compRowDiscontPrice(idRow));
	row.children[0].children[2].children[1].children[1].children[1].children[0].children[2].children[0].addEventListener('change', compRowDiscontPrice(idRow));
	row.children[0].children[2].children[1].children[1].children[1].children[0].children[3].children[0].addEventListener('change', compRowDiscontPrice(idRow));
	row.children[0].children[2].children[1].children[1].children[2].children[1].id = 'infoContentRow_' + idRow;
	row.children[0].children[2].children[1].children[1].children[3].id = 'dropdownCompContent_' + idRow;
	row.children[0].children[2].children[1].children[1].children[3].children[0].children[0].children[0].addEventListener('change', changeCompContent(idRow));
	row.children[0].children[2].children[1].children[1].children[3].children[0].children[1].children[0].addEventListener('change', changeCompContent(idRow));
	row.children[0].children[2].children[1].children[1].children[3].children[0].children[2].children[0].addEventListener('change', changeCompContent(idRow));
	row.children[0].children[2].children[1].children[1].children[3].children[0].children[3].children[0].addEventListener('change', changeCompContent(idRow));
	

	competitorMainRow.appendChild(row);
	//создание данных под строку
	generateCompetitorRowData();
	//запишем дефонлтные данные строки
	// setupSumParametrText(idRow);
	// cloneFixRow();	
	cloneCompetitorInfoRow(idRow);
	hideContentRow();
}
function competitorRefreshID(){
	var rows = document.getElementById('competitorMainRow');
	for(var z = 1; z < rows.children.length; z++){		
		var cloneRow = clearEventListener(rows.children[z]);
		var idRow = z;

		cloneRow.style.display = 'flex';
		cloneRow.id = 'competitorComponent_' + idRow;
		cloneRow.children[0].children[0].id = 'CompRowNumber_' + idRow;
		cloneRow.children[0].children[0].addEventListener('mouseenter', competitorShowDeleteButton('CompRowNumber_' + idRow));
		cloneRow.children[0].children[0].addEventListener('mouseleave', competitorHideDeleteButton('CompRowNumber_' + idRow));
		cloneRow.children[0].children[0].children[0].id = 'CompComponentNumber_' + idRow;
		cloneRow.children[0].children[0].children[0].textContent = idRow;
		cloneRow.children[0].children[0].children[1].id = 'CompDeleteButton_' + idRow;
		cloneRow.children[0].children[0].children[1].addEventListener('click', competitorRemoveRow('CompDeleteButton_' + idRow));

		//              rowOptionBlock 1
		cloneRow.children[0].children[1].children[0].id = 'CompInpurResultBlock_' +idRow;
		cloneRow.children[0].children[1].children[0].children[0].id = 'CompInpurResult_' + idRow;		
		cloneRow.children[0].children[1].children[0].children[1].children[0].id = 'CompControlButton_' + idRow;
		cloneRow.children[0].children[1].children[0].children[1].children[0].addEventListener('click', CompHideRow(idRow));
		cloneRow.children[0].children[1].children[1].children[0].children[0].id = 'CompInput_' + idRow;
		cloneRow.children[0].children[1].children[1].children[0].children[0].addEventListener('click', CompViewRow(idRow));
		cloneRow.children[0].children[1].children[1].children[0].children[1].addEventListener('click', addResultOptionCustom(idRow));
		cloneRow.children[0].children[1].children[2].id = 'CompDropdown_' + idRow;
		//              rowOptionBlock 2
		cloneRow.children[0].children[2].children[0].children[0].id = 'controlInput_' + idRow;
		cloneRow.children[0].children[2].children[0].children[0].addEventListener('click', changeParametrRowstyle(idRow));
		cloneRow.children[0].children[2].children[0].children[1].children[0].addEventListener('click', changeParametrRowstyle(idRow));
		cloneRow.children[0].children[2].children[0].children[1].children[0].addEventListener('click', CompRowTextForm(idRow));
		cloneRow.children[0].children[2].children[1].id = 'parametrRow_' + idRow;
		cloneRow.children[0].children[2].children[1].children[0].children[0].children[1].id = 'lotkiContentRow_' + idRow;
		cloneRow.children[0].children[2].children[1].children[0].children[1].id = 'dropdownCompLotki_' + idRow;
		cloneRow.children[0].children[2].children[1].children[0].children[2].children[1].id = 'seriaContentRow_' + idRow;
		cloneRow.children[0].children[2].children[1].children[0].children[3].id = 'dropdownCompSeria_' + idRow;
		cloneRow.children[0].children[2].children[1].children[0].children[4].children[1].id = 'modelContentRow_' + idRow;
		cloneRow.children[0].children[2].children[1].children[0].children[5].id = 'dropdownCompModel_' + idRow;
		cloneRow.children[0].children[2].children[1].children[1].children[0].children[1].id = 'priceContentRow_' + idRow;
		cloneRow.children[0].children[2].children[1].children[1].children[1].id = 'dropdownCompPrice_' + idRow;
		cloneRow.children[0].children[2].children[1].children[1].children[1].children[0].children[0].children[0].addEventListener('change', changeCompPrice(idRow));
		cloneRow.children[0].children[2].children[1].children[1].children[1].children[0].children[1].children[0].addEventListener('change', changeCompPrice(idRow));
		cloneRow.children[0].children[2].children[1].children[1].children[1].children[0].children[2].children[0].addEventListener('change', changeCompPrice(idRow));
		cloneRow.children[0].children[2].children[1].children[1].children[1].children[0].children[3].children[0].addEventListener('change', changeCompPrice(idRow));
		cloneRow.children[0].children[2].children[1].children[1].children[1].children[0].children[0].children[0].addEventListener('change', compRowDiscontPrice(idRow));
		cloneRow.children[0].children[2].children[1].children[1].children[1].children[0].children[1].children[0].addEventListener('change', compRowDiscontPrice(idRow));
		cloneRow.children[0].children[2].children[1].children[1].children[1].children[0].children[2].children[0].addEventListener('change', compRowDiscontPrice(idRow));
		cloneRow.children[0].children[2].children[1].children[1].children[1].children[0].children[3].children[0].addEventListener('change', compRowDiscontPrice(idRow));
		cloneRow.children[0].children[2].children[1].children[1].children[2].children[1].id = 'infoContentRow_' + idRow;
		cloneRow.children[0].children[2].children[1].children[1].children[3].id = 'dropdownCompContent_' + idRow;
		cloneRow.children[0].children[2].children[1].children[1].children[3].children[0].children[0].children[0].addEventListener('change', changeCompContent(idRow));
		cloneRow.children[0].children[2].children[1].children[1].children[3].children[0].children[1].children[0].addEventListener('change', changeCompContent(idRow));
		cloneRow.children[0].children[2].children[1].children[1].children[3].children[0].children[2].children[0].addEventListener('change', changeCompContent(idRow));
		cloneRow.children[0].children[2].children[1].children[1].children[3].children[0].children[3].children[0].addEventListener('change', changeCompContent(idRow));

		var CompInpurResult =  cloneRow.children[0].children[1].children[0].children[0];
		for(var i = 0; i < CompInpurResult.children.length; i++){
			CompInpurResult.children[i].addEventListener('click', removeCompInputResult(idRow));
			CompInpurResult.children[i].addEventListener("click", filterLotok(idRow));
			CompInpurResult.children[i].addEventListener("click", filterSeria(idRow));
			CompInpurResult.children[i].addEventListener("click", filterModel(idRow));
		}
		StartInputComp(idRow);
		cloneCompetitorInfoRow(idRow);
	}
	
}
//Вопросы
function cloneCompetitorInfoRow(idRow){	
	var modelBlock = document.getElementById('dropdownCompModel_' + idRow);
	var seriaBlock = document.getElementById('dropdownCompSeria_' + idRow);
	var lotkiBlock = document.getElementById('dropdownCompLotki_' + idRow);
	
	for(var i = lotkiBlock.children[0].children.length - 1; i > 0; i--){
		lotkiBlock.children[0].children[i].remove();
	}
	for(var i = modelBlock.children[0].children.length - 1; i > 0; i--){
		modelBlock.children[0].children[i].remove();
	}
	for(var i = seriaBlock.children[0].children.length - 1; i > 0; i--){
		seriaBlock.children[0].children[i].remove();
	}
	
	// CompRow.elements[idRow-1].model.modelName = "modelName";
	// CompRow.elements[idRow-1].model.series = "seria";
	// CompRow.elements[idRow-1].model.tray = 0;
	
	// CompRow.elements[idRow-1].price.middlePrice = 0;
	// CompRow.elements[idRow-1].price.customs = 0;
	// CompRow.elements[idRow-1].price.imported = 0;

	// CompRow.elements[idRow-1].info.middlePrice = 0;
	// CompRow.elements[idRow-1].info.customs = 0;
	// CompRow.elements[idRow-1].info.imported = 0;
	
	for(var i = 0; i < lotok.length; i++){
		var cloneLotok = lotkiBlock.children[0].children[0].cloneNode(true);
		cloneLotok.children[0].id = i;
		cloneLotok.children[0].value = lotok[i].trays;
		cloneLotok.style.display = '';
		cloneLotok.children[0].addEventListener('click', setupCompetitorMainElenetInBlock(cloneLotok.children[0])); 
		cloneLotok.children[0].addEventListener('click', saveDataRow(cloneLotok.children[0])); 
		cloneLotok.children[0].addEventListener('click', filterLotok(idRow)); 

		lotkiBlock.children[0].appendChild(cloneLotok);
	}
	for(var i = 0; i < seria.length; i++){
		var cloneSeria = seriaBlock.children[0].children[0].cloneNode(true);
		cloneSeria.children[0].id = i;
		cloneSeria.children[0].value = seria[i].series;
		cloneSeria.style.display = '';
		cloneSeria.children[0].addEventListener('click', setupCompetitorMainElenetInBlock(cloneSeria.children[0])); 
		cloneSeria.children[0].addEventListener('click', saveDataRow(cloneSeria.children[0]));
		cloneSeria.children[0].addEventListener('click', filterSeria(idRow));
		
		seriaBlock.children[0].appendChild(cloneSeria);
	}
	for(var i = 0; i < model.length; i++){		
		var cloneModel = modelBlock.children[0].children[0].cloneNode(true);
		cloneModel.children[0].id = model[i].id;
		cloneModel.children[0].value = model[i].name;
		cloneModel.style.display = '';
		cloneModel.children[0].addEventListener('click', setupCompetitorMainElenetInBlock(cloneModel.children[0])); 
		cloneModel.children[0].addEventListener('click', saveDataRow(cloneModel.children[0])); 
		cloneModel.children[0].addEventListener('click', filterModel(idRow)); 
		
		modelBlock.children[0].appendChild(cloneModel);		
	}
}

// установка основного компонента для эемента
function setupCompetitorMainElenetInBlock(inputOptions){
	return function e() {
		var targetBlock = inputOptions.parentNode.parentNode.children;
		if (inputOptions.style.backgroundColor != "") {
			for (var i = 1; i < targetBlock.length; i++) {
				targetBlock[i].style.display = "";
				inputOptions.style.backgroundColor = "";
			}
		}
		else {
			for (var i = 1; i < targetBlock.length; i++) {
				targetBlock[i].style.display = "none";
			}

			this.parentNode.style.display = "";
			inputOptions.style.backgroundColor = "#ffb23f";
		}
	}
}

function filterLotok(idRow, alert){
	return function e(){
		var compInpurResult = document.getElementById('CompInpurResult_' + idRow);
		var dropdownCompSeria = document.getElementById('dropdownCompSeria_' + idRow);
		var dropdownCompModel = document.getElementById('dropdownCompModel_' + idRow);
		
		//Определение наличия классификаторов
		for( var i = 0; i < compInpurResult.children.length; i++){
			switch(compInpurResult.children[i].id.split('_')[1]){
				case 'dillers':
					var idDiller = compInpurResult.children[i].id.split('_')[2];
					var idGroupList = dillers[idDiller].id_group;
					break;
				case 'manufacturer':
					var idManufacturer = compInpurResult.children[i].id.split('_')[2];
					break;
			}
		}
		
		if(CompRow.elements[idRow-1].model.modelName == "modelName"){
			//Отчистка
			for(var i = dropdownCompModel.children[0].children.length - 1; i > 0; i--){
				dropdownCompModel.children[0].children[i].remove();
			}
			//заполнение в соответствии с условиями.
			for(var i = 0; i < list_Model.length; i++){		
				var cloneModel = dropdownCompModel.children[0].children[0].cloneNode(true);
				var traysLogic = list_Model[i].trays == CompRow.elements[idRow-1].model.tray;
				var seriaLogic = list_Model[i].series == CompRow.elements[idRow-1].model.series;
				
				if(idDiller == null && idManufacturer == null && traysLogic && (CompRow.elements[idRow-1].model.series == 'seria' || seriaLogic)){
					createComplModelElement(cloneModel, list_Model[i].model, dropdownCompModel);
				}
				else if(list_Model[i].id_group == idManufacturer && traysLogic && (CompRow.elements[idRow-1].model.series == 'seria' || seriaLogic)){
					createComplModelElement(cloneModel, list_Model[i].model, dropdownCompModel);
				}
				else if(idDiller != null && idManufacturer != null && traysLogic && (CompRow.elements[idRow-1].model.series == 'seria' || seriaLogic)){
					continue;
				}
				else if(idGroupList == "all" && traysLogic && (CompRow.elements[idRow-1].model.series == 'seria' || seriaLogic)){
					createComplModelElement(cloneModel, list_Model[i].model, dropdownCompModel);
				}
				else if(idGroupList != null && idGroupList.split(",").length != 0 && traysLogic && (CompRow.elements[idRow-1].model.series == 'seria' || seriaLogic)){
					for(var z = 0; z < idGroupList.split(",").length; z++){
						if(list_Model[i].id_group == idGroupList.split(",")[z]){
							createComplModelElement(cloneModel, list_Model[i].model, dropdownCompModel);
						}
					}
				}
				//Когда лоток не выбран
				else if(CompRow.elements[idRow-1].model.tray == 0){
					if(idDiller == null && idManufacturer == null && (CompRow.elements[idRow-1].model.series == 'seria' || seriaLogic)){
						createComplModelElement(cloneModel, list_Model[i].model, dropdownCompModel);
					}
					else if(list_Model[i].id_group == idManufacturer && (CompRow.elements[idRow-1].model.series == 'seria' || seriaLogic)){
						createComplModelElement(cloneModel, list_Model[i].model, dropdownCompModel);
					}
					//Остановочка
					else if(idDiller != null && idManufacturer != null && (CompRow.elements[idRow-1].model.series == 'seria' || seriaLogic)){
						continue;
					}
					else if(idGroupList == "all" && (CompRow.elements[idRow-1].model.series == 'seria' || seriaLogic)){
						createComplModelElement(cloneModel, list_Model[i].model, dropdownCompModel);
					}
					else if(idGroupList != null && idGroupList.split(",").length != 0 && (CompRow.elements[idRow-1].model.series == 'seria' || seriaLogic)){
						for(var z = 0; z < idGroupList.split(",").length; z++){
							if(list_Model[i].id_group == idGroupList.split(",")[z]){
								createComplModelElement(cloneModel, list_Model[i].model, dropdownCompModel);
							}
						}
					}
				}
			}
		}
		else{
			if(alert != true){
				filterModel(idRow, true).call();
			}
		}
		if(CompRow.elements[idRow-1].model.series == "seria"){
			//Отчистка
			for(var i = dropdownCompSeria.children[0].children.length - 1; i > 0; i--){
				dropdownCompSeria.children[0].children[i].remove();
			}
			//заполнение в соответствии с условиями.
			for(var i = 0; i < list_Model.length; i++){		
				var cloneSeria = dropdownCompSeria.children[0].children[0].cloneNode(true);
				var traysLogic = list_Model[i].trays == CompRow.elements[idRow-1].model.tray;
				var modelLogic = list_Model[i].model == CompRow.elements[idRow-1].model.modelName;
				
				if(idDiller == null && idManufacturer == null && (CompRow.elements[idRow-1].model.modelName == 'modelName' || modelLogic)){
					createComplSeriaElement(cloneSeria, list_Model[i].series, dropdownCompSeria)
				}
				else if(list_Model[i].id_group == idManufacturer && traysLogic && (CompRow.elements[idRow-1].model.modelName == 'modelName' || modelLogic)){
					createComplSeriaElement(cloneSeria, list_Model[i].series, dropdownCompSeria);
				}
				else if(idDiller != null && idManufacturer != null && traysLogic && (CompRow.elements[idRow-1].model.modelName == 'modelName' || modelLogic)){
					continue;
				}
				else if(idGroupList == "all" && traysLogic && (CompRow.elements[idRow-1].model.modelName == 'modelName' || modelLogic)){
					createComplSeriaElement(cloneSeria,  list_Model[i].series, dropdownCompSeria);
				}
				else if(idGroupList != null && idGroupList.split(",").length != 0 && traysLogic && (CompRow.elements[idRow-1].model.modelName == 'modelName' || modelLogic)){
					for(var z = 0; z < idGroupList.split(",").length; z++){
						if(list_Model[i].id_group == idGroupList.split(",")[z]){
							createComplSeriaElement(cloneSeria, list_Model[i].series, dropdownCompSeria);
						}
					}
				}
				//Когда лоток не выбран
				else if(CompRow.elements[idRow-1].model.tray == 0){
					if(idDiller == null && idManufacturer == null && (CompRow.elements[idRow-1].model.modelName == 'modelName' || modelLogic)){
						createComplSeriaElement(cloneSeria, list_Model[i].series, dropdownCompSeria)
					}
					else if(list_Model[i].id_group == idManufacturer && (CompRow.elements[idRow-1].model.modelName == 'modelName' || modelLogic)){
						createComplSeriaElement(cloneSeria, list_Model[i].series, dropdownCompSeria);
					}
					else if(idDiller != null && idManufacturer != null && (CompRow.elements[idRow-1].model.modelName == 'modelName' || modelLogic)){
						continue;
					}
					else if(idGroupList == "all" && (CompRow.elements[idRow-1].model.modelName == 'modelName' || modelLogic)){
						createComplSeriaElement(cloneSeria,  list_Model[i].series, dropdownCompSeria);
					}
					else if(idGroupList != null && idGroupList.split(",").length != 0 && (CompRow.elements[idRow-1].model.modelName == 'modelName' || modelLogic)){
						for(var z = 0; z < idGroupList.split(",").length; z++){
							if(list_Model[i].id_group == idGroupList.split(",")[z]){
								createComplSeriaElement(cloneSeria, list_Model[i].series, dropdownCompSeria);
							}
						}
					}
				}
			}
		}
		else{
			if(alert != true){
				filterSeria(idRow, true).call();
			}
		}
		clearCompLotock(idRow);
	}
}
function filterSeria(idRow, alert){
	return function e(){
		var compInpurResult = document.getElementById('CompInpurResult_' + idRow);
		var dropdownCompLotki = document.getElementById('dropdownCompLotki_' + idRow);
		var dropdownCompModel = document.getElementById('dropdownCompModel_' + idRow);
		
		//Определение наличия классификаторов
		for( var i = 0; i < compInpurResult.children.length; i++){
			switch(compInpurResult.children[i].id.split('_')[1]){
				case 'dillers':
					var idDiller = compInpurResult.children[i].id.split('_')[2];
					var idGroupList = dillers[idDiller].id_group;
					break;
				case 'manufacturer':
					var idManufacturer = compInpurResult.children[i].id.split('_')[2];
					break;
			}
		}
		
		if(CompRow.elements[idRow-1].model.tray == 0){
			//Отчистка
			for(var i = dropdownCompLotki.children[0].children.length - 1; i > 0; i--){
				dropdownCompLotki.children[0].children[i].remove();
			}
			//заполнение в соответствии с условиями.
			for(var i = 0; i < list_Model.length; i++){		
				var cloneLotok = dropdownCompLotki.children[0].children[0].cloneNode(true);
				var seriaLogic = list_Model[i].series == CompRow.elements[idRow-1].model.series;
				var modelLogic = list_Model[i].model == CompRow.elements[idRow-1].model.modelName;
				
				if(idDiller == null && idManufacturer == null && seriaLogic && (CompRow.elements[idRow-1].model.modelName == 'modelName' || modelLogic)){
					createComplLotockElement(cloneLotok, list_Model[i].trays, dropdownCompLotki);
				}
				else if(list_Model[i].id_group == idManufacturer && seriaLogic && (CompRow.elements[idRow-1].model.modelName == 'modelName' || modelLogic)){
					createComplLotockElement(cloneLotok, list_Model[i].trays, dropdownCompLotki);
				}
				else if(idDiller != null && idManufacturer != null && seriaLogic && (CompRow.elements[idRow-1].model.modelName == 'modelName' || modelLogic)){
					continue;
				}
				else if(idGroupList == "all" && seriaLogic && (CompRow.elements[idRow-1].model.modelName == 'modelName' || modelLogic)){
					createComplLotockElement(cloneLotok, list_Model[i].trays, dropdownCompLotki);
				}
				else if(idGroupList != null && idGroupList.split(",").length != 0 && seriaLogic && (CompRow.elements[idRow-1].model.modelName == 'modelName' || modelLogic)){
					for(var z = 0; z < idGroupList.split(",").length; z++){
						if(list_Model.map((el) => el.id_group).indexOf(idGroupList[z]) != -1){
							createComplLotockElement(cloneLotok, list_Model[i].trays, dropdownCompLotki);
						}
					}
				}
				//Когда не выбранна серия
				else if(CompRow.elements[idRow-1].model.series == "seria"){
					if(idDiller == null && idManufacturer == null && (CompRow.elements[idRow-1].model.modelName == 'modelName' || modelLogic)){
						createComplLotockElement(cloneLotok, list_Model[i].trays, dropdownCompLotki);
					}
					else if(list_Model[i].id_group == idManufacturer && (CompRow.elements[idRow-1].model.modelName == 'modelName' || modelLogic)){
						createComplLotockElement(cloneLotok, list_Model[i].trays, dropdownCompLotki);
					}
					else if(idDiller != null && idManufacturer != null && (CompRow.elements[idRow-1].model.modelName == 'modelName' || modelLogic)){
						continue;
					}
					else if(idGroupList == "all" && (CompRow.elements[idRow-1].model.modelName == 'modelName' || modelLogic)){
						createComplLotockElement(cloneLotok, list_Model[i].trays, dropdownCompLotki);
					}
					else if(idGroupList != null && idGroupList.split(",").length != 0 && (CompRow.elements[idRow-1].model.modelName == 'modelName' || modelLogic)){
						for(var z = 0; z < idGroupList.split(",").length; z++){
							if(list_Model[i].id_group == idGroupList.split(",")[z]){
								createComplLotockElement(cloneLotok, list_Model[i].trays, dropdownCompLotki);
							}
						}
					}
				}
			}
		}
		else{
			if(alert != true){
				filterLotok(idRow, true).call();
			}
		}
		
		if(CompRow.elements[idRow-1].model.modelName == "modelName"){
			//Отчистка
			for(var i = dropdownCompModel.children[0].children.length - 1; i > 0; i--){
				dropdownCompModel.children[0].children[i].remove();
			}
			//заполнение в соответствии с условиями.
			for(var i = 0; i < list_Model.length; i++){		
				var cloneModel = dropdownCompModel.children[0].children[0].cloneNode(true);
				var seriaLogic = list_Model[i].series == CompRow.elements[idRow-1].model.series;
				var traysLogic = list_Model[i].trays == CompRow.elements[idRow-1].model.tray;
				
				if(idDiller == null && idManufacturer == null && seriaLogic && (CompRow.elements[idRow-1].model.tray == 0 || traysLogic)){
					createComplModelElement(cloneModel, list_Model[i].model, dropdownCompModel);
				}
				else if(list_Model[i].id_group == idManufacturer && seriaLogic && (CompRow.elements[idRow-1].model.tray == 0 || traysLogic)){
					createComplModelElement(cloneModel, list_Model[i].model, dropdownCompModel);
				}
				else if(idDiller != null && idManufacturer != null && seriaLogic && (CompRow.elements[idRow-1].model.tray == 0 || traysLogic)){
					continue;
				}
				else if(idGroupList == "all" && seriaLogic && (CompRow.elements[idRow-1].model.tray == 0 || traysLogic)){
					createComplModelElement(cloneModel, list_Model[i].model, dropdownCompModel);
				}
				else if(idGroupList != null && idGroupList.split(",").length != 0 && seriaLogic && (CompRow.elements[idRow-1].model.tray == 0 || traysLogic)){
					for(var z = 0; z < idGroupList.split(",").length; z++){
						if(list_Model[i].id_group == idGroupList.split(",")[z]){
							createComplModelElement(cloneModel, list_Model[i].model, dropdownCompModel);
						}
					}
				}
				//Когда не выбранна серия
				else if(CompRow.elements[idRow-1].model.series == "seria"){
					if(idDiller == null && idManufacturer == null && (CompRow.elements[idRow-1].model.tray == 0 || traysLogic)){
						createComplModelElement(cloneModel, list_Model[i].model, dropdownCompModel);
					}
					else if(list_Model[i].id_group == idManufacturer && (CompRow.elements[idRow-1].model.tray == 0 || traysLogic)){
						createComplModelElement(cloneModel, list_Model[i].model, dropdownCompModel);
					}
					else if(idDiller != null && idManufacturer != null && (CompRow.elements[idRow-1].model.tray == 0 || traysLogic)){
						continue;
					}
					else if(idGroupList == "all" && (CompRow.elements[idRow-1].model.tray == 0 || traysLogic)){
						createComplModelElement(cloneModel, list_Model[i].model, dropdownCompModel);
					}
					else if(idGroupList != null && idGroupList.split(",").length != 0 && (CompRow.elements[idRow-1].model.tray == 0 || traysLogic)){
						for(var z = 0; z < idGroupList.split(",").length; z++){
							if(list_Model[i].id_group == idGroupList.split(",")[z]){
								createComplModelElement(cloneModel, list_Model[i].model, dropdownCompModel);
							}
						}
					}
				}
			}
		}
		else{
			if(alert != true){
				filterModel(idRow, true).call();
			}
		}
		clearCompLotock(idRow);
	}
}
function filterModel(idRow, alert){
	return function e(){
		var compInpurResult = document.getElementById('CompInpurResult_' + idRow);
		var dropdownCompLotki = document.getElementById('dropdownCompLotki_' + idRow);
		var dropdownCompSeria = document.getElementById('dropdownCompSeria_' + idRow);
		
		//Определение наличия классификаторов
		for( var i = 0; i < compInpurResult.children.length; i++){
			switch(compInpurResult.children[i].id.split('_')[1]){
				case 'dillers':
					var idDiller = compInpurResult.children[i].id.split('_')[2];
					var idGroupList = dillers[idDiller].id_group;
					break;
				case 'manufacturer':
					var idManufacturer = compInpurResult.children[i].id.split('_')[2];
					break;
			}
		}
		
		if(CompRow.elements[idRow-1].model.tray == 0){
			//Отчистка
			for(var i = dropdownCompLotki.children[0].children.length - 1; i > 0; i--){
				dropdownCompLotki.children[0].children[i].remove();
			}
			//заполнение в соответствии с условиями.
			for(var i = 0; i < list_Model.length; i++){		
				var cloneLotok = dropdownCompLotki.children[0].children[0].cloneNode(true);
				var modelLogic = list_Model[i].model == CompRow.elements[idRow-1].model.modelName;
				var seriaLogic = list_Model[i].series == CompRow.elements[idRow-1].model.series;
				
				if(idDiller == null && idManufacturer == null && modelLogic && (CompRow.elements[idRow-1].model.series == 'seria' || seriaLogic)){
					createComplLotockElement(cloneLotok, list_Model[i].trays, dropdownCompLotki);
				}
				else if(list_Model[i].id_group == idManufacturer && modelLogic && (CompRow.elements[idRow-1].model.series == 'seria' || seriaLogic)){
					createComplLotockElement(cloneLotok, list_Model[i].trays, dropdownCompLotki);
				}
				else if(idDiller != null && idManufacturer != null && modelLogic && (CompRow.elements[idRow-1].model.series == 'seria' || seriaLogic)){
					continue;
				}
				else if(idGroupList == "all" && modelLogic && (CompRow.elements[idRow-1].model.series == 'seria' || seriaLogic)){
					createComplLotockElement(cloneLotok, list_Model[i].trays, dropdownCompLotki);
				}
				else if(idGroupList != null && idGroupList.split(",").length != 0 && modelLogic && (CompRow.elements[idRow-1].model.series == 'seria' || seriaLogic)){
					for(var z = 0; z < idGroupList.split(",").length; z++){
						if(list_Model[i].id_group == idGroupList.split(",")[z]){
							createComplLotockElement(cloneLotok, list_Model[i].trays, dropdownCompLotki);
						}
					}
				}
				//Когда не выбрана модель
				else if(CompRow.elements[idRow-1].model.modelName == "modelName"){
					if(idDiller == null && idManufacturer == null && (CompRow.elements[idRow-1].model.series == 'seria' || seriaLogic)){
						createComplLotockElement(cloneLotok, list_Model[i].trays, dropdownCompLotki);
					}
					else if(list_Model[i].id_group == idManufacturer && (CompRow.elements[idRow-1].model.series == 'seria' || seriaLogic)){
						createComplLotockElement(cloneLotok, list_Model[i].trays, dropdownCompLotki);
					}
					else if(idDiller != null && idManufacturer != null && (CompRow.elements[idRow-1].model.series == 'seria' || seriaLogic)){
						continue;
					}
					else if(idGroupList == "all" && (CompRow.elements[idRow-1].model.series == 'seria' || seriaLogic)){
						createComplLotockElement(cloneLotok, list_Model[i].trays, dropdownCompLotki);
					}
					else if(idGroupList != null && idGroupList.split(",").length != 0 && (CompRow.elements[idRow-1].model.series == 'seria' || seriaLogic)){
						for(var z = 0; z < idGroupList.split(",").length; z++){
							if(list_Model[i].id_group == idGroupList.split(",")[z]){
								createComplLotockElement(cloneLotok, list_Model[i].trays, dropdownCompLotki);
							}
						}
					}
				}
			}
		}
		else{
			if(alert != true){
				filterLotok(idRow, true).call();
			}
		}
		
		if(CompRow.elements[idRow-1].model.series == "seria"){
			//Отчистка
			for(var i = dropdownCompSeria.children[0].children.length - 1; i > 0; i--){
				dropdownCompSeria.children[0].children[i].remove();
			}
			//заполнение в соответствии с условиями.
			for(var i = 0; i < list_Model.length; i++){		
				var cloneSeria = dropdownCompSeria.children[0].children[0].cloneNode(true);
				var modelLogic = list_Model[i].model == CompRow.elements[idRow-1].model.modelName;
				var traysLogic = list_Model[i].trays == CompRow.elements[idRow-1].model.tray;
				
				if(idDiller == null && idManufacturer == null && modelLogic && (CompRow.elements[idRow-1].model.tray == 0 || traysLogic)){
					createComplSeriaElement(cloneSeria, list_Model[i].series, dropdownCompSeria)
				}
				else if(list_Model[i].id_group == idManufacturer && modelLogic && (CompRow.elements[idRow-1].model.tray == 0 || traysLogic)){
					createComplSeriaElement(cloneSeria, list_Model[i].series, dropdownCompSeria);
				}
				else if(idDiller != null && idManufacturer != null && modelLogic && (CompRow.elements[idRow-1].model.tray == 0 || traysLogic)){
					continue;
				}
				else if(idGroupList == "all" && modelLogic && (CompRow.elements[idRow-1].model.tray == 0 || traysLogic)){
					createComplSeriaElement(cloneSeria,  list_Model[i].series, dropdownCompSeria);
				}
				else if(idGroupList != null && idGroupList.split(",").length != 0 && modelLogic && (CompRow.elements[idRow-1].model.tray == 0 || traysLogic)){
					for(var z = 0; z < idGroupList.split(",").length; z++){
						if(list_Model[i].id_group == idGroupList.split(",")[z]){
							createComplSeriaElement(cloneSeria, list_Model[i].series, dropdownCompSeria);
						}
					}
				}
				//Когда не выбрана модель
				else if(CompRow.elements[idRow-1].model.modelName == "modelName"){
					if(idDiller == null && idManufacturer == null && (CompRow.elements[idRow-1].model.tray == 0 || traysLogic)){
						createComplSeriaElement(cloneSeria, list_Model[i].series, dropdownCompSeria)
					}
					else if(list_Model[i].id_group == idManufacturer && (CompRow.elements[idRow-1].model.tray == 0 || traysLogic)){
						createComplSeriaElement(cloneSeria, list_Model[i].series, dropdownCompSeria);
					}
					else if(idDiller != null && idManufacturer != null && (CompRow.elements[idRow-1].model.tray == 0 || traysLogic)){
						continue;
					}
					else if(idGroupList == "all" && (CompRow.elements[idRow-1].model.tray == 0 || traysLogic)){
						createComplSeriaElement(cloneSeria,  list_Model[i].series, dropdownCompSeria);
					}
					else if(idGroupList != null && idGroupList.split(",").length != 0 && (CompRow.elements[idRow-1].model.tray == 0 || traysLogic)){
						for(var z = 0; z < idGroupList.split(",").length; z++){
							if(list_Model[i].id_group == idGroupList.split(",")[z]){
								createComplSeriaElement(cloneSeria, list_Model[i].series, dropdownCompSeria);
							}
						}
					}
				}
			}
		}
		else{
			if(alert != true){
				filterSeria(idRow, true).call();
			}
		}
		clearCompLotock(idRow);
		filldropdownCompContent(idRow);
	}
}

//Создание объектов для выбора
function createComplModelElement(cloneModel, modelName, dropdownCompModel){
	if(modelName != "-"){
		cloneModel.children[0].value = modelName;
		cloneModel.style.display = '';
		cloneModel.children[0].addEventListener('click', setupCompetitorMainElenetInBlock(cloneModel.children[0])); 
		cloneModel.children[0].addEventListener('click', saveDataRow(cloneModel.children[0])); 
		
		dropdownCompModel.children[0].appendChild(cloneModel);
		cloneModel.children[0].addEventListener('click', filterModel(cloneModel.parentNode.parentNode.id.split("_")[1]));
	}
}
function createComplSeriaElement(cloneSeria, seriaName, dropdownCompSeria){
	if(seriaName != "-" && dropdownCompSeria.children[0].lastElementChild.children[0].value != seriaName){
		cloneSeria.children[0].value = seriaName;
		cloneSeria.style.display = '';
		cloneSeria.children[0].addEventListener('click', setupCompetitorMainElenetInBlock(cloneSeria.children[0])); 
		cloneSeria.children[0].addEventListener('click', saveDataRow(cloneSeria.children[0])); 
		
		dropdownCompSeria.children[0].appendChild(cloneSeria);
		cloneSeria.children[0].addEventListener('click', filterSeria(cloneSeria.parentNode.parentNode.id.split("_")[1]));
	}
}
function createComplLotockElement(cloneLotok, trays, dropdownCompLotki){
	cloneLotok.children[0].value = trays;
	cloneLotok.style.display = '';
	cloneLotok.children[0].addEventListener('click', setupCompetitorMainElenetInBlock(cloneLotok.children[0]));
	cloneLotok.children[0].addEventListener('click', saveDataRow(cloneLotok.children[0]));
	
	dropdownCompLotki.children[0].appendChild(cloneLotok);
	cloneLotok.children[0].addEventListener('click', filterLotok(cloneLotok.parentNode.parentNode.id.split("_")[1]));
}

function clearCompLotock(idRow){
	var original = [];	
	var dropdownCompLotki = document.getElementById('dropdownCompLotki_' + idRow);
	
	for(var i = dropdownCompLotki.children[0].getElementsByClassName("inputOption").length-1; i > 0 ; i--){
		var thisText = dropdownCompLotki.children[0].getElementsByClassName("inputOption")[i].value;
		if(original.indexOf(thisText) == -1){
			original.push(thisText);
		}
		else{
			dropdownCompLotki.children[0].getElementsByClassName("inputOption")[i].parentNode.remove();
		}
	}
	
	original.sort((a, b) => parseFloat(a) - parseFloat(b));
	for(var i = 1; i < dropdownCompLotki.children[0].getElementsByClassName("inputOption").length; i++){
		dropdownCompLotki.children[0].getElementsByClassName("inputOption")[i].value = original[i-1];
	}
}

function saveDataRow(inputOptions){
	return function e(){
		var main = inputOptions.parentNode.parentNode.parentNode.id.split('_')[0];
		var idRow = inputOptions.parentNode.parentNode.parentNode.id.split('_')[1];
		var variant = inputOptions.value;
		switch(main){
			case'dropdownCompLotki':
				if(inputOptions.style.backgroundColor != ""){
					CompRow.elements[idRow-1].model.tray = variant;
				}
				else{
					CompRow.elements[idRow-1].model.tray = 0;
				}				
				break;
			case'dropdownCompSeria':
				if(inputOptions.style.backgroundColor != ""){
					CompRow.elements[idRow-1].model.series = variant;
				}
				else{
					CompRow.elements[idRow-1].model.series = "seria";
				}
				break;
			case'dropdownCompModel':
				if(inputOptions.style.backgroundColor != ""){
					CompRow.elements[idRow-1].model.modelName = variant;
				}
				else{
					CompRow.elements[idRow-1].model.modelName = 'modelName';
				}
				break;
		}	
	}
}

function filldropdownCompContent(idRow){
	var dropdownCompContent = document.getElementById('dropdownCompContent_' + idRow);	
	for(var i = 0; i < CompRow.elements.length; i++){
		if(CompRow.elements[i].model.modelName != 'modelName'){
			for(var k = 0; k < list_Model.length; k++){
				if(list_Model[k].model == CompRow.elements[i].model.modelName){
					CompRow.elements[i].info.middlePrice = list_Model[k].priceNoneNDS != '-' ? list_Model[k].priceNoneNDS.replace(',', '.') : 0;
					CompRow.elements[i].info.customs = list_Model[k].customs != '-' ? list_Model[k].customs.replace(',', '.') : 0;
					CompRow.elements[i].info.imported = list_Model[k].imported != '-' ? list_Model[k].imported.replace(',', '.') : 0;
				}
			}				
		}
	}		
	dropdownCompContent.children[0].children[0].children[0].value = parseFloat(CompRow.elements[idRow-1].info.middlePrice).toFixed(3);
	dropdownCompContent.children[0].children[1].children[0].value = parseFloat(CompRow.elements[idRow-1].info.customs).toFixed(3);
	dropdownCompContent.children[0].children[3].children[0].value = parseFloat(CompRow.elements[idRow-1].info.imported).toFixed(3);
}

function changeCompContent(idRow){
	return function e(){
		var dropdownCompContent = document.getElementById('dropdownCompContent_' + idRow);
		CompRow.elements[idRow-1].info.middlePrice = dropdownCompContent.children[0].children[0].children[0].value;
		CompRow.elements[idRow-1].info.customs = dropdownCompContent.children[0].children[1].children[0].value;
		CompRow.elements[idRow-1].info.minimalPrice = dropdownCompContent.children[0].children[2].children[0].value;
		CompRow.elements[idRow-1].info.imported = dropdownCompContent.children[0].children[3].children[0].value;
		dropdownCompContent.children[0].children[0].children[0].value = Number(dropdownCompContent.children[0].children[0].children[0].value).toFixed(3);
		dropdownCompContent.children[0].children[1].children[0].value = Number(dropdownCompContent.children[0].children[1].children[0].value).toFixed(3);
		dropdownCompContent.children[0].children[2].children[0].value = Number(dropdownCompContent.children[0].children[2].children[0].value).toFixed(3);
		dropdownCompContent.children[0].children[3].children[0].value = Number(dropdownCompContent.children[0].children[3].children[0].value).toFixed(3);
	}
}
function changeCompPrice(idRow){
	return function e(){
		var dropdownCompPrice = document.getElementById('dropdownCompPrice_' + idRow);
		CompRow.elements[idRow-1].price.priceDiscount = dropdownCompPrice.children[0].children[0].children[0].value;
		CompRow.elements[idRow-1].price.discount = dropdownCompPrice.children[0].children[1].children[0].value;
		CompRow.elements[idRow-1].price.price = dropdownCompPrice.children[0].children[2].children[0].value;
		CompRow.elements[idRow-1].price.NDS = dropdownCompPrice.children[0].children[3].children[0].value;
		dropdownCompPrice.children[0].children[0].children[0].value = Number(dropdownCompPrice.children[0].children[0].children[0].value).toFixed(3);
		dropdownCompPrice.children[0].children[1].children[0].value = Number(dropdownCompPrice.children[0].children[1].children[0].value).toFixed(3);
		dropdownCompPrice.children[0].children[2].children[0].value = Number(dropdownCompPrice.children[0].children[2].children[0].value).toFixed(3);
		dropdownCompPrice.children[0].children[3].children[0].value = Number(dropdownCompPrice.children[0].children[3].children[0].value).toFixed(3);
	}	
}

function CompRowTextForm(idRow){
	return function e(){
		var  inpRow = document.getElementById('controlInput_' + idRow);
		var dropdownCompPrice = document.getElementById('dropdownCompPrice_' + idRow);
		var text = '';
		text = CompRow.elements[idRow-1].model.series + ' ' + CompRow.elements[idRow-1].model.modelName + ' ' + CompRow.elements[idRow-1].model.tray;
		if(CompRow.elements[idRow-1].model.tray == 1){
			text +=  + ' лоток ' + ' - цена ' + CompRow.elements[idRow-1].price.priceDiscount;
		}
		else if(CompRow.elements[idRow-1].model.tray > 1 && CompRow.elements[idRow-1].model.tray < 5){
			text += ' лотка ' + ' - цена ' + CompRow.elements[idRow-1].price.priceDiscount;
		}
		else if(CompRow.elements[idRow-1].model.tray > 4){
			text += ' лотков ' + ' - цена ' + CompRow.elements[idRow-1].price.priceDiscount;
		}
		inpRow.children[0].textContent = text + " тысяч рублей";
	}	
}

function compRowDiscontPrice(idRow){
	return function e(){
		var dropdownCompPrice = document.getElementById('dropdownCompPrice_' + idRow);
		var discountPrice = dropdownCompPrice.children[0].children[0].children[0];
		var discount = dropdownCompPrice.children[0].children[1].children[0];
		var price = dropdownCompPrice.children[0].children[2].children[0];
		var NDS = dropdownCompPrice.children[0].children[3].children[0];
		// % от первоначальной стоимости.
		var percentDiscountPrice = 100 - Number(discount.value);
		// находим первоначаьную цену
		price.value = ((Number(discountPrice.value) * 100)/percentDiscountPrice).toFixed(3);
		NDS.value = (Number(price.value) * 0.2).toFixed(3);
	}
}

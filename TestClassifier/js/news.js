function startApp(){
	var clsInput_test = document.getElementById('clsInput_test_0_1');
	var controlButtonIdHide = document.getElementById('controlButtonIdHide_0_1');
	var clsDropdown = document.getElementById('clsDropdown_0_1');
	var idRow = 0;
	var pageID = 1;
	clsInput_test.addEventListener('focus', ShowDropdownClone(idRow, pageID));
	controlButtonIdHide.addEventListener('click', HideDropdownClone());
	for(var i = 0; i < clsDropdown.children[0].children.length; i++){
		clsDropdown.children[0].children[i].children[0].addEventListener("click", function(){addResultOptionClone(this.id, idRow, pageID)});
	}
}
function HideDropdownClone(){
	return function e(){
		var button = document.getElementById('addOption_0_1');
		var dropdown = document.getElementById('clsDropdown_0_1');	
		var clsInput_testRow = document.getElementById('clsInputResultBlock_0_1');
		var classifierInpurResultElement = document.getElementById('classifierInpurResult_0_1');
		dropdown.style.display = "none";	
		resultTextView(clsInput_testRow, classifierInpurResultElement);
		classifierInpurResultElement.style.display="none";
		button.style.display="none";
	}
}
function resultTextView(clsInput_testRow, classifierInpurResultElement){
	clsInput_testRow.value = "";
	for(var i = 0; i < classifierInpurResultElement.children.length; i++){
		clsInput_testRow.value = clsInput_testRow.value != "" ? clsInput_testRow.value + " " + classifierInpurResultElement.children[i].textContent : classifierInpurResultElement.children[i].textContent;
	}
}
function ShowDropdownClone(idRow, pageID){
	return function e(){
		var dropdown = document.getElementById('clsDropdown_' + idRow + '_' + pageID);
		var clsInput_test = document.getElementById('clsInput_test_' + idRow + '_' + pageID);
		var otherCheckbox = document.getElementById('addOption_' + idRow + '_' + pageID);
		var classifierInpurResult = document.getElementById('classifierInpurResult_' + idRow + '_' + pageID);
		var clsInputResultBlock = document.getElementById('clsInputResultBlock_' + idRow + '_' + pageID);

		dropdown.style.display="flex";
		clsInput_test.value = ""
		classifierInpurResult.style.display="flex";
		clsInputResultBlock.style.display="flex";
		otherCheckbox.style.display="flex";

		StartInputClone(idRow, pageID);
	}
}
function StartInputClone(idRow, pageID){
	// var inputBlock = document.getElementById("clsInput_test_" + idRow + '_' + pageID);
	var clsDropdown = document.getElementById("clsDropdown_" + idRow + '_' + pageID);
	// DoropdownOptionClearClone(idRow, pageID);
	// if(inputBlock.value.length == 0){
	// 	DropdownOptionDefaultClone(idRow, pageID);
	// }
	// else{
	// 	DropdownSearchClone(idRow, pageID);
	// }	
	clsDropdown.style.display="flex";
}

function addResultOptionClone(elenentid, idRow, pageID){
	var elementid = document.getElementById(elenentid);
	var classifierInpurResultRow = document.getElementById('classifierInpurResult_' + idRow + '_' + pageID);
	var option = elementid;
	var object = document.createElement("div");
	object.classList.add("wordElement");
	object.id = "result_" + option.id;
	object.textContent = option.value;
	object.addEventListener("click", function(){
		var ID = object.id.split('_')[3];
		document.getElementById('clsOption_0_' + ID).style.display = 'block';
		this.remove();
		
	});
	classifierInpurResultRow.appendChild(object);
	elementid.style.display = 'none';
	document.getElementById("clsInput_test_" + idRow + '_' + pageID).focus();
	document.getElementById("clsInput_test_" + idRow + '_' + pageID).value="";
}

function sortResultBlockClone(idRow, pageID){//&&
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







// Пока не нужно
// function DoropdownOptionClearClone(idRow, pageID){
// 	var clsDropdown = document.getElementById("clsDropdown_" + idRow + '_' + pageID);
// 	var dropdownOptions = clsDropdown.children[0];
// 	//Стартовая отчиска от лишних элементов
// 	for(var i = dropdownOptions.children.length - 1; i > 0; i--){
// 		dropdownOptions.children[i].remove();
// 	}
// }
function DropdownOptionDefaultClone(idRow, pageID){//&&
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
function DropdownSearchClone(idRow, pageID){//&&
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


function checkResultOption(list, listElement){
	var index = list.indexOf(listElement);
	if(index > -1)
		list.splice(index, 1);
	
	return list;
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
function removeProductInfoClone(idRow, pageID){//+
	var inputBlock = document.getElementById('clsInput_test_' + idRow + '_' + pageID);
	var main = inputBlock.parentNode.parentNode.parentNode;
	var infoTitle = main.children[2].children[1].id;
	var infoBlock = main.children[2].children[2].id;
	document.getElementById(infoTitle).style.display = "none";
	for(var i = document.getElementById(infoBlock).children.length - 1; i > 0; i--){
		document.getElementById(infoBlock).children[i].remove();
	}
}
function addProductInfoClone(product_id, idRow, pageID){//+
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
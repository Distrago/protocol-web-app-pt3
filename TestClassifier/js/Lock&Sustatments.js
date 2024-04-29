var Sustatment = {
	"ColumnState": ["active","lock","lock"],
	"DefaultUnit": "percent"
}
var requirementsTable = {
	"mainFractionData":{
		"purity": 0.00,
		"mass": 1.000,
		"percent_exit": 100.00
	},
	"suitableFraction":{
		"purity": 0.00,
		"mass": 1.000,
		"percent_exit": 100.00
	},
	"weedFraction":{
		"purity": 0.00,
		"mass": 0.000,
		"percent_exit": 0.00
	}	
	/*
	//Пригодиться для большего числа фракций
	"otherFraction": [],
	*/
}
var componentRow = [];

function setupComponentRow(){
	pageRow[currentPage-1].componentRow.push({
		"component_name": "component_name",
		"mainFractionData":{
			"calcToggle": true,
			"impToggle": false,
			"acceptRejectToggle": pageRow[currentPage-1].componentRow.length == 0 ? true : false,
			"selectUnitOption": null,
			"unitOption":{
				"percent": pageRow[currentPage-1].componentRow.length == 0 ? 100.0 : 0.00,
				"gram": 0.0,
				"pieces": 0.0,
				"pieces_kg": 0.0,
				"ppm": 0.0
			},
			"hingeMass": pageRow[currentPage-1].componentRow[0] != null ? pageRow[currentPage-1].componentRow[0].mainFractionData.hingeMass : 100.00,
			"pieces_1000": 100.00
		},
		"suitableFractionData":{
			"calcToggle": true,
			"impToggle": false,
			"acceptRejectToggle": true,
			"selectUnitOption": null,
			"unitOption":{
				"percent": pageRow[currentPage-1].componentRow.length == 0 ? true : false,
				"gram": 0.0,
				"pieces": 0.0,
				"pieces_kg": 0.0,
				"ppm": 0.0
				//"iterfraction_percent": 0.0
			},
			"hingeMass": pageRow[currentPage-1].componentRow[0] != null ? pageRow[currentPage-1].componentRow[0].suitableFractionData.hingeMass : 100.00,
			"pieces_1000": 100.000
		},
		"weedFractionData":{
			"calcToggle": true,
			"impToggle": false,
			"acceptRejectToggle": pageRow[currentPage-1].componentRow.length == 0 ? true : false,
			"selectUnitOption": null,
			"unitOption":{
				"percent": pageRow[currentPage-1].componentRow.length == 1 ? 100.0 : 0.00,
				"gram": 0.0,
				"pieces": 0.0,
				"pieces_kg": 0.0,
				"ppm": 0.0
				//"iterfraction_percent": 0.0
			},
			"hingeMass": pageRow[currentPage-1].componentRow[0] != null ? pageRow[currentPage-1].componentRow[0].weedFractionData.hingeMass : 100.00,
			"pieces_1000": 100.00
		}		
	});
}

//функции компонентов
function setupComponentName(){
	var idRow = this.id.split("_")[1];
	var mainRow = "mainRow_" + idRow;
	var inputFilter = document.getElementById(mainRow).getElementsByClassName("inputFilter")[0]
	
	pageRow[currentPage-1].componentRow[idRow-1].component_name = inputFilter.value != "" ? inputFilter.value : inputFilter.placeholder;
}
function setupComponentToggles(toggle){
	var idRow = toggle.parentNode.parentNode.parentNode.id.split("_")[2];
	var idFraction = toggle.parentNode.parentNode.parentNode.id.split("_")[1];
	var imgName = toggle.style.backgroundImage.split('/')[5].split('.')[0];
	
	var massInput = document.getElementById("massInput_"+idFraction+"_"+idRow+"_"+currentPage);
	var massInputBlock = document.getElementById("massInputBlock_"+idFraction+"_"+idRow+"_"+currentPage);
	var duplicateMassInput = massInputBlock.children[0].children[0];
	
	//Определение фракции
	switch(idFraction){
		case "1":
			var fractionData = pageRow[currentPage-1].componentRow[idRow-1].mainFractionData;
			break;
		case "2":
			var fractionData = pageRow[currentPage-1].componentRow[idRow-1].suitableFractionData;
			break;
		case "3":
			var fractionData = pageRow[currentPage-1].componentRow[idRow-1].weedFractionData;
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
	requirementsPurityUpdate();
}
//Функции компоментов фракций
function mathfComponentFunction(element_id){
	var element = document.getElementById(element_id);
	var sliderBlock = element.children[0];
	var hingeMassBlock = element.children[2];
	var piecesBlock = element.children[4];
	
	var idRow = element.id.split("_")[2];
	var idFraction = element.id.split("_")[1];
	
	//Определение фракции
	switch(idFraction){
		case "1":
			var fractionData = pageRow[currentPage-1].componentRow[idRow-1].mainFractionData;
			break;
		case "2":
			var fractionData = pageRow[currentPage-1].componentRow[idRow-1].suitableFractionData;
			break;
		case "3":
			var fractionData = pageRow[currentPage-1].componentRow[idRow-1].weedFractionData;
			break;
	}
	
	hingeMassBlock.children[0].children[0].value = fractionData.hingeMass;
	
	sliderBlock.children[0].children[0].addEventListener("change", componentPercentUpdate(idFraction));
	sliderBlock.children[1].children[0].addEventListener("change", componentGramUpdate(idFraction));
	sliderBlock.children[2].children[0].addEventListener("change", componentPiecesUpdate(idFraction));
	sliderBlock.children[3].children[0].addEventListener("change", componentPiecesKgUpdate(idFraction));
	sliderBlock.children[4].children[0].addEventListener("change", componentPPM_Update(idFraction));
	
	hingeMassBlock.children[0].children[0].addEventListener("change", componentPercentUpdate(idFraction));
	piecesBlock.children[0].children[0].addEventListener("change", componentPercentUpdate(idFraction));
	
	hingeMassBlock.children[0].children[0].addEventListener("change", updateHingeMass(idFraction));
	piecesBlock.children[0].children[0].addEventListener("change", updatePieces_1000(idRow));
	
	sliderBlock.children[0].children[0].addEventListener("change", updateRemovedPercent);
	sliderBlock.children[1].children[0].addEventListener("change", updateRemovedPercent);
	sliderBlock.children[2].children[0].addEventListener("change", updateRemovedPercent);
	sliderBlock.children[3].children[0].addEventListener("change", updateRemovedPercent);
	sliderBlock.children[4].children[0].addEventListener("change", updateRemovedPercent);
	
	hingeMassBlock.children[0].children[0].addEventListener("change", updateRemovedPercent);
	piecesBlock.children[0].children[0].addEventListener("change", updateRemovedPercent);
}
function sumComponentPercent(idFraction){
	var sumComponent = 0;
	for(var i = 0; i < pageRow[currentPage-1].componentRow.length; i++){
		switch(idFraction){
			case "1":
				sumComponent += Number(pageRow[currentPage-1].componentRow[i].mainFractionData.unitOption.percent);
				break;
			case "2":
				sumComponent += Number(pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.percent);
				break;
			case "3":
				sumComponent += Number(pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent);
				break;
		}
	}
	return sumComponent;
}
function sumComponentPieces_KG(idFraction){
	var sumComponent = 0;
	for(var i = 0; i < pageRow[currentPage-1].componentRow.length; i++){
		switch(idFraction){
			case "1":
				sumComponent += Number(pageRow[currentPage-1].componentRow[i].mainFractionData.unitOption.pieces_kg);
				break;
			case "2":
				sumComponent += Number(pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.pieces_kg);
				break;
			case "3":
				sumComponent += Number(pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.pieces_kg);
				break;
		}
	}
	return sumComponent;
}

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
		var ppm = MainScrollBlock.children[4].children[0];
		
		var idRow = DropdownBlock.id.split("_")[2];
		
		switch(idFraction){
			case "1":
				var firstElement = pageRow[currentPage-1].componentRow[0].mainFractionData.unitOption;
				var targetElement = pageRow[currentPage-1].componentRow[idRow-1].mainFractionData.unitOption;
				var lastElement = pageRow[currentPage-1].componentRow[pageRow[currentPage-1].componentRow.length-1].mainFractionData.unitOption;
				break;
			case "2":
				var firstElement = pageRow[currentPage-1].componentRow[0].suitableFractionData.unitOption;
				var targetElement = pageRow[currentPage-1].componentRow[idRow-1].suitableFractionData.unitOption;
				var lastElement = pageRow[currentPage-1].componentRow[pageRow[currentPage-1].componentRow.length-1].suitableFractionData.unitOption;
				break;
			case "3":
				var firstElement = pageRow[currentPage-1].componentRow[0].weedFractionData.unitOption;
				var targetElement = pageRow[currentPage-1].componentRow[idRow-1].weedFractionData.unitOption;
				var lastElement = pageRow[currentPage-1].componentRow[pageRow[currentPage-1].componentRow.length-1].weedFractionData.unitOption;
				break;
		}
		
		//Основное значение
		if(idRow == 1){
			targetElement.percent = percent.value <= Number(targetElement.percent) + Number(lastElement.percent) ? Number(percent.value).toFixed(2) : Number(Number(targetElement.percent) + Number(lastElement.percent)).toFixed(2)
			lastElement.percent = lastElement.percent - (sumComponentPercent(idFraction) - 100);
		}
		else{
			targetElement.percent = percent.value <= Number(firstElement.percent) + Number(targetElement.percent) ? Number(percent.value).toFixed(2) : Number(Number(firstElement.percent) + Number(targetElement.percent)).toFixed(2)
			firstElement.percent = firstElement.percent - (sumComponentPercent(idFraction) - 100);
		}
		
		for(var i = 1; i <= pageRow[currentPage-1].componentRow.length; i++){
			var DropdownBlock = document.getElementById("massDropdown_"+idFraction+"_"+i+"_"+currentPage);
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
					percent.value = Number(pageRow[currentPage-1].componentRow[i-1].mainFractionData.unitOption.percent).toFixed(2);
					break;
				case "2":
					percent.value =  Number(pageRow[currentPage-1].componentRow[i-1].suitableFractionData.unitOption.percent).toFixed(2);
					break;
				case "3":
					percent.value =  Number(pageRow[currentPage-1].componentRow[i-1].weedFractionData.unitOption.percent).toFixed(2);
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
					pageRow[currentPage-1].componentRow[i-1].mainFractionData.unitOption.percent = percent.value;
					pageRow[currentPage-1].componentRow[i-1].mainFractionData.unitOption.gram = gram.value;
					pageRow[currentPage-1].componentRow[i-1].mainFractionData.unitOption.pieces = pieces.value;
					pageRow[currentPage-1].componentRow[i-1].mainFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageRow[currentPage-1].componentRow[i-1].mainFractionData.hingeMass = HingeMass.value;
					pageRow[currentPage-1].componentRow[i-1].mainFractionData.pieces_1000 = Pieces_1000.value;
					break;
				case "2":
					pageRow[currentPage-1].componentRow[i-1].suitableFractionData.unitOption.percent = percent.value;
					pageRow[currentPage-1].componentRow[i-1].suitableFractionData.unitOption.gram = gram.value;
					pageRow[currentPage-1].componentRow[i-1].suitableFractionData.unitOption.pieces = pieces.value;
					pageRow[currentPage-1].componentRow[i-1].suitableFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageRow[currentPage-1].componentRow[i-1].suitableFractionData.hingeMass = HingeMass.value;
					pageRow[currentPage-1].componentRow[i-1].suitableFractionData.pieces_1000 = Pieces_1000.value;
					break;
				case "3":
					pageRow[currentPage-1].componentRow[i-1].weedFractionData.unitOption.percent = percent.value;
					pageRow[currentPage-1].componentRow[i-1].weedFractionData.unitOption.gram = gram.value;
					pageRow[currentPage-1].componentRow[i-1].weedFractionData.unitOption.pieces = pieces.value;
					pageRow[currentPage-1].componentRow[i-1].weedFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageRow[currentPage-1].componentRow[i-1].weedFractionData.hingeMass = HingeMass.value;
					pageRow[currentPage-1].componentRow[i-1].weedFractionData.pieces_1000 = Pieces_1000.value;
					break;
			}
			
			DropdownBlock.parentNode.parentNode.children[0].children[0].children[0].value = percent.value;
			DropdownBlock.parentNode.parentNode.children[1].children[0].value = percent.value + " %";
		}
		requirementsPurityUpdate();
		updatePPM_Components(idFraction);
	}
}

//Обновление значениий граммовок
function componentGramUpdate(idFraction){
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
		
		percent.value = Number(gram.value / HingeMass.value * 100).toFixed(2);
		
		switch(idFraction){
			case "1":
				var firstElement = pageRow[currentPage-1].componentRow[0].mainFractionData.unitOption;
				var targetElement = pageRow[currentPage-1].componentRow[idRow-1].mainFractionData.unitOption;
				var lastElement = pageRow[currentPage-1].componentRow[pageRow[currentPage-1].componentRow.length-1].mainFractionData.unitOption;
				break;
			case "2":
				var firstElement = pageRow[currentPage-1].componentRow[0].suitableFractionData.unitOption;
				var targetElement = pageRow[currentPage-1].componentRow[idRow-1].suitableFractionData.unitOption;
				var lastElement = pageRow[currentPage-1].componentRow[pageRow[currentPage-1].componentRow.length-1].suitableFractionData.unitOption;
				break;
			case "3":
				var firstElement = pageRow[currentPage-1].componentRow[0].weedFractionData.unitOption;
				var targetElement = pageRow[currentPage-1].componentRow[idRow-1].weedFractionData.unitOption;
				var lastElement = pageRow[currentPage-1].componentRow[pageRow[currentPage-1].componentRow.length-1].weedFractionData.unitOption;
				break;
		}

		//Основное значение
		if(idRow == 1){
			targetElement.percent = percent.value <= Number(targetElement.percent) + Number(lastElement.percent) ? Number(percent.value).toFixed(2) : Number(Number(targetElement.percent) + Number(lastElement.percent)).toFixed(2)
			lastElement.percent = lastElement.percent - (sumComponentPercent(idFraction) - 100);
		}
		else{
			targetElement.percent = percent.value <= Number(firstElement.percent) + Number(targetElement.percent) ? Number(percent.value).toFixed(2) : Number(Number(firstElement.percent) + Number(targetElement.percent)).toFixed(2)
			firstElement.percent = firstElement.percent - (sumComponentPercent(idFraction) - 100);
		}
		
		for(var i = 1; i <= pageRow[currentPage-1].componentRow.length; i++){
			var DropdownBlock = document.getElementById("massDropdown_"+idFraction+"_"+i+"_"+currentPage);
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
					percent.value = Number(pageRow[currentPage-1].componentRow[i-1].mainFractionData.unitOption.percent).toFixed(2);
					break;
				case "2":
					percent.value =  Number(pageRow[currentPage-1].componentRow[i-1].suitableFractionData.unitOption.percent).toFixed(2);
					break;
				case "3":
					percent.value =  Number(pageRow[currentPage-1].componentRow[i-1].weedFractionData.unitOption.percent).toFixed(2);
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
					pageRow[currentPage-1].componentRow[i-1].mainFractionData.unitOption.percent = percent.value;
					pageRow[currentPage-1].componentRow[i-1].mainFractionData.unitOption.gram = gram.value;
					pageRow[currentPage-1].componentRow[i-1].mainFractionData.unitOption.pieces = pieces.value;
					pageRow[currentPage-1].componentRow[i-1].mainFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageRow[currentPage-1].componentRow[i-1].mainFractionData.hingeMass = HingeMass.value;
					pageRow[currentPage-1].componentRow[i-1].mainFractionData.pieces_1000 = Pieces_1000.value;
					break;
				case "2":
					pageRow[currentPage-1].componentRow[i-1].suitableFractionData.unitOption.percent = percent.value;
					pageRow[currentPage-1].componentRow[i-1].suitableFractionData.unitOption.gram = gram.value;
					pageRow[currentPage-1].componentRow[i-1].suitableFractionData.unitOption.pieces = pieces.value;
					pageRow[currentPage-1].componentRow[i-1].suitableFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageRow[currentPage-1].componentRow[i-1].suitableFractionData.hingeMass = HingeMass.value;
					pageRow[currentPage-1].componentRow[i-1].suitableFractionData.pieces_1000 = Pieces_1000.value;
					break;
				case "3":
					pageRow[currentPage-1].componentRow[i-1].weedFractionData.unitOption.percent = percent.value;
					pageRow[currentPage-1].componentRow[i-1].weedFractionData.unitOption.gram = gram.value;
					pageRow[currentPage-1].componentRow[i-1].weedFractionData.unitOption.pieces = pieces.value;
					pageRow[currentPage-1].componentRow[i-1].weedFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageRow[currentPage-1].componentRow[i-1].weedFractionData.hingeMass = HingeMass.value;
					pageRow[currentPage-1].componentRow[i-1].weedFractionData.pieces_1000 = Pieces_1000.value;
					break;
			}
			DropdownBlock.parentNode.parentNode.children[0].children[0].children[0].value = percent.value;
			DropdownBlock.parentNode.parentNode.children[1].children[0].value = percent.value + " %"
		}
		requirementsPurityUpdate();
		updatePPM_Components(idFraction);
	}
}

function componentPiecesUpdate(idFraction){
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
		
		gram.value = Number(pieces.value * (Pieces_1000.value / 1000)).toFixed(2);
		percent.value = Number(gram.value / HingeMass.value * 100).toFixed(2);
		
		switch(idFraction){
			case "1":
				var firstElement = pageRow[currentPage-1].componentRow[0].mainFractionData.unitOption;
				var targetElement = pageRow[currentPage-1].componentRow[idRow-1].mainFractionData.unitOption;
				var lastElement = pageRow[currentPage-1].componentRow[pageRow[currentPage-1].componentRow.length-1].mainFractionData.unitOption;
				break;
			case "2":
				var firstElement = pageRow[currentPage-1].componentRow[0].suitableFractionData.unitOption;
				var targetElement = pageRow[currentPage-1].componentRow[idRow-1].suitableFractionData.unitOption;
				var lastElement = pageRow[currentPage-1].componentRow[pageRow[currentPage-1].componentRow.length-1].suitableFractionData.unitOption;
				break;
			case "3":
				var firstElement = pageRow[currentPage-1].componentRow[0].weedFractionData.unitOption;
				var targetElement = pageRow[currentPage-1].componentRow[idRow-1].weedFractionData.unitOption;
				var lastElement = pageRow[currentPage-1].componentRow[pageRow[currentPage-1].componentRow.length-1].weedFractionData.unitOption;
				break;
		}

		//Основное значение
		if(idRow == 1){
			targetElement.percent = percent.value <= Number(targetElement.percent) + Number(lastElement.percent) ? Number(percent.value).toFixed(2) : Number(Number(targetElement.percent) + Number(lastElement.percent)).toFixed(2)
			lastElement.percent = lastElement.percent - (sumComponentPercent(idFraction) - 100);
		}
		else{
			targetElement.percent = percent.value <= Number(firstElement.percent) + Number(targetElement.percent) ? Number(percent.value).toFixed(2) : Number(Number(firstElement.percent) + Number(targetElement.percent)).toFixed(2)
			firstElement.percent = firstElement.percent - (sumComponentPercent(idFraction) - 100);
		}
		
		for(var i = 1; i <= pageRow[currentPage-1].componentRow.length; i++){
			var DropdownBlock = document.getElementById("massDropdown_"+idFraction+"_"+i+"_"+currentPage);
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
					percent.value = Number(pageRow[currentPage-1].componentRow[i-1].mainFractionData.unitOption.percent).toFixed(2);
					break;
				case "2":
					percent.value =  Number(pageRow[currentPage-1].componentRow[i-1].suitableFractionData.unitOption.percent).toFixed(2);
					break;
				case "3":
					percent.value =  Number(pageRow[currentPage-1].componentRow[i-1].weedFractionData.unitOption.percent).toFixed(2);
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
					pageRow[currentPage-1].componentRow[i-1].mainFractionData.unitOption.percent = percent.value;
					pageRow[currentPage-1].componentRow[i-1].mainFractionData.unitOption.gram = gram.value;
					pageRow[currentPage-1].componentRow[i-1].mainFractionData.unitOption.pieces = pieces.value;
					pageRow[currentPage-1].componentRow[i-1].mainFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageRow[currentPage-1].componentRow[i-1].mainFractionData.hingeMass = HingeMass.value;
					pageRow[currentPage-1].componentRow[i-1].mainFractionData.pieces_1000 = Pieces_1000.value;
					break;
				case "2":
					pageRow[currentPage-1].componentRow[i-1].suitableFractionData.unitOption.percent = percent.value;
					pageRow[currentPage-1].componentRow[i-1].suitableFractionData.unitOption.gram = gram.value;
					pageRow[currentPage-1].componentRow[i-1].suitableFractionData.unitOption.pieces = pieces.value;
					pageRow[currentPage-1].componentRow[i-1].suitableFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageRow[currentPage-1].componentRow[i-1].suitableFractionData.hingeMass = HingeMass.value;
					pageRow[currentPage-1].componentRow[i-1].suitableFractionData.pieces_1000 = Pieces_1000.value;
					break;
				case "3":
					pageRow[currentPage-1].componentRow[i-1].weedFractionData.unitOption.percent = percent.value;
					pageRow[currentPage-1].componentRow[i-1].weedFractionData.unitOption.gram = gram.value;
					pageRow[currentPage-1].componentRow[i-1].weedFractionData.unitOption.pieces = pieces.value;
					pageRow[currentPage-1].componentRow[i-1].weedFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageRow[currentPage-1].componentRow[i-1].weedFractionData.hingeMass = HingeMass.value;
					pageRow[currentPage-1].componentRow[i-1].weedFractionData.pieces_1000 = Pieces_1000.value;
					break;
			}
			DropdownBlock.parentNode.parentNode.children[0].children[0].children[0].value = percent.value;
			DropdownBlock.parentNode.parentNode.children[1].children[0].value = percent.value + " %"
		}
		requirementsPurityUpdate();
		updatePPM_Components(idFraction);
	}
}
//Обновление значениий штук/кг
function componentPiecesKgUpdate(idFraction){
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
		
		percent.value = Number((pieces_kg.value / 10) * (Pieces_1000.value / 1000)).toFixed(2);
		
		switch(idFraction){
			case "1":
				var firstElement = pageRow[currentPage-1].componentRow[0].mainFractionData.unitOption;
				var targetElement = pageRow[currentPage-1].componentRow[idRow-1].mainFractionData.unitOption;
				var lastElement = pageRow[currentPage-1].componentRow[pageRow[currentPage-1].componentRow.length-1].mainFractionData.unitOption;
				break;
			case "2":
				var firstElement = pageRow[currentPage-1].componentRow[0].suitableFractionData.unitOption;
				var targetElement = pageRow[currentPage-1].componentRow[idRow-1].suitableFractionData.unitOption;
				var lastElement = pageRow[currentPage-1].componentRow[pageRow[currentPage-1].componentRow.length-1].suitableFractionData.unitOption;
				break;
			case "3":
				var firstElement = pageRow[currentPage-1].componentRow[0].weedFractionData.unitOption;
				var targetElement = pageRow[currentPage-1].componentRow[idRow-1].weedFractionData.unitOption;
				var lastElement = pageRow[currentPage-1].componentRow[pageRow[currentPage-1].componentRow.length-1].weedFractionData.unitOption;
				break;
		}

		//Основное значение
		if(idRow == 1){
			targetElement.percent = percent.value <= Number(targetElement.percent) + Number(lastElement.percent) ? Number(percent.value).toFixed(2) : Number(Number(targetElement.percent) + Number(lastElement.percent)).toFixed(2)
			lastElement.percent = lastElement.percent - (sumComponentPercent(idFraction) - 100);
		}
		else{
			targetElement.percent = percent.value <= Number(firstElement.percent) + Number(targetElement.percent) ? Number(percent.value).toFixed(2) : Number(Number(firstElement.percent) + Number(targetElement.percent)).toFixed(2)
			firstElement.percent = firstElement.percent - (sumComponentPercent(idFraction) - 100);
		}
		
		for(var i = 1; i <= pageRow[currentPage-1].componentRow.length; i++){
			var DropdownBlock = document.getElementById("massDropdown_"+idFraction+"_"+i+"_"+currentPage);
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
					percent.value = Number(pageRow[currentPage-1].componentRow[i-1].mainFractionData.unitOption.percent).toFixed(2);
					break;
				case "2":
					percent.value =  Number(pageRow[currentPage-1].componentRow[i-1].suitableFractionData.unitOption.percent).toFixed(2);
					break;
				case "3":
					percent.value =  Number(pageRow[currentPage-1].componentRow[i-1].weedFractionData.unitOption.percent).toFixed(2);
					break;
			}

			//Остальные значения
			gram.value = Number(HingeMass.value / 100 * percent.value).toFixed(2);
			pieces.value = Number(gram.value / (Pieces_1000.value / 1000)).toFixed(2);
			pieces_kg.value =  Number((percent.value * 10) / (Pieces_1000.value / 1000)).toFixed(2);
			ppm.value = Number(1000000 / sumComponentPieces_KG(idFraction) * pieces_kg.value);
			//Значение компонента
			switch(idFraction){
				case "1":
					//Значение компонента
					pageRow[currentPage-1].componentRow[i-1].mainFractionData.unitOption.percent = percent.value;
					pageRow[currentPage-1].componentRow[i-1].mainFractionData.unitOption.gram = gram.value;
					pageRow[currentPage-1].componentRow[i-1].mainFractionData.unitOption.pieces = pieces.value;
					pageRow[currentPage-1].componentRow[i-1].mainFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageRow[currentPage-1].componentRow[i-1].mainFractionData.hingeMass = HingeMass.value;
					pageRow[currentPage-1].componentRow[i-1].mainFractionData.pieces_1000 = Pieces_1000.value;
					break;
				case "2":
					pageRow[currentPage-1].componentRow[i-1].suitableFractionData.unitOption.percent = percent.value;
					pageRow[currentPage-1].componentRow[i-1].suitableFractionData.unitOption.gram = gram.value;
					pageRow[currentPage-1].componentRow[i-1].suitableFractionData.unitOption.pieces = pieces.value;
					pageRow[currentPage-1].componentRow[i-1].suitableFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageRow[currentPage-1].componentRow[i-1].suitableFractionData.hingeMass = HingeMass.value;
					pageRow[currentPage-1].componentRow[i-1].suitableFractionData.pieces_1000 = Pieces_1000.value;
					break;
				case "3":
					pageRow[currentPage-1].componentRow[i-1].weedFractionData.unitOption.percent = percent.value;
					pageRow[currentPage-1].componentRow[i-1].weedFractionData.unitOption.gram = gram.value;
					pageRow[currentPage-1].componentRow[i-1].weedFractionData.unitOption.pieces = pieces.value;
					pageRow[currentPage-1].componentRow[i-1].weedFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageRow[currentPage-1].componentRow[i-1].weedFractionData.hingeMass = HingeMass.value;
					pageRow[currentPage-1].componentRow[i-1].weedFractionData.pieces_1000 = Pieces_1000.value;
					break;
			}
			DropdownBlock.parentNode.parentNode.children[0].children[0].children[0].value = percent.value;
			DropdownBlock.parentNode.parentNode.children[1].children[0].value = percent.value + " %"
		}
		requirementsPurityUpdate();
		updatePPM_Components(idFraction);
	}
}
//Обновление значениий промилий
function componentPPM_Update(idFraction){
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
		
		pieces_kg.value = Number(ppm.value / (1000000 / sumComponentPieces_KG(idFraction))).toFixed(2);
		percent.value = Number((pieces_kg.value / 10) * (Pieces_1000.value / 1000)).toFixed(2);
		
		switch(idFraction){
			case "1":
				var firstElement = pageRow[currentPage-1].componentRow[0].mainFractionData.unitOption;
				var targetElement = pageRow[currentPage-1].componentRow[idRow-1].mainFractionData.unitOption;
				var lastElement = pageRow[currentPage-1].componentRow[pageRow[currentPage-1].componentRow.length-1].mainFractionData.unitOption;
				break;
			case "2":
				var firstElement = pageRow[currentPage-1].componentRow[0].suitableFractionData.unitOption;
				var targetElement = pageRow[currentPage-1].componentRow[idRow-1].suitableFractionData.unitOption;
				var lastElement = pageRow[currentPage-1].componentRow[pageRow[currentPage-1].componentRow.length-1].suitableFractionData.unitOption;
				break;
			case "3":
				var firstElement = pageRow[currentPage-1].componentRow[0].weedFractionData.unitOption;
				var targetElement = pageRow[currentPage-1].componentRow[idRow-1].weedFractionData.unitOption;
				var lastElement = pageRow[currentPage-1].componentRow[pageRow[currentPage-1].componentRow.length-1].weedFractionData.unitOption;
				break;
		}

		//Основное значение
		if(idRow == 1){
			targetElement.percent = percent.value <= Number(targetElement.percent) + Number(lastElement.percent) ? Number(percent.value).toFixed(2) : Number(Number(targetElement.percent) + Number(lastElement.percent)).toFixed(2)
			lastElement.percent = lastElement.percent - (sumComponentPercent(idFraction) - 100);
		}
		else{
			targetElement.percent = percent.value <= Number(firstElement.percent) + Number(targetElement.percent) ? Number(percent.value).toFixed(2) : Number(Number(firstElement.percent) + Number(targetElement.percent)).toFixed(2)
			firstElement.percent = firstElement.percent - (sumComponentPercent(idFraction) - 100);
		}
		
		for(var i = 1; i <= pageRow[currentPage-1].componentRow.length; i++){
			var DropdownBlock = document.getElementById("massDropdown_"+idFraction+"_"+i+"_"+currentPage);
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
					percent.value = Number(pageRow[currentPage-1].componentRow[i-1].mainFractionData.unitOption.percent).toFixed(2);
					break;
				case "2":
					percent.value =  Number(pageRow[currentPage-1].componentRow[i-1].suitableFractionData.unitOption.percent).toFixed(2);
					break;
				case "3":
					percent.value =  Number(pageRow[currentPage-1].componentRow[i-1].weedFractionData.unitOption.percent).toFixed(2);
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
					pageRow[currentPage-1].componentRow[i-1].mainFractionData.unitOption.percent = percent.value;
					pageRow[currentPage-1].componentRow[i-1].mainFractionData.unitOption.gram = gram.value;
					pageRow[currentPage-1].componentRow[i-1].mainFractionData.unitOption.pieces = pieces.value;
					pageRow[currentPage-1].componentRow[i-1].mainFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageRow[currentPage-1].componentRow[i-1].mainFractionData.hingeMass = HingeMass.value;
					pageRow[currentPage-1].componentRow[i-1].mainFractionData.pieces_1000 = Pieces_1000.value;
					break;
				case "2":
					pageRow[currentPage-1].componentRow[i-1].suitableFractionData.unitOption.percent = percent.value;
					pageRow[currentPage-1].componentRow[i-1].suitableFractionData.unitOption.gram = gram.value;
					pageRow[currentPage-1].componentRow[i-1].suitableFractionData.unitOption.pieces = pieces.value;
					pageRow[currentPage-1].componentRow[i-1].suitableFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageRow[currentPage-1].componentRow[i-1].suitableFractionData.hingeMass = HingeMass.value;
					pageRow[currentPage-1].componentRow[i-1].suitableFractionData.pieces_1000 = Pieces_1000.value;
					break;
				case "3":
					pageRow[currentPage-1].componentRow[i-1].weedFractionData.unitOption.percent = percent.value;
					pageRow[currentPage-1].componentRow[i-1].weedFractionData.unitOption.gram = gram.value;
					pageRow[currentPage-1].componentRow[i-1].weedFractionData.unitOption.pieces = pieces.value;
					pageRow[currentPage-1].componentRow[i-1].weedFractionData.unitOption.pieces_kg = pieces_kg.value;
					
					pageRow[currentPage-1].componentRow[i-1].weedFractionData.hingeMass = HingeMass.value;
					pageRow[currentPage-1].componentRow[i-1].weedFractionData.pieces_1000 = Pieces_1000.value;
					break;
			}
			DropdownBlock.parentNode.parentNode.children[0].children[0].children[0].value = percent.value;
			DropdownBlock.parentNode.parentNode.children[1].children[0].value = percent.value + " %"
		}
		requirementsPurityUpdate();
		updatePPM_Components(idFraction);
	}
}
//Обновление значениий процентовок при удалении-добавлении компонента
function updateRemovedPercent(){//pageRow.length != 0 && 
	if(pageRow[currentPage-1].componentRow.length){
		pageRow[currentPage-1].componentRow[0].mainFractionData.unitOption.percent = pageRow[currentPage-1].componentRow[0].mainFractionData.unitOption.percent - (sumComponentPercent("1") - 100);
		pageRow[currentPage-1].componentRow[0].suitableFractionData.unitOption.percent = pageRow[currentPage-1].componentRow[0].suitableFractionData.unitOption.percent - (sumComponentPercent("2") - 100);
		pageRow[currentPage-1].componentRow[0].weedFractionData.unitOption.percent = pageRow[currentPage-1].componentRow[0].weedFractionData.unitOption.percent - (sumComponentPercent("3") - 100);
		
		for(var idFraction = 1; idFraction <= 3; idFraction++){ 
			for(var i = 1; i <= pageRow[currentPage-1].componentRow.length; i++){
				var DropdownBlock = document.getElementById("massDropdown_"+idFraction+"_"+i+"_"+currentPage);
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
						percent.value = Number(pageRow[currentPage-1].componentRow[i-1].mainFractionData.unitOption.percent).toFixed(2);
						break;
					case "2":
						percent.value =  Number(pageRow[currentPage-1].componentRow[i-1].suitableFractionData.unitOption.percent).toFixed(2);
						break;
					case "3":
						percent.value =  Number(pageRow[currentPage-1].componentRow[i-1].weedFractionData.unitOption.percent).toFixed(2);
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
						pageRow[currentPage-1].componentRow[i-1].mainFractionData.unitOption.percent = percent.value;
						pageRow[currentPage-1].componentRow[i-1].mainFractionData.unitOption.gram = gram.value;
						pageRow[currentPage-1].componentRow[i-1].mainFractionData.unitOption.pieces = pieces.value;
						pageRow[currentPage-1].componentRow[i-1].mainFractionData.unitOption.pieces_kg = pieces_kg.value;
						pageRow[currentPage-1].componentRow[i-1].mainFractionData.unitOption.ppm = ppm.value;
						
						pageRow[currentPage-1].componentRow[i-1].mainFractionData.hingeMass = HingeMass.value;
						pageRow[currentPage-1].componentRow[i-1].mainFractionData.pieces_1000 = Pieces_1000.value;
						break;
					case "2":
						pageRow[currentPage-1].componentRow[i-1].suitableFractionData.unitOption.percent = percent.value;
						pageRow[currentPage-1].componentRow[i-1].suitableFractionData.unitOption.gram = gram.value;
						pageRow[currentPage-1].componentRow[i-1].suitableFractionData.unitOption.pieces = pieces.value;
						pageRow[currentPage-1].componentRow[i-1].suitableFractionData.unitOption.pieces_kg = pieces_kg.value;
						
						pageRow[currentPage-1].componentRow[i-1].suitableFractionData.hingeMass = HingeMass.value;
						pageRow[currentPage-1].componentRow[i-1].suitableFractionData.pieces_1000 = Pieces_1000.value;
						break;
					case "3":
						pageRow[currentPage-1].componentRow[i-1].weedFractionData.unitOption.percent = percent.value;
						pageRow[currentPage-1].componentRow[i-1].weedFractionData.unitOption.gram = gram.value;
						pageRow[currentPage-1].componentRow[i-1].weedFractionData.unitOption.pieces = pieces.value;
						pageRow[currentPage-1].componentRow[i-1].weedFractionData.unitOption.pieces_kg = pieces_kg.value;
						
						pageRow[currentPage-1].componentRow[i-1].weedFractionData.hingeMass = HingeMass.value;
						pageRow[currentPage-1].componentRow[i-1].weedFractionData.pieces_1000 = Pieces_1000.value;
						break;
				}
				DropdownBlock.parentNode.parentNode.children[0].children[0].children[0].value = percent.value;
				DropdownBlock.parentNode.parentNode.children[1].children[0].value = percent.value + " %"
			}
			updatePPM_Components(String(idFraction));
		}
		requirementsPurityUpdate();
	}	
}
function updatePPM_Components(idFraction){
	for(var i = 1; i <= pageRow[currentPage-1].componentRow.length; i++){
		var DropdownBlock = document.getElementById("massDropdown_"+idFraction+"_"+i+"_"+currentPage);
		var MainScrollBlock = DropdownBlock.children[0];
		var HingeMass = DropdownBlock.children[2].children[0].children[0];
		var Pieces_1000	= DropdownBlock.children[4].children[0].children[0];

		//Основные параметры
		var percent = MainScrollBlock.children[0].children[0];
		var gram = MainScrollBlock.children[1].children[0];
		var pieces = MainScrollBlock.children[2].children[0];
		var pieces_kg = MainScrollBlock.children[3].children[0];
		var ppm = MainScrollBlock.children[4].children[0]

		ppm.value = Number(1000000 / sumComponentPieces_KG(idFraction) * pieces_kg.value).toFixed(2);
		
		switch(idFraction){
			case "1":
				pageRow[currentPage-1].componentRow[i-1].mainFractionData.unitOption.ppm = ppm.value;
				break;
			case "2":
				pageRow[currentPage-1].componentRow[i-1].suitableFractionData.unitOption.ppm = ppm.value;
				break;
			case "3":
				pageRow[currentPage-1].componentRow[i-1].weedFractionData.unitOption.ppm = ppm.value;
				break;
		}
	}
	requirementsPercentUpdate();
	setupDefaulUnitValue();
	updateDataClone(currentPage);
}
function updateHingeMass(idFraction){
	return function e(){
		for(var i = 1; i <= pageRow[currentPage-1].componentRow.length; i++){
			var DropdownBlock = document.getElementById("massDropdown_"+idFraction+"_"+i+"_"+currentPage);
			var HingeMass = DropdownBlock.children[2].children[0].children[0];
		
			pageRow[currentPage-1].componentRow[i-1].mainFractionData.hingeMass = this.value;
			HingeMass.value = pageRow[currentPage-1].componentRow[i-1].mainFractionData.hingeMass;
		}
	}
}
function updatePieces_1000(idRow){
	return function e(){
		for(var idFraction = 1; idFraction <= 3; idFraction++){ 
			var DropdownBlock = document.getElementById("massDropdown_"+idFraction+"_"+idRow);
			var Pieces_1000	= DropdownBlock.children[4].children[0].children[0];
			
			pageRow[currentPage-1].componentRow[idRow-1].mainFractionData.pieces_1000 = this.value;
			pageRow[currentPage-1].componentRow[idRow-1].suitableFractionData.pieces_1000 = this.value;
			pageRow[currentPage-1].componentRow[idRow-1].weedFractionData.pieces_1000 = this.value;
			
			Pieces_1000.value = this.value;
		}
	}
}
//функциии требований фракции 
function setupRequirementsTable(){
	//Айдишники на странице выделенны явно
	pureInpStart.value = Number(requirementsTable.mainFractionData.purity).toFixed(3);
	outputStart.value = Number(requirementsTable.mainFractionData.mass).toFixed(3);
	percentStart.value = Number(requirementsTable.mainFractionData.percent_exit).toFixed(2);
	
	pureInpGood.value = Number(requirementsTable.suitableFraction.purity).toFixed(3);
	outputGood.value = Number(requirementsTable.suitableFraction.mass).toFixed(3);
	percentGood.value = Number(requirementsTable.suitableFraction.percent_exit).toFixed(2);
	
	pureInpTrash.value = Number(requirementsTable.weedFraction.purity).toFixed(3);
	outputTrash.value = Number(requirementsTable.weedFraction.mass).toFixed(3);
	percentTrash.value = Number(requirementsTable.weedFraction.percent_exit).toFixed(2);
	
	//Привязка функций
	outputStart.addEventListener("change",requirementsMassUpdate);
	outputGood.addEventListener("change",requirementsMassUpdate);
	outputTrash.addEventListener("change",requirementsMassUpdate);
	
	percentGood.addEventListener("change",requirementsPercentUpdate);
	percentTrash.addEventListener("change",requirementsPercentUpdate);
	
	outputStart.addEventListener("change",updateRemovedPercent);
	outputGood.addEventListener("change",updateRemovedPercent);
	outputTrash.addEventListener("change",updateRemovedPercent);
	
	percentGood.addEventListener("change",updateRemovedPercent);
	percentTrash.addEventListener("change",updateRemovedPercent);
	
	outputStart.addEventListener("change",updateData);
	outputGood.addEventListener("change",updateData);
	outputTrash.addEventListener("change",updateData);
	
	percentGood.addEventListener("change",updateData);
	percentTrash.addEventListener("change",updateData);
	
	//Дефолтное обновление масс
	requirementsMassUpdate();

	//Вызов привязки слушателей для страницы экономического обоснования economic_model.js	
	setupOperationGraph();
}

function requirementsPurityUpdate(){
	var purityMainFraction = 0;
	var puritySuitableFraction = 0;
	var purityWeedFraction = 0;
	
	for(var i = 0; i < pageRow[currentPage-1].componentRow.length; i++){
		purityMainFraction += pageRow[currentPage-1].componentRow[i].mainFractionData.acceptRejectToggle ? Number(pageRow[currentPage-1].componentRow[i].mainFractionData.unitOption.percent) : 0;
		puritySuitableFraction += pageRow[currentPage-1].componentRow[i].suitableFractionData.acceptRejectToggle ? Number(pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.percent) : 0;
		purityWeedFraction += pageRow[currentPage-1].componentRow[i].weedFractionData.acceptRejectToggle ? Number(pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent) : 0;
	}
	
	requirementsTable.mainFractionData.purity = purityMainFraction;
	requirementsTable.suitableFraction.purity = puritySuitableFraction;
	requirementsTable.weedFraction.purity = purityWeedFraction;
	
	pureInpStart.value = Number(requirementsTable.mainFractionData.purity).toFixed(2);
	pureInpGood.value = Number(requirementsTable.suitableFraction.purity).toFixed(2);
	pureInpTrash.value = Number(requirementsTable.weedFraction.purity).toFixed(2);
}
function checkSuitableFractionExit(){
	if(Sustatment.ColumnState[0] == "lock"){
		if((requirementsTable.suitableFraction.mass / requirementsTable.mainFractionData.mass * 100) > Number(requirementsMaxExit("suitableFractionData"))){
			requirementsTable.suitableFraction.mass = requirementsTable.mainFractionData.mass / 100 * Number(requirementsMaxExit("suitableFractionData"));
			requirementsTable.suitableFraction.mass = Number(requirementsTable.suitableFraction.mass).toFixed(3);
		}
	}
}
function checkWeedFractionExit(){
	if(Sustatment.ColumnState[0] == "lock"){
		if((requirementsTable.weedFraction.mass / requirementsTable.mainFractionData.mass * 100) > Number(requirementsMaxExit("weedFractionData"))){
			requirementsTable.weedFraction.mass = requirementsTable.mainFractionData.mass / 100 * Number(requirementsMaxExit("weedFractionData"));
			requirementsTable.weedFraction.mass = Number(requirementsTable.weedFraction.mass).toFixed(3);
		}
	}
}
function requirementsMassUpdate(){
	var sustamentID = Sustatment.ColumnState.indexOf("active");
	switch(sustamentID){
		case 0:
			outputStart.value = outputStart.value < 0 ? Number(requirementsTable.mainFractionData.mass).toFixed(3) : Number(outputStart.value).toFixed(3);
			requirementsTable.mainFractionData.mass = Number(outputStart.value);
			/*if(Sustatment.ColumnState[1] == "unlock"){
				requirementsTable.suitableFraction.mass += Number(requirementsTable.mainFractionData.mass - requirementsTable.suitableFraction.mass - requirementsTable.weedFraction.mass);
				if(requirementsTable.suitableFraction.mass < 0){
					requirementsTable.mainFractionData.mass = Number(requirementsTable.mainFractionData.mass) - Number(requirementsTable.suitableFraction.mass);
					outputStart.value = Number(requirementsTable.mainFractionData.mass).toFixed(3);
					requirementsTable.suitableFraction.mass = 0;
				}
				
				requirementsTable.suitableFraction.percent_exit = Number(requirementsTable.suitableFraction.mass / requirementsTable.mainFractionData.mass * 100).toFixed(2);
				requirementsTable.weedFraction.percent_exit = Number(requirementsTable.mainFractionData.percent_exit - requirementsTable.suitableFraction.percent_exit).toFixed(2);

				outputGood.value = Number(requirementsTable.suitableFraction.mass).toFixed(3);
				outputTrash.value = Number(requirementsTable.weedFraction.mass).toFixed(3);
				percentGood.value = Number(requirementsTable.suitableFraction.percent_exit).toFixed(2);
				percentTrash.value = Number(requirementsTable.weedFraction.percent_exit).toFixed(2);
			}
			else{
				requirementsTable.weedFraction.mass += Number(requirementsTable.mainFractionData.mass - requirementsTable.weedFraction.mass - requirementsTable.suitableFraction.mass);
				if(requirementsTable.weedFraction.mass < 0){
					requirementsTable.mainFractionData.mass = Number(requirementsTable.mainFractionData.mass) - Number(requirementsTable.weedFraction.mass);
					outputStart.value = Number(requirementsTable.mainFractionData.mass).toFixed(3);
					requirementsTable.weedFraction.mass = 0;
				}
				
				requirementsTable.weedFraction.percent_exit = Number(requirementsTable.weedFraction.mass / requirementsTable.mainFractionData.mass * 100).toFixed(2);
				requirementsTable.suitableFraction.percent_exit = Number(requirementsTable.mainFractionData.percent_exit - requirementsTable.weedFraction.percent_exit).toFixed(2);
				
				outputGood.value = Number(requirementsTable.suitableFraction.mass).toFixed(3);
				outputTrash.value = Number(requirementsTable.weedFraction.mass).toFixed(3);
				percentGood.value = Number(requirementsTable.suitableFraction.percent_exit).toFixed(2);
				percentTrash.value = Number(requirementsTable.weedFraction.percent_exit).toFixed(2);
			}*/
			requirementsTable.suitableFraction.mass = requirementsTable.mainFractionData.mass/100 * requirementsTable.suitableFraction.percent_exit;
			requirementsTable.weedFraction.mass = requirementsTable.mainFractionData.mass/100 * requirementsTable.weedFraction.percent_exit;
			
			outputGood.value = Number(requirementsTable.suitableFraction.mass).toFixed(3);
			outputTrash.value = Number(requirementsTable.weedFraction.mass).toFixed(3);
			percentGood.value = Number(requirementsTable.suitableFraction.percent_exit).toFixed(2);
			percentTrash.value = Number(requirementsTable.weedFraction.percent_exit).toFixed(2);
			break;
		case 1:
			outputGood.value = outputGood.value < 0 ? Number(requirementsTable.suitableFraction.mass).toFixed(3) : Number(outputGood.value).toFixed(3);
			requirementsTable.suitableFraction.mass = Number(outputGood.value);
			//Проверка максимального выхода
			checkSuitableFractionExit();
			if(Sustatment.ColumnState[0] == "unlock"){
				requirementsTable.mainFractionData.mass += Number(requirementsTable.suitableFraction.mass - requirementsTable.mainFractionData.mass + requirementsTable.weedFraction.mass);
				outputStart.value = Number(requirementsTable.mainFractionData.mass).toFixed(3);
				
				requirementsTable.suitableFraction.percent_exit = Number(requirementsTable.mainFractionData.mass) > 0 ? Number(requirementsTable.suitableFraction.mass / requirementsTable.mainFractionData.mass * 100).toFixed(2) : 0;
				requirementsTable.weedFraction.percent_exit = Number(requirementsTable.mainFractionData.mass) > 0 ? Number(requirementsTable.mainFractionData.percent_exit - requirementsTable.suitableFraction.percent_exit).toFixed(2) : 0;

				outputGood.value = Number(requirementsTable.suitableFraction.mass).toFixed(3);
				outputTrash.value = Number(requirementsTable.weedFraction.mass).toFixed(3);
				percentGood.value = Number(requirementsTable.suitableFraction.percent_exit).toFixed(2);
				percentTrash.value = Number(requirementsTable.weedFraction.percent_exit).toFixed(2);
			} 
			else{
				requirementsTable.weedFraction.mass = Number(requirementsTable.mainFractionData.mass - requirementsTable.suitableFraction.mass);
				if(requirementsTable.weedFraction.mass < 0){
					requirementsTable.suitableFraction.mass = Number(requirementsTable.mainFractionData.mass);
					outputGood.value = Number(requirementsTable.suitableFraction.mass).toFixed(3);
					requirementsTable.weedFraction.mass = 0;
				}
				
				requirementsTable.weedFraction.percent_exit = Number(requirementsTable.mainFractionData.mass) > 0 ? Number(requirementsTable.weedFraction.mass / requirementsTable.mainFractionData.mass * 100).toFixed(2) : 0;
				requirementsTable.suitableFraction.percent_exit = Number(requirementsTable.mainFractionData.mass) > 0 ? Number(requirementsTable.mainFractionData.percent_exit - requirementsTable.weedFraction.percent_exit).toFixed(2) : 0;
				
				outputGood.value = Number(requirementsTable.suitableFraction.mass).toFixed(3);
				outputTrash.value = Number(requirementsTable.weedFraction.mass).toFixed(3);
				percentGood.value = Number(requirementsTable.suitableFraction.percent_exit).toFixed(2);
				percentTrash.value = Number(requirementsTable.weedFraction.percent_exit).toFixed(2)
			}
			break;
		case 2:
			outputTrash.value = outputTrash.value < 0 ? Number(requirementsTable.weedFraction.mass).toFixed(3) : Number(outputTrash.value).toFixed(3);
			requirementsTable.weedFraction.mass = Number(outputTrash.value);
			//Проверка максимального выхода
			checkWeedFractionExit();
			if(Sustatment.ColumnState[0] == "unlock"){
				requirementsTable.mainFractionData.mass += Number(requirementsTable.weedFraction.mass - requirementsTable.mainFractionData.mass + requirementsTable.suitableFraction.mass);
				outputStart.value = Number(requirementsTable.mainFractionData.mass).toFixed(3);
				
				requirementsTable.suitableFraction.percent_exit = Number(requirementsTable.mainFractionData.mass) > 0 ? Number(requirementsTable.suitableFraction.mass / requirementsTable.mainFractionData.mass * 100).toFixed(2) : 0;
				requirementsTable.weedFraction.percent_exit = Number(requirementsTable.mainFractionData.mass) > 0 ? Number(requirementsTable.mainFractionData.percent_exit - requirementsTable.suitableFraction.percent_exit).toFixed(2) : 0;

				outputGood.value = Number(requirementsTable.suitableFraction.mass).toFixed(3);
				outputTrash.value = Number(requirementsTable.weedFraction.mass).toFixed(3);
				percentGood.value = Number(requirementsTable.suitableFraction.percent_exit).toFixed(2);
				percentTrash.value = Number(requirementsTable.weedFraction.percent_exit).toFixed(2);
			} 
			else{
				requirementsTable.suitableFraction.mass = Number(requirementsTable.mainFractionData.mass - requirementsTable.weedFraction.mass);
				if(requirementsTable.suitableFraction.mass < 0){
					requirementsTable.weedFraction.mass = Number(requirementsTable.mainFractionData.mass);
					outputTrash.value = Number(requirementsTable.suitableFraction.mass).toFixed(3);
					requirementsTable.suitableFraction.mass = 0;
				}
				
				requirementsTable.suitableFraction.percent_exit = Number(requirementsTable.mainFractionData.mass) > 0 ? Number(requirementsTable.suitableFraction.mass / requirementsTable.mainFractionData.mass * 100).toFixed(2) : 0;
				requirementsTable.weedFraction.percent_exit = Number(requirementsTable.mainFractionData.mass) > 0 ? Number(requirementsTable.mainFractionData.percent_exit - requirementsTable.suitableFraction.percent_exit).toFixed(2) : 0;

				outputGood.value = Number(requirementsTable.suitableFraction.mass).toFixed(3);
				outputTrash.value = Number(requirementsTable.weedFraction.mass).toFixed(3);
				percentGood.value = Number(requirementsTable.suitableFraction.percent_exit).toFixed(2);
				percentTrash.value = Number(requirementsTable.weedFraction.percent_exit).toFixed(2);
			}
			break;
	}
	setupFractionExit();
	//suitableFractionPercent();
}
function requirementsPercentUpdate(){
	var sustamentID = Sustatment.ColumnState.indexOf("active");
	switch(sustamentID){
		case 0:
			if(Sustatment.ColumnState[1] != "lock" || Sustatment.ColumnState[2] != "lock"){
				percentGood.value = percentGood.value < 0 ? Number(requirementsTable.suitableFraction.percent_exit).toFixed(2) : Number(percentGood.value).toFixed(2);
				requirementsTable.suitableFraction.percent_exit = Number(percentGood.value) <= requirementsMaxExit("suitableFractionData") ? Number(percentGood.value) : requirementsMaxExit("suitableFractionData");
				
				percentTrash.value = percentTrash.value < 0 ? Number(requirementsTable.weedFraction.percent_exit).toFixed(2) : Number(percentTrash.value).toFixed(2);
				requirementsTable.weedFraction.percent_exit = Number(percentTrash.value) <= requirementsMaxExit("weedFractionData") ? Number(percentTrash.value) : requirementsMaxExit("weedFractionData");
			}
			break;
		case 1:
			percentGood.value = percentGood.value < 0 ? Number(requirementsTable.suitableFraction.percent_exit).toFixed(2) : Number(percentGood.value).toFixed(2);
			requirementsTable.suitableFraction.percent_exit = Number(percentGood.value) <= requirementsMaxExit("suitableFractionData") ? Number(percentGood.value) : requirementsMaxExit("suitableFractionData");
			
			requirementsTable.weedFraction.percent_exit = Number(requirementsTable.mainFractionData.percent_exit - requirementsTable.suitableFraction.percent_exit);
			
			requirementsTable.suitableFraction.mass = Number(requirementsTable.mainFractionData.mass / requirementsTable.mainFractionData.percent_exit * requirementsTable.suitableFraction.percent_exit);
			requirementsTable.weedFraction.mass = Number(requirementsTable.mainFractionData.mass / requirementsTable.mainFractionData.percent_exit * requirementsTable.weedFraction.percent_exit);
			
			outputGood.value = Number(requirementsTable.suitableFraction.mass).toFixed(3);
			outputTrash.value = Number(requirementsTable.weedFraction.mass).toFixed(3);
			percentGood.value = Number(requirementsTable.suitableFraction.percent_exit).toFixed(2);
			percentTrash.value = Number(requirementsTable.weedFraction.percent_exit).toFixed(2);
			break;
		case 2:
			percentTrash.value = percentTrash.value < 0 ? Number(requirementsTable.weedFraction.percent_exit).toFixed(2) : Number(percentTrash.value).toFixed(2);
			requirementsTable.weedFraction.percent_exit = Number(percentTrash.value) <= requirementsMaxExit("weedFractionData") ? Number(percentTrash.value) : requirementsMaxExit("weedFractionData");
			
			requirementsTable.suitableFraction.percent_exit = Number(requirementsTable.mainFractionData.percent_exit - requirementsTable.weedFraction.percent_exit);
			
			requirementsTable.suitableFraction.mass = Number(requirementsTable.mainFractionData.mass / requirementsTable.mainFractionData.percent_exit * requirementsTable.suitableFraction.percent_exit);
			requirementsTable.weedFraction.mass = Number(requirementsTable.mainFractionData.mass / requirementsTable.mainFractionData.percent_exit * requirementsTable.weedFraction.percent_exit);
			
			outputGood.value = Number(requirementsTable.suitableFraction.mass).toFixed(3);
			outputTrash.value = Number(requirementsTable.weedFraction.mass).toFixed(3);
			percentGood.value = Number(requirementsTable.suitableFraction.percent_exit).toFixed(2);
			percentTrash.value = Number(requirementsTable.weedFraction.percent_exit).toFixed(2);
			break;
	}
	setupFractionExit();
	handler(chartData);
}

function setupFractionExit(){
	var __suitable = Number(requirementsMaxExit("suitableFractionData"));
	var __weed = Number(requirementsMaxExit("weedFractionData"));
	
	var sustamentID = Sustatment.ColumnState.indexOf("active");
	switch(sustamentID){
		case 0:
			if(Number(percentGood.value) > __suitable){
				requirementsTable.suitableFraction.percent_exit = __suitable;
				requirementsTable.weedFraction.percent_exit = Number(requirementsTable.mainFractionData.percent_exit - requirementsTable.suitableFraction.percent_exit);
					
				requirementsTable.suitableFraction.mass = Number(requirementsTable.mainFractionData.mass / requirementsTable.mainFractionData.percent_exit * requirementsTable.suitableFraction.percent_exit);
				requirementsTable.weedFraction.mass = Number(requirementsTable.mainFractionData.mass / requirementsTable.mainFractionData.percent_exit * requirementsTable.weedFraction.percent_exit);
				
				outputGood.value = Number(requirementsTable.suitableFraction.mass).toFixed(3);
				outputTrash.value = Number(requirementsTable.weedFraction.mass).toFixed(3);
				percentGood.value = Number(requirementsTable.suitableFraction.percent_exit).toFixed(2);
				percentTrash.value = Number(requirementsTable.weedFraction.percent_exit).toFixed(2);
			}
			if(Number(percentTrash.value) > __weed){
				requirementsTable.weedFraction.percent_exit = __weed;
				requirementsTable.suitableFraction.percent_exit = Number(requirementsTable.mainFractionData.percent_exit - requirementsTable.weedFraction.percent_exit);
				
				requirementsTable.suitableFraction.mass = Number(requirementsTable.mainFractionData.mass / requirementsTable.mainFractionData.percent_exit * requirementsTable.suitableFraction.percent_exit);
				requirementsTable.weedFraction.mass = Number(requirementsTable.mainFractionData.mass / requirementsTable.mainFractionData.percent_exit * requirementsTable.weedFraction.percent_exit);
				
				outputGood.value = Number(requirementsTable.suitableFraction.mass).toFixed(3);
				outputTrash.value = Number(requirementsTable.weedFraction.mass).toFixed(3);
				percentGood.value = Number(requirementsTable.suitableFraction.percent_exit).toFixed(2);
				percentTrash.value = Number(requirementsTable.weedFraction.percent_exit).toFixed(2);
			}
			if(Sustatment.ColumnState[1] == "unlock"){
				for(var i = 0; i < pageRow[currentPage-1].componentRow.length; i++){
					var mainComponentMass = Number(requirementsTable.mainFractionData.mass / 100 * pageRow[currentPage-1].componentRow[i].mainFractionData.unitOption.percent).toFixed(5);
					var weedComponentMass = Number(requirementsTable.weedFraction.mass / 100 * pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent).toFixed(5);
					
					var suitableComponentMass = Number(mainComponentMass - weedComponentMass);
					pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.percent = suitableComponentMass / (requirementsTable.suitableFraction.mass / 100);
					
					if(isNaN(pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.percent) || pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.percent == "Infinity" || pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.percent == "-Infinity")
						pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.percent = i == 0 ? 100 : 0;
					
					pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.percent = pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.percent < 0 ? 0 : pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.percent;
					pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.percent = pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.percent > 100 ? 100 : pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.percent;
				
					pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.percent = parseFloat(pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.percent).toFixed(2);
				}
			}
			else if(Sustatment.ColumnState[2] == "unlock"){
				for(var i = 0; i < pageRow[currentPage-1].componentRow.length; i++){
					var mainComponentMass = Number(requirementsTable.mainFractionData.mass / 100 * pageRow[currentPage-1].componentRow[i].mainFractionData.unitOption.percent).toFixed(5);
					var suitableComponentMass = Number(requirementsTable.suitableFraction.mass / 100 * pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.percent).toFixed(5);
					
					var weedComponentMass = Number(mainComponentMass - suitableComponentMass);
					pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent = weedComponentMass / (requirementsTable.weedFraction.mass / 100);
					
					if(isNaN(pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent) || pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent == "Infinity" || pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent == "-Infinity")
						pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent = i != pageRow[currentPage-1].componentRow.length-1 ? 0 : 100;
					
					pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent = pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent < 0 ? 0 : pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent;
					pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent = pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent > 100 ? 100 : pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent;
				
					pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent = parseFloat(pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent).toFixed(2);
				}
			}
			break;
		case 1:
			if(Sustatment.ColumnState[0] == "unlock"){
				for(var i = 0; i < pageRow[currentPage-1].componentRow.length; i++){
					var suitableComponentMass = Number(requirementsTable.suitableFraction.mass / 100 * pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.percent).toFixed(5);
					var weedComponentMass = Number(requirementsTable.weedFraction.mass / 100 * pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent).toFixed(5);
					
					var mainComponentMass =  Number(suitableComponentMass) +  Number(weedComponentMass);
					pageRow[currentPage-1].componentRow[i].mainFractionData.unitOption.percent = mainComponentMass / (requirementsTable.mainFractionData.mass / 100);
					
					pageRow[currentPage-1].componentRow[i].mainFractionData.unitOption.percent = pageRow[currentPage-1].componentRow[i].mainFractionData.unitOption.percent < 0 ? 0 : pageRow[currentPage-1].componentRow[i].mainFractionData.unitOption.percent;
					pageRow[currentPage-1].componentRow[i].mainFractionData.unitOption.percent = pageRow[currentPage-1].componentRow[i].mainFractionData.unitOption.percent > 100 ? 100 : pageRow[currentPage-1].componentRow[i].mainFractionData.unitOption.percent;
				
					pageRow[currentPage-1].componentRow[i].mainFractionData.unitOption.percent = parseFloat(pageRow[currentPage-1].componentRow[i].mainFractionData.unitOption.percent).toFixed(2);
				}
			}
			else{
				//suitableFractionPercent();
				for(var i = 0; i < pageRow[currentPage-1].componentRow.length; i++){
					var suitableComponentMass = Number(requirementsTable.suitableFraction.mass / 100 * pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.percent).toFixed(5);
					var mainComponentMass = Number(requirementsTable.mainFractionData.mass / 100 * pageRow[currentPage-1].componentRow[i].mainFractionData.unitOption.percent).toFixed(5);
					
					var weedComponentMass =  Number(mainComponentMass - suitableComponentMass);
					pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent = weedComponentMass / (requirementsTable.weedFraction.mass / 100);
					
					pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent = pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent < 0 ? 0 : pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent;
					pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent = pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent > 100 ? 100 : pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent;
				
					pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent = parseFloat(pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent).toFixed(2);
				}
			}
			break;
		case 2:
			if(Sustatment.ColumnState[0] == "unlock"){
				for(var i = 0; i < pageRow[currentPage-1].componentRow.length; i++){
					var suitableComponentMass = Number(requirementsTable.suitableFraction.mass / 100 * pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.percent).toFixed(5);
					var weedComponentMass = Number(requirementsTable.weedFraction.mass / 100 * pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent).toFixed(5);
					
					var mainComponentMass =  Number(suitableComponentMass) +  Number(weedComponentMass);
					pageRow[currentPage-1].componentRow[i].mainFractionData.unitOption.percent = mainComponentMass / (requirementsTable.mainFractionData.mass / 100).toFixed(5);
					
					pageRow[currentPage-1].componentRow[i].mainFractionData.unitOption.percent = pageRow[currentPage-1].componentRow[i].mainFractionData.unitOption.percent < 0 ? 0 : pageRow[currentPage-1].componentRow[i].mainFractionData.unitOption.percent;
					pageRow[currentPage-1].componentRow[i].mainFractionData.unitOption.percent = pageRow[currentPage-1].componentRow[i].mainFractionData.unitOption.percent > 100 ? 100 : pageRow[currentPage-1].componentRow[i].mainFractionData.unitOption.percent;
					
					pageRow[currentPage-1].componentRow[i].mainFractionData.unitOption.percent = parseFloat(pageRow[currentPage-1].componentRow[i].mainFractionData.unitOption.percent).toFixed(2);
				}
			}
			else{
				//weedFractionPercent();
				for(var i = 0; i < pageRow[currentPage-1].componentRow.length; i++){
					var weedComponentMass = Number(requirementsTable.weedFraction.mass / 100 * pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent).toFixed(5);
					var mainComponentMass = Number(requirementsTable.mainFractionData.mass / 100 * pageRow[currentPage-1].componentRow[i].mainFractionData.unitOption.percent).toFixed(5);
					
					var suitableComponentMass =  Number(mainComponentMass - weedComponentMass);
					pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.percent = suitableComponentMass / (requirementsTable.suitableFraction.mass / 100);
					
					pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.percent = pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent < 0 ? 0 : pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.percent;
					pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.percent = pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent > 100 ? 100 : pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.percent;
					
					pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.percent = parseFloat(pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.percent).toFixed(2);
				}
			}
			break;
	}
}
/*
function suitableFractionPercent(){
	var suitableFractionMass = Number(requirementsTable.mainFractionData.mass / 100 * requirementsTable.suitableFraction.percent_exit);
	for(var i = 0; i < pageRow[currentPage-1].componentRow.length; i++){
		var requirementsComponentMass = requirementsTable.mainFractionData.mass / 100 * pageRow[currentPage-1].componentRow[i].mainFractionData.unitOption.percent;
		var fractionComponentMass = Number(suitableFractionMass/100 * pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.percent);
		
		pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.iterfraction_percent = Number(fractionComponentMass / requirementsComponentMass) * 100;
	}
	for(var i = 0; i < pageRow[currentPage-1].componentRow.length; i++){
		pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.iterfraction_percent = 100 - pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.iterfraction_percent;
	}
	
	var weedFractionMass = Number(requirementsTable.mainFractionData.mass / 100 * requirementsTable.weedFraction.percent_exit);
	for(var i = 0; i < pageRow[currentPage-1].componentRow.length; i++){
		var requirementsComponentMass = requirementsTable.mainFractionData.mass / 100 * pageRow[currentPage-1].componentRow[i].mainFractionData.unitOption.percent;
		var fractionComponentMass = Number(requirementsComponentMass / 100 *  pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.iterfraction_percent);
		pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent = Number(fractionComponentMass / weedFractionMass * 100).toFixed(2)
		
		if(pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent == "NaN" || pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent == "Infinity" || pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent == "-Infinity"){
			if(i == 0)
				pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent = 100;
			else
				pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent = 0;
		}
		pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent = pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent >= 0 ? pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent : 0.00;
		pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent = pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent <= 100 ? pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent : 100.00;
	}
}
function weedFractionPercent(){
	var weedFractionMass = Number(requirementsTable.mainFractionData.mass / 100 * requirementsTable.weedFraction.percent_exit);
	for(var i = 0; i < pageRow[currentPage-1].componentRow.length; i++){
		var requirementsComponentMass = requirementsTable.mainFractionData.mass / 100 * pageRow[currentPage-1].componentRow[i].mainFractionData.unitOption.percent;
		var fractionComponentMass = Number(suitableFractionMass/100 * pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.percent);
		
		pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.iterfraction_percent = Number(fractionComponentMass / requirementsComponentMass) * 100;
	}
	for(var i = 0; i < pageRow[currentPage-1].componentRow.length; i++){
		pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.iterfraction_percent = 100 - pageRow[currentPage-1].componentRow[i].weedFractionData.unitOption.iterfraction_percent;
	}
	
	var suitableFractionMass = Number(requirementsTable.mainFractionData.mass / 100 * requirementsTable.suitableFraction.percent_exit);
	for(var i = 0; i < pageRow[currentPage-1].componentRow.length; i++){
		var requirementsComponentMass = requirementsTable.mainFractionData.mass / 100 * pageRow[currentPage-1].componentRow[i].mainFractionData.unitOption.percent;
		var fractionComponentMass = Number(requirementsComponentMass / 100 *  pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.iterfraction_percent);
		pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.percent = Number(fractionComponentMass / weedFractionMass * 100).toFixed(2);
		
		if(pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.percent == "NaN" || pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.percent == "Infinity" || pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.percent == "-Infinity"){
			if(i == 0)
				pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.percent = 100;
			else
				pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.percent = 0;
		}
		pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.percent = pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.percent >= 0 ? pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.percent : 0.00;
		pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.percent = pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.percent <= 100 ? pageRow[currentPage-1].componentRow[i].suitableFractionData.unitOption.percent : 100.00;
	}
}
*/

function requirementsMaxExit(fraction){
	var minFractionMass = Number(Infinity);
	for(var i = 0; i < pageRow[currentPage-1].componentRow.length; i++){
		var requirementsComponentMass = Number(requirementsTable.mainFractionData.mass / 100 * pageRow[currentPage-1].componentRow[i].mainFractionData.unitOption.percent);
		
		var maxFractionComponentMass = Number(requirementsComponentMass / Number(pageRow[currentPage-1].componentRow[i][fraction].unitOption.percent) * 100);
		
		if(maxFractionComponentMass == "NaN" || maxFractionComponentMass == "Infinity" || maxFractionComponentMass == "-Infinity")
			maxFractionComponentMass = 0;
		
		if(maxFractionComponentMass <= minFractionMass && maxFractionComponentMass != 0)
			minFractionMass = maxFractionComponentMass
	}
	//Назначение максимальнового выхода для фракции
	var fractionMaxExitPercent = minFractionMass/requirementsTable.mainFractionData.mass * 100;
	fractionMaxExitPercent = (fractionMaxExitPercent == "NaN" || fractionMaxExitPercent == "Infinity" || fractionMaxExitPercent == "-Infinity") ? 0 : fractionMaxExitPercent;
	
	return Number(fractionMaxExitPercent).toFixed(2);
}

//Изменение дефолтных единиц измерения
function prepareDefaultUnit(){
	var scrollBlock = defaultUnit.getElementsByClassName('scrollBlock')[0];
	var dropdownElements = scrollBlock.children;
	
	var percentInput = dropdownElements[0].children[0];
	var gramInput = dropdownElements[1].children[0];
	var piecesInput = dropdownElements[2].children[0];
	var pieces_kgInput = dropdownElements[3].children[0];
	var ppmInput = dropdownElements[4].children[0];
	
	percentInput.addEventListener("click", setupTargetDefaltUnit(percentInput, "percent"));
	gramInput.addEventListener("click", setupTargetDefaltUnit(gramInput, "gram"));
	piecesInput.addEventListener("click", setupTargetDefaltUnit(piecesInput, "pieces"));
	pieces_kgInput.addEventListener("click", setupTargetDefaltUnit(pieces_kgInput, "pieces_kg"));
	ppmInput.addEventListener("click", setupTargetDefaltUnit(ppmInput, "ppm"));
	
	percentInput.click();
}

function setupTargetDefaltUnit(inputOptions, unit){
	return function e(){
		var targetBlock = inputOptions.parentNode.parentNode.children;
		if (inputOptions.style.backgroundColor != "") {
			for (var i = 0; i < targetBlock.length; i++) {
				targetBlock[i].style.display = "";
				inputOptions.style.backgroundColor = "";
			}
			Sustatment.DefaultUnit = "percent";
		}
		else {
			for (var i = 0; i < targetBlock.length; i++) {
				targetBlock[i].style.display = "none";
			}

			this.parentNode.style.display = "";
			inputOptions.style.backgroundColor = "#ffb23f";
			Sustatment.DefaultUnit = unit;
		}
		setupDefaulUnitValue();
	}
}

function returnUnitDefaultText(selectUnitOption){//не перенесено
	switch(selectUnitOption){
		case "percent":
			var text = " %";
			break;
		case "gram":
			var text = ' ' + Translate[0].Prot[5][GlobalLang];
			break;
		case "pieces":
			var text = ' ' + Translate[0].Prot[6][GlobalLang];
			break;
		case "pieces_kg":
			var text = ' ' + Translate[0].Prot[7][GlobalLang];
			break;
		case "ppm":
			var text = " ppm";
			break;
	}
	return text;
}

function setupDefaulUnitValue(){
	//Дефолтный тескт
	var text = returnUnitDefaultText(Sustatment.DefaultUnit);
	
	//цикл назначение дефолных значений
	for(var i = 1; i <= pageRow[currentPage-1].componentRow.length; i++){
		for(var idFraction = 1; idFraction <= 3; idFraction++){
			var massInput = document.getElementById("massInput_"+idFraction+"_"+i+"_"+currentPage);
			var massInputBlock = document.getElementById("massInputBlock_"+idFraction+"_"+i+"_"+currentPage);
			var duplicateMassInput = massInputBlock.children[0].children[0];

			switch(String(idFraction)){
				case "1":
					if(pageRow[currentPage-1].componentRow[i-1].mainFractionData.selectUnitOption == null){
						massInput.value = pageRow[currentPage-1].componentRow[i-1].mainFractionData.unitOption[Sustatment.DefaultUnit] + text;
						duplicateMassInput.value = pageRow[currentPage-1].componentRow[i-1].mainFractionData.unitOption[Sustatment.DefaultUnit];
					}
					else{
						var selectUnitOption = pageRow[currentPage-1].componentRow[i-1].mainFractionData.selectUnitOption;
						var __text = returnUnitDefaultText(selectUnitOption);
						massInput.value = pageRow[currentPage-1].componentRow[i-1].mainFractionData.unitOption[selectUnitOption] + __text;
						duplicateMassInput.value = pageRow[currentPage-1].componentRow[i-1].mainFractionData.unitOption[selectUnitOption];
					}
					break;
				case "2":
					if(pageRow[currentPage-1].componentRow[i-1].suitableFractionData.selectUnitOption == null){
						massInput.value = pageRow[currentPage-1].componentRow[i-1].suitableFractionData.unitOption[Sustatment.DefaultUnit] + text;
						duplicateMassInput.value = pageRow[currentPage-1].componentRow[i-1].suitableFractionData.unitOption[Sustatment.DefaultUnit];
					}
					else{
						var selectUnitOption = pageRow[currentPage-1].componentRow[i-1].suitableFractionData.selectUnitOption;
						var __text = returnUnitDefaultText(selectUnitOption);
						massInput.value = pageRow[currentPage-1].componentRow[i-1].suitableFractionData.unitOption[selectUnitOption] + __text;
						duplicateMassInput.value = pageRow[currentPage-1].componentRow[i-1].suitableFractionData.unitOption[selectUnitOption];
					}
					break;
				case "3":
					if(pageRow[currentPage-1].componentRow[i-1].weedFractionData.selectUnitOption == null){
						massInput.value = pageRow[currentPage-1].componentRow[i-1].weedFractionData.unitOption[Sustatment.DefaultUnit] + text;
						duplicateMassInput.value = pageRow[currentPage-1].componentRow[i-1].weedFractionData.unitOption[Sustatment.DefaultUnit];
					}
					else{
						var selectUnitOption = pageRow[currentPage-1].componentRow[i-1].weedFractionData.selectUnitOption;
						var __text = returnUnitDefaultText(selectUnitOption);
						massInput.value = pageRow[currentPage-1].componentRow[i-1].weedFractionData.unitOption[selectUnitOption] + __text;
						duplicateMassInput.value = pageRow[currentPage-1].componentRow[i-1].weedFractionData.unitOption[selectUnitOption];
					}
					break;
			}
		}
	}
}

function GetLockSustate(column_id){
	switch(column_id){
		case'1':
			Sustatment.ColumnState[0] = 'active';
			Sustatment.ColumnState[1] = 'lock';
			Sustatment.ColumnState[2] = 'unlock';
			break;
		case'2':
			Sustatment.ColumnState[0] = 'lock';
			Sustatment.ColumnState[1] = 'active';
			Sustatment.ColumnState[2] = 'unlock';
			break;
		case'3':
			Sustatment.ColumnState[0] = 'lock';
			Sustatment.ColumnState[1] = 'unlock';
			Sustatment.ColumnState[2] = 'active';
			break;
	}
	setupIMG();
}
function setupIMG(){
    for(var i = 0; i< Sustatment.ColumnState.length; i++){
        var img = document.getElementById('Lock_' + (i+1));
        var parent = document.getElementById('fractionLockValue_' + (i+1));
        switch(Sustatment.ColumnState[i]){
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
function CheckLockInput(el){
    var element_id = el.id.split('_')[1];
    var activeEl;
    for(var i = 0; i< Sustatment.ColumnState.length; i++){
        if(Sustatment.ColumnState[i] == 'active'){
            activeEl = i;
            break;
        }
    }
    switch(activeEl){
        case 0:            
            var activeEl = element_id;
            var passiveEl = element_id == '2' ?  '3' : '2';
            Sustatment.ColumnState[activeEl-1] =  Sustatment.ColumnState[activeEl-1]  != 'unlock' ? 'unlock' : 'lock';
            Sustatment.ColumnState[passiveEl-1] =  Sustatment.ColumnState[activeEl-1]  != 'unlock' ? 'unlock' : 'lock';
            break;
        case 1:
            var activeEl = element_id;
            var passiveEl = element_id == '1' ?  '3' : '1';
            Sustatment.ColumnState[activeEl-1] =  Sustatment.ColumnState[activeEl-1]  != 'unlock' ? 'unlock' : 'lock';
            Sustatment.ColumnState[passiveEl-1] =  Sustatment.ColumnState[activeEl-1]  != 'unlock' ? 'unlock' : 'lock';
            break;
        case 2:
            var activeEl = element_id;
            var passiveEl = element_id == '1' ?  '2' : '1';
            Sustatment.ColumnState[activeEl-1] =  Sustatment.ColumnState[activeEl-1]  != 'unlock' ? 'unlock' : 'lock';
            Sustatment.ColumnState[passiveEl-1] =  Sustatment.ColumnState[activeEl-1]  != 'unlock' ? 'unlock' : 'lock';
            break;
    }
    
    setupIMG();   
}

function percentCheck(value){
	if(Number(value) > 100){
		value = "100.000";
	}
	else if(value == "" || Number(value) < 0){
		value = "0.000";
	}
	return value;
}



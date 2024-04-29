var operatingModeGraphData = {
	"hour_in_day": 8.000,
	"day_in_week": 5.000,
	"month_in_year": 12.000,
	"calculation_range": 12.000,
	"month_payback": 0.000,
	"volumeWork":{
		"volume": 0.000,
		"monthStart": 2,
		"monthEnd": 12
	},
	"indicators_rub_per_ton":{
		"balance": 0.000,
		"income": 0.000,
		"expense": 0.000
	}
	/*
	"payback_calculation":{
		"ton_in_hour": 0,
		"percent_exit": 0,
		"rub_per_ton": 0
	},
	"balance_per_ton":{
		"ton_in_hour": 0,
		"percent_exit": 0,
		"rub_per_ton": 0
	}*/
}
var economicType = 'Req';
var sliderType = 'Req';

var EconomicRowType;

var economicRowData = {
	"elements": [],
	"Additiona":{
		"HourDay":8,
		"DayWeek":5
	}
}
var economicRowDataProt = {
	"elements": [],
	"Additiona":{
		"HourDay":8,
		"DayWeek":5
	}
}
/*Функция генерации значений*/
function generateEconomicRowData() {
	economicRowData.elements.push({
		"SumParameters": {
			"modelType": "modelType",
			"currentyParameters": {
				"targetCurrent": "targetCurrent",
				"curentyValue": {
					"RUB": 1.00,
					"USD": 1.00,
					"EUR": 1.00
				}
			},			
			"fractionParameters": {
				"targetFraction": "targetFraction",
				"targetMassType": "targetMassType",
				"massValue": {
					"ton": 1.00,
					"cwt": 1.00,
					"kg": 1.00
				}
			},
			"percentParameters": {
				"percent": 0,
				"articleNumber": []
			}
			
		},
		"DateParameters": {
			"modelType": "modelType",
			"timeParameters": {
				"targetTime": "targetTime",
				"timeValue": {
					"hour": 160.00,
					"day": 28.00,
					"week": 4.00,
					"month": 1.00,
					"year": 0.08
				}
			},			
			"periodParametres": {
				"startPeriod": 1,
				"endPeriod": 12
			},
			"fixedDate": []
		},
		// "Additiona":{
		// 	"HourDay":8,
		// 	"DayWeek":5
		// },
		"Discription": null,
		"IncomeArrow": true
	});
}
function generateEconomicRowDataProt() {
	economicRowDataProt.elements.push({
		"SumParameters": {
			"modelType": "modelType",
			"currentyParameters": {
				"targetCurrent": "targetCurrent",
				"curentyValue": {
					"RUB": 1.00,
					"USD": 1.00,
					"EUR": 1.00
				}
			},			
			"fractionParameters": {
				"targetFraction": "targetFraction",
				"targetMassType": "targetMassType",
				"massValue": {
					"ton": 1.00,
					"cwt": 1.00,
					"kg": 1.00
				}
			},
			"percentParameters": {
				"percent": 0,
				"articleNumber": []
			}
			
		},
		"DateParameters": {
			"modelType": "modelType",
			"timeParameters": {
				"targetTime": "targetTime",
				"timeValue": {
					"hour": 160.00,
					"day": 28.00,
					"week": 4.00,
					"month": 1.00,
					"year": 0.08
				}
			},			
			"periodParametres": {
				"startPeriod": 1,
				"endPeriod": 12
			},
			"fixedDate": []
		},
		// "Additiona":{
		// 	"HourDay":8,
		// 	"DayWeek":5
		// },
		"Discription": null,
		"IncomeArrow": true
	});
}
// сворачивание стрелочек
function economicBlockViev(arrowElement, targetBlock) {
	var blocklElement = targetBlock;

	if (blocklElement.style.display != "flex" && blocklElement.style.display != "") {
		blocklElement.style.display = "flex";
		arrowElement.style.transform = "rotate(0deg)";
	}
	else {
		blocklElement.style.display = "none";
		arrowElement.style.transform = "rotate(180deg)";
	}
}

function economicBlockVievs(arrowElement, targetBlock) {
	return function e(){
		var blocklElement = targetBlock;

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
function economicMultipleBlockView(arrowElement, targetBlocks) {
	var blocklElements = targetBlocks;

	for (var i = 0; i < blocklElements.length; i++) {
		if (blocklElements[i].style.display != "flex") {
			blocklElements[i].style.display = "flex";
			arrowElement.style.transform = "rotate(0deg)";
		}
		else {
			blocklElements[i].style.display = "none";
			arrowElement.style.transform = "rotate(180deg)";
		}
	}
}
//view functions
function operatingModeViev(){
	var ok_button = operatingModeBlock.getElementsByClassName('okButton')[0];
	var gearButton = document.getElementById("gearButton");
	var capacityChart = document.getElementById("capacityChart");
	var economicSlider = document.getElementById("economicSlider");

	var operatingModeTitle = operatingModeBlock.getElementsByClassName('inputTitle')[0];
	var operatingRangeTitle = operatingModeBlock.getElementsByClassName('inputTitle')[1];
	var volumeTitle = operatingModeBlock.getElementsByClassName('inputTitle')[1];
	var capacityInfluenceTitle = operatingModeBlock.getElementsByClassName('inputTitle')[2];
	//Процесс установки значений слайдеров(производительность)
	switch(economicType){
		case 'Req':
			inputCapacity.value = Number(pageRow[currentPage-1].requirementsTable.mainFractionData.mass).toFixed(3);
			updateRemovedPercentClone(currentPage); 
			break;
		case 'Prot':
			inputCapacity.value = Number(pageProtocolRow[ProtocolPage-1].requirementsTable.mainFractionData.mass).toFixed(3);
			updateRemovedPercentProtocol(ProtocolPage); 
			break;
		default:
			var pageID = Number(sliderType.split('_')[1]);
			inputCapacity.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.mainFractionData.mass).toFixed(3);		
			updateRemovedPercentSort(pageID);
			break;
	}
	InputToSlider();	
	ChangeSliderColorCapasity(); 
	
	//Процесс установки значений слайдеров(процент прохода)
	switch(economicType){
		case 'Req':
			acceptInputCapacity.value = Number(pageRow[currentPage-1].requirementsTable.suitableFraction.percent_exit).toFixed(3);
			updateRemovedPercentClone(currentPage); 
			break;
		case 'Prot':
			acceptInputCapacity.value = Number(pageProtocolRow[ProtocolPage-1].requirementsTable.suitableFraction.percent_exit).toFixed(3);
			updateRemovedPercentProtocol(ProtocolPage); 
			break;
		default:
			var pageID = Number(sliderType.split('_')[1]);
			acceptInputCapacity.value = Number(pageProtocolRow[ProtocolPage-1].pageSortRow[pageID-1].requirementsTable.suitableFraction.percent_exit).toFixed(3);		
			updateRemovedPercentSort(pageID);
			break;
	}
	InputToAcceptSlider();
	ChangeSliderColorAcceptCapasity();		
	refreshEconomicChart();
	operationGraphReverseVolumeWork();
	switch(economicType){
		case 'Req': 
			updateDataClone(currentPage);
			break;
		case 'Prot': 
			updateDataProtocol(ProtocolPage);
			break;
		default:
			// var pageID = Number(sliderType.split('_')[1]);
			updateDataSort(SortPage);
			break;
	}
	if (ok_button.style.display == "none") {
		ok_button.style.display = "";
		gearButton.style.display = "none"
		
		operatingModeTitle.style.display = "flex";
		operatingRangeTitle.style.display = "block";
		operationDateBlock.style.display = "block";
		operationRangeBlock.style.display = "block";
		capacityChart.style.display = "block";
		economicSlider.style.display = "block";
		
		volumeBlock.style.display = "block";
		volumeTitle.style.display = "flex";
		capacityInfluence.style.display = "block";
		//percentInfluence.style.display = "block";
		capacityInfluenceTitle.style.display = "flex";
		//percentInfluenceTitle.style.display = "flex";
	}
	else {
		ok_button.style.display = "none";
		gearButton.style.display = "block"

		operatingModeTitle.style.display = "none";
		operatingRangeTitle.style.display = "none";
		operationDateBlock.style.display = "none";
		operationRangeBlock.style.display = "none";
		capacityChart.style.display = "none";
		economicSlider.style.display = "none";
		
		volumeBlock.style.display = "none";
		volumeTitle.style.display = "none";
		capacityInfluence.style.display = "none";
		//percentInfluence.style.display = "none";
		capacityInfluenceTitle.style.display = "none";
		//percentInfluenceTitle.style.display = "none";
	}	
	operationGraphPayback();
}
// отображение скрытых блоков строки
function fractionSumParametersView(id_component) {
	EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;
	var economicSumBlock = document.getElementById("economicSumParametr_" + id_component);
	var economSumModelType = document.getElementById("economSumModelType_" + id_component);
	var economSumParamType = document.getElementById("economSumParam_" + id_component);
	var economPercentParam = document.getElementById("economPercentParam_" + id_component);
	var economArticl = document.getElementById("economArticle_" + id_component);

	var economicDateParameter = document.getElementById("economicDateParameter_" + id_component);
	var economDateModelType = document.getElementById("economDateModelType_" + id_component);
	var economDateParam = document.getElementById("economDateParam_" + id_component);
	var economPeriodParam = document.getElementById("economPeriodParam_" + id_component);
	var economFixedDate = document.getElementById("economFixedDate_" + id_component);

	var ok_button = economicSumBlock.getElementsByClassName('okButton')[0];

	var economSumParamTitle = economicSumBlock.getElementsByClassName('inputTitle')[0];
	var economFractionTitle = economicSumBlock.getElementsByClassName('inputTitle')[1];
	var economPercentParamTitle = economicSumBlock.getElementsByClassName('inputTitle')[2];

	var economDateParamTitle = economicDateParameter.getElementsByClassName('inputTitle')[0];
	var economPeriodParamTitle = economicDateParameter.getElementsByClassName('inputTitle')[1];
	var economFixedDateTitle = economicDateParameter.getElementsByClassName('inputTitle')[2];

	if (ok_button.style.display == "none") {
		ok_button.style.display = "";

		economSumModelType.style.display = "block";
		economSumParamType.style.display = "block";
		economPercentParam.style.display = "block";
		economArticl.style.display = "block";

		economSumParamTitle.style.display = (EconomicRowType.elements[id_component-1].SumParameters.modelType == "currentyParameters" || EconomicRowType.elements[id_component-1].SumParameters.modelType == "fractionParameters") ? "flex" : "none";
		economFractionTitle.style.display = EconomicRowType.elements[id_component-1].SumParameters.modelType == "fractionParameters" ? "flex" : "none";
		economPercentParamTitle.style.display = EconomicRowType.elements[id_component-1].SumParameters.modelType == "percentParameters" ? "flex" : "none";

		economDateModelType.style.display = "block";
		economDateParam.style.display = "block";
		economPeriodParam.style.display = "block";
		economFixedDate.style.display = "block";

		economDateParamTitle.style.display = (EconomicRowType.elements[id_component-1].DateParameters.modelType == "calendarTime" || EconomicRowType.elements[id_component-1].DateParameters.modelType == "equipmentOperatingTime") ? "flex" : "none";
		economPeriodParamTitle.style.display = (EconomicRowType.elements[id_component-1].DateParameters.modelType == "calendarTime" || EconomicRowType.elements[id_component-1].DateParameters.modelType == "equipmentOperatingTime") ? "flex" : "none";
		economFixedDateTitle.style.display = EconomicRowType.elements[id_component-1].DateParameters.modelType == "fixedDate" ? "flex" : "none";

	}
	else {
		ok_button.style.display = "none";

		economSumModelType.style.display = "none";
		economSumParamType.style.display = "none";
		economPercentParam.style.display = "none";
		economArticl.style.display = "none";

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
	}
}

//viev sumParamModulViev
function fractionSumModulViw(id_component) {
	var economicSumBlock = document.getElementById("economicSumParametr_" + id_component);

	var economSumParamTitle = economicSumBlock.getElementsByClassName('inputTitle')[0];
	var economSumParamBlock = document.getElementById("economSumParam_" + id_component).children[0];

	if (economSumParamTitle.style.display == "none") {
		economSumParamTitle.style.display = "flex";
		economSumParamBlock.style.display = "flex";
	}
	else {
		economSumParamTitle.style.display = "none";
		economSumParamBlock.style.display = "none";
	}
}
function fractionSumPerUnitModulView(id_component) {
	var economicSumBlock = document.getElementById("economicSumParametr_" + id_component);

	var economSumParamTitle = economicSumBlock.getElementsByClassName('inputTitle')[0];
	var economFractionTitle = economicSumBlock.getElementsByClassName('inputTitle')[1];

	var economSumParamBlock = document.getElementById("economSumParam_" + id_component).children[0];
	var economFractionBlock = document.getElementById("economFraction_" + id_component).children[0];
	var economFractionMassBlock = document.getElementById("economFractionMass_" + id_component).children[0];

	if (economSumParamTitle.style.display == "none") {
		economSumParamTitle.style.display = "flex";
		economFractionTitle.style.display = "flex";

		economSumParamBlock.style.display = "flex";
		economFractionBlock.style.display = "flex";
		economFractionMassBlock.style.display = "flex";
	}
	else {
		economSumParamTitle.style.display = "none";
		economFractionTitle.style.display = "none";

		economSumParamBlock.style.display = "none";
		economFractionBlock.style.display = "none";
		economFractionMassBlock.style.display = "none";
	}
	setupFractionMenuContent(id_component);

}
function fractionSumPercentUnitModulView(id_component) {
	var economicSumBlock = document.getElementById("economicSumParametr_" + id_component);

	var economPercentParamTitle = economicSumBlock.getElementsByClassName('inputTitle')[2];

	var economPercentParamBlock = document.getElementById("economPercentParam_" + id_component).children[0];
	var economArticleBlock = document.getElementById("economArticle_" + id_component).children[0];

	if (economPercentParamTitle.style.display == "none") {
		economPercentParamTitle.style.display = "flex";

		economPercentParamBlock.style.display = "flex";
		economArticleBlock.style.display = "flex";
	}
	else {
		economPercentParamTitle.style.display = "none";

		economPercentParamBlock.style.display = "none";
		economArticleBlock.style.display = "none";
	}
}
//viev dateParamModulViev
function fractionDateParamModulView(id_component) {
	var economicDateParameter = document.getElementById("economicDateParameter_" + id_component);

	var economDateParamTitle = economicDateParameter.getElementsByClassName('inputTitle')[0];
	var economDateParam = document.getElementById("economDateParam_" + id_component).children[0];

	if (economDateParamTitle.style.display == "none") {
		economDateParamTitle.style.display = "flex";
		economDateParam.style.display = "flex";
	}
	else {
		economDateParamTitle.style.display = "none";
		economDateParam.style.display = "none";
	}
}
function fractionPeriodParamModulView(id_component) {
	var economicDateParameter = document.getElementById("economicDateParameter_" + id_component);

	var economPeriodParamTitle = economicDateParameter.getElementsByClassName('inputTitle')[1];
	var economPeriodParam = document.getElementById("economPeriodParam_" + id_component).children[0];

	if (economPeriodParamTitle.style.display == "none") {
		economPeriodParamTitle.style.display = "flex";
		economPeriodParam.style.display = "flex";
	}
	else {
		economPeriodParamTitle.style.display = "none";
		economPeriodParam.style.display = "none";
	}
}
function fractionFixedDateModulView(id_component) {
	var economicDateParameter = document.getElementById("economicDateParameter_" + id_component);

	var economFixedDateTitle = economicDateParameter.getElementsByClassName('inputTitle')[2];
	var economFixedDate = document.getElementById("economFixedDate_" + id_component).children[0];

	if (economFixedDateTitle.style.display == "none") {
		economFixedDateTitle.style.display = "flex";
		economFixedDate.style.display = "flex";
	}
	else {
		economFixedDateTitle.style.display = "none";
		economFixedDate.style.display = "none";
	}
}

//Функция установки главного элемента(закрашенного) в блоке
function setupMainElenetInBlock(inputOptions) {
	return function e() {
		var targetBlock = inputOptions.parentNode.parentNode.children;
		if (inputOptions.style.backgroundColor != "") {
			for (var i = 0; i < targetBlock.length; i++) {
				targetBlock[i].style.display = "";
				inputOptions.style.backgroundColor = "";
			}
		}
		else {
			for (var i = 0; i < targetBlock.length; i++) {
				targetBlock[i].style.display = "none";
			}

			this.parentNode.style.display = "";
			inputOptions.style.backgroundColor = "#ffb23f";
		}
	}
}
//установка функций для экономической модели
function setupEconomicFunction(component) {
	var id_component = Number(component.id.split("_")[1]);
	EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;

	//Указатель дохода или раскода
	var incomeArrow = component.getElementsByClassName("checkBox-custom")[0];
	incomeArrow.addEventListener("click", function () {
		EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;
		EconomicRowType.elements[id_component-1].IncomeArrow = this.checked;
		refreshEconomicChart();
	});
	/*START Discription Classifier*/
	var economicResultBlock = document.getElementById("economicResultBlock_"+id_component);
	var economicInputResult = document.getElementById("economicInputResult_"+id_component);
	var econimicInput = document.getElementById("economicInput_"+id_component);
	
	var economicControlButtonHide = economicResultBlock.getElementsByClassName('okButton')[0].children[0];
	var addOption = econimicInput.parentNode.children[1];
	
	econimicInput.addEventListener("focus", ShowEconomicDropdown(id_component));
	econimicInput.addEventListener("input", StartEconomicInputListeners(id_component));
	
	economicControlButtonHide.addEventListener("click", HideEconomicDropdown(id_component));
	addOption.addEventListener("click",function(){
		addResultEconomicCustomOption(id_component);
	});
	
	if(economicInputResult.children.length != 0){
		economicInputResult.children[0].addEventListener("click", function(){
			removeEconomicClassifier(id_component);
			this.remove();
			economicrefreshID();
			StartEconomicInput(id_component);
			refreshEconomicChart();
		});
	}
	
	/*END Discription Classifier*/
	
	/*START SumParameters*/
	//блоки компонента
	var economicSumBlock = document.getElementById("economicSumParametr_" + id_component);
	var economSumModelType = document.getElementById("economSumModelType_" + id_component);
	var economSumParam = document.getElementById("economSumParam_" + id_component);
	var economFraction = document.getElementById("economFraction_" + id_component);
	var economFractionMass = document.getElementById("economFractionMass_" + id_component);	

	//Визуальный функционал.
	var ok_button = economicSumBlock.getElementsByClassName('okButton')[0];
	var controlInput = economicSumBlock.getElementsByClassName('controlInput')[0];
	ok_button.children[0].addEventListener("click", function () {
		fractionSumParametersView(id_component);
		setupSumParametrText(id_component);
		refreshEconomicChart();
	});
	controlInput.children[0].addEventListener("click", function () {
		economicHideAll();
		fractionSumParametersView(id_component);
		setupSumParametrText(id_component);
		refreshEconomicChart();
	});
	//Скролл Блоки
	var scrollBlockSumModelType = economSumModelType.children[0].children[0].children;
	var scrollBlockSumParam = economSumParam.children[0].children[0].children;
	var scrollBlockFraction = economFraction.children[0].children[0].children;
	var scrollBlockFractionMass = economFractionMass.children[0].children[0].children;

	//Добавление функций расскрывание модулей
	scrollBlockSumModelType[0].getElementsByClassName('inputOption')[0].addEventListener('click', function () {
		EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;
		fractionSumModulViw(id_component);
		//временные решения
		EconomicRowType.elements[id_component-1].SumParameters.modelType = EconomicRowType.elements[id_component-1].SumParameters.modelType != "currentyParameters" ? "currentyParameters" : "modelType";
		//Автоустановка дефолтных параметров валюты
		if (EconomicRowType.elements[id_component-1].SumParameters.currentyParameters.targetCurrent == "targetCurrent") {
			scrollBlockSumParam[0].getElementsByClassName('inputOption')[0].click();
		}
		// refreshEconomicChart();
	});
	scrollBlockSumModelType[1].getElementsByClassName('inputOption')[0].addEventListener('click', function () {
		EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;
		fractionSumPerUnitModulView(id_component);
		//временные решения
		EconomicRowType.elements[id_component-1].SumParameters.modelType = EconomicRowType.elements[id_component-1].SumParameters.modelType != "fractionParameters" ? "fractionParameters" : "modelType";
		//Автоустановка дефолтных параметров валюты
		if (EconomicRowType.elements[id_component-1].SumParameters.currentyParameters.targetCurrent == "targetCurrent") {
			scrollBlockSumParam[0].getElementsByClassName('inputOption')[0].click();
		}
		//Автоустановка дефолтных параметров массы
		if (EconomicRowType.elements[id_component-1].SumParameters.fractionParameters.targetMassType == "targetMassType") {
			scrollBlockFractionMass[0].getElementsByClassName('inputOption')[0].click();
		}
		refreshEconomicChart();
	});
	scrollBlockSumModelType[2].getElementsByClassName('inputOption')[0].addEventListener('click', function () {
		EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;
		fractionSumPercentUnitModulView(id_component);
		//временные решения
		EconomicRowType.elements[id_component-1].SumParameters.modelType = EconomicRowType.elements[id_component-1].SumParameters.modelType != "percentParameters" ? "percentParameters" : "modelType";
		refreshEconomicChart();
	});

	//Учёт валют (временное решение)
	scrollBlockSumParam[0].getElementsByClassName('inputElement')[0].addEventListener('change', function () {
		EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;
		calculateCalendarPrice(this);
		this.value = Number(this.value) < 0 ? "0.00" : this.value;
		EconomicRowType.elements[id_component-1].SumParameters.currentyParameters.curentyValue.RUB = Number(this.value).toFixed(2);
		this.value = Number(this.value).toFixed(3);
		refreshEconomicChart();
	});
	scrollBlockSumParam[1].getElementsByClassName('inputElement')[0].addEventListener('change', function () {
		EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;
		calculateCalendarPrice(this);
		this.value = Number(this.value) < 0 ? "0.00" : this.value;
		EconomicRowType.elements[id_component-1].SumParameters.currentyParameters.curentyValue.USD = Number(this.value).toFixed(2);
		this.value = Number(this.value).toFixed(3);
		refreshEconomicChart();
	});
	scrollBlockSumParam[2].getElementsByClassName('inputElement')[0].addEventListener('change', function () {
		EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;
		calculateCalendarPrice(this);
		this.value = Number(this.value) < 0 ? "0.00" : this.value;
		EconomicRowType.elements[id_component-1].SumParameters.currentyParameters.curentyValue.EUR = Number(this.value).toFixed(2);
		this.value = Number(this.value).toFixed(3);
		refreshEconomicChart();
	});
	//Учёт масс
	scrollBlockFractionMass[0].getElementsByClassName('inputElement')[0].addEventListener('change', function () {
		EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;
		calculateCalendarMass(this);
		this.value = Number(this.value) < 0 ? "0.00" : this.value;
		EconomicRowType.elements[id_component-1].SumParameters.fractionParameters.massValue.ton = Number(this.value).toFixed(3);
		this.value = Number(this.value).toFixed(3);
		refreshEconomicChart();
	});
	scrollBlockFractionMass[1].getElementsByClassName('inputElement')[0].addEventListener('change', function () {
		EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;
		calculateCalendarMass(this);
		this.value = Number(this.value) < 0 ? "0.00" : this.value;
		EconomicRowType.elements[id_component-1].SumParameters.fractionParameters.massValue.cwt = Number(this.value).toFixed(3);
		this.value = Number(this.value).toFixed(3);
		refreshEconomicChart();
	});
	scrollBlockFractionMass[2].getElementsByClassName('inputElement')[0].addEventListener('change', function () {
		EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;
		calculateCalendarMass(this);
		this.value = Number(this.value) < 0 ? "0.00" : this.value;
		EconomicRowType.elements[id_component-1].SumParameters.fractionParameters.massValue.kg = Number(this.value).toFixed(3);
		this.value = Number(this.value).toFixed(3);
		refreshEconomicChart();
	});

	//Функции визуальной окраски
	for (var i = 0; i < scrollBlockSumModelType.length; i++) {
		var inputOption = scrollBlockSumModelType[i].getElementsByClassName('inputOption')[0];
		inputOption.addEventListener("click", setupMainElenetInBlock(inputOption));
	}
	for (var i = 0; i < scrollBlockSumParam.length; i++) {
		var inputOption = scrollBlockSumParam[i].getElementsByClassName('inputOption')[0];
		inputOption.addEventListener("click", setupMainElenetInBlock(inputOption));
		inputOption.addEventListener("click", setupTargetCurrenty(i, id_component));
	}
	for (var i = 0; i < scrollBlockFraction.length; i++) {
		var inputOption = scrollBlockFraction[i].getElementsByClassName('inputOption')[0];
		inputOption.addEventListener("click", setupMainElenetInBlock(inputOption));
		inputOption.addEventListener("click", setupTargetFraction(i, id_component));
	}
	for (var i = 0; i < scrollBlockFractionMass.length; i++) {
		var inputOption = scrollBlockFractionMass[i].getElementsByClassName('inputOption')[0];
		inputOption.addEventListener("click", setupMainElenetInBlock(inputOption));
		inputOption.addEventListener("click", setupMassType(i, id_component));
	}
	/*END SumParameters*/

	/*START DateParameters*/
	//блоки компонента
	var economDateModelType = document.getElementById("economDateModelType_" + id_component);
	var economDateParam = document.getElementById("economDateParam_" + id_component);
	var economPeriodParam = document.getElementById("economPeriodParam_" + id_component);
	var economFixedDate = document.getElementById("economFixedDate_" + id_component);

	//Скролл блоки
	var scrollBlockDateModelType = economDateModelType.children[0].children[0].children;
	var scrollBlockDateParam = economDateParam.children[0].children[0].children;
	var scrollBlockPeriodParam = economPeriodParam.children[0].children[0].children;
	var scrollBlockFixedDate = economFixedDate.children[0].children[0].children;
	var economPeriodParam = document.getElementById("economPeriodParam_" + id_component);
	var scrollBlockPeriodParam = economPeriodParam.children[0].children[0].children;

	//Добавление функций расскрывание модулей
	scrollBlockDateModelType[0].getElementsByClassName('inputOption')[0].addEventListener('click', function () {
		EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;
		fractionDateParamModulView(id_component);
		fractionPeriodParamModulView(id_component);
		//временное решение
		EconomicRowType.elements[id_component-1].DateParameters.modelType = EconomicRowType.elements[id_component-1].DateParameters.modelType != "calendarTime" ? "calendarTime" : "modelType";
		scrollBlockDateParam[3].getElementsByClassName('inputOption')[0].click();
	});
	scrollBlockDateModelType[1].getElementsByClassName('inputOption')[0].addEventListener('click', function () {
		EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;
		fractionDateParamModulView(id_component);
		fractionPeriodParamModulView(id_component);
		//временное решение
		EconomicRowType.elements[id_component-1].DateParameters.modelType = EconomicRowType.elements[id_component-1].DateParameters.modelType != "equipmentOperatingTime" ? "equipmentOperatingTime" : "modelType";
		scrollBlockDateParam[0].getElementsByClassName('inputOption')[0].click();
	});
	scrollBlockDateModelType[2].getElementsByClassName('inputOption')[0].addEventListener('click', function () {
		EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;
		fractionFixedDateModulView(id_component);
		//временное решение
		EconomicRowType.elements[id_component-1].DateParameters.modelType = EconomicRowType.elements[id_component-1].DateParameters.modelType != "fixedDate" ? "fixedDate" : "modelType";
	});

	//Учёт параметров времени
	scrollBlockDateParam[0].getElementsByClassName('inputElement')[0].addEventListener('change', function () {
		EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;
		calculateCalendar(this);
		this.value = Number(this.value) < 0 ? "0.000" : this.value;
		EconomicRowType.elements[id_component-1].DateParameters.timeParameters.timeValue.hour = Number(this.value).toFixed(2);
		this.value = Number(this.value).toFixed(1);
		refreshEconomicChart();
	});
	scrollBlockDateParam[1].getElementsByClassName('inputElement')[0].addEventListener('change', function () {
		EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;
		calculateCalendar(this);
		this.value = Number(this.value) < 0 ? "0.00" : this.value;
		EconomicRowType.elements[id_component-1].DateParameters.timeParameters.timeValue.day = Number(this.value).toFixed(2);
		this.value = Number(this.value).toFixed(1);
		refreshEconomicChart();
	});
	scrollBlockDateParam[2].getElementsByClassName('inputElement')[0].addEventListener('change', function () {
		EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;
		calculateCalendar(this);
		this.value = Number(this.value) < 0 ? "0.00" : this.value;
		EconomicRowType.elements[id_component-1].DateParameters.timeParameters.timeValue.week = Number(this.value).toFixed(2);
		this.value = Number(this.value).toFixed(1);
		refreshEconomicChart();
	});
	scrollBlockDateParam[3].getElementsByClassName('inputElement')[0].addEventListener('change', function () {
		EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;
		calculateCalendar(this);
		this.value = Number(this.value) < 0 ? "0.00" : this.value;
		EconomicRowType.elements[id_component-1].DateParameters.timeParameters.timeValue.month = Number(this.value).toFixed(2);
		this.value = Number(this.value).toFixed(1);
		refreshEconomicChart();
	});
	scrollBlockDateParam[4].getElementsByClassName('inputElement')[0].addEventListener('change', function () {
		EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;
		calculateCalendar(this);
		this.value = Number(this.value) < 0 ? "0.00" : this.value;
		EconomicRowType.elements[id_component-1].DateParameters.timeParameters.timeValue.year = Number(this.value).toFixed(2);
		this.value = Number(this.value).toFixed(1);
		refreshEconomicChart();
	});
	//Учёт параметров периода действия	
	scrollBlockPeriodParam[0].getElementsByClassName('inputElement')[0].addEventListener('change', function () {
		EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;
		this.value = Number(this.value) < 0 ? "0.00" : this.value;
		EconomicRowType.elements[id_component-1].DateParameters.periodParametres.startPeriod = Number(this.value).toFixed(0);
		this.value = Number(this.value).toFixed(0);
		refreshEconomicChart();
	});
	scrollBlockPeriodParam[1].getElementsByClassName('inputElement')[0].addEventListener('change', function () {
		EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;
		this.value = Number(this.value) < 0 ? "0.00" : this.value;
		EconomicRowType.elements[id_component-1].DateParameters.periodParametres.endPeriod = Number(this.value).toFixed(0);
		this.value = Number(this.value).toFixed(0);
		refreshEconomicChart();
	});

	//Функции визуальной окраски
	for (var i = 0; i < scrollBlockDateModelType.length; i++) {
		var inputOption = scrollBlockDateModelType[i].getElementsByClassName('inputOption')[0];
		inputOption.addEventListener("click", setupMainElenetInBlock(inputOption));
	}
	for (var i = 0; i < scrollBlockDateParam.length; i++) {
		var inputOption = scrollBlockDateParam[i].getElementsByClassName('inputOption')[0];
		inputOption.addEventListener("click", setupMainElenetInBlock(inputOption));
		inputOption.addEventListener("click", setupTargetTime(i, id_component));
	}
	// for (var i = 0; i < scrollBlockFixedDate.length; i++) {
	// 	var inputOption = scrollBlockFixedDate[i].getElementsByClassName('inputOption')[0];
	// }
	/*END DateParameters*/

	//* Start PercentParam*//
	var economPercentParam = document.getElementById('economPercentParam_' + id_component);
	var percentBlock = economPercentParam.children[0].children[0].children[0].children[0];
	percentBlock.addEventListener("change", function (){
		EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;
		EconomicRowType.elements[id_component-1].SumParameters.percentParameters.percent = Number(percentBlock.value);
	});
}
//Функции установки значений для Параметров суммы
function setupTargetCurrenty(id_current, id_row) {
	return function e() {
		EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;
		switch (id_current) {
			case 0:
				EconomicRowType.elements[id_row-1].SumParameters.currentyParameters.targetCurrent = EconomicRowType.elements[id_row-1].SumParameters.currentyParameters.targetCurrent == "targetCurrent" ? "RUB" : "targetCurrent";
				break;
			case 1:
				EconomicRowType.elements[id_row-1].SumParameters.currentyParameters.targetCurrent = EconomicRowType.elements[id_row-1].SumParameters.currentyParameters.targetCurrent == "targetCurrent" ? "USD" : "targetCurrent";
				break;
			case 2:
				EconomicRowType.elements[id_row-1].SumParameters.currentyParameters.targetCurrent = EconomicRowType.elements[id_row-1].SumParameters.currentyParameters.targetCurrent == "targetCurrent" ? "EUR" : "targetCurrent";
				break;
		}
	}
}
function setupTargetFraction(id_fraction, id_row) {
	return function e() {
		EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;
		switch (Number(id_fraction-1)) {
			case 0:
				EconomicRowType.elements[id_row-1].SumParameters.fractionParameters.targetFraction = EconomicRowType.elements[id_row-1].SumParameters.fractionParameters.targetFraction == "targetFraction" ? "Исходный продукт" : "targetFraction";
				break;
			case 1:
				EconomicRowType.elements[id_row-1].SumParameters.fractionParameters.targetFraction = EconomicRowType.elements[id_row-1].SumParameters.fractionParameters.targetFraction == "targetFraction" ? "Проход" : "targetFraction";
				break;
			case 2:
				EconomicRowType.elements[id_row-1].SumParameters.fractionParameters.targetFraction = EconomicRowType.elements[id_row-1].SumParameters.fractionParameters.targetFraction == "targetFraction" ? "Отбой" : "targetFraction";
				break;
		}
	}
}
function setupMassType(id_massType, id_row) {
	return function e() {
		EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;
		switch (id_massType) {
			case 0:
				EconomicRowType.elements[id_row-1].SumParameters.fractionParameters.targetMassType = EconomicRowType.elements[id_row-1].SumParameters.fractionParameters.targetMassType == "targetMassType" ? "ton" : "targetMassType";
				break;
			case 1:
				EconomicRowType.elements[id_row-1].SumParameters.fractionParameters.targetMassType = EconomicRowType.elements[id_row-1].SumParameters.fractionParameters.targetMassType == "targetMassType" ? "cwt" : "targetMassType";
				break;
			case 2:
				EconomicRowType.elements[id_row-1].SumParameters.fractionParameters.targetMassType = EconomicRowType.elements[id_row-1].SumParameters.fractionParameters.targetMassType == "targetMassType" ? "kg" : "targetMassType";
				break;
		}
	}
}
//Функции установки значений для Параметров времени
function setupTargetTime(id_timeType, id_row) {
	return function e() {
		EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;
		switch (id_timeType) {
			case 0:
				EconomicRowType.elements[id_row-1].DateParameters.timeParameters.targetTime = EconomicRowType.elements[id_row-1].DateParameters.timeParameters.targetTime == "targetTime" ? "hour" : "targetTime";
				break;
			case 1:
				EconomicRowType.elements[id_row-1].DateParameters.timeParameters.targetTime = EconomicRowType.elements[id_row-1].DateParameters.timeParameters.targetTime == "targetTime" ? "day" : "targetTime";
				break;
			case 2:
				EconomicRowType.elements[id_row-1].DateParameters.timeParameters.targetTime = EconomicRowType.elements[id_row-1].DateParameters.timeParameters.targetTime == "targetTime" ? "week" : "targetTime";
				break;
			case 3:
				EconomicRowType.elements[id_row-1].DateParameters.timeParameters.targetTime = EconomicRowType.elements[id_row-1].DateParameters.timeParameters.targetTime == "targetTime" ? "month" : "targetTime";
				break;
			case 4:
				EconomicRowType.elements[id_row-1].DateParameters.timeParameters.targetTime = EconomicRowType.elements[id_row-1].DateParameters.timeParameters.targetTime == "targetTime" ? "year" : "targetTime";
				break;
		}
	}
}
//Вывод текста параметров суммы
function setupSumParametrText(id_component){
	EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;
	
	var economicSumBlock = document.getElementById("economicSumParametr_" + id_component);
	var controlInput = economicSumBlock.getElementsByClassName('controlInput')[0].children[0];

	var text = Translate[0].Econom[24][GlobalLang];
	// id_component = id_component-1;
	//Указание валюты
	if (EconomicRowType.elements[id_component-1].SumParameters.modelType == "currentyParameters" || EconomicRowType.elements[id_component-1].SumParameters.modelType == "fractionParameters") {
		switch (EconomicRowType.elements[id_component-1].SumParameters.currentyParameters.targetCurrent) {
			case "RUB":
				var text = EconomicRowType.elements[id_component-1].SumParameters.currentyParameters.curentyValue.RUB + ' ' + Translate[0].Econom[27][GlobalLang];
				break;
			case "USD":
				var text = EconomicRowType.elements[id_component-1].SumParameters.currentyParameters.curentyValue.USD + ' ' + Translate[0].Econom[28][GlobalLang];
				break;
			case "EUR":
				var text = EconomicRowType.elements[id_component-1].SumParameters.currentyParameters.curentyValue.EUR + ' ' + Translate[0].Econom[29][GlobalLang];
				break;
			case "targetCurrent":
				var text = Translate[0].Econom[53][GlobalLang];
				break;
		}
	}
	//Указание масс Исходного продукта каждые
	if (EconomicRowType.elements[id_component-1].SumParameters.modelType == "fractionParameters"){
		switch (EconomicRowType.elements[id_component-1].SumParameters.fractionParameters.targetMassType) {
			case "ton":
				text += text !=  ' ' + Translate[0].Econom[53][GlobalLang] ?   ' ' + Translate[0].Econom[54][GlobalLang]  + EconomicRowType.elements[id_component-1].SumParameters.fractionParameters.massValue.ton + ' ' + Translate[0].Econom[35][GlobalLang] + ' ' : "";
				break;
			case "cwt":
				text += text !=  ' ' + Translate[0].Econom[53][GlobalLang] ?  ' ' + Translate[0].Econom[54][GlobalLang] + EconomicRowType.elements[id_component-1].SumParameters.fractionParameters.massValue.cwt + ' ' + Translate[0].Econom[36][GlobalLang] + ' ' : "";
				break;
			case "kg":
				text += text !=  ' ' + Translate[0].Econom[53][GlobalLang] ?  ' ' + Translate[0].Econom[54][GlobalLang] + EconomicRowType.elements[id_component-1].SumParameters.fractionParameters.massValue.kg + ' ' + Translate[0].Econom[37][GlobalLang] + ' ' : "";
				break;
		}
	}
	//Дописываем фракцию
	if (EconomicRowType.elements[id_component-1].SumParameters.fractionParameters.targetFraction != "targetFraction" && EconomicRowType.elements[id_component-1].SumParameters.modelType == "fractionParameters")
		text += text !=  ' ' + Translate[0].Econom[53][GlobalLang] ? "(" + EconomicRowType.elements[id_component-1].SumParameters.fractionParameters.targetFraction + ")" : "";
	
	if(EconomicRowType.elements[id_component-1].SumParameters.modelType == "percentParameters" && EconomicRowType.elements[id_component-1].DateParameters.modelType != "modelType"){
		text = '';
		for(var k = 0; k < EconomicRowType.elements[id_component-1].SumParameters.percentParameters.articleNumber.length; k++){
			text += EconomicRowType.elements[id_component-1].SumParameters.percentParameters.articleNumber[k];
			text += ', '
		}
		text +=  ' ' + Translate[0].Econom[55][GlobalLang];
		
	}
	//Дописываем время
	if (EconomicRowType.elements[id_component-1].DateParameters.modelType != "fixedDate" && EconomicRowType.elements[id_component-1].DateParameters.modelType != "modelType") {
		var work = EconomicRowType.elements[id_component-1].DateParameters.modelType == "equipmentOperatingTime" ? ' ' + Translate[0].Econom[56][GlobalLang] + ' ':"";
		var forOrEach = EconomicRowType.elements[id_component-1].DateParameters.modelType == "fractionParameters" ?  ' ' + Translate[0].Econom[56][GlobalLang] + ' ' :  ' ' +  ' ' + Translate[0].Econom[57][GlobalLang];//проверка на выбор варианта масс
		text += EconomicRowType.elements[id_component-1].DateParameters.modelType == "calendarTime" ?  ' ' + Translate[0].Econom[56][GlobalLang] + ' ' : forOrEach;//Календарное время
		switch (EconomicRowType.elements[id_component-1].DateParameters.timeParameters.targetTime){
			case "hour":				
				text += EconomicRowType.elements[id_component-1].DateParameters.timeParameters.timeValue.hour +  ' ' + Translate[0].Econom[59][GlobalLang] + work +  ' ' + Translate[0].Econom[62][GlobalLang]
					+ EconomicRowType.elements[id_component-1].DateParameters.periodParametres.startPeriod +  ' ' + Translate[0].Econom[63][GlobalLang] + EconomicRowType.elements[id_component-1].DateParameters.periodParametres.endPeriod + ")";
				break;
			case "day":
				text += EconomicRowType.elements[id_component-1].DateParameters.timeParameters.timeValue.day +  ' ' + Translate[0].Econom[60][GlobalLang] + work +  ' ' + Translate[0].Econom[62][GlobalLang]
					+ EconomicRowType.elements[id_component-1].DateParameters.periodParametres.startPeriod +  ' ' + Translate[0].Econom[63][GlobalLang] + EconomicRowType.elements[id_component-1].DateParameters.periodParametres.endPeriod + ")";
				break;
			case "week":
				text += EconomicRowType.elements[id_component-1].DateParameters.timeParameters.timeValue.week +  ' ' + Translate[0].Econom[61][GlobalLang] + work +  ' ' + Translate[0].Econom[62][GlobalLang]
					+ EconomicRowType.elements[id_component-1].DateParameters.periodParametres.startPeriod +  ' ' + Translate[0].Econom[63][GlobalLang] + EconomicRowType.elements[id_component-1].DateParameters.periodParametres.endPeriod + ")";
				break;
			case "month":
				var month;
				if (Number(EconomicRowType.elements[id_component-1].DateParameters.timeParameters.timeValue.month) == 1)
					month =  ' ' + Translate[0].Econom[64][GlobalLang] + work +  ' ' + Translate[0].Econom[62][GlobalLang];
				else if (Number(EconomicRowType.elements[id_component-1].DateParameters.timeParameters.timeValue.month) <= 4)
					month =  ' ' + Translate[0].Econom[65][GlobalLang] + work +  ' ' + Translate[0].Econom[62][GlobalLang];
				else
					month =  ' ' + Translate[0].Econom[66][GlobalLang] + work +  ' ' + Translate[0].Econom[62][GlobalLang];
				text += EconomicRowType.elements[id_component-1].DateParameters.timeParameters.timeValue.month + month
					+ EconomicRowType.elements[id_component-1].DateParameters.periodParametres.startPeriod +  ' ' + Translate[0].Econom[63][GlobalLang] + EconomicRowType.elements[id_component-1].DateParameters.periodParametres.endPeriod + ")";
				break;
			case "year":
				text += EconomicRowType.elements[id_component-1-1].DateParameters.timeParameters.timeValue.year +  ' ' + Translate[0].Econom[67][GlobalLang] + work +  ' ' + Translate[0].Econom[62][GlobalLang]
					+ EconomicRowType.elements[id_component-1].DateParameters.periodParametres.startPeriod +  ' ' + Translate[0].Econom[63][GlobalLang] + EconomicRowType.elements[id_component-1].DateParameters.periodParametres.endPeriod + ")";
				break;
			case "targetTime":
				text +=  ' ' + Translate[0].Econom[53][GlobalLang];
				break;
		}
	}
	if(EconomicRowType.elements[id_component-1].DateParameters.modelType == "fixedDate" && EconomicRowType.elements[id_component-1].DateParameters.modelType != "modelType"){
		var work = EconomicRowType.elements[id_component-1].DateParameters.modelType == "equipmentOperatingTime" ?  ' ' + Translate[0].Econom[56][GlobalLang] + ' ':"";
		var forOrEach = EconomicRowType.elements[id_component-1].SumParameters.modelType == "fractionParameters" ?  ' ' + Translate[0].Econom[57][GlobalLang] :  ' ' + Translate[0].Econom[58][GlobalLang];//проверка на выбор варианта масс
		text += EconomicRowType.elements[id_component-1].DateParameters.modelType == "calendarTime" ? forOrEach :  ' ' + Translate[0].Econom[69][GlobalLang];//Календарное время
		text += EconomicRowType.elements[id_component-1].DateParameters.fixedDate +  ' ' + Translate[0].Econom[68][GlobalLang];
	} 
	

	controlInput.textContent = text;
}

// стартовые значения operatingModeGraphData
function setupOperationGraph() {
	var hour_in_day = operationDateBlock.getElementsByClassName('inputElement')[0];
	var day_in_week = operationDateBlock.getElementsByClassName('inputElement')[1];
	var month_in_year = operationDateBlock.getElementsByClassName('inputElement')[2];

	var calculation_range = operationRangeBlock.getElementsByClassName('inputElement')[0];
	
	var volumeForPeriodBlock = volumeBlock.getElementsByClassName('inputElement')[0];
	var startMonthBlock = volumeBlock.getElementsByClassName('inputElement')[1];
	var endMonthBlock = volumeBlock.getElementsByClassName('inputElement')[2];
	
	
	//Базовая установка значений
	hour_in_day.value = operatingModeGraphData.hour_in_day;
	day_in_week.value = operatingModeGraphData.day_in_week;
	month_in_year.value = operatingModeGraphData.month_in_year;
	calculation_range.value = operatingModeGraphData.calculation_range;
	
	//Привязка функций
	hour_in_day.addEventListener('change', function () {
		hour_in_day.value = hour_in_day.value < 24 && hour_in_day.value > 0 ? hour_in_day.value : 24;
		updateHour(hour_in_day);
		updateOperationGraph();
		operationGraphReverseVolumeWork();
	});
	day_in_week.addEventListener('change', function () {
		day_in_week.value = day_in_week.value < 7 && day_in_week.value > 0 ? day_in_week.value : 7;
		updateWeek(day_in_week);
		updateOperationGraph();
		operationGraphReverseVolumeWork();
	});
	month_in_year.addEventListener('change', function () {
		month_in_year.value = month_in_year.value < 12 && month_in_year.value > 0 ? month_in_year.value : 12;
		updateOperationGraph();
		operationGraphReverseVolumeWork();
	});
	calculation_range.addEventListener('change', function () {
		calculation_range.value = calculation_range.value > 6 ? calculation_range.value : 6;
		calculation_range.value = calculation_range.value > 36 ? 36 : calculation_range.value;
		updateOperationGraph();
		operationGraphReverseVolumeWork();
	});
	volumeForPeriodBlock.addEventListener('change', operationGraphVolumeWork);
	startMonthBlock.addEventListener('change', operationGraphReverseVolumeWork);
	endMonthBlock.addEventListener('change', operationGraphReverseVolumeWork);
	
	//апдейт
	updateOperationGraph();
}
//функция определения срока окупаемости в экономической модели
function operationGraphPayback(){
	operatingModeGraphData.month_payback = 0;
	EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;

	if(EconomicRowType.elements.length > 0){
		for(var i = 1; i <= economicChart.data.labels.length; i++){
			var expense = economicChart.data.datasets[0].data[i-1];
			var income = economicChart.data.datasets[1].data[i-1];
			if(income >= expense){
				operatingModeGraphData.month_payback = i;
				operationRangeBlock.getElementsByClassName('inputElement')[1].value = operatingModeGraphData.month_payback;
				break;
			}
		}
	}
}
//функция определения объемов за период
function operationGraphVolumeWork(){
	var volumeForPeriodBlock = volumeBlock.getElementsByClassName('inputElement')[0];
	var startMonthBlock = volumeBlock.getElementsByClassName('inputElement')[1];
	var endMonthBlock = volumeBlock.getElementsByClassName('inputElement')[2];
	
	//установка данных
	operatingModeGraphData.volumeWork.volume = Number(volumeForPeriodBlock.value);
	operatingModeGraphData.volumeWork.monthStart = Number(startMonthBlock.value);
	operatingModeGraphData.volumeWork.monthEnd = Number(endMonthBlock.value);
	
	//Расчеты
	if(operatingModeGraphData.volumeWork.volume > 0){
		var hour = operatingModeGraphData.hour_in_day;
		var day = operatingModeGraphData.day_in_week;
		var monthStart = operatingModeGraphData.volumeWork.monthStart;
		var monthEnd = operatingModeGraphData.volumeWork.monthEnd;
		
		var workHour = Number(hour*day*4*(monthEnd-monthStart+1));
		var volumePerHour = operatingModeGraphData.volumeWork.volume / workHour;
		
		inputCapacity.value = volumePerHour;
		volumeForPeriodBlock.value = Number(operatingModeGraphData.volumeWork.volume).toFixed(3);
		InputToSlider();
		updateRemovedPercentClone(currentPage); 
		ChangeSliderColorCapasity(); 
		refreshEconomicChart();
		updateDataClone(currentPage);
		
	}
	updateOperationGraph();
}
function operationGraphReverseVolumeWork(){
	var volumeForPeriodBlock = volumeBlock.getElementsByClassName('inputElement')[0];
	var startMonthBlock = volumeBlock.getElementsByClassName('inputElement')[1];
	var endMonthBlock = volumeBlock.getElementsByClassName('inputElement')[2];
	
	//установка данных
	operatingModeGraphData.volumeWork.monthStart = Number(startMonthBlock.value);
	operatingModeGraphData.volumeWork.monthEnd = Number(endMonthBlock.value);
	
	//Расчеты 
	var hour = operatingModeGraphData.hour_in_day;
	var day = operatingModeGraphData.day_in_week;
	var monthStart = operatingModeGraphData.volumeWork.monthStart;
	var monthEnd = operatingModeGraphData.volumeWork.monthEnd;
	
	var workHour = Number(hour*day*4*(monthEnd-monthStart+1));
	switch(economicType){
		case 'Req':
			volumeForPeriodBlock.value = Number(pageRow[currentPage-1].requirementsTable.mainFractionData.mass * workHour).toFixed(3);
			break;
		case 'Prot':
			volumeForPeriodBlock.value = Number(pageProtocolRow[ProtocolPage-1].requirementsTable.mainFractionData.mass * workHour).toFixed(3);
			break;
	}	
	operatingModeGraphData.volumeWork.volume = Number(volumeForPeriodBlock.value);	
	updateOperationGraph();
}
//растчет баланса и показателей руб/тонна
function operatingGraphIdicatorRubTon(){
	var balanceBlock = capacityInfluence.getElementsByClassName('inputElement')[3];
	var incomeBlock = capacityInfluence.getElementsByClassName('inputElement')[4];
	var expenseBlock = capacityInfluence.getElementsByClassName('inputElement')[5];
	
	var monthCount = Number(operatingModeGraphData.calculation_range - operatingModeGraphData.month_payback);
	//расходы
	var expenseStart = economicChart.data.datasets[0].data[operatingModeGraphData.month_payback];
	var expenseEnd = economicChart.data.datasets[0].data[operatingModeGraphData.calculation_range-1];
	var expensePerMonth = (expenseEnd - expenseStart) / monthCount;
	//доходы
	var incomeStart = economicChart.data.datasets[1].data[operatingModeGraphData.month_payback];
	var incomeEnd = economicChart.data.datasets[1].data[operatingModeGraphData.calculation_range-1];
	var incomePerMonth = (incomeEnd - incomeStart) / monthCount;
	//тонны
	var tonPerMonth = operatingModeGraphData.volumeWork.volume / (operatingModeGraphData.volumeWork.monthEnd - operatingModeGraphData.volumeWork.monthStart + 1);
	
	//основные расчеты
	operatingModeGraphData.indicators_rub_per_ton.expense = Number(expensePerMonth / tonPerMonth * 1000).toFixed(2);
	operatingModeGraphData.indicators_rub_per_ton.income = Number(incomePerMonth / tonPerMonth * 1000).toFixed(2);
	operatingModeGraphData.indicators_rub_per_ton.balance = Number(operatingModeGraphData.indicators_rub_per_ton.income - operatingModeGraphData.indicators_rub_per_ton.expense).toFixed(2);
	
	//Расстановка значений
	balanceBlock.value = operatingModeGraphData.indicators_rub_per_ton.balance >= 0 ? "+ " + Math.abs(operatingModeGraphData.indicators_rub_per_ton.balance) : "- " + Math.abs(operatingModeGraphData.indicators_rub_per_ton.balance);
	incomeBlock.value = operatingModeGraphData.indicators_rub_per_ton.income >= 0 ? "+ " + Math.abs(operatingModeGraphData.indicators_rub_per_ton.income) : "- " + Math.abs(operatingModeGraphData.indicators_rub_per_ton.income);
	expenseBlock.value = operatingModeGraphData.indicators_rub_per_ton.expense >= 0 ? "+ " + Math.abs(operatingModeGraphData.indicators_rub_per_ton.expense) : "- " + Math.abs(operatingModeGraphData.indicators_rub_per_ton.expense);
}


// обновление operatingModeGraphData после смены значений
function updateOperationGraph(){
	EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;

	var mainInput = operatingModeBlock.getElementsByClassName('controlInput')[0].children[0];

	var hour_in_day = operationDateBlock.getElementsByClassName('inputElement')[0];
	var day_in_week = operationDateBlock.getElementsByClassName('inputElement')[1];
	var month_in_year = operationDateBlock.getElementsByClassName('inputElement')[2];
	
	var volumeForPeriod = volumeBlock.getElementsByClassName('inputElement')[0];
	var periodStart = volumeBlock.getElementsByClassName('inputElement')[1];
	var periodFinish = volumeBlock.getElementsByClassName('inputElement')[2];

	var calculation_range = operationRangeBlock.getElementsByClassName('inputElement')[0];

	var economPeriodParam;

	operatingModeGraphData.hour_in_day = hour_in_day.value;
	operatingModeGraphData.day_in_week = day_in_week.value;
	operatingModeGraphData.month_in_year = month_in_year.value;
	operatingModeGraphData.calculation_range = calculation_range.value;	

	hour_in_day.value = Number(hour_in_day.value).toFixed(1);
	day_in_week.value = Number(day_in_week.value).toFixed(1);
	month_in_year.value = Number(month_in_year.value).toFixed(1);
	calculation_range.value = Number(calculation_range.value).toFixed(0);

	mainInput.value = Number(hour_in_day.value) + "x" + Number(day_in_week.value) + "x" + Number(periodFinish.value - periodStart.value +1) + "  " + Number(volumeForPeriod.value) + "  "  + Translate[0].Econom[35][GlobalLang];
	
	for(var i =1; i<= EconomicRowType.elements.length; i++){
		economPeriodParam = document.getElementById("economPeriodParam_" + i);
		if(economPeriodParam != null){
			var scrollBlockPeriodParam = economPeriodParam.children[0].children[0].children;
			var SumParametersModelType = (EconomicRowType.elements[i-1].SumParameters.modelType == "currentyParameters" || EconomicRowType.elements[i-1].SumParameters.modelType == "fractionParameters");
			var DateParametersModelType = (EconomicRowType.elements[i-1].DateParameters.modelType == "calendarTime" || EconomicRowType.elements[i-1].DateParameters.modelType == "equipmentOperatingTime");
			
			if(SumParametersModelType && DateParametersModelType){				
				scrollBlockPeriodParam[0].children[0].value = EconomicRowType.elements[i-1].DateParameters.periodParametres.startPeriod;
				scrollBlockPeriodParam[1].children[0].value = EconomicRowType.elements[i-1].DateParameters.periodParametres.endPeriod;
				
				setupSumParametrText(i);
			}
		}
		
	}
	refreshEconomicChart();
	operationGraphPayback();
	operatingGraphIdicatorRubTon();
	if(economPeriodParam != null){
		cloneFixRow();
	}
	
}

//Фиксированные даты
function selectFixDate(element){
	EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;

	var idMain = Number(element.parentNode.parentNode.parentNode.parentNode.id.split('_')[1])-1;
	var elementNumber = EconomicRowType.elements[idMain].DateParameters.fixedDate.indexOf(Number(element.value));
	
	if(elementNumber == -1){
		EconomicRowType.elements[idMain].DateParameters.fixedDate.push(Number(element.value));
		element.style.backgroundColor = "#ffb23f";
	}
	else{
		EconomicRowType.elements[idMain].DateParameters.fixedDate.splice(elementNumber, 1);
		element.style.backgroundColor = "#f1f1f1";
	}
	EconomicRowType.elements[idMain].DateParameters.fixedDate.sort((a, b) => a - b);
	refreshEconomicChart();
}

function cloneFixRow(){	
	EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;

	for(var i = 1; i <= EconomicRowType.elements.length; i++){
		var economFixedDateBlock = document.getElementById('economFixedDate_' + i);		
		var scrollBlock = economFixedDateBlock.children[0].children[0];
		if(Number(scrollBlock.children.length)-1 < Number(operatingModeGraphData.calculation_range)){
			for (var k = Number(scrollBlock.children.length); k <= Number(operatingModeGraphData.calculation_range); k++){
				var CloneRow = economFixedDateBlock.getElementsByClassName('scrollRow')[0].cloneNode(true);
				CloneRow.children[0].value = k;
				CloneRow.style.display = '';
				scrollBlock.appendChild(CloneRow);
			}		
		}
		else{
			for (var k = Number(scrollBlock.children.length)-1; k > Number(operatingModeGraphData.calculation_range); k--){
				var elementNumber = EconomicRowType.elements[i-1].DateParameters.fixedDate.indexOf(Number(scrollBlock.children[k].children[0].value));
				if(elementNumber != -1){
					EconomicRowType.elements[i-1].DateParameters.fixedDate.splice(elementNumber, 1);
				}
				scrollBlock.children[k].remove();
			}
		}
		EconomicRowType.elements[i-1].DateParameters.fixedDate.sort((a, b) => a - b);
	}
}

//Процент от статьи
function selectArticleRow(element){
	EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;

	var idMain = Number(element.parentNode.parentNode.parentNode.parentNode.id.split('_')[1])-1;
	var elementNumber = EconomicRowType.elements[idMain].SumParameters.percentParameters.articleNumber.indexOf(Number(element.value));
	
	if(elementNumber == -1){
		EconomicRowType.elements[idMain].SumParameters.percentParameters.articleNumber.push(Number(element.value));
		element.style.backgroundColor = "#ffb23f";
	}
	else{
		EconomicRowType.elements[idMain].SumParameters.percentParameters.articleNumber.splice(elementNumber, 1);
		element.style.backgroundColor = "#f1f1f1";
	}
	EconomicRowType.elements[idMain].SumParameters.percentParameters.articleNumber.sort((a, b) => a - b);
}

function cloneArticleRow(){	
	EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;

	for(var i = 1; i <= EconomicRowType.elements.length; i++){
		var economArticleBlock = document.getElementById('economArticle_' + i);		
		var scrollBlock = economArticleBlock.children[0].children[0];
		if(Number(scrollBlock.children.length)-1 < Number(EconomicRowType.elements.length)){
			for (var k = Number(scrollBlock.children.length); k <= Number(EconomicRowType.elements.length); k++){
				var CloneRow = economArticleBlock.getElementsByClassName('scrollRow')[0].cloneNode(true);				
				CloneRow.children[0].value = k;// здесь текс статьи
				CloneRow.style.display = i != k ? '' : 'none';
				scrollBlock.appendChild(CloneRow);				
			}		
		}
		else{
			for (var k = Number(scrollBlock.children.length)-1; k > Number(EconomicRowType.elements.length); k--){
				var elementNumber = EconomicRowType.elements[i-1].SumParameters.percentParameters.articleNumber.indexOf(Number(scrollBlock.children[k].children[0].value));
				if(elementNumber != -1){
					EconomicRowType.elements[i-1].SumParameters.percentParameters.articleNumber.splice(elementNumber, 1);
				}
				scrollBlock.children[k].remove();
			}
			scrollBlock.children[i].style.display = 'none';
		}
		EconomicRowType.elements[i-1].SumParameters.percentParameters.articleNumber.sort((a, b) => a - b);
	}
}

//Работа с классификатором
function StartEconomicInput(idRow){
	var inputBlock = document.getElementById("economicInput_" + idRow);
	var economicDropdown = document.getElementById("economicDropdown_" + idRow);
	DoropdownEconomicOptionClear(idRow);
	if(inputBlock.value.length == 0){
		DropdownOptionEconomicDefault(idRow);
	}
	else{
		DropdownEconomicSearch(idRow);
	}	
	economicDropdown.style.display="flex";
}
function StartEconomicInputListeners(idRow){
	return function e(){
		var inputBlock = document.getElementById("economicInput_" + idRow);
		var economicDropdown = document.getElementById("economicDropdown_" + idRow);
		DoropdownEconomicOptionClear(idRow);
		if(inputBlock.value.length == 0){
			DropdownOptionEconomicDefault(idRow);
		}
		else{
			DropdownEconomicSearch(idRow);
		}	
		economicDropdown.style.display="flex";
	}
}

function DoropdownEconomicOptionClear(idRow){
	var economicDropdown = document.getElementById("economicDropdown_" + idRow);
	var dropdownOptions = economicDropdown.children[0];
	//Стартовая отчиска от лишних элементов
	for(var i = dropdownOptions.children.length - 1; i > 0; i--){
		dropdownOptions.children[i].remove();
	}
}

function DropdownOptionEconomicDefault(idRow){
	var economicDropdown = document.getElementById("economicDropdown_" + idRow);
	var dropdownOptions =  economicDropdown.children[0];
	var dropdownOptionClone = economicDropdown.children[0].children[0];
	var economicInputResult = document.getElementById("economicInputResult_" + idRow);
	
	listElements = [list_economic];
	
	for(var i = 0; i < economicInputResult.children.length; i++){
		var resultType = economicInputResult.children[i].id.split('_')[1];	
		if(resultType == "economic" || resultType == "customOption"){
			var ID_classifier = Number(economicInputResult.children[i].id.split('_')[2]);
			listElements = checkResultOption(listElements, list_economic);
		}
	}
	
	for(var i = 0; i < listElements.length; i++){
		var __list = listElements[i];
		for(var el = 0 ; el < __list.length; el++){
			var option = dropdownOptionClone.cloneNode(true);
			option.style.display = "";
			option.children[0].setAttribute('name', "economic");
			option.children[0].id = "economic_" + __list[el].id;
			option.children[0].value = __list[el][GlobalLang];
			dropdownOptions.appendChild(option);
			
			option.children[0].addEventListener("click", function(){
				 addResultEconomicOption(this.id, idRow);
				 economicInputResult.parentNode.children[1].children[0].click()
			});
		}
	}
}

function DropdownEconomicSearch(idRow){
	var inputBlock = document.getElementById('economicInput_' + idRow);
	var dropdownBlock = document.getElementById('economicDropdown_' + idRow);
	var economicInputResult = document.getElementById('economicInputResult_' + idRow);
	var dropdownOptions = dropdownBlock.children[0];
	var dropdownOptionClone = dropdownBlock.children[0].children[0];
	
	listElements = [list_economic];
	
	for(var i = 0; i < economicInputResult.children.length; i++){
		var resultType = economicInputResult.children[i].id.split('_')[1];	
		if(resultType == "economic" || resultType == "customOption"){
			var ID_classifier = Number(economicInputResult.children[i].id.split('_')[2]);
			listElements = checkResultOption(listElements, list_economic);
		}
	}
	
	for(var id = 0; id < listElements.length; id++){
		for(var i = 0; i < listElements[id].length; i++){
			if(listElements[id][i].name.split(' ').length == 1 ||  inputBlock.value.split(' ').length > 1){
				var element = listElements[id][i].name.split('').slice(0,inputBlock.value.length).join('');
				element = element.toUpperCase()[0] + element.slice(1);
				
				var string = inputBlock.value.toUpperCase()[0] + inputBlock.value.slice(1);
				if(element == string){
					var option = dropdownOptionClone.cloneNode(true);
					option.style.display = "";
					option.children[0].setAttribute('name', "economic");
					option.children[0].id = "economic_" + listElements[id][i].id;
					option.children[0].value = listElements[id][i].name;
					dropdownOptions.appendChild(option);
					
					option.children[0].addEventListener("click", function(){
						addResultEconomicOption(this.id, idRow);
					});
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
						option.children[0].setAttribute('name', "economic");
						option.children[0].id = "economic_" + listElements[id][i].id;
						option.children[0].value = listElements[id][i].name;
						dropdownOptions.appendChild(option);
						
						option.children[0].addEventListener("click", function(){
							addResultEconomicOption(this.id, idRow);
						});
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

function addResultEconomicOption(elenentID, idRow){
	var inputBlock = document.getElementById("economicInput_" + idRow);
	var main = inputBlock.parentNode.parentNode.parentNode;
	var classifierInpurResultRow = main.children[0].children[0];
	var option =  document.getElementById(elenentID);
	var object = document.createElement("div");
	object.classList.add("wordElement");
	object.id = "result_" + option.id;
	object.textContent = option.value;
	object.addEventListener("click", function(){
		removeEconomicClassifier(idRow);
		this.remove();
		economicrefreshID();
		StartEconomicInput(idRow);
		refreshEconomicChart();
	});
	classifierInpurResultRow.appendChild(object);
	//Отчистка и обновление
	removeEconomicClassifier(idRow);
	economicrefreshID();
	//Установка параметров
	if(object.id.split("_")[1] = "economic"){
		setupEconomicClassifier(elenentID, idRow);
	}
	
	document.getElementById("economicInput_" + idRow).focus();
	document.getElementById("economicInput_" + idRow).value="";
}
function addResultEconomicCustomOption(idRow){
	var classifierInpurResult = document.getElementById("economicInputResult_" + idRow);
	var inputBlock = document.getElementById("economicInput_" + idRow);
	var object = document.createElement("div");
	if(classifierInpurResult.children.length == 0){
		object.classList.add("wordElement");
		object.id = "result_customOption";
		object.textContent = inputBlock.value;
		object.addEventListener("click", function(){
			removeEconomicClassifier(idRow);
			this.remove();
			economicrefreshID();
			StartEconomicInput(idRow);
			refreshEconomicChart();
		});
		classifierInpurResult.appendChild(object);
		removeEconomicClassifier(idRow);
		economicrefreshID();
		
		document.getElementById("economicInput_" + idRow).focus();
		document.getElementById("economicInput_" + idRow).value="";
	}
}

function setupEconomicClassifier(economic_id, idRow){
	EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;

	var ID = economic_id.split("_")[1];
	var economic_info = list_economic[ID];
	var economicSumType = economic_info.sumParameters.split(", ")[0];
	var economicDataType = economic_info.dateParameters.split(", ")[0];
	
	//SumParameters
	var economSumModelType = document.getElementById("economSumModelType_" + idRow);
	var economSumParam = document.getElementById("economSumParam_" + idRow);
	var economFraction = document.getElementById("economFraction_" + idRow);
	var economFractionMass = document.getElementById("economFractionMass_" + idRow);
	var economPercentParam = document.getElementById("economPercentParam_" + idRow);
	var economArticle = document.getElementById("economArticle_" + idRow);
	
	var scrollBlockSumModelType = economSumModelType.children[0].children[0].children;
	var scrollBlockSumParam = economSumParam.children[0].children[0].children;
	var scrollBlockFraction = economFraction.children[0].children[0].children;
	var scrollBlockFractionMass = economFractionMass.children[0].children[0].children;
	//DateParameters
	var economDateModelType = document.getElementById("economDateModelType_" + idRow);
	var economDateParam = document.getElementById("economDateParam_" + idRow);
	var economPeriodParam = document.getElementById("economPeriodParam_" + idRow);
	var economFixedDate = document.getElementById("economFixedDate_" + idRow);
	
	var scrollBlockDateModelType = economDateModelType.children[0].children[0].children;
	var scrollBlockDateParam = economDateParam.children[0].children[0].children;
	var scrollBlockPeriodParam = economPeriodParam.children[0].children[0].children;
	var scrollBlockFixedDate = economFixedDate.children[0].children[0].children;
	//IncomeArrow
	var incomeArrow = document.getElementById("arrow_"+idRow);
	
	//Установка параметров
	var event = new Event('change');
	switch(economicSumType){
		case "sum":
			scrollBlockSumModelType[0].children[0].click();
			var economicSumCount = economic_info.sumParameters.split(", ")[1];
			var economicSumCurenty = economic_info.sumParameters.split(", ")[2];
			break;
		case "volume":
			scrollBlockSumModelType[1].children[0].click();
			var economicFraction = economic_info.sumParameters.split(", ")[1];
			var economicSumCount = economic_info.sumParameters.split(", ")[2].split(" ")[0];
			var economicSumCurenty = economic_info.sumParameters.split(", ")[2].split(" ")[1];
			var economicMassCount = economic_info.sumParameters.split(", ")[3].split(" ")[0];
			var economicMassType = economic_info.sumParameters.split(", ")[3].split(" ")[1];
			break;
		case "percent":
			scrollBlockSumModelType[2].children[0].click();
			var economicPercent = economic_info.sumParameters.split(", ")[1];
			var economicArticleArray = economic_info.sumParameters.split(", ")[2].split(",");
			var economicArticleScrollBlock = economArticle.children[0].children[0].children;
			//Установка статей и процента от них
			economPercentParam.getElementsByClassName("inputElement")[0].value = Number(economicPercent);
			economPercentParam.getElementsByClassName("inputElement")[0].dispatchEvent(event);
			
			for(var i = 1; i < economicArticleScrollBlock.length; i++){
				if(economicArticleScrollBlock[i].children[0].style.display != "none" && economicArticleScrollBlock[i].children[0].value == economicArticleArray[i-1]){
					economicArticleScrollBlock[i].children[0].click();
				}
			}
	}
	
	//Установка параметра суммы
	switch(economicSumCurenty){
		case "rub":
			scrollBlockSumParam[0].children[0].value = economicSumCount;
			scrollBlockSumParam[0].children[0].dispatchEvent(event);
			break;
		case "usd":
			scrollBlockSumParam[0].children[1].click();
			scrollBlockSumParam[1].children[1].click();
			scrollBlockSumParam[1].children[0].value = economicSumCount;
			scrollBlockSumParam[1].children[0].dispatchEvent(event);
			break;
		case "eur":
			scrollBlockSumParam[0].children[1].click();
			scrollBlockSumParam[2].children[1].click();
			scrollBlockSumParam[2].children[0].value = economicSumCount;
			scrollBlockSumParam[2].children[0].dispatchEvent(event);
			break;
	}
	//Установка фракции
	switch(economicFraction){
		case "main":
			scrollBlockFraction[1].children[0].click();
			scrollBlockFractionMass[0].children[1].click();
			break;
		case "accept":
			scrollBlockFraction[2].children[0].click();
			scrollBlockFractionMass[0].children[1].click();
			break;
		case "reject":
			scrollBlockFraction[3].children[0].click();
			scrollBlockFractionMass[0].children[1].click();
			break;
	}
	//Установка Массы
	switch(economicMassType){
		case "ton":
			scrollBlockFractionMass[0].children[1].click();
			scrollBlockFractionMass[0].children[0].value = economicMassCount;
			scrollBlockFractionMass[0].children[0].dispatchEvent(event);
			break;
		case "cwt":
			scrollBlockFractionMass[1].children[1].click();
			scrollBlockFractionMass[1].children[0].value = economicMassCount;
			scrollBlockFractionMass[1].children[0].dispatchEvent(event);
			break;
		case "kg":
			scrollBlockFractionMass[2].children[1].click();
			scrollBlockFractionMass[2].children[0].value = economicMassCount;
			scrollBlockFractionMass[2].children[0].dispatchEvent(event);
			break;
	}
	//Установка параметра времени
	var economicDataArray = [];
	switch(economicDataType){
		case "cTime":
			scrollBlockDateModelType[0].children[0].click();
			scrollBlockDateParam[3].children[1].click();
			var economicDataCount = economic_info.dateParameters.split(", ")[1];
			var economicDataType = economic_info.dateParameters.split(", ")[2];
			var startData = economic_info.dateParameters.split(", ")[3].split("-")[0];
			var endData = economic_info.dateParameters.split(", ")[3].split("-")[1];
			break;
		case "oTime":
			scrollBlockDateModelType[1].children[0].click();
			scrollBlockDateParam[0].children[1].click();
			var economicDataCount = economic_info.dateParameters.split(", ")[1];
			var economicDataType = economic_info.dateParameters.split(", ")[2];
			var startData = economic_info.dateParameters.split(", ")[3].split("-")[0];
			var endData = economic_info.dateParameters.split(", ")[3].split("-")[1];
			break;
		case "fTime":
			scrollBlockDateModelType[2].children[0].click();
			var economicDataArray = economic_info.dateParameters.split(", ")[1].split(",");
			break;
	}
	//Указание времени
	switch(economicDataType){
		case "hour":
			scrollBlockDateParam[0].children[1].click();
			scrollBlockDateParam[0].children[0].value = economicDataCount;
			scrollBlockDateParam[0].children[0].dispatchEvent(event);
			
			scrollBlockPeriodParam[0].children[0].value = startData;
			scrollBlockPeriodParam[0].children[0].dispatchEvent(event);
			scrollBlockPeriodParam[1].children[0].value = endData;
			scrollBlockPeriodParam[1].children[0].dispatchEvent(event);
			break;
		case "day":
			scrollBlockDateParam[1].children[1].click();
			scrollBlockDateParam[1].children[0].value = economicDataCount;
			scrollBlockDateParam[1].children[0].dispatchEvent(event);
			
			scrollBlockPeriodParam[0].children[0].value = startData;
			scrollBlockPeriodParam[0].children[0].dispatchEvent(event);
			scrollBlockPeriodParam[1].children[0].value = endData;
			scrollBlockPeriodParam[1].children[0].dispatchEvent(event);
			break;
		case "week":
			scrollBlockDateParam[2].children[1].click();
			scrollBlockDateParam[2].children[0].value = economicDataCount;
			scrollBlockDateParam[2].children[0].dispatchEvent(event);
			
			scrollBlockPeriodParam[0].children[0].value = startData;
			scrollBlockPeriodParam[0].children[0].dispatchEvent(event);
			scrollBlockPeriodParam[1].children[0].value = endData;
			scrollBlockPeriodParam[1].children[0].dispatchEvent(event);
			break;
		case "month":
			scrollBlockDateParam[3].children[1].click();
			scrollBlockDateParam[3].children[0].value = economicDataCount;
			scrollBlockDateParam[3].children[0].dispatchEvent(event);
			
			scrollBlockPeriodParam[0].children[0].value = startData;
			scrollBlockPeriodParam[0].children[0].dispatchEvent(event);
			scrollBlockPeriodParam[1].children[0].value = endData;
			scrollBlockPeriodParam[1].children[0].dispatchEvent(event);
			break;
		case "year":
			scrollBlockDateParam[4].children[1].click();
			scrollBlockDateParam[4].children[0].value = economicDataCount;
			scrollBlockDateParam[4].children[0].dispatchEvent(event);
			
			scrollBlockPeriodParam[0].children[0].value = startData;
			scrollBlockPeriodParam[0].children[0].dispatchEvent(event);
			scrollBlockPeriodParam[1].children[0].value = endData;
			scrollBlockPeriodParam[1].children[0].dispatchEvent(event);
			break;
	}
	//Установка фиксированных дат.
	for(var i = 0; i < economicDataArray.length; i++){
		scrollBlockFixedDate[economicDataArray[i]].children[0].click();
	}
	
	incomeArrow.checked = economic_info.incomeArrow;
	EconomicRowType.elements[idRow-1].IncomeArrow = economic_info.incomeArrow;
	
	fractionSumParametersView(idRow);
	setupSumParametrText(idRow);
	refreshEconomicChart();
}

function removeEconomicClassifier(idRow){
	EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;

	var economicSumParametr = document.getElementById("economicSumParametr_" + idRow);
	var clone = economicSumParametr_0.cloneNode(true);
	
	EconomicRowType.elements[idRow-1] = {
		"SumParameters": {
			"modelType": "modelType",
			"currentyParameters": {
				"targetCurrent": "targetCurrent",
				"curentyValue": {
					"RUB": 1.00,
					"USD": 1.00,
					"EUR": 1.00
				}
			},			
			"fractionParameters": {
				"targetFraction": "targetFraction",
				"targetMassType": "targetMassType",
				"massValue": {
					"ton": 1.00,
					"cwt": 1.00,
					"kg": 1.00
				}
			},
			"percentParameters": {
				"percent": 0,
				"articleNumber": []
			}
			
		},
		"DateParameters": {
			"modelType": "modelType",
			"timeParameters": {
				"targetTime": "targetTime",
				"timeValue": {
					"hour": 160.00,
					"day": 28.00,
					"week": 4.00,
					"month": 1.00,
					"year": 0.08
				}
			},			
			"periodParametres": {
				"startPeriod": 1,
				"endPeriod": 12
			},
			"fixedDate": []
		},
		"Discription": null,
		"IncomeArrow": true
	}
	
	economicSumParametr.replaceWith(clone);
	
	var incomeArrow = document.getElementById("arrow_"+idRow);
	incomeArrow.checked = true;
}

function ShowEconomicDropdown(idRow){
	return function e(){
		economicHideAll();
		var economicResultBlock = document.getElementById("economicResultBlock_"+idRow);
		var economicDropdown = document.getElementById("economicDropdown_"+idRow);
		var economicInput = document.getElementById("economicInput_"+idRow);
		var economicControlButtonHide = economicResultBlock.getElementsByClassName('okButton')[0].children[0];
		var addOption = economicInput.parentNode.children[1];
		
		economicInput.value = "";
		
		economicResultBlock.style.display = "flex";
		economicDropdown.style.display = "flex";
		addOption.style.display = "flex";

		StartEconomicInput(idRow);
	}
}
function HideEconomicDropdown(idRow){
	return function e(){
		EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;

		var economicResultBlock = document.getElementById("economicResultBlock_"+idRow);
		var economicInputResult = document.getElementById("economicInputResult_"+idRow);
		var economicDropdown = document.getElementById("economicDropdown_"+idRow);
		var economicInput = document.getElementById("economicInput_"+idRow);
		var economicControlButtonHide = economicResultBlock.getElementsByClassName('okButton')[0].children[0];
		var addOption = economicInput.parentNode.children[1];
		
		resultTextView(economicInput, economicInputResult);
		EconomicRowType.elements[idRow-1].Discription = economicInput.value;
		
		economicResultBlock.style.display = "none";
		economicDropdown.style.display = "none";
		addOption.style.display = "none";
	}
}

function openEconomDeafultMenu(){
	var defaultUnit_Econom = document.getElementById('defaultUnit_Econom');
	defaultUnit_Econom.children[1].style.display = defaultUnit_Econom.children[1].style.display == 'none' ? 'flex' : 'none';
}
function setupEconomicType(inputId){
	var main = document.getElementById(inputId);	
	var inpMenu = document.getElementById('inpMenu');
	var dropdown_ListNumber;
	switch(inputId){
		case 'economicd_Req':
			var parentBlock = main.parentNode.parentNode.children;
			if (main.style.backgroundColor != "") {
				for (var i = 0; i < parentBlock.length; i++) {
					parentBlock[i].style.display = "";
					main.style.backgroundColor = "";
				}				
			}
			else {
				for (var i = 0; i < parentBlock.length; i++) {
					parentBlock[i].style.display = "none";
				}

				main.parentNode.style.display = "";
				main.style.backgroundColor = "#ffb23f";
			}
			inpMenu.style.display = inpMenu.style.display == 'none' ? 'flex' : 'none';
			economicType = 'Req';
			sliderType = 'Req';
			dropdown_ListNumber = currentPage;
			break;
		case 'economicd_Prot':
			var parentBlock = main.parentNode.parentNode.children;
			if (main.style.backgroundColor != "") {
				for (var i = 0; i < parentBlock.length; i++) {
					parentBlock[i].style.display = "";
					main.style.backgroundColor = "";
				}
			}
			else {
				for (var i = 0; i < parentBlock.length; i++) {
					parentBlock[i].style.display = "none";
				}

				main.parentNode.style.display = "";
				main.style.backgroundColor = "#ffb23f";
			}
			inpMenu.style.display = inpMenu.style.display == 'none' ? 'flex' : 'none';
			economicType = 'Prot';
			sliderType = 'Prot';
			dropdown_ListNumber = ProtocolPage;
			break;
	}
	// var dropdown_ListNumber = document.getElementById('dropdown_ListNumber');
	
	if(inpMenu.style.display == 'none' && dropdown_ListNumber != 0){
		economicRowType();
	}
	setupPageId(id_document);
}

// отвечает за генерацию списка в привязке к фракции
function setupFractionMenuContent(id_component){
	var main = document.getElementById('economFraction_' + id_component);
	var parent = main.children[0].children[0];
	for(var i = parent.children.length; i > 1; i--){
		parent.children[i-1].remove();
	}
	switch(economicType){
		case 'Req':
			for(var k = 0; k < 3; k++){
				var cloneSort = parent.children[0];
				var clone = cloneSort.cloneNode(true);
				clone.style.display = '';
				switch(k){
					case 0:
						clone.children[0].value = Translate[0].Econom[32][GlobalLang];;
						break;
					case 1:
						clone.children[0].value = Translate[0].Econom[33][GlobalLang];
						break;
					case 2:
						clone.children[0].value = Translate[0].Econom[34][GlobalLang];
						break;
				}
				parent.appendChild(clone);
			}
			for(var k = 1; k < parent.children.length; k++){
				var inputOption = parent.children[k].getElementsByClassName('inputOption')[0];
				inputOption.addEventListener("click",setupMainElenetInBlock(inputOption));
				inputOption.addEventListener("click",hideFirst(inputOption));
				inputOption.addEventListener("click", setupTargetFraction(k, id_component));
			}
			break;
		case 'Prot':
			// цикл для протоколоа
			for(var k = 0; k < 3; k++){
				var cloneSort = main.children[0].children[0].children[0];
				var clone = cloneSort.cloneNode(true);
				clone.style.display = '';
				switch(k){
					case 0:
						clone.children[0].value = "Исходный Продукт 01";
						break;
					case 1:
						clone.children[0].value = "Проход 01";
						break;
					case 2:
						clone.children[0].value = "Отбой 01";
						break;
				}
				main.children[0].children[0].appendChild(clone);
			}
			// цикл для сортировок
			for(var k = 0; k < pageProtocolRow[ProtocolPage-1].pageSortRow.length; k++){
				for(var z = 0; z < 3; z++){
					var cloneSort = main.children[0].children[0].children[0];
					var clone = cloneSort.cloneNode(true);
					clone.style.display = '';
					switch(z){
						case 0:
							clone.children[0].value = "Исходный Продукт " + (k+2);
							break;
						case 1:
							clone.children[0].value = "Проход " + (k+2);
							break;
						case 2:
							clone.children[0].value = "Отбой " + (k+2);
							break;
					}
					main.children[0].children[0].appendChild(clone);
				}
			}
			for(var k = 1; k < parent.children.length; k++){
				var inputOption = parent.children[k].getElementsByClassName('inputOption')[0];
				var textContent = parent.children[k].getElementsByClassName('inputOption')[0].value;
				inputOption.addEventListener("click",setupMainElenetInBlock(inputOption));
				inputOption.addEventListener("click",hideFirst(inputOption));
				inputOption.addEventListener("click", setupTargetFractionProt(id_component,textContent));
			}	
			break;
	}
	
}

function hideFirst(inputOption){
	return function(e){
		var main = inputOption.parentNode.parentNode;
		main.children[0].style.display = 'none';
	}
}

function setupTargetFractionProt(id_row, textContent) {
	return function e() {
		EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;

		EconomicRowType.elements[id_row-1].SumParameters.fractionParameters.targetFraction = EconomicRowType.elements[id_row-1].SumParameters.fractionParameters.targetFraction == "targetFraction" ? textContent : "targetFraction";
	}
}

function showSliderParam(){
	var main = document.getElementById('defaultType_Econom');
	var obj = main.children[1];
	obj.style.display = obj.style.display == 'none' ? obj.style.display = 'flex' : obj.style.display = 'none';
	generateSliderParamList();
}


function generateSliderParamList(){
	var main = document.getElementById('defaultType_Econom').children[1].children[0].children[0];
	
	// зачистка
	for(var k = main.children.length; k > 1; k--){
		main.children[k-1].remove();
	}
	for(var k = 1; k <= 1; k++){		
		var row = main.children[0].cloneNode(true);
		row.children[0].value =  Translate[0].Econom[2][GlobalLang];
		row.children[0].id =  'SliderReq';
		row.style.display = 'flex';
		row.addEventListener('click', setupMainElenetInSliderParam(main, row.children[0].id));	
		main.appendChild(row);
	}
	if(pageProtocolRow[ProtocolPage-1] != null){
		for(var k = 1; k <= 1; k++){		
			var row = main.children[0].cloneNode(true);
			row.children[0].value =  Translate[0].Econom[74][GlobalLang]+' 01';
			row.children[0].id =  'SliderProt';
			row.style.display = 'flex';
			row.addEventListener('click', setupMainElenetInSliderParam(main, row.children[0].id));
			main.appendChild(row);
		}
		if(pageProtocolRow[ProtocolPage-1].pageSortRow.length != null){
			var pageNumber = pageProtocolRow[ProtocolPage-1].pageSortRow.length;
			for(var k = 1; k <= pageNumber; k++){		
				var row = main.children[0].cloneNode(true);
				row.children[0].value =  Translate[0].Econom[74][GlobalLang]+' 0' + (k+1);
				row.children[0].id =  'SliderSort_' + k;
				row.style.display = 'flex';		
				row.addEventListener('click', setupMainElenetInSliderParam(main, row.children[0].id));
				main.appendChild(row);
			}
		}
	}	
}

function setupMainElenetInSliderParam(main, idRow){
	return function(e){
		var targetBlock = document.getElementById(idRow);
		var inpMenu = document.getElementById('SliderInpMenu');
		if(targetBlock.style.backgroundColor == ""){
			for(var i = 1; i< main.children.length; i++){
				main.children[i].style.display = 'none';
			}
			targetBlock.parentNode.style.display = 'flex';
			targetBlock.style.backgroundColor = "#ffb23f";
		}
		else{
			for(var i = 1; i< main.children.length; i++){
				main.children[i].style.display = 'flex';
			}
			targetBlock.style.backgroundColor = "";
		}		
		inpMenu.style.display = inpMenu.style.display == 'none' ? 'flex' : 'none';
		switch(idRow.split('_')[0]){
			case 'SliderReq':
				sliderType = 'Req';
				break;
			case 'SliderProt':
				sliderType = 'Prot';
				break;
			case 'SliderSort':
				sliderType = idRow;
				break;
		}
		setupSlidersValue(idRow);
	}
}

function setupSlidersValue(idRow){
	var inputCapacity = document.getElementById('inputCapacity');
	var acceptInputCapacity = document.getElementById('acceptInputCapacity');
	var event = new Event('change');
	switch(idRow.split('_')[0]){
		case 'SliderReq':
			inputCapacity.value = pageRow[currentPage-1].requirementsTable.mainFractionData.mass;
			inputCapacity.dispatchEvent(event);
			acceptInputCapacity.value = pageRow[currentPage-1].requirementsTable.suitableFraction.percent_exit;			
			acceptInputCapacity.dispatchEvent(event);
			break;
		case 'SliderProt':
			inputCapacity.value = pageProtocolRow[ProtocolPage-1].requirementsTable.mainFractionData.mass;
			inputCapacity.dispatchEvent(event);
			acceptInputCapacity.value = pageProtocolRow[ProtocolPage-1].requirementsTable.suitableFraction.percent_exit;			
			acceptInputCapacity.dispatchEvent(event);
			break;
		case 'SliderSort':
			inputCapacity.value = pageProtocolRow[ProtocolPage-1].pageSortRow[Number(idRow.split('_')[1])-1].requirementsTable.mainFractionData.mass;
			inputCapacity.dispatchEvent(event);
			acceptInputCapacity.value = pageProtocolRow[ProtocolPage-1].pageSortRow[Number(idRow.split('_')[1])-1].requirementsTable.suitableFraction.percent_exit;
			acceptInputCapacity.dispatchEvent(event);
			break;
	}

}

function setOperationModelValue(){
	var pageID = Number(sliderType.split('_')[1]);
	switch(sliderType){
		case 'Req':
			updateRemovedPercentClone(currentPage);
			refreshEconomicChart();
			operationGraphReverseVolumeWork();
			updateDataClone(currentPage);
			break;
		case 'Prot':
			updateRemovedPercentProtocol(ProtocolPage);
			refreshEconomicChart();
			operationGraphReverseVolumeWork();
			updateDataProtocol(ProtocolPage);
			break;
		default:
			updateRemovedPercentSort(pageID);
			refreshEconomicChart();
			operationGraphReverseVolumeWork();		
			updateDataSort(pageID);
			break;
	}
}

function economicRowType(){	
	if(economicType == 'Req'){
		removeEconomicRow();
		fillEconomicRow(currentPage);
		viewCurrentlyParam();
		operatingModeBlock.children[0].children[0].children[0].click();
		operatingModeViev(); 
		updateDataClone(currentPage);
		for(var z = 1; z<= economicRowData.elements.length; z++){
			addResult(z);
		}
	}
	if(economicType == 'Prot'){
		removeEconomicRow();
		fillEconomicRowByProtocol(ProtocolPage);
		viewCurrentlyParam();
		operatingModeBlock.children[0].children[0].children[0].click();
		operatingModeViev(); 
		updateDataProtocol(ProtocolPage);
		for(var z = 1; z<= economicRowDataProt.elements.length; z++){
			addResult(z);
		}
	}	
}

function updateHour(modifire){
	EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;
	EconomicRowType.Additiona.HourDay = modifire.value;
}
function updateWeek(modifire){
	EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;
	EconomicRowType.Additiona.DayWeek = modifire.value;
}
//Массивы подгружаемых данных
var Main = []
var Model = []
var Configuration = []
var KompressorType = []
var Kompressor = []
var Price = []
var Product_K = []
var Elevator = []
var Conditions = []

var Aspiration = []
var Bunker = []
var Complect = []
var type;

var ModelCSZE = {
	"id_model": "id_model",
	"modelName": "modelName",
	"material": "material",
	"metalThickness": "2x15",
	"outletSize": "outletSize",
	"capacity_param": {
		"capacity": 0,
		"speed": 0,
		"turn": 0,
		"step": 0,
		"bucket": 0,
		"bucket_load": 0
	},
	"modelSize":{
		"height": 0,
		"top_length": 0,
		"bottom_length": 0,
	},
	"sectionElement":{
		"heightSection": "heightSection",
		"topSection": "topSection",
		"bottomSection": "bottomSection"
	},
	"onloadElement":{
		"load":{"len_size": 0, "count": 0, "un_price": 0},
		"unload":{"len_size": 0, "count": 0, "un_price": 0},
		"load_x": 0,
		"unload_x": 0,
		"unload_y": 0,
	},
	"otherComponents":{
		"chain": {"name": "name", "count": "count", "un_price": "un_price"},
		"bucket": {"name": "name", "count": "count", "un_price": "un_price"},
		"converter": {"name": "name", "count": "count", "un_price": "un_price", "kW": "kW", "enable": true},
		"reducror": {"name": "name", "count": "count", "un_price": "un_price", "kW": "kW"},
		"motor": {"name": "name", "count": "count", "un_price": "un_price", "kW": "kW"},
		"sensorPodpor": {"name": "name", "count": "count", "un_price": "un_price", "enable": true},
		"sensorChain": {"name": "name", "count": "count", "un_price": "un_price", "enable": true},
		"controlBox": {"name": "name", "count": "count", "un_price": "un_price", "enable": true},
		"backward": {"name": "name", "count": "count", "un_price": "un_price", "enable": true, "enable_force": true}
	},
	"modelDeliveryData":{
		"modelMass": "modelMass",
		"modelVolume": "modelVolume"
	},
	"basePrice": 0,
	"sectionPrice": {
		"heightSectionPrice": 0,
		"topSectionPrice": 0,
		"bottomSectionPrice": 0,
		"sum": 0
	},
	"onloadPrice": 0,
	"otherPrice": 0,
	"modelPrice": 0,
	"NDS": 1.2
}
var ModelCSE = {
	"id_model": "id_model",
	"modelName": "modelName",
	"material": "material",
	"bucketMaterial": "bucketPlastic",
	"carefulTransport": false, 
	"capacity_param": {
		"capacity": 0,
		"speed": 0,
		"turn": 0,
		"step": 0,
		"bucket": 0,
		"bucket_load": 0
	},
	"metalThickness": {
		"headT": 0,
		"bottomT": 0,
		"tubeT": 0
	},
	"modelSize":{
		"height": 0,
		"load": 0
	},
	"sectionElement":{
		"heightSection": "heightSection",
	},
	"otherComponents":{
		"belt": {"name": "name", "count": "count", "un_price": "un_price"},
		"bucket": {"name": "name", "count": "count", "un_price": "un_price"},
		"converter": {"name": "name", "count": "count", "un_price": "un_price", "kW": "kW", "enable": true},
		"reducror": {"name": "name", "count": "count", "un_price": "un_price", "kW": "kW"},
		"motor": {"name": "name", "count": "count", "un_price": "un_price", "kW": "kW"},
		"sensorSpeed": {"name": "name", "count": "count", "un_price": "un_price", "enable": true},
		"sensorPodporTop": {"name": "name", "count": "count", "un_price": "un_price", "enable": true},
		"sensorPodporBottom": {"name": "name", "count": "count", "un_price": "un_price", "enable": true},
		"sensorBelt": {"name": "name", "count": "count", "un_price": "un_price", "enable": true},
		"controlBox": {"name": "name", "count": "count", "un_price": "un_price", "enable": true},
		"backward": {"name": "name", "count": "count", "un_price": "un_price", "enable": true, "enable_force": true}
	},
	"modelDeliveryData":{
		"modelMass": "modelMass",
		"modelVolume": "modelVolume"
	},
	"basePrice": 0,
	"sectionPrice": {
		"heightSectionPrice": 0,
	},
	"otherPrice": 0,
	"modelPrice": 0,
	"NDS": 1.2
}
var ModelCSCC = {
	"id_model": "id_model",
	"modelName": "modelName",
	"material": "material",
	"capacity_param": {
		"capacity": 0,
		"speed": 0,
		"turn": 0,
		"step": 0,
		"bucket": 0,
		"bucket_load": 0
	},
	"metalThickness": {
		"bodyT": 0,
		"capT": 0,
		"liningT": 0
	},
	"modelSize":{
		"TransportLength": 0,
		"unloadCenter": 0,
		"loadCenter": 0,
		"unload": 0,
		"load": 0
	},
	"sectionElement":{
		"lengthSection": [],
		"leteralSection": [],
		"verticalSection": [],
		"doubleSideLateral": false
	},
	"otherComponents":{
		"belt": {"name": "name", "count": "count", "un_price": "un_price"},
		"lining": {"name": "name", "count": "count", "un_price": "un_price"},
		"bucket": {"name": "name", "count": "count", "un_price": "un_price"},
		"converter": {"name": "name", "count": "count", "un_price": "un_price", "kW": "kW", "enable": false},
		"reductor": {"name": "name", "count": "count", "un_price": "un_price", "kW": "kW"},
		"motor": {"name": "name", "count": "count", "un_price": "un_price", "kW": "kW"},
		"sensorSpeed": {"name": "name", "count": "count", "un_price": "un_price", "enable": true},
		"sensorPodpor": {"name": "name", "count": "count", "un_price": "un_price", "enable": true},
		"controlBox": {"name": "name", "count": "count", "un_price": "un_price", "enable": true}
	},
	"modelDeliveryData":{
		"modelMass": "modelMass",
		"modelVolume": "modelVolume"
	},
	"basePrice": 0,
	"sectionPrice":{
		"lengthSectionPrice": 0,
		"leteralSectionPrice": 0,
		"verticalSectionPrice": 0
	},
	"otherPrice": 0,
	"modelPrice": 0,
	"NDS": 1.2
}

var SpecificData = [];
function setupSpecificData(){
	SpecificData.push({
		"apparat": {
			"model": "model",
			"configuration": "configuration",
			"tray": 0,
		},
		"compressor": {
			"model": "model",
			"manufacturer": "manufacturer",
			"capacity": 0,
		}
	});
  }
// создание строки
function createSinglePriceRowTest(){
	var idRow = Number(priceMainRow.children.length);
	var cloneRow = priceComponent_0.cloneNode(true);	
	cloneRow.style.display = "";		
	cloneRow.id = "priceComponent_" + idRow;	
	// № компонента
	cloneRow.children[0].children[0].id = "priceRowNumber_" + idRow;
	cloneRow.children[0].children[0].addEventListener('mouseenter', PriceShowDeleteButton("priceRowNumber_" + idRow));
	cloneRow.children[0].children[0].addEventListener('mouseleave', PriceHideDeleteButton("priceRowNumber_" + idRow));
	cloneRow.children[0].children[0].children[0].textContent = idRow;
	cloneRow.children[0].children[0].children[0].id = "priceComponentNumber_" + idRow;
	cloneRow.children[0].children[0].children[1].id = "priceDeleteButton_" + idRow;
	cloneRow.children[0].children[0].children[1].addEventListener('click', PriceRemoveRow("priceDeleteButton_" + idRow));
	// инпут результата
	cloneRow.children[0].children[1].children[0].children[0].children[0].id = "priceInput_" + idRow;
	cloneRow.children[0].children[1].children[0].children[0].children[0].addEventListener('click',hideContent("priceClassifire_" + idRow));
	cloneRow.children[0].children[1].children[0].children[0].children[1].children[0].id = 'specificOkButton_' + idRow;
	cloneRow.children[0].children[1].children[0].children[0].children[1].children[0].addEventListener('click', presetPrice(idRow));
	// меню выбора категории
	cloneRow.children[0].children[1].children[0].children[1].id = "priceClassifire_" + idRow;
	cloneRow.children[0].children[1].children[0].children[1].children[0].children[0].children[1].addEventListener('click', hideContent("priceMenuClassifire_" + idRow));
	cloneRow.children[0].children[1].children[0].children[1].children[0].children[1].id = "priceMenuClassifire_" + idRow;	
	// категории
	cloneRow.children[0].children[1].children[0].children[1].children[1].children[0].id = "priceApparat_" + idRow;
	cloneRow.children[0].children[1].children[0].children[1].children[1].children[0].children[1].id = "priceApparatModel_" + idRow;	
	cloneRow.children[0].children[1].children[0].children[1].children[1].children[0].children[3].id = "priceApparatConf_" + idRow;	
	cloneRow.children[0].children[1].children[0].children[1].children[1].children[0].children[5].id = "priceApparatLot_" + idRow;
	cloneRow.children[0].children[1].children[0].children[1].children[1].children[0].children[0].children[1].addEventListener('click', hideContent("priceApparatModel_" + idRow));
	cloneRow.children[0].children[1].children[0].children[1].children[1].children[0].children[2].children[1].addEventListener('click', hideContent("priceApparatConf_" + idRow));
	cloneRow.children[0].children[1].children[0].children[1].children[1].children[0].children[4].children[1].addEventListener('click', hideContent("priceApparatLot_" + idRow));
	
	cloneRow.children[0].children[1].children[0].children[1].children[1].children[1].id = "priceCompressor_" + idRow;
	cloneRow.children[0].children[1].children[0].children[1].children[1].children[1].children[1].id = "priceCompressorModel_" + idRow;	
	cloneRow.children[0].children[1].children[0].children[1].children[1].children[1].children[3].id = "priceCompressorSale_" + idRow;	
	cloneRow.children[0].children[1].children[0].children[1].children[1].children[1].children[5].id = "priceCompressorProd_" + idRow;	
	cloneRow.children[0].children[1].children[0].children[1].children[1].children[1].children[0].addEventListener('click', hideContent("priceCompressorModel_" + idRow));
	cloneRow.children[0].children[1].children[0].children[1].children[1].children[1].children[2].addEventListener('click', hideContent("priceCompressorSale_" + idRow));
	cloneRow.children[0].children[1].children[0].children[1].children[1].children[1].children[4].addEventListener('click', hideContent("priceCompressorProd_" + idRow));
	
	cloneRow.children[0].children[1].children[0].children[1].children[1].children[2].id = "priceElevator_" + idRow;
	
	cloneRow.children[0].children[2].id = 'specificCount_' + idRow;
	cloneRow.children[0].children[2].addEventListener('change', ReturnSpecificPrice(idRow));
	cloneRow.children[0].children[3].id = 'specificPrice_' + idRow;
	cloneRow.children[0].children[4].id = 'specificSum_' + idRow;
	cloneRow.children[0].children[5].id = 'specificDiscountValue_' + idRow;
	cloneRow.children[0].children[5].addEventListener('change', ReturnSpecificPrice(idRow));
	cloneRow.children[0].children[6].id = 'specificDiscountSum_' + idRow;
	cloneRow.children[0].children[7].id = 'specificNDS_' + idRow;

	var menu = cloneRow.children[0].children[1].children[0].children[1].children[0].children[1].children[0];
	for(var i = 0; i < menu.children.length; i++){
		menu.children[i].children[0].addEventListener('click', ChangePriceRowContent(idRow));
		menu.children[i].children[0].addEventListener('click', ChangePriceColorSegment("priceMenuClassifire_" + idRow));		
	}
	priceMainRow.appendChild(cloneRow);
	
	setupSpecificData();
}
function ReturnSpecificPrice(id){
	return function(e){
		CalculateSpecificPrice(id);
		CalculationSumPrice();
	}	
}
function hideContent(object){
	return function(e){
		var menu = document.getElementById(object);
		var button = document.getElementById('specificOkButton_' + menu.id.split('_')[1]).parentNode;
		if(menu.style.display != 'none'){
			menu.style.display = 'none'
		}
		else{
			menu.style.display = 'flex'
		}
		button.style.display = button.style.display == 'none' ? 'flex' : 'none';
	}
}
function ChangePriceRowContent(idRow){
	return function(e){
		var Apparat = document.getElementById('priceApparat_' + idRow);
		var Compressor = document.getElementById('priceCompressor_' + idRow);
		var Elevator = document.getElementById('priceElevator_' + idRow);
		var priceInput = document.getElementById('priceInput_' + idRow);
		type = 	this.value;
		switch(this.value){
			case'Аппарат':
				Apparat.style.display = '';
				Compressor.style.display = 'none';
				Elevator.style.display = 'none';
				priceInput.placeholder = this.value;
				break;
			case'Элеватор':
				Apparat.style.display = 'none';
				Compressor.style.display = 'none';
				Elevator.style.display = '';
				priceInput.placeholder = this.value;
				break;
			case'Компрессор':
				Apparat.style.display = 'none';
				Compressor.style.display = '';
				Elevator.style.display = 'none';
				priceInput.placeholder = this.value;
				break;
			case'Свое значение':
				Apparat.style.display = 'none';
				Compressor.style.display = 'none';
				Elevator.style.display = 'none';
				priceInput.placeholder = this.value;
				break;
		}	
		if(this.style.backgroundColor != ""){
			Apparat.style.display = 'none';
			Compressor.style.display = 'none';
			Elevator.style.display = 'none';
		}	
		PriceInfoRow(type, idRow);
	}
}
function PriceShowDeleteButton(elementID){
	return function e(){
		var thisElement = document.getElementById(elementID);
		thisElement.children[0].style.display="none";
		thisElement.children[1].style.display="flex";
	}	
}
function PriceHideDeleteButton(elementID){
	return function e(){
		var thisElement = document.getElementById(elementID);
		thisElement.children[0].style.display="flex";
		thisElement.children[1].style.display="none";
	}
}
function PriceRemoveRow(remove){
	return function e(){
		var elementRemove = document.getElementById(remove).parentNode.parentNode.parentNode.id;
		var idRow = elementRemove.split('_')[1];
		document.getElementById(elementRemove).remove();
		SpecificData.splice(idRow-1, 1);
		PriceRefreshID();
	}
}
// обновление айди после удаления
function PriceRefreshID(){
	var rows = document.getElementById('priceMainRow');
	for(var z = 1; z < rows.children.length; z++){		
		var cloneRow = clearEventListener(rows.children[z]);
		var idRow = z;

		cloneRow.id = "priceComponent_" + idRow;	
		// № компонента
		cloneRow.children[0].children[0].id = "priceRowNumber_" + idRow;
		cloneRow.children[0].children[0].addEventListener('mouseenter', PriceShowDeleteButton("priceRowNumber_" + idRow));
		cloneRow.children[0].children[0].addEventListener('mouseleave', PriceHideDeleteButton("priceRowNumber_" + idRow));
		cloneRow.children[0].children[0].children[0].textContent = idRow;
		cloneRow.children[0].children[0].children[0].id = "priceComponentNumber_" + idRow;
		cloneRow.children[0].children[0].children[1].id = "priceDeleteButton_" + idRow;
		cloneRow.children[0].children[0].children[1].addEventListener('click', PriceRemoveRow("priceDeleteButton_" + idRow));
		// инпут результата
		cloneRow.children[0].children[1].children[0].children[0].children[0].id = "priceInput_" + idRow;
		cloneRow.children[0].children[1].children[0].children[0].children[0].addEventListener('click',hideContent("priceClassifire_" + idRow));
		cloneRow.children[0].children[1].children[0].children[0].children[1].children[0].id = 'specificOkButton_' + idRow;
		cloneRow.children[0].children[1].children[0].children[0].children[1].children[0].addEventListener('click', presetPrice(idRow));
		// меню выбора категории
		cloneRow.children[0].children[1].children[0].children[1].id = "priceClassifire_" + idRow;
		cloneRow.children[0].children[1].children[0].children[1].children[0].children[0].children[1].addEventListener('click', hideContent("priceMenuClassifire_" + idRow));
		cloneRow.children[0].children[1].children[0].children[1].children[0].children[1].id = "priceMenuClassifire_" + idRow;	
		// категории
		cloneRow.children[0].children[1].children[0].children[1].children[1].children[0].id = "priceApparat_" + idRow;
		cloneRow.children[0].children[1].children[0].children[1].children[1].children[0].children[1].id = "priceApparatModel_" + idRow;	
		cloneRow.children[0].children[1].children[0].children[1].children[1].children[0].children[3].id = "priceApparatConf_" + idRow;	
		cloneRow.children[0].children[1].children[0].children[1].children[1].children[0].children[5].id = "priceApparatLot_" + idRow;
		cloneRow.children[0].children[1].children[0].children[1].children[1].children[0].children[0].children[1].addEventListener('click', hideContent("priceApparatModel_" + idRow));
		cloneRow.children[0].children[1].children[0].children[1].children[1].children[0].children[2].children[1].addEventListener('click', hideContent("priceApparatConf_" + idRow));
		cloneRow.children[0].children[1].children[0].children[1].children[1].children[0].children[4].children[1].addEventListener('click', hideContent("priceApparatLot_" + idRow));
		
		cloneRow.children[0].children[1].children[0].children[1].children[1].children[1].id = "priceCompressor_" + idRow;
		cloneRow.children[0].children[1].children[0].children[1].children[1].children[1].children[1].id = "priceCompressorModel_" + idRow;	
		cloneRow.children[0].children[1].children[0].children[1].children[1].children[1].children[3].id = "priceCompressorSale_" + idRow;	
		cloneRow.children[0].children[1].children[0].children[1].children[1].children[1].children[5].id = "priceCompressorProd_" + idRow;	
		cloneRow.children[0].children[1].children[0].children[1].children[1].children[1].children[0].addEventListener('click', hideContent("priceCompressorModel_" + idRow));
		cloneRow.children[0].children[1].children[0].children[1].children[1].children[1].children[2].addEventListener('click', hideContent("priceCompressorSale_" + idRow));
		cloneRow.children[0].children[1].children[0].children[1].children[1].children[1].children[4].addEventListener('click', hideContent("priceCompressorProd_" + idRow));
		
		cloneRow.children[0].children[1].children[0].children[1].children[1].children[2].id = "priceElevator_" + idRow;
		
		cloneRow.children[0].children[2].id = 'specificCount_' + idRow;
		cloneRow.children[0].children[2].addEventListener('change', ReturnSpecificPrice(idRow));
		cloneRow.children[0].children[3].id = 'specificPrice_' + idRow;
		cloneRow.children[0].children[4].id = 'specificSum_' + idRow;
		cloneRow.children[0].children[5].id = 'specificDiscountValue_' + idRow;
		cloneRow.children[0].children[5].addEventListener('change', ReturnSpecificPrice(idRow));
		cloneRow.children[0].children[6].id = 'specificDiscountSum_' + idRow;
		cloneRow.children[0].children[7].id = 'specificNDS_' + idRow;

		var menu = cloneRow.children[0].children[1].children[0].children[1].children[0].children[1].children[0];
		for(var i = 0; i < menu.children.length; i++){
			menu.children[i].children[0].addEventListener('click', ChangePriceRowContent(idRow));
			menu.children[i].children[0].addEventListener('click', ChangePriceColorSegment("priceMenuClassifire_" + idRow));		
		}
	}
	cloneFixRow();	
	cloneArticleRow();
}
// окраска кнопок и смена отображения 
function ChangePriceColorSegment(object){
	return function(e){
		var number = Number(object.split("_")[1]);
		// var placeholder = document.getElementById('priceInput_'+ number).placeholder;
		var main = document.getElementById(object).children[0];
		var k = object.split('_')[0] == "priceMenuClassifire" ? 0 : 1;
		var priceApparat = document.getElementById(object).parentNode;
		if (this.style.backgroundColor != "") {
			for (var i = k; i < main.children.length; i++) {
				if( object.split('_')[0] != "priceApparatModel"){
					main.children[i].style.display = "";
				}
				else if(main.children[i].children[0].value == 'СмартСорт' || main.children[i].children[0].value == "МиниСорт" && object.split('_')[0] == "priceApparatModel"){
					main.children[i].style.display = "";
				}
			}
			this.style.backgroundColor = "";
			switch(type){
				case "Аппарат":
					switch(this.parentNode.parentNode.parentNode.id.split("_")[0]){
						case "priceApparatModel":
							SpecificData[number-1].apparat.model = '';
							if(this.value == "МиниСорт"){
								SpecificData[number-1].apparat.configuration = '';
								SpecificData[number-1].apparat.tray = '';
							}
							break;
						case "priceApparatConf":
							SpecificData[number-1].apparat.configuration = '';
							break;
						case "priceApparatLot":
							SpecificData[number-1].apparat.tray = '';
							break;
					}		
					break;
				case "Компрессор":
					switch(this.parentNode.parentNode.parentNode.id.split("_")[0]){
						case "priceCompressorModel":
							SpecificData[number-1].compressor.model = '';
							break;
						case "priceCompressorSale":
							SpecificData[number-1].compressor.manufacturer = '';
							break;
						case "priceCompressorProd":
							SpecificData[number-1].compressor.capacity = '';							
							break;
					}	
					break;
				case "Элеватор":
					break;					
			}
			switch(this.value){
				case "МиниСорт":
					priceApparat.children[2].style.display = 'none';
					priceApparat.children[3].style.display = 'none';
					priceApparat.children[4].style.display = 'none';
					priceApparat.children[5].style.display = 'none';	
					break;
				case "СмартСорт":
					priceApparat.children[2].style.display = 'none';
					priceApparat.children[3].style.display = 'none';
					priceApparat.children[4].style.display = 'none';
					priceApparat.children[5].style.display = 'none';
					break;
				case "Comaro":
					priceApparat.children[2].style.display = 'none';
					priceApparat.children[3].style.display = 'none';
					priceApparat.children[4].style.display = 'none';
					priceApparat.children[5].style.display = 'none';	
					break;
				case "ABAC":
					priceApparat.children[2].style.display = 'none';
					priceApparat.children[3].style.display = 'none';
					priceApparat.children[4].style.display = 'none';
					priceApparat.children[5].style.display = 'none';
					break;
			}
			if(object.split('_')[0] == 'priceCompressorSale'){
				var Compressor = document.getElementById('priceCompressor_' + number);

				var capacityCompressor = Compressor.children[5].children[0];

				for(var i = capacityCompressor.children.length - 1; i > 0; i--){
					capacityCompressor.children[i].remove();
				}
			}	
		}
		else {
			for (var i = 0; i < main.children.length; i++) {
				main.children[i].style.display = "none";
			}
			this.parentNode.style.display = "";
			this.style.backgroundColor = "#ffb23f";
			switch(type){
				case "Аппарат":
					switch(this.parentNode.parentNode.parentNode.id.split("_")[0]){
						case "priceApparatModel":
							SpecificData[number-1].apparat.model = this.value == 'СмартСорт' ? 'SmartSort B' : "MiniSort";
							if(this.value == "МиниСорт"){
								SpecificData[number-1].apparat.configuration = '';
								SpecificData[number-1].apparat.tray = '';
							}
							break;
						case "priceApparatConf":
							SpecificData[number-1].apparat.configuration = this.value;
							break;
						case "priceApparatLot":
							SpecificData[number-1].apparat.tray = this.value;
							break;
					}		
					break;
				case "Компрессор":
					switch(this.parentNode.parentNode.parentNode.id.split("_")[0]){
						case "priceCompressorModel":
							SpecificData[number-1].compressor.model = this.value;
							sortCompressorSeria(this.value, number);
							break;
						case "priceCompressorSale":
							SpecificData[number-1].compressor.manufacturer = this.value;
							break;
						case "priceCompressorProd":
							SpecificData[number-1].compressor.capacity = this.value;							
							break;
					}	
					break;
				case "Элеватор":
					break;
			}			
			switch(this.value){
				case "МиниСорт":
					priceApparat.children[2].style.display = 'none';
					priceApparat.children[3].style.display = 'none';
					priceApparat.children[4].style.display = 'none';
					priceApparat.children[5].style.display = 'none';	
					break;
				case "СмартСорт":
					priceApparat.children[2].style.display = 'flex';
					priceApparat.children[3].style.display = 'flex';
					priceApparat.children[4].style.display = 'flex';
					priceApparat.children[5].style.display = 'flex';
					break;
				case "Comaro":
					priceApparat.children[2].style.display = 'flex';
					priceApparat.children[3].style.display = 'flex';
					priceApparat.children[4].style.display = 'flex';
					priceApparat.children[5].style.display = 'flex';	
					break;
				case "ABAC":
					priceApparat.children[2].style.display = 'flex';
					priceApparat.children[3].style.display = 'flex';
					priceApparat.children[4].style.display = 'flex';
					priceApparat.children[5].style.display = 'flex';
					break;
			}
		}		
	}
}
function PriceInfoRow(type, idRow){	
	var Apparat = document.getElementById('priceApparat_' + idRow);
	var Compressor = document.getElementById('priceCompressor_' + idRow);

	var modelApparat = Apparat.children[1].children[0];
	var ConfigurationApparat = Apparat.children[3].children[0];
	var lotkiApparat = Apparat.children[5].children[0];

	var modelCompressor = Compressor.children[1].children[0];	
	var seriaCompressor = Compressor.children[3].children[0];
	var capacityCompressor = Compressor.children[5].children[0];

	switch(type){//разбить на функи
		case "Аппарат":
			//очистка списков аппарат меню
			for(var i = modelApparat.children.length - 1; i > 0; i--){
				modelApparat.children[i].remove();
			}
			for(var i = ConfigurationApparat.children.length - 1; i > 0; i--){
				ConfigurationApparat.children[i].remove();
			}
			for(var i = lotkiApparat.children.length - 1; i > 0; i--){
				lotkiApparat.children[i].remove();
			}
			// запонение списков
				// запонение списка модели
			for(var i = 0; i < Model.length; i++){		
				var cloneModelApparat = modelApparat.children[0].cloneNode(true);
				cloneModelApparat.children[0].id = Model[i].id;
				cloneModelApparat.children[0].value = Model[i].Model;
				cloneModelApparat.style.display = '';
				if(i == 0){
					cloneModelApparat.children[0].value = 'СмартСорт';
				}
				else if(i == 5)
					cloneModelApparat.children[0].value = "МиниСорт";
				else
					cloneModelApparat.style.display = 'none';
				
				modelApparat.appendChild(cloneModelApparat);		
			}
			for(var i = 0; i < modelApparat.children.length; i++){
				modelApparat.children[i].children[0].addEventListener('click', ChangePriceColorSegment("priceApparatModel_" + idRow));
			}
				// запонение списка серии
			for(var i = 0; i < Configuration.length; i++){
				var cloneConfigurationApparat = ConfigurationApparat.children[0].cloneNode(true);
				cloneConfigurationApparat.children[0].id = i;
				cloneConfigurationApparat.children[0].value = Configuration[i].configuration;
				cloneConfigurationApparat.style.display = '';
				
				ConfigurationApparat.appendChild(cloneConfigurationApparat);
				if(i == 3){
					break
				}
			}
			for(var i = 0; i < ConfigurationApparat.children.length; i++){
				ConfigurationApparat.children[i].children[0].addEventListener('click', ChangePriceColorSegment("priceApparatConf_" + idRow));
			}
				// запонение списка лотков
			for(var i = 0; i < lotok.length; i++){
				var clonelotkiApparat = lotkiApparat.children[0].cloneNode(true);
				clonelotkiApparat.children[0].id = i;
				clonelotkiApparat.children[0].value = lotok[i].trays;
				clonelotkiApparat.style.display = ''; 
		
				lotkiApparat.appendChild(clonelotkiApparat);
				if(i == 5){
					break
				}
			}
			for(var i = 0; i < lotkiApparat.children.length; i++){
				lotkiApparat.children[i].children[0].addEventListener('click', ChangePriceColorSegment("priceApparatLot_" + idRow));
			}			
			break;
		case "Компрессор":
			for(var i = modelCompressor.children.length - 1; i > 0; i--){
				modelCompressor.children[i].remove();
			}
			for(var i = seriaCompressor.children.length - 1; i > 0; i--){
				seriaCompressor.children[i].remove();
			}
			for(var i = capacityCompressor.children.length - 1; i > 0; i--){
				capacityCompressor.children[i].remove();
			}

			for(var i = 0; i < KompressorType.length; i++){		
				var cloneModelCompressor = modelCompressor.children[0].cloneNode(true);
				cloneModelCompressor.children[0].id = KompressorType[i].id;
				cloneModelCompressor.children[0].value = KompressorType[i].compressor;
				cloneModelCompressor.style.display = '';
				
				modelCompressor.appendChild(cloneModelCompressor);		
			}
			for(var i = 0; i < modelCompressor.children.length; i++){
				modelCompressor.children[i].children[0].addEventListener('click', ChangePriceColorSegment("priceCompressorModel_" + idRow));
			}
			clearDublicate(modelCompressor);
			break;
		case "Элеватор":
			
			break;					
	}
}
function sortCompressorSeria(model, idRow){
	var Compressor = document.getElementById('priceCompressor_' + idRow);

	var seriaCompressor = Compressor.children[3].children[0];
	
	for(var i = seriaCompressor.children.length - 1; i > 0; i--){
		seriaCompressor.children[i].remove();
	}
	for(var i = 0; i < KompressorType.length; i++){
		var cloneSeriaCompressor = seriaCompressor.children[0].cloneNode(true);
		if(KompressorType[i].compressor == model){
			cloneSeriaCompressor.children[0].id = i;
			cloneSeriaCompressor.children[0].value = KompressorType[i].seria;
			cloneSeriaCompressor.style.display = '';
			seriaCompressor.appendChild(cloneSeriaCompressor);
		}
	}
	for(var i = 0; i < seriaCompressor.children.length; i++){
		seriaCompressor.children[i].children[0].addEventListener('click', ChangePriceColorSegment("priceCompressorSale_" + idRow));
		seriaCompressor.children[i].children[0].addEventListener('click', sortCompressorCapacity(idRow));
	}	
}
function sortCompressorCapacity(idRow){
	return function (e){
		var Compressor = document.getElementById('priceCompressor_' + idRow);

		var capacityCompressor = Compressor.children[5].children[0];

		for(var i = capacityCompressor.children.length - 1; i > 0; i--){
			capacityCompressor.children[i].remove();
		}
		for(var i = 0; i < Kompressor.length; i++){
			var cloneСapacity = capacityCompressor.children[0].cloneNode(true);
			if(Kompressor[i].compressorManufacturer == SpecificData[idRow-1].compressor.model && Kompressor[i].compressorModel == SpecificData[idRow-1].compressor.manufacturer){
				cloneСapacity.children[0].id = i;
				cloneСapacity.children[0].value = Kompressor[i].compressorEnginePower;
				cloneСapacity.style.display = '';

				capacityCompressor.appendChild(cloneСapacity);
			}
			
		}
		for(var i = 0; i < capacityCompressor.children.length; i++){
			capacityCompressor.children[i].children[0].addEventListener('click', ChangePriceColorSegment("priceCompressorProd_" + idRow));
		}
		clearDublicate(capacityCompressor);

	}
}
//удаляет дубли в списках
function clearDublicate(object){
	var original = [];	
	var dropdownCompLotki = object;// document.getElementById(object)
	
	for(var i = dropdownCompLotki.getElementsByClassName("inputOption").length-1; i > 0 ; i--){
		var thisText = dropdownCompLotki.getElementsByClassName("inputOption")[i].value;
		if(original.indexOf(thisText) == -1){
			original.push(thisText);
		}
		else{
			dropdownCompLotki.getElementsByClassName("inputOption")[i].parentNode.remove();
		}
	}
	
	original.sort((a, b) => parseFloat(a) - parseFloat(b));
	for(var i = 1; i < dropdownCompLotki.getElementsByClassName("inputOption").length; i++){
		dropdownCompLotki.getElementsByClassName("inputOption")[i].value = original[i-1];
	}
}
// функа после нажатия кнопки ок
function presetPrice(idRow){
	return function (e){
		switch(type){
			case "Аппарат":					
				getModelPriceSpecific(idRow);
				break;
			case "Компрессор":
				getCompressorPriceSpecific(idRow);				
				break;
			case "Элеватор":
				break;
		}
		priceInputTextForm(idRow, type);
		document.getElementById("priceInput_" + idRow).click();	
		CalculationSumPrice();
	}
}
function priceInputTextForm(idRow, placeholder){
	var input = document.getElementById('priceInput_'+ idRow);
	var text;
	switch(placeholder){
		case "Аппарат":			
			text = SpecificData[idRow-1].apparat.model + ' ' + SpecificData[idRow-1].apparat.configuration + ' ' + SpecificData[idRow-1].apparat.tray;			
			break;
		case "Компрессор":
			text = SpecificData[idRow-1].compressor.model + ' ' + SpecificData[idRow-1].compressor.manufacturer + ' ' + SpecificData[idRow-1].compressor.capacity;
			break;
		case "Элеватор":
			break;
	}
	input.placeholder = text;
	
}
function getModelPriceSpecific(idRow){
	var targetElevator = SpecificData[idRow-1].apparat.model;
	var targetLotok = SpecificData[idRow-1].apparat.tray;
	var targetConfig = SpecificData[idRow-1].apparat.configuration;
	var select = '0';//тут убрал ибо нет блока с %
	
	var fullName = targetElevator + " " + targetLotok + " " + targetConfig;
	
	for(var i = 0; i < Price.length; i++){
		if(fullName.split(" ").length == 3){
			var modelName = Price[i].name.split(" ")[0];
			var lotokType = Price[i].name.split(" ")[1];
			var configuration = Price[i].name.split(" ")[2];
		}
		else if(fullName.split(" ").length == 4){
			var modelName = Price[i].name.split(" ")[0] + " " + Price[i].name.split(" ")[1];
			var lotokType = Price[i].name.split(" ")[2];
			var configuration = Price[i].name.split(" ")[3];
		}
		
		if(targetElevator == modelName && targetLotok == lotokType && (targetConfig == configuration || configuration == null)){
			document.getElementById("specificPrice_" + idRow).value = select.value == "0" ? Price[i].priceNDS : Price[i].priceExport;
			// changeValut(idRow);
			CalculateSpecificPrice(idRow);
		}
	}
}
function getCompressorPriceSpecific(idRow){
	// var select = headerTooltip.children[6].children[0];
	var compressor = SpecificData[idRow-1].compressor.model;
	var model = SpecificData[idRow-1].compressor.manufacturer;
	var motor = SpecificData[idRow-1].compressor.capacity;
	
	for(var i = 0; i < Kompressor.length; i++){
		if(compressor == Kompressor[i].compressorManufacturer && model == Kompressor[i].compressorModel && motor == Kompressor[i].compressorEnginePower){
			document.getElementById("specificPrice_" + idRow).value = Number(Kompressor[i].compressorPrice * CRB_RUB_RATE[Kompressor[i].currency].Value).toFixed(2);
			// changeValut(idRow);
			CalculateSpecificPrice(idRow);
		}
	}
}
function CalculateSpecificPrice(id){
	var selectRegion = '0';//headerTooltip.children[5].children[0].value
	var selectDiscount = '0';//headerTooltip.children[6].children[0].value
	document.getElementById('specificSum_' + id).value = document.getElementById('specificCount_'+ id).value * document.getElementById('specificPrice_'+ id).value;
	document.getElementById('specificDiscountSum_'+ id).value = document.getElementById('specificSum_'+ id).value - (document.getElementById('specificSum_'+ id).value / 100 * document.getElementById('specificDiscountValue_'+ id).value);//selectDiscount == "0" ? document.getElementById('specificSum_'+ id).value - document.getElementById('specificDiscountValue_'+ id).value : 
	document.getElementById('specificNDS_'+ id).value = selectRegion == "0" ? document.getElementById('specificDiscountSum_'+ id).value/120*20 : "0.00";
	document.getElementById('specificDiscountValue_'+ id).value = document.getElementById('specificDiscountValue_'+ id).value;
	
	document.getElementById('specificSum_' + id).value = Number(document.getElementById('specificSum_' + id).value).toFixed(2);
	document.getElementById('specificDiscountSum_' + id).value = Number(document.getElementById('specificDiscountSum_' + id).value).toFixed(2);
	document.getElementById('specificNDS_' + id).value = Number(document.getElementById('specificNDS_' + id).value).toFixed(2);
	document.getElementById('specificDiscountValue_' + id).value = Number(document.getElementById('specificDiscountValue_' + id).value).toFixed(2);
}
function CalculationSumPrice(){
	var sum = 0;
	var discountSum = 0;
	var discountValue = 0;
	var nds = 0;

	// var selectRegion = '0';//headerTooltip.children[5].children[0].value
	var selectDiscount = '0';//headerTooltip.children[6].children[0].value

	for (var i = 1; i< priceMainRow.children.length; i++){
		sum += parseFloat(document.getElementById('specificSum_' + i).value);
		discountSum += parseFloat(document.getElementById('specificDiscountSum_' + i).value);
		discountValue += selectDiscount == "0" ? parseFloat(document.getElementById('specificDiscountValue_' + i).value) : Number(document.getElementById('specificSum_'+ i).value) / 100 * Number(document.getElementById('specificDiscountValue_'+ i).value);
		nds += parseFloat(document.getElementById('specificNDS_' + i).value);
	}

	document.getElementById('sumTotalTest').value = Number(sum).toFixed(2);
	document.getElementById('discountSumTotalTest').value = Number(discountSum).toFixed(2);
	document.getElementById('discountValueTotalTest').value = (selectDiscount == "0" || discountValue == 0)? Number(discountValue).toFixed(2) : Number(discountValue / (sum / 100)).toFixed(2);

	document.getElementById('ndsTotalTest').value = Number(nds).toFixed(2);
}

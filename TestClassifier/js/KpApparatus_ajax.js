var checkLoad = true;
 
function get_separation_model(){
	$.getJSON($SCRIPT_ROOT + '/commercial_offer_main/separation/model',{
	}, function(data){
		for(var i = 0; i < data.result.length; i++){
			Model.push({
				"id": data.result[i].id,
				"Model": data.result[i].Model,
				"Voltage": data.result[i].Voltage,
				"Hz": data.result[i].Hz,
				"Air_MPa": data.result[i].Air_MPa,
				"air_class": data.result[i].air_class,
				"defence_class": data.result[i].defence_class,
				"defence_lvl": data.result[i].defence_lvl,
				"temp": data.result[i].temp,
				"wet": data.result[i].wet,
				"DBA": data.result[i].DBA,
				"explore_time": data.result[i].explore_time
			});
		}
		get_separation_main();
	})
	.fail(function(jqXHR, exception){
		//var msg = "Status Error: " + jqXHR.status + "; exeption: " + exception + "; responseText: " + jqXHR.responseText;
		//ErrorLog(msg, false);
	});
}
function get_separation_main(){
	$.getJSON($SCRIPT_ROOT + '/commercial_offer_main/separation/main',{
	}, function(data){
		for(var i = 0; i < data.result.length; i++){
			Main.push({
				"id": data.result[i].id,
				"Model": data.result[i].Model,
				"frame": data.result[i].frame,
				"modelNumber": data.result[i].modelNumber,
				"Channel": data.result[i].Channel,
				"Capacity": data.result[i].Capacity,
				"Weight": data.result[i].Weight,
				"kW": data.result[i].kW,
				"air_flow": data.result[i].air_flow,
				"Air_flowMax": data.result[i].Air_flowMax,
				"aspiration": data.result[i].aspiration,
				"description": data.result[i].description,
				"imageName": data.result[i].imageName,
				"sizeHeight": data.result[i].sizeHeight,
				"sizeDeep": data.result[i].sizeDeep,
				"sizeWidth": data.result[i].sizeWidth,
				"ModelRU": data.result[i].ModelRU
			});
		}
		get_separation_configuration();
	})
	.fail(function(jqXHR, exception){
		//var msg = "Status Error: " + jqXHR.status + "; exeption: " + exception + "; responseText: " + jqXHR.responseText;
		//ErrorLog(msg, false);
	});
}
function get_separation_configuration(){
	$.getJSON($SCRIPT_ROOT + '/commercial_offer_main/separation/configuration',{
	}, function(data){
		for(var i = 0; i < data.result.length; i++){
			Configuration.push({
				"id": data.result[i].id,
				"Model": data.result[i].Model,
				"configuration": data.result[i].configuration,
				"Cleaning_factor": data.result[i].Cleaning_factor,
				"CCD": data.result[i].CCD,				
				"Description": data.result[i].Description				
			});
		}
	})
	.fail(function(jqXHR, exception){
		//var msg = "Status Error: " + jqXHR.status + "; exeption: " + exception + "; responseText: " + jqXHR.responseText;
		//ErrorLog(msg, false);
	});
}
function get_separation_KompressorType(){
	$.getJSON($SCRIPT_ROOT + '/commercial_offer_main/separation/KompressorType',{
	}, function(data){
		for(var i = 0; i < data.result.length; i++){
			KompressorType.push({
				"id": data.result[i].id,
				"compressor": data.result[i].compressor,
				"seria": data.result[i].seria,
				"infoTitle": data.result[i].infoTitle,
				"description": data.result[i].description,
				"description_seria": data.result[i].description_seria,
				"option": data.result[i].option
			});
		}
		get_separation_Kompressor()
	})
	.fail(function(jqXHR, exception){
		//var msg = "Status Error: " + jqXHR.status + "; exeption: " + exception + "; responseText: " + jqXHR.responseText;
		//ErrorLog(msg, false);
	});
}
function get_separation_Kompressor(){
	$.getJSON($SCRIPT_ROOT + '/commercial_offer_main/separation/Kompressor',{
	}, function(data){
		for(var i = 0; i < data.result.length; i++){
			Kompressor.push({
				"id": data.result[i].id,
				"compressorManufacturer": data.result[i].compressorManufacturer,
				"compressorModel": data.result[i].compressorModel,
				"compressorEnginePower": data.result[i].compressorEnginePower,
				"compressorVolume": data.result[i].compressorVolume,				
				"compressorCapacity": data.result[i].compressorCapacity,				
				"compressorPressure": data.result[i].compressorPressure,				
				"compressorVoltage": data.result[i].compressorVoltage,				
				"compressorHz": data.result[i].compressorHz,				
				"compressorPhase": data.result[i].compressorPhase,				
				"compressorMass": data.result[i].compressorMass,				
				"compressorPrice": parseFloat(data.result[i].compressorPrice.replace(",",".").replace(/[^0-9.]/gim, "")),				
				"desiccant": data.result[i].desiccant,				
				"filter": data.result[i].filter,	
				"ressiver": data.result[i].ressiver,	
				"imageName": data.result[i].imageName,		
				"currency": data.result[i].currency		
			});
		}
		get_separation_Price();		
	})
	.fail(function(jqXHR, exception){
		//var msg = "Status Error: " + jqXHR.status + "; exeption: " + exception + "; responseText: " + jqXHR.responseText;
		//ErrorLog(msg, false);
	});
}
function get_separation_Price(){
	$.getJSON($SCRIPT_ROOT + '/commercial_offer_main/separation/Price',{
	}, function(data){
		for(var i = 0; i < data.result.length; i++){
			Price.push({
				"id": data.result[i].id,
				"name": data.result[i].name,
				"price": parseFloat(data.result[i].price.replace(",",".").replace(/[^0-9.]/gim, "")),
				"priceNDS": parseFloat(data.result[i].priceNDS.replace(",",".").replace(/[^0-9.]/gim, "")),					
				"priceExport": parseFloat(data.result[i].priceExport.replace(",",".").replace(/[^0-9.]/gim, ""))					
			});
		}
		get_separation_Conditions();		
	})
	.fail(function(jqXHR, exception){
		//var msg = "Status Error: " + jqXHR.status + "; exeption: " + exception + "; responseText: " + jqXHR.responseText;
		//ErrorLog(msg, false);
	});

}
function get_separation_Conditions(){
	$.getJSON($SCRIPT_ROOT + '/commercial_offer_main/separation/Conditions',{
	}, function(data){
		for(var i = 0; i < data.result.length; i++){
			Conditions.push({
				"termsOfPayment": data.result[i].termsOfPayment,
				"priceIncludes": data.result[i].priceIncludes,
				"Commissioning": data.result[i].Commissioning,
				"guarantee": data.result[i].guarantee,
				"delivery": data.result[i].delivery									
			});
		}
		// setupDelivery();
		// CalcWindowSelectorLoad();
		get_translate_companys();
	})
	.fail(function(jqXHR, exception){
		//var msg = "Status Error: " + jqXHR.status + "; exeption: " + exception + "; responseText: " + jqXHR.responseText;
		//ErrorLog(msg, false);
	});
}
//Загрузка данных по комерческому предложению если они есть
function get_commercial_elements(){
	$.post($SCRIPT_ROOT + '/commercial_offer_main/load_offer',{
		id_task: InfoDeal.id_deal,
		id_offer: InfoDeal.id_commercial_offer,
		economicModel: "ВЭД"
	}, function(data){
		if(data.result.economic_model.length != 0){
			//Установка типа экономической модели
			headerTooltip.children[5].children[0].value = data.result.economic_model[0];
			changeEconomModel();
			//Подстановка элементов комерческого предложения
			var list_ColorSorter = data.result.list_ColorSorter;
			var list_Compressor = data.result.list_Compressor;
			var list_Protocol = data.result.list_Protocol;
			var list_Elevator = data.result.list_Elevator;
			var list_Other = data.result.list_Other;
			
			var rowElement = 1;
			//установка сепараторов 
			for(var i = 0; i < list_ColorSorter.length; i++){
				mainSelector.value = 0;
				changeMachineType();
				var apparatName = list_ColorSorter[i][2].split(" ")[0] == "SmartSort" ? list_ColorSorter[i][2].split(" ")[0] + " " + list_ColorSorter[i][2].split(" ")[1]: list_ColorSorter[i][2].split(" ")[0];
				for(var j = 0; j < calcElevator.options.length; j++){
					if(apparatName == calcElevator.options[j].textContent){
						calcElevator.value = j;
					}
					selectorParam();
				}
				var config = list_ColorSorter[i][2].split(" ")[0] == "SmartSort" ? list_ColorSorter[i][2].split(" ")[3] : list_ColorSorter[i][2].split(" ")[2];
				var loctok = list_ColorSorter[i][2].split(" ")[0] == "SmartSort" ? list_ColorSorter[i][2].split(" ")[2] : list_ColorSorter[i][2].split(" ")[1];
				calcConf.value = config;
				calcLotok.value = loctok;
				CalculatorClose();
				
				document.getElementById("count_" + rowElement).value = list_ColorSorter[i][3];
				document.getElementById("price_" + rowElement).value = list_ColorSorter[i][4];
				document.getElementById("discountValue_" + rowElement).value = value = Number(list_ColorSorter[i][4] * list_ColorSorter[i][3] - list_ColorSorter[i][5]);
				
				CalculatePrice(rowElement);
				updateComercialOfferElement(rowElement);
				rowElement++;
			}
			//установка компрессоров
			for(var i = 0; i < list_Compressor.length; i++){
				mainSelector.value = 1;
				changeMachineType();
				
				genesisProvider.value = list_Compressor[i][2].split(" ")[0];
				selectorKompressor();
				GenesisModel.value = list_Compressor[i][2].split(" ")[1];
				selectorKompressorModel();
				GenesisMotor.value = list_Compressor[i][2].split(" ")[2];
				CalculatorClose();
				
				document.getElementById("count_" + rowElement).value = list_Compressor[i][3];
				document.getElementById("price_" + rowElement).value = list_Compressor[i][4];
				document.getElementById("discountValue_" + rowElement).value = value = Number(list_Compressor[i][4] * list_Compressor[i][3] - list_Compressor[i][5]).toFixed(2);
				
				CalculatePrice(rowElement);
				updateComercialOfferElement(rowElement);
				rowElement++;
			}
			if(list_Elevator != 0){
				setupElevatorElements(list_Elevator, list_Other, list_Protocol, 0);
			}
			else{
				setupOtherElements(list_Other, list_Protocol);
			}
		}
		headerTooltip.children[6].children[0].value = 1;
		changeDiscountType();
	})
	.fail(function(jqXHR, exception){
		//var msg = "Status Error: " + jqXHR.status + "; exeption: " + exception + "; responseText: " + jqXHR.responseText;
		//ErrorLog(msg, false);
	});	
}
function setupElevatorElements(list_Elevator, list_Other, list_Protocol, list_id){
	mainSelector.value = 3;
	changeMachineType();
	
	elevatorSelector.children[0].children[0].children[0].value = list_Elevator[list_id][2];
	get_Elevators([list_Elevator, list_Other, list_Protocol, list_id]);
}
function setupOtherElements(list_Other, list_Protocol){
	//Установка прочего
	for(var i = 0; i < list_Other.length; i++){
		mainSelector.value = 7;
		changeMachineType();
		
		CalculatorClose();
		
		var rowElement = priceModelBlock.children.length-1;
		document.getElementById("componentName_" + rowElement).textContent = list_Other[i][2];
		document.getElementById("count_" + rowElement).value = list_Other[i][3];
		document.getElementById("price_" + rowElement).value = list_Other[i][4];
		document.getElementById("discountValue_" + rowElement).value = value = Number(list_Other[i][4] - list_Other[i][5]).toFixed(2);
			
		CalculatePrice(rowElement);
		updateComercialOfferElement(rowElement);
		rowElement++;
	}
	if(list_Protocol.length != 0)
		setupProtocolElements(list_Protocol, 0);
	else
		CalculationSum();
}
function setupProtocolElements(list_Protocol, list_id){
	mainSelector.value = 2;
	changeMachineType();
	
	protocolSelector.children[0].children[0].children[0].value = list_Protocol[list_id][2];
	get_protocolData([list_Protocol, list_id]);
}
// получение значений дополнительных эелементов для оборудования
function get_aspiration(){
	$.getJSON($SCRIPT_ROOT + '/commercial_offer_main/Aspiration',{
	}, function(data){
		for(var i = 0; i < data.result.length; i++){
			Aspiration.push({
				"id": data.result[i].id,
				"type": data.result[i].type,
				"lotok": data.result[i].lotok,
				"name": data.result[i].name,
				"price": data.result[i].price
			});
		}
		get_bunker();
	})
	.fail(function(jqXHR, exception){});
}
function get_bunker(){
	$.getJSON($SCRIPT_ROOT + '/commercial_offer_main/Bunker',{
	}, function(data){
		for(var i = 0; i < data.result.length; i++){
			Bunker.push({
				"id": data.result[i].id,
				"type": data.result[i].type,
				"lotok": data.result[i].lotok,
				"name": data.result[i].name,
				"price": data.result[i].price
			});
		}
		get_complectation();
	})
	.fail(function(jqXHR, exception){});
}
function get_complectation(){
	$.getJSON($SCRIPT_ROOT + '/commercial_offer_main/Complect',{
	}, function(data){
		for(var i = 0; i < data.result.length; i++){
			Complect.push({
				"RU": data.result[i].RU,
				"EN": data.result[i].EN,
				"price": data.result[i].price,
				"vault": data.result[i].vault
			});
		}
	})
	.fail(function(jqXHR, exception){});
}
//Сохранение данных по комерческому предложению
var __managerName;
var __managerDistrict;
function set_commercial_offer(){
	$.post($SCRIPT_ROOT + '/commercial_offer_main/save_offer',{
		write_data: ComercialOfferElements,
		len: ComercialOfferElements.length,
		managerName: __managerName,
		managerDistrict: __managerDistrict
	}, function(data){
		console.log("Запись статистики по комерческому предложению осуществлена");
	})
	.fail(function(jqXHR, exception){
		//var msg = "Status Error: " + jqXHR.status + "; exeption: " + exception + "; responseText: " + jqXHR.responseText;
		//ErrorLog(msg, false);
	});
}
//getJSON-- запрос данных в виде соотв вида документа


function get_translate_companys(){
	$.getJSON($SCRIPT_ROOT + '/test/translate',{
	}, function(data){
		Translate.push({
			'Title': data.result.Title,
			'Req':data.result.Req,
			'Prot':data.result.Prot,
			'Sort':data.result.Sort,
			'Econom':data.result.Econom
		});
	})
	.fail(function(jqXHR, exception){});
}
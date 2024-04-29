var ElevatorType;

function get_product_K(){
	$.getJSON($SCRIPT_ROOT + '/commercial_offer_main/product_k',{
	}, function(data){
	  for(var i = 0; i < data.result.length; i++){
		Product_K.push({
		  "ID": data.result[i].ID,
		  "nameProduct": data.result[i].nameProduct,
		  "K": data.result[i].k
		});
	  }
	})
	.fail(function(jqXHR, exception){
	  //var msg = "Status Error: " + jqXHR.status + "; exeption: " + exception + "; responseText: " + jqXHR.responseText;
	  //ErrorLog(msg, false);
	});
}
function get_Elevators(addElements){
	$.post($SCRIPT_ROOT + '/commercial_offer_main/elevator',{
		id_deal: elevatorSelector.children[0].children[0].children[0].value.split('.')[0],
		id_CO: elevatorSelector.children[0].children[0].children[0].value.split('.')[1]
	}, function(data){	
		if( data.result[data.result.length-1][6].substr(0,4) == "CSZE"){			
			set_model_CSZE(data);
		}	
		if( data.result[data.result.length-1][6].substr(0,3) == "CSE"){			
			set_model_CSE(data);
		}
		if( data.result[data.result.length-1][6].substr(0,4) == "CSCC"){			
			set_model_CSCC(data);
		}
		if(addElements != null){
			var rowElement = priceModelBlock.children.length-1;
			var list_Elevator = addElements[0];
			var list_Other = addElements[1];
			var list_Protocol = addElements[2];
			var id = addElements[3];
			
			document.getElementById("count_" + rowElement).value = list_Elevator[id][4];
			document.getElementById("price_" + rowElement).value = list_Elevator[id][5];
			document.getElementById("discountValue_" + rowElement).value = value = Number(list_Elevator[id][4] * list_Elevator[id][5] - list_Elevator[id][6]).toFixed(2);
			
			CalculatePrice(rowElement);
			updateComercialOfferElement(rowElement);
			
			if(id != list_Elevator.length-1){
				id++;
				setupElevatorElements(list_Elevator, list_Other, list_Protocol, id);
			}
			else
				setupOtherElements(list_Other, list_Protocol);
		}
	})
	.fail(function(jqXHR, exception){
		var msg = "Status Error: " + jqXHR.status + "; exeption: " + exception + "; responseText: " + jqXHR.responseText;
		ErrorLog(msg, false);
	});
}
function set_model_CSZE(data){	
	ElevatorType = "CSZE";
	ModelCSZE.id_model = data.result[data.result.length-1][4];
	ID_Product = data.result[data.result.length-1][5];
	ModelCSZE.modelName = data.result[data.result.length-1][6];
	ModelCSZE.material = data.result[data.result.length-1][7];
	ModelCSZE.metalThickness = data.result[data.result.length-1][8];
	ModelCSZE.outletSize = data.result[data.result.length-1][9];
			
	ModelCSZE.capacity_param.capacity = parseFloat(data.result[data.result.length-1][10]);
	ModelCSZE.capacity_param.speed = parseFloat(data.result[data.result.length-1][11]);
	ModelCSZE.capacity_param.turn = parseFloat(data.result[data.result.length-1][12]);
	ModelCSZE.capacity_param.step = parseFloat(data.result[data.result.length-1][13]);
	ModelCSZE.capacity_param.bucket = parseFloat(data.result[data.result.length-1][14]);
	ModelCSZE.capacity_param.bucket_load = parseFloat(data.result[data.result.length-1][15]);
			
	ModelCSZE.modelSize.height = parseFloat(data.result[data.result.length-1][16]);
	ModelCSZE.modelSize.top_length = parseFloat(data.result[data.result.length-1][17]);
	ModelCSZE.modelSize.bottom_length = parseFloat(data.result[data.result.length-1][18]);
			
	ModelCSZE.sectionElement.heightSection = data.result[data.result.length-1][19] != "-" ? data.result[0][19].split(",") : [];
	ModelCSZE.sectionElement.topSection = data.result[data.result.length-1][20] != "-" ? data.result[0][20].split(",") : [];
	ModelCSZE.sectionElement.bottomSection = data.result[data.result.length-1][21] != "-" ? data.result[0][21].split(",") : [];
			
	ModelCSZE.onloadElement.load.len_size = parseFloat(data.result[data.result.length-1][22].split(",")[0]);
	ModelCSZE.onloadElement.load.count = parseFloat(data.result[data.result.length-1][22].split(",")[1]);
	ModelCSZE.onloadElement.load.un_price = parseFloat(data.result[data.result.length-1][22].split(",")[2]);
			
	ModelCSZE.onloadElement.unload.len_size = parseFloat(data.result[data.result.length-1][23].split(",")[0]);
	ModelCSZE.onloadElement.unload.count = parseFloat(data.result[data.result.length-1][23].split(",")[1]);
	ModelCSZE.onloadElement.unload.un_price = parseFloat(data.result[data.result.length-1][23].split(",")[2]);
			
	ModelCSZE.onloadElement.load_x = parseFloat(data.result[data.result.length-1][24]);
	ModelCSZE.onloadElement.unload_x = parseFloat(data.result[data.result.length-1][25]);
	ModelCSZE.onloadElement.unload_y = parseFloat(data.result[data.result.length-1][26]);
			
	ModelCSZE.otherComponents.chain.name = data.result[data.result.length-1][27].split(",")[0];
	ModelCSZE.otherComponents.chain.count =  parseFloat(data.result[data.result.length-1][27].split(",")[1]);
	ModelCSZE.otherComponents.chain.un_price =  parseFloat(data.result[data.result.length-1][27].split(",")[2]);
			
	ModelCSZE.otherComponents.bucket.name = data.result[data.result.length-1][28].split(",")[0];
	ModelCSZE.otherComponents.bucket.count =  parseFloat(data.result[data.result.length-1][28].split(",")[1]);
	ModelCSZE.otherComponents.bucket.un_price =  parseFloat(data.result[data.result.length-1][28].split(",")[2]);
			
	ModelCSZE.otherComponents.converter.name = data.result[data.result.length-1][29].split(",")[0];
	ModelCSZE.otherComponents.converter.count =  parseFloat(data.result[data.result.length-1][29].split(",")[1]);
	ModelCSZE.otherComponents.converter.un_price =  parseFloat(data.result[data.result.length-1][29].split(",")[2]);
	ModelCSZE.otherComponents.converter.kW =  parseFloat(data.result[data.result.length-1][29].split(",")[3]);
	ModelCSZE.otherComponents.converter.enable = data.result[data.result.length-1][29].split(",")[4] == "true" ? true : false;
			
	ModelCSZE.otherComponents.reducror.name = data.result[data.result.length-1][30].split(",")[0];
	ModelCSZE.otherComponents.reducror.count =  parseFloat(data.result[data.result.length-1][30].split(",")[1]);
	ModelCSZE.otherComponents.reducror.un_price =  parseFloat(data.result[data.result.length-1][30].split(",")[2]);
	ModelCSZE.otherComponents.reducror.kW =  parseFloat(data.result[data.result.length-1][30].split(",")[3]);
			
	ModelCSZE.otherComponents.motor.name = data.result[data.result.length-1][31].split(",")[0];
	ModelCSZE.otherComponents.motor.count =  parseFloat(data.result[data.result.length-1][31].split(",")[1]);
	ModelCSZE.otherComponents.motor.un_price =  parseFloat(data.result[data.result.length-1][31].split(",")[2]);
	ModelCSZE.otherComponents.motor.kW =  parseFloat(data.result[data.result.length-1][31].split(",")[3]);
			
	ModelCSZE.otherComponents.sensorPodpor.name = data.result[data.result.length-1][32].split(",")[0];
	ModelCSZE.otherComponents.sensorPodpor.count =  parseFloat(data.result[0][32].split(",")[1]);
	ModelCSZE.otherComponents.sensorPodpor.un_price =  parseFloat(data.result[0][32].split(",")[2]);
	ModelCSZE.otherComponents.sensorPodpor.enable = data.result[data.result.length-1][32].split(",")[3] == "true" ? true : false;
			
	ModelCSZE.otherComponents.sensorChain.name = data.result[data.result.length-1][33].split(",")[0];
	ModelCSZE.otherComponents.sensorChain.count =  parseFloat(data.result[data.result.length-1][33].split(",")[1]);
	ModelCSZE.otherComponents.sensorChain.un_price =  parseFloat(data.result[data.result.length-1][33].split(",")[2]);
	ModelCSZE.otherComponents.sensorChain.enable = data.result[data.result.length-1][33].split(",")[3] == "true" ? true : false;
			
	ModelCSZE.otherComponents.controlBox.name = data.result[data.result.length-1][34].split(",")[0];
	ModelCSZE.otherComponents.controlBox.count =  parseFloat(data.result[0][34].split(",")[1]);
	ModelCSZE.otherComponents.controlBox.un_price =  parseFloat(data.result[data.result.length-1][34].split(",")[2]);
	ModelCSZE.otherComponents.controlBox.enable = data.result[data.result.length-1][34].split(",")[3] == "true" ? true : false;
			
	ModelCSZE.otherComponents.backward.name = data.result[data.result.length-1][35].split(",")[0];
	ModelCSZE.otherComponents.backward.count =  parseFloat(data.result[data.result.length-1][35].split(",")[1]);
	ModelCSZE.otherComponents.backward.un_price =  parseFloat(data.result[data.result.length-1][35].split(",")[2]);
	ModelCSZE.otherComponents.backward.enable = data.result[0][35].split(",")[3] == "true" ? true : false;
	ModelCSZE.otherComponents.backward.enable_force = data.result[data.result.length-1][35].split(",")[4] == "true" ? true : false;
			
	ModelCSZE.modelDeliveryData.modelMass = data.result[data.result.length-1][36].split(",")[0];
	ModelCSZE.modelDeliveryData.modelVolume = data.result[data.result.length-1][36].split(",")[1];

	ModelCSZE.basePrice = parseFloat(data.result[data.result.length-1][37]);

	ModelCSZE.sectionPrice.heightSectionPrice = parseFloat(data.result[data.result.length-1][38]);
	ModelCSZE.sectionPrice.topSectionPrice = parseFloat(data.result[data.result.length-1][39]);
	ModelCSZE.sectionPrice.bottomSectionPrice = parseFloat(data.result[data.result.length-1][40]);
	ModelCSZE.sectionPrice.sum = parseFloat(data.result[data.result.length-1][41]);

	ModelCSZE.onloadPrice = parseFloat(data.result[data.result.length-1][42]);
	ModelCSZE.otherPrice = parseFloat(data.result[data.result.length-1][43]);
	ModelCSZE.modelPrice = parseFloat(data.result[data.result.length-1][44]);
	ModelCSZE.NDS = parseFloat(data.result[data.result.length-1][45]);

	createSinglePriceRow();
}
function set_model_CSE(data){
	ElevatorType = "CSE";
	ModelCSE.id_model = data.result[data.result.length-1][4];
	ID_Product = data.result[data.result.length-1][5];
	ModelCSE.modelName = data.result[data.result.length-1][6];
	ModelCSE.material = data.result[data.result.length-1][7];
	ModelCSE.metalThickness.headT = data.result[data.result.length-1][8].split("x")[0]
	ModelCSE.metalThickness.bottomT = data.result[data.result.length-1][8].split("x")[0]
	ModelCSE.metalThickness.tubeT = data.result[data.result.length-1][8].split("x")[1]
	ModelCSE.bucketMaterial = data.result[data.result.length-1][9];
	ModelCSE.carefulTransport = data.result[data.result.length-1][10] == "true" ? true : false;
			
	ModelCSE.capacity_param.capacity = parseFloat(data.result[data.result.length-1][11]);
	ModelCSE.capacity_param.speed = parseFloat(data.result[data.result.length-1][12]);
	ModelCSE.capacity_param.turn = parseFloat(data.result[data.result.length-1][13]);
	ModelCSE.capacity_param.step = parseFloat(data.result[data.result.length-1][14]);
	ModelCSE.capacity_param.bucket = parseFloat(data.result[data.result.length-1][15]);
	ModelCSE.capacity_param.bucket_load = parseFloat(data.result[data.result.length-1][16]);
			
	ModelCSE.modelSize.height = parseFloat(data.result[data.result.length-1][17]);
	ModelCSE.modelSize.unload = parseFloat(data.result[data.result.length-1][18]);
			
	ModelCSE.sectionElement.heightSection = data.result[data.result.length-1][19] != "-" ? data.result[0][18].split(",") : [];
			
	ModelCSE.otherComponents.belt.name = data.result[data.result.length-1][20].split(",")[0];
	ModelCSE.otherComponents.belt.count = data.result[data.result.length-1][20].split(",")[1];
	ModelCSE.otherComponents.belt.un_price = data.result[data.result.length-1][20].split(",")[2];
			
	ModelCSE.otherComponents.bucket.name = data.result[data.result.length-1][21].split(",")[0];
	ModelCSE.otherComponents.bucket.count = data.result[data.result.length-1][21].split(",")[1];
	ModelCSE.otherComponents.bucket.un_price = data.result[data.result.length-1][21].split(",")[2];
			
	ModelCSE.otherComponents.converter.name = data.result[data.result.length-1][22].split(",")[0];
	ModelCSE.otherComponents.converter.count = data.result[data.result.length-1][22].split(",")[1];
	ModelCSE.otherComponents.converter.un_price = data.result[data.result.length-1][22].split(",")[2];
	ModelCSE.otherComponents.converter.kW = data.result[data.result.length-1][22].split(",")[3];
	ModelCSE.otherComponents.converter.enable = data.result[data.result.length-1][22].split(",")[4] == "true" ? true : false;
			
	ModelCSE.otherComponents.reducror.name = data.result[data.result.length-1][23].split(",")[0];
	ModelCSE.otherComponents.reducror.count = data.result[data.result.length-1][23].split(",")[1];
	ModelCSE.otherComponents.reducror.un_price = data.result[data.result.length-1][23].split(",")[2];
	ModelCSE.otherComponents.reducror.kW = data.result[data.result.length-1][23].split(",")[3];
			
	ModelCSE.otherComponents.motor.name = data.result[data.result.length-1][24].split(",")[0];
	ModelCSE.otherComponents.motor.count = data.result[data.result.length-1][24].split(",")[1];
	ModelCSE.otherComponents.motor.un_price = data.result[data.result.length-1][24].split(",")[2];
	ModelCSE.otherComponents.motor.kW = data.result[data.result.length-1][24].split(",")[3];
			
	ModelCSE.otherComponents.sensorSpeed.name = data.result[data.result.length-1][25].split(",")[0];
	ModelCSE.otherComponents.sensorSpeed.count = data.result[data.result.length-1][25].split(",")[1];
	ModelCSE.otherComponents.sensorSpeed.un_price = data.result[data.result.length-1][25].split(",")[2];
	ModelCSE.otherComponents.sensorSpeed.enable = data.result[data.result.length-1][25].split(",")[3] == "true" ? true : false;
		
	ModelCSE.otherComponents.sensorPodporTop.name = data.result[data.result.length-1][26].split(",")[0];
	ModelCSE.otherComponents.sensorPodporTop.count = data.result[data.result.length-1][26].split(",")[1];
	ModelCSE.otherComponents.sensorPodporTop.un_price = data.result[data.result.length-1][26].split(",")[2];
	ModelCSE.otherComponents.sensorPodporTop.enable = data.result[data.result.length-1][26].split(",")[3] == "true" ? true : false;
			
	ModelCSE.otherComponents.sensorPodporBottom.name = data.result[data.result.length-1][27].split(",")[0];
	ModelCSE.otherComponents.sensorPodporBottom.count = data.result[data.result.length-1][27].split(",")[1];
	ModelCSE.otherComponents.sensorPodporBottom.un_price = data.result[data.result.length-1][27].split(",")[2];
	ModelCSE.otherComponents.sensorPodporBottom.enable = data.result[data.result.length-1][27].split(",")[3] == "true" ? true : false;
		
	ModelCSE.otherComponents.sensorBelt.name = data.result[data.result.length-1][28].split(",")[0];
	ModelCSE.otherComponents.sensorBelt.count = data.result[data.result.length-1][28].split(",")[1];
	ModelCSE.otherComponents.sensorBelt.un_price = data.result[data.result.length-1][28].split(",")[2];
	ModelCSE.otherComponents.sensorBelt.enable = data.result[data.result.length-1][28].split(",")[3] == "true" ? true : false;
		
	ModelCSE.otherComponents.controlBox.name = data.result[data.result.length-1][29].split(",")[0];
	ModelCSE.otherComponents.controlBox.count = data.result[data.result.length-1][29].split(",")[1];
	ModelCSE.otherComponents.controlBox.un_price = data.result[data.result.length-1][29].split(",")[2];
	ModelCSE.otherComponents.controlBox.enable = data.result[data.result.length-1][29].split(",")[3] == "true" ? true : false;
			
	ModelCSE.otherComponents.backward.name = data.result[data.result.length-1][30].split(",")[0];
	ModelCSE.otherComponents.backward.count = data.result[data.result.length-1][30].split(",")[1];
	ModelCSE.otherComponents.backward.un_price = data.result[data.result.length-1][30].split(",")[2];
	ModelCSE.otherComponents.backward.enable = data.result[data.result.length-1][30].split(",")[3] == "true" ? true : false;
	ModelCSE.otherComponents.backward.enable_force = data.result[data.result.length-1][30].split(",")[4] == "true" ? true : false;
			
	ModelCSE.basePrice = data.result[data.result.length-1][31];
	ModelCSE.sectionPrice.heightSectionPrice = data.result[data.result.length-1][32];
	ModelCSE.otherPrice = data.result[data.result.length-1][33];
	ModelCSE.modelPrice = data.result[data.result.length-1][34];
	ModelCSE.NDS = data.result[data.result.length-1][35];
	
	createSinglePriceRow();
}
function set_model_CSCC(data){
	ElevatorType = "CSCC";
	ModelCSCC.id_model = data.result[data.result.length-1][4];
	ID_Product = data.result[data.result.length-1][5];
	ModelCSCC.modelName = data.result[data.result.length-1][6];
	ModelCSCC.material = data.result[data.result.length-1][7];
	ModelCSCC.metalThickness.bodyT = data.result[data.result.length-1][8].split("x")[0]
	ModelCSCC.metalThickness.capT = data.result[data.result.length-1][8].split("x")[1]
	ModelCSCC.metalThickness.liningT = data.result[data.result.length-1][8].split("x")[2]
	
	ModelCSCC.capacity_param.capacity = parseFloat(data.result[data.result.length-1][9]);
	ModelCSCC.capacity_param.speed = parseFloat(data.result[data.result.length-1][10]);
	ModelCSCC.capacity_param.turn = parseFloat(data.result[data.result.length-1][11]);
	ModelCSCC.capacity_param.step = parseFloat(data.result[data.result.length-1][12]);
	ModelCSCC.capacity_param.bucket = parseFloat(data.result[data.result.length-1][13]);
	ModelCSCC.capacity_param.bucket_load = parseFloat(data.result[data.result.length-1][14]);
	
	ModelCSCC.modelSize.TransportLength = parseFloat(data.result[data.result.length-1][15]);
	ModelCSCC.modelSize.unloadCenter = parseFloat(data.result[data.result.length-1][16]);
	ModelCSCC.modelSize.loadCenter = parseFloat(data.result[data.result.length-1][17]);
	ModelCSCC.modelSize.unload = parseFloat(data.result[data.result.length-1][18]);
	ModelCSCC.modelSize.load = parseFloat(data.result[data.result.length-1][19]);
	
	ModelCSCC.sectionElement.doubleSideLeteral = parseFloat(data.result[data.result.length-1][20]) == "true" ? true : false;;
	
	ModelCSCC.sectionElement.lengthSection = data.result[data.result.length-1][21] != "-" ? data.result[0][21].split(",") : [];
	ModelCSCC.sectionElement.leteralSection = data.result[data.result.length-1][22] != "-" ? data.result[0][22].split(",") : [];
	ModelCSCC.sectionElement.verticalSection = data.result[data.result.length-1][23] != "-" ? data.result[0][23].split(",") : [];
	
	ModelCSCC.otherComponents.belt.name = data.result[data.result.length-1][24].split(",")[0];
	ModelCSCC.otherComponents.belt.count = data.result[data.result.length-1][24].split(",")[1];
	ModelCSCC.otherComponents.belt.un_price = data.result[data.result.length-1][24].split(",")[2];
	
	ModelCSCC.otherComponents.lining.name = data.result[data.result.length-1][25].split(",")[0];
	ModelCSCC.otherComponents.lining.count = data.result[data.result.length-1][25].split(",")[1];
	ModelCSCC.otherComponents.lining.un_price = data.result[data.result.length-1][25].split(",")[2];
	
	ModelCSCC.otherComponents.bucket.name = data.result[data.result.length-1][26].split(",")[0];
	ModelCSCC.otherComponents.bucket.count = data.result[data.result.length-1][26].split(",")[1];
	ModelCSCC.otherComponents.bucket.un_price = data.result[data.result.length-1][26].split(",")[2];
	
	ModelCSCC.otherComponents.converter.name = data.result[data.result.length-1][27].split(",")[0];
	ModelCSCC.otherComponents.converter.count = data.result[data.result.length-1][27].split(",")[1];
	ModelCSCC.otherComponents.converter.un_price = data.result[data.result.length-1][27].split(",")[2];
	ModelCSCC.otherComponents.converter.kW = data.result[data.result.length-1][27].split(",")[3];
	ModelCSCC.otherComponents.converter.enable = data.result[data.result.length-1][27].split(",")[4] == "true" ? true : false;
	
	ModelCSCC.otherComponents.reductor.name = data.result[data.result.length-1][28].split(",")[0];
	ModelCSCC.otherComponents.reductor.count = data.result[data.result.length-1][28].split(",")[1];
	ModelCSCC.otherComponents.reductor.un_price = data.result[data.result.length-1][28].split(",")[2];
	ModelCSCC.otherComponents.reductor.kW = data.result[data.result.length-1][28].split(",")[3];
	
	ModelCSCC.otherComponents.motor.name = data.result[data.result.length-1][29].split(",")[0];
	ModelCSCC.otherComponents.motor.count = data.result[data.result.length-1][29].split(",")[1];
	ModelCSCC.otherComponents.motor.un_price = data.result[data.result.length-1][29].split(",")[2];
	ModelCSCC.otherComponents.motor.kW = data.result[data.result.length-1][29].split(",")[3];
	
	ModelCSCC.otherComponents.sensorSpeed.name = data.result[data.result.length-1][30].split(",")[0];
	ModelCSCC.otherComponents.sensorSpeed.count = data.result[data.result.length-1][30].split(",")[1];
	ModelCSCC.otherComponents.sensorSpeed.un_price = data.result[data.result.length-1][30].split(",")[2];
	ModelCSCC.otherComponents.sensorSpeed.enable = data.result[data.result.length-1][30].split(",")[3] == "true" ? true : false;
	
	ModelCSCC.otherComponents.sensorPodpor.name = data.result[data.result.length-1][31].split(",")[0];
	ModelCSCC.otherComponents.sensorPodpor.count = data.result[data.result.length-1][31].split(",")[1];
	ModelCSCC.otherComponents.sensorPodpor.un_price = data.result[data.result.length-1][31].split(",")[2];
	ModelCSCC.otherComponents.sensorPodpor.enable = data.result[data.result.length-1][31].split(",")[3] == "true" ? true : false;
	
	ModelCSCC.otherComponents.controlBox.name = data.result[data.result.length-1][32].split(",")[0];
	ModelCSCC.otherComponents.controlBox.count = data.result[data.result.length-1][32].split(",")[1];
	ModelCSCC.otherComponents.controlBox.un_price = data.result[data.result.length-1][32].split(",")[2];
	ModelCSCC.otherComponents.controlBox.enable = data.result[data.result.length-1][32].split(",")[3] == "true" ? true : false;
	
	ModelCSCC.basePrice = data.result[data.result.length-1][33];
	ModelCSCC.sectionPrice.lengthSectionPrice = data.result[data.result.length-1][34];
	ModelCSCC.sectionPrice.leteralSectionPrice = data.result[data.result.length-1][35];
	ModelCSCC.sectionPrice.verticalSectionPrice = data.result[data.result.length-1][36];
	ModelCSCC.otherPrice = data.result[data.result.length-1][37];
	ModelCSCC.modelPrice = data.result[data.result.length-1][38];
	ModelCSCC.NDS = data.result[data.result.length-1][39];
	
	createSinglePriceRow();
}
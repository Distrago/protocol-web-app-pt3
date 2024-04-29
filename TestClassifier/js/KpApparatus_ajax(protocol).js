
//Новая версия
function get_protocolData(addElements){
	$.post($SCRIPT_ROOT + '/protocol/new_get_protocol',{
		id_protocol: protocolSelector.children[0].children[0].children[0].value
	}, function(data){
		//ProtocolData
		setupProtocolData(data.result.ProtocolData);
		setupProductData(data.result.ProtocolData);
		setupSortingData(data.result.ProtocolData);
		setupAcceptRejectData(data.result.ProtocolData);
		setupProtocolComponentData(data.result.ProtocolData);
		//RequrementsData
		setupRequrementsData(data.result.RequrementsData);
		setupFractionsData(data.result.RequrementsData);
		setupRequrementsComponentData(data.result.RequrementsData);
		
		createSinglePriceRow();
		
		if(addElements != null){
			var list_Protocol = addElements[0];
			var list_id = addElements[1];
			
			if(list_id != list_Protocol.length-1){
				list_id++;
				setupProtocolElements(list_Protocol, list_id);
			}
		}
	})
	.fail(function(){
		//get_protocolData(id);
	});
}
//ProtocolData
function setupProtocolData(data){
	protocol.id_protocol = data.protocol[0].ID_Protocol;
	protocol.id_requirements = data.protocol[0].ID_Requirements;
	protocol.id_creater = data.protocol[0].ID_creater;
	protocol.id_responsible = data.protocol[0].ID_responsible;
	protocol.company_name = data.protocol[0].company_name;
	protocol.equipment_machine = data.protocol[0].equipment;
	protocol.configuration = data.protocol[0].configuration;
	protocol.create_date = data.protocol[0].create_date;
	
	
	protocol.sourceProduct.components = [];
	protocol.sorting = [];
	for(var i = 0; i < Number(data.protocol[0].componentValue); i++)
		generateProtocolComponents();
	for(var i = 0; i < Number(data.protocol[0].sortingValue); i++)
		generateProtocolSorting()
}
function setupProductData(data){
	protocol.sourceProduct.name = data.product[0].productName;
	protocol.sourceProduct.purity = Number(data.product[0].purity).toFixed(3);
	protocol.sourceProduct.capacity = Number(data.product[0].capacity_type) == 0 ? 
									Number(data.product[0].capacity).toFixed(3) : Number(data.product[0].capacity * 1000).toFixed(3);	
			
	if(Number(data.product[0].ID_mainPhoto) >= 0){
		var id = Number(data.product[0].ID_mainPhoto)+1;
		protocol.sourceProduct.image 
			= "/static/img/save_img/protocol_"+data.product[0].ID_Protocol+"/"+data.product[0].photoFolder+"/sourceProductImage_"+id+".png?u=" + last_updated;
	}
	else{
		protocol.sourceProduct.image = "/static/img/result/test.jpg";
	}
}
function setupSortingData(data){
	for(var i = 0; i< protocol.sorting.length; i++){
		protocol.sorting[i].capacity =  Number(data.sorting[i].capacity_type) == 0 ? Number(data.sorting[i].capacity) :  Number(data.sorting[i].capacity) * 1000;
		protocol.sorting[i].inbox_fraction = inbox_fraction_decode(data.sorting[i].inbox_fraction);
		protocol.sorting[i].trays_number = Number(data.sorting[i].trays_number).toFixed(2);
	}
}
function setupAcceptRejectData(data){
	for(var i = 0; i< protocol.sorting.length; i++){
		//Парамаетры прохода
		protocol.sorting[i].accept_name = data.accept[i].fractionName;
		protocol.sorting[i].accept_name_id = data.accept[i].fractionNameID;
		protocol.sorting[i].accept_exit = Number(data.accept[i].exit).toFixed(3);
		protocol.sorting[i].accept_purity = Number(data.accept[i].purity).toFixed(3);
		protocol.sorting[i].accept_mass = Number(data.accept[i].capacity).toFixed(3);
		//Параметры отбоя
		protocol.sorting[i].reject_name = data.reject[i].fractionName;
		protocol.sorting[i].reject_name_id = data.reject[i].fractionNameID;
		protocol.sorting[i].reject_exit = Number(data.reject[i].exit).toFixed(3);
		protocol.sorting[i].reject_purity = Number(data.reject[i].purity).toFixed(3);
		protocol.sorting[i].reject_mass = Number(data.reject[i].capacity).toFixed(3);
		
		//Добавляем записанные фотко для прохода
		if(Number(data.accept[i].ID_mainPhoto) >= 0){
			var id = Number(data.accept[i]["ID_mainPhoto"])+1;
			protocol.sorting[i].accept_img 
				= "/static/img/save_img/protocol_"+data.accept[i].ID_Protocol+"/"+data.accept[i].photoFolder+"/acceptImage_"+id+".png?u=" + last_updated;
		}
		else{
			protocol.sorting[i].accept_img = "/static/img/result/test.jpg";
		}
		//Добавляем записанные фотко для отбоя
		if(Number(data.reject[i].ID_mainPhoto) >= 0){
			var id = Number(data.reject[i].ID_mainPhoto)+1;
			protocol.sorting[i].reject_img 
				= "/static/img/save_img/protocol_"+data.reject[i].ID_Protocol+"/"+data.reject[i].photoFolder+"/rejectImage_"+id+".png?u=" + last_updated;
		}
		else{
			protocol.sorting[i].reject_img = "/static/img/result/test.jpg";
		}
	}
}
function setupProtocolComponentData(data){
	for(var i=0; i < protocol.sourceProduct.components.length; i++){
		protocol.sourceProduct.components[i].product_name = data.components[i][3];
		protocol.sourceProduct.components[i].value = Number(data.components[i][4]).toFixed(3);
		protocol.sourceProduct.components[i].flag_1 = (data.components[i][6] == "TRUE") ? true : false;
		protocol.sourceProduct.components[i].flag_2 = (data.components[i][7] == "TRUE") ? true : false;
		//Добавляем записанные фотки
		if(Number(data.components[i][9]) >= 0){
			var id = Number(data.components[i][9])+1;
			protocol.sourceProduct.components[i].image 
				= "/static/img/save_img/protocol_"+data.components[i][0]+"/"+data.components[i][8]+"/component_"+id+".png?u=" + last_updated; 
		}
		else{
			protocol.sourceProduct.components[i].image = "/static/img/result/test.jpg";
		}
						
		for(var j=0; j < protocol.sorting.length; j++){
			var accept_value = Number(data.components[i][(j*8+10)]).toFixed(3);
			var accept_flag_1 = (data.components[i][(j*8+12)] == "TRUE") ? true : false;
			var accept_flag_2 = (data.components[i][(j*8+13)] == "TRUE") ? true : false;
			protocol.sorting[j].accept_components[i] = {
				product_name: data.components[i][3],
				value: Number(accept_value).toFixed(3),
				flag_1: accept_flag_1,
				flag_2: accept_flag_2
			};
			var reject_value = Number(data.components[i][(j*8+14)]).toFixed(3);
			var reject_flag_1 = (data.components[i][(j*8+16)] == "TRUE") ? true : false;
			var reject_flag_2 = (data.components[i][(j*8+17)] == "TRUE") ? true : false;
			protocol.sorting[j].reject_components[i] = {
				product_name: data.components[i][3],
				value: Number(reject_value).toFixed(3),
				flag_1: reject_flag_1,
				flag_2: reject_flag_2
			};
		}
	}
}
//RequrementsData
function setupRequrementsData(data){
	requirements.id_requirements = data.requirements[0].ID_requirements;
	
	var capacity_value = Number(data.requirements[0].capacity_value);
	var capacity_type = data.requirements[0].capacity_type;
	var time_value = Number(data.requirements[0].time_value);
	var time_type = data.requirements[0].time_type;
	var hour_in_day = data.requirements[0].hour_in_day;
	var day_in_week = data.requirements[0].day_in_week;
	var month_in_year = data.requirements[0].month_in_year;
		
	switch(Number(time_type)){
	case 0:
		requirements.capacity = Number(capacity_value / time_value);
		break;
	case 1:
		var hour = time_value * hour_in_day;
		requirements.capacity = Number(capacity_value / hour);
		break;
	case 2:
		var week = (time_value * 30/7);
		var day = day_in_week * week;
		var hour = hour_in_day * day;
		requirements.capacity = Number(capacity_value / hour);
		break;
	case 3:
		var month = (time_value * month_in_year);
		var week = (month * 30/7);
		var day = day_in_week * week;
		var hour = hour_in_day * day;
		requirements.capacity = Number(capacity_value / hour);
		break;
	}
	
	requirements.capacity = capacity_type == 0 ? requirements.capacity * 1000 : requirements.capacity;
	requirements.capacity = Number(requirements.capacity).toFixed(3);
	
	var fraction_count = Number(data.requirements[0].fraction_count);
	var companent_count = Number(data.requirements[0].companent_count);
		
	//Создать необходимое число фракций и компонентов
	for(var i = 0; i < fraction_count; i++)
		generateRequirementsFractions();
	for(var i = 0; i < companent_count; i++)
		generateRequirementsComponents();
}
function setupFractionsData(data){
	for(var i = 0 ; i < data.fraction.length; i++){
		requirements.fractions[i].fractionName = data.fraction[i].fraction_name;
		requirements.fractions[i].purpose = Number(data.fraction[i].purpose);
		requirements.fractions[i].exit = Number(data.fraction[i].exit).toFixed(3);
		requirements.fractions[i].purity = Number(data.fraction[i].purity).toFixed(3);
		requirements.fractions[i].capacity = Number(data.fraction[i].capacity).toFixed(3);
		
		requirements.fractions[i].image 
			= "/static/img/save_img/requirement_"+data.fraction[i].ID_requirements+"/"+data.fraction[i].photoFolder+"/fraction_"+data.fraction[i].ID_mainPhoto+".png?u=" + last_updated;
	}
}
function setupRequrementsComponentData(data){
	requirements.purity = 0;
	for(var i = 0; i < data.components.length; i++){
		requirements.components[i].product_name = data.components[i][2];
		requirements.components[i].value =  Number(data.components[i][4]).toFixed(3);
		requirements.components[i].flag_1 = (data.components[i][6] == "TRUE") ? true : false;
		requirements.components[i].flag_2 = (data.components[i][7] == "TRUE") ? true : false;
		requirements.purity += requirements.components[i].flag_1 ? Number(requirements.components[i].value) : 0;
		
		requirements.components[i].image = "/static/img/save_img/requirement_"+data.components[i][01]+"/"+data.components[i][8]+"/component_"+data.components[i][9]+".png?u=" + last_updated;
		
		for(var k = 0; k < requirements.fractions.length; k++){
			requirements.fractions[k].components[i].product_name = data.components[i][2];
			requirements.fractions[k].components[i].value =  Number(data.components[i][(10+4*k)]).toFixed(3);
			requirements.fractions[k].components[i].flag_1 = (data.components[i][(12+4*k)] == "TRUE") ? true : false;
			requirements.fractions[k].components[i].flag_2 = (data.components[i][(13+4*k)] == "TRUE") ? true : false;
		}
	}
	requirements.purity = Number(requirements.purity).toFixed(3);
}

function inbox_fraction_decode(split_string){
	var decode_array = []
	for(var i=0; i<split_string.length; i += 2){
		if (split_string.slice(i,i+2) == "00")
			decode_array.push({"accept": false, "reject": false});
		else if(split_string.slice(i,i+2) == "10")
			decode_array.push({"accept": true, "reject": false});
		else if(split_string.slice(i,i+2) == "01")
			decode_array.push({"accept": false, "reject": true});
		else if(split_string.slice(i,i+2) == "11")
			decode_array.push({"accept": true, "reject": true});
	}
	
	return decode_array;
}
//Получение таблиц аппаратов и конфигураций
function get_separator_machine(){
	$.getJSON($SCRIPT_ROOT + '/protocol/classifier/machine',{	
	}, function(data){
		for(var i = 0; i< data.result.length; i++){
			list_machine.push({
				"id_machine": data.result[i]["id_machine"],
				"machineName": data.result[i]["machineName"]
			});
		}
	})
	.fail(function(jqXHR, exception){
		var msg = "Status Error: " + jqXHR.status + "; exeption: " + exception + "; responseText: " + jqXHR.responseText;
		ErrorLog(msg, false);
	});
}

function get_separator_configuration(){
	$.getJSON($SCRIPT_ROOT + '/protocol/classifier/configuration',{	
	}, function(data){
		for(var i = 0; i< data.result.length; i++){
			list_configuration.push({
				"id_configuration": data.result[i]["id_configuration"],
				"configuration": data.result[i]["configuration"]                                           
			});
		}
	})
	.fail(function(jqXHR, exception){
		var msg = "Status Error: " + jqXHR.status + "; exeption: " + exception + "; responseText: " + jqXHR.responseText;
		ErrorLog(msg, false);
	});
}

//дополнительные данные под протоколы(старые версии аппаратов и конфигураци) 
var list_machine = []
var list_configuration = []

//Генерация компонентов и фракций требований
function generateRequirementsFractions(){
	requirements.fractions.push({
		fractionName: "fractionName",
		exit: "exit",
		purity: "purity",
		capacity: "capacity",
		image: "image",
		components : [],
	});
}
function generateRequirementsComponents(){
	requirements.components.push({
		product_name: "product_name",
		value: "value",
		flag_1: "flag_1",
		flag_2: "flag_2",
		image: "image"
	});
	
	for(var i=0; i < requirements.fractions.length; i++){
		requirements.fractions[i].components.push({
			product_name: "product_name",
			value: "value",
			flag_1: "flag_1",
			flag_2: "flag_2",
			image: "image"
		});
	}
}
//Генерация компонентов и фракции протоколов
function generateProtocolSorting(){
	protocol.sorting.push({
		trays_number: 0,
		capacity: "capacity",
		//значения прохода сортировки
		accept_name: "accept_name",
		accept_name_id: "accept_name_id",
		accept_exit: "accept_exit",
		accept_purity: "accept_purity",
		accept_mass: "accept_mass",
		accept_img: "accept_img",
		//значения отбоя сортировки
		reject_name: "reject_name",
		reject_name_id: "reject_name_id",
		reject_exit: "reject_exit",
		reject_purity: "reject_purity",
		reject_mass: "reject_mass",
		reject_img: "reject_img",
		//данные по компанентам сортировки
		accept_components: [],
		reject_components : [],
		inbox_fraction : "inbox_fraction"
	});
	//добавление нового компанета для всех сортировок
	for(var id=0; id<protocol.sorting.length; id++){
		protocol.sorting[id].accept_components.push({
			product_name: "product_name",
			value: "value",
			flag_1: "flag_1",
			flag_2: "flag_2",
		});
		protocol.sorting[id].reject_components.push({
			product_name: "product_name",
			value: "value",
			flag_1: "flag_1",
			flag_2: "flag_2",
		});
	}
}
function generateProtocolComponents(){
	protocol.sourceProduct.components.push({
		product_name: "product_name",
		value: "value",
		flag_1: "flag_1",
		flag_2: "flag_2",
		image: "image"
	});
}
//Различные проверки для протокола сортировки
function checkComponentName(product_name){
	var value = false;
	var id = null;
	for(var i = 0; i < requirements.components.length; i++){
		if(!value){
			value = requirements.components[i].product_name == product_name ? true : false;
			id = i;
		}
	}
	return [value, id];
}
function checkInboxFraction(inboxList){
	var inboxName = [];
	//Проверка на перую сортировку
	if(inboxList == protocol.sorting[0].inbox_fraction)
		inboxName.push("Исходная смесь");
	
	for(var i=0; i<inboxList.length; i++){
		var fractionName = null;
		if(inboxList[i].accept)
			var fractionName = i < 8 ? "Проход 0" + Number(i+1) : "Проход " + Number(i+1);
		if(inboxList[i].reject)
			var fractionName = i < 8 ? "Отбой 0" + Number(i+1) : "Отбой " + Number(i+1);
		if(fractionName != null)
			inboxName.push(fractionName);
	}

	return inboxName;
}
function returnSortingFractionCapacity(inboxName){
	var capacity = 0;
	for(var i = 0; i < inboxName.length; i++){
		if(inboxName[i] == "Исходная смесь"){
			capacity += protocol.sorting[0].capacity
		}
		else{
			var splitValue = inboxName[i].split(" ");
			var component = splitValue[0];
			var id = Number(splitValue[1]) - 1;
			
			capacity -= component == "Проход" ? Number(protocol.sorting[id].accept_mass) : Number(protocol.sorting[id].reject_mass);
		}
	}
	return capacity;
}
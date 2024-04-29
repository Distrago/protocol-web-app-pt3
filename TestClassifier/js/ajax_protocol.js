var dates;
function prepareWebDate(){
	var data = {
		"id_document": id_document, //Айдишник протокола
		"pageRequirements": currentPage, 
		"pageProtocol": ProtocolPage,
		"requirements": [],
		"protocol": [],
		// 'explanations': document.getElementById('explanations').value,
		'SpecificData':[],
		'family': family,
	}	
	
	//Добавляем данные требований
	for(var i = 0; i < pageRow.length; i++){
		data.requirements.push(pageRow[i]);
	}
	//Добавляем данные протоколов
	for(var i = 0; i < pageProtocolRow.length; i++){
		data.protocol.push(pageProtocolRow[i]);
	}
	//Добавляем данные спецификаций
	for(var i = 0; i < SpecificData.length; i++){
		data.SpecificData.push(SpecificData[i]);
	}
	return data;
}
//Функция сна для асинхронных функций
function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

function postWebDate(){
	overlay2.style.display = "flex";
	refreshEconomiReq();
	saveExplain();
	family = IMGTrash.innerHTML;
	var _data = prepareWebDate();
		
	console.log(_data);
	$.ajax({
		url: '/test/save_web_data', 
		type: 'post',
		dataType: 'json',
		contentType: 'application/json',
		data: JSON.stringify(_data),
		success: function(data){
			saveImg();
		},
		error: function(error){
			alert("Произошла ошибка: " + String(error.status));
			overlay2.style.display = "none";
		}
	})
	
}

function getWebDocument(id_document){
	$.ajax({
		url: '/test/load_web_data', 
		type: 'post',
		dataType: 'json',
		contentType: 'application/json',
		data: id_document,
		success: function(data){
			//Выгружает данные в параметр data

			data = fixOldDataContainer(data);
			createPages(data);
			createEconomicRows();
			createSpecificRows(data);
			getIMG(data);
			setupPageId(data.id_document);
			overlay2.style.display = "none";
			if(pageProtocolRow.length != 0){
				resetRowValueProt();	
			}
			if(pageProtocolRow.length != 0 && pageProtocolRow[ProtocolPage-1].pageSortRow.length != 0){
				resetRowValueSort();
			}
			
			setupExplain(data);
			setProtocolIMG(ProtocolPage);
		},
		error: function (error) {
			overlay2.style.display = "none";
		}
	
	})
}
function uploadImgDocument(files){
	var formData = new FormData();
	for(var i = 0; i< files.length; i++){
		formData.append('file_' + i, files[i], files[i].name);
	}
	formData.append('documentName', id_document);
	
	$.ajax({
		type: 'POST',
		url: '/test/upload_file',
		data: formData,
		processData: false,
		contentType: false
	}).done(function(data) {
		   console.log(data);
		   overlay2.style.display = "none";
		   SwiftBlick.remove();
	});
}


function refreshEconomiReq(){
	if (pageRow.length != 0){
		var cp = currentPage == 0 ? currentPage = 1 : currentPage = currentPage;
		pageRow[currentPage-1].economicRowData = economicRowData;
	}
}


function setupPageId(id_document){
	var a4List = document.getElementsByClassName('a4');
	var box = [];
	var economicd_Prot = document.getElementById("economicd_Prot");
	var ListNumber = document.getElementById("dropdown_ListNumber");
	var ListNumberProtocol = document.getElementById("dropdown_ListNumberProtocol");
	for(var i = 0; i < a4List.length; i++){

		var requestNumber = a4List[i].getElementsByClassName('requestNumber').item(0);

		switch(a4List[i].id.split('_')[0]){
			case"customerRequirements":
				requestNumber.value =" №  " + "R_" + id_document + '_' + ListNumber.textContent;
				break;
			case"protocolRequirements":
				requestNumber.value =" №  " + "P_" + id_document + '_' + ListNumberProtocol.textContent;
				break;
			case"sortProtocol":
				requestNumber.value =" №  " + "S_" + id_document;
				break;
			case"economicPage":
				requestNumber.value =" №  " + "E_" + id_document + "_" + economicType;
				break;
			default:
				requestNumber.value =" №  " + id_document;
				break;		
		}
	}
	// console.log(a4List)
}

function setupExplain(data){
	var urlObject = window.URL || window.webkitURL; 
	for(var i = 1; i< explain_MainBlock.children.length; i++){
		var idPage = explain_MainBlock.children[i].id;
		var numberP = idPage.split("_")[1];					
		var type = idPage.split("_")[2];
		if(type != null){
			var idRow =  numberP + '_' + type;
			var Message_text = document.getElementById( "Message_text_" +idRow).children[0];
			Message_text.innerHTML = data.protocol[numberP-1].explainPage[0].text;			
			for(var f = 0; f < Message_text.getElementsByTagName('img').length;f++){
				var idNum = document.getElementById('NewsBlock_'+ idRow).getElementsByClassName('ql-toolbar ql-snow')[0].children[1].children.length-1;
				var inpIMG = document.createElement('input');
				inpIMG.id = 'inpPhoto_' + idNum + '_' + type;
				inpIMG.type = 'file';
				inpIMG.style.display = 'none';
				inpIMG.setAttribute('cannotLoad', true);
				try{
					Message_text.getElementsByTagName('img')[f].src = "/static/web_data/"+data.id_document+"/" + Message_text.getElementsByTagName('img')[f].name + '?u={{ last_updated }}';
					document.getElementById('NewsBlock_'+ idRow).getElementsByClassName('ql-toolbar ql-snow')[0].children[1].appendChild(inpIMG);
				}
				catch{
					document.getElementById('NewsBlock_'+ idRow).getElementsByClassName('ql-toolbar ql-snow')[0].children[1].appendChild(inpIMG);
				}
				
			}
			
				
		}
		else{
			var Message_text = document.getElementById( "Message_text_" + numberP).children[0];
			if( data.requirements[numberP-1].explainPage == null){
				data.requirements[numberP-1].push({"explainPage":[]});
			}
			Message_text.innerHTML = data.requirements[numberP-1].explainPage[0].text;
			for(var f = 0; f < data.requirements[i-1].explainPage[0].img.length;f++){
				var idNum = document.getElementById('NewsBlock_'+ numberP).getElementsByClassName('ql-toolbar ql-snow')[0].children[1].children.length-1;
				var inpIMG = document.createElement('input');
				inpIMG.id = 'inpPhoto_' + idNum;
				inpIMG.type = 'file';
				inpIMG.style.display = 'none';
				inpIMG.setAttribute('cannotLoad', true);
				Message_text.getElementsByTagName('img')[f].src = "/static/web_data/"+data.id_document+"/" + data.requirements[i-1].explainPage[0].img[f] + '?u={{ last_updated }}';
				document.getElementById('NewsBlock_'+ numberP).getElementsByClassName('ql-toolbar ql-snow')[0].children[1].appendChild(inpIMG);
			}
		}
	}
}

function fixOldDataContainer(data){
	for(var i = 0; i < data.requirements.length;i++){
		if(data.requirements[i].explainPage == null){
			data.requirements[i].explainPage = [];
			data.requirements[i].explainPage.push({
				"idPage":i,
				"text": 0,
				"img": []
			});
		}
	}
	for(var i = 0; i < data.protocol.length;i++){
		if(data.protocol[i].explainPage == null){
			data.protocol[i].explainPage = [];
			data.protocol[i].explainPage.push({
				"idPage":i,
				"text": 0,
				"img": []
			});
		}
	}
	return data;
}
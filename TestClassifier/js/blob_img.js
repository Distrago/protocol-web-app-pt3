var dT = new DataTransfer();

function _fakeCanvas(){
	var width = 480; 
	var height = 480;
	
	var canvas = document.createElement('canvas');  
	canvas.width  = width;
	canvas.height = height;
	
	var ctx = canvas.getContext("2d");  
	var img = document.getElementById("spoilerImg");
	ctx.drawImage(img,0,0,width,height);

	var jpegFile = canvas.toDataURL("image/jpeg");
	var jpegFile64 = jpegFile.replace(/^data:image\/(png|jpeg);base64,/, "");
	
	canvas.remove();
	
	return jpegFile64;
}

function findProductMatches(searchResult){
	//Подготовка массива
	var _searchResult = [];
	
	for(var i = 0; i < searchResult.length; i++){
		var _split = searchResult[i].split(" ");
		for(var j = 0; j < _split.length; j++){
			_searchResult.push(_split[j]);
		}
	}
	//Поиск Совпадений
	for(var i = 0; i < _searchResult.length; i++){
		var str = _searchResult[i].toLowerCase();
		var productIndex = productNameList.map(
			function(e){ 
				return e.name.toLowerCase(); 
			}).indexOf(str);
			
		if(productIndex != -1){
			var result = productNameList[productIndex].name;
			break;
		}
	}
	
	return result;
}

function setProductInRow(productName){
	var inputFilter = sourceImg.parentNode.parentNode.parentElement.getElementsByClassName("inputFilter")[0];
	var event_1 = new Event('focus');
	var event_2 = new Event('input');
	inputFilter.dispatchEvent(event_1);
	
	var controlButton = sourceImg.parentNode.parentNode.parentElement.getElementsByClassName("controlButton")[0];
	
	inputFilter.value = productName;
	inputFilter.dispatchEvent(event_2);
	
	var inputOption = sourceImg.parentNode.parentNode.parentElement.getElementsByClassName("inputOption")[1];
	
	
	//вызов функций по нажатию
	inputOption.click();
	controlButton.click();
	
	spoilerClose();
}
function send_Blob(){
	var jpegFile64 = _fakeCanvas();
	
	//alert("Начался поиск, пожалуйста подождите.");
	
	$.ajax({
		url: '/search_blob_img',
		type: 'post',
		contentType: 'application/json',
		data: jpegFile64,
		success: function(data){
			console.log(data.result);
			
			var productName = findProductMatches(data.result);
			if(productName != null)
				setProductInRow(productName)
			else
				alert("Совпадений по поиску не найдено");
		}
	})
}
function creat_blob_container(imgBlob,imgName){
	var __input = document.createElement('input');
	__input.type = "file";
	
	var __img = document.createElement("img")
	__img.src = imgBlob;
	
	var width = __img.width; 
	var height = __img.height;

	var canvas = document.createElement('canvas');  
	canvas.width  = width;
	canvas.height = height;
	
	SwiftBlick.appendChild(canvas, __input, __img);

	var ctx = canvas.getContext("2d");  
	ctx.drawImage(__img,0,0,width,height);
	
	canvas.toBlob((blob) => {
	  var file = new File([blob], imgName+".jpg" );	  
	  dT.items.add(file);
	  __input.files = dT.files;
	});	
}

function saveImg(){
	var Time = 0;
	dT.clearData();
	var IMGTrash = document.getElementById('IMGTrash');
	var Block = document.createElement('div');
	Block.style.display = 'none';
	document.body.appendChild(Block);
	Block.id = 'SwiftBlick';
	var inpMass = IMGTrash.getElementsByTagName("input");
	for(var i = 0; i < inpMass.length; i++){
		var newName = inpMass[i].id + '.jpg';
		var file = inpMass[i].files[0];
		var blob = file.slice(0,  file.size, 'image/jpg'); 
		var newFile = new File([blob], newName , {type: 'image/jpg'});
		dT.items.add(newFile);
	}
	
	for(var i = 1; i< explain_MainBlock.children.length; i++){
		var page = explain_MainBlock.children[i].id;		
		var wow = page.split('_').length == 2 ? page.split('_')[1] : page.split('_')[1] + "_" + page.split('_')[2];
		var inputMass = document.getElementById('NewPhoto_'+ wow).parentNode.getElementsByTagName("input");
		for(var k = 1; k< inputMass.length; k++){
			if(inputMass[k].getAttribute('cannotLoad') == null){
				dT.items.add(inputMass[k].files[0]);
			}
		}
	}	
	setTimeout(() => console.log(dT.files), Time);
	setTimeout(() => uploadImgDocument(dT.files), Time);
}
var family;
var sourceImg;

function spoilerRun(element){
    var urlObject = window.URL || window.webkitURL;   
    sourceImg = element;
	spoilerImg.src = element.style.backgroundImage.split('"')[1] != null ? element.style.backgroundImage.split('"')[1] : "/static/img/result/test.jpg";
	overlay1.style.display = "flex";
	var spoiler = overlay1.children[0];
    var zoom = document.getElementById('ImageScale');
    var size = Number(window.getComputedStyle(sourceImg).backgroundSize.substr(0, 3));
    zoom.value = size/100 - 1;
    spoilerImageScale();
	var height = screen.height
	var width = screen.width
	if (height <= width)
		var resolution = height/width;
	else
		var resolution = 1;

	fiel = element;   
    for(var i = scrollBlock.children.length-1; i >= 1; i--){
        scrollBlock.children[i].remove();
    }
    // заполнение спойлера существующим списком фото
    var FamilyIndex;
    if(element.id.split('_')[3] != null && element.id.split('_')[3] == 'S'){
        FamilyIndex = element.id + '_' + ProtocolPage;
    }
    else{
        FamilyIndex = element.id;
    } 
    
    var pOrR = fiel.id.split('_')[3] == null ? 0 : 1;
    var pageNumber = fiel.id.split('_')[3] == null ? currentPage : ProtocolPage;
    var sourceOrPC = fiel.id.split('_')[0] == 'Source' ? 0 : 1;
    var forSort = fiel.id.split('_')[2];
    if(fiel.id.split('_')[3] != null && fiel.id.split('_')[3] == 'S'){
        var currentPlace = IMGTrash.children[pOrR].children[pageNumber-1].children[2].children[forSort-1].children[sourceOrPC].children[fiel.id.split('_')[1]-1];
    }
    else{        
        var currentPlace = IMGTrash.children[pOrR].children[pageNumber-1].children[sourceOrPC].children[fiel.id.split('_')[1]-1];
    }    
    for(var i = 0; i< currentPlace.children.length; i++){
        var inputObject = document.createElement("input");
        var scrollRowX = scrollRow.cloneNode(true);
        scrollRowX.id = scrollRow.id + '_' + (i+1);
        scrollRowX.children[2].children[0].id = 'controlButtonRemoveIMG_' + (i+1);
        scrollRowX.children[2].children[0].addEventListener('click', img_remove);
        scrollRowX.children[0].children[0].addEventListener('click', swipeImg);
        scrollRowX.children[0].children[0].children[0].id = 'photoCheckboxId_' + (i+1);
        scrollRowX.style.display = 'flex';
        scrollBlock.append(scrollRowX);
        scrollRowX.children[1].appendChild(inputObject);
        inputObject.value = currentPlace.children[i].files[0].name;
        inputObject.className = "photoLink";    
        inputObject.setAttribute('link', urlObject.createObjectURL(currentPlace.children[i].files[0]));
        inputObject.setAttribute("readonly", true);
        inputObject.addEventListener('click', clickInput);
        // var elementStyle = element.style.backgroundImage.substr(5, 63);        
        var parent = inputObject.parentNode.parentNode;
        parent.children[0].children[0].children[0].click();
        
    }
	if(sourceImg.id.split("_")[0] == "photoComponent")
		searchButton.style.display = "none";
	else
		searchButton.style.display = "none";
}

function spoilerClose(){
    var ImageScale = Number(document.getElementById('ImageScale').value);
	overlay1.style.display = "none";    
    sourceImg.style.backgroundImage = 'url(' + spoilerImg.src + ')';
    sourceImg.style.backgroundSize = 100 * (ImageScale+1) + '%';
    _input.value = '';
    changeSliderIMG(sourceImg);
}

function img_script(){
    var urlObject = window.URL || window.webkitURL;    
    _input.addEventListener('change', function(){
        var point = fiel.id.split('_')[3] == null ? pageRow : pageProtocolRow;
        var point2 = fiel.id.split('_')[3] == null ? currentPage : ProtocolPage;
        var sourceOrPC = fiel.id.split('_')[0] == 'Source' ? 0 : 1;
        var pOrR = 0;
        var fraction = null;
        var sortTest = fiel.id.split('_')[3] == null ? false : fiel.id.split('_')[3] == 'S' ? true : false ;
        var forSort = fiel.id.split('_')[2];
        var position = fiel.id.split('_')[1];
        switch(fiel.id.split('_')[0]){
            case"Source":
                switch(position){
                    case'1':
                        fraction = 'mainFraction'
                        break;
                    case'2':
                        fraction = 'suitableFraction'
                        break;
                    case'3':
                        fraction = 'weedFraction'
                        break;
                }
                break;
            case"photoComponent":
                'rowsFraction'
                break;
        }
        if(fiel.id.split('_')[3] != null){            
            pOrR = 1;
            familyName = fiel.id;
            if(fiel.id.split('_')[3] == 'S'){
                familyName +=  '_' + ProtocolPage;
            }
        }
        else{
            familyName = fiel.id;
        }         
        var files = this.files;
        var newCloneInp = this.cloneNode(true);
        if(sortTest == false){
            if(fraction == null){
                newCloneInp.id = 'TRASH_'  + familyName + '_' + IMGTrash.children[pOrR].children[point2-1].children[sourceOrPC].children[position-1].children.length;
                IMGTrash.children[pOrR].children[point2-1].children[sourceOrPC].children[position-1].appendChild(newCloneInp);
    
            }
            else{
                newCloneInp.id = 'TRASH_'  + familyName + '_' + IMGTrash.children[pOrR].children[point2-1].children[sourceOrPC].querySelector("div[type=" + fraction + "]").children.length;
                IMGTrash.children[pOrR].children[point2-1].children[sourceOrPC].querySelector("div[type=" + fraction + "]").appendChild(newCloneInp);
            }
        }
        else{
            if(fraction == null){
                newCloneInp.id = 'TRASH_'  + familyName + '_' + IMGTrash.children[pOrR].children[point2-1].children[2].children[forSort-1].children[sourceOrPC].children[position-1].children.length;
                IMGTrash.children[pOrR].children[point2-1].children[2].children[forSort-1].children[sourceOrPC].children[position-1].appendChild(newCloneInp);
    
            }
            else{
                newCloneInp.id = 'TRASH_'  + familyName + '_' + IMGTrash.children[pOrR].children[point2-1].children[2].children[forSort-1].children[sourceOrPC].querySelector("div[type=" + fraction + "]").children.length;
                IMGTrash.children[pOrR].children[point2-1].children[2].children[forSort-1].children[sourceOrPC].querySelector("div[type=" + fraction + "]").appendChild(newCloneInp);
            }
        }
        
        var addLength = scrollBlock.children.length;
        for(var i = 0; i < files.length; i++){
            var inputObject = document.createElement("input");
            var scrollRowX = scrollRow.cloneNode(true);
            scrollRowX.id = scrollRow.id + '_' + Number(i + addLength);
            scrollRowX.children[2].children[0].id = 'controlButtonRemoveIMG_' +  Number(i + addLength);
            scrollRowX.children[2].children[0].addEventListener('click', img_remove);
            scrollRowX.children[0].children[0].addEventListener('click', swipeImg);
            scrollRowX.children[0].children[0].children[0].id = 'photoCheckboxId_' +  Number(i + addLength);
            scrollRowX.style.display = 'flex';
            scrollBlock.append(scrollRowX);
            scrollRowX.children[1].appendChild(inputObject);
            inputObject.value = files[i].name;
            inputObject.className = "photoLink";
            inputObject.setAttribute('link', urlObject.createObjectURL(files[i]));
            inputObject.setAttribute("readonly", true);
            inputObject.addEventListener('click', clickInput);
        }
        document.getElementById(fiel.id).style.backgroundImage = "url(" + spoilerImg.src + ")";
        document.getElementById('scrollBlock').lastElementChild.children[0].children[0].children[0].click();
    })
}
function setImgForInp_img(urlObject){
    if(fiel.id.split('_')[3] != null && fiel.id.split('_')[3] == 'S'){
        familyName = fiel.id + '_' + ProtocolPage;
    }
    else{
        familyName = fiel.id;
    }         
    var files = this.files;
    var addLength = 0;           
    for(var i = 0; i < files.length; i++){
        var inputObject = document.createElement("input");
        var scrollRowX = scrollRow.cloneNode(true);
        scrollRowX.id = scrollRow.id + '_' + Number(i + addLength);
        scrollRowX.children[2].children[0].id = 'controlButtonRemoveIMG_' +  Number(i + addLength);
        scrollRowX.children[2].children[0].addEventListener('click', img_remove);
        scrollRowX.children[0].children[0].addEventListener('click', swipeImg);
        scrollRowX.children[0].children[0].children[0].id = 'photoCheckboxId_' +  Number(i + addLength);
        scrollRowX.style.display = 'flex';
        scrollBlock.append(scrollRowX);
        scrollRowX.children[1].appendChild(inputObject);
        inputObject.value = files[i].name;
        inputObject.className = "photoLink";
        inputObject.setAttribute('link', urlObject.createObjectURL(files[i]));
        inputObject.setAttribute("readonly", true);
        inputObject.addEventListener('click', clickInput);
    }        
    
    var trimg = document.createElement('img');
    trimg.src = spoilerImg.src;
    IMGTrash.appendChild(trimg);
    document.getElementById(fiel.id).style.backgroundImage = "url(" + spoilerImg.src + ")";
    document.getElementById('scrollBlock').lastElementChild.children[0].children[0].children[0].click();
}
function createInp_imgClone(idRow){
	var urlObject = window.URL || window.webkitURL; 
	
	var inpIMG = document.getElementById('_input');
	var inpIMGClone = inpIMG.cloneNode(true);
	inpIMGClone.id = idRow + '_input';
	inpIMGClone.addEventListener('change', function(){setImgForInp_img(urlObject)});
	inpIMG.parentNode.appendChild(inpIMGClone);
	inpIMGClone.click();
}

function swipeImg(){
    var parent = this.parentNode.parentNode;
    var link = parent.children[1].children[0].getAttribute('link');
    spoilerImg.src = link;    
    fiel.style.backgroundImage = 'url(' + link + ')';
}
function clickInput(){
    var link = this.getAttribute('link');
    spoilerImg.src = link;    
    fiel.style.backgroundImage = 'url(' + link + ')';
}

function returnListName(){
    var list = [];
    list.push(familyName);
    return list;
}
function returnListImg(){
    var list = [];
    for(var i = 1; i < file_list.length; i++){
        var link = file_list[i].children[0].getAttribute('link');
        var name = file_list[i].children[0].value;
        var element = {'link': link , 'name': name , 'main': false}
        list.push(element);
    }    
    return list;
}
function img_remove(){
    var main = this.parentNode.parentNode;
    var checkTest = main.children[0].children[0].children[0].checked;
    var point = this.id.split('_')[1];
    if(fiel.id.split('_')[3] != null && fiel.id.split('_')[3] == 'S'){
        var numberPage = fiel.id.split('_')[2];
        var inp = document.getElementById('TRASH_'+ fiel.id + '_' + numberPage + '_' + (point-1));
    }
    else{
        var inp = document.getElementById('TRASH_' + fiel.id + '_' + (point-1));
    }    
    var parent = inp.parentNode;
    inp.remove();
    main.remove();
    if(fiel.id.split('_')[3] != null && fiel.id.split('_')[3] == 'S'){
        for(var i = 0; i < parent.children.length; i++){
            parent.children[i].id = "TRASH_" + fiel.id + '_' + numberPage + '_' + i;
        }
    }
    else{
        for(var i = 0; i < parent.children.length; i++){
            parent.children[i].id = "TRASH_" + fiel.id + '_' + i;
        }
    }    
    if(parent.children.length > 0){
        if(checkTest){
            scrollBlock.children[1].children[0].children[0].children[0].click();
        }
    }
    else{
        spoilerImg.src = "/static/img/result/test.jpg";
    }
}

function CheckOther(element){
    var main = document.getElementById('scrollBlock');
    var photoBox = document.getElementById(element);
    if (photoBox.checked == true){
        for(var i= 1; i < main.children.length; i++){
            var checkbox = main.children[i].children[0].children[0].children[0];
            document.getElementById(checkbox.id).checked=false;             
        }
        document.getElementById(element).checked=true; 
    }    
}

function spoilerImageScale(){
    var ImageScale = document.getElementById('ImageScale').value;
    var img = document.getElementById('spoilerImg');
    img.style.width = 100 * ImageScale + '%';
    img.style.height = 100 * ImageScale + '%';
	
}

function createReqOrProtDiv(positionBlock, idRow, sValue){
    var mainBlock = document.createElement('div');

    var FractionBlock = document.createElement('div');
    var rowsBlock = document.createElement('div');
    FractionBlock.setAttribute('type', 'FractionData');
    rowsBlock.setAttribute('type', 'rowsFraction');

    var mainFraction = document.createElement('div');
    var suitableFraction = document.createElement('div');
    var weedFraction = document.createElement('div');
    mainFraction.setAttribute('type', 'mainFraction');
    suitableFraction.setAttribute('type', 'suitableFraction');
    weedFraction.setAttribute('type', 'weedFraction');

    FractionBlock.appendChild(mainFraction);
    FractionBlock.appendChild(suitableFraction);
    FractionBlock.appendChild(weedFraction);

    var sortPage = document.createElement('div');
    sortPage.setAttribute('type', 'sort');

    mainBlock.appendChild(FractionBlock);
    mainBlock.appendChild(rowsBlock);

    switch(positionBlock){
        case 0:
            mainBlock.setAttribute('type', 'reqPage_' + idRow);            
            IMGTrash.children[0].appendChild(mainBlock);
            break;
        case 1:
            if(sValue == false){
                mainBlock.setAttribute('type', 'ProtPage_' + idRow);
                mainBlock.appendChild(sortPage);
                IMGTrash.children[1].appendChild(mainBlock);
            }
            else{
                mainBlock.setAttribute('type', 'ProtPage_' + (ProtocolPage-1) + '_SortPage_' + idRow);
                IMGTrash.children[1].children[ProtocolPage-1].children[2].appendChild(mainBlock);
            }
            break;
        
    }
}
function addRowDiv(prOReq,pageID, idRow, ToF){
    var rowBlock = document.createElement('div');
    var type = prOReq == 0 ? 'req_' : 'prot_';
    switch(prOReq){
        case 0:
            rowBlock.setAttribute('type', type + pageID + '_row_' + idRow);
            IMGTrash.children[0].children[pageID-1].children[1].appendChild(rowBlock);
            break;
        case 1:
            if(ToF == false){
                rowBlock.setAttribute('type', type + pageID + '_row_' + idRow);
                IMGTrash.children[1].children[pageID-1].children[1].appendChild(rowBlock);
            }
            else{
                rowBlock.setAttribute('type', type + ProtocolPage + '_Sort' + '_row_' + idRow);
                IMGTrash.children[1].children[ProtocolPage-1].children[2].children[pageID-1].children[1].appendChild(rowBlock);
            }
            break;        
    }
}

function refreshIDTrashRow(pageID, idComponentRow){
    var IMGTrash = document.getElementById('IMGTrash');
    for(var i = 0; i < IMGTrash.children[0].children[currentPage-1].children[1].children.length; i++){
        IMGTrash.children[0].children[currentPage-1].children[1].children[i].setAttribute('type', "req_1_row_" + (i+1)); 
    }
}
var GlobalLang = 'RU';
var Translate = [];

function changeLang(){
    GlobalLang = mainButtonLang.value;
    var headerTooltip = document.getElementById('headerTooltip');
    var СustomerRequirementsMenu = document.getElementById('СustomerRequirementsMenu');
    var ProtocolRequirementsMenu = document.getElementById('ProtocolRequirementsMenu');
    var explain = document.getElementById('explain_MainBlock');
    var overlay1 = document.getElementById('overlay1');

    // меню дополнительно
    headerTooltip.children[0].children[0].children[0].textContent = Translate[0].Title[0][GlobalLang];
    headerTooltip.children[0].children[1].children[0].children[0].children[0].children[0].value = Translate[0].Title[1][GlobalLang];
    headerTooltip.children[0].children[1].children[0].children[0].children[1].children[0].value = Translate[0].Title[2][GlobalLang];
    headerTooltip.children[0].children[1].children[0].children[0].children[2].children[0].value = Translate[0].Title[3][GlobalLang];

    // МЕНЮ ВЫБОРА ПРОТОКОЛОВ И ТРЕ
    СustomerRequirementsMenu.textContent = Translate[0].Title[4][GlobalLang];
    ProtocolRequirementsMenu.textContent = Translate[0].Title[5][GlobalLang];

    overlay1.children[0].children[0].children[0].children[0].textContent = Translate[0].Title[8][GlobalLang];
    overlay1.children[0].children[1].children[0].children[1].children[0].children[0].textContent = Translate[0].Title[9][GlobalLang];

    getTranslateReq();
    getTranslateProt();
    getTranslateSort();
    getTranslateEconom();
    for(var i = 1; i < explain.children.length; i++){
        explain.children[i].children[0].children[1].children[0].textContent = Translate[0].Title[7][GlobalLang];
    }
    autoPageNumber();
}
// ПЕРЕВОД ТРЕБОВАНИЙ
function getTranslateReq(){
    var Requ = document.getElementById('customerRequirements_MainBlock');
    for(var i = 1; i < Requ.children.length; i++){
        TranslateReqPage(i);
    }
    
}
function TranslateReqPage(idP){
    var RequPage = document.getElementById('customerRequirements_' + idP);
    var button = RequPage.getElementsByClassName('buttonLang')[0];
    var defaultUnit = document.getElementById('defaultUnit_' + idP);
    var fraction = document.getElementById('fraction_' + idP);
    var lockBlock = document.getElementById('lockBlock_' + idP);
    var rows = document.getElementById('rows_' + idP);
    var addButton = document.getElementById('addButton_' + idP);
    
    if(button.textContent != GlobalLang){
        RequPage.children[0].children[1].children[0].textContent = Translate[0].Req[0][GlobalLang];

        RequPage.children[0].children[2].children[0].children[0].textContent = Translate[0].Req[1][GlobalLang];
        RequPage.children[0].children[2].children[1].children[0].textContent = Translate[0].Req[2][GlobalLang];
        RequPage.children[0].children[2].children[2].children[0].textContent = Translate[0].Req[3][GlobalLang];

        defaultUnit.children[0].children[0].textContent = Translate[0].Req[4][GlobalLang];
        defaultUnit.children[1].children[0].children[0].children[1].children[0].value = Translate[0].Req[5][GlobalLang];
        defaultUnit.children[1].children[0].children[0].children[2].children[0].value = Translate[0].Req[6][GlobalLang];
        defaultUnit.children[1].children[0].children[0].children[3].children[0].value = Translate[0].Req[7][GlobalLang];

        fraction.children[1].children[1].textContent = Translate[0].Req[8][GlobalLang];
        fraction.children[2].children[1].textContent = Translate[0].Req[9][GlobalLang];
        fraction.children[3].children[1].textContent =  Translate[0].Req[10][GlobalLang];

        RequPage.children[1].children[0].children[2].children[0].children[0].textContent =  Translate[0].Req[11][GlobalLang];
        RequPage.children[1].children[0].children[2].children[0].children[1].textContent =  Translate[0].Req[12][GlobalLang];
        RequPage.children[1].children[0].children[2].children[0].children[2].textContent =  Translate[0].Req[13][GlobalLang];

        lockBlock.children[1].children[0].children[1].textContent =  Translate[0].Req[14][GlobalLang];
        lockBlock.children[2].children[0].children[1].textContent =  Translate[0].Req[14][GlobalLang];
        lockBlock.children[3].children[0].children[1].textContent =  Translate[0].Req[14][GlobalLang];
        for(var j = 1; j< rows.children.length; j++){
            changeRowReqLang(idP, j);
        }
        addButton.textContent = Translate[0].Req[15][GlobalLang];
        button.textContent = GlobalLang;
    }
}
function changeRowReqLang(pageID, idRow){
    var rows = document.getElementById('rows_' + pageID);

    var main = rows.children[idRow].children[0].children[0];
    main.children[1].children[1].children[0].placeholder = Translate[0].Req[16][GlobalLang];

    main.children[2].children[2].children[0].textContent = Translate[0].Req[17][GlobalLang];
    main.children[2].children[3].children[0].children[0].children[1].children[1].value = Translate[0].Req[5][GlobalLang];
    main.children[2].children[3].children[0].children[0].children[2].children[1].value = Translate[0].Req[6][GlobalLang];
    main.children[2].children[3].children[0].children[0].children[3].children[1].value = Translate[0].Req[7][GlobalLang];
    main.children[2].children[3].children[0].children[1].textContent = Translate[0].Req[18][GlobalLang];
    main.children[2].children[3].children[0].children[2].children[0].children[1].value = Translate[0].Req[5][GlobalLang];
    main.children[2].children[3].children[0].children[3].textContent = Translate[0].Req[19][GlobalLang];
    main.children[2].children[3].children[0].children[4].children[0].children[1].value = Translate[0].Req[5][GlobalLang];

    main.children[3].children[2].children[0].textContent = Translate[0].Req[17][GlobalLang];
    main.children[3].children[3].children[0].children[0].children[1].children[1].value = Translate[0].Req[5][GlobalLang];
    main.children[3].children[3].children[0].children[0].children[2].children[1].value = Translate[0].Req[6][GlobalLang];
    main.children[3].children[3].children[0].children[0].children[3].children[1].value = Translate[0].Req[7][GlobalLang];
    main.children[3].children[3].children[0].children[1].textContent = Translate[0].Req[18][GlobalLang];
    main.children[3].children[3].children[0].children[2].children[0].children[1].value = Translate[0].Req[5][GlobalLang];
    main.children[3].children[3].children[0].children[3].textContent = Translate[0].Req[19][GlobalLang];
    main.children[3].children[3].children[0].children[4].children[0].children[1].value = Translate[0].Req[5][GlobalLang];

    main.children[4].children[2].children[0].textContent = Translate[0].Req[17][GlobalLang];
    main.children[4].children[3].children[0].children[0].children[1].children[1].value = Translate[0].Req[5][GlobalLang];
    main.children[4].children[3].children[0].children[0].children[2].children[1].value = Translate[0].Req[6][GlobalLang];
    main.children[4].children[3].children[0].children[0].children[3].children[1].value = Translate[0].Req[7][GlobalLang];
    main.children[4].children[3].children[0].children[1].textContent = Translate[0].Req[18][GlobalLang];
    main.children[4].children[3].children[0].children[2].children[0].children[1].value = Translate[0].Req[5][GlobalLang];
    main.children[4].children[3].children[0].children[3].textContent = Translate[0].Req[19][GlobalLang];
    main.children[4].children[3].children[0].children[4].children[0].children[1].value = Translate[0].Req[5][GlobalLang];

    // switch(GlobalLang){
    //     case'RU':
    //         var main = rows.children[idRow].children[0].children[0];
    //         main.children[1].children[1].children[0].placeholder = 'Продукт';

    //         main.children[2].children[2].children[0].textContent = 'дополнительно';
    //         main.children[2].children[3].children[0].children[0].children[1].children[1].value = 'грамм';
    //         main.children[2].children[3].children[0].children[0].children[2].children[1].value = 'штук';
    //         main.children[2].children[3].children[0].children[0].children[3].children[1].value = 'штук/кг.';
    //         main.children[2].children[3].children[0].children[1].textContent = 'масса навески';
    //         main.children[2].children[3].children[0].children[2].children[0].children[1].value = 'грамм';
    //         main.children[2].children[3].children[0].children[3].textContent = 'масса 1000 штук';
    //         main.children[2].children[3].children[0].children[4].children[0].children[1].value = 'грамм';

    //         main.children[3].children[2].children[0].textContent = 'дополнительно';
    //         main.children[3].children[3].children[0].children[0].children[1].children[1].value = 'грамм';
    //         main.children[3].children[3].children[0].children[0].children[2].children[1].value = 'штук';
    //         main.children[3].children[3].children[0].children[0].children[3].children[1].value = 'штук/кг.';
    //         main.children[3].children[3].children[0].children[1].textContent = 'масса навески';
    //         main.children[3].children[3].children[0].children[2].children[0].children[1].value = 'грамм';
    //         main.children[3].children[3].children[0].children[3].textContent = 'масса 1000 штук';
    //         main.children[3].children[3].children[0].children[4].children[0].children[1].value = 'грамм';

    //         main.children[4].children[2].children[0].textContent = 'дополнительно';
    //         main.children[4].children[3].children[0].children[0].children[1].children[1].value = 'грамм';
    //         main.children[4].children[3].children[0].children[0].children[2].children[1].value = 'штук';
    //         main.children[4].children[3].children[0].children[0].children[3].children[1].value = 'штук/кг.';
    //         main.children[4].children[3].children[0].children[1].textContent = 'масса навески';
    //         main.children[4].children[3].children[0].children[2].children[0].children[1].value = 'грамм';
    //         main.children[4].children[3].children[0].children[3].textContent = 'масса 1000 штук';
    //         main.children[4].children[3].children[0].children[4].children[0].children[1].value = 'грамм';
    //         break;
    //     case'EN':            
    //         var main = rows.children[idRow].children[0].children[0];
    //         main.children[1].children[1].children[0].placeholder = 'Product';

    //         main.children[2].children[2].children[0].textContent = 'additional';
    //         main.children[2].children[3].children[0].children[0].children[1].children[1].value = 'gram';
    //         main.children[2].children[3].children[0].children[0].children[2].children[1].value = 'pieces';
    //         main.children[2].children[3].children[0].children[0].children[3].children[1].value = 'pieces/kg.';
    //         main.children[2].children[3].children[0].children[1].textContent = 'sample weight';
    //         main.children[2].children[3].children[0].children[2].children[0].children[1].value = 'gram';
    //         main.children[2].children[3].children[0].children[3].textContent = 'weight 1000 pieces';
    //         main.children[2].children[3].children[0].children[4].children[0].children[1].value = 'gram';

    //         main.children[3].children[2].children[0].textContent = 'additional';
    //         main.children[3].children[3].children[0].children[0].children[1].children[1].value = 'gram';
    //         main.children[3].children[3].children[0].children[0].children[2].children[1].value = 'pieces';
    //         main.children[3].children[3].children[0].children[0].children[3].children[1].value = 'pieces/kg.';
    //         main.children[3].children[3].children[0].children[1].textContent = 'sample weight';
    //         main.children[3].children[3].children[0].children[2].children[0].children[1].value = 'gram';
    //         main.children[3].children[3].children[0].children[3].textContent = 'weight 1000 pieces';
    //         main.children[3].children[3].children[0].children[4].children[0].children[1].value = 'gram';

    //         main.children[4].children[2].children[0].textContent = 'additional';
    //         main.children[4].children[3].children[0].children[0].children[1].children[1].value = 'gram';
    //         main.children[4].children[3].children[0].children[0].children[2].children[1].value = 'pieces';
    //         main.children[4].children[3].children[0].children[0].children[3].children[1].value = 'pieces/kg.';
    //         main.children[4].children[3].children[0].children[1].textContent = 'sample weight';
    //         main.children[4].children[3].children[0].children[2].children[0].children[1].value = 'gram';
    //         main.children[4].children[3].children[0].children[3].textContent = 'weight 1000 pieces';
    //         main.children[4].children[3].children[0].children[4].children[0].children[1].value = 'gram';
    //         break;
    //     case'':
    //         break;

    // }

}
// ПЕРЕВОД ПРОТОКОЛОВ
function getTranslateProt(){
    var Prot = document.getElementById('protocolRequirements_MainBlock');
    for(var i = 1; i < Prot.children.length; i++){
        TranslateProtPage(i);
    }
}
function TranslateProtPage(idP){
    var ProtPage = document.getElementById('protocolRequirements_' + idP);
    var button = ProtPage.getElementsByClassName('buttonLang')[0];
    var defaultUnit = document.getElementById('defaultUnit_' + idP + '_P');
    var fraction = document.getElementById('fraction_' + idP + '_P');
    var lockBlock = document.getElementById('lockBlock_' + idP + '_P');
    var rows = document.getElementById('rows_' + idP + '_P');
    var addButton = document.getElementById('addButton_' + idP + '_P');
    
    if(button.textContent != GlobalLang){
        ProtPage.children[0].children[1].children[0].textContent = Translate[0].Prot[0][GlobalLang];

        ProtPage.children[0].children[2].children[0].children[0].textContent = Translate[0].Prot[1][GlobalLang];
        ProtPage.children[0].children[2].children[1].children[0].textContent = Translate[0].Prot[2][GlobalLang];
        ProtPage.children[0].children[2].children[2].children[0].textContent = Translate[0].Prot[3][GlobalLang];

        defaultUnit.children[0].children[0].textContent = Translate[0].Prot[4][GlobalLang];
        defaultUnit.children[1].children[0].children[0].children[1].children[0].value = Translate[0].Prot[5][GlobalLang];
        defaultUnit.children[1].children[0].children[0].children[2].children[0].value = Translate[0].Prot[6][GlobalLang];
        defaultUnit.children[1].children[0].children[0].children[3].children[0].value = Translate[0].Prot[7][GlobalLang];

        fraction.children[1].children[1].children[0].textContent = Translate[0].Prot[8][GlobalLang];
        fraction.children[2].children[1].textContent = Translate[0].Prot[9][GlobalLang];
        fraction.children[3].children[1].textContent =  Translate[0].Prot[10][GlobalLang];

        ProtPage.children[1].children[0].children[2].children[0].children[0].textContent =  Translate[0].Prot[11][GlobalLang];
        ProtPage.children[1].children[0].children[2].children[0].children[1].textContent =  Translate[0].Prot[12][GlobalLang];
        ProtPage.children[1].children[0].children[2].children[0].children[2].textContent =  Translate[0].Prot[13][GlobalLang];

        lockBlock.children[1].children[0].children[1].textContent =  Translate[0].Prot[14][GlobalLang];
        lockBlock.children[2].children[0].children[1].textContent =  Translate[0].Prot[14][GlobalLang];
        lockBlock.children[3].children[0].children[1].textContent =  Translate[0].Prot[14][GlobalLang];
        for(var j = 1; j< rows.children.length; j++){
            changeRowProtLang(idP, j);
        }
        addButton.textContent = Translate[0].Prot[15][GlobalLang];
        button.textContent = GlobalLang;
    }
}
function changeRowProtLang(pageID, idRow){
    var rows = document.getElementById('rows_' + pageID + '_P');

    var main = rows.children[idRow].children[0].children[0];
    main.children[1].children[1].children[0].placeholder = Translate[0].Prot[16][GlobalLang];

    main.children[2].children[2].children[0].textContent = Translate[0].Prot[17][GlobalLang];
    main.children[2].children[3].children[0].children[0].children[1].children[1].value = Translate[0].Prot[5][GlobalLang];
    main.children[2].children[3].children[0].children[0].children[2].children[1].value = Translate[0].Prot[6][GlobalLang];
    main.children[2].children[3].children[0].children[0].children[3].children[1].value = Translate[0].Prot[7][GlobalLang];
    main.children[2].children[3].children[0].children[1].textContent = Translate[0].Prot[18][GlobalLang];
    main.children[2].children[3].children[0].children[2].children[0].children[1].value = Translate[0].Prot[5][GlobalLang];
    main.children[2].children[3].children[0].children[3].textContent = Translate[0].Prot[19][GlobalLang];
    main.children[2].children[3].children[0].children[4].children[0].children[1].value = Translate[0].Prot[5][GlobalLang];

    main.children[3].children[2].children[0].textContent = Translate[0].Prot[17][GlobalLang];
    main.children[3].children[3].children[0].children[0].children[1].children[1].value = Translate[0].Prot[5][GlobalLang];
    main.children[3].children[3].children[0].children[0].children[2].children[1].value = Translate[0].Prot[6][GlobalLang];
    main.children[3].children[3].children[0].children[0].children[3].children[1].value = Translate[0].Prot[7][GlobalLang];
    main.children[3].children[3].children[0].children[1].textContent = Translate[0].Prot[18][GlobalLang];
    main.children[3].children[3].children[0].children[2].children[0].children[1].value = Translate[0].Prot[5][GlobalLang];
    main.children[3].children[3].children[0].children[3].textContent = Translate[0].Prot[19][GlobalLang];
    main.children[3].children[3].children[0].children[4].children[0].children[1].value = Translate[0].Prot[5][GlobalLang];

    main.children[4].children[2].children[0].textContent = Translate[0].Prot[17][GlobalLang];
    main.children[4].children[3].children[0].children[0].children[1].children[1].value = Translate[0].Prot[5][GlobalLang];
    main.children[4].children[3].children[0].children[0].children[2].children[1].value = Translate[0].Prot[6][GlobalLang];
    main.children[4].children[3].children[0].children[0].children[3].children[1].value = Translate[0].Prot[7][GlobalLang];
    main.children[4].children[3].children[0].children[1].textContent = Translate[0].Prot[18][GlobalLang];
    main.children[4].children[3].children[0].children[2].children[0].children[1].value = Translate[0].Prot[5][GlobalLang];
    main.children[4].children[3].children[0].children[3].textContent = Translate[0].Prot[19][GlobalLang];
    main.children[4].children[3].children[0].children[4].children[0].children[1].value = Translate[0].Prot[5][GlobalLang];
}
// ПЕРЕВОД СОРТИРОВОК
function getTranslateSort(){
    var Sort = document.getElementById('sortProtocol_MainBlock');
    for(var i = 1; i < Sort.children.length; i++){
        TranslateSortPage(i);
    }
}
function TranslateSortPage(idP){
    var SortPage = document.getElementById('sortProtocol_' + idP);
    var button = SortPage.getElementsByClassName('buttonLang')[0];
    var defaultUnit = document.getElementById('defaultUnit_' + idP + '_S');
    var fraction = document.getElementById('fraction_' + idP + '_S');
    var lockBlock = document.getElementById('lockBlock_' + idP + '_S');
    var rows = document.getElementById('rows_' + idP + '_S');
    var addButton = document.getElementById('addButton_' + idP + '_S');
    
    if(button.textContent != GlobalLang){
        SortPage.children[0].children[1].children[0].textContent = Translate[0].Sort[0][GlobalLang];

        SortPage.children[0].children[2].children[0].children[0].textContent = Translate[0].Sort[1][GlobalLang];
        SortPage.children[0].children[2].children[1].children[0].textContent = Translate[0].Sort[2][GlobalLang];
        SortPage.children[0].children[2].children[2].children[0].textContent = Translate[0].Sort[3][GlobalLang];

        defaultUnit.children[0].children[0].textContent = Translate[0].Sort[4][GlobalLang];
        defaultUnit.children[1].children[0].children[0].children[1].children[0].value = Translate[0].Sort[5][GlobalLang];
        defaultUnit.children[1].children[0].children[0].children[2].children[0].value = Translate[0].Sort[6][GlobalLang];
        defaultUnit.children[1].children[0].children[0].children[3].children[0].value = Translate[0].Sort[7][GlobalLang];

        fraction.children[1].children[1].children[0].textContent = Translate[0].Sort[8][GlobalLang];
        fraction.children[2].children[1].textContent = Translate[0].Sort[9][GlobalLang];
        fraction.children[3].children[1].textContent =  Translate[0].Sort[10][GlobalLang];

        SortPage.children[1].children[0].children[2].children[0].children[0].textContent =  Translate[0].Sort[11][GlobalLang];
        SortPage.children[1].children[0].children[2].children[0].children[1].textContent =  Translate[0].Sort[12][GlobalLang];
        SortPage.children[1].children[0].children[2].children[0].children[2].textContent =  Translate[0].Sort[13][GlobalLang];

        lockBlock.children[1].children[0].children[1].textContent =  Translate[0].Sort[14][GlobalLang];
        lockBlock.children[2].children[0].children[1].textContent =  Translate[0].Sort[14][GlobalLang];
        lockBlock.children[3].children[0].children[1].textContent =  Translate[0].Sort[14][GlobalLang];
        for(var j = 1; j< rows.children.length; j++){
            changeRowSortLang(idP, j);
        }
        addButton.textContent = Translate[0].Sort[15][GlobalLang];
        button.textContent = GlobalLang;
    }
}
function changeRowSortLang(pageID, idRow){
    var rows = document.getElementById('rows_' + pageID + '_S');

    var main = rows.children[idRow].children[0].children[0];
    main.children[1].children[1].children[0].placeholder = Translate[0].Sort[16][GlobalLang];

    main.children[2].children[2].children[0].textContent = Translate[0].Sort[17][GlobalLang];
    main.children[2].children[3].children[0].children[0].children[1].children[1].value = Translate[0].Sort[5][GlobalLang];
    main.children[2].children[3].children[0].children[0].children[2].children[1].value = Translate[0].Sort[6][GlobalLang];
    main.children[2].children[3].children[0].children[0].children[3].children[1].value = Translate[0].Sort[7][GlobalLang];
    main.children[2].children[3].children[0].children[1].textContent = Translate[0].Sort[18][GlobalLang];
    main.children[2].children[3].children[0].children[2].children[0].children[1].value = Translate[0].Sort[5][GlobalLang];
    main.children[2].children[3].children[0].children[3].textContent = Translate[0].Sort[19][GlobalLang];
    main.children[2].children[3].children[0].children[4].children[0].children[1].value = Translate[0].Sort[5][GlobalLang];

    main.children[3].children[2].children[0].textContent = Translate[0].Sort[17][GlobalLang];
    main.children[3].children[3].children[0].children[0].children[1].children[1].value = Translate[0].Sort[5][GlobalLang];
    main.children[3].children[3].children[0].children[0].children[2].children[1].value = Translate[0].Sort[6][GlobalLang];
    main.children[3].children[3].children[0].children[0].children[3].children[1].value = Translate[0].Sort[7][GlobalLang];
    main.children[3].children[3].children[0].children[1].textContent = Translate[0].Sort[18][GlobalLang];
    main.children[3].children[3].children[0].children[2].children[0].children[1].value = Translate[0].Sort[5][GlobalLang];
    main.children[3].children[3].children[0].children[3].textContent = Translate[0].Sort[19][GlobalLang];
    main.children[3].children[3].children[0].children[4].children[0].children[1].value = Translate[0].Sort[5][GlobalLang];

    main.children[4].children[2].children[0].textContent = Translate[0].Sort[17][GlobalLang];
    main.children[4].children[3].children[0].children[0].children[1].children[1].value = Translate[0].Sort[5][GlobalLang];
    main.children[4].children[3].children[0].children[0].children[2].children[1].value = Translate[0].Sort[6][GlobalLang];
    main.children[4].children[3].children[0].children[0].children[3].children[1].value = Translate[0].Sort[7][GlobalLang];
    main.children[4].children[3].children[0].children[1].textContent = Translate[0].Sort[18][GlobalLang];
    main.children[4].children[3].children[0].children[2].children[0].children[1].value = Translate[0].Sort[5][GlobalLang];
    main.children[4].children[3].children[0].children[3].textContent = Translate[0].Sort[19][GlobalLang];
    main.children[4].children[3].children[0].children[4].children[0].children[1].value = Translate[0].Sort[5][GlobalLang];
}
// ПЕРЕВОД ЭКОНОМИКИ
function getTranslateEconom(){
    Econom = document.getElementById('economicPage');
    inpMenu = document.getElementById('inpMenu');
    economicd_Req = document.getElementById('economicd_Req');
    economicd_Prot = document.getElementById('economicd_Prot');
    operatingModeBlock = document.getElementById('operatingModeBlock');    
    capacityInfluence = document.getElementById('capacityInfluence');
    sourceCapasitySlider = document.getElementById('sourceCapasitySlider');
    acceptCpasitySlider = document.getElementById('acceptCpasitySlider');
    economicMainRow = document.getElementById('economicMainRow');
    SliderInpMenu = document.getElementById('SliderInpMenu');

    Econom.children[0].children[1].children[0].textContent = Translate[0].Econom[0][GlobalLang];

    inpMenu.children[0].textContent = Translate[0].Econom[1][GlobalLang];
    economicd_Req.value = Translate[0].Econom[2][GlobalLang];
    economicd_Prot.value = Translate[0].Econom[3][GlobalLang];
    

    operatingModeBlock.children[1].children[0].textContent = Translate[0].Econom[4][GlobalLang];
    operatingModeBlock.children[2].children[0].children[0].children[0].children[1].value = Translate[0].Econom[5][GlobalLang];
    operatingModeBlock.children[2].children[0].children[0].children[1].children[1].value = Translate[0].Econom[6][GlobalLang];
    operatingModeBlock.children[3].children[0].textContent = Translate[0].Econom[7][GlobalLang];
    operatingModeBlock.children[4].children[0].children[0].children[0].children[1].value = Translate[0].Econom[8][GlobalLang];
    operatingModeBlock.children[4].children[0].children[1].children[0].children[1].value = Translate[0].Econom[9][GlobalLang];
    operatingModeBlock.children[4].children[0].children[2].children[0].children[1].value = Translate[0].Econom[10][GlobalLang];
    operatingModeBlock.children[5].children[0].textContent = Translate[0].Econom[11][GlobalLang];
    operatingModeBlock.children[6].children[0].children[0].children[0].children[1].value = Translate[0].Econom[12][GlobalLang];
    operatingModeBlock.children[6].children[0].children[0].children[1].children[1].value = Translate[0].Econom[13][GlobalLang];

    capacityInfluence.children[0].children[0].children[0].children[0].value = Translate[0].Econom[14][GlobalLang];
    capacityInfluence.children[0].children[0].children[0].children[1].value = Translate[0].Econom[15][GlobalLang];
    capacityInfluence.children[0].children[0].children[0].children[2].value = Translate[0].Econom[16][GlobalLang];
    capacityInfluence.children[0].children[0].children[1].children[3].value = Translate[0].Econom[17][GlobalLang];

    sourceCapasitySlider.children[0].children[0].children[1].textContent = Translate[0].Econom[18][GlobalLang];
    sourceCapasitySlider.children[1].children[0].children[0].textContent = Translate[0].Econom[20][GlobalLang];
    sourceCapasitySlider.children[1].children[1].children[0].textContent = Translate[0].Econom[21][GlobalLang];

    acceptCpasitySlider.children[0].children[0].children[1].textContent = Translate[0].Econom[19][GlobalLang];
    acceptCpasitySlider.children[1].children[0].children[0].textContent = Translate[0].Econom[20][GlobalLang];
    acceptCpasitySlider.children[1].children[1].children[0].textContent = Translate[0].Econom[21][GlobalLang];

    for(var i = 1; i< economicMainRow.children.length; i++){
        economicSumParametr = document.getElementById('economicSumParametr_' + i);
        economSumModelType = document.getElementById('economSumModelType_' + i);
        economSumParam = document.getElementById('economSumParam_' + i);
        economicDateParameter = document.getElementById('economicDateParameter_' + i);
        economicInput = document.getElementById('economicInput_' + i);
        economicInputResult = document.getElementById('economicInputResult_' + i);
        
        economicInput.placeholder = Translate[0].Econom[23][GlobalLang];

        for(var j= 0; j < list_economic.length; j++){
            var gl = GlobalLang == 'RU' ? 'EN':'RU';
            if(economicInputResult.children[0] != null && economicInputResult.children[0].textContent == list_economic[j][gl]){
                economicInputResult.children[0].textContent = list_economic[j][GlobalLang];
                economicInput.value = list_economic[j][GlobalLang];
            }
        }
        economicSumParametr.children[0].children[0].children[0].textContent = Translate[0].Econom[24][GlobalLang];  
        economicSumParametr.children[0].children[0].children[0].click();
        economicSumParametr.children[0].children[1].children[0].click();        

        economSumModelType.children[0].children[0].children[0].children[0].value = Translate[0].Econom[25][GlobalLang];
        economicSumParametr.children[1].children[0].children[1].children[0].textContent = Translate[0].Econom[26][GlobalLang];
        economSumParam.children[0].children[0].children[0].children[1].value = Translate[0].Econom[27][GlobalLang];
        economSumParam.children[0].children[0].children[1].children[1].value = Translate[0].Econom[28][GlobalLang];
        economSumParam.children[0].children[0].children[2].children[1].value = Translate[0].Econom[29][GlobalLang];

        economSumModelType.children[0].children[0].children[1].children[0].value = Translate[0].Econom[30][GlobalLang];

        economSumParam.children[1].children[0].textContent = Translate[0].Econom[31][GlobalLang];
        if(economSumParam.children[2].children[0].children[0].children[1] != null){
            economSumParam.children[2].children[0].children[0].children[1].children[0].value = Translate[0].Econom[32][GlobalLang];
            economSumParam.children[2].children[0].children[0].children[2].children[0].value = Translate[0].Econom[33][GlobalLang];
            economSumParam.children[2].children[0].children[0].children[3].children[0].value = Translate[0].Econom[34][GlobalLang];
        }
        economSumParam.children[3].children[0].children[0].children[0].children[1].value = Translate[0].Econom[35][GlobalLang];
        economSumParam.children[3].children[0].children[0].children[1].children[1].value = Translate[0].Econom[36][GlobalLang];
        economSumParam.children[3].children[0].children[0].children[2].children[1].value = Translate[0].Econom[37][GlobalLang];
       
        economSumModelType.children[0].children[0].children[2].children[0].value = Translate[0].Econom[38][GlobalLang];

        economSumParam.children[4].children[0].textContent = Translate[0].Econom[39][GlobalLang];
        economSumParam.children[5].children[0].children[0].children[0].children[1].value = Translate[0].Econom[40][GlobalLang];

        economicDateParameter.children[0].children[0].children[0].children[0].children[0].value = Translate[0].Econom[41][GlobalLang];
        economicDateParameter.children[1].children[0].textContent = Translate[0].Econom[42][GlobalLang];
        economicDateParameter.children[2].children[0].children[0].children[0].children[1].value = Translate[0].Econom[43][GlobalLang];
        economicDateParameter.children[2].children[0].children[0].children[1].children[1].value = Translate[0].Econom[44][GlobalLang];
        economicDateParameter.children[2].children[0].children[0].children[2].children[1].value = Translate[0].Econom[45][GlobalLang];
        economicDateParameter.children[2].children[0].children[0].children[3].children[1].value = Translate[0].Econom[46][GlobalLang];
        economicDateParameter.children[2].children[0].children[0].children[4].children[1].value = Translate[0].Econom[47][GlobalLang];        
        economicDateParameter.children[3].children[0].textContent = Translate[0].Econom[48][GlobalLang];
        economicDateParameter.children[4].children[0].children[0].children[0].children[1].value = Translate[0].Econom[49][GlobalLang];
        economicDateParameter.children[4].children[0].children[0].children[1].children[1].value = Translate[0].Econom[50][GlobalLang];

        economicDateParameter.children[0].children[0].children[0].children[1].children[0].value = Translate[0].Econom[51][GlobalLang];
        economicDateParameter.children[0].children[0].children[0].children[2].children[0].value = Translate[0].Econom[52][GlobalLang];
        economicDateParameter.children[5].children[0].textContent = Translate[0].Econom[52][GlobalLang];
    }

    Econom.children[1].children[0].children[4].children[0].textContent = Translate[0].Econom[22][GlobalLang];

    SliderInpMenu.children[0].textContent = Translate[0].Econom[1][GlobalLang];

    economicChart.data.datasets[0].label = Translate[0].Econom[70][GlobalLang];
    economicChart.data.datasets[1].label = Translate[0].Econom[71][GlobalLang];
    economicChart.update();
    maasPipChart.data.labels[0] = Translate[0].Econom[33][GlobalLang];
    maasPipChart.data.labels[1] = Translate[0].Econom[72][GlobalLang];
    maasPipChart.data.labels[2] = Translate[0].Econom[34][GlobalLang];
    maasPipChart.data.labels[3] = Translate[0].Econom[73][GlobalLang];
    maasPipChart.update();
}

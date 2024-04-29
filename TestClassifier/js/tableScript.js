function refreshEconomicChart(){
    // режим работы
    var workHour = Number(operatingModeGraphData.hour_in_day);
    var workDay = Number(operatingModeGraphData.day_in_week);
    var workMonth = Number(operatingModeGraphData.month_in_year); 
    
    var hourInMonth = workHour*workDay*4;

	EconomicRowType = economicType == 'Req' ? economicRowData : economicRowDataProt;
    
    // массы фракций 
    if(pageRow[currentPage-1] != null){
        sourceFractionMass = pageRow[currentPage-1].requirementsTable.mainFractionData.mass;
        acceptFractionMass = pageRow[currentPage-1].requirementsTable.suitableFraction.mass;
        rejectFractionMass = pageRow[currentPage-1].requirementsTable.weedFraction.mass;
    }
   
    // расчет длинны графика по месяцам   
    economicChart.data.labels = [];  
    for(var i = 1; i<= Number(operatingModeGraphData.calculation_range); i++){
        economicChart.data.labels[i-1] = i;
        economicChart.data.datasets[0].data[i-1] = 0;
        economicChart.data.datasets[1].data[i-1] = 0;
    }    
    // расчет линии дохода-расхода
    // for(var k = 1; k < economicMainRow.children.length; k++){
    //     var economPeriodParam = document.getElementById('economPeriodParam_' + k);
    //     var Start = economPeriodParam.children[0].children[0].children[0].children[0].value;
    //     var End = economPeriodParam.children[0].children[0].children[1].children[0].value;
    //     EconomicRowType.elements[k-1].DateParameters.periodParametres.startPeriod = Start;
    //     EconomicRowType.elements[k-1].DateParameters.periodParametres.endPeriod = End;            
    // }
    
    for(var z = 0; z < EconomicRowType.elements.length; z++){
        // диапазон работы 
        var periodStart =  Number(EconomicRowType.elements[z].DateParameters.periodParametres.startPeriod)-1;
        var periodEnd =  Number(EconomicRowType.elements[z].DateParameters.periodParametres.endPeriod)-1;
        // fraction
        var fraction = EconomicRowType.elements[z].SumParameters.fractionParameters.targetFraction;
        //опредеение валюты
        var valute = EconomicRowType.elements[z].SumParameters.currentyParameters.targetCurrent;
        // mass value
        var tonn = Number(EconomicRowType.elements[z].SumParameters.fractionParameters.massValue.ton);
        // currentyParameters value
        var currency = EconomicRowType.elements[z].SumParameters.currentyParameters.targetCurrent;
        var firstValue;
        switch(currency){
            case'RUB':
                firstValue = Number(EconomicRowType.elements[z].SumParameters.currentyParameters.curentyValue.RUB)
                break;
            case'USD':
                firstValue = Number(EconomicRowType.elements[z].SumParameters.currentyParameters.curentyValue.USD) * (CRB_RUB_RATE["USD"].Value);
                break;
            case'EUR':
                firstValue = Number(EconomicRowType.elements[z].SumParameters.currentyParameters.curentyValue.EUR) * (CRB_RUB_RATE["EUR"].Value);
                break;
        }

        var hourPeriod = Number(EconomicRowType.elements[z].DateParameters.timeParameters.timeValue.hour);        
        var DayPeriod = Number(EconomicRowType.elements[z].DateParameters.timeParameters.timeValue.day);        
        var WeekPeriod = Number(EconomicRowType.elements[z].DateParameters.timeParameters.timeValue.week); 
        var monthPeriod = Number(EconomicRowType.elements[z].DateParameters.timeParameters.timeValue.month);        
        
        switch(EconomicRowType.elements[z].SumParameters.modelType + ' ' + EconomicRowType.elements[z].DateParameters.modelType){
        //сумма
                //+календарное время
            case "currentyParameters calendarTime":
                if(EconomicRowType.elements[z].IncomeArrow == true){
                    var counter = 0;
                    for(var i = 0; i< economicChart.data.labels.length; i++){  
                        if( i % monthPeriod == 0 && (i >= periodStart && i <= periodEnd)){
                            counter += firstValue;                            
                        }
                        economicChart.data.datasets[1].data[i] += counter;
                    }
                }
                else{
                    var counter = 0;
                    for(var i = 0; i< economicChart.data.labels.length; i++){  
                        if( i % monthPeriod == 0 && (i >= periodStart && i <= periodEnd)){
                            counter += firstValue;
                        }
                        economicChart.data.datasets[0].data[i] += counter;
                    }
                }
                break;
                //+время раб оборудования
            case "currentyParameters equipmentOperatingTime":
                if(EconomicRowType.elements[z].IncomeArrow == true){
                    var counter = 0;
                    for(var i = 0; i< economicChart.data.labels.length; i++){
                        switch(EconomicRowType.elements[z].DateParameters.timeParameters.targetTime){
                            case "hour":
                                //формирование шага
                                Period = ((hourPeriod/workHour)/workDay)/4;
                                Period = Math.ceil(Period);
                                if(i % Period == 0 && (i >= periodStart && i <= periodEnd)){
                                    if(hourPeriod < hourInMonth){
                                        counter += firstValue * (hourInMonth/hourPeriod);
                                    } 
                                    else{
                                        counter += firstValue; 
                                    }                                                                                            
                                }                               
                                break;
            
                            case "day":
                                Period = DayPeriod/workDay/4;
                                Period = Math.ceil(Period);
                                if(i % Period == 0 && (i >= periodStart && i <= periodEnd)){
                                    if(DayPeriod < (workDay * 4)){
                                        counter += firstValue * ((workDay * 4)/DayPeriod);
                                    }
                                    else{
                                        counter += firstValue;
                                    }                                                                                              
                                }
                                break;
                                
                            case "week":
                                Period = WeekPeriod/4;
                                Period = Math.ceil(Period);
                                if(i % Period == 0 && (i >= periodStart && i <= periodEnd)){
                                    if(WeekPeriod < 4){
                                        counter += firstValue * (4/WeekPeriod);
                                    }
                                    else{
                                        counter += firstValue;
                                    }                                                         
                                }
                                break;

                            case "month":
                                Period = monthPeriod;
                                Period = Math.ceil(Period);
                                if(i % Period == 0 && (i >= periodStart && i <= periodEnd)){
                                    counter += firstValue;                                                          
                                }
                                break;

                            case "year":
                                Period = (Number(EconomicRowType.elements[z].DateParameters.timeParameters.timeValue.year))/workMonth;
                                Period = Math.ceil(Period);
                                if(i % Period == 0 && (i >= periodStart && i <= periodEnd)){
                                    counter += firstValue;                                                          
                                }
                                break;
                        }                        
                        economicChart.data.datasets[1].data[i] += counter;  
                    }
                }
                else{
                    var counter = 0;
                    for(var i = 0; i< economicChart.data.labels.length; i++){  
                        switch(EconomicRowType.elements[z].DateParameters.timeParameters.targetTime){
                            case "hour":
                                //формирование шага
                                Period = ((hourPeriod/workHour)/workDay)/4;
                                Period = Math.ceil(Period);
                                if(i % Period == 0 && (i >= periodStart && i <= periodEnd)){
                                    if(hourPeriod < hourInMonth){
                                        counter += firstValue * (hourInMonth/hourPeriod);
                                    } 
                                    else{
                                        counter += firstValue; 
                                    }                                                                                            
                                }                               
                                break;
            
                            case "day":
                                Period = DayPeriod/workDay/4;
                                Period = Math.ceil(Period);
                                if(i % Period == 0 && (i >= periodStart && i <= periodEnd)){
                                    if(DayPeriod < (workDay * 4)){
                                        counter += firstValue * ((workDay * 4)/DayPeriod);
                                    }
                                    else{
                                        counter += firstValue;
                                    }                                                                                              
                                }
                                break;
                                
                            case "week":
                                Period = WeekPeriod/4;
                                Period = Math.round(Period);
                                if(i % Period == 0 && (i >= periodStart && i <= periodEnd)){
                                    if(WeekPeriod < 4){
                                        counter += firstValue * (4/WeekPeriod);
                                    }
                                    else{
                                        counter += firstValue;
                                    }                                                         
                                }
                                break;

                            case "month":
                                Period = monthPeriod;
                                Period = Math.ceil(Period);
                                if(i % Period == 0 && (i >= periodStart && i <= periodEnd)){
                                    counter += firstValue;                                                          
                                }
                                break;

                            case "year":
                                Period = (Number(EconomicRowType.elements[z].DateParameters.timeParameters.timeValue.year))/workMonth;
                                Period = Math.ceil(Period);
                                if(i % Period == 0 && (i >= periodStart && i <= periodEnd)){
                                    counter += firstValue;                                                          
                                }
                                break;
                        }
                        economicChart.data.datasets[0].data[i] +=counter; 
                    }
                }
                break;
                //+фиксированные даты
            case "currentyParameters fixedDate":
                if(EconomicRowType.elements[z].IncomeArrow == true){
                    var counter = 0;
                    var fixedDate = EconomicRowType.elements[z].DateParameters.fixedDate;
                    for(var i = 0; i< economicChart.data.labels.length; i++){ 
                        for(var j = 0; j < fixedDate.length; j++){
                            if(fixedDate[j] == i+1){
                                counter += firstValue;
                            }
                        }                        
                        economicChart.data.datasets[1].data[i] += counter;
                    }
                }
                else{
                    var counter = 0;
                    var fixedDate = EconomicRowType.elements[z].DateParameters.fixedDate;
                    for(var i = 0; i< economicChart.data.labels.length; i++){  
                        for(var j = 0; j < fixedDate.length; j++){
                            if(fixedDate[j] == i+1){
                                counter += firstValue;
                            }
                        }
                        economicChart.data.datasets[0].data[i] += counter;
                    }
                }
                break;
                
        // сумма за объем
                //+календарное время
            case "fractionParameters calendarTime":
                if(EconomicRowType.elements[z].IncomeArrow == true){
                    var counter = 0;
                    var selectedFractionMass = 0;
                    for(var i = 0; i< economicChart.data.labels.length; i++){  
                        if(i % monthPeriod == 0 && (i >= periodStart && i <= periodEnd)){
                            switch(economicType){
                                case "Req":
                                    switch(fraction){
                                        case "Исходный продукт":
                                            selectedFractionMass = sourceFractionMass;
                                        break;
                        
                                        case "Проход":
                                            selectedFractionMass = acceptFractionMass;
                                        break;
                        
                                        case "Отбой":
                                            selectedFractionMass = rejectFractionMass;
                                        break;
                                    }
                                    break;
                                case "Prot":
                                    selectedFractionMass = setTypeFraction(fraction);
                                    break;
                            }                            
                            counter += (selectedFractionMass * hourInMonth) * (firstValue / tonn) * monthPeriod;                            
                        }
                        economicChart.data.datasets[1].data[i] += counter; 
                    }
                }
                else{
                    var counter = 0;
                    var selectedFractionMass = 0;
                    for(var i = 0; i< economicChart.data.labels.length; i++){  
                        if(i % monthPeriod == 0 && (i >= periodStart && i <= periodEnd)){
                            switch(economicType){
                                case "Req":
                                    switch(fraction){
                                        case "Исходный продукт":
                                            selectedFractionMass = sourceFractionMass;
                                        break;
                        
                                        case "Проход":
                                            selectedFractionMass = acceptFractionMass;
                                        break;
                        
                                        case "Отбой":
                                            selectedFractionMass = rejectFractionMass;
                                        break;
                                    }
                                    break;
                                case "Prot":
                                    selectedFractionMass = setTypeFraction(fraction);
                                    break;
                            }               
                            counter += (selectedFractionMass * hourInMonth) * (firstValue / tonn) * monthPeriod;                             
                        }
                        economicChart.data.datasets[0].data[i] += counter; 
                    }
                }
                break;
                //+время раб оборудования
            case "fractionParameters equipmentOperatingTime":
                if(EconomicRowType.elements[z].IncomeArrow == true){
                    var counter = 0;                    
                    var selectedFractionMass = 0;
                    var Period;
                    for(var i = 0; i< economicChart.data.labels.length; i++){
                        switch(EconomicRowType.elements[z].DateParameters.timeParameters.targetTime){
                            case "hour":
                                Period = hourPeriod/workHour/workDay/4;
                                Period = Math.ceil(Period);                                
                                if(i % Period == 0 && (i >= periodStart && i <= periodEnd)){
                                    switch(economicType){
                                        case "Req":
                                            switch(fraction){
                                                case "Исходный продукт":
                                                    selectedFractionMass = sourceFractionMass;
                                                break;
                                
                                                case "Проход":
                                                    selectedFractionMass = acceptFractionMass;
                                                break;
                                
                                                case "Отбой":
                                                    selectedFractionMass = rejectFractionMass;
                                                break;
                                            }
                                            break;
                                        case "Prot":
                                            selectedFractionMass = setTypeFraction(fraction);
                                            break;
                                    }               
                                    var tic = (selectedFractionMass * hourInMonth) * (firstValue / tonn) * monthPeriod;
                                    if(hourPeriod < hourInMonth){
                                        counter += tic * (hourInMonth/hourPeriod);
                                    } 
                                    else{
                                        counter += tic; 
                                    }   
                                                         
                                }                                
                                break;
            
                            case "day":
                                Period = DayPeriod/workDay/4;
                                Period = Math.ceil(Period);
                                if(i % Period == 0 && (i >= periodStart && i <= periodEnd)){
                                    switch(economicType){
                                        case "Req":
                                            switch(fraction){
                                                case "Исходный продукт":
                                                    selectedFractionMass = sourceFractionMass;
                                                break;
                                
                                                case "Проход":
                                                    selectedFractionMass = acceptFractionMass;
                                                break;
                                
                                                case "Отбой":
                                                    selectedFractionMass = rejectFractionMass;
                                                break;
                                            }
                                            break;
                                        case "Prot":
                                            selectedFractionMass = setTypeFraction(fraction);
                                            break;
                                    }               
                                    var tic = (selectedFractionMass * hourInMonth) * (firstValue / tonn) * monthPeriod;
                                    if(DayPeriod < (workDay * 4)){
                                        counter += tic * ((workDay * 4)/DayPeriod);
                                    }                                     
                                    else{
                                        counter += tic; 
                                    }                       
                                }                                
                                break;
                                
                            case "week":
                                Period = WeekPeriod/4;
                                Period = Math.ceil(Period);
                                if(i % Period == 0 && (i >= periodStart && i <= periodEnd)){
                                    switch(economicType){
                                        case "Req":
                                            switch(fraction){
                                                case "Исходный продукт":
                                                    selectedFractionMass = sourceFractionMass;
                                                break;
                                
                                                case "Проход":
                                                    selectedFractionMass = acceptFractionMass;
                                                break;
                                
                                                case "Отбой":
                                                    selectedFractionMass = rejectFractionMass;
                                                break;
                                            }
                                            break;
                                        case "Prot":
                                            selectedFractionMass = setTypeFraction(fraction);
                                            break;
                                    }               
                                    var tic = (selectedFractionMass * hourInMonth) * (firstValue / tonn) * monthPeriod;
                                    if(WeekPeriod < 4){
                                        counter += tic * (4/WeekPeriod);
                                    }
                                    else{
                                        counter += tic;
                                    }                       
                                }
                                break;

                            case "month":
                                Period = Number(EconomicRowType.elements[z].DateParameters.timeParameters.timeValue.month);
                                Period = Math.ceil(Period);
                                if(i % Period == 0 && (i >= periodStart && i <= periodEnd)){
                                    switch(economicType){
                                        case "Req":
                                            switch(fraction){
                                                case "Исходный продукт":
                                                    selectedFractionMass = sourceFractionMass;
                                                break;
                                
                                                case "Проход":
                                                    selectedFractionMass = acceptFractionMass;
                                                break;
                                
                                                case "Отбой":
                                                    selectedFractionMass = rejectFractionMass;
                                                break;
                                            }
                                            break;
                                        case "Prot":
                                            selectedFractionMass = setTypeFraction(fraction);
                                            break;
                                    }               
                                    var tic = (selectedFractionMass * hourInMonth) * (firstValue / tonn) * monthPeriod;
                                    counter += tic;                      
                                }
                                break;

                            case "year":
                                Period = (Number(EconomicRowType.elements[z].DateParameters.timeParameters.timeValue.year))/12;
                                Period = Math.ceil(Period);
                                if(i % Period == 0 && (i >= periodStart && i <= periodEnd)){
                                    switch(economicType){
                                        case "Req":
                                            switch(fraction){
                                                case "Исходный продукт":
                                                    selectedFractionMass = sourceFractionMass;
                                                break;
                                
                                                case "Проход":
                                                    selectedFractionMass = acceptFractionMass;
                                                break;
                                
                                                case "Отбой":
                                                    selectedFractionMass = rejectFractionMass;
                                                break;
                                            }
                                            break;
                                        case "Prot":
                                            selectedFractionMass = setTypeFraction(fraction);
                                            break;
                                    }               
                                    var tic = (selectedFractionMass * hourInMonth) * (firstValue / tonn) * monthPeriod;
                                    counter += tic;                      
                                }
                                break;
                        }
                        economicChart.data.datasets[1].data[i] += counter; 
                    }
                }
                else{
                    var counter = 0;
                    var selectedFractionMass = 0;
                    var counter = 0;
                    var selectedFractionMass = 0;
                    var Period;
                    for(var i = 0; i< economicChart.data.labels.length; i++){
                        switch(EconomicRowType.elements[z].DateParameters.timeParameters.targetTime){
                            case "hour":
                                Period = hourPeriod/workHour/workDay/4;
                                Period = Math.ceil(Period);                                
                                if(i % Period == 0 && (i >= periodStart && i <= periodEnd)){
                                    switch(economicType){
                                        case "Req":
                                            switch(fraction){
                                                case "Исходный продукт":
                                                    selectedFractionMass = sourceFractionMass;
                                                break;
                                
                                                case "Проход":
                                                    selectedFractionMass = acceptFractionMass;
                                                break;
                                
                                                case "Отбой":
                                                    selectedFractionMass = rejectFractionMass;
                                                break;
                                            }
                                            break;
                                        case "Prot":
                                            selectedFractionMass = setTypeFraction(fraction);
                                            break;
                                    }               
                                    var tic = (selectedFractionMass * hourInMonth) * (firstValue / tonn) * monthPeriod;
                                    if(hourPeriod < hourInMonth){
                                        counter += tic * (hourInMonth/hourPeriod);
                                    } 
                                    else{
                                        counter += tic; 
                                    }   
                                                         
                                }                                
                                break;
            
                            case "day":
                                Period = DayPeriod/workDay/4;
                                Period = Math.ceil(Period);
                                if(i % Period == 0 && (i >= periodStart && i <= periodEnd)){
                                    switch(economicType){
                                        case "Req":
                                            switch(fraction){
                                                case "Исходный продукт":
                                                    selectedFractionMass = sourceFractionMass;
                                                break;
                                
                                                case "Проход":
                                                    selectedFractionMass = acceptFractionMass;
                                                break;
                                
                                                case "Отбой":
                                                    selectedFractionMass = rejectFractionMass;
                                                break;
                                            }
                                            break;
                                        case "Prot":
                                            selectedFractionMass = setTypeFraction(fraction);
                                            break;
                                    }               
                                    var tic = (selectedFractionMass * hourInMonth) * (firstValue / tonn) * monthPeriod;
                                    if(DayPeriod < (workDay * 4)){
                                        counter += tic * ((workDay * 4)/DayPeriod);
                                    }                                     
                                    else{
                                        counter += tic; 
                                    }                       
                                }                                
                                break;
                                
                            case "week":
                                Period = WeekPeriod/4;
                                Period = Math.ceil(Period);
                                if(i % Period == 0 && (i >= periodStart && i <= periodEnd)){
                                    switch(economicType){
                                        case "Req":
                                            switch(fraction){
                                                case "Исходный продукт":
                                                    selectedFractionMass = sourceFractionMass;
                                                break;
                                
                                                case "Проход":
                                                    selectedFractionMass = acceptFractionMass;
                                                break;
                                
                                                case "Отбой":
                                                    selectedFractionMass = rejectFractionMass;
                                                break;
                                            }
                                            break;
                                        case "Prot":
                                            selectedFractionMass = setTypeFraction(fraction);
                                            break;
                                    }               
                                    var tic = (selectedFractionMass * hourInMonth) * (firstValue / tonn) * monthPeriod;
                                    if(WeekPeriod < 4){
                                        counter += tic * (4/WeekPeriod);
                                    }
                                    else{
                                        counter += tic;
                                    }                       
                                }
                                break;

                            case "month":
                                Period = Number(EconomicRowType.elements[z].DateParameters.timeParameters.timeValue.month);
                                Period = Math.ceil(Period);
                                if(i % Period == 0 && (i >= periodStart && i <= periodEnd)){
                                    switch(economicType){
                                        case "Req":
                                            switch(fraction){
                                                case "Исходный продукт":
                                                    selectedFractionMass = sourceFractionMass;
                                                break;
                                
                                                case "Проход":
                                                    selectedFractionMass = acceptFractionMass;
                                                break;
                                
                                                case "Отбой":
                                                    selectedFractionMass = rejectFractionMass;
                                                break;
                                            }
                                            break;
                                        case "Prot":
                                            selectedFractionMass = setTypeFraction(fraction);
                                            break;
                                    }               
                                    var tic = (selectedFractionMass * hourInMonth) * (firstValue / tonn) * monthPeriod;
                                    counter += tic;                      
                                }
                                break;

                            case "year":
                                Period = (Number(EconomicRowType.elements[z].DateParameters.timeParameters.timeValue.year))/12;
                                Period = Math.ceil(Period);
                                if(i % Period == 0 && (i >= periodStart && i <= periodEnd)){
                                    switch(economicType){
                                        case "Req":
                                            switch(fraction){
                                                case "Исходный продукт":
                                                    selectedFractionMass = sourceFractionMass;
                                                break;
                                
                                                case "Проход":
                                                    selectedFractionMass = acceptFractionMass;
                                                break;
                                
                                                case "Отбой":
                                                    selectedFractionMass = rejectFractionMass;
                                                break;
                                            }
                                            break;
                                        case "Prot":
                                            selectedFractionMass = setTypeFraction(fraction);
                                            break;
                                    }               
                                    var tic = (selectedFractionMass * hourInMonth) * (firstValue / tonn) * monthPeriod;
                                    counter += tic;                      
                                }
                                break;
                        }
                        economicChart.data.datasets[0].data[i] += counter; 
                    }
                }
                break;
                //+фиксированные даты
            case "fractionParameters fixedDate":
                if(EconomicRowType.elements[z].IncomeArrow == true){
                    var counter = 0;
                    var selectedFractionMass = 0;
                    var fixedDate = EconomicRowType.elements[z].DateParameters.fixedDate;
                    for(var i = 0; i< economicChart.data.labels.length; i++){
                        for(var j = 0; j < fixedDate.length; j++){
                            if(fixedDate[j] == i+1){
                                switch(economicType){
                                    case "Req":
                                        switch(fraction){
                                            case "Исходный продукт":
                                                selectedFractionMass = sourceFractionMass;
                                            break;
                            
                                            case "Проход":
                                                selectedFractionMass = acceptFractionMass;
                                            break;
                            
                                            case "Отбой":
                                                selectedFractionMass = rejectFractionMass;
                                            break;
                                        }
                                        break;
                                    case "Prot":
                                        selectedFractionMass = setTypeFraction(fraction);
                                        break;
                                }               
                                counter += (selectedFractionMass * hourInMonth) * (firstValue / tonn) * monthPeriod;                            
                            }
                        }
                        economicChart.data.datasets[1].data[i] += counter; 
                    }
                }
                else{
                    var counter = 0;
                    var selectedFractionMass = 0;
                    var fixedDate = EconomicRowType.elements[z].DateParameters.fixedDate;
                    for(var i = 0; i< economicChart.data.labels.length; i++){  
                        for(var j = 0; j < fixedDate.length; j++){                            
                            if(fixedDate[j] == i+1){
                                switch(economicType){
                                    case "Req":
                                        switch(fraction){
                                            case "Исходный продукт":
                                                selectedFractionMass = sourceFractionMass;
                                            break;
                            
                                            case "Проход":
                                                selectedFractionMass = acceptFractionMass;
                                            break;
                            
                                            case "Отбой":
                                                selectedFractionMass = rejectFractionMass;
                                            break;
                                        }
                                        break;
                                    case "Prot":
                                        selectedFractionMass = setTypeFraction(fraction);
                                        break;
                                }               
                                counter += (selectedFractionMass * hourInMonth) * (firstValue / tonn) * monthPeriod; 
                            }                            
                        }
                        economicChart.data.datasets[0].data[i] += counter; 
                    }
                }
                break;
            
        //% статьи 
                //+календарное время
            case "percentParameters calendarTime":
                if(EconomicRowType.elements[z].IncomeArrow == true){
                    var counter = 0;
                    var rowNumb = EconomicRowType.elements[z].SumParameters.percentParameters.articleNumber;
                    var percent = EconomicRowType.elements[z].SumParameters.percentParameters.percent;
                    var selectedFractionMass = 0;
                    for(var i = 0; i< economicChart.data.labels.length; i++){
                        for(var f = 0; f< rowNumb.length; f++){
                            var idd = rowNumb[f] -1;
                            var type = EconomicRowType.elements[idd].SumParameters.modelType;
                            var fractions = EconomicRowType.elements[idd].SumParameters.fractionParameters.targetFraction;
                            switch (type){
                                case'currentyParameters':
                                    var cuerrently = Number(EconomicRowType.elements[idd].SumParameters.currentyParameters.curentyValue.RUB);
                                    if( i % monthPeriod == 0 && (i >= periodStart && i <= periodEnd)){
                                        counter += cuerrently/100 * percent;
                                    }                                        
                                    break;

                                case'fractionParameters':
                                    if(i % monthPeriod == 0 && (i >= periodStart && i <= periodEnd)){
                                        switch(fractions){
                                            case "Исходный продукт":
                                                selectedFractionMass = sourceFractionMass;
                                            break;
                            
                                            case "Проход":
                                                selectedFractionMass = acceptFractionMass;
                                            break;
                            
                                            case "Отбой":
                                                selectedFractionMass = rejectFractionMass;
                                            break;
                                        }
                                        counter += ((selectedFractionMass * hourInMonth) * (firstValue / tonn) * monthPeriod)/10 * percent;                            
                                    }
                                    break;

                                case'percentParameters':
                                    break;
                            }
                        }
                        economicChart.data.datasets[1].data[i] += counter;
                    }
                }
                else{
                    var counter = 0;
                    var rowNumb = EconomicRowType.elements[z].SumParameters.percentParameters.articleNumber;
                    var percent = EconomicRowType.elements[z].SumParameters.percentParameters.percent;
                    var selectedFractionMass = 0;
                    for(var i = 0; i< economicChart.data.labels.length; i++){  
                        for(var f = 0; f< rowNumb.length; f++){
                            var idd = rowNumb[f] -1;
                            var type = EconomicRowType.elements[idd].SumParameters.modelType;
                            var fractions = EconomicRowType.elements[idd].SumParameters.fractionParameters.targetFraction;
                            switch (type){
                                case'currentyParameters':
                                    var cuerrently = Number(EconomicRowType.elements[idd].SumParameters.currentyParameters.curentyValue.RUB);
                                    if( i % monthPeriod == 0 && (i >= periodStart && i <= periodEnd)){
                                        counter += cuerrently/100 * percent;
                                    }                                        
                                    break;

                                case'fractionParameters':
                                    if(i % monthPeriod == 0 && (i >= periodStart && i <= periodEnd)){
                                        switch(fractions){
                                            case "Исходный продукт":
                                                selectedFractionMass = sourceFractionMass;
                                            break;
                            
                                            case "Проход":
                                                selectedFractionMass = acceptFractionMass;
                                            break;
                            
                                            case "Отбой":
                                                selectedFractionMass = rejectFractionMass;
                                            break;
                                        }
                                        counter += ((selectedFractionMass * hourInMonth) * (firstValue / tonn) * monthPeriod)/10 * percent;                            
                                    }
                                    break;

                                case'percentParameters':
                                    break;
                            }
                        }
                        economicChart.data.datasets[0].data[i] += counter;
                    }
                }
                break;
                //+время раб оборудования
            case "percentParameters equipmentOperatingTime":
                //redact for this value
                if(EconomicRowType.elements[z].IncomeArrow == true){
                    var counter = 0;
                    var selectedFractionMass = 0;
                    var rowNumb = EconomicRowType.elements[z].SumParameters.percentParameters.articleNumber;
                    var percent = EconomicRowType.elements[z].SumParameters.percentParameters.percent;
                    var Period;
                    for(var i = 0; i< economicChart.data.labels.length; i++){
                        for(var f = 0; f< rowNumb.length; f++){
                            var idd = rowNumb[f] -1;
                            var type = EconomicRowType.elements[idd].SumParameters.modelType;
                            var fractions = EconomicRowType.elements[idd].SumParameters.fractionParameters.targetFraction;
                            switch (type){
                                case'currentyParameters':
                                    var cuerrently = Number(EconomicRowType.elements[idd].SumParameters.currentyParameters.curentyValue.RUB);
                                    switch(EconomicRowType.elements[z].DateParameters.timeParameters.targetTime){
                                        case "hour":
                                            //формирование шага
                                            Period = ((hourPeriod/workHour)/workDay)/4;
                                            Period = Math.ceil(Period);
                                            if(i % Period == 0 && (i >= periodStart && i <= periodEnd)){
                                                if(hourPeriod < hourInMonth){
                                                    counter += (cuerrently * (hourInMonth/hourPeriod)) /100 * percent;
                                                } 
                                                else{
                                                    counter += cuerrently/100 * percent; 
                                                }                                                                                            
                                            }                               
                                            break;
                        
                                        case "day":
                                            Period = DayPeriod/workDay/4;
                                            Period = Math.ceil(Period);
                                            if(i % Period == 0 && (i >= periodStart && i <= periodEnd)){
                                                if(DayPeriod < (workDay * 4)){
                                                    counter += (cuerrently * ((workDay * 4)/DayPeriod))/100 * percent;
                                                }
                                                else{
                                                    counter += cuerrently/100 * percent;
                                                }                                                                                              
                                            }
                                            break;
                                            
                                        case "week":
                                            Period = WeekPeriod/4;
                                            Period = Math.ceil(Period);
                                            if(i % Period == 0 && (i >= periodStart && i <= periodEnd)){
                                                if(WeekPeriod < 4){
                                                    counter += (cuerrently * (4/WeekPeriod))/100 * percent;
                                                }
                                                else{
                                                    counter += cuerrently/100 * percent;
                                                }                                                         
                                            }
                                            break;
            
                                        case "month":
                                            Period = monthPeriod;
                                            Period = Math.ceil(Period);
                                            if(i % Period == 0 && (i >= periodStart && i <= periodEnd)){
                                                counter += cuerrently/100 * percent;                                                          
                                            }
                                            break;
            
                                        case "year":
                                            Period = (Number(EconomicRowType.elements[z].DateParameters.timeParameters.timeValue.year))/workMonth;
                                            Period = Math.ceil(Period);
                                            if(i % Period == 0 && (i >= periodStart && i <= periodEnd)){
                                                counter += cuerrently/100 * percent;                                                          
                                            }
                                            break;
                                    }                                        
                                    break;

                                case'fractionParameters':
                                    switch(EconomicRowType.elements[z].DateParameters.timeParameters.targetTime){
                                        case "hour":
                                            Period = ((Number(EconomicRowType.elements[z].DateParameters.timeParameters.timeValue.hour)/workHour)/workDay)/4;
                                            if(i % Period == 0 && (i >= periodStart && i <= periodEnd)){
                                                switch(fractions){
                                                    case "Исходный продукт":
                                                        selectedFractionMass = sourceFractionMass;
                                                    break;
                                    
                                                    case "Проход":
                                                        selectedFractionMass = acceptFractionMass;
                                                    break;
                                    
                                                    case "Отбой":
                                                        selectedFractionMass = rejectFractionMass;
                                                    break;
                                                }
                                                counter += ((selectedFractionMass * workHour * workDay * 4) * (firstValue / EconomicRowType.elements[z].SumParameters.fractionParameters.massValue.ton) * Period)/10 * percent;                     
                                            }                                
                                            break;
                        
                                        case "day":
                                            Period = (Number(EconomicRowType.elements[z].DateParameters.timeParameters.timeValue.day)/workDay)/4;
                                            if(i % Period == 0 && (i >= periodStart && i <= periodEnd)){
                                                switch(fractions){
                                                    case "Исходный продукт":
                                                        selectedFractionMass = sourceFractionMass;
                                                    break;
                                    
                                                    case "Проход":
                                                        selectedFractionMass = acceptFractionMass;
                                                    break;
                                    
                                                    case "Отбой":
                                                        selectedFractionMass = rejectFractionMass;
                                                    break;
                                                }
                                                counter += ((selectedFractionMass * workHour * workDay * 4) * (firstValue / EconomicRowType.elements[z].SumParameters.fractionParameters.massValue.ton) * Period)/10 * percent;                     
                                            }                                
                                            break;
                                            
                                        case "week":
                                            Period = (Number(EconomicRowType.elements[z].DateParameters.timeParameters.timeValue.week))/4;
                                            if(i % Period == 0 && (i >= periodStart && i <= periodEnd)){
                                                switch(fractions){
                                                    case "Исходный продукт":
                                                        selectedFractionMass = sourceFractionMass;
                                                    break;
                                    
                                                    case "Проход":
                                                        selectedFractionMass = acceptFractionMass;
                                                    break;
                                    
                                                    case "Отбой":
                                                        selectedFractionMass = rejectFractionMass;
                                                    break;
                                                }
                                                counter += ((selectedFractionMass * workHour * workDay * 4) * (firstValue / EconomicRowType.elements[z].SumParameters.fractionParameters.massValue.ton) * Period)/10 * percent;                      
                                            }
                                            break;
            
                                        case "month":
                                            Period = Number(EconomicRowType.elements[z].DateParameters.timeParameters.timeValue.month);
                                            if(i % Period == 0 && (i >= periodStart && i <= periodEnd)){
                                                switch(fractions){
                                                    case "Исходный продукт":
                                                        selectedFractionMass = sourceFractionMass;
                                                    break;
                                    
                                                    case "Проход":
                                                        selectedFractionMass = acceptFractionMass;
                                                    break;
                                    
                                                    case "Отбой":
                                                        selectedFractionMass = rejectFractionMass;
                                                    break;
                                                }
                                                counter += ((selectedFractionMass * workHour * workDay * 4) * (firstValue / EconomicRowType.elements[z].SumParameters.fractionParameters.massValue.ton) * Period)/10 * percent;                     
                                            }
                                            break;
            
                                        case "year":
                                            Period = (Number(EconomicRowType.elements[z].DateParameters.timeParameters.timeValue.year))/12;
                                            if(i % Period == 0 && (i >= periodStart && i <= periodEnd)){
                                                switch(fractions){
                                                    case "Исходный продукт":
                                                        selectedFractionMass = sourceFractionMass;
                                                    break;
                                    
                                                    case "Проход":
                                                        selectedFractionMass = acceptFractionMass;
                                                    break;
                                    
                                                    case "Отбой":
                                                        selectedFractionMass = rejectFractionMass;
                                                    break;
                                                }
                                                counter += ((selectedFractionMass * workHour * workDay * 4) * (firstValue / EconomicRowType.elements[z].SumParameters.fractionParameters.massValue.ton) * Period)/10 * percent;                     
                                            }
                                            break;
                                    }
                                    break;
                            }
                            economicChart.data.datasets[1].data[i] += counter; 
                        }
                    }
                }
                else{
                    var counter = 0;
                    var selectedFractionMass = 0;
                    var rowNumb = EconomicRowType.elements[z].SumParameters.percentParameters.articleNumber;
                    var percent = EconomicRowType.elements[z].SumParameters.percentParameters.percent /10;
                    var Period;
                    for(var i = 0; i< economicChart.data.labels.length; i++){
                        for(var f = 0; f< rowNumb.length; f++){
                            var idd = rowNumb[f] -1;
                            var type = EconomicRowType.elements[idd].SumParameters.modelType;
                            var fractions = EconomicRowType.elements[idd].SumParameters.fractionParameters.targetFraction;
                            switch (type){
                                case'currentyParameters':
                                    var cuerrently = Number(EconomicRowType.elements[idd].SumParameters.currentyParameters.curentyValue.RUB);
                                    switch(EconomicRowType.elements[z].DateParameters.timeParameters.targetTime){
                                        case "hour":
                                            //формирование шага
                                            Period = ((hourPeriod/workHour)/workDay)/4;
                                            Period = Math.ceil(Period);
                                            if(i % Period == 0 && (i >= periodStart && i <= periodEnd)){
                                                if(hourPeriod < hourInMonth){
                                                    counter += (cuerrently * (hourInMonth/hourPeriod)) /100 * percent;
                                                } 
                                                else{
                                                    counter += cuerrently/100 * percent; 
                                                }                                                                                            
                                            }                               
                                            break;
                        
                                        case "day":
                                            Period = DayPeriod/workDay/4;
                                            Period = Math.ceil(Period);
                                            if(i % Period == 0 && (i >= periodStart && i <= periodEnd)){
                                                if(DayPeriod < (workDay * 4)){
                                                    counter += (cuerrently * ((workDay * 4)/DayPeriod))/100 * percent;
                                                }
                                                else{
                                                    counter += cuerrently/100 * percent;
                                                }                                                                                              
                                            }
                                            break;
                                            
                                        case "week":
                                            Period = WeekPeriod/4;
                                            Period = Math.ceil(Period);
                                            if(i % Period == 0 && (i >= periodStart && i <= periodEnd)){
                                                if(WeekPeriod < 4){
                                                    counter += (cuerrently * (4/WeekPeriod))/100 * percent;
                                                }
                                                else{
                                                    counter += cuerrently/100 * percent;
                                                }                                                         
                                            }
                                            break;
            
                                        case "month":
                                            Period = monthPeriod;
                                            Period = Math.ceil(Period);
                                            if(i % Period == 0 && (i >= periodStart && i <= periodEnd)){
                                                counter += cuerrently/100 * percent;                                                          
                                            }
                                            break;
            
                                        case "year":
                                            Period = (Number(EconomicRowType.elements[z].DateParameters.timeParameters.timeValue.year))/workMonth;
                                            Period = Math.ceil(Period);
                                            if(i % Period == 0 && (i >= periodStart && i <= periodEnd)){
                                                counter += cuerrently/100 * percent;                                                          
                                            }
                                            break;
                                    }                                        
                                    break;

                                case'fractionParameters':
                                    switch(EconomicRowType.elements[z].DateParameters.timeParameters.targetTime){
                                        case "hour":
                                            Period = ((Number(EconomicRowType.elements[z].DateParameters.timeParameters.timeValue.hour)/workHour)/workDay)/4;
                                            if(i % Period == 0 && (i >= periodStart && i <= periodEnd)){
                                                switch(fractions){
                                                    case "Исходный продукт":
                                                        selectedFractionMass = sourceFractionMass;
                                                    break;
                                    
                                                    case "Проход":
                                                        selectedFractionMass = acceptFractionMass;
                                                    break;
                                    
                                                    case "Отбой":
                                                        selectedFractionMass = rejectFractionMass;
                                                    break;
                                                }
                                                counter += ((selectedFractionMass * workHour * workDay * 4) * (firstValue / EconomicRowType.elements[z].SumParameters.fractionParameters.massValue.ton) * Period)/10 * percent;                     
                                            }                                
                                            break;
                        
                                        case "day":
                                            Period = (Number(EconomicRowType.elements[z].DateParameters.timeParameters.timeValue.day)/workDay)/4;
                                            if(i % Period == 0 && (i >= periodStart && i <= periodEnd)){
                                                switch(fractions){
                                                    case "Исходный продукт":
                                                        selectedFractionMass = sourceFractionMass;
                                                    break;
                                    
                                                    case "Проход":
                                                        selectedFractionMass = acceptFractionMass;
                                                    break;
                                    
                                                    case "Отбой":
                                                        selectedFractionMass = rejectFractionMass;
                                                    break;
                                                }
                                                counter += ((selectedFractionMass * workHour * workDay * 4) * (firstValue / EconomicRowType.elements[z].SumParameters.fractionParameters.massValue.ton) * Period)/10 * percent;                     
                                            }                                
                                            break;
                                            
                                        case "week":
                                            Period = (Number(EconomicRowType.elements[z].DateParameters.timeParameters.timeValue.week))/4;
                                            if(i % Period == 0 && (i >= periodStart && i <= periodEnd)){
                                                switch(fractions){
                                                    case "Исходный продукт":
                                                        selectedFractionMass = sourceFractionMass;
                                                    break;
                                    
                                                    case "Проход":
                                                        selectedFractionMass = acceptFractionMass;
                                                    break;
                                    
                                                    case "Отбой":
                                                        selectedFractionMass = rejectFractionMass;
                                                    break;
                                                }
                                                counter += ((selectedFractionMass * workHour * workDay * 4) * (firstValue / EconomicRowType.elements[z].SumParameters.fractionParameters.massValue.ton) * Period)/10 * percent;                      
                                            }
                                            break;
            
                                        case "month":
                                            Period = Number(EconomicRowType.elements[z].DateParameters.timeParameters.timeValue.month);
                                            if(i % Period == 0 && (i >= periodStart && i <= periodEnd)){
                                                switch(fractions){
                                                    case "Исходный продукт":
                                                        selectedFractionMass = sourceFractionMass;
                                                    break;
                                    
                                                    case "Проход":
                                                        selectedFractionMass = acceptFractionMass;
                                                    break;
                                    
                                                    case "Отбой":
                                                        selectedFractionMass = rejectFractionMass;
                                                    break;
                                                }
                                                counter += ((selectedFractionMass * workHour * workDay * 4) * (firstValue / EconomicRowType.elements[z].SumParameters.fractionParameters.massValue.ton) * Period)/10 * percent;                     
                                            }
                                            break;
            
                                        case "year":
                                            Period = (Number(EconomicRowType.elements[z].DateParameters.timeParameters.timeValue.year))/12;
                                            if(i % Period == 0 && (i >= periodStart && i <= periodEnd)){
                                                switch(fractions){
                                                    case "Исходный продукт":
                                                        selectedFractionMass = sourceFractionMass;
                                                    break;
                                    
                                                    case "Проход":
                                                        selectedFractionMass = acceptFractionMass;
                                                    break;
                                    
                                                    case "Отбой":
                                                        selectedFractionMass = rejectFractionMass;
                                                    break;
                                                }
                                                counter += ((selectedFractionMass * workHour * workDay * 4) * (firstValue / EconomicRowType.elements[z].SumParameters.fractionParameters.massValue.ton) * Period)/10 * percent;                     
                                            }
                                            break;
                                    }
                                    break;
                            }
                            economicChart.data.datasets[0].data[i] += counter; 
                        }
                    }
                }
                break;
                //+фиксированные даты
            case "percentParameters fixedDate":
                if(EconomicRowType.elements[z].IncomeArrow == true){
                    var counter = 0;
                    var fixedDate = EconomicRowType.elements[z].DateParameters.fixedDate;
                    var rowNumb = EconomicRowType.elements[z].SumParameters.percentParameters.articleNumber;
                    var percent = EconomicRowType.elements[z].SumParameters.percentParameters.percent;
                    var selectedFractionMass = 0;
                    for(var i = 0; i< economicChart.data.labels.length; i++){ 
                        for(var f = 0; f< rowNumb.length; f++){
                            var idd = rowNumb[f] -1;
                            var type = EconomicRowType.elements[idd].SumParameters.modelType;
                            var fractions = EconomicRowType.elements[idd].SumParameters.fractionParameters.targetFraction;
                            switch (type){
                                case'currentyParameters':
                                    for(var j = 0; j < fixedDate.length; j++){
                                        if(fixedDate[j] == i+1){
                                            counter += firstValue / 100 * percent;
                                        }
                                    }                              
                                    break;

                                case'fractionParameters':
                                    for(var j = 0; j < fixedDate.length; j++){                            
                                        if(fixedDate[j] == i+1){
                                            switch(fractions){
                                                case "Исходный продукт":
                                                    selectedFractionMass = sourceFractionMass;
                                                break;
                                
                                                case "Проход":
                                                    selectedFractionMass = acceptFractionMass;
                                                break;
                                
                                                case "Отбой":
                                                    selectedFractionMass = rejectFractionMass;
                                                break;
                                            }
                                            counter += ((selectedFractionMass * hourInMonth) * (firstValue / tonn) * monthPeriod)/10 * percent; 
                                        }                            
                                    }         
                                    break;

                                case'percentParameters':
                                    break;
                            }
                            economicChart.data.datasets[1].data[i] += counter;
                        }
                    }
                }
                else{
                    var counter = 0;
                    var fixedDate = EconomicRowType.elements[z].DateParameters.fixedDate;
                    var rowNumb = EconomicRowType.elements[z].SumParameters.percentParameters.articleNumber;
                    var percent = EconomicRowType.elements[z].SumParameters.percentParameters.percent;
                    var selectedFractionMass = 0;
                    for(var i = 0; i< economicChart.data.labels.length; i++){  
                        for(var f = 0; f< rowNumb.length; f++){
                            var idd = rowNumb[f] -1;
                            var type = EconomicRowType.elements[idd].SumParameters.modelType;
                            var fractions = EconomicRowType.elements[idd].SumParameters.fractionParameters.targetFraction;
                            switch (type){
                                case'currentyParameters':
                                    for(var j = 0; j < fixedDate.length; j++){
                                        if(fixedDate[j] == i+1){
                                            counter += firstValue / 100 * percent;
                                        }
                                    }                              
                                    break;

                                case'fractionParameters':
                                    for(var j = 0; j < fixedDate.length; j++){                            
                                        if(fixedDate[j] == i+1){
                                            switch(fractions){
                                                case "Исходный продукт":
                                                    selectedFractionMass = sourceFractionMass;
                                                break;
                                
                                                case "Проход":
                                                    selectedFractionMass = acceptFractionMass;
                                                break;
                                
                                                case "Отбой":
                                                    selectedFractionMass = rejectFractionMass;
                                                break;
                                            }
                                            counter += ((selectedFractionMass * hourInMonth) * (firstValue / tonn) * monthPeriod)/10 * percent; 
                                        }                            
                                    }         
                                    break;

                                case'percentParameters':
                                    break;
                            }
                            economicChart.data.datasets[0].data[i] += counter;
                        }
                    }
                }
                break;
        }
        
    }    
    economicChart.update();
}


function setTypeFraction(fraction){
    var parts = fraction.split(' ');    
    var checkSort = parts.map(value => { return !isNaN(value); }).indexOf(true);
    var checkProt = parts.map(value => { if(value == "01"){ return (true);} else return (false)}).indexOf(true);
    var point;
    var valueFractMass;
    
    switch(parts[0]){
        case "Исходный":
            point = 'mainFractionData';
            break;
        case "Проход":
            point = 'suitableFraction';
            break;
        case "Отбой":
            point = 'weedFraction';
            break;
    }
        
    if( checkSort != -1 && parts[checkSort] != '01'){
        var sortNumber = Number(parts[checkSort]);
        valueFractMass = pageProtocolRow[ProtocolPage-1].pageSortRow[sortNumber-2].requirementsTable[point].mass;
    }
    else if(checkProt != -1){
        valueFractMass = pageProtocolRow[ProtocolPage-1].requirementsTable[point].mass;
    }    
    return valueFractMass;
}
let date = new Date();

let firstDay = "", lastDay = "";
let btnPrev = "", btnNext = "";
let num = 1;

let weekDaysList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function Dec(Year){

    document.querySelector('#month').className = "month";

    let getFirstDate = new Date(`${num}`+',01,'+`${Year}`);

    // getFirstDays
    let firstDay = getFirstDate.getDay();

    // getAllDays
    let allDays = new Date(Year, num, 0).getDate() ;

    let monthName='';

    for(let i=0; i<12; i++){
        if(i+1 === num){
            monthName = monthList[i]+` ${Year}`;
        }
    }

    
    btnPrev = `<i onclick="decreNumber()" class="fa fa-angle-left" ></i>`;
    btnNext = `<i onclick="increNumber()" class="fa fa-angle-right" ></i>`;

    document.querySelector(".btnPrev").innerHTML = btnPrev;
    document.querySelector(".btnNext").innerHTML = btnNext;

    document.querySelector('.monthName').innerHTML = monthName;
    
    let weekDays = "";

    for(let i=0; i<7; i++){
        weekDays += `<div>${weekDaysList[i]}</div>`
    }

    document.querySelector('#weekdays').innerHTML = weekDays;
    
    let days = "";
    let k = 1;
    let loopTotal;

    if( (firstDay+allDays) <= 35 ){
        loopTotal = 35;
    }
    else{
        loopTotal = 42;
    }
    
    for( let i=1; i<=loopTotal; i++){
        if(i <= firstDay){
            days += `<div>${' '}</div>`;
        }

        if(i > firstDay && i <= (allDays + firstDay) ){
            days += `<div>${k}</div>`;
            k++;
        }

        if( i > (firstDay+allDays) ){
            days += `<div>${' '}</div>`;
        }
        document.querySelector('.Days').innerHTML = days;
        
    }
};

function increNumber(){
    if(num < 12){
        num++;
        Dec(year);
    }
}

function decreNumber(){
    if(num > 1){
        num--;
        Dec(year);
    }
}

document.querySelector(".input").addEventListener("keyup", function(e){
    if(e.keyCode === 13){
            year = document.querySelector('.input').value;
            
            if(year / 1000 <= 10 && year / 100 >= 10 && year / 10 >= 10){
                document.querySelector('.yearHeading').innerHTML = `${'Calendar '}` + year;
                num = 1;
                Dec(year);
            }
            else{
                location.reload();
                alert("Invalid Input");
            }
                    
    }
});

function getYear(){
    year = document.querySelector('.input').value;
    
    if(year / 1000 <= 10 && year / 100 >= 10 && year / 10 >= 10){
        document.querySelector('.yearHeading').innerHTML = `${'Calendar '}` + year;
        num = 1;
        Dec(year);
    }
    else{
        location.reload();
        alert("Invalid Input");
    }
    
}

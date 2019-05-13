let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let days = ["M", "T", "W", "T", "F", "S", "S"];

function generate() {
    let val = document.getElementById("input-box").value;
    if(val === ""){
        invalidInput();
    }
    else {
        drawCalendar(val);
    }
}

function invalidInput () {
    window.alert("Enter a year");
}

function drawCalendar(_year) {
    for(let i = 0; i < 12; i++){ //for each of the 12 months
        createMonth(i, _year);
    }
}

function createMonth(_month, _year) {
    let temp_date = months[_month] + " 1, " + _year;
    let date = new Date(temp_date);
    let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    let month_id = months[_month].toLowerCase();

    //Creating month wrapper:
    let month_ele = document.createElement("DIV");
    month_ele.className = "month";
    month_ele.id = month_id;
    document.getElementById("calendar-area").appendChild(month_ele);

    //Creating Month Title:
    let month_title = document.createElement("DIV");
    month_title.className = "month-title";
    month_title.innerHTML = month_id.toUpperCase();
    document.getElementById(month_id).appendChild(month_title);

    //Creating Days Container:
    let day_title = document.createElement("DIV");
    day_title.className = "day-title";
    day_title.id = month_id+"-days";
    document.getElementById(month_id).appendChild(day_title);

    //Creating Days Titles M,T,W,T,F,S,S:
    
    let days_title_each = "";
    for(let i = 0; i < days.length; i++){
        days_title_each += "<span>"+days[i]+"</span>";
    }
    days_title_each += ""
    
    document.getElementById(month_id+"-days").innerHTML = days_title_each;

    //Creating Dates Container:
    let dates_container = document.createElement("DIV");
    dates_container.className = "dates-container";
    dates_container.id = month_id+"-dates";
    document.getElementById(month_id).appendChild(dates_container);

    //Creating Dates 1,2,3... :
    let dates_inner = "";
    let count = 1;
    for(let j = 0; j < days.length; j++){
        if(j === firstDay.getDay()){
            dates_inner += "<span>"+ count +"</span>";
            count++;
        }
        else if(j > firstDay.getDay()) {
            dates_inner += "<span>"+ count +"</span>";
            count++;
        }
        else {
            dates_inner += "<span> </span>";
        }
    }
    dates_inner += "<br>"
    
    while(count <= lastDay.getDate()){
        dates_inner += ""
        for(let i=0; i < days.length; i++){
            dates_inner += "<span>"+ count +"</span>"
            count++;
            if(count > lastDay.getDate()) break;
        }
        dates_inner += "<br>"
        
    }
    document.getElementById(month_id+"-dates").innerHTML = dates_inner;
}

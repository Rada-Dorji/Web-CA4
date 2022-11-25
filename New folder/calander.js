
var dt=new Date();
function renderDate(){
    dt.setDate(1);
    var day=dt.getDay()
    var endDate=new Date(
        dt.getFullYear(),
        dt.getMonth()+1,
        0
    ).getDate();
    
    var predate=new Date(
        dt.getFullYear(),
        dt.getMonth(), 
        0
    ).getDate();
    
    var today=new Date();
    
    var months=[
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
    ]
    document.getElementById('date_str').innerHTML=dt.toDateString();
    document.getElementById('month').innerHTML=months[dt.getMonth()];
    
    var cells='';
    
    for(x=day; x>0; x--){
        cells += "<div class='pre_date'>"+ (predate-x+1) + '</div>'
    }
    
    for(i=1; i<=endDate; i++){
        if(i==today.getDate() && dt.getMonth()==today.getMonth()){
            cells +="<div class='today'>" + i + '</div>'
        }else{
            cells +="<div>" + i + '</div>'
        }
        
    }
    document.getElementsByClassName('days')[0].innerHTML=cells;
}

//Onclick arrow button

function moveDate(para){
if(para=='previous'){
    dt.setMonth(dt.getMonth() -1 );
}else if(para=='next'){
    dt.setMonth(dt.getMonth()+1);
}
renderDate();
}

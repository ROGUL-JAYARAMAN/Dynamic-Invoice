var disp_Date= document.getElementById('Date');
var disp_Time=document.getElementById('Time');

setInterval(()=>
{
    var now=new Date();
    var date=now.getDate();
    var month=now.getMonth();
    var year=now.getFullYear();
    
    var day=matchDay(now.getDay());
    var mon=matchMonth(now.getMonth());

    var hours=now.getHours();
    var min=now.getMinutes();
    var sec=now.getSeconds();

    var hr=hours%12||12;
    var mer=hours>12 ? "pm" : "am"; 

    disp_Date.innerHTML=day+" "+String(date).padStart(2,0)+" / "+mon+" "+String(month).padStart(2,0)+" / "+year;
    disp_Time.innerHTML=String(hr).padStart(2,0)+":"+String(min).padStart(2,0)+":"+String(sec).padStart(2,0)+" "+mer;

},1000);

function matchDay(ind)
{
    var day=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
    return day[ind];
}

function matchMonth(ind)
{
    var mon=["January","February","March","April","May","June","July","August","September","October","November","December"];
    return mon[ind];
}
// menu box funckionalumas

  
const dailyReport = document.getElementById('dailyReport');
let DailyReportClickCounter = false;


dailyReport.addEventListener('click', function clicker(){

if (DailyReportClickCounter === false){
const calculatorBoxCSS= document.querySelector('#CBelement');
calculatorBoxCSS.style.display = 'block';
console.log('calculator box visible');
DailyReportClickCounter = true;} 

else if(DailyReportClickCounter === true){
const calculatorBoxCSS= document.querySelector('#CBelement');
calculatorBoxCSS.style.display = 'none';
console.log('calculator box visible');
return DailyReportClickCounter = false;
}});

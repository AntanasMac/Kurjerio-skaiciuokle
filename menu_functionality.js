// menu box funckionalumas

  
const DAILYREPORT = document.getElementById('daily-report');
let dailyReportClickCounter = false;


DAILYREPORT.addEventListener('click', function clicker(){

if (dailyReportClickCounter === false){
const CALCULATORBOXCSS= document.querySelector('#calculator-box-element');
CALCULATORBOXCSS.style.display = 'block';
console.log('calculator box visible');
dailyReportClickCounter = true;} 

else if(dailyReportClickCounter === true){
const CALCULATORBOXCSS= document.querySelector('#calculator-box-element');
CALCULATORBOXCSS.style.display = 'none';
console.log('calculator box visible');
return dailyReportClickCounter = false;
}});

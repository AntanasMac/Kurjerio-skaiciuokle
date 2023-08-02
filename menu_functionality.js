// menu box funckionalumas

  
const DAILYREPORT = document.getElementById('daily_report');
let dailyReportClickCounter = false;

// old code

// DAILYREPORT.addEventListener('click', function clicker(){

//     if (dailyReportClickCounter === false){
//         const CALCULATORBOXCSS= document.querySelector('#calculator_box_element');
//         CALCULATORBOXCSS.style.display = 'block';
//         console.log('calculator box visible');
//         dailyReportClickCounter = true;
//     } 

//     else if(dailyReportClickCounter === true){
//         const CALCULATORBOXCSS= document.querySelector('#calculator_box_element');
//         CALCULATORBOXCSS.style.display = 'none';
//         console.log('calculator box visible');
//         return dailyReportClickCounter = false;
//     }
// });

//mentor suggested code refactoring

DAILYREPORT.addEventListener('click', function clicker(){
    const CALCULATORBOXCSS = document.querySelector('#calculator_box_element');
    CALCULATORBOXCSS.style.display = dailyReportClickCounter ? 'none' : 'block'
    return dailyReportClickCounter = !dailyReportClickCounter
  });
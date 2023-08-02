// CALCULATOR FUNCTIONALITY

function courierCalculator(dailyIncome, dailyExpenses, distanceDriven, ordersCompleted, hoursWorked) {

    const TAXES = 0.21;
    const REPAIR_SAVINGS = 0.20;

    const TAX_CALCULATION = dailyIncome * TAXES;
    const TAX_CALCULATION_ROUNDED = TAX_CALCULATION.toFixed(2);

    const REPAIR_SAVINGS_CALCULATION = (dailyIncome - TAX_CALCULATION) * REPAIR_SAVINGS;
    const REPAIR_SAVINGS_CALCULATION_ROUNDED = REPAIR_SAVINGS_CALCULATION.toFixed(2);

    const HOURLY_INCOME_CALCULATION = dailyIncome / hoursWorked;
    const HOURLY_INCOME_CALCULATION_ROUNDED = HOURLY_INCOME_CALCULATION.toFixed(2);

    const ORDER_AVERAGE_INCOME_CALCULATION = dailyIncome / ordersCompleted;
    const ORDER_AVERAGE_INCOME_CALCULATION_ROUNDED = ORDER_AVERAGE_INCOME_CALCULATION.toFixed(2);

    const NET_INCOME_CALCULATION = dailyIncome - (TAX_CALCULATION + REPAIR_SAVINGS_CALCULATION + dailyExpenses);
    const NET_INCOME_CALCULATION_ROUNDED = NET_INCOME_CALCULATION.toFixed(2);

    const HOURLY_RATE_AFTER_ALL_EXPENSES_CALCULATION = NET_INCOME_CALCULATION / hoursWorked;
    const HOURLY_RATE_AFTER_ALL_EXPENSES_CALCULATION_ROUNDED = HOURLY_RATE_AFTER_ALL_EXPENSES_CALCULATION.toFixed(2);

    const KILOMETER_NET_PAY_CALCULATION = NET_INCOME_CALCULATION / distanceDriven;
    const KILOMETER_NET_PAY_CALCULATION_ROUNDED = KILOMETER_NET_PAY_CALCULATION.toFixed(2);
   

    console.log(`Daily income: ${dailyIncome}`);
    console.log(`Amount of taxes: ${TAX_CALCULATION_ROUNDED}`);
    console.log(`Savings for repairs: ${REPAIR_SAVINGS_CALCULATION_ROUNDED}`);
    console.log(`Distance driven: ${distanceDriven}`);
    console.log(`Orders completed: ${ordersCompleted}`);
    console.log(`Average order pay: ${ORDER_AVERAGE_INCOME_CALCULATION_ROUNDED}`);
    console.log(`Hours worked: ${hoursWorked}`);
    console.log(`Gross hourly income: ${HOURLY_INCOME_CALCULATION_ROUNDED}`);
    console.log(`Average pay per kilometer: ${KILOMETER_NET_PAY_CALCULATION_ROUNDED}`);
    console.log(`Net daily income: ${NET_INCOME_CALCULATION_ROUNDED}`);
    console.log(`Net hourly income (after all deductions): ${HOURLY_RATE_AFTER_ALL_EXPENSES_CALCULATION_ROUNDED}`);

  }

// WORK IN PROGRESS
// STORING FORM INPUT DATA TO --> SERVER

const DAILY_REPORT_FORM = document.getElementById('daily_report_form');

//event listener for the submit button
DAILY_REPORT_FORM.addEventListener('submit', addToStorage);
const CALCULATORBOXCSS = document.querySelector('#calculator_box_element');

function addToStorage(){
  //prevents default submit button action
  event.preventDefault()

//grabbing form data and storing in variables  
  const INPUT_DATE = document.getElementById('date').value;
  const INPUT_INCOME = document.getElementById('daily_income').value;
  const INPUT_EXPENSES = document.getElementById('daily_expenses').value;
  const INPUT_DISTANCE = document.getElementById('distance_driven').value;
  const INPUT_ORDERS = document.getElementById('orders_completed').value;
  const INPUT_WORKHOURS = document.getElementById('hours_worked').value;
  const INPUT_TEMPO = document.getElementById('list_input').value;
  const INPUT_COMMENT = document.getElementById('comment_input').value;

// storing the user form input data into an object
  const FORM_DATA = {};

//the users specified date becomes the name of the object that stores the filled up form
  FORM_DATA[INPUT_DATE] = {
    'date':INPUT_DATE, 
    'income':INPUT_INCOME, 
    'expenses':INPUT_EXPENSES,
    'distance':INPUT_DISTANCE,
    'completed orders':INPUT_ORDERS,
    'hours worked':INPUT_WORKHOURS,
    'tempo':INPUT_TEMPO,
    'comment':INPUT_COMMENT,
  }

//converting the created object into a JSON string format
  const FORM_DATA_JSON_STRING = JSON.stringify(FORM_DATA[INPUT_DATE]);

// Add the JSON string to the localStorage 
localStorage.setItem(INPUT_DATE, FORM_DATA_JSON_STRING);

  console.log(FORM_DATA);

//closing the dialog box after data is sent to server
  CALCULATORBOXCSS.style.display = 'none'
  return dailyReportClickCounter = false;
};






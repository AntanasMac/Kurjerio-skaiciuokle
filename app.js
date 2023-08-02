let dailyIncome = "";







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


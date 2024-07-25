function calculateLoan(){
    LoanAmountValue = document.getElementById
    ("loan-amount").value
    

    intrestRateValue = document.getElementById
    ("interest-rate").value

    MonthsToPayValue = document.getElementById
    ("months-to-pay").value

    intrest = (LoanAmountValue *
         (intrestRateValue * 0.01)) / monthlyPayValue
         
         
         MonthlyPayment = (LoanAmountValue /
        MonthsToPayValue + interest).toFixed(2)

        document.getElementById("payment").innerHTML = 
        `Monthly Payment: ${MonthlyPayment}`
}
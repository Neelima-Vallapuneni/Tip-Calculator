let billAmountInput = document.getElementById('bill-amount');
let tipPercentageInput=document.getElementById('tip-percentage');
let calculationButton=document.getElementById('calculate-tip');
let tipAmount=document.getElementById('tip-amount');
let totalAmount=document.getElementById('total-amount');
calculationButton.addEventListener('click',function(){
    let billAmount=parseFloat(billAmountInput.value);
    let tipPercentage=parseFloat(tipPercentageInput.value);
    let tip=parseFloat((billAmount*tipPercentage/100).toFixed(2));
    tipAmount.textContent='Tip Amount: $'+tip;
    totalAmount.textContent='Total Amount: $'+(billAmount+tip).toFixed(2);
});
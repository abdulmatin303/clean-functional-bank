function getInputValue(fieldId){
    let inputField = document.getElementById(fieldId);
    let valueInText = inputField.value;
    let value = parseFloat(valueInText);
    inputField.value = '';
    return value;
}
function getInnerTextValue(fieldId){
    let fieldTag = document.getElementById(fieldId);
    let fieldValueText = fieldTag.innerText;
    let value = parseFloat(fieldValueText);
    return value;
}

function updateTotal(fieldId, amount){
    let previousTotal = getInnerTextValue(fieldId);
    let newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;
    return newTotal;
}

function updateBalance(amount, isAdding){
    // let balanceTag = document.getElementById('balance-total');
    // let balanceText = balanceTag.innerText;
    // let previousBalance = parseFloat(balanceText);
    let previousBalance = getInnerTextValue('balance-total');
    let newBalance;
    if(isAdding == true){
        newBalance = previousBalance + amount;
    }
    else{
        newBalance = previousBalance - amount;
    }
    document.getElementById('balance-total').innerText = newBalance;
}

document.getElementById('deposit-button').addEventListener('click', function(){
    let amount = getInputValue('deposit-input');
    if(amount > 0){
        updateTotal('deposit-total', amount);
        updateBalance(amount, true);
    }
});
// handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function(){
    let amount = getInputValue('withdraw-input');
    let balance = getInnerTextValue('balance-total');
   if(amount > 0 && amount <= balance){
       updateTotal('withdraw-total', amount);
       updateBalance(amount, false);
    }
});
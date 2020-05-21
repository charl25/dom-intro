const typeString = document.querySelector(".billTypeText");
const addBtn = document.querySelector(".addToBillBtn");
const smsTotal = document.querySelector(".smsTotalOne");
const callTotal = document.querySelector(".callTotalOne");
const total = document.querySelector(".totalOne");

    var sms = 0;
    var call =0;
    var totalcost = 0;

addBtn.addEventListener('click', function(){

    var item = typeString.value.trim();
    if (item === "call"){
        call += 2.75;
        totalcost += 2.75;
    }
    if (item === "sms"){
        sms += 0.75;
        totalcost += 0.75;
    }
    callTotal.innerHTML=call.toFixed(2);
    smsTotal.innerHTML=sms.toFixed(2);
    total.innerHTML = totalcost.toFixed(2);
    
    if (totalcost>=50) {
        total.classList.toggle("danger");
    } else if(totalcost>=30){
        total.classList.toggle("warning");
    }
});

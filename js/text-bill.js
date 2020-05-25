const typeString = document.querySelector(".billTypeText");
const addBtn = document.querySelector(".addToBillBtn");
const smsTotal = document.querySelector(".smsTotalOne");
const callTotal = document.querySelector(".callTotalOne");
const total = document.querySelector(".totalOne");

    var smsOne = 0;
    var callOne =0;
    var totalcostOne = 0;

addBtn.addEventListener('click', function(){

    var item = typeString.value.trim();
    if (item === "call"){
        callOne += 2.75;
        totalcostOne += 2.75;
    }
    if (item === "sms"){
        smsOne += 0.75;
        totalcostOne += 0.75;
    }
    callTotal.innerHTML=callOne.toFixed(2);
    smsTotal.innerHTML=smsOne.toFixed(2);
    total.innerHTML = totalcostOne.toFixed(2);
    
    if (totalcostOne>=50) {
        total.classList.toggle("danger");
    } else if(totalcost>=30){
        total.classList.toggle("warning");
    }
});

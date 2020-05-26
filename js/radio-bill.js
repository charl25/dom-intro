const addBtnTwo = document.querySelector(".radioBillAddBtn");
const smsTotalTwo = document.querySelector(".smsTotalTwo");
const callTotalTwo = document.querySelector(".callTotalTwo");
const totalTwo = document.querySelector(".totalTwo");

    var sms = 0;
    var call =0;
    var totalcost = 0;

addBtnTwo.addEventListener('click', function(){

    var itemChecked=document.querySelector("input[name='billItemType']:checked");

    if(itemChecked){
    var checkedItem = itemChecked.value;
    }

    if (checkedItem === "call"){
        call += 2.75;
        totalcost += 2.75;
    }
    if (checkedItem === "sms"){
        sms += 0.75;
        totalcost += 0.75;
    }
    callTotalTwo.innerHTML=call.toFixed(2);
    smsTotalTwo.innerHTML=sms.toFixed(2);
    totalTwo.innerHTML = totalcost.toFixed(2);
    
    if (totalcost>=50) {
        totalTwo.classList.add("danger");
    } else if(totalcost>=30){
        totalTwo.classList.add("warning");
    }
});

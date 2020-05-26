const calcBtn = document.querySelector(".calculateBtn");
const theTotal = document.querySelector(".billTotal");
const billList = document.querySelector(".billString");

calcBtn.addEventListener('click', function(){
    var billItems = billList.value;
    var bill=billItems.split(",");
    var billTotal = 0;
    //loop over all the bill items
    for (var i=0;i<bill.length;i++){
        var billItem = bill[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }
    }
    
    //round to two decimals
    var roundedBillTotal = billTotal.toFixed(2);
    theTotal.innerHTML=roundedBillTotal;
    if (roundedBillTotal>=20) {
        theTotal.classList.add("warning");
    } else if(roundedBillTotal>=30){
        theTotal.classList.add("danger");
    }

});

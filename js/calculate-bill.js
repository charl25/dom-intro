const calcBtn = document.querySelector(".calculateBtn");
const theTotal = document.querySelector(".billTotal");
const billList = document.querySelector(".billString");
const totalDiv = document.querySelector('.total');
//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button

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
    if (roundedBillTotal>20) {
        totalDiv.classList.toggle("warning");
    } if(roundedBillTotal>30){
        totalDiv.classList.toggle("danger");
    }

});

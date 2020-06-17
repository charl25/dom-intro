const calcBtn = document.querySelector(".calculateBtn");
const theTotal = document.querySelector(".billTotal");
const billList = document.querySelector(".billString");

const calcBill= CalculateBill();

calcBtn.addEventListener('click', function(e){
    var list = billList.value;
    var bill= list.split(",");
    calcBill.calc(bill);
    var totalFixed = calcBill.total();
    theTotal.innerHTML = totalFixed.toFixed(2);
    theTotal.classList.add(calcBill.levelState())
});

// function calculateBill(){
//     var billItems = billList.value;
//     var bill=billItems.split(",");
//     var billTotal = 0;

//     for (var i=0;i<bill.length;i++){
//         var billItem = bill[i].trim();
//         if (billItem === "call"){
//             billTotal += 2.75;
//         }
//         else if (billItem === "sms"){
//             billTotal += 0.75;
//         }
//     }
//     var roundedBillTotal = billTotal.toFixed(2);
//     theTotal.innerHTML=roundedBillTotal;
//     if (roundedBillTotal>=30) {
//         theTotal.classList.add("danger");
//     } else if(roundedBillTotal>=20){
//         theTotal.classList.add("warning");
//     }
// }
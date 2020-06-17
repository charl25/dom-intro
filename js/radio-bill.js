const addBtnTwo = document.querySelector(".radioBillAddBtn");
const smsTotalTwo = document.querySelector(".smsTotalTwo");
const callTotalTwo = document.querySelector(".callTotalTwo");
const totalTwo = document.querySelector(".totalTwo");

const radioBill= RadioBill();

addBtnTwo.addEventListener('click',function(e){
    var itemChecked=document.querySelector("input[name='billItemType']:checked");
    if(itemChecked){
    var checkedItem = itemChecked.value;
    }
    radioBill.calc(checkedItem);
    
    var smsTot= radioBill.smsTot();
    var callTot= radioBill.callTot();
    var rTotal= radioBill.total();

    smsTotalTwo.innerHTML= smsTot.toFixed(2);
    callTotalTwo.innerHTML= callTot.toFixed(2);
    totalTwo.innerHTML= rTotal.toFixed(2);
    totalTwo.classList.add(radioBill.levelState())
});
//     var sms = 0;
//     var call =0;
//     var totalcost = 0;

// addBtnTwo.addEventListener('click', function(){

//     var itemChecked=document.querySelector("input[name='billItemType']:checked");

//     if(itemChecked){
//     var checkedItem = itemChecked.value;
//     }

//     if (checkedItem === "call"){
//         call += 2.75;
//         totalcost += 2.75;
//     }
//     if (checkedItem === "sms"){
//         sms += 0.75;
//         totalcost += 0.75;
//     }
//     callTotalTwo.innerHTML=call.toFixed(2);
//     smsTotalTwo.innerHTML=sms.toFixed(2);
//     totalTwo.innerHTML = totalcost.toFixed(2);
    
//     if (totalcost>=50) {
//         totalTwo.classList.add("danger");
//     } else if(totalcost>=30){
//         totalTwo.classList.add("warning");
//     }
// });

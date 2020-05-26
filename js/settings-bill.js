const smsTotal3 = document.querySelector(".smsTotalSettings");
const callTotal3 = document.querySelector(".callTotalSettings");
const total3 = document.querySelector(".totalSettings");

const smsCostSetting = document.querySelector(".smsCostSetting");
const callCostSetting = document.querySelector(".callCostSetting");
const warningLevelSetting = document.querySelector(".warningLevelSetting");
const criticalLevelSetting = document.querySelector(".criticalLevelSetting");

const addBtn2 = document.querySelector(".addBtn3");

const SettingsBtn = document.querySelector(".updateSettings");

var smsCost=0;
var callCost=0;
var warningLevel=0;
var criticalLevel=0;

var sms3 = 0;
var call3 =0;
var totalcost3 = 0;

SettingsBtn.addEventListener('click', function(){
    smsCost=parseFloat(smsCostSetting.value);
    callCost=parseFloat(callCostSetting.value);
    warningLevel=parseFloat(warningLevelSetting.value);
    criticalLevel=parseFloat(criticalLevelSetting.value);
});

addBtn2.addEventListener('click', function(){

    var itemChecked=document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if(itemChecked){
    var checkedItem = itemChecked.value;
    }    

    if (checkedItem === "call"){
        call3 += callCost;
        totalcost3 += callCost;
    }
    if (checkedItem === "sms"){
        sms3 += smsCost;
        totalcost3 += smsCost;
    }

    callTotal3.innerHTML=call3.toFixed(2);
    smsTotal3.innerHTML=sms3.toFixed(2);
    total3.innerHTML = totalcost3.toFixed(2);
    
    if (totalcost3>=criticalLevel) {
        total3.classList.add("danger");
    } else if(totalcost3>=warningLevel){
        total3.classList.add("warning");
    }
});
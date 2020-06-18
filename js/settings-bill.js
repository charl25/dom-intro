const smsTotal3 = document.querySelector(".smsTotalSettings");
const callTotal3 = document.querySelector(".callTotalSettings");
const total3 = document.querySelector(".totalSettings");

const smsCostSetting = document.querySelector(".smsCostSetting");
const callCostSetting = document.querySelector(".callCostSetting");
const warningLevelSetting = document.querySelector(".warningLevelSetting");
const criticalLevelSetting = document.querySelector(".criticalLevelSetting");

const addBtn2 = document.querySelector(".addBtn3");

const SettingsBtn = document.querySelector(".updateSettings");

const settingsBill= SettingsBill();

SettingsBtn.addEventListener('click', function(e){
    total3.classList.remove("warning","danger");

    var callCost = parseFloat(callCostSetting.value);
    var smsCost = parseFloat(smsCostSetting.value);
    var warningLevel = parseFloat(warningLevelSetting.value);
    var criticalLevel = parseFloat(criticalLevelSetting.value);

    settingsBill.setCallCost(callCost);
    settingsBill.setSmsCost(smsCost);
    settingsBill.setWarningLevel(warningLevel);
    settingsBill.setCriticalLevel(criticalLevel);
    
    total3.classList.add(settingsBill.levelState());
});

addBtn2.addEventListener('click', function(e){

     var itemChecked=document.querySelector("input[name='billItemTypeWithSettings']:checked");
     if(itemChecked){
     var checkedItem = itemChecked.value;}    
    
     settingsBill.calc(checkedItem);

     var call3=settingsBill.getCallTotal();
     var sms3=settingsBill.getSmsTotal();
     var totals3 = settingsBill.getTotalCost();

    callTotal3.innerHTML=call3.toFixed(2);
    smsTotal3.innerHTML=sms3.toFixed(2);
    total3.innerHTML = totals3.toFixed(2);
    total3.classList.add(settingsBill.levelState());
});
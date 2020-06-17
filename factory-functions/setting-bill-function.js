function SettingsBill(){

    var smsCost=0;
    var callCost=0;
    var warningLevel=0;
    var criticalLevel=0;

    var sms = 0;
    var call =0;

    function setCallCost(val){
        callCost= val;
    }
    function getCallCost(){
        return callCost;
    }
    function setSmsCost(val){
        smsCost=val;
    }
    function getSmsCost(){
        return smsCost;
    }
    function setWarningLevel(val){
        warningLevel= val;
    }
    function getWarningLevel(){
        return warningLevel;
    }
    function setCriticalLevel(val){
        criticalLevel=val;
    }
    function getCriticalLevel(){
        return criticalLevel;
    }

    function calc(x){
        if (!redZone()) {   
            if (x === "call"){
                call+= callCost;}
            if (x === "sms"){
                sms+=smsCost;}
        }
    }
    function getCallTotal(){
        return call;
    }
    function getSmsTotal(){
        return sms;
    }
    function getTotalCost(){
        return call + sms;
    }

    function redZone(){
        return getTotalCost()>=getCriticalLevel()
    }

    function levelState(){
        if (redZone()) {
            return "danger";
        }
        else if(getTotalCost()>=getWarningLevel()){
                return "warning";
            }
    }

    return{
        setCallCost,
        setSmsCost,
        setWarningLevel,
        setCriticalLevel,

        getCallCost,
        getSmsCost,
        getWarningLevel,
        getCriticalLevel,

        calc,
        getCallTotal,
        getSmsTotal,
        getTotalCost,
        levelState
    }
}
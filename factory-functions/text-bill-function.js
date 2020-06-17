function TextBill(){
    const callPrice = 2.75;
    const smsCost = 0.75;
    const warningLevel=30;
    const criticalLevel=50;

    let smsTot =0;
    let callTot=0;
    let total=0;

    function calc(x){
        if (x === "call"){
            callTot += callPrice;
            total += callPrice;
        }
        if (x === "sms"){
            smsTot += smsCost;
            total += smsCost;
        }
    }

    function theTotal(){
        return total;
    }
    function getSmsTotal(){
        return smsTot;
    }
    function getCallTotal(){
        return callTot;
    }

    function levelState(){
        if (total>=criticalLevel) {
            return "danger";
        }
        else if(total>=warningLevel){
                return "warning";
            }
    }

    return{
        calc,
        theTotal,
        getCallTotal,
        getSmsTotal,
        levelState
    }
}
function RadioBill(){
    const callPrice = 2.75;
    const smsCost = 0.75;
    const warningLevel=30;
    const criticalLevel=50;

    let smsTotalTwo=0;
    let callTotalTwo=0;
    let totalTwo=0;

    function calc(x){
        if (x === "call"){
            callTotalTwo+= callPrice;
            totalTwo += callPrice;}
        else if (x === "sms"){
            smsTotalTwo+=smsCost;
            totalTwo += smsCost;}
    }
    function smsTot(){
        return smsTotalTwo;}
    function callTot(){
        return callTotalTwo;}
    function total(){
        return totalTwo;}
    function levelState(){
        if (totalTwo>=criticalLevel) {
            return "danger";}
        else if(totalTwo>=warningLevel){
                return "warning";}}
    return{
        calc,
        total,
        smsTot,
        callTot,
        levelState}
}

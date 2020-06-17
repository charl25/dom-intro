function CalculateBill(){
    const callPrice = 2.75;
    const smsCost = 0.75;
    const warningLevel=20;
    const criticalLevel=30;

    let theTotal=0;

    function calc(x){
        for (var i=0;i<x.length;i++){
            var billItem = x[i].trim();
            if (billItem === "call"){
                theTotal += callPrice;}
            else if (billItem === "sms"){
                theTotal += smsCost;}}
    }
    function total(){
        return theTotal;}
        
    function levelState(){
        if (theTotal>=criticalLevel) {
            return "danger";}
        else if(theTotal>=warningLevel){
                return "warning";}}
    return{
        calc,
        total,
        levelState}
}

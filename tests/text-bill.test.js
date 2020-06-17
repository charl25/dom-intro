describe("Text bill Function", function(){
    it("should be able to make a call and get the call total to equal R2.75", function(){
        var textBill = TextBill();
        textBill.calc("call");
        assert.equal(2.75,textBill.getCallTotal());
    });

    it("should be able to make a sms and get the sms total to equal R0.75", function(){
        var textBill2 = TextBill();
        textBill2.calc("sms");
        assert.equal(0.75,textBill2.getSmsTotal());
    })

    it("should make a call and sms, get the total to equal R3.50", function(){
        var textBill3 = TextBill();
        textBill3.calc("call");
        textBill3.calc("sms");
        assert.equal(3.50, textBill3.theTotal());
    });
});
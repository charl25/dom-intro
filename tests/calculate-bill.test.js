describe("Calculate bill Function", function(){
    it("should be able to make a call", function(){
        var calcBill = CalculateBill();
        calcBill.calc(["call"])
        assert.equal(2.75, calcBill.total());
    });

    it("should be able to make a sms", function(){
        var calcBill = CalculateBill();
        calcBill.calc(["sms"])
        assert.equal(0.75, calcBill.total());
    });

    it("should be able to make a call and sms", function(){
        var calcBill = CalculateBill();
        calcBill.calc(["call", "sms"])
        assert.equal(3.50, calcBill.total());
    });
});
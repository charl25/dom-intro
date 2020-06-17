describe("Radio bill Function", function(){
    it("should be able to make a call and get the call total to equal R2.75",function(){
        var radioBill = RadioBill();
        radioBill.calc("call");
        assert.equal(2.75, radioBill.callTot());
    });

    it("should be able to make an sms and get the sms total to equal R0.75", function(){
        var radioBill2 = RadioBill();
        radioBill2.calc("sms");
        assert.equal(0.75, radioBill2.smsTot());
    });

    it("should make a call and sms, get the total to equal R3.50", function(){
        var radioBill3 = RadioBill();
        radioBill3.calc("call");
        radioBill3.calc("sms");
        assert.equal(3.50, radioBill3.total());
    });
});
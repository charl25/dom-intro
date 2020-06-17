describe("billWithSettingsFunction", function () {
    it("should update call cost to R2.50 when call cost is set and update settings button is clicked", function () {
        var billWithSettings2 = SettingsBill();
        billWithSettings2.setCallCost(2.50);
        assert.equal(2.50, billWithSettings2.getCallCost())

    });

    it("should update sms cost to R0.85 when sms cost is set and update settings button is clicked", function () {
        var billWithSettings4 = SettingsBill();
        billWithSettings4.setSmsCost(0.85);
        assert.equal(0.85, billWithSettings4.getSmsCost())

    });
    
    it("should update sms total to R4.50 , call total to R5.00 and total cost to R9.50 when 3 sms' at R1.50 each and 2 calls at R2.50 each are made", function () {
        var billWithSettings8 = SettingsBill();
        billWithSettings8.setSmsCost(1.50);
        billWithSettings8.setCallCost(2.50);
        billWithSettings8.calc("sms");
        billWithSettings8.calc("sms");
        billWithSettings8.calc("sms");
        billWithSettings8.calc("call");
        billWithSettings8.calc("call");
        assert.equal(4.50, billWithSettings8.getSmsTotal())
        assert.equal(5.00, billWithSettings8.getCallTotal())
        assert.equal(9.50, billWithSettings8.getTotalCost())
    });
    it("should be able to set warning level to R25 when warning level is set and update settings button is clicked ", function () {
        var billWithSettings9 = SettingsBill();
        billWithSettings9.setWarningLevel(25),
            assert.equal(25, billWithSettings9.getWarningLevel())
    });
    it("should be able to set critical level to R35 when critical level is set and update settings button is clicked ", function () {
        var billWithSettings10 = SettingsBill();
        billWithSettings10.setCriticalLevel(35),
            assert.equal(35, billWithSettings10.getCriticalLevel())
    });

    it("should change class color to orange when warning level of R8 is reached for 3 calls at R4 each", function () {
        var billWithSettings11 = SettingsBill();
        billWithSettings11.setWarningLevel(8);
        billWithSettings11.setCriticalLevel(20)
        billWithSettings11.setCallCost(4.00);
        billWithSettings11.calc("call");
        billWithSettings11.calc("call");
        billWithSettings11.calc("call");
        assert.equal("warning", billWithSettings11.levelState())
    });

    it("should change class color to red when critical level of R5 is reached for 3 calls at R3 each", function () {

        var billWithSettings12 = SettingsBill();
        billWithSettings12.setCriticalLevel(5);
        billWithSettings12.setCallCost(3.00);
        billWithSettings12.calc("call");
        billWithSettings12.calc("call");
        billWithSettings12.calc("call");
        assert.equal("critical", billWithSettings12.levelState())
    });

    it("should prevent any new costs from being added when total cost exceeds critical level of R10", function () {
        var billWithSettings13 = SettingsBill();
        billWithSettings13.setCriticalLevel(10);
        billWithSettings13.setCallCost(4.00);
        billWithSettings13.calc("call");
        billWithSettings13.calc("call");
        billWithSettings13.calc("call");
        assert.equal("critical", billWithSettings13.levelState())

    });


});
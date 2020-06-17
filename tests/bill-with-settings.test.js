describe("billWithSettingsFunction", function () {
    it("should update call cost to R2.50 when call cost is set and update settings button is clicked", function () {
        var billWithSettings = SettingsBill();
        billWithSettings.setCallCost(2.50);
        assert.equal(2.50, billWithSettings.getCallCost())

    });

    it("should update sms cost to R0.85 when sms cost is set and update settings button is clicked", function () {
        var billWithSettings2 = SettingsBill();
        billWithSettings2.setSmsCost(0.85);
        assert.equal(0.85, billWithSettings2.getSmsCost())

    });
    
    it("should update sms total to R4.50 , call total to R5.00 and total cost to R9.50 when 3 sms' at R1.50 each and 2 calls at R2.50 each are made", function () {
        var billWithSettings3 = SettingsBill();
        billWithSettings3.setCriticalLevel(20)
        billWithSettings3.setWarningLevel(10)

        billWithSettings3.setSmsCost(1.50);
        billWithSettings3.setCallCost(2.50);
        billWithSettings3.calc("sms");
        billWithSettings3.calc("sms");
        billWithSettings3.calc("sms");
        billWithSettings3.calc("call");
        billWithSettings3.calc("call");
        assert.equal(4.50, billWithSettings3.getSmsTotal())
        assert.equal(5.00, billWithSettings3.getCallTotal())
        assert.equal(9.50, billWithSettings3.getTotalCost())
    });
    it("should be able to set warning level to R25 when warning level is set and update settings button is clicked ", function () {
        var billWithSettings4 = SettingsBill();
        billWithSettings4.setWarningLevel(25),
            assert.equal(25, billWithSettings4.getWarningLevel())
    });
    it("should be able to set critical level to R35 when critical level is set and update settings button is clicked ", function () {
        var billWithSettings5 = SettingsBill();
        billWithSettings5.setCriticalLevel(35),
            assert.equal(35, billWithSettings5.getCriticalLevel())
    });

    it("should change class color to orange when warning level of R8 is reached for 3 calls at R4 each", function () {
        var billWithSettings6 = SettingsBill();
        billWithSettings6.setWarningLevel(8);
        billWithSettings6.setCriticalLevel(20);
        billWithSettings6.setCallCost(4.00);
        billWithSettings6.calc("call");
        billWithSettings6.calc("call");
        billWithSettings6.calc("call");
        assert.equal('warning', billWithSettings6.levelState())
    });

    it("should change class color to red when critical level of R5 is reached for 3 calls at R3 each", function () {

        var billWithSettings7 = SettingsBill();
        
        billWithSettings7.setCriticalLevel(5);
        billWithSettings7.setCallCost(3.00);
        billWithSettings7.calc("call");
        billWithSettings7.calc("call");
        billWithSettings7.calc("call");
        assert.equal('danger', billWithSettings7.levelState())
    });

    it("should prevent any new costs from being added when total cost exceeds critical level of R10", function () {
        var billWithSettings8 = SettingsBill();
        billWithSettings8.setCriticalLevel(10);
        billWithSettings8.setCallCost(4.00);
        billWithSettings8.calc("call");
        billWithSettings8.calc("call");
        billWithSettings8.calc("call");
        assert.equal("danger", billWithSettings8.levelState())

    });


});
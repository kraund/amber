describe("Exercise 1", function () {
    it("should have the right title", async function () {
        await browser.url("https://antycaptcha.amberteam.pl/");
        const exercises = await browser.$$("[class='button u-full-width ']");
        await exercises[1].click();
        await browser.pause(1000);
        const elements = await browser.$$("<code />");
        const textToProvide = await elements[0].getText();
        const textField = await driver.$("[id='t14']")
        await textField.clearValue()
        await textField.setValue(textToProvide)
        await nxutils.waitUntilObjectIsVisibleAndClick("[id='btnButton1']");


        await nxutils.waitUntilObjectIsVisibleAndClick("[id='solution']");
        await browser.pause(1000);
        const answer = await browser.$("[class='wrap']");
        expect(await answer.getText()).to.equal("OK. Good answer");
    });
});
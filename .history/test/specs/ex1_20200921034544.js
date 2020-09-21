describe("Exercise 1", function() {
  it("should have the right title", async function() {
    await browser.url("https://antycaptcha.amberteam.pl/");
    const exercises = await browser.$$("[class='button u-full-width ']");
    await exercises[0].click();
    await nxutils.waitUntilObjectIsVisibleAndClick("[id='btnButton2']");
    await nxutils.waitUntilObjectIsVisibleAndClick("[id='btnButton1']");
    await nxutils.waitUntilObjectIsVisibleAndClick("[id='btnButton1']");
    await browser.pause(2000);
    const output = await browser.$("[class='wrap']");
    expect(await output.getText()).to.equal("b2b1b1");
    await nxutils.waitUntilObjectIsVisibleAndClick("[id='solution']");
    const outputAfter = await nxutils.getObjectMatchingSelector(
      "[class='wrap']"
    );
    expect(await outputAfter.getText()).to.equal("OK. Good answer");
  });
});

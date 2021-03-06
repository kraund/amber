describe("Exercise 1", function() {
  it("should have the right title", async function() {
    await browser.url("https://antycaptcha.amberteam.pl/");
    const exercises = await browser.$$("[class='button u-full-width ']");
    await exercises[0].click();
    await browser.pause(1000);
    const elements = await browser.$$("<code />");
    const nums = [elements[0], elements[1], elements[2]];
    const numsText = [];
    var buttonToClick = null;

    await nxutils.asyncForEach(nums, async obj => {
      buttonToClick = await obj.getText();
      await numsText.push(buttonToClick);
    });
    console.log(buttonToClick);
    await nxutils.asyncForEach(numsText, async obj => {
      if (obj === "B2") {
        await nxutils.waitUntilObjectIsVisibleAndClick("[id='btnButton2']");
      } else {
        await nxutils.waitUntilObjectIsVisibleAndClick("[id='btnButton1']");
      }
    });
    await browser.pause(1000);

    const output = elements[4];
    const buttonsProvided = numsText
      .join("")
      .replace(/ /g, "")
      .toLowerCase();
    expect(await output.getText()).to.equal(buttonsProvided);
  });
});

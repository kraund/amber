describe("Exercise 1", function () {
    it("should have the right title", async function () {
        await browser.url("https://antycaptcha.amberteam.pl/");
        const exercises = await browser.$$("[class='button u-full-width ']");
        await exercises[3].click();
        await browser.pause(1000);
        const elements = await browser.$$("<code />");

        var arrValues = []

        const expectedOutput = await elements[4].getText()
        await nxutils.asyncForEach(arrValues, async obj => {
            const value = await obj.getText();
            arrValues.push(value)
        });

        const ourValues = arrValues.slice(0, 5)


        var arrAllButtonsText = []
        const arrAllButtons = await browser.$$("[class='row u-full-width']")
        await nxutils.asyncForEach(arrAllButtons, async obj => {
            const value2 = await obj.getText();
            arrAllButtonsText.push(value2)
        });
        const name_group1 = await arrAllButtonsText.slice(1, 9)
        const name_group2 = await arrAllButtonsText.slice(10, 19)
        const name_group3 = await arrAllButtonsText.slice(20, 29)
        const name_group4 = await arrAllButtonsText.slice(30, 39)

        var radioValues = []
        const radios = await browser.$$("[type='radio']")
        await nxutils.asyncForEach(radios, async obj => {
            const value3 = await obj.getText();
            radioValues.push(value3)
        });

        const radio_group1 = await arrAllButtonsText.slice(0, 9)
        const radio_group2 = await arrAllButtonsText.slice(9, 18)
        const radio_group3 = await arrAllButtonsText.slice(18, 27)
        const radio_group4 = await arrAllButtonsText.slice(27, 36)







        // await nxutils.asyncForEach(arrAllButtons, async obj => {
        //     const value2 = await obj.getText();
        //     arrAllButtonsText.push(value2)
        // });
        // const size = 4;
        // const subarray = []

        // for (let i = 0; i < Math.ceil(arrAllButtonsText.length / size); i++) {
        //     subarray[i] = arrAllButtonsText.slice((i * size), (i * size) + size);
        // }
        // console.log(subarray);


        //////////////////////////////


        // const options = await browser.$$("<option />")
        // var optionsText = {}
        // await nxutils.asyncForEach(options, async obj => {
        //     const buttonToClick = await obj.getText();
        //     const value = await obj.getAttribute("value");
        //     optionsText[value] = buttonToClick

        // });

        // let keys = Object.keys(optionsText)
        // let values = Object.values(optionsText)
        // const ourValue = values.indexOf(toChoose)
        // let ourKey = keys[ourValue]
        // await nxutils.waitUntilObjectIsVisibleAndClick("[id='s13']")
        // await nxutils.waitUntilObjectIsVisibleAndClick(`[value='${ourKey}']`)
        // const output = await browser.$$("<code />");
        // const outputText = await output[2].getText()
        // expect(outputText).to.equal(expectedOutput)


        // // await textField.clearValue()
        // // await textField.setValue(textToProvide)
        // // await nxutils.waitUntilObjectIsVisibleAndClick("[id='btnButton1']");



        // await nxutils.waitUntilObjectIsVisibleAndClick("[id='solution']");
        // await browser.pause(1000);
        // const answer = await browser.$("[class='wrap']");
        // expect(await answer.getText()).to.equal("OK. Good answer");








        //   const nums = [elements[0], elements[1], elements[2]];
        //   const numsText = [];
        //   var buttonToClick = null;

        //   await nxutils.asyncForEach(nums, async obj => {
        //     buttonToClick = await obj.getText();
        //     await numsText.push(buttonToClick);
        //   });
        //   await nxutils.asyncForEach(numsText, async obj => {
        //     if (obj === "B2") {
        //       await nxutils.waitUntilObjectIsVisibleAndClick("[id='btnButton2']");
        //     } else {
        //       await nxutils.waitUntilObjectIsVisibleAndClick("[id='btnButton1']");
        //     }
        //   });
        //   await browser.pause(1000);

        //   const output = elements[4];
        //   const buttonsProvided = numsText
        //     .join("")
        //     .replace(/ /g, "")
        //     .toLowerCase();
        //   expect(await output.getText()).to.equal(buttonsProvided);
    });
});
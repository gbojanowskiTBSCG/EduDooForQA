import { Selector } from 'testcafe';

fixture `Bats component Fixture`
    .page `https://dibh-dev-dxp-kags-preview.s3.amazonaws.com/bats.html`;
    
test(`Bats component Test`, async t => {
    await t
            .click('.container > .add-serial-control > .d-none')
            .typeText('#__BVID__53', 'ALJ812121')
            .pressKey('enter')

            .expect(Selector("body > div.mb-5 > div > div > main > div.row.py-3.d-flex.align-items-center.mb-4 > h1").innerText).contains("02-16")
            .expect(Selector(":nth-child(2) > .text-center > h2").innerText).contains("Hydraulic Implement Filter Not Connected")

            .expect(Selector(":nth-child(2) > .text-center > p").innerText).contains("A Code 02-16 occurs when the Bobcat Controller")
            .expect(Selector(":nth-child(2) > .box").innerText).contains("Loader Hydraulic Implement")
            .expect(Selector(".list-checked").innerText).contains("corrosion")
            .expect(Selector(":nth-child(4) > .box").innerText).contains("Engine not running")
            .expect(Selector(":nth-child(5) > .box > :nth-child(2)").innerText).contains("Self resetting")
            .expect(Selector(":nth-child(3) > .text-center").innerText).contains("Key switch")

            .expect(Selector("tbody > :nth-child(1) > [aria-colindex=\"2\"]").innerText).contains("Jumper signal wire 3430")
            .expect(Selector("tbody > :nth-child(1) > .label-yes").innerText).contains("Go to Step 2.")
            .expect(Selector("tbody > :nth-child(1) > .label-no").innerText).contains("Repair or replace Mainframe harness.")

            .expect(Selector(":nth-child(5) > .box > :nth-child(3)").innerText).contains("Instructions are necessary")
            .expect(Selector(".box > :nth-child(4) > div").innerText).contains("Never work on a machine")
            .expect(Selector(".box > :nth-child(5) > div").innerText).contains("Put jackstands under the")
});
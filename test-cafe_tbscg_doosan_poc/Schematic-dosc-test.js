import { Selector } from 'testcafe';

fixture `Download schematics dosc through Schematics Widget`
    .page `https://dibh-dev-dxp-kags-preview.s3.amazonaws.com/schematics.html`;
    
test(`Download schematics dosc through Schematics Widget`, async t => {
        await t
        .click('.container > .add-serial-control > .d-none')
                .typeText('#__BVID__45', 'ALJ812121')
                .pressKey('enter')
    //await t.expect(fs.existsSync(filePath)).ok();
});
import { Selector } from 'testcafe';

fixture `Opening google.pl page`
    .page `http://google.pl`;

test('Searching for Doosan keyword', async t => {
    await t
        .typeText('input[name="q"]', 'Doosan')
        .click('ul[role="listbox"] > li:nth-child(1)');        
    await t.expect(Selector("#resultStats").exists).ok()
});


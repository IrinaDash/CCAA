const sel = require('../../data/selectors.json')
const exp = require('../../data/expected.json')

describe('CHECKING THE NAME FUNCTIONALITY', function () {

    describe('HAPPY PATH', function () {

        it('TC-021 Create button is clickable after 1-4 are filled in', function () {
            browser.url('');
            const inputName = $(sel.name).addValue("LadyBug");
            const inputGender = $$(sel.gender)[1].click();
            const inputAge = $(sel.age).addValue(1);
            const TypeOfStory = $(sel.storyClick).click();
            const inputStory = $$(sel.storyType)[6].click();
            const create = $(sel.create).isEnabled();
            browser.pause(5000);
            expect(create).toEqual(true)

        });
    });
});

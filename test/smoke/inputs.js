const sel = require('../../data/selectors.json')
const exp = require('../../data/expected.json')

describe('INPUTS', function () { //define suite title by passing a string

    describe('inputs are displayed ', function () { //define sub-suite title by passing a string

        it('TC-014 Name ', function () {
            browser.url('');
            const name = $(sel.name).isDisplayed();
            expect(name).toEqual(true);
        });

        it('TC-015 Gender he', function () {
            const gender = $$(sel.gender)[0].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-016 Gender she', function () {
            const gender = $$(sel.gender)[1].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-017 Gender it', function () {
            const gender = $$(sel.gender)[2].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-018 Age', function () {
            const age = $(sel.age).isDisplayed();
            expect(age).toEqual(true);
        });

         it('TC-019 Story', function () {
            const story = $(sel.story).isDisplayed();
            expect(story).toEqual(true);
        });

        it('TC-020 submit', function () {
            const submit = $(sel.submitButton).isDisplayed();
            expect(submit).toEqual(true);
        });
    });

    describe('Placeholder are correct', function (){
        // it('TC-014 Name ', function () {
        //     browser.url('');
        //     const name = $(sel.name).isDisplayed();
        //     expect(name).toEqual(true);
        // });
        //
        // it('TC-015 Gender he', function () {
        //     const gender = $$(sel.gender)[0].isDisplayed();
        //     expect(gender).toEqual(true);
        // });
        //
        // it('TC-016 Gender she', function () {
        //     const gender = $$(sel.gender)[1].isDisplayed();
        //     expect(gender).toEqual(true);
        // });
        //
        // it('TC-017 Gender it', function () {
        //     const gender = $$(sel.gender)[2].isDisplayed();
        //     expect(gender).toEqual(true);
        // });
        //
        // it('TC-018 Age', function () {
        //     const age = $(sel.age).isDisplayed();
        //     expect(age).toEqual(true);
        // });
        //
        // it('TC-019 Story', function () {
        //     const story = $(sel.story).isDisplayed();
        //     expect(story).toEqual(true);
        // });
        //
        // it('TC-020 submit', function () {
        //     const submit = $(sel.submitButton).isDisplayed();
        //     expect(submit).toEqual(true);
        // });


    })
});


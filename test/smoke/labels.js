const sel = require('../../data/selectors.json')
const exp = require('../../data/expected.json')

describe('My Little Hero', function () { //define suite title by passing a string

    describe('Getting to the page', function () { //define sub-suite title by passing a string

        it('TC-001 Title is correct ', function () { //define test title by passing a string
            browser.url('https://qa-apps.netlify.app/app_my_hero'); //open baseUrl
            let title = browser.getTitle(); //get page title and assign it to the "title" variable
            browser.pause(2000); //just pause to visually see that something is happening on the page
            expect(title).toEqual('MLH trial'); //compare {title} (actual) and "MLH trial" (expected)
        });

    });

    describe('Labels exist', function () {

        it('TC-002 Label for name', function () {
            const label = $$(sel.label)[0].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-003 Label for gender', function () {
            const label = $$(sel.label)[1].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-004 Label for age', function () {
            const label = $$(sel.label)[2].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-005 Label for story', function () {
            const label = $$(sel.label)[3].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-006 Label for 5. Upload an image (optional)', function () {
            const label = $$(sel.IMAGE1)[4].isDisplayed();
            expect(label).toEqual(true);
        });
    });

    describe('Labels are correct', function () {

        it('TC-007 Label for name = 1. What is your Hero\'s name?' , function () {
            const text = $$(sel.label)[0].getAttribute('title');
            expect(text).toEqual(exp.labelName);
        });

        it('TC-008 Label for gender = Label: 2. Please choose a gender.', function () {
            const text = $$(sel.label)[1].getAttribute('title');
            expect(text).toEqual(exp.labelGender);
        });

        it('TC-009 Label for age = 3. How old is your hero?', function () {
            const text = $$(sel.label)[2].getAttribute('title');
            expect(text).toEqual(exp.labelAge);
        });

        it('TC-0010 Label for story', function () {
            const text = $$(sel.label)[3].getAttribute('title');
            expect(text).toEqual(exp.labelStory);
        });
        xit('TC-011 Label for 5. Upload an image (optional)', function () {
            const text = $$(sel.IMAGE1)[4].getText();
            expect(text).toEqual(exp.labelImage);
        });
    });

    // describe('Elements ......', function () {
    //     it('Verify that Name field is displayed', function () {
    //         //const nameField = $('#name').isDisplayed();
    //         const nameField = $("//input[@id='name']").isDisplayed();
    //         expect(nameField).toEqual(true);
    //     });
    //
    //     it('Verify that Name field is clickable', function () {
    //         //const nameField = $('#name').isDisplayed();
    //         //const nameField = "//input[@id='name']";
    //         const nameField = $('#name');
    //         const result = $(nameField).isClickable();
    //         expect(result).toEqual(true);
    //     });
    //
    //     it('Verify that Name field recieve value', function () {
    //         const nameField = $('#name');
    //         nameField.setValue('HeroName')
    //         expect(nameField).toHaveValue('HeroName');
    //         nameField.clearValue()
    //     });
    //
    //     it('should ', function () {
    //         expect($(sel.namePlace).getAttribute("placeholder")).toEqual(exp.namePlaceholder);
    //
    //     });

        //     // it('Verify that radioButton is clickable', function () {
    //     //     const radioButton = $("//input[@class='ant-radio-input']")
    //     //     radioButton.isClickable()
    //     //     expect(radioButton).toEqual(true);
    //     //     });
    //
    //     it('TC-006 Label for 5. Upload an image (optional)', function () {
    //         expect($(sel.image).getAttribute('title')).toEqual(exp.labelImage);
    //
    //     });
    //     it('TC-006 Label for 5. Upload an image (optional)', function () {
    //         expect($$(sel.IMAGE1)[4].getText()).toEqual(exp.labelImage);
    //
    //     });
    //
    // });
    // describe('Elements exist', function ()  {
    //     it('should ', function () {
    //
    //     });
    //
    // })
});

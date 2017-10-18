
var  AngularWebsiteTest = require('../PageObjects/PageObjectAngular');
var data = require('../data/data.json');
require('jasmine2-custom-message');

describe('Interaction with angularjs.org', function () {

    var angularTest = new AngularWebsiteTest();

    beforeAll(function () {

        browser.get('https://angularjs.org/');

    });

    it('Fill textfield Name and check name is available', function () {

        angularTest.NameField(data.Name);

        since('Name is not diplayed').
           expect(angularTest.CheckName()).
             toEqual('Hello WhatIsLove?!');

    });

    it('Click on first checkbox and check text  is not strikethrough', function () {

        angularTest.ClickBox();

        since('Text strikethrough').
           expect(angularTest.CheckCheckBox()).
              toContain('done-false');

    });


    it('Fill checkbox field and check it is visible', function () {

    angularTest.BoxName(data.CheckBoxName);

    since('CheckBoxLabel is not visible').
       expect(angularTest.CheckBoxLabel()).
          toContain('ng-not-empty');

});

});
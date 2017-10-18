var AngularWebsiteTest = function () {
    var filldName = element(by.model('yourName')),
        label = element(by.cssContainingText('.ng-binding', 'Hello WhatIsLove?!')),
        clickCheckBox = element(by.cssContainingText('.done-true', 'learn AngularJS')),
        checkBoxLabel = element(by.cssContainingText('.done-false', 'learn AngularJS')),
        fillNewCheckBox = element(by.model('todoList.todoText'));

    this.NameField = function (Name) {
        filldName.sendKeys(Name);
    };

    this.CheckName = function () {
        return label.getText();
    };

    this.ClickBox = function () {
        clickCheckBox.click();
    };

    this.CheckCheckBox = function () {
        return checkBoxLabel.getAttribute('class');
    };

    this.BoxName = function (CheckBoxName) {
        fillNewCheckBox.sendKeys(CheckBoxName);
    };

    this.CheckBoxLabel = function () {
        return fillNewCheckBox.getAttribute('class');
    };

};
module.exports = AngularWebsiteTest;
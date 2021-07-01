/// <reference types="cypress" />
import { ButtonPage } from "../../../support/web/pages/ButtonPage.js";

const buttonPage = new ButtonPage('/buttons');

it('Double click button test', () => {
    let expectedDoublebuttonText = 'You have done a double click';

    buttonPage.openPage();
    buttonPage.isPageOpened();
    buttonPage.clickDoubleClickButton();
    buttonPage.getDoubleClickMessage()
        .should('be.visible', true)
        .should('have.text', expectedDoublebuttonText);
})

it('Right click button test', () => {
    let expectedRightClickbuttonMessage = 'You have done a right click';

    buttonPage.openPage();
    buttonPage.isPageOpened();
    buttonPage.clickRightClickButton();

    buttonPage.getRightClickButtonMessage()
        .should('be.visible', true)
        .should('have.text', expectedRightClickbuttonMessage);
})

it('Regular click button test', () => {
    let expectedClickButtonMessage = 'You have done a dynamic click';

    buttonPage.openPage();
    buttonPage.isPageOpened();
    buttonPage.clickButton();

    buttonPage.getClickMeButtonMessage()
        .should('be.visible', true)
        .should('have.text', expectedClickButtonMessage);
})
/// <reference types="cypress" />
import { AbstartPage } from "./AbstractPage";

export class ButtonPage extends AbstartPage {

    doubleClickButton = '#doubleClickBtn';
    resultDoubleClick = '#doubleClickMessage';

    rightClickButton = '#rightClickBtn';
    resultTextRightClickButton = '#rightClickMessage';

    clickMeButton = 'Click Me';
    resultClickMeButton = 'You have done a dynamic click';

    constructor(urlPage) {
        super(urlPage);
    }

    clickButton() {
        cy.contains(this.clickMeButton).get('button').last().click();
    }

    clickRightClickButton() {
        cy.get(this.rightClickButton).rightclick();
    }

    clickDoubleClickButton() {
        cy.get(this.doubleClickButton).dblclick();
    }

    getClickMeButtonMessage() {
        return cy.contains(this.resultClickMeButton);
    }

    getDoubleClickMessage() {
        return cy.get(this.resultDoubleClick);
    }

    getRightClickButtonMessage() {
        return cy.get(this.resultTextRightClickButton);
    }


}
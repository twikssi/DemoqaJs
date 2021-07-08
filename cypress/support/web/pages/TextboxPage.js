/// <reference types="cypress" />
import { AbstartPage } from "./AbstractPage";

export class TextBoxPage extends AbstartPage {

    fieldInputUserName = '#userName';

    fieldInputUserEmail = '#userEmail';

    textAreaInputUserCurrentAddress = '#currentAddress';

    textAreaInputUserPermanentAddress = '#permanentAddress';

    sendInformationButton = '#submit';

    resultName = '#name';

    resultEmail = '#email';

    resultCurrentAddress = '.border > #currentAddress';

    resultPermanentAddress = '.border > #permanentAddress';

    constructor() {
        super('/text-box');
    }

    getResultEmail() {
        return cy.get(this.resultEmail);
    }

    getResultCurrentAddress() {
        return cy.get(this.resultCurrentAddress);
    }

    getResultName() {
        return cy.get(this.resultName);
    }

    getResultPermanentAddress() {
        return cy.get(this.resultPermanentAddress);
    }

    inputUserName(name) {
        cy.get(this.fieldInputUserName).type(name);
    }

    inputUserEmail(email) {
        cy.get(this.fieldInputUserEmail).type(email);
    }

    inputCurrentAdress(currentAdress) {
        cy.get(this.textAreaInputUserCurrentAddress).type(currentAdress);
    }

    inputPermanentAdress(permanentAdress) {
        cy.get(this.textAreaInputUserPermanentAddress).type(permanentAdress);
    }

    clickSentInformatonButton() {
        cy.get(this.sendInformationButton).click();
    }

    getEmailField() {
        return cy.get(this.fieldInputUserEmail);
    }
}
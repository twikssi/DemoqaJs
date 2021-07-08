/// <reference types="cypress" />
import { TextBoxPage } from "../../../support/web/pages/TextboxPage";

const textBoxPage = new TextBoxPage();

beforeEach(() => {
    textBoxPage.openPage();
})

it('Sign in information test', () => {
    textBoxPage.isPageOpened();
    cy.fixture('/textboxPage/user.json').then((user) => {
        textBoxPage.inputUserName(user.name);
        textBoxPage.inputUserEmail(user.email);
        textBoxPage.inputCurrentAdress(user.currentAdress);
        textBoxPage.inputPermanentAdress(user.permanentAdress);
        textBoxPage.clickSentInformatonButton();

        textBoxPage.getResultName().should('contain.text', user.name);
        textBoxPage.getResultEmail().should('contain.text', user.email);
        textBoxPage.getResultCurrentAddress().should('contain.text', user.currentAdress);
        textBoxPage.getResultPermanentAddress().should('contain.text', user.permanentAdress);
    });
})

it('Wrong email test', () => {
    textBoxPage.isPageOpened();
    cy.fixture('/textboxPage/user.json').then((user) => {
        textBoxPage.inputUserEmail(user.wrongEmail);
        textBoxPage.clickSentInformatonButton();
        textBoxPage.getEmailField().should('have.class', 'field-error');
    })
})
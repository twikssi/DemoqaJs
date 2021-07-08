/// <reference types="cypress" />
import {AlertPage} from "../pages/AlertPage";

const alertPage = new AlertPage();

it('Alert tests', ()=>{

    cy.visit('https://demoqa.com/alerts');
    
    const stub = cy.stub()

    cy.on('window:alert', stub)

    cy.get('#alertButton')
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('You clicked a button')
      })

    cy.on('window:confirm', stub);

    alertPage.clickConfirmButton();
    cy.get('#confirmButton')
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('You clicked a button')
      })

    alertPage.clickPromtButton();

      

})

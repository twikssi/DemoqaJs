/// <reference types="cypress" />
import {AlertPage} from "../pages/AlertPage";

const alertPage = new AlertPage();

it('Alert tests', ()=>{

    cy.visit('https://demoqa.com/alerts');


   // alertPage.clickAlertButton();
    
    const stub = cy.stub()

    cy.on('window:alert', stub)
  
    cy.get('#alertButton')
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith('You clicked a button')
        // expect(stub.getCall(1)).to.be.calledWith('there')
        // expect(stub.getCall(2)).to.be.calledWith('friend')
      })

})

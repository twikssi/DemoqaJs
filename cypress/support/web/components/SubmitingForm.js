/// <reference types="cypress" />

export class SubmitingForm {

    submitingForm;

    constructor (subForm){
        this.submitingForm = subForm;
    }

    getNameAndLastName (){
       return cy.get(this.submitingForm)
        .get('tbody > :nth-child(1) > :nth-child(2)');
    }

    getEmail (){
        return cy.get(this.submitingForm)
        .get('tbody > :nth-child(2) > :nth-child(2)');
    }

    getGender (){
        return cy.get(this.submitingForm)
        .get('tbody > :nth-child(3) > :nth-child(2)');
    }

    getMobileNumber (){
        return cy.get(this.submitingForm)
        .get('tbody > :nth-child(4) > :nth-child(2)');
    }
    
    getDateOfBirth (){
        return cy.get(this.submitingForm)
        .get('tbody > :nth-child(5) > :nth-child(2)');
    }

    getSubject (){
        return cy.get(this.submitingForm)
        .get('tbody > :nth-child(6) > :nth-child(2)');
    }

    getHobbie (){
        return cy.get(this.submitingForm)
        .get('tbody > :nth-child(7) > :nth-child(2)');
    }

    getPicture (){
        return cy.get(this.submitingForm)
        .get('tbody > :nth-child(8) > :nth-child(2)');
    }

    getCurrentAddress (){
        return cy.get(this.submitingForm)
        .get('tbody > :nth-child(9) > :nth-child(2)');
    }

    getStateAndCity (){
        return cy.get(this.submitingForm)
        .get('tbody > :nth-child(10) > :nth-child(2)');
    }
}
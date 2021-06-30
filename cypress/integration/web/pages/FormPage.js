/// <reference types="cypress" />

import { AbstartPage } from "./AbstractPage";

export class FormPage extends AbstartPage{

    firstNameField = '#firstName';

    lastNameField = '#lastName';

    emailField = '#userEmail';

    genderLabels = '//div[@id="genterWrapper"]//label';

    mobileNumberField = '#userNumber';

    dateOfBirthField = '#dateOfBirthInput';

    subjectField = '.subjects-auto-complete__value-container';

    hobbieCheckboxes = '//input[@type="checkbox"]//following-sibling::label';

    pictureUploading = '#uploadPicture';

    currentAddressArea = '#currentAddress';

    stateInput = '#state';

    cityInput = '#city';

    buttonSubmit = '#submit';

    submitingForm = '.modal-content';

    constructor (){
        super('/automation-practice-form');
    }

    inputFirstName (name){
        cy.get(this.firstNameField).type(name);
    }

    inputLastName (lastName){
        cy.get(this.lastNameField).type(lastName);
    }

    inputEmail (email){
        cy.get(this.emailField).type(email);
    }

    inputGenders (gender){
        cy.xpath(this.genderLabels).contains(gender).click();
    }

    inputMobileNumber (mobileNumber){
        cy.get(this.mobileNumberField).type(mobileNumber);
    }

    inputDateOfBirth (date){
        cy.get(this.dateOfBirthField).type('{selectall}' + date + '{enter}');
    }

    inputSubject (subject){
        cy.get(this.subjectField).type(subject + '{enter}');
    }

    inputHobbie (hobbie){
        return cy.xpath(this.hobbieCheckboxes).contains(hobbie).click();
    }

    uploadFile (){
        cy.get(this.pictureUploading).attachFile('jsPhoto.png');
    }

    inputCurrentAddress (address){
        cy.get(this.currentAddressArea).type(address);
    }

    inputState (state){
        cy.get(this.stateInput).type(state + '{downarrow}{enter}');
    }

    inputCity (city){
        cy.get(this.cityInput).type(city + '{downarrow}{enter}')
    }

    clickSubmit (){
        cy.get(this.buttonSubmit).click();
    }

    getSubmitingForm (){
        return cy.get(this.submitingForm);
    }

    getColorFieldEmail (){
        return cy.get(this.emailField);
    }
 
    getColorName (){
         return cy.get(this.firstNameField);
    }
 
    getColorMobileNumberField (){
         return cy.get(this.mobileNumberField);
    }
}
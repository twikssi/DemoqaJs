/// <reference types="cypress-xpath" />
import { SubmitingForm } from "../components/SubmitingForm";
import { FormPage } from "../pages/FormPage";


const formPage = new FormPage();

it('Form page test', ()=>{
    let expectedName = 'TolyaJs';
    let expectedLastName = 'Guru';
    let expectedEmail = 'tolyastar@gmail.com';
    let expectedGender = 'Other';
    let expectedMobileNumber = '3423325323';
    let expectedDateOfBirth = '07 May,1996';
    let expectedSubject = 'Maths';
    let expectedHobbie = 'Music';
    let expectedPhoto = 'jsPhoto.png';
    let address = 'ul. tolyaka';
    let expectedState = 'NCR';
    let expectedCity = 'Delhi';

    formPage.openPage();
    formPage.isPageOpened();

    formPage.inputFirstName(expectedName);
    formPage.inputLastName(expectedLastName);
    formPage.inputEmail(expectedEmail);
    formPage.inputGenders(expectedGender);
    formPage.inputMobileNumber(expectedMobileNumber);
    formPage.inputDateOfBirth(expectedDateOfBirth);
    formPage.inputSubject(expectedSubject);
    formPage.inputHobbie(expectedHobbie);
    formPage.uploadFile();
    formPage.inputCurrentAddress(address);
    formPage.inputState(expectedState);
    formPage.inputCity(expectedCity);
    formPage.clickSubmit();

    const submitingForm = new SubmitingForm(formPage.getSubmitingForm());

    submitingForm.getNameAndLastName()
                    .should('have.text', expectedName + ' ' + expectedLastName);
    submitingForm.getEmail().should('have.text', expectedEmail);
    submitingForm.getGender().should('have.text', expectedGender);
    submitingForm.getMobileNumber().should('have.text', expectedMobileNumber);
    submitingForm.getDateOfBirth().should('have.text', expectedDateOfBirth);
    submitingForm.getSubject().should('have.text', expectedSubject);
    submitingForm.getHobbie().should('have.text', expectedHobbie);
    submitingForm.getPicture().should('have.text', expectedPhoto)
    submitingForm.getCurrentAddress().should('have.text', address);
    submitingForm.getStateAndCity()
                    .should('have.text', expectedState + ' ' + expectedCity);
})

it('Color fields  test', ()=>{
    let expectedColorEmail = 'rgb(40, 167, 69)';
    let expectedColorName = 'rgb(220, 53, 69)';
    let expectedColorMobileNumber = 'rgb(220, 53, 69)';
    formPage.openPage();
    formPage.isPageOpened();

    formPage.clickSubmit();
    formPage.getColorFieldEmail().should('have.css', 'border-color', expectedColorEmail);
    formPage.getColorName().should('have.css', 'border-color', expectedColorName);
    formPage.getColorMobileNumberField().should('have.css', 'border-color', expectedColorMobileNumber);
})
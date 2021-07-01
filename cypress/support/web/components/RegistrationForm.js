/// <reference types="cypress" />

export class RegistrationForm {

    registrationForm;

    firstNameField = '#firstName';

    lastNameField = '#lastName';

    emailField = '#userEmail';

    ageField = '#age';

    salaryField = '#salary';

    departmentField = '#department';

    submitButton = '#submit';

    constructor(registrationForm) {
        this.registrationForm = registrationForm;
    }

    inputFirstName(name) {
        cy.get(this.firstNameField).type(name);
    }

    inputLastName(lastName) {
        cy.get(this.lastNameField).type(lastName);
    }

    inputEmail(email) {
        cy.get(this.emailField).type(email);
    }

    inputAge(age) {
        cy.get(this.ageField).type(age);
    }

    inputSalary(salary) {
        cy.get(this.salaryField).type(salary);
    }

    inputDepartment(department) {
        cy.get(this.departmentField).type(department);
    }

    clickSubmitButton() {
        cy.get(this.submitButton).click();
    }
}
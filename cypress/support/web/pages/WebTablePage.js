/// <reference types="cypress-xpath" />
import { AbstartPage } from "./AbstractPage";

export class WebTablePage extends AbstartPage {

    addButton = '#addNewRecordButton';

    registrationForm = '#userForm';

    employee = 'div[role="rowgroup"]';

    constructor() {
        super('/webtables');
    }

    getRegistrationForm() {
        cy.get(this.registrationForm);
    }

    clickAddButton() {
        cy.get(this.addButton).click();
    }

    getEmployee(numberOfEmployee){
       return cy.get(this.employee).eq(numberOfEmployee);
    }

}
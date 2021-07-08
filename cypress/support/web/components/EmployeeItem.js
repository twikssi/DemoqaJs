///<reference types="cypress-xpath"/>

export class EmployeeItem {

    employeeItem;

    nameCell = 'div[role="gridcell"]';

    lastNameCell = 'div[role="gridcell"]';

    ageCell = 'div[role="gridcell"]';

    emailCell = 'div[role="gridcell"]';

    salaryCell = 'div[role="gridcell"]';

    departmentCell = 'div[role="gridcell"]';

    buttonEdit = 'span[id^="edit-record-"]';

    buttonDeleteEmployee = 'span[title="Delete"]';

    constructor(employeeItem) {
        this.employeeItem = employeeItem;
    }

    getNameCell(numberOfEmployee) {
        return cy.get('div[role="rowgroup"]').eq(numberOfEmployee).find(this.nameCell).eq(0);
    }

    getLastNameCell(numberOfEmployee) {
        return cy.get('div[role="rowgroup"]').eq(numberOfEmployee).find(this.lastNameCell).eq(1);
    }

    getAgeCell(numberOfEmployee) {
        return cy.get('div[role="rowgroup"]').eq(numberOfEmployee).find(this.ageCell).eq(2);
    }

    getEmailCell(numberOfEmployee) {
        return cy.get('div[role="rowgroup"]').eq(numberOfEmployee).find(this.emailCell).eq(3);
    }

    getSalaryCell(numberOfEmployee) {
        return cy.get('div[role="rowgroup"]').eq(numberOfEmployee).find(this.salaryCell).eq(4);
    }

    getDepartmentCell(numberOfEmployee) {
        return cy.get('div[role="rowgroup"]').eq(numberOfEmployee).find(this.departmentCell).eq(5);
    }

    clickButtonEdit(numberOfEmployee) {
        cy.get('div[role="rowgroup"]').eq(numberOfEmployee).find(this.buttonEdit).click();
    }

    clickButtonDeleteEmployee(numberOfEmployee) {
        cy.get('div[role="rowgroup"]').eq(numberOfEmployee).find(this.buttonDeleteEmployee).click();
    }
}

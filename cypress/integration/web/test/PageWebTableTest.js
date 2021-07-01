/// <reference types="cypress-xpath" />
import { WebTablePage } from "../../../support/web/pages/WebTablePage";
import { RegistrationForm } from "../../../support/web/components/RegistrationForm";
import { EmployeeItem } from "../../../support/web/components/EmployeeItem";

const webTablePage = new WebTablePage();

beforeEach(() => {
    webTablePage.openPage();
})

it('Add, Update, Delete user test', () => {
    webTablePage.isPageOpened();
    webTablePage.clickAddButton();

    const registrationForm = new RegistrationForm(webTablePage.getRegistrationForm());
    const employeeItem = new EmployeeItem();

    cy.fixture('/tablePage/employee.json').then((employee) => {
        registrationForm.inputFirstName(employee.name);
        registrationForm.inputLastName(employee.lastName);
        registrationForm.inputAge(employee.age);
        registrationForm.inputEmail(employee.email);
        registrationForm.inputSalary(employee.salary);
        registrationForm.inputDepartment(employee.department);
        registrationForm.clickSubmitButton();

        employeeItem.getNameCell(3).should('have.text', employee.name);
        employeeItem.getLastNameCell(3).should('have.text', employee.lastName);
        employeeItem.getAgeCell(3).should('have.text', employee.age);
        employeeItem.getSalaryCell(3).should('have.text', employee.salary);
        employeeItem.getEmailCell(3).should('have.text', employee.email);
        employeeItem.getDepartmentCell(3).should('have.text', employee.department);
    })

    employeeItem.clickButtonEdit(3);

    cy.fixture('/tablePage/updatedEmployee.json').then((employee) => {
        registrationForm.inputFirstName('{selectall}' + employee.name);
        registrationForm.inputLastName('{selectall}' + employee.lastName);
        registrationForm.inputAge('{selectall}' + employee.age);
        registrationForm.inputEmail('{selectall}' + employee.email);
        registrationForm.inputSalary('{selectall}' + employee.salary);
        registrationForm.inputDepartment('{selectall}' + employee.department);
        registrationForm.clickSubmitButton();

        employeeItem.getNameCell(3).should('have.text', employee.name);
        employeeItem.getLastNameCell(3).should('have.text', employee.lastName);
        employeeItem.getAgeCell(3).should('have.text', employee.age);
        employeeItem.getSalaryCell(3).should('have.text', employee.salary);
        employeeItem.getEmailCell(3).should('have.text', employee.email);
        employeeItem.getDepartmentCell(3).should('have.text', employee.department);
    })

    employeeItem.clickButtonDeleteEmployee(3);

    cy.fixture('/tablePage/updatedEmployee.json').then((employee) => {
        employeeItem.getNameCell(3).should('not.have.text', employee.name);
        employeeItem.getLastNameCell(3).should('not.have.text', employee.lastName);
        employeeItem.getAgeCell(3).should('not.have.text', employee.age);
        employeeItem.getSalaryCell(3).should('not.have.text', employee.salary);
        employeeItem.getEmailCell(3).should('not.have.text', employee.email);
        employeeItem.getDepartmentCell(3).should('not.have.text', employee.department);
    })
})
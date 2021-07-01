/// <reference types="cypress" />

export class AlertPage {

     alertButton = '#alertButton';

     timerAlertButton = '#timerAlertButton';

     confirmButton = '#confirmButton';

     promtButton = '#promtButton';

     confirmResult = '#confirmResult';

     promtResult = '#promptResult';

    getPromtResult() {
       return cy.get(this.promtResult);
    }

    getConfirmResult() {
        return cy.get(this.confirmResult).contains();
    }

    clickAlertButton() {
       cy.get(this.alertButton).click;
    }

    clickTimerAlertButton() {
        cy.get(this.timerAlertButton).click();
    }

    clickConfirmButton() {
        cy.get(this.confirmButton).click();
    }

    clickPromtButton() {
        cy.get(this.promtButton).click();
    }
}
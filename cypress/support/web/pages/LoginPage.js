///<reference types="cypress"/>
import { AbstartPage } from "./AbstractPage";

export class LoginPage extends AbstartPage {

    userNameInput = '#userName';

    passwordInput = '#password';

    loginButton = '#login';

    loginInBookStoreH5 = 'h5';

    constructor() {
        super('/login');
    }

    getLoginInBookStoreH5() {
       return cy.get(this.loginInBookStoreH5);
    }

    inputName(name) {
        cy.get(this.userNameInput).type(name);
    }

    inputPassword(password) {
        cy.get(this.passwordInput).type(password);
    }

    clickLoginButton() {
        cy.get(this.loginButton).click();
    }
}
///<reference types="cypress"/>

import { AbstartPage } from "./AbstractPage";

export class ProfilePage extends AbstartPage {
    
    profileItemList = 'div[class="rt-tr-group"]';

    registeredUserNamelabel = '#userName-value';

    logoutButton = '#books-wrapper > .text-right > #submit';

    confirmDelete = '#closeSmallModal-ok';
    
    constructor(){
        super('/profile');
    }

    clickConfirmDelete(){
        cy.get(this.confirmDelete).click();
    }

    getProfileItemList() {
        return this.profileItemList;
    }

    clickLogoutButton() {
        cy.get(this.logoutButton).click();
    }

    getRegisteredUserName() {
        return cy.get(this.registeredUserNamelabel);
    }
}
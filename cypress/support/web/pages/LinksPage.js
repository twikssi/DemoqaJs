/// <reference types="cypress"/>
import { AbstartPage } from "./AbstractPage";

export class LinksPage extends AbstartPage {

    linkHome = '#simpleLink';

    linkHomeDynamic = '#dynamicLink';

    createLink = '#created';

    noContentLink = '#no-content';

    movedLink = '#moved';

    badRequestLink = '#bad-request';

    unauthorizedLink = '#unauthorized';

    forbiddenLink = '#forbidden';

    notFoundLink = '#invalid-url';

    linkResponse = '#linkResponse';

    constructor() {
        super("/links");
    }

    getLinkHome() {
        return cy.get(this.linkHome);
    }

    getLinkHomeDynamic() {
        return cy.get(this.linkHomeDynamic);
    }

    clickCreateLink() {
        cy.get(this.createLink).click();
    }

    clickNoContentLink() {
        cy.get(this.noContentLink).click();
    }

    clickMovedLink() {
        cy.get(this.movedLink).click();
    }

    clickBadRequestLink() {
        cy.get(this.badRequestLink).click();
    }

    clickUnauthorizedLink() {
        cy.get(this.unauthorizedLink).click();
    }

    clickForbiddenLink() {
        cy.get(this.forbiddenLink).click();
    }

    clickNotFoundLink() {
        cy.get(this.notFoundLink).click();
    }

    getLinkResponse() {
        return cy.get(this.linkResponse);
    }
}
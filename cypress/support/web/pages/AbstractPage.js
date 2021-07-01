
export class AbstartPage{
    url;

    constructor (url){ 
        this.url = Cypress.config('baseUrl') + url;
    }

    openPage(){
        cy.visit(this.url);
    }

    getUrl(){
        return this.url;
    }

    isPageOpened(){
        cy.url().should('include', this.url);
    }

}
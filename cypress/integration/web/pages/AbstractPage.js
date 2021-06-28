
export class AbstartPage{
    url;

    constructor (url){ 
        this.url = Cypress.config('baseUrl') + url;
    }

    openPage(){
        cy.visit(this.url);
    }

}
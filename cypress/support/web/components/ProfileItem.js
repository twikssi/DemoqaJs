///<reference types="cypress"/>

export class ProfileItem {

    profile;

    titleCells = '.rt-tr > :nth-child(2)';

    authorCells = '.rt-tr > :nth-child(3)';

    publisherCells = '.rt-tr > :nth-child(4)';

    actionCells = 'div[class="rt-td"]';

    constructor (profile){
        this.profile = profile;
    }

    getTitleCells(){
        return this.titleCells;
    }

    getAuthorCells() {
        return this.authorCells;
    }

    getPublisherCell(){
        return this.publisherCells;
    }

    getActionCell(numberOfBook){
        return cy.get(this.profile).eq(numberOfBook).find(this.actionCells).eq(4);
    }

}
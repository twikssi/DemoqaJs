/// <reference types="cypress" />

import { AbstartPage } from "./AbstractPage";

export class CheckBoxPage extends AbstartPage {

    expandButton = '//button[@title="Expand all"]';

    collapseButton = '//button[@title="Collapse all"]';

    checkboxList = 'ol>li';

    checkboxHome = '//label[@for="tree-node-home"]';

    resultCheckboxList = '#result' //'//span[@class="text-success"]';

    checkboxDocuments = '//label[@for="tree-node-documents"]';

    checkboxHomeHalfCheck = '.rct-icon-half-check';

    checkboxDownloads = '//label[@for="tree-node-downloads"]';

    constructor() {
        super('/checkbox');
    }

    getCheckboxHomeHalfCheck() {
        return cy.get(this.checkboxHomeHalfCheck);
    }

    clickCheckboxDocuments() {
        cy.xpath(this.checkboxDocuments).click();
    }

    clickCheckboxDownloads() {
        cy.xpath(this.checkboxDownloads).click();
    }

    getResultCheckboxList() {
        return cy.get(this.resultCheckboxList);
    }

    clickCheckBoxHome() {
        cy.xpath(this.checkboxHome).click();
    }

    getSizeCheckBoxList() {
        return cy.get(this.checkboxList);
    }

    clickExpandButton() {
        cy.xpath(this.expandButton).click();
    }

    clickCollapseButton() {
        cy.xpath(this.collapseButton).click();
    }
}
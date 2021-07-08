/// <reference types="cypress-xpath" />
import { CheckBoxPage } from "../../../support/web/pages/CheckBoxPage";

const checkboxPage = new CheckBoxPage();

it('Collaps, Expand checkbox test', () => {
    checkboxPage.openPage();
    checkboxPage.isPageOpened();
    checkboxPage.getSizeCheckBoxList().should('have.length', 1);

    checkboxPage.clickExpandButton();
    checkboxPage.getSizeCheckBoxList().should('have.length', 17);

    checkboxPage.clickCollapseButton();
    checkboxPage.getSizeCheckBoxList().should('not.have.length', 17);
})

it('All Selected Checkboxes test', () => {
    let expectedChechboxText =
        'You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile';


    checkboxPage.openPage();
    checkboxPage.isPageOpened();
    checkboxPage.clickExpandButton();
    checkboxPage.clickCheckBoxHome();

    checkboxPage.getResultCheckboxList().should('contain.text', expectedChechboxText);

    checkboxPage.clickCheckBoxHome();
    checkboxPage.getResultCheckboxList().should('not.exist');
})

it('Parts of checkbox', () => {
    let expectedDocumentsText = 'You have selected :desktopnotescommandsdownloadswordFileexcelFile';
    let expectedDownloadsText = 'You have selected :downloadswordFileexcelFile';

    checkboxPage.openPage();
    checkboxPage.isPageOpened();
    checkboxPage.clickExpandButton();
    checkboxPage.clickCheckBoxHome();

    checkboxPage.clickCheckboxDocuments();
    checkboxPage.getResultCheckboxList().should('have.text', expectedDocumentsText)
    checkboxPage.getCheckboxHomeHalfCheck().should('have.length', 1);

    checkboxPage.clickCheckBoxHome();
    checkboxPage.clickCheckBoxHome();

    checkboxPage.clickCheckboxDownloads();
    checkboxPage.getResultCheckboxList().should('have.text', expectedDownloadsText);
    checkboxPage.getCheckboxHomeHalfCheck().should('have.length', 1);
})
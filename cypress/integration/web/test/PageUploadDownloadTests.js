///<reference types="cypress"/>
import { UploadDownloadPage } from "../../../support/web/pages/UploadDownloadPage";
import { unlink } from 'fs/promises';

const uploadDownloadPage = new UploadDownloadPage();

it('Upload, download page tests', () => {
    let expectedPath = 'C:\\fakepath\\jsPhoto.png';

    fs.unlink('../../downloads/sampleFile.jpeg');

    uploadDownloadPage.openPage();
    uploadDownloadPage.isPageOpened();

    uploadDownloadPage.clickDownloadButton();
    cy.fixture('../downloads/sampleFile.jpeg').should('exist');

    uploadDownloadPage.uploadFile('jsPhoto.png');
    uploadDownloadPage.getUploadFilePathText().should('have.text', expectedPath);
    
})
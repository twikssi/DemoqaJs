///<reference types="cypress"/>
import { UploadDownloadPage } from "../../../support/web/pages/UploadDownloadPage";
//import {  };
//var fs = require('fs');

const uploadDownloadPage = new UploadDownloadPage();

it('Upload, download page tests', () => {
    
    fs.open('../../../downloads/sampleFile.jpeg');

    let expectedPath = 'C:\\fakepath\\jsPhoto.png';

    //const fs = require('fs-js');
    
//fs.open('')

    uploadDownloadPage.openPage();
    uploadDownloadPage.isPageOpened();

    uploadDownloadPage.clickDownloadButton();
    cy.fixture('../downloads/sampleFile.jpeg').should('exist');

    uploadDownloadPage.uploadFile('jsPhoto.png');
    uploadDownloadPage.getUploadFilePathText().should('have.text', expectedPath);
    
})
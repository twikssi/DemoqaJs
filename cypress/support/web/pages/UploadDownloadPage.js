///<reference types="cypress"/>
import { AbstartPage } from "./AbstractPage";

export class UploadDownloadPage extends AbstartPage {

    downloadButton = '#downloadButton';

    uploadButton = '#uploadFile';

    uploadFilePath = '#uploadedFilePath';

    constructor() {
        super('/upload-download');
    }

    getUploadFilePathText() {
        return cy.get(this.uploadFilePath);
    }

    clickDownloadButton() {
        cy.get(this.downloadButton).click();
    }

    uploadFile(path) {
        cy.get(this.uploadButton).attachFile(path);
    }
}
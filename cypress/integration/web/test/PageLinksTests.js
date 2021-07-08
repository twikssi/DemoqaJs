/// <reference types="cypress"/>
import { LinksPage } from "../../../support/web/pages/LinksPage";

const linksPage = new LinksPage();

beforeEach(() => {
    linksPage.openPage();
})

it('Links with _blank', () => {
    linksPage.isPageOpened();

    linksPage.getLinkHome().should('have.attr', 'target', '_blank');
    linksPage.getLinkHome().should('have.attr', 'href', 'https://demoqa.com');

    linksPage.getLinkHomeDynamic().should('have.attr', 'target', '_blank');
    linksPage.getLinkHomeDynamic().should('have.attr', 'href', 'https://demoqa.com');
})

it('Following links will send an api call', () => {
    let expectedCreateLink = "Link has responded with staus 201 and status text Created";
    let expectedNoContentLink = "Link has responded with staus 204 and status text No Content";
    let expectedMoveLink = "Link has responded with staus 301 and status text Moved Permanently";
    let expectedBadRequestLink = "Link has responded with staus 400 and status text Bad Request";
    let expectedUnauthorizedLink = "Link has responded with staus 401 and status text Unauthorized";
    let expectedForbiddenLink = "Link has responded with staus 403 and status text Forbidden";
    let expectedNotFoundLink = "Link has responded with staus 404 and status text Not Found";

    linksPage.isPageOpened();

    linksPage.clickCreateLink();
    linksPage.getLinkResponse().should('have.text', expectedCreateLink);

    linksPage.clickNoContentLink();
    linksPage.getLinkResponse().should('have.text', expectedNoContentLink);

    linksPage.clickMovedLink();
    linksPage.getLinkResponse().should('have.text', expectedMoveLink);

    linksPage.clickBadRequestLink();
    linksPage.getLinkResponse().should('have.text', expectedBadRequestLink);

    linksPage.clickUnauthorizedLink();
    linksPage.getLinkResponse().should('have.text', expectedUnauthorizedLink);

    linksPage.clickForbiddenLink();
    linksPage.getLinkResponse().should('have.text', expectedForbiddenLink);

    linksPage.clickNotFoundLink();
    linksPage.getLinkResponse().should('have.text', expectedNotFoundLink);
})
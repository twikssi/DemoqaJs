/// <reference types="cypress"/>
import { DynamicPropertiesPage } from "../../../support/web/pages/DynamicPropertiesPage";

const dynamicPage = new DynamicPropertiesPage();

it('Dynamic buttons', () => {
    dynamicPage.openPage();
    dynamicPage.isPageOpened();

    dynamicPage.getEnableButtonAfter().should('be.disabled');
    dynamicPage.getInvisibleButtonAfter().should('not.exist');
    dynamicPage.getColorButtonAfter().should('not.have.class', 'text-danger');

    dynamicPage.getEnableButtonAfter().should('be.enabled');
    dynamicPage.getInvisibleButtonAfter().should('be.visible');
    dynamicPage.getColorButtonAfter().should('have.class', 'text-danger');
})
/// <reference types="cypress" />

import { AbstartPage } from "./AbstractPage";

export class DynamicPropertiesPage extends AbstartPage{
    
    enableButtonAfter = '#enableAfter';

    colorButtonAfter = '#colorChange';

    invisibleButtonAfter = '#visibleAfter';
    
    constructor (){
        super('/dynamic-properties');
    }

    getEnableButtonAfter(){
       return cy.get(this.enableButtonAfter);
    }

    getColorButtonAfter(){
        return cy.get(this.colorButtonAfter);
    }

    getInvisibleButtonAfter(){
        return cy.get(this.invisibleButtonAfter);
    }
}
///<reference types="cypress"/>
import { ValidateSchema } from "../../../../support/util/ValidateSchema";


let keyApi = Cypress.config('keyApi');
let unit = 'metric';
let validSc = new ValidateSchema();

describe('Current weather tests', () => {

    it('Minsk weather test', () => {
        cy.fixture('api/openweathermap/currentweather/info.json').then((info) => {
            cy.request({
                url: 'api.openweathermap.org/data/2.5/weather',
                method: 'GET',
                qs: {
                    q: info.city,
                    APPID: keyApi,
                    units: unit
                }
            }).then((response) => {
                cy.log(JSON.stringify(response.body));
                expect(response.status).to.eq(200);
                expect(response.body.sys).to.have.property('country', info.country);
                expect(response.body).to.have.property('timezone', info.timezone);
                expect(response.body).to.have.property('name', info.city);

                cy.fixture('api/openweathermap/currentweather/schema.json').then((schema) => {
                    expect(validSc.validateSchema(schema, response.body)).to.eq(true, 'Schema is passed');
                })

                const max_degree = 60;
                const min_degree = -95;
                let currentTemp = response.body.main.temp;
                expect(currentTemp > min_degree && currentTemp < max_degree).
                    to.eq(true, 'Temperature is real');
            })
        })
    })
})
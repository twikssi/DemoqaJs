///<reference types="cypress"/>

let keyApi = Cypress.config('keyApi');
let unit = 'metric';
const max_degree = 60;
const min_degree = -95;

describe('One call API tests', () => {

    it('Minsk historical weather data test', () => {
        let currentData = Math.trunc(Date.now() / 1000);
        let listTemperature = [];

        cy.fixture('api/openweathermap/onecallapi/cityInfo.json').then((info) => {
            cy.request({
                url: 'https://api.openweathermap.org/data/2.5/onecall/timemachine',
                method: 'GET',
                qs: {
                    dt: currentData,
                    lat: info.lat,
                    lon: info.lon,
                    units: unit,
                    APPID: keyApi
                }
            }).then((response) => {
                cy.log(JSON.stringify(response.body));
                expect(response.body.lat).to.eql(info.lat);
                expect(response.body.lon).to.eql(info.lon);
                expect(response.body.timezone).to.eql(info.timezone);
                expect(response.body.timezone_offset).to.eql(info.timezone_offset);


                listTemperature = response.body.hourly;
                for (let i = 0; i < listTemperature.length; i++) {
                    expect(listTemperature[i].temp > min_degree && listTemperature[i].temp < max_degree)
                        .to.eq(true, 'Is temperature ' + listTemperature[i].temp + ' between range?');
                }

            })
        })

    })

    it('API call only hourly test', () => {
        let expectedNumberOfHourly = 48;
        let listHourly = [];

        cy.fixture('api/openweathermap/onecallapi/cityInfo.json').then((info) => {
            cy.request({
                method: 'GET',
                url: 'https://api.openweathermap.org/data/2.5/onecall',
                qs: {
                    lat: info.lat,
                    lon: info.lon,
                    units: unit,
                    exclude: 'minutely,daily,alerts',
                    APPID: keyApi
                }
            }).then((response) => {
                listHourly = response.body.hourly;

                expect(listHourly).to.have.length(expectedNumberOfHourly);

                for (let i = 0; i < listHourly.length; i++) {
                    expect(listHourly[i].temp > min_degree && listHourly[i].temp < max_degree).to.eq(true, 'is temperature match range?');
                }
                expect(response.body.minutely != undefined).to.eq(false, 'does minutely temperature exist?');
                expect(response.body.daily != undefined).to.eq(false, 'does daily temperature exist?');
                expect(response.body.alerts != undefined).to.eq(false, 'does alerts exist?');
            })
        })
    })

    it('API only daily test', () => {
        let expectedNumberOfDaily = 8;
        let listDaily = [];

        cy.fixture('api/openweathermap/onecallapi/cityInfo.json').then((info) => {
            cy.request({
                url: 'https://api.openweathermap.org/data/2.5/onecall',
                method: 'GET',
                qs: {
                    lat: info.lat,
                    lon: info.lon,
                    units: unit,
                    exclude: 'minutely,hourly,alerts',
                    APPID: keyApi
                }
            }).then((response) => {
                listDaily = response.body.daily;
                cy.log(JSON.stringify(response.body));
                expect(listDaily).to.have.length(expectedNumberOfDaily);

                for (let i = 0; i < listDaily.length; i++) {
                    expect(listDaily[i].temp.day > min_degree && listDaily[i].temp.day < max_degree).to.eq(true, 'is temperature match range?');
                }

                expect(response.body.minutely != undefined).to.eq(false, 'does minutely temperature exist?');
                expect(response.body.hourly != undefined).to.eq(false, 'does hourly temperature exist?');
                expect(response.body.alerts != undefined).to.eq(false, 'does alerts exist?');

            })
        })
    })

    it('API only minutely test', () => {
        let expectedNumberOfMinutely = 61;
        let listMinutely = [];

        cy.fixture('api/openweathermap/onecallapi/cityInfo.json').then((info) => {
            cy.request({
                url: 'https://api.openweathermap.org/data/2.5/onecall',
                method: 'GET',
                qs: {
                    lat: info.lat,
                    lon: info.lon,
                    units: unit,
                    exclude: 'daily,hourly,alerts',
                    APPID: keyApi
                }
            }).then((response) => {
                listMinutely = response.body.minutely;
                cy.log(JSON.stringify(listMinutely));
                expect(listMinutely).to.have.length(expectedNumberOfMinutely);

                expect(response.body.daily != undefined).to.eq(false, 'does daily temperature exist?');
                expect(response.body.hourly != undefined).to.eq(false, 'does hourly temperature exist?');
                expect(response.body.alerts != undefined).to.eq(false, 'does alerts exist?');

            })
        })
    })
})
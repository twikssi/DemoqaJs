///<reference types="cypress"/>

let keyApi = Cypress.config('keyApi');
const CITY_INFO_PATH = 'api/openweathermap/onecallapi/cityInfo.json';
const POLLUTION_SCHEMA = 'api/openweathermap/pollution/schema.json';
const ELEMENETS = 'api/openweathermap/pollution/elements.json';

describe('Air pollution tests', () => {
    
    it('Minsk current air polution', () => {
        cy.fixture(CITY_INFO_PATH).then((info) => {
            cy.request({
                url: 'http://api.openweathermap.org/data/2.5/air_pollution',
                method: 'GET',
                qs: {
                    "lon": info.lon,
                    "lat": info.lat,
                    appid: keyApi
                }
            }).then((response) => {
                cy.log(JSON.stringify(response.body));

                expect(response.status).eq(200);

                expect(response.body.coord.lat).to.eq(info.lat);
                expect(response.body.coord.lon).to.eq(info.lon);


                cy.fixture(ELEMENETS).then((elem) => {
                    let component = response.body.list[0].components;

                    expect(component.co > elem.MinCO && component.co < elem.MaxCO).
                        to.eq(true, 'does element CO match range?');
                    expect(component.no > elem.MinNO && component.no < elem.MaxNO).
                        to.eq(true, 'does element NO match range?');
                    expect(component.no2 > elem.MinNO2 && component.no2 < elem.MaxNO2).
                        to.eq(true, 'does element NO2 match range?');
                    expect(component.o3 > elem.MinO3 && component.o3 < elem.MaxO3).
                        to.eq(true, 'does element O3 match range?');
                    expect(component.so2 > elem.MinSO2 && component.so2 < elem.MaxSO2).
                        to.eq(true, 'does element SO2 match range?');
                    expect(component.pm2_5 > elem.MinPM2_5 && component.pm2_5 < elem.MaxPM2_5).
                        to.eq(true, 'does element PM2_5 match range?');
                    expect(component.pm10 > elem.MinPM10 && component.pm10 < elem.MaxPM10).
                        to.eq(true, 'does element PM10 match range?');
                    expect(component.nh3 > elem.MinNH3 && component.nh3 < elem.MaxNH3).
                        to.eq(true, 'does element NH3 match range?');
                })
            })
        })

    })

    it('Minsk historical air polution', () => {
        cy.fixture('api/openweathermap/pollution/historicalInfo.json').then((info) => {
            cy.request({
                url: 'http://api.openweathermap.org/data/2.5/air_pollution/history',
                method: 'GET',
                qs: {
                    "lon": info.lon,
                    "lat": info.lat,
                    appid: keyApi,
                    start: info.start,
                    end: info.end
                }
            }).then((response) => {
                let listComponents = response.body.list;

                expect(response.status).eq(200);

                cy.fixture(ELEMENETS).then((elem) => {
                    for (let i = 0; i < listComponents.length; i++) {
                        expect(listComponents[i].components.co > elem.MinCO && listComponents[i].components.co < elem.MaxCO).
                            to.eq(true, 'does element CO match range?');
                        expect(listComponents[i].components.no > elem.MinNO && listComponents[i].components.no < elem.MaxNO).
                            to.eq(true, 'does element NO match range?');
                        expect(listComponents[i].components.no2 > elem.MinNO2 && listComponents[i].components.no2 < elem.MaxNO2).
                            to.eq(true, 'does element NO2 match range?');
                        expect(listComponents[i].components.o3 > elem.MinO3 && listComponents[i].components.o3 < elem.MaxO3).
                            to.eq(true, 'does element O3 match range?');
                        expect(listComponents[i].components.so2 > elem.MinSO2 && listComponents[i].components.so2 < elem.MaxSO2).
                            to.eq(true, 'does element SO2 match range?');
                        expect(listComponents[i].components.pm2_5 > elem.MinPM2_5 && listComponents[i].components.pm2_5 < elem.MaxPM2_5).
                            to.eq(true, 'does element PM2_5 match range?');
                        expect(listComponents[i].components.pm10 > elem.MinPM10 && listComponents[i].components.pm10 < elem.MaxPM10).
                            to.eq(true, 'does element PM10 match range?');
                        expect(listComponents[i].components.nh3 > elem.MinNH3 && listComponents[i].components.nh3 < elem.MaxNH3).
                            to.eq(true, 'does element NH3 match range?');
                    }
                })
            })
        })

    })
})


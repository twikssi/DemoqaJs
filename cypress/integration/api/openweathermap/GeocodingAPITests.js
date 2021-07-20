///<reference types="cypress"/>

let keyApi = Cypress.config('keyApi');

describe('Geocoding API tests', () => {

    it('Geocoding by city name and limit API test', () => {
        cy.fixture('api/openweathermap/GeocodingAPI/geocodingByCityAndLimit.json').then((info) => {
            cy.request({
                url: 'http://api.openweathermap.org/geo/1.0/direct',
                method: 'GET',
                qs: {
                    q: info.q,
                    limit: info.limit,
                    APPID: keyApi
                }
            }).then((response) => {
                let listCites = response.body;

                expect(response.status).eq(200);
                expect(listCites.length).to.eq(info.limit, 'Does length match?');

                for (let i = 0; i < listCites.length; i++) {
                    cy.log(JSON.stringify(listCites[i]));

                    expect(listCites[i].name).to.eq(info.q, 'does city\'s name match?');
                    expect(listCites[i].lat).to.eq(info.check[i].lat, 'does lat coordinate match?');
                    expect(listCites[i].lon).to.eq(info.check[i].lon, 'does lon coordinate match?');
                    expect(listCites[i].country).to.eq(info.check[i].country, 'does country match?');
                }
            })
        })
    })

    it('Geocoding by zip/post code API test', () => {
        cy.fixture('api/openweathermap/GeocodingAPI/geocodingByZipPostCode.json').then((info) => {
            cy.request({
                url: 'http://api.openweathermap.org/geo/1.0/zip',
                method: 'GET',
                qs: {
                    zip: info.zip + ',' + info.country,
                    APPID: keyApi
                }
            }).then((response) => {
                let body = response.body;
                cy.log(JSON.stringify(body));

                expect(response.status).to.eq(200);

                expect(body.zip).to.eq(info.zip, 'does zip code match?');
                expect(body.name).to.eq(info.name, 'does city name match?');
                expect(body.lat).to.eq(info.lat, 'does lat coord match?');
                expect(body.lon).to.eq(info.lon, 'does lon coord match?');
                expect(body.country).to.eq(info.country, 'does country match?');
            })
        })
    })

    it('Reverse geocoding api test', () => {
        cy.fixture('api/openweathermap/GeocodingAPI/geocodingReverse.json').then((info) => {
            cy.request({
                url: 'http://api.openweathermap.org/geo/1.0/reverse',
                method: 'GET',
                qs: {
                    lat: info.lat,
                    lon: info.lon,
                    limit: info.limit,
                    APPID: keyApi
                }
            }).then((response) => {
                let body = response.body;
                cy.log(JSON.stringify(body));

                expect(response.status).eq(200);
                expect(body.length).to.eq(info.limit);

                for (let i = 0; i < body.length; i++) {
                    expect(body[i].name).to.eq(info.check[i].name, 'does city name match?');
                    expect(body[i].country).to.eq(info.check[i].country, 'does country name match?');
                }
            })
        })
    })
})


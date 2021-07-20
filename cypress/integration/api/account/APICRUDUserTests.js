///<reference types="cypress"/>

import { CalendarUtil } from "../../../support/util/CalendarUtil";

let now = new Date();
let userName;
let password;
let userId;
let userToken;
let calendarUtil = new CalendarUtil();

describe('CRUD User', () => {

    it('Wrong POST User test', () => {
        cy.fixture('/api/account/wrongUser.json').then((account) => {
            cy.request({
                method: 'POST',
                url: '/Account/v1/User',
                failOnStatusCode: false,
                body: {
                    "userName": account.wrongUserName,
                    "password": account.wrongPassword
                },
                headers: {
                    "content-type": "application/json"
                }
            }).then((response) => {
                cy.log('>>>log body: ')
                cy.log(response.body);
                expect(response.status).to.eq(400);
                expect(response.body).to.have.property('code', account.code);
                expect(response.body).to.have.property('message', account.message);
            });
        })
    })

    it('Post user test, get user id', () => {
        cy.fixture('/api/account/user.json').then((user) => {
            userName = user.userName + now;
            password = user.password;

            cy.request({
                method: 'POST',
                url: '/Account/v1/User',
                body: {
                    "userName": userName,
                    "password": password
                }
            }).then((response) => {
                cy.log('>>>log body')
                cy.log(JSON.stringify(response.body));
                expect(response.status).to.eq(201);
                expect(response.body).to.have.property('username', userName);
                userId = response.body.userID;
            })
        })
    })

    it('Create user token test', () => {
        let expectedExpires = 6;
        cy.fixture('/api/account/user.json').then((user) => {
            cy.request({
                url: '/Account/v1/GenerateToken',
                method: 'POST',
                body: {
                    "userName": userName,
                    "password": password
                }
            }).then((response) => {
                cy.log('>>>log body');
                cy.log(response.body);
                userToken = response.body.token;
                expect(response.status).eq(200);
                expect(response.body).to.have.property('status', user.status);
                expect(response.body).to.have.property('result', user.result);
                let expires = response.body.expires;

                assert.equal(expectedExpires, parseInt(calendarUtil.getNumberOfDaysTokenIsAvailable(expires)), 'Expires days don\'t match');
            })
        })
    })

    it('GET user', () => {
        cy.request({
            url: '/Account/v1/User/' + userId,
            method: 'GET',
            headers: {
                "Authorization": "Bearer " + userToken
            }
        }).then((response) => {
            expect(response.status).eq(200);
            expect(response.body).to.have.property('username', userName);
            expect(response.body).to.have.property('userId', userId);
        })
    })

    it('Delete user', () => {
        cy.request({
            url: '/Account/v1/User/' + userId,
            method: 'DELETE',
            headers: {
                "Authorization": "Bearer " + userToken
            }
        }).then((response) => {
            expect(response.status).eq(204);
        })
    })
})
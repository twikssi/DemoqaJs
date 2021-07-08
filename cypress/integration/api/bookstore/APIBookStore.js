///<reference types="cypress"/>
import { RegistrationService } from "../../../support/services/RegistrationService"

let reg = new RegistrationService();

describe('API for book store', () => {
    let isbn1 = "9781593277574";
    let isbn2 = "9781449337711";
    let isbn3 = "9781449365035";

    it('Registration', () => {
        reg.signUp();
        reg.signIn();
    })

    it('Get books test', () => {
        let expectedNumbresOfBooks = 8;

        cy.request({
            method: "GET",
            url: "/BookStore/v1/Books",
        }).its('body.books').should('have.length', expectedNumbresOfBooks);
    })

    it('Get book by isbn test', () => {
        cy.fixture('api/bookstore/book.json').then((book) => {
            cy.request({
                method: "GET",
                url: "/BookStore/v1/Book",
                qs: { ISBN: isbn1 }
            }).its('body').should('eql', book);
        })
    })

    it('Get book by isbn negative test', () => {
        cy.fixture('api/bookstore/book.json').then((book) => {
            cy.request({
                method: "GET",
                url: "/BookStore/v1/Book",
                failOnStatusCode: false,
                qs: { ISBN: isbn1 }
            }).its('body').should('not.eq', book);
        })
    })

    it('Post add book to user test', () => {
        cy.request({
            method: "POST",
            url: "/BookStore/v1/Books",
            headers: {
                "Authorization": "Bearer " + reg.getUserToken()
            },
            body: {
                "userId": reg.getUserId(),
                "collectionOfIsbns": [
                    {
                        "isbn": isbn1
                    },
                    {
                        "isbn": isbn2
                    }
                ]
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
        })
    })

    it('Delete book by user id and ISBN', () => {
        cy.request({
            method: "DELETE",
            url: "/BookStore/v1/Book",
            headers: {
                "Authorization": "Bearer " + reg.getUserToken()
            },
            body: {
                "isbn": isbn1,
                "userId": reg.getUserId()
            }
        }).then((response) => {
            expect(response.status).to.eq(204);
        })
    })

    it('Put book', () => {
        let req = cy.request({
            method: "PUT",
            url: "/BookStore/v1/Books/" + isbn2,
            body: {
                "isbn": isbn3,
                "userId": reg.getUserId()
            },
            headers: {
                "Authorization": "Bearer " + reg.getUserToken()
            },
        }).then((response) => {
            //expect(response.body).to.have.property('title', isbn3);
        })
        req.its('body.books').should('have.length', 1);
    })

    it('Delete user', () => {
        reg.deleteUser();
    })
})
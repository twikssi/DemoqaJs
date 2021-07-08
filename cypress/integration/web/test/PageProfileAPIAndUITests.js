///<reference types="cypress"/>
import { RegistrationService } from "../../../support/services/RegistrationService"
import { ProfileItem } from "../../../support/web/components/ProfileItem";
import { LoginPage } from "../../../support/web/pages/LoginPage";
import { ProfilePage } from "../../../support/web/pages/ProfilePage";

let reg = new RegistrationService();
let loginPage = new LoginPage();
const profilePage = new ProfilePage();
const profileItem = new ProfileItem(profilePage.getProfileItemList());

describe('Page profile API and UI Tests', () => {
    Cypress.Cookies.debug(true);
    let isbn1 = "9781593277574";
    let isbn2 = "9781449337711";
    let isbn3 = "9781449365035";
    let expectedAuthor = 'Glenn Block et al.';
    let expectedTitle = 'Designing Evolvable Web APIs with ASP.NET ';

    it('Registration user API', () => {
        reg.signUp();
        reg.signIn();
    })

    it('Add book to user API', () => {
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
                    },
                    {
                        "isbn": isbn3
                    }
                ]
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
        })
    })


    it('Login page test, sign in test', () => {
        loginPage.openPage();
        loginPage.isPageOpened();
        loginPage.inputName(reg.getUserName());
        loginPage.inputPassword(reg.getUserPassword());
        loginPage.clickLoginButton();

        profilePage.isPageOpened();
        profilePage.getRegisteredUserName().should('have.text', reg.getUserName());
    })

    it('Find book in the table test', () => {
        cy.contains(profileItem.getAuthorCells(), expectedAuthor).should('have.text', expectedAuthor);
        cy.contains(profileItem.getTitleCells(), expectedTitle).should('have.text', expectedTitle);
    })

    it('Delete book in the table test', () => {
        profileItem.getActionCell(1).find('#delete-record-undefined').click();
        profilePage.clickConfirmDelete();

        cy.wait(2000);
        cy.get(profileItem.getTitleCells()).each(($el) => {
            let text = $el.text();
            expect(text).not.eq(expectedTitle);
        })
    })

    it('Log out test', () => {
        let expectedH5 = 'Login in Book Store';
        profilePage.clickLogoutButton();
        loginPage.isPageOpened();
        loginPage.getLoginInBookStoreH5().should('have.text', expectedH5);
    })
})
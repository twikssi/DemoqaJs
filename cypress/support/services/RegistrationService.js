///<reference types="cypress"/>

export class RegistrationService {
    userName;
    userPassword;
    userId;
    userToken;

    getUserName(){
        return this.userName;
    }

    getUserPassword(){
        return this.userPassword;
    }

    getUserId(){
        return this.userId;
    }

    getUserToken(){
        return this.userToken;
    }

    signUp() {
        cy.fixture('/api/account/user.json').then((user) => {
            this.userName = user.userName + new Date();
            this.userPassword = user.password;

            cy.request({
                method: 'POST',
                url: '/Account/v1/User',
                body: {
                    "userName": this.userName,
                    "password": this.userPassword
                }
            }).then((response) => {
                expect(response.status).to.eq(201);
                expect(response.body).to.have.property('username', this.userName);
                this.userId = response.body.userID;
            })
        })
    }

    signIn(){
            cy.fixture('/api/account/user.json').then((user) => {
                cy.request({
                    url: '/Account/v1/GenerateToken',
                    method: 'POST',
                    body: {
                        "userName": this.userName,
                        "password": this.userPassword
                    }
                }).then((response) => {
                    this.userToken = response.body.token;
                    expect(response.status).eq(200);
                    expect(response.body).to.have.property('status', user.status);
                    expect(response.body).to.have.property('result', user.result);
                    let expires = response.body.expires;
                })
            })
    }

    deleteUser(){
        cy.request({
            url: '/Account/v1/User/' + this.userId,
            method: 'DELETE',
            headers: {
                "Authorization": "Bearer " + this.userToken
            }
        }).then((response) => {
            expect(response.status).eq(204);
        })
    }

}
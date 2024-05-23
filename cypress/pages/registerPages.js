export class registerPage{

    weblocators={

        firstName:"#input-firstname",
        lastName:"#input-lastname",
        email:"#input-email",
        phoneNumber:"#input-telephone",
        password:"#input-password",
        confirmPassword:"#input-confirm",
        termConditions:"input[name='agree']",
        continue:'.btn.btn-primary'
    }

    openURL(){
        cy.visit(Cypress.env('URL'))
    }

    enterFirstName(FName){
        cy.get(this.weblocators.firstName).type(FName)
    }

    enterLastName(LName){
        cy.get(this.weblocators.lastName).type(LName)
    }

    enterEmailId(Email){
        cy.get(this.weblocators.email).type(Email)
    }

    enterPhoneNumber(PhoneNumber){
        cy.get(this.weblocators.phoneNumber).type(PhoneNumber)
    }

    enterPassword(Password){
        cy.get(this.weblocators.password).type(Password)
    }
    enterConfirmPassword(CPassword){
        cy.get(this.weblocators.confirmPassword).type(CPassword)
    }

    clickOnTC(){
        cy.get(this.weblocators.termConditions).check()
    }

    clickOnSubmit(){
        cy.get(this.weblocators.continue).click()
    }
}
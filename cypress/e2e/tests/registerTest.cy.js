import { registerPage } from "../../pages/registerPages"
const registerObj=  new registerPage()
import registerData from "../../fixtures/registerData.json"

describe('test registration form',()=>{


    it('fill registration form',()=>{
        registerObj.openURL()
        registerObj.enterFirstName(registerData.firstName)
        registerObj.enterLastName(registerData.lastName)
        registerObj.enterEmailId(registerData.email)
        registerObj.enterPhoneNumber(registerData.phoneNumber)
        registerObj.enterPassword(registerData.password)
        registerObj.enterConfirmPassword(registerData.password)
        registerObj.clickOnTC()
        registerObj.clickOnSubmit()
    })



})
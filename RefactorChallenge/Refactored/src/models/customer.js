import User from "./user.js"

// Corporate individual customer/user muhabbetine girmiyorum sanırsam istenmiyor
export default class Customer extends User{
    constructor({id, firstName, lastName, city, age, creditCardNumber}) {
        super({id:id,firstName:firstName,lastName:lastName,city:city,age:age})
        this.creditCardNumber = creditCardNumber
    }
}
import User from "./user.js"

export default class Employee extends User{
    constructor({id, firstName, lastName, city,age, salary}) {
        super({id:id,firstName:firstName,lastName:lastName,city:city,age:age})
        this.salary = salary
    }
}
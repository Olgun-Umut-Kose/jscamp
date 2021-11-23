
// type field muhabbetinden haz almadım type kısmında instanceof yöntemini kullanıcam böylece type name diye bir alan olmadığından yanlış girilemez
export default class User {
    constructor({id, firstName, lastName, city, age}) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.city = city
        this.age = age
    }
}
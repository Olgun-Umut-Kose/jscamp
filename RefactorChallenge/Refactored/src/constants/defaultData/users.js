import Customer from "../../models/customer.js";
import Employee from "../../models/employee.js";

export const users = [
    new Customer({id:1,firstName:"Engin",lastName:"Demiroğ",city:"Ankara",age:36,creditCardNumber:"123456"}),
    new Customer({id:2,firstName:"Mustafa",lastName:"Sansar",city:"İstanbul",age:21,creditCardNumber:"654321"}),
    new Employee({id:3,firstName:"Cansu",lastName:"Değirmen",city:"İstanbul",age:20,salary:8000}),
    new Employee({id:4,firstName:"Mücahit",lastName:"Kaya",city:"Bolu",age:23,salary:17000}),
    new Employee({id:5,firstName:"Eren",lastName:"Arı",city:"Diyarbakır",age:20,salary:15000}),
    new Customer({id:6,firstName:"Beytullah",lastName:"Zor",city:"Ankara",age:36,creditCardNumber:"123456"})
]

//23.05 Dersteyiz
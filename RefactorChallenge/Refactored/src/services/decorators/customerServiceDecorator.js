export default class CustomerServiceDecorator  {
    constructor(customerService){
        this.customerService = customerService
    }

    add(customer) {

       return this.customerService.add(customer)
    }
    update(customer){

        return this.customerService.update(customer)
    }
    deleteBy(customer, predicate = (value,index,array) => value.id === customer.id) {

       return this.customerService.deleteBy(customer,predicate)
    }

    getAllBy(filter = () => true) {
        return this.customerService.getAllBy(filter)
    }

    getById(id) {
        return this.customerService.getById(id)
    }

    getSortedByField(field) {
        return this.customerService.getSortedByField(field)
    }
}
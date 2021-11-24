export default class EmployeeServiceDecorator  {
    constructor(employeeService){
        this.employeeService = employeeService
    }

    add(employee) {

       return this.employeeService.add(employee)
    }
    update(employee){

        return this.employeeService.update(employee)
    }
    deleteBy(employee, predicate = (value,index,array) => value.id === employee.id) {

       return this.employeeService.deleteBy(employee,predicate)
    }

    getAllBy(filter = () => true) {
        return this.employeeService.getAllBy(filter)
    }

    getById(id) {
        return this.employeeService.getById(id)
    }

    getSortedByField(field) {
        return this.employeeService.getSortedByField(field)
    }
}
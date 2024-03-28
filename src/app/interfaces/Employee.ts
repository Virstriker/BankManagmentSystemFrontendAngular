export interface Employees{
    employeeId: number,
    employeeFirstName:string,
    employeeLastName:string,
    employeeDateOfBirth: Date,
    employeeMobileNo:number,
    employeeEmailId:string,
    employeeAadharNo:number,
    employeLoginId: string,
    employeeLoginPassword:string,
    employeeIsAdmin: boolean
}
export interface AddEmployees{
    employeeFirstName:string,
    employeeLastName:string,
    employeeDateOfBirth: Date,
    employeeMobileNo:number,
    employeeEmailId:string,
    employeeAadharNo:number,
    employeLoginId: string,
    employeeLoginPassword:string,
    employeeIsAdmin: boolean
}

export interface Profile{
    employeeId: number,
    employeeFirstName:string,
    employeeLastName:string,
    employeeDateOfBirth: Date,
    employeeMobileNo:number,
    employeeEmailId:string,
    employeeAadharNo:number
}
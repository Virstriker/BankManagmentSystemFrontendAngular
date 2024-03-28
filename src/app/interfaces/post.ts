export interface ITransaction{
    transactionId: number,
    transactionDate:Date,
    transactionAccount: number,
    transactionToAccount: number,
    transactionType: string,
    transactionAmount: number
}
export interface PostData{
    firstName: string,
    lastName: string,
    dateOfBirth: Date,
    mobileNo: number,
    emailId: string,
    aadharNo: number,
    balance: number,
    accountType: string
}
export interface IGetAllData{
    userId:number,
    firstName: string,
    lastName: string,
    dateOfBirth: any,
    mobileNo: number,
    emailId: string,
    aadharNo: number,
    accountNumber: number,
    balance: number,
    accountType: string
}
export interface GetData{
    userId:number,
    firstName: string,
    lastName: string,
    dateOfBirth: Date,
    mobileNo: number,
    emailId: string,
    aadharNo: number,
    active: boolean
}
export interface PostTransfer{
    transactionAccount: number,
    transactionToAccount: number,
    transactionAmount: number
}
export interface PostDepostiWithdraw{
    transactionAccount: number,
    transactionAmount: number
}
export interface AddAccount{
    balance: number,
    accountType: string   
}
export interface Accounts{
    accountNumber: number,
    accountUser: number,
    balance: number,
    accountType: string,
    active: boolean
}
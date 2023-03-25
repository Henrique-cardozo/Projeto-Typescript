import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { NewDioAccount } from './class/NewDioAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(100)
peopleAccount.withdraw(50)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(120)
companyAccount.getLoan(500)
console.log(companyAccount)

const newDioAccount: NewDioAccount = new NewDioAccount('Nova Conta', 30)
newDioAccount.deposit(200)
console.log(newDioAccount)
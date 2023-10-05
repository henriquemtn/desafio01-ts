import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PrimeAccount } from './class/PrimeAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(200)
//peopleAccount.withdraw(200)  
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.getLoan(250)

const primeAccount: PrimeAccount = new PrimeAccount('Conta Premium', 30)
primeAccount.deposit(200)
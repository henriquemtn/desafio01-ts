import { DioAccount } from "./DioAccount";

export class PrimeAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit = (deposit: number): void => {
        if (this.getStatus() == true) {
            let PrimeAccount = (this.getBalance() + deposit + 10)
            this.setBalance(PrimeAccount) 
            console.log('Seu deposito foi de:', deposit)
            console.log('Seu saldo atual é de:', this.getBalance())
        }
    }
}
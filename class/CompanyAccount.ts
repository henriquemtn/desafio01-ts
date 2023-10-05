import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (Loan: number): void => {
    if(this.getStatus() == true ){
      let loanInBalance = (this.getBalance() + Loan)
       this.setBalance(loanInBalance)
       console.log("Parabéns, o seu emprestimo de", Loan, "foi acrescentado a sua conta!")
       console.log("Seu saldo atual é de", this.getBalance())
    }
  }
}

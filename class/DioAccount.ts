export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 2000
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  getBalance = (): number => {
    return this.balance
  }

  setBalance = (balance: number): void => {
    this.balance = balance
  }

  deposit = (deposit: number): void => {
    if (this.validateStatus()) {
      this.balance = (deposit + this.getBalance())
      console.log('Voce depositou', deposit)
      console.log('Seu saldo atual é de', this.balance)
    } else {
      console.log("Sua conta esta inativa")
    }
  }

  withdraw = (withdraw: number): void => {
    if (this.validateStatus() && this.balance > withdraw) {
      this.balance = (this.balance - withdraw)
      console.log('Voce sacou', withdraw)
      console.log('Seu saldo atual é de', this.balance)
    } else {
      throw new Error()
    }
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }

  getStatus = (): boolean => {
    return this.status
  }
}

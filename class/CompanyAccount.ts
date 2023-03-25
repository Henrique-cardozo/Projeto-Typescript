import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getLoan = (amount: number): void => {
        if (this.validateStatus()) {
            this.balance += amount
            console.log(`Empréstimo de R$${amount} concedido. Novo saldo: R$${this.balance}`)
        } else {
            console.log("Conta inválida")
        }
    }
}
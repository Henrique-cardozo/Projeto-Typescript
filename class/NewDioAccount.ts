import { DioAccount } from "./DioAccount";

export class NewDioAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber,);
  }

  deposit = (amount: number): void => {
    if (this.validateStatus()) {
      this.balance += amount + 10;
      console.log(
        `Depósito de R$${amount} realizado com sucesso. Novo saldo: R$${this.balance}`
      );
    } else {
      console.log("Conta inválida.");
    }
  };
}
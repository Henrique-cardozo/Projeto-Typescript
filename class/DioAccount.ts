export abstract class DioAccount {
    private readonly name: string
    private readonly accountNumber: number
    balance: number = 0
    private status: boolean = true
      
    constructor(name: string, accountNumber: number){
      this.name = name
      this.accountNumber = accountNumber
      }

    getstatus = (status:boolean) => {
          return this.status
      }
  
    //setName = (name: string): void => {
    //  this.name = name
    //  console.log('Não é possível alterar o nome!')
    // }
  
    getName = (): string => {
      return this.name
    }

    deposit = (amount: number): void => {
      if(this.validateStatus()){
        this.balance += amount
        console.log(`Voce depositou R$${amount}. Novo saldo: R$${this.balance}`)
      }
    }
  
    withdraw = (amount: number): void => {
    if(this.validateStatus() && this.balance >= amount){
      this.balance -= amount
      console.log(`Voce sacou R$${amount}. Novo saldo: R$${this.balance}`)
    } else {
    console.log('Saque não autorizado')
  }
}
  
    getBalance = (): void => {
      console.log(this.balance)
    }
  
   protected validateStatus = (): boolean => {
      if (this.status) {
        return this.status
      }
  
      throw new Error('Conta inválida')
    }
  }

// Tentei acessar a propriedade status com getstatus, porém não obtive sucesso!
// Encontrei o seguinte erro: Essa expressão não pode ser chamada.
// O tipo 'Boolean náo tem assinaturas de chamada'
// Mantive com validaStatus e implementei o método protected
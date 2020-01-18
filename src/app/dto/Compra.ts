export class Compra{
  constructor(public title: string, public price: number, public amount: number){

  }

  getValue(){
    return this.price * this.amount
  }
}

export class Item{

  constructor(public id: string, public title: string,
  public price: number, public cuisine: string){ }

  public getId() : string {
    return this.id
  }

  public getTitle() : string {
    return this.title
  }

  public getPrice() : number {
    return this.price.toFixed(2)
  }

  public getCuisine() : string {
    return this.cuisine
  }
}

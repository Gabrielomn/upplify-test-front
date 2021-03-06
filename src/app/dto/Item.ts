export class Item{

  constructor(public id: string, public title: string,
  public price: number, public cuisine: string, public imageLink:string){
  }

  public getId() : string {
    return this.id
  }

  public getTitle() : string {
    return this.title
  }

  public getPrice() : number {
    return this.price
  }

  public getCuisine() : string {
    return this.cuisine
  }
}

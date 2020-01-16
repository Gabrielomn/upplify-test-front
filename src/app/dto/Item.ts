export class Item{
  public id: string
  public title: string
  public price: double
  public cuisine: string


  public getId() : string {
    return this.id
  }

  public getTitle() : string {
    return this.title
  }

  public getPrice() : double {
    return this.price
  }

  public getCuisine() : string {
    return this.cuisine
  }
}

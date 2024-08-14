export class Order {
    message: string
    basketNum: number
    accName: string
    date: Date
  
    constructor(message1: string, basketNum1: number, accName1: string, date1: Date) {
      this.message = message1
      this.basketNum = basketNum1
      this.accName = accName1
      this.date  = date1
    }
}

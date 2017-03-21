

export class Dish {


    private name: string;
    private price: number;
    private starRating;
    private extraDesc: string;


    constructor(name, price) {
        
        this.name = name;
        this.price = price;
        this.starRating = "star-4.5.png";
  
    }

}
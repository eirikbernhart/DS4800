

export class Dish {


    private name: string;
    private price: number;
    private starRating;
    private extraDesc: string;
    private image: string;


    constructor(name, price, image) {
        
        this.name = name;
        this.price = price;
        this.image = image;
        this.starRating = "star-4.5.png";
  
    }

}
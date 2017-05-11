

export class Dish {


    private name: string;
    private price: number;
    private rating;
    private descript: string;
    private image: string;
    private topListPos;
    private seller: string;


    constructor(name, price, descript, image, rating: number, topListPos, seller) {
        
        this.name = name;
        this.price = price;
        this.image = image;
        this.descript = descript;
        this.rating = rating;
        this.topListPos = topListPos;
        this.seller = seller;
  
    }

}
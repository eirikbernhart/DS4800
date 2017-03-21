export class ListItem {

    private name: string;
    private place: number;
    private starRating;

    constructor(name, place) {
        console.log("nyForingObject constructor ran!");

        this.name = name;
        this.place = place;
        this.starRating = "star-4.5.png";
  
    }
    
}
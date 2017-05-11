import { Dish } from '../details-page/dish';

export class MockedDishes {

    public peppesDishes = [];
    public bigHornDishes = [];
    
    constructor() {

        this.peppesDishes.push(
            new Dish("Easy Rider", 134, "Tacokrydret kjøttdeig, saftige tomatskiver og rødløk.",
            "tacoPizza.jpg", 3.800, 1, "peppes"),
            new Dish("The Tropical", 134, "Pepperoni, ananas og oregano.",
             "theTropical.jpg", 1.200, "", "peppes"),
            new Dish("Heavy Heaven", 160,"Pepperoni, hvitløkskrydrede kjøttboller, marinert biffkjøtt, rødløk og oregano.",
             "heavyHeaven.jpg", 3.100, "",  "peppes")
        );

        this.bigHornDishes.push(
            new Dish("New York Strip", 379, 
            "Marmorert ytrefilet med fett lokk, spesielt ettertraktet for sin unike smak! Med aspargesbønner, rødløk, ferske gulrotstaver og valgfrie poteter.",
            "newYorkStrip.jpg", 3.100, 2, "bighorn")
        )
    }

}
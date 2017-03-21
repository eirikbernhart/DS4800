import { Dish } from '../details-page/dish';

export class MockedDishes {

    public peppesDishes = [];
    
    constructor() {
        this.peppesDishes.push(
            new Dish("Easy Rider", 134),
            new Dish("The Tropical", 134),
            new Dish("Moby Dick", 160)
        );
    }

}
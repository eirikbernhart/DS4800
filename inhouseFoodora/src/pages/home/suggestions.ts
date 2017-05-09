import { Suggestion } from '../home/suggestion';

export class Suggestions {

    public suggestions = [];
    
    
    constructor() {
        this.suggestions.push(
        new Suggestion("Peppes", "peppes.png"),
        new Suggestion("Big Horn", "heavyHeaven.jpg"),
        new Suggestion("Peppes", "heavyHeaven.jpg")
      );
    }

}
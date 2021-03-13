import { action, observable } from 'mobx';


enum Colour {
  BLUE = "blue",
  GREEN = "green",
  PURPLE = "purple"
}


export class AppState {
  public myEnum = Colour.BLUE;

  constructor() {
    this.doTheThing(Colour.GREEN);
  }

  public doTheThing(sth: Colour) {
    console.log(sth);
  }
}

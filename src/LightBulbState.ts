import { action, observable } from 'mobx';

export class LightBulbState {

  @observable public lightOn = false;

  @action public lightBulbSwitch(){
    this.lightOn = !this.lightOn;
  }

}
import { action, observable } from 'mobx';

export class AppState {
  @observable public redOn = false;
  @observable public yellowOn = false;
  @observable public blueOn = false;
  @observable public greenOn = false;

  @action public lightBulbSwitchRed(){
    this.redOn = !this.redOn;
  }

  @action public lightBulbSwitchYellow(){
    this.yellowOn = !this.yellowOn;
  }

  @action public lightBulbSwitchBlue(){
    this.blueOn = !this.blueOn;
  }

  @action public lightBulbSwitchGreen(){
    this.greenOn = !this.greenOn;
  }
}

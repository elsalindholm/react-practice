import { observer } from 'mobx-react';
import React from 'react';
import { AppState } from './AppState';
import { LightBulb } from './LightBulbComponent';
import { SwitchComponent } from './SwitchComponent';

@observer
export class App extends React.PureComponent {
  private readonly appState = new AppState();
  public render() {
    return (
      <div className={"container"}>
        <div className={"light-container"}>
          <LightBulb on={this.appState.redOn} className={"red"} />
          <LightBulb on={this.appState.yellowOn} className={"yellow"}/>
          <LightBulb on={this.appState.blueOn} className={"blue"}/>
          <LightBulb on={this.appState.greenOn} className={"green"}/>
        </div>
        <div className={"button-container"}>
          <SwitchComponent onClick={() => this.appState.lightBulbSwitchRed()} />
          <SwitchComponent onClick={() => this.appState.lightBulbSwitchYellow()} />
          <SwitchComponent onClick={() => this.appState.lightBulbSwitchBlue()} />
          <SwitchComponent onClick={() => this.appState.lightBulbSwitchGreen()} />
        </div>
      </div>
    );
  }
}

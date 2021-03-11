import { observer } from 'mobx-react';
import React from 'react';
import { AppState } from './AppState';
import { LightBulb } from './LightBulbComponent';
import { SwitchComponent } from './SwitchComponent';
import { LightBulbState } from './LightBulbState';
import { ButtonPanel } from './ButtonPanel';

@observer
export class App extends React.PureComponent {

private readonly appState = new AppState();

  public render() {
    return (
      <div className={"container"}>
        <div className={"light-container"}>
          {this.renderLights()}
        </div>
        <div className={"button-container"}>
          <ButtonPanel appState={this.appState} />
        </div>
      </div>
    );
  }

  private renderLights() {
    const lightComps: JSX.Element[] = [];
    this.appState.lights.forEach((light) => {
      lightComps.push(
        <LightBulb className={light.className} onDelete={() => this.appState.removeLight(light.id)} />
      );
    });
    return lightComps;
  }
}

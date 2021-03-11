import { observer } from 'mobx-react';
import React from 'react';
import './light-bulb-component.scss';
import { LightBulbState } from './LightBulbState';
import { SwitchComponent } from './SwitchComponent';
import { AppState } from './AppState'

interface LightProps {
  className: string;
  onDelete: () => void;
}

@observer export class LightBulb extends React.PureComponent<LightProps> {
  
  private readonly lightBulbState = new LightBulbState();
  
  public render() {
    let lightClass = "";

    if(this.lightBulbState.lightOn) {
      lightClass = "switched-on";
    }

    return (
    <div className={"bulb-button-container"}>
      <div className={"light-bulb " + lightClass + " " + this.props.className}></div>
      <SwitchComponent onClick={() => this.lightBulbState.lightBulbSwitch()} />
      <button onClick={this.props.onDelete}>Delete</button>
    </div>);
  }
}
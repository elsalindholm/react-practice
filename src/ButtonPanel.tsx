import { observer } from 'mobx-react';
import React from 'react';
import { AppState } from './AppState';
import './button-panel.scss';


interface BPProps {
  appState: AppState;
}

@observer export class ButtonPanel extends React.PureComponent<BPProps> {

  public render() {
    return (<div className={"button-panel"}> 
      <button className={"new-light-button"} onClick={() => this.props.appState.addLight("red")} >Add red</button>
      <button className={"new-light-button"} onClick={() => this.props.appState.addLight("yellow")} >Add yellow</button>
      <button className={"new-light-button"} onClick={() => this.props.appState.addLight("blue")}>Add blue</button>
      <button className={"new-light-button"} onClick={() => this.props.appState.addLight("green")}>Add green</button>
    </div>);
  }
}
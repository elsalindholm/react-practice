import { observer } from 'mobx-react';
import React from 'react';
import { AppState } from './AppState';
import './switch-component.scss';

interface SwitchProps {
  onClick: () => void;
}


@observer
export class SwitchComponent extends React.PureComponent<SwitchProps> {
  public render() {
    return (
    <div className={'switch-component'}>
      
        <button onClick={this.props.onClick}>Switch</button>
    </div>
    );
  }
}
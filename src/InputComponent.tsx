import { observer } from 'mobx-react';
import React from 'react';
import { AppState } from './AppState';
import './input-component.scss';

interface InputProps {
  appState: AppState;
}


@observer
export class InputComponent extends React.PureComponent<InputProps> {
  public render() {
    const { appState } = this.props;
    return (
    <div className={'input-component'}>
      
        <input className={'input-field'} placeholder={'write here'} value={appState.inputText} 
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => appState.setInputText(event.target.value)} />
      
        <button className={'add-item-button'} onClick={() => appState.addToDoItem()} disabled={appState.inputText === ""} > Add +</button>
    </div>
    );
  }
}
import { observer } from 'mobx-react';
import React from 'react';
import { AppState } from './AppState';

@observer
export class App extends React.PureComponent {
  private readonly appState = new AppState();
  public render() {
    return (
      <div className={"container"}>
        hello
      </div>
    );
  }
}

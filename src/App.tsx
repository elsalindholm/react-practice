import { observer } from 'mobx-react';
import React from 'react';

import { AppState } from './AppState';
import { Header } from './Header';

@observer
export class App extends React.PureComponent {
  private readonly appState = new AppState();

  public render() {
    return (
      <div className={'app-root'}>
        <Header />
        <button onClick={() => this.appState.incCount()}>Clicks: {this.appState.count}</button>
      </div>
    );
  }
}

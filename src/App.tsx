import { observer } from 'mobx-react';
import React from 'react';
import { AppState } from './AppState';
import { Header } from './Header';
import './app.scss';
import { HomePage } from './HomePage';


@observer
export class App extends React.PureComponent {
  private readonly appState = new AppState();
  public render() {
    return (
      <div>
        
        <div className={'header-container'}>
        <Header/>
        </div>

        <div className={"body"}>
          <HomePage />
        </div>

        <footer>
          <div>Footer</div>
        </footer>

      </div>
    );
  }
}

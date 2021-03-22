import { observer } from 'mobx-react';
import React from 'react';
import { AppState } from './AppState';
import { Header } from './Header';
import './app.scss';


@observer
export class App extends React.PureComponent {
  private readonly appState = new AppState();
  public render() {
    return (
      <div className={'header-container'}>
        
        <Header/>

        <body>
          <div className={'image-banner'}>Image</div>
          <div className={'brand-blurb'}>Blurb</div>
          <div className={'new-arrivals'}>New Arrivals</div>
          <div className={'brand-blurb'}>Blurb</div>
          <div className={'image-banner'}>Image</div>

        </body>

        <footer>
          <div>Footer</div>
        </footer>

      </div>
    );
  }
}

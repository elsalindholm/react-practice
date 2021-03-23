import React from 'react';
import './header.scss';
import { Page, AppState } from './AppState';
import { App } from './App';
import { observer } from 'mobx-react';

interface HeaderProps {
  appState: AppState;
}


@observer export class Header extends React.PureComponent<HeaderProps> {

  render() {
    const {appState} = this.props;

    return(
      <header>
        <div className={'logo-container'}>
          <div className={'nav-bar-logo-text'}>aina</div>
        </div>
        <div className={'nav-bar-button-container'}>
          <button className={'nb-button'} onClick={() => appState.setCurrentPage(Page.HOME)}>home</button>
          <button className={"nb-button"} onClick={() => appState.setCurrentPage(Page.SHOP)}>shop</button>
          <button className={"nb-button"} onClick={() => appState.setCurrentPage(Page.GALLERY)}>gallery</button>
          <button className={"nb-button"} onClick={() => appState.setCurrentPage(Page.SUSTAINABILITY)}>sustainability</button>
          <button className={"nb-button"} onClick={() => appState.setCurrentPage(Page.ABOUT)}>about</button>
        </div>
      </header>
    );
  }
}
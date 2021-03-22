import React from 'react';
import './header.scss';



export class Header extends React.PureComponent {

  render() {

    return(
      <header>
        <div className={'logo-container'}>
          <div className={'nav-bar-logo-text'}>aina</div>
        </div>
        <div className={'nav-bar-button-container'}>
          <button className={"nb-button"}>shop</button>
          <button className={"nb-button"}>gallery</button>
          <button className={"nb-button"}>sustainability</button>
          <button className={"nb-button"}>about</button>
        </div>
      </header>
    );
  }
}
import { observer } from 'mobx-react';
import React from 'react';
import { AppState, Page } from './AppState';
import { Header } from './Header';
import './app.scss';
import { HomePage } from './HomePage';
import { isThisTypeNode } from 'typescript';
import { AboutPage } from './AboutPage';
import { ShopPage } from './ShopPage';
import { GalleryPage } from './GalleryPage';
import { SustainabilityPage } from './SustainabilityPage';


@observer
export class App extends React.PureComponent {
  private readonly appState = new AppState();
  
  public render() {

    let page: JSX.Element;
    switch(this.appState.currentPage) {
      case Page.HOME:
        page = <HomePage />;
        break;
      case Page.SHOP:
        page = <ShopPage />
        break;
      case Page.GALLERY:
        page = <GalleryPage />
        break;
      case Page.SUSTAINABILITY:
        page = <SustainabilityPage />
        break;
      case Page.ABOUT:
        page = <AboutPage />;
        break;
      default:
        page = <HomePage />
      break;
    }

    return (
      <div>
        
        <div className={'header-container'}>
        <Header appState={this.appState}/>
        </div>

        <div className={"body"}>
          {page}
        </div>

        <footer>
          <div className={'footer-nb-div'}>
            <a onClick={() => this.appState.setCurrentPage(Page.HOME)}>home</a>
            <a onClick={() => this.appState.setCurrentPage(Page.SHOP)}>shop</a>
            <a onClick={() => this.appState.setCurrentPage(Page.GALLERY)}>gallery</a>
            <a onClick={() => this.appState.setCurrentPage(Page.SUSTAINABILITY)}>sustainability</a>
            <a onClick={() => this.appState.setCurrentPage(Page.ABOUT)}>about</a>
          </div>
          <div className={'footer-nb-div'}>
            <p>Instagram</p>
            <p>Facebook</p>
          </div>
          <div className={'footer-nb-div'}>
            <p>Shipping</p>
            <p>Sizing</p>
            <p>Contact</p>
          </div>
        </footer>

      </div>
    );
  }
}

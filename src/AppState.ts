import { action, observable } from 'mobx';
import './shop-page.scss';

export enum Page {
  HOME = "home",
  SHOP = "shop",
  GALLERY = "gallery",
  SUSTAINABILITY = "sustainability",
  ABOUT = "about",
}

export class AppState {
  @observable public currentPage = Page.SHOP;

  @action public setCurrentPage(page: Page) {
    this.currentPage = page;
  }

}

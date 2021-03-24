import { action, observable } from 'mobx';

export enum Page {
  HOME = 'home',
  SHOP = 'shop',
  GALLERY = 'gallery',
  SUSTAINABILITY = 'sustainability',
  ABOUT = 'about',
}

export class AppState {
  @observable public currentPage = Page.ABOUT;

  @action public setCurrentPage(page: Page) {
    this.currentPage = page;
  }
}

import React from 'react';

export class ShopPage extends React.PureComponent {

  render() {
    return (
      <div className={'shop-page-container'}>
        <div className={'shop-header'}>
          <div className={'shop-blurb'}>
            <h2>
              aina shop
            </h2>
            <p>Welcome to the aina lifestyle shop.</p>
          </div>
          <div className={'shop-navigation'}>
            <a className={'shop-nav-link'}>Cushion Covers</a>
            <a className={'shop-nav-link'}>Reusable Masks</a>
            <a className={'shop-nav-link'}>Zero Waste Collars</a>
            <a className={'shop-nav-link'}>Zero Waste Baskets</a>
          </div>
        </div>
        <div className={'shop-display'}>

        </div>
      </div>
    )
  }
}
import React from 'react';
import './social-media.scss';

export class SocialMedia extends React.PureComponent {
  render() {
    return (
      <div className={'so-me-container'}>
        <div className={'so-me-header'}>
          <h2>Follow us on social media</h2>
        </div>
        <div className={'so-me-display'}>
          <div className={'ig-post'}></div>
          <div className={'ig-post'}></div>
          <div className={'ig-post'}></div>
          <div className={'ig-post'}></div>
          <div className={'ig-post'}></div>
        </div>
      </div>
    );
  }
}

import React from 'react';
import { SocialMedia } from '../General Components/SocialMedia';
import '../Main Pages/home-page.scss';

export class HomePage extends React.PureComponent {
  render() {
    return (
      <div className={'home-page-container'}>
        <div className={'image-banner'}>Image</div>
        <div className={'brand-blurb'}>
          <h2>aina</h2>
          <br></br>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis mollis elit. In
            tempor maximus lacus, quis bibendum lorem congue eu. Cras in erat aliquam, tincidunt
            orci sed, luctus justo. Mauris quis diam eget felis tempus tempor at eu turpis. Etiam
            sed tristique purus. Praesent rhoncus dolor elementum dapibus lacinia. Curabitur risus
            ipsum, vulputate porta quam vel, semper congue lorem. Morbi dignissim posuere viverra.
            Nullam venenatis eros sed sapien egestas mattis. Suspendisse efficitur lorem non diam
            eleifend, a aliquam mauris cursus. Ut erat eros, imperdiet at pellentesque placerat,
            tincidunt eu risus. Ut vel nunc id enim sodales ornare. Integer dictum lectus vehicula
            fringilla eleifend. Nunc velit elit, cursus ac metus eget, molestie rutrum lacus.
          </p>
        </div>
        <div className={'new-arrivals'}>New Arrivals</div>
        <div className={'brand-blurb'}>
          <h2>Sustainability</h2>
          <br></br>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis mollis elit. In
            tempor maximus lacus, quis bibendum lorem congue eu. Cras in erat aliquam, tincidunt
            orci sed, luctus justo. Mauris quis diam eget felis tempus tempor at eu turpis. Etiam
            sed tristique purus. Praesent rhoncus dolor elementum dapibus lacinia. Curabitur risus
            ipsum, vulputate porta quam vel, semper congue lorem. Morbi dignissim posuere viverra.
            Nullam venenatis eros sed sapien egestas mattis. Suspendisse efficitur lorem non diam
            eleifend, a aliquam mauris cursus. Ut erat eros, imperdiet at pellentesque placerat,
            tincidunt eu risus. Ut vel nunc id enim sodales ornare. Integer dictum lectus vehicula
            fringilla eleifend. Nunc velit elit, cursus ac metus eget, molestie rutrum lacus.
          </p>
        </div>
        <div className={'image-banner'}>Image</div>
        <SocialMedia />
      </div>
    );
  }
}

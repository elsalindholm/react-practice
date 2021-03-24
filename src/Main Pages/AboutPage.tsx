import React from 'react';
import { SocialMedia } from '../General Components/SocialMedia';
import '../Main Pages/about-page.scss';

export class AboutPage extends React.PureComponent {
  render() {
    return (
      <div className={'about-page'}>
        <div className={'about-blurb'}>
          <h2>We are aina lifestyle</h2>
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
        <div className={'contact-info'}>
          <h2>Contact</h2>
          <br></br>
          <p>
            If you have any questions, suggestions, feedback or custom order requests, please get in
            touch with us via email at blablabla@blahdeblah.com.
          </p>
        </div>
        <SocialMedia />
      </div>
    );
  }
}

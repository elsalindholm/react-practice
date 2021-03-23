import React from 'react';
import './about-page.scss';


export class AboutPage extends React.PureComponent {

  render() {
    return (
      <div className={'about-page'}>

        <div>
          About Blurb
        </div>
        <div>
          Contact Details
        </div>
        <div>
          Social Media
        </div>

      </div>
    )
  }
}
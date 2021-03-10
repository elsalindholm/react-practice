import { observer } from 'mobx-react';
import React from 'react';
import './light-bulb-component.scss';

interface LightProps {
  on: boolean;
  className: string;
}

@observer export class LightBulb extends React.PureComponent<LightProps> {
  
  public render() {
    console.log("on", this.props.on);
    let lightClass = "";

    if(this.props.on) {
      lightClass = "switched-on";
    }

    return <div className={"light-bulb " + lightClass + " " + this.props.className}></div>;
  }
}
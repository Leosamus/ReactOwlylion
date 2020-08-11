import React from 'react';
import './TechnologiesLine.scss';
import { Technologies } from 'models/technologies.js'

import angular from 'images/techno/angular.svg';
import azure from 'images/techno/azure.svg';
import csharp from 'images/techno/csharp.svg';
import js from 'images/techno/js.svg';
import unity from 'images/techno/unity.svg';
import php from 'images/techno/php.png';
import react from 'images/techno/react.svg';

class TechnologiesLine extends React.Component {
  render() {
    let images =  this.props.technologies.map((techno) => (
      <img src={TechnologiesImages[techno]} alt="techno"/>
    ));

    return (
      <div className="app-technologies-line">
        <p className="content">
          {this.props.title} :
        </p>
        {images}
      </div>
    )
  }
}

export default TechnologiesLine;

const TechnologiesImages = {
  [Technologies.Angular]: angular,
  [Technologies.Azure]: azure,
  [Technologies.Csharp]: csharp,
  [Technologies.Js]: js,
  [Technologies.React]: react,
  [Technologies.Unity]: unity,
  [Technologies.Php]: php
}
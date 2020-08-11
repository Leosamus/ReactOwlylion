import React from 'react';
import './ToTopButton.scss';
import { DownArrow } from '../../../resources/svg';

class ToTopButton extends React.Component {
  render() {
    return (
      <div className="to-top-button-wrapper">
        <div className="to-top-button">
          <a href="#top">
            <DownArrow className="arrow-svg"/>
          </a>
        </div>
      </div>
    )
  }
}

export default ToTopButton;

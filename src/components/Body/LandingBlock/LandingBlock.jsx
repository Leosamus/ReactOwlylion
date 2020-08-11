import React from 'react';
import './LandingBlock.scss';
import profil from 'images/hylian_mesmoudi.jpg';
import background from 'images/abstract_red_background.jpg';  
import { DownArrow } from '../../../resources/svg';

class LandingBlock extends React.Component {
  render() {
    return (
      <div className="app-landing-block" id="top" style={{ backgroundImage: `url(${background})` }}>
        <div className="body">
          <div className="text-container">
            <div>
              <h1>Hylian Mesmoudi</h1>
              <h2>Développeur Unity / .NET / Angular</h2>
            </div>
            <p className="content">
              Développeur... mais surtout passionné ! Sur ce site, vous trouverez une liste non-exhaustive des différentes expériences 
              professionnelles ou personnelles que j'ai pu avoir.
            </p>
          </div>
          <div className="photo-container">
            <img src={profil} alt="Hylian Mesmoudi"></img>
          </div>
        </div>
        <div className="down-arrow">
          <DownArrow />
        </div>
      </div>
    )
  }
}

export default LandingBlock;

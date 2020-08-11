import React from 'react';
import './SocialNetworksLine.scss';

import github from 'images/network/github.svg';
import twitter from 'images/network/twitter.svg';
import linkedin from 'images/network/linkedin.svg';
import gmail from 'images/network/gmail.svg';

class SocialNetworksLine extends React.Component {
  render() {
    return (
      <div className="app-social-networks-line">
        <p className="content">
          Mes réseaux :
        </p>
        <img src={github} alt="Github" onClick={() => window.open("https://github.com/Leosamus")}/>
        <img src={twitter} alt="Twitter" onClick={() => window.open("https://twitter.com/OWLHylian")}/>
        <img src={linkedin} alt="LinkedIn" onClick={() => window.open("https://fr.linkedin.com/in/hylian-mesmoudi")}/>
        <img src={gmail} alt="Gmail" onClick={() => window.open("mailto:hylian.mesmoudi@gmail.com")}/>
      </div>
    )
  }
}

export default SocialNetworksLine;
import React from 'react';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p className="content">
          Copyright &copy; Hylian Mesmoudi 2020
        </p>
        <p className="content">
          Ce site a été fait en React. Il m'a permis de découvrir cette technologie.
          Vous pouvez retrouver son code open source <a href="https://github.com/Leosamus/ReactOwlylion">ici</a>.
        </p>
      </footer>
    )
  }
}

export default Footer;

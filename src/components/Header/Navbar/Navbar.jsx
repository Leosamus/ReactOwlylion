import React from 'react';
import './Navbar.scss';
import styled from 'styled-components'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPercentage: 20
    };
  }

  onScroll = () => {
    const scrollPrecentage = this.computeScrollPercentage();
    this.setScrollPercentage(scrollPrecentage);
  }

  computeScrollPercentage() {
    var body = document.body,
        html = document.documentElement;

    var height = Math.max( body.scrollHeight, body.offsetHeight, 
      html.clientHeight, html.scrollHeight, html.offsetHeight );
    var currentScroll = window.scrollY + window.innerHeight;

    if (currentScroll > height) {
      return 100;
    }

    const ratio = currentScroll / height;

    return ratio * 100;
  }

  setScrollPercentage(percentage) {
    this.setState({
      scrollPercentage: percentage
    });
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  render() {
    return (
      <Nav onScroll={this.onScroll}>
        <NavProgressBar scrollPercentage={this.state.scrollPercentage}/>
        <div className="sitename">
          OWLYLION - FREELANCE
        </div>
        <NavLinksContainer>
          <NavLink>
            Présentation
          </NavLink>
          <NavLink>
            Expérience
          </NavLink>
          <NavLink>
            Me contacter
          </NavLink>
        </NavLinksContainer>
      </Nav>
    )
  }
}

export default Navbar;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  z-index: 2;

  width: 100%;
  height: 55px;
  box-sizing: border-box;
  padding: 10px 28px;

  color: var(--color-light-grey);
  font-size: 19px;

  overflow: hidden;
`;

const NavProgressBar = styled.div`
  position: absolute;
  width: 200%;
  height: 100%;
  top:0;
  left: ${props => -100 + props.scrollPercentage}%;
  z-index: -1;

  transition: left 0.2s;

  background: var(--color-grey);
  background: -moz-linear-gradient(45deg, var(--color-light-red) 0%, var(--color-light-red) 50%, var(--color-grey) 50%, var(--color-grey) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(45deg, var(--color-light-red) 0%,var(--color-light-red) 50%,var(--color-grey) 50%,var(--color-grey) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(45deg, var(--color-light-red) 0%,var(--color-light-red) 50%,var(--color-grey) 50%,var(--color-grey) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
`;

const NavLinksContainer = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: row;
`;

const NavLink = styled.div`
  padding: 5px 15px;
`;

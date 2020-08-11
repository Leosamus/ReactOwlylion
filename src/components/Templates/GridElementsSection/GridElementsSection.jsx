import React from 'react';
import styled from 'styled-components'
import './GridElementsSection.scss';
import SiteSection from '../SiteSection/SiteSection';

class GridElementsSection extends React.Component {
  render() {
    return (
      <SiteSection title={this.props.title} anchor={this.props.anchor}>
        <Grid columns={this.props.columns}>
          { this.props.children }
        </Grid>
      </SiteSection>
    )
  }
}

export default GridElementsSection;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  grid-gap: 30px;

  max-width: 1100px;
  margin: auto;
`;
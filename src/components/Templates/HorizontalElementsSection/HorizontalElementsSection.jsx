import React from 'react';
import './HorizontalElementsSection.scss';
import SiteSection from '../SiteSection/SiteSection';

class HorizontalElementsSection extends React.Component {
  render() {
    return (
      <div className="app-horizontal-elements-section">
        <SiteSection title={this.props.title} anchor={this.props.anchor}>
          <div className="elements">
            { this.props.children }
          </div>
        </SiteSection>
      </div>
    )
  }
}

export default HorizontalElementsSection;
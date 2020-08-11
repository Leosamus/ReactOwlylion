import React from 'react';
import './SiteSection.scss';
import SectionTitle from './SectionTitle/SectionTitle';

class SiteSection extends React.Component {
  render() {
    return (
      <div className="app-site-section">
        <SectionTitle title={this.props.title} />
        <div className="body">
          <div className="container">
            { this.props.children }
          </div>
        </div>
      </div>
    )
  }
}

export default SiteSection;
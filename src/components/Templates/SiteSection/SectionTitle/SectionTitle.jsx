import React from 'react';
import './SectionTitle.scss';

class SectionTitle extends React.Component {
  render() {
    return (
      <div className="app-section-title">
        <h2>{ this.props.title }</h2>
      </div>
    )
  }
}

export default SectionTitle;
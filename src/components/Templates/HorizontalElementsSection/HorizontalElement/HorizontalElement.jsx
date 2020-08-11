import React from 'react';
import './HorizontalElement.scss';

class HorizontalElement extends React.Component {
  render() {
    let subtitle;
    if (this.props.subtitle) {
      subtitle = (<h3>{ this.props.subtitle }</h3>);
    }
    
    return (
      <div className="app-horizontal-element">
        <div className="titles">
          <h2>{ this.props.title }</h2>
          { subtitle }
        </div>
        <div className="body">
          <div className="picture">
            <img src={this.props.picture} alt={this.props.title}/>
          </div>
          <div className="description">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default HorizontalElement;
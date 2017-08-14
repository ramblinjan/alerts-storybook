import React, { Component } from 'react';
import './styles.css';

class Alert extends Component {
  render() {
    return (
      <div className={'alert alert-' + (this.props.type || 'primary')} role="alert">
        {this.props.message}
      </div>
    );
  }
}

export default Alert;

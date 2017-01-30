import React, { Component, PropTypes } from 'react';
import {} from './JsonEditor.css';

export default class JsonEditor extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div className="json-editor">
        <textarea
          rows="20"
          className="editing-area"
          value={this.props.value}
          onChange={(e) => this.props.onChange(e)}
        />
      </div>
    );
  }
}

import React, { Component } from 'react';


class UiInput extends Component {
  render() {
    return (
      <div className="ui_input">
        <input  type={this.props.type} 
                className="inputText" 
                name={this.props.name}
                required
                title={this.props.title}
                disabled={this.props.disabled}
                onChange={this.props.onInput}
                />
        <span>{this.props.title}</span>
      </div>
    );
  }
}

export default UiInput;

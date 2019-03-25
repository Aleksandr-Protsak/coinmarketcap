import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
        <div className="ui_input ui_button">
        <button type="button" 
                onClick={this.props.buttonClick}
                disabled={this.props.disabled}
                title={this.props.title}
                >
                Button</button>
    </div>
    );
  }
}

export default Button;
import React, { Component } from 'react';

class ButtonSave extends Component {
  render() {
    return (
        <div className="ui_input save_btn">
        <button type="button" 
                onClick={this.props.buttonClick}
                disabled={this.props.disabled}
                title={this.props.title}
                >
                Save</button>
    </div>
    );
  }
}

export default ButtonSave;
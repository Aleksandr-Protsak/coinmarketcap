import React, { Component } from 'react';

class UiSelect extends Component {
  render() {
    var options;
    if (Array.isArray(this.props.option)){
      options = this.props.option.map(item => {
      return (<option key={item}>{item}</option>)
    });
    }else{
      const country = Object.keys(this.props.option);
        options = country.map(item => {
        return (<option key={item}>{item}</option>)
      });
    };
     return (
      <div className="ui_input ui_select">
        <select className="inputText select_arrow" 
                name={this.props.name}
                required
                title={this.props.title}
                disabled={this.props.disabled} 
                onChange={this.props.onSelect}
        >
          <option></option>
          {options}
        </select>
        <span>{this.props.title}</span>
      </div>
    );
  }
}

export default UiSelect;
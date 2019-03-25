import React, { Component } from 'react';

import UiInput from '../layouts/ui/ui-input/Ui-input'
import UiSelect from '../layouts/ui/ui-input/Ui-select'
import Button from '../layouts/ui/ui-button/Ui-button'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        selectItem: '',
        selectOption: ['Alex', 'Sergii', 'Vlad', 'Iryna', 'Bill', 'Jack'],
        disabled: false
    };
    this.onChangeInput = this.onChangeInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  onChangeInput(e){
    const name = e.target.name
    this.setState({[name]: e.target.value});
  };
  handleClick(e){
    e.preventDefault();
    const formPayload = {
      Name: this.state.name,
      Selected: this.state.selectItem
    };
    alert(formPayload.Name + ' ' + formPayload.Selected);
    document.forms.ui_form.reset();
  }
  render() {
    return (
      <div className="wrapper">
       <h1 className="wrapper-title">UI Components</h1>
       <div className="ui_content">
            <form name="ui_form">
              <UiInput onInput={this.onChangeInput} 
                                      title={'Name'}
                                      disabled={this.state.disabled}
                                      name={'name'}
              />
              <UiSelect  onSelect={this.onChangeInput}  
                                    title={'Name'}
                                    disabled={this.state.disabled}
                                    name={'selectItem'}
                                    option={this.state.selectOption}
              /> 
              <Button buttonClick={this.handleClick}
                      title={'Button'}
                      disabled={this.state.disabled}
              />
            </form>
        </div>
      </div>
    );
  }
}

export default Main;

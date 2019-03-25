import React, { Component } from 'react';
import firebase from 'firebase';
import {config} from './../../firebase/Firebase';
import Fotocard from '../layouts/ui/ui-cards/Uifotocard';
import UiInput from '../layouts/ui/ui-input/Ui-input';
import UiSelect from '../layouts/ui/ui-input/Ui-select';
import ButtonSave from '../layouts/ui/ui-button/Ui-button-save';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        imgUrl: null,
        firstName: '',
        lastName: '',
        phoneNumber: '',
        country: '',
        city: '',
        adress: '',
        postCode: '',
        disabled: false,
        countryOptions: {'USA': ['New York', 'Washington', 'Florida'],
                         'Ukraine': ['Kyiv', 'Vinnitsya', 'Lviv'], 
                         'Canada': ['Toronto'],
                         'Poland': ['Warsaw'],
                         'Estonia': ['Tallin']
                        },
        cityOptions: ''
        };
    this.handleClick = this.handleClick.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.handleSubmitImg = this.handleSubmitImg.bind(this);
    this.firebaseApp = firebase.initializeApp(config);
  };
  handleSubmitImg(e){
    e.preventDefault();
    const target = e.target.files;
    const selectedImg =target[0];
    if(target.length > 0){
      if(!selectedImg.type.match('image.*')){
        alert("It's not image!");
        return false;
      }else{
        const url = URL.createObjectURL(selectedImg);
        this.setState({imgUrl: url});
      }
    }
  }
  onChangeInput(e){
    const name = e.target.name;
    if(name === 'country'){
      const countryOption = this.state.countryOptions;
      let selected = e.target.value;
      let countrySelect = countryOption[selected];
      this.setState({cityOptions: countrySelect});
    }
    this.setState({[name]: e.target.value});
  };
  handleClick(e){
    e.preventDefault();
    if(this.state.firstName === '' || this.state.lastName === '' || this.state.phoneNumber === '' || this.state.country === ''
    || this.state.city === '' || this.state.adress === '' || this.state.postCode === ''){
         alert('Fill in all fields!!!');
    }else{
        const db = firebase.firestore();
        db.collection("users").doc(this.state.firstName + ' ' + this.state.lastName).set({
            fotoCard: this.state.imgUrl,
            firstname: this.state.firstName,
            lastname: this.state.lastName,
            phoneNumber: this.state.phoneNumber,
            country: this.state.country,
            city: this.state.city,
            adress: this.state.adress,
            postCode: this.state.postCode
        })
        .then(function() {
          document.forms.usercreate.reset();
          alert("Your data has been successfully sent");
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }
  }
  render() {
    return (
       <div className="wrapper width_ui">
        <h1 className="wrapper-title">UI Components</h1>
        <div className="ui_content dimension">
          <div className="user_content">
              <Fotocard 
                addImg={this.handleSubmitImg}
                url={this.state.imgUrl}
              />
              <form name="usercreate">
              <ul className="form_row">
                        <li>
                          <UiInput  onInput={this.onChangeInput} 
                                    title={'First name'}
                                    disabled={this.state.disabled}
                                    name={'firstName'}
                                    type={'text'}
                          />
                          <UiInput  onInput={this.onChangeInput} 
                                    title={'Last name'}
                                    disabled={this.state.disabled}
                                    name={'lastName'}
                                    type={'text'}
                          />
                          <UiInput  onInput={this.onChangeInput}  
                                    title={'Phone number'}
                                    disabled={this.state.disabled}
                                    name={'phoneNumber'}
                                    type={'number'}
                          />
                        </li>
                        <li>
                          <UiSelect onSelect={this.onChangeInput}  
                                    title={'Country'}
                                    disabled={this.state.disabled}
                                    name={'country'}
                                    option={this.state.countryOptions}
                          /> 
                          <UiSelect onSelect={this.onChangeInput}  
                                    title={'City'}
                                    disabled={this.state.disabled}
                                    name={'city'}
                                    option={this.state.cityOptions}
                          />
                          <UiInput onInput={this.onChangeInput} 
                                   title={'Adress'}
                                   disabled={this.state.disabled}
                                   name={'adress'}
                                   type={'text'}
                          />
                        </li>
                        <li>
                          <UiInput  onInput={this.onChangeInput} 
                                    title={'Post code'}
                                    disabled={this.state.disabled}
                                    name={'postCode'}
                                    type={'number'}
                          />
                          <ButtonSave buttonClick={this.handleClick}
                                      title={'Save'}
                                      disabled={this.state.disabled}
                          />
                        </li>
                    </ul>
              </form>
          </div>
        </div>
       </div>
    );
  }
}

export default Profile;

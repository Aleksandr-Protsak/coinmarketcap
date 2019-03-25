import React, { Component } from 'react';
import Avatar from './../../../../assets/avatar_user.png';

class Fotocard extends Component {
  render() {
    return (
        <div className="foto_download">
        <div className="user_foto ui_input">
            <div className="foto"><img  alt="Avatar" 
                                        src={this.props.url === null? Avatar : this.props.url}
                                    />
            </div>
            <input type="file" 
                   name="file" 
                   id="file" 
                   className="inputfile" 
                   onChange={this.props.addImg}
                    />
            <label htmlFor="file">Select foto</label>
        </div>
    </div>
    );
  }
}

export default Fotocard;
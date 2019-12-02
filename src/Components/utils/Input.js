import React, { Component } from 'react';

class Input extends Component {
    render() {  
      return (
          <input 
          style={this.props.style}
          placeholder={this.props.placeholder}
          />
      )}}


 export default Input;
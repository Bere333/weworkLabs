import React, { Component } from 'react';


class Select extends Component {
     handleClick = (e)=> {
        e.preventDefault();
        console.log('The link was clicked.');
      }
  
    render() { 
        var style={
            textAlign:'center'
        } 
      return (
        <select name="select" style={this.props.style} onChange={this.props.Onclick}>
               <option value="razón" style={style} onClick={()=>{console.log('hola')}}>Razón de visita</option> 
               <option value="cita"  style={style} onClick={()=>{console.log('hola')}}>Tengo una cita</option>
               <option value="vendedor"  style={style} onClick={this.handleClick}>Soy vendedor</option>

        </select>
      )}}


 export default Select;
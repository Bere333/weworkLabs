import React, { Component } from 'react';
// import QR from '../utils/QR'
import BurgerMenu from '../utils/BurgerMenu';
import './Home.css';
import Input from '../utils/Input';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          valueInput: '',
          date:new Date(),
          
        };
      }
      handleClick = ()=> {
    
        console.log('this is:', this);
      }
    //   componentDidMount() {
    //     this.timerID = setInterval(
    //       () => this.tick(),
    //       1000
    //     );
    //   }
    
    //   componentWillUnmount() {
    //     clearInterval(this.timerID);
    //   }
    
    //   tick() {
    //     this.setState({
    //       date: new Date()
    //     });
    //   }
    
    changeValueSelect = e => {
        
        //   this.setState({
        //     valueInput: e.target.value
        //   });
          console.log(e)
        
      };
    render() {
     var style = {
         width:'15rem', 
         height:'4vh', 
         borderRadius:'10px', 
         textAlign:'center',
         marginTop:'2rem'
        }
          
          
      return (
          <section className="home-section">
              <BurgerMenu styles={{backgoundColor:'red'}}
              />
              <div>
                  <div className="box-input">
                  <h2>Hora de entrada: {this.state.date.toLocaleTimeString()}.</h2>
                      <Input 
                        placeholder="Introduce tu nombre"
                        style={style}
                        Onclick={this.changeValueSelect}
                        />
                        <select name="select" style={this.props.style} onChange={this.props.Onclick}>
               <option value="razón" style={style} onClick={this.handleClick}>Razón de visita</option> 
               <option value="cita"  style={style} onClick={(e) => this.handleClick(e)}>Tengo una cita</option>
               <option value="vendedor"  style={style} onClick={this.handleClick}>Soy vendedor</option>

        </select>
                                
                       
                        

                  </div>
              
              </div>
              

          </section>

      )}}
export default Home;
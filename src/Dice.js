import React, { Component } from 'react'
import './Dice.css'

class Dice extends Component {
    render() {
        return (
          <div>
            <i className={
            `Dice 
            fas fa-dice-${this.props.face} 
            ${this.props.rolling 
            ? 'shaking'
            : ''   
             }`}></i>
          </div>
        );
    }
}

export default Dice

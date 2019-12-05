import React, { Component } from 'react'
import Dice from './Dice'
import './RollDice.css'

class RollDice extends Component {
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    }

    state = {
        dice1: 'one',
        dice2: 'one',
        rolling: false
    }

    roll = () => {
        //pick 2 new rolls
        const newDice1 = this.props.sides[Math.floor((Math.random() * this.props.sides.length))]
        const newDice2 = this.props.sides[Math.floor((Math.random() * this.props.sides.length))]
        //setting the state
        this.setState({
            dice1: newDice1,
            dice2: newDice2,
            rolling: true
        })
        //wait one second, then set rolling to false
        setTimeout(() => {
          this.setState({
            rolling: false
          })
        }, 1000);
    }

    render() {
        return (
          <div className="RollDice">
            <div className="RollDice-container">
              <Dice face={this.state.dice1} rolling={this.state.rolling} />
              <Dice face={this.state.dice2} rolling={this.state.rolling} />
            </div>
            <button onClick={this.roll} disabled={this.state.rolling}>
              {this.state.rolling ? "Rolling..." : "Roll Dice!"}
            </button>
          </div>
        );
    }
}

export default RollDice

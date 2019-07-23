import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    money: 100,
    sushisEaten: []
  }

  payForSushi = (price) => {
    if (price <= this.state.money) {
      this.setState({
        money: this.state.money - price,
        sushisEaten: [...this.state.sushisEaten, 1]
      })
    }
  }

  render() {
    console.log("SUSHIS EATEN", this.state.sushisEaten)
    return (
      <div className="app">
        <SushiContainer money={this.state.money}payForSushi={this.payForSushi}/>
        <Table money={this.state.money} sushisEaten={this.state.sushisEaten} />
      </div>
    );
  }
}

export default App;
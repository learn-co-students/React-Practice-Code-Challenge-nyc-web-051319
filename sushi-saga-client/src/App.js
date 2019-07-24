import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    wallet: 10,
    sushiEaten: []
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushi => {
      this.setState({
        sushi: sushi
      })
    })
  }

  buySushi = (sushi) => {
    // decrease amount from wallet and add to new array of eaten sushis
    this.setState((prevState) => {
      return {
        wallet: prevState.wallet - sushi.price,
        sushiEaten: [...prevState.sushiEaten, sushi]
      }
    })
  }

  addMoney = (event, amount) => {
    event.preventDefault()
    // add new amount to wallet
    let newAmount = this.state.wallet + amount
    this.setState((prevState) => {
      return {
        wallet: newAmount
      }
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushiEaten={this.state.sushiEaten} sushi={this.state.sushi} wallet={this.state.wallet} buySushi={this.buySushi} />
        <Table wallet={this.state.wallet} addMoney={this.addMoney} sushiEaten={this.state.sushiEaten} />
      </div>
    );
  }
}

export default App;

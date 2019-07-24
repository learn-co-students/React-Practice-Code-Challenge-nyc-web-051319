import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    money: 100,
    startIndex: 0,
    eatenSushi: []
  }

  componentDidMount() {
    this.fetchSushis()
  }

  fetchSushis = () => {
    fetch(API)
    .then(r => r.json())
    .then(data => {
      this.setState({
        sushis: data
      })
    })
  }

  buySushi = (cost) => {
    this.setState({
      money: this.state.money - cost
    }) 
  }

  moreSushi = () => {
    this.setState({
      startIndex: this.state.startIndex + 4
    })
  }

  addPlate = (sushiObj) => {
    this.setState({
      eatenSushi: [...this.state.eatenSushi, sushiObj]
    })
  }
  

  render() {
    const {sushis, startIndex, eatenSushi} = this.state
    return (
      <div className="app">
        <SushiContainer  
          sushiList={sushis} 
          startIndex={startIndex} 
          moreSushi={this.moreSushi} 
          addPlate={this.addPlate}
          buySushi={this.buySushi}
          />
        <Table money={this.state.money} eatenSushi={eatenSushi} />
      </div>
    );
  }
}

export default App;
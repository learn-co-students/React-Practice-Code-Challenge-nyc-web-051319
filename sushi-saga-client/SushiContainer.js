import React, { Fragment, Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from "../components/Sushi";

class SushiContainer extends Component {

  state = {
    sushis: [],
    currentSushis: []
  }

  createSushiObj = (sushi) => {
    return {
      sushi: sushi,
      eaten: false
    }
  }

  get4Sushis = (sushis) => {
    console.log("get4 suhsi", sushis)
    const newSushis = sushis.slice(0,4)
   
    const currentSushis = newSushis.map(sushi => this.createSushiObj(sushi))
  
    this.setState({
      sushis: sushis.slice(4, sushis.length),
      currentSushis: currentSushis
    })
  }

  componentDidMount() {
    fetch("http://localhost:3000/sushis")
    .then(resp => resp.json())
    .then(sushis => this.get4Sushis(sushis))
  }

  createSushi(sushi) {
    return <Sushi key={sushi.sushi.id} name={sushi.sushi.name} img_url={sushi.sushi.img_url} price={sushi.sushi.price} eaten={sushi.eaten} eatSushi={()=>this.eatSushi(sushi)}/> 
  }

  eatSushi(sushi) {
    if(this.props.money >= sushi.sushi.price && !sushi.eaten){
      this.props.payForSushi(sushi.sushi.price)
      sushi.eaten = true
      const newCurrSushis = this.state.currentSushis.map(ele => {
        if(ele === sushi){
          return sushi
        }
        else{
          return ele
        }
      })
      this.setState({
        currentSushis: newCurrSushis
      })
    }
  }

  render(){
    return (
      <Fragment>
        <div className="belt">
          {this.state.currentSushis.map(sushi => this.createSushi(sushi))}
          <MoreButton sushis={this.state.sushis} get4Sushis={this.get4Sushis}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer
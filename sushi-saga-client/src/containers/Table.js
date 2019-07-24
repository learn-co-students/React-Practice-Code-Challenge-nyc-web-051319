import React, { Fragment } from 'react'
import Sushi from '../components/Sushi';

class Table extends React.Component {

  renderPlates = (array) => {
    return array.map((sushiObj, index) => {
      return <div key={sushiObj.id} className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  buySushi = () => {
    this.setState({
      money: this.prevState - this.sushi.price
    })
  }

  render() {
    return (
      <Fragment>
        <h1 className="remaining">
          You have: ${this.props.money} remaining!
      </h1>
        <div className="table">
          <div className="stack">
            {
              /* 
                 renderPlates takes an array 
                 and renders an empty plate
                 for every element in the array
              */
              this.renderPlates(this.props.eatenSushi)
            }
          </div>
        </div>
      </Fragment>
    )
  }
  
}

export default Table
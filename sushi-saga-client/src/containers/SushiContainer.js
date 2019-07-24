import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'

class SushiContainer extends React.Component {

  state = {
    shownSushi: []
  }

  displaySushi = () => {
    return this.props.sushiList.slice(this.props.startIndex, this.props.startIndex + 4).map(sushi => {
      return <Sushi key={sushi.id} sushi={sushi} buySushi={this.props.buySushi} addPlate={this.props.addPlate}/>
    })
  }
  

  // showNextSushis = () => {
  //   this.setState({
  //     shownSushi: this.displaySushi().slice(4, 7)
  //   })
  // }

  render() {
    return (
      <Fragment>
        <div className="belt">
          {
            this.displaySushi()
          }
          <MoreButton moreSushi={this.props.moreSushi}/>
        </div>
      </Fragment>
    )
  }
  
}

export default SushiContainer
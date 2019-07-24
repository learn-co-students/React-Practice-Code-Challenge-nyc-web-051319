import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  state = {
    sushiIndex: 0
  }

  showMore = () => {
    // change index of array in state everytime button is clicked
    this.setState((prevState) => {
      return {
        sushiIndex: prevState.sushiIndex + 4
      }
    })
  }

  renderSushi = () => {

    // const displaySushi =
    // return this.props.sushi.slice(this.state.sushiIndex, this.state.sushiIndex + 4)
    return this.props.sushi.slice(this.state.sushiIndex, this.state.sushiIndex + 4).map(sushi => {
      // check if sushi is eaten
      let eaten = this.props.sushiEaten.includes(sushi) ? true : false
      return <Sushi sushiEaten={eaten} wallet={this.props.wallet} sushi={sushi} buySushi={this.props.buySushi}  />
    })
  }

  componentDidUpdate() {
    // if reached end of array, change index in state to start again
    if (this.state.sushiIndex === this.props.sushi.length) {
      this.setState({
        sushiIndex: 0
      })
    }
  }

  render() {
    return (
      <Fragment>
        <div className="belt">
          {
            this.renderSushi()
          }
          <MoreButton showMore={this.showMore} />
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer

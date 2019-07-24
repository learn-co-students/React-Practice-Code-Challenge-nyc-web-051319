import React from 'react'


class Sushi extends React.Component {
 
  state = {
    eaten: false
  }
  
  handleClick = () => {
    this.setState({
      eaten: true
    })
  }

  render() {
    return (
      <div className="sushi">
        <div className="plate" onClick={() => {this.handleClick(); this.props.buySushi(this.props.sushi); this.state.eaten ? null : this.props.addPlate(this.props.sushi)}}>
          {this.state.eaten ? null : <img src={this.props.sushi.img_url} width="100%" alt="leavemealone" />}
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi
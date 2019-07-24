import React, { Fragment } from 'react'

const Sushi = (props) => {

  const eatSushi = () => {
    // if you have enough money and the sushi is not yet eaten
    // use the callback to decrease from users wallet
    if (props.wallet >= props.sushi.price && !props.sushiEaten) {
      props.buySushi(props.sushi)
    }
  }

  return (
    <div className="sushi">
      <div className="plate"
           onClick={eatSushi}>
        {
          /* Tell me if this sushi has been eaten! */
          props.sushiEaten ? null : <img src={props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )
}

export default Sushi

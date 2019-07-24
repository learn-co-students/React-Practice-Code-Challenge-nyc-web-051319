import React, { Fragment } from 'react'
import Form from '../components/Form'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.wallet} remaining!
      </h1>

      <div className="table">
        <div className="stack">
          {
            /*
               renderPlates takes an array
               and renders an empty plate
               for every element in the array
            */
            renderPlates(props.sushiEaten)
          }

        </div>
        <div>
          <h3>Add more money</h3>
          <Form addMoney={props.addMoney} />
        </div>
      </div>

    </Fragment>
  )
}

export default Table

import React from 'react'

const MoreButton = (props) => {
    return <button onClick={()=>props.get4Sushis(props.sushis)}>
            More sushi!
          </button>
}

export default MoreButton
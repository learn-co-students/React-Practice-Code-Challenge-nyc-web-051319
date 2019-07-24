import React from 'react'

class Form extends React.Component {

  state = {
    money: 0
  }

  handleChange = (event) => {
    event.persist()
    this.setState((prevState) => {
      return {
        money: parseInt(event.target.value)
      }
    })
  }

  render() {
    return (
      <form onSubmit={(event) => this.props.addMoney(event, this.state.money)}>
        <input type="number" onChange={this.handleChange} value={this.state.money} />
        <input type="submit" value="add" />
      </form>
    )
  }
}

export default Form

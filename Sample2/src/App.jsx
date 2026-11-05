import React from "react"
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      temp: 20
    }
  }
  increaseTemp = () => {
    if (this.state.temp < 35) {
      this.setState({
        temp: this.state.temp + 1
      })
    }
  }
  decreaseTemp = () => {
    if (this.state.temp > 18) {
      this.setState({
        temp: this.state.temp - 1
      })
    }
  }
  render() {
    return (
      <>
        <h1>temperature: {this.state.temp} degree C</h1>
        <button onClick={this.increaseTemp}> Up </button>
        <button onClick={this.decreaseTemp}> Down</button>
        {this.state.temp === 35 && (
          <h2>Too Hot</h2>
        )}
        {this.state.temp === 18 && (
          <h2> Too Cold </h2>
        )}
      </>
    )
  }
}

export default App
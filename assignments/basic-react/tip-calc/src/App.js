import React, { Component } from 'react'
import './App.css'
import logo from './logo.svg';
import PriceCount from './priceCount'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputs: [],
      count: 0.1
    }
    this.changeCount = this.changeCount.bind(this)
  }

  formatInput = value => {
    let number = Number(value)
    let string = value.toString()
    if (string.includes('.') && string.length - string.indexOf('.') > 3) {
      return number.toFixed(2)
    }
    return value
  }

  handleEnter(e) {
    if (!e.target.value) return
    if (e.keyCode === 13) {
      console.log('enter press here! ')
      const newPrice = e.target.value
      const newInputs = this.state.inputs.concat([newPrice])
      this.setState({ inputs: newInputs })
      e.target.value = ''
    }
  }

  handleChange(e) {
    let value = this.formatInput(e.target.value)
    e.target.value = value
  }

  changePrice(price, i) {
    const { inputs } = this.state
    inputs[i] = price
    this.setState({
      inputs
    })
  }

  changeCount(e) {
    this.setState({ count: Number(e.target.value) })
    console.log(this.state.count)
  }

  render() {
    const { inputs, count } = this.state

    console.log(inputs)

    const total = inputs.length
      ? inputs.reduce((t, num) => Number(t) + Number(num), 0)
      : 0
    console.log(typeof total)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">Tip Caculator</p>
        <span>Enter Price: </span>{' '}
        <input
          type="number"
          min="0"
          className="PriceInput"
          onChange={this.handleChange.bind(this)}
          onKeyUp={this.handleEnter.bind(this)}
        />
        <ul className="InputList">
          {inputs.map((e, i) => (
            <PriceCount
              key={i}
              price={e}
              count={count}
              changePrice={price => this.changePrice(price, i)}
            />
          ))}
        </ul>
        <span>Total: {total} * </span>
        <span>{count * 100 + '% = ' + (total * count).toFixed(2)} </span>
        <select onChange={this.changeCount}>
          <option value="0.1">10%</option>
          <option value="0.15">15%</option>
          <option value="0.2">20%</option>
          <option value="0.3">30%</option>
        </select>
      </div>
    )
  }
}

export default App

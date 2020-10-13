import React, { Component } from 'react'

const rword = require('rword')

export default class extends Component {

  constructor (props) {
    super(props)
    this.state = {
      word: props.word ?? null
    }
  }

  componentDidMount () {
    this.setState({
      word: rword()
    })
  }

  render () {
    return <div>
      <h2>Welcome to React components</h2>
      <span>here the current world : {this.state.word}</span>
    </div>
  }
}

import React, { Component } from 'react';

interface IProps { 
  start: number;
}

interface IState {
  count: number,
  title: string
}

export default class ClickCounter extends Component {
  [x: string]: any; 
  state: IState;

  constructor(props: IProps) {
    super(props);
    console.log('Constructor', props );
    this.state = {
      count: props.start,
      title: 'my button'
    };
    this.increment = this.increment.bind(this)
  }

  increment() {
    const { count } = this.state;
    this.setState({ count: count + 1 })
    // this.state.count = count + 1;
    console.log('increment', this.state.count)
  }
  
  render() {
    console.log('render', this.state.count)
    // используем state в render()
    const { count } = this.state;
    // изменяем состояние через setState
    return (
      <button onClick={this.increment}> Clicked {this.state.title} {count} </button>
    )
  }
}
import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import ClickCounter from './my-component';

// render(<h1>Hello world 2</h1>, document.querySelector('#root'));

class MyButton extends Component {
  state: {
    count: number
  }

  constructor( props ) {
    super( props );
    this.state = { count: props.start };
  }


  incr() {
    this.setState({ count: this.state.count + 1 })
  }
  setState(arg0: { count: number }) {
    super.setState( arg0 );
  }

  render() {
    let { count } = this.state;
    return (<>Some text <button onClick={this.incr.bind(this)}> Clicked {count}</button></>)
  }
} 

function tick() {
  render(
    <>
      <h2>Текущее время {new Date().toLocaleTimeString()}</h2>
    </>,
    document.getElementById("time"));
}
setInterval(tick, 1000);


render(<MyButton start={3} />, document.querySelector('#counter-1'));

render(<ClickCounter start={3} />, document.querySelector('#counter-2'));

const styleObj = {
  color:'red', 
  fontFamily:'Verdana'
};

const user = {
  id : 5,
  age: 33,
  firstName: 'Tom',
  lastName: 'Smit',
  getFullName: function(){ 
      return `${this.firstName} ${this.lastName}`;
  }
};
const userClassName = "user-info";

render(
  <div className={userClassName}  style={styleObj}>
          <p>Полное имя: {user.getFullName()}</p>
          <p>Возраст: {user.age}</p>
  </div>,
  document.getElementById("app")
)


const Clicker = (props) => {
  const [state, setState] = useState({
    name: 'Click to set name'
  });

  const handler = function (event) { 
    console.log(event)
    setState( {'name': props.name } ) 
  }

return (<button onClick={ handler }>{state.name}</button>)
}

render(<Clicker name='Other name'/>, document.getElementById("clicker"))
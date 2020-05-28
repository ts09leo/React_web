import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    console.log('constuctor')
    super(props)
    this.state = {
      saySomething: 'hi',
      myState: 'State pracice'
    }
  }


  changeTxext = () => {
    this.setState({ saySomething: 'How are you?'})
    //this.setState({time})
  }
  
  render() {
    console.log('render')
    return (
      <div className="App">
        <p>{this.state.myState}</p>
        <p>{this.state.saySomething}</p>
        <button onClick={this.changeTxext}>Click</button>
      </div>
    );
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps')
    if (nextProps.title != prevState.title) {
      return {
        title: nextProps.title 
      };
    }
    return null;
  }
  componentWillUnmount(){
    console.log('componentWillUnmount')
  }
}

export default App;

/*class Hello extends React.Component{
  render(){
    return(
      <div>
        <p>title: {this.props.title}</p>
        <p>name: {this.props.name}</p>
        <p>id: {this.props.id}</p>
      </div>
    );
  }
}

export default class App extends React.Component{
  render(){
    return(
      <Hello title="World" name="User" id="1654"/>
    )
  }
}*/

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

//export default App;

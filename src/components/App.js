import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index
import {getChars} from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.getChars()// call our action
  }
  render() {
    console.log(this.props);
    return (
      <div className="App">
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.chars.map( char => {
              return <li key={char.name}>{char.name}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  chars: state.chars,
  fetching: state.fetching
  
  }
}// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapStateToProps, {getChars})(App);

import React, { Component } from 'react';
import Header from './Header.jsx';
import SignUp from './SignUp.jsx';
import BinList from './BinList.jsx';


class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log(this.props.history)
    return (
      <div>
        <SignUp />
        <BinList />
      </div>
    )
  }
}

export default App;

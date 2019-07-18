import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();


export default class Header extends Component {

  handleClick(event) {
    event.preventDefault();
    
    Meteor.call('bins.create', (error, binId) => {
      history.push(`/bins/${binId}`)
    })
  }

  render() {


    return(
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">MarkBin</Link>
        </div>
        <ul className="nav navbar-nav">
          <li data-toggle="modal" data-target="#exampleModalCenter">
            {Meteor.userId() ? <a>Logout</a> : <a>Sign Up</a> }
          </li>
          <li>
            <a href="#" onClick={this.handleClick.bind(this)}>
              Create Bin
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

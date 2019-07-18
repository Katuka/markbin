import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '/imports/ui/App'
import { Bins } from '../imports/api/Bins';
import { Switch, Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../imports/ui/Header';
import BinsMain from '../imports/ui/BinsMain';
import BinList from '../imports/ui/BinList';
import SignUp from '../imports/ui/SignUp';

// const history = require('history').createBrowserHistory;
const history = createHistory();



const Routes = () => {
 return(
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/" component={SignUp} />
        <Route exact path="/" component={BinList} />
        <Route exact path="/bins/:binId" component={BinsMain} />
      </Switch>
    </div>
 );
};


Meteor.startup(() => {
  render(
    <Router history={history}>
      <Routes /> 
    </Router>,
    document.getElementById('react-target'));

  // THIS WAS TO CLEAR OUT ALL THE BINS THAT WERE AUTOMATICALLY CREATED
  // Meteor.call('remove.allBins');

});

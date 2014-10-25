/** @jsx React.DOM */


var Outline = require('./Outline.react');
var User = require('./User.react');
var NewEvent = require('./NewEventRow.react');
var React = require('react/addons');
// var key = require('keymaster');
var OutlineStore = require('../stores/OutlineStore');
var UserStore = require('../stores/UserStore');
require('../../sass/app.scss');
require('../../sass/topbar.scss');

var getAppState = function () {
  return {
    events: OutlineStore.getAll(),
    user: UserStore.getUser()
  };
}


var App = React.createClass({

  getInitialState: function() {
    return getAppState();
  },

  componentDidMount: function() {
    OutlineStore.addChangeListener(this._onChange);
    UserStore.addChangeListener(this._onChange);
  },

  render: function() {
    var cx = React.addons.classSet;

    return (
      <div>
          <div className="topbar">
            <div className="col-md-12">
              <h1 className="app-title">WIP</h1>
              <div className="app-new-event">
                <NewEvent  isLoggedIn={this.state.user.loggedIn} />
              </div>
              <div className="app-user">
                <User  user={this.state.user} />
              </div>
            </div>
          </div>
        <Outline
          events={this.state.events}
          user={this.state.user}
        />
      </div>
    );
  },

  /**
   * Event handler for 'change' events coming from the MessageStore
   */
  _onChange: function() {
    this.setState(getAppState());
  }

});

module.exports = App;

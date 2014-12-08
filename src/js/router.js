/**
 *  Backbone Router integrated into React
 */

var Backbone = require('backbone');
var React = require('react/addons');
var LandingComponent = require('./components/Landing.react');
var AppComponent = require('./components/App.react');
var LocalUserUtils = require('./utils/LocalUserUtils');
var UserAPIUtils = require('./utils/UserAPIUtils');


var Router = Backbone.Router.extend({

    routes : {
        ''       : 'landing',
        'welcome' : 'welcome'
    },

    getReactContainer: function() {
        var reactContainer = document.getElementsByClassName('js-react');
        if(reactContainer.length < 1) {
            console.error('Couldnt find the .js-react container');
            return false;
        }
        return reactContainer[0];
    },

    landing: function() {
        React.render(
            <LandingComponent />,
            this.getReactContainer()
        );
    },


    welcome : function( ){
        LocalUserUtils.init();
        UserAPIUtils.getUserInfo()

        React.render(
            <AppComponent />,
            this.getReactContainer()
        );
    }


});

module.exports = Router;
'use strict';

var React = require('react-native');
var Styles = require('../styles/styles.json');
var Input = require('./input');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
} = React;

var Login = React.createClass({

  getInitialState: function() {
    return {
      email: '',
      password: ''
    };
  },

  _login: function () {
    console.log(this.state.email, this.state.password);
    var requestURL = 'http://rethinkdb.believer.svc.tutum.io/login?email='+this.state.email+'&password='+this.state.password;
    fetch
      (requestURL, {
        method: 'POST'
      })
      .then( (response) => response.json() )
      .then( (data) => {
        console.log(data);
      })
      .catch( (error) => console.log(error) )
      .done();
  },

  updateValue:function(change){
    console.log(change);
    if (change.for === 'email') {
      this.setState({
        email: change.text
      });
    } else if (change.for === 'password') {
      this.setState({
        password: change.text
      });
    }
  },

  render: function() {
    return (
      <View>
        <Input
          placeholder={'email'}
          keyboardType={'email-address'}
          value={this.state.email}
          updateValue={this.updateValue}
        />
        <Input
          placeholder={'password'}
          password={true}
          value={this.state.password}
          updateValue={this.updateValue}
        />
        <Text onPress={this._login}>Login</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create(Styles);

module.exports = Login;

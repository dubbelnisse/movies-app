'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} = React;

var Login = React.createClass({
  render: function() {
    return (
      <View>
        <View>
          <Text>
            Login
          </Text>
          <TextInput
            style={{width:320, height: 40, borderColor: 'gray', borderWidth: 1}}
            placeholder={'email'}
          />
          <TextInput
            style={{width:320, height: 40, borderColor: 'gray', borderWidth: 1}}
            placeholder={'password'}
          />
        </View>
      </View>
    );
  }
});

module.exports = Login;

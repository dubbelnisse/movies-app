'use strict';

var React = require('react-native');
var Login = require('./components/login');
var Styles = require('./styles/styles.json');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View
} = React;

var Movies = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }
});

var styles = StyleSheet.create(Styles);

AppRegistry.registerComponent('Movies', () => Movies);

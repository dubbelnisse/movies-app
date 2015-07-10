'use strict';

var React       = require('react-native');
var Login       = require('./components/login');
var Styles      = require('./styles/styles.json');
var LatestMovies = require('./components/latestmovies');

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
        <LatestMovies />
      </View>
    );
  }
});

var styles = StyleSheet.create(Styles);

AppRegistry.registerComponent('Movies', () => Movies);

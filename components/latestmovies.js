var React = require('react-native');
var Api = require('../helpers/Api');

var {
  StyleSheet,
  Text,
  View
} = React;

var LatestMoves = React.createClass({
  render: function() {
    return (
      <Text>
        Latest movies
      </Text>
    );
  }

});

module.exports = LatestMoves;

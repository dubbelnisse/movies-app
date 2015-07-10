'use strict';

var React = require('react-native');
var Styles = require('../styles/styles.json');

var {
  StyleSheet,
  TextInput
} = React;

var Input = React.createClass({

  updateText: function(text) {
    this.props.updateValue({
      for: this.props.placeholder,
      text: text
    });
  },

  render: function() {
    return (
      <TextInput
        style={styles.input}
        placeholder={this.props.placeholder}
        keyboardType={this.props.keyboardType ? this.props.keyboardType : 'default'}
        password={this.props.password ? this.props.password : false}
        autoCorrect={false}
        autoCapitalize={false}
        onChange={(event) => this.updateText( event.nativeEvent.text )}
      />
    );
  }
});

var styles = StyleSheet.create(Styles);

module.exports = Input;

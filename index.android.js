'use strict';

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

class MyButton extends React.Component{
    _onPressButton(){
        console.log('you tapped the button');
    }
    render(){
        return(
            <TouchableHighlight onPress={this._onPressButton}>        
                <Text>Button</Text>
            </TouchableHighlight>
        );
    }
}

class HelloWorld extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>Hello, World</Text>
        <Text style={styles.hello}>this is a demo with react-native....</Text>
        <MyButton style={styles.hello}/>
      </View>
    )
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);

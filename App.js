import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Expo from 'expo'

export default class App extends React.Component {
  render() {
    const { version } = Expo.Constants.manifest
    const { buildNumber } = Expo.Constants.manifest.ios
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text></Text>
        <Text>Version: {version} (Build: {buildNumber})</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f77',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

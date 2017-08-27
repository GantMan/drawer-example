import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class App extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Screen Three'
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Screen3</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

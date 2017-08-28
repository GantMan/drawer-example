import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default class Screen2 extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Screen2</Text>
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

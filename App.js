import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Provider } from 'react-redux'
import createStore from './Redux'
import AppNavigation from './Navigation/AppNavigation'
import ReduxNavigation from './Navigation/ReduxNavigation'

// create our store
const store = createStore()


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <ReduxNavigation />
        </View>
      </Provider>
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

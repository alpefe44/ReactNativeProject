import { View, Text, StyleSheet,SafeAreaView } from 'react-native'
import React from 'react'
import Navigation from './src/navigation';



const App = () => {
  return (
      <SafeAreaView style = {styles.root}>
        <Navigation/>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root:{
    flex:1,
  }
})

export default App
import { View, Text ,TextInput,StyleSheet} from 'react-native'
import React from 'react'


//Birden çok prop tanımlıcaksak süslü parantez içine alırız.

const CustomInput = ({value,setValue,secureTextEntry,placeholder}) => {
  return (
    <View style = {styles.container}>
      <TextInput
        placeholder= {placeholder}
        value= {value}
        onChangeText = {setValue}
        secureTextEntry = {secureTextEntry}
        style = {styles.input}
      ></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    width:'100%',

    borderColor:'#e8e8e8',
    borderWidth:1,
    borderRadius:5,

    paddingHorizontal:10,
    marginVertical:5

  }
})

export default CustomInput
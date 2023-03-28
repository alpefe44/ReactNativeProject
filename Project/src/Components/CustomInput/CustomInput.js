import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'


//Birden çok prop tanımlıcaksak süslü parantez içine alırız.

const CustomInput = ({ control, name, rules = {}, secureTextEntry, placeholder }) => {
  return (


    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
        <>
          <View style={[styles.container, { borderColor: error ? 'red' : '#e8e8e8' }]}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
              style={styles.input}
            >
            </TextInput>
          </View>
          {error && (<Text style = {{color:'red',alignSelf:'stretch'}}>{error.message || 'Error'}</Text>
          )}
        </>
      )}
    />


  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5

  },

  input: {

  }
})

export default CustomInput
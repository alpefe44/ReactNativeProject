import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../Components/CustomButton';
import CustomInput from '../../Components/CustomInput';
import SocialMediaButton from '../../Components/SocialMediaButton';

const ConfirmEmailScreen = () => {

    const[code,setCode] = useState('');


  return (
    <View style = {styles.container} >
      <Text style = {styles.title}>Confirm Email</Text>
      <CustomInput placeholder={'Code'} value={code} setUsername ={setCode} ></CustomInput>
      <CustomButton text={'Confirm'}></CustomButton>
      <CustomButton type='TERTIARY' text={'Resend Code'}></CustomButton>
      <CustomButton type='TERTIARY' text={'Back to Sign in'}></CustomButton>
       
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        alignItems:'center',

        padding:30,
    },

    title:{
        fontSize:32,
        fontWeight:'bold',
        color:'#3B71F3',

        marginBottom:20,
    },

    text:{
        color:'gray',
        marginVertical:10
    },

    link:{
        color:'#FDB075'
    }

})

export default ConfirmEmailScreen
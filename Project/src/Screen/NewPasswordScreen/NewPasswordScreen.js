import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../Components/CustomButton';
import CustomInput from '../../Components/CustomInput';
import SocialMediaButton from '../../Components/SocialMediaButton';
import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen = () => {

  const[code,setCode] = useState('');
  const[newPass,setNewPass] = useState('');

  const navigate = useNavigation();

  const pressBackToSign = () =>{
    navigate.navigate('Sign in');
  }

  const pressSubmit = () =>{
    navigate.navigate('Sign in');
  }

  return (
    <View style = {styles.container} >
      <Text style = {styles.title}>Reset Password</Text>
      <CustomInput placeholder={'Code'} value={code} setValue ={setCode} ></CustomInput>
      <CustomInput placeholder={'Enter Your New Password'} value={newPass} setValue ={setNewPass} ></CustomInput>
      <CustomButton text={'Submit'} onPress = {pressSubmit}></CustomButton>
      <CustomButton type='TERTIARY' text={'Back to Sign in'} onPress = {pressBackToSign}></CustomButton>
       
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

export default NewPasswordScreen
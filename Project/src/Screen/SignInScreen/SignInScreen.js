import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../Components/CustomButton';
import CustomInput from '../../Components/CustomInput';
import Logo from '../../../assets/images/logo.png';
import SocialMediaButton from '../../Components/SocialMediaButton';
import { useNavigation } from '@react-navigation/native';


const SignInScreen = () => {

  const[value,setValue] = useState('');
  const[password,setPassword] = useState('');
  const navigation = useNavigation();
  const {height} = useWindowDimensions();

  const onPressedSignIn = () =>{
    console.warn('Sign in');
    navigation.navigate('Home');
  }

  const pressNewAccount = () =>{
    navigation.navigate('Sign up');
  }

  const pressForgotPassword = () =>{
    navigation.navigate('ForgotPassword');
  }

  
  return (
    <View style = {styles.root}>
      <Image source={Logo} resizeMode = 'contain' style = {[styles.logo,{height:height*0.3}]}></Image>
      <CustomInput placeholder={'Username'} value={value} setValue={setValue} secureTextEntry={false} ></CustomInput>
      <CustomInput placeholder={'Password'} value={password} setValue={setPassword} secureTextEntry={true}></CustomInput>
      <CustomButton onPress={onPressedSignIn} text={'Sign In'}></CustomButton>
      <CustomButton text={'Forgot Password'} type = {'TERTIARY'} onPress={pressForgotPassword}></CustomButton>
      <SocialMediaButton></SocialMediaButton>
      <CustomButton text={'Dont have an account? Create one'} type ={'TERTIARY'} onPress = {pressNewAccount}></CustomButton>
    </View>
  )
}

const styles = StyleSheet.create({
  root:{
    alignItems:'center',
    padding:20

  },

  logo:{
    width:'70%',
    maxHeight:150,
    maxWidth:200
  }
})

export default SignInScreen
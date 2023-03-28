import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../Components/CustomButton';
import CustomInput from '../../Components/CustomInput';
import Logo from '../../../assets/images/logo.png';
import SocialMediaButton from '../../Components/SocialMediaButton';
import { useNavigation } from '@react-navigation/native';
import {useForm,Controller} from 'react-hook-form';



const SignInScreen = () => {

  const{
    control,handleSubmit
  } = useForm();

  const navigation = useNavigation();
  const { height } = useWindowDimensions();

  const onPressedSignIn = () => {
    console.warn('Sign in');
    navigation.navigate('Home');
  }

  const pressNewAccount = () => {
    navigation.navigate('Sign up');
  }

  const pressForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  }


  return (
    <View style={styles.root}>
      <Image source={Logo} resizeMode='contain' style={[styles.logo, { height: height * 0.3 }]}></Image>
      <CustomInput name={'username'} control={control} placeholder={'Username'} rules = {{required:'Username is required'}}></CustomInput>
      <CustomInput  name={'password'} control = {control} secureTextEntry = {true} placeholder = {'Password'} rules = {{required:'Password is required'}}></CustomInput>
      <CustomButton onPress={handleSubmit(onPressedSignIn)} text={'Sign In'}></CustomButton>
      <CustomButton text={'Forgot Password'} type={'TERTIARY'} onPress={pressForgotPassword}></CustomButton>
      <SocialMediaButton></SocialMediaButton>
      <CustomButton text={'Dont have an account? Create one'} type={'TERTIARY'} onPress={pressNewAccount}></CustomButton>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20

  },

  logo: {
    width: '70%',
    maxHeight: 150,
    maxWidth: 200
  }
})

export default SignInScreen
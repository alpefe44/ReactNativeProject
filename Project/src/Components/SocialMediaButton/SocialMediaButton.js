import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton';

const SocialMediaButton = () => {

  const onSignFacebook = () =>{
    console.warn('Sign in Facebook')
  }

  const onSignGoogle = () => {
    console.warn('Sign in Google')
  }

  const onSignApple = () => {
    console.warn('Sign in Apple')
  }
  return (
    <>
      <CustomButton text={'Sign In with Facebook'} onPress = {onSignFacebook} bgColor = '#E7EAF4' fgColor='#4765A9'/>
      <CustomButton text={'Sign In with Google'} onPress = {onSignGoogle} bgColor = '#FAE9EA' fgColor='#DD4D44'/>
      <CustomButton text={'Sign In with Apple'} onPress = {onSignApple} bgColor = '#e3e3e3' fgColor='#363636'/>
    </>
  )
}

export default SocialMediaButton
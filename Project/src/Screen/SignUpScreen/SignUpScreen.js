import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../Components/CustomButton';
import CustomInput from '../../Components/CustomInput';
import SocialMediaButton from '../../Components/SocialMediaButton';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const SignUpScreen = () => {

    const{control,handleSubmit,watch} = useForm();

    const pwd = watch('password');

    const navigate = useNavigation();

    const pressRegisterButton = () =>{
        console.warn('sign up');
        navigate.navigate('Sign in');
    }

    const pressHaveAnAccount = () =>{
        navigate.navigate('Sign in');
    }

  return (
    <View style = {styles.container} >
      <Text style = {styles.title}>Create Account</Text>
      <CustomInput name = 'username' control = {control} placeholder={'Username'} secureTextEntry={false} rules={{required:true}}></CustomInput>
      <CustomInput name = 'email' placeholder={'Email'} control = {control} secureTextEntry = {false} rules = {{required:true}}></CustomInput>
      <CustomInput name = 'password' placeholder={'Password'} secureTextEntry={true} control = {control} rules = {{required:true}}></CustomInput>
      <CustomInput name = 'repeatpass' placeholder={'Repeat Password'} control ={control} secureTextEntry={true} rules = {{validate : value => value === pwd || 'Password do not match'}}></CustomInput>
      
      
      <CustomButton text={'Register'} onPress={handleSubmit(pressRegisterButton)}></CustomButton>
      <Text style = {styles.text}>By registering, you confirm that you accept our <Text style = {styles.link}> Terms of use </Text> and 
      <Text style = {styles.link}> Privacy Policy </Text> </Text>
      <SocialMediaButton></SocialMediaButton>
      <CustomButton text={'Have an account?'} type = {'TERTIARY'} onPress = {pressHaveAnAccount}></CustomButton>
    
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

export default SignUpScreen
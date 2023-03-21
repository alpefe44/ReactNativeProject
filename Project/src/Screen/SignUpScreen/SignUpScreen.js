import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../Components/CustomButton';
import CustomInput from '../../Components/CustomInput';
import SocialMediaButton from '../../Components/SocialMediaButton';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {

    const[userName,setUsername] = useState('');
    const[password,setPassword] = useState('');
    const[repeatPassword,setrepeatPassword] = useState('');
    const[Email,setEmail] = useState('');

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
      <CustomInput placeholder={'Username'} value={userName} setUsername ={setUsername} ></CustomInput>
      <CustomInput placeholder={'Email'} value={Email} setValue={setEmail}></CustomInput>
      <CustomInput placeholder={'Password'} value={password} setValue={setPassword} secureTextEntry={true}></CustomInput>
      <CustomInput placeholder={'Repeat Password'} value={repeatPassword} setValue={setrepeatPassword} secureTextEntry={true}></CustomInput>
      <CustomButton text={'Register'} onPress={pressRegisterButton}></CustomButton>
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
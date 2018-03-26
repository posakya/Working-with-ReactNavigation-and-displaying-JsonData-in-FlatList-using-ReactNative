import React from 'react';
import { AppRegistry, TouchableOpacity ,KeyboardAvoidingView,StyleSheet, TextInput, View, Alert, Button, Text , Image} from 'react-native';

import { StackNavigator } from 'react-navigation'; 

export default class LoginScreen extends React.Component {

  static navigationOptions = {
    title: 'Sign In',
  };

  constructor(props) {
    super(props);
    
    this.state = {
     UserEmail: '',
     
     UserPassword: ''

   };
 }

 render() {
  return (


    <KeyboardAvoidingView behavior="padding" style={styles.MainContainer}>

    <Text style= {{ fontSize: 20, color: "#000", textAlign: 'center', marginBottom: 15 }}>User Login Form</Text>


    <TextInput

    placeholder="Enter User Email"
    onChangeText={UserEmail => this.setState({UserEmail})}
    underlineColorAndroid='transparent'
    autoCorrect={false} 
    keyboardType='email-address' 
    returnKeyType="next" 
    onSubmitEditing={() => this.passwordRef.focus()}  
    style={styles.TextInputStyleClass}

    />


    <TextInput

    placeholder="Enter User Password"
    ref={passwordRef => this.passwordRef = passwordRef}
    onChangeText={UserPassword => this.setState({UserPassword})}
    returnKeyType="done"     
    underlineColorAndroid='transparent'
    style={styles.TextInputStyleClass}
    secureTextEntry={true}

    />


    <TouchableOpacity
    style={styles.loginScreenButton}
    onPress={() => {
      this.props.navigation.navigate('SignUp',{otherParam: "Sign Up" , ownParam: "Details"})
    }}
    underlayColor='#ff8503'>
    <Text  style={styles.loginText}>Log In</Text>
    </TouchableOpacity>

    <TouchableOpacity
    style={styles.goToNext}
    onPress={() => {
      this.props.navigation.navigate('SignUp',{otherParam: "Sign Up" , ownParam: "Details"})
    }}
    underlayColor='#ff8503'>
    <Text  style={styles.goToText}>New Here ? <Text style={styles.underlineText}>Sign Up</Text></Text>
    </TouchableOpacity>

    
    </KeyboardAvoidingView>


    );
  }
}



const styles = StyleSheet.create({

  MainContainer :{

    justifyContent: 'center',
    flex:1,

    backgroundColor: '#ffffff'

  },

  TextInputStyleClass: {

    textAlign: 'center',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,

    height: 40,

    borderWidth: 1.5,
    borderColor: '#ccc',

  },

  ButtonStyle: {
    borderRadius: 20,


  },

  loginScreenButton:{



    height : 40,
    borderRadius: 5,
    margin:20,
    paddingTop:10,
    marginBottom:20,
    paddingBottom:10,
    backgroundColor:'#ff8503',

    alignItems: 'center',
    justifyContent:'center'

  },
  loginText:{
    color:'#fff',
    textAlign:'center',

    paddingLeft : 10,
    paddingRight : 10
  },

  goToNext:{
    height : 40,
    borderRadius: 5,
    marginTop: -10,
    alignItems: 'center',
    justifyContent:'center'

  },
  goToText:{
    color:'#ff8503',
    textAlign:'center',
    fontSize: 18,
    paddingLeft : 10,
    paddingRight : 10
  },

  underlineText: {
    color:'#ff8503',
    textAlign:'center',
    fontSize: 18,
    paddingLeft : 10,
    paddingRight : 10,
    textDecorationLine: 'underline',

  },
  

});
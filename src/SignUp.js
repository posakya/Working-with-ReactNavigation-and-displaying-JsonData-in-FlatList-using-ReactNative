import React from 'react';
import { AppRegistry,ActivityIndicator, FlatList, TouchableOpacity ,KeyboardAvoidingView,StyleSheet, TextInput, View, Alert, Button, Text , Image} from 'react-native';

import { StackNavigator } from 'react-navigation'; 


export default class SignUp extends React.Component {


  static navigationOptions = ({navigation}) => {

    const { params } = navigation.state;


    return {
     title: params ? params.otherParam : 'A nested details screen',
   }


 };

 constructor(props) {
  super(props);

  this.state = {
    FirstName: '',
    MiddleName: '',
    LastName: '',
    UserEmail: '',
    PhoneNumber: '',
    UserPassword: '',
    UserConfirmPass: '',
    ownParam1: this.props.navigation.state.params.ownParam,
  };
}

render() {
  return (

  <KeyboardAvoidingView behavior="padding" style={styles.MainContainer}>

  <Text style= {{ fontSize: 20, color: "#000", textAlign: 'center', marginBottom: 15 }}>User Registration Form</Text>

  <TextInput

  placeholder="Enter First Name"

  onChangeText={FirstName => this.setState({FirstName})}
  autoCorrect={false} 

  underlineColorAndroid='transparent'
  returnKeyType="next" 
  onSubmitEditing={() => this.MiddleNameRef.focus()}  
  style={styles.TextInputStyleClass}
  />

  <TextInput

  ref={MiddleNameRef => this.MiddleNameRef = MiddleNameRef}
  placeholder="Enter Middle Name"

  onChangeText={MiddleName => this.setState({MiddleName})}
  autoCorrect={false} 

  underlineColorAndroid='transparent'
  returnKeyType="next" 
  onSubmitEditing={() => this.LastNameRef.focus()} 
  style={styles.TextInputStyleClass}
  />

  <TextInput
  ref={LastNameRef => this.LastNameRef = LastNameRef}
  placeholder="Enter Last Name"

  onChangeText={LastName => this.setState({LastName})}
  autoCorrect={false} 
  underlineColorAndroid='transparent'
  returnKeyType="next" 
  onSubmitEditing={() => this.EmailRef.focus()} 
  style={styles.TextInputStyleClass}
  />

  <TextInput

  placeholder="Enter User Email"
  ref={EmailRef => this.EmailRef = EmailRef}
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
  returnKeyType="next" 
  onSubmitEditing={() => this.ConfirmpasswordRef.focus()} 
  underlineColorAndroid='transparent'

  style={styles.TextInputStyleClass}

  secureTextEntry={true}
  />

  <TextInput
  placeholder="Re-Enter User Password"
  ref={ConfirmpasswordRef => this.ConfirmpasswordRef = ConfirmpasswordRef}
  onChangeText={UserConfirmPass => this.setState({UserConfirmPass})}
  returnKeyType="done" 

  underlineColorAndroid='transparent'

  style={styles.TextInputStyleClass}

  secureTextEntry={true}
  />


  <TouchableOpacity
  style={styles.loginScreenButton}
  onPress={() => this.props.navigation.goBack()}
  underlayColor='#ff8503'>
  <Text  style={styles.loginText}>Sign Up</Text>
  </TouchableOpacity>

  <TouchableOpacity
  style={styles.goToNext}
  onPress={() => {
      this.props.navigation.navigate('ListScreen',{ownParam: "List Data"})
    }}
  underlayColor='#ff8503'>
  <Text  style={styles.goToText}>Go to List</Text>
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
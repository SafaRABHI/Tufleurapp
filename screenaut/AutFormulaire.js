import React, { Component } from 'react';
import {
    View,
    Button,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
   Alert ,
  
} from 'react-native';

export default class AutFormulaire extends Component {

    constructor(){
super()
this.state = {
  nom_user : '',
  email: '',
  password1:'' ,
  password2:'' ,
  imageSource : null,
  data : null
}}





uploadphoto(){

             const { nom_user }  = this.state ;
             const { email }  = this.state ;
             const { password1 }  = this.state ;
             const {password2 }  = this.state ;
            
         fetch('http://www.tufleur.com:7000/api/authentification/rest-registration/', {
                       method: 'POST',
                       headers: {
                      'Accept': 'application/json',
                       'Content-Type': 'application/json',
                       },
                       body: JSON.stringify({username: nom_user,
                                             email : email,
                                             password1 : password1,
                                             password2 : password2 })})
         

                       Alert.alert ( 'your data has been send')
        
                       }
         


    render() {
        return (
<View style={styles.container}>

            
      <Text> user name</Text>
      <TextInput
        style={{height: 40,width:300, borderColor: 'gray', borderWidth: 3}}
        onChangeText={(nom_user) => this.setState({nom_user})}
        value={this.state.text}
      />

       <Text> email</Text>
      <TextInput
        style={{height: 40,width:300, borderColor: 'gray', borderWidth: 3}}
        onChangeText={(email) => this.setState({email})}
        value={this.state.text}
      />
      <Text> password </Text>
      <TextInput
        style={{height: 40,width:300, borderColor: 'gray', borderWidth: 3}}
        onChangeText={(password1) => this.setState({password1})}
        value={this.state.text}
      />
       <Text> password confirmation</Text>
      <TextInput
        style={{height: 40,width:300, borderColor: 'gray', borderWidth: 3}}
        onChangeText={(password2) => this.setState({password2})}
        value={this.state.text}
      />


  

      <TouchableOpacity style = {styles.button} onPress={this.uploadphoto.bind(this)} >
             <Text style = {styles.text}>Create</Text>
      </TouchableOpacity>

                
</View>
        )
    }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


  button : {

    height: 40,width:189,
    backgroundColor : '#DC143C'
    ,marginBottom : 20, 
    marginRight:40,
    marginLeft:40,
    marginTop:5,
    paddingTop:10,
    borderRadius:3, 

  },
  text : {color : 'white',
          textAlign:'center',
          borderRadius:3,
         }

        
});

import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  ImageBackground,
   AsyncStorage,
   KeyboardAvoidingView,
  Alert,
  View } from 'react-native';
  /*import { YellowBox } from 'react-native';
  YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']); */
  import { connect } from 'react-redux';
  //import { loginUser } from  'aut/actions/AuthActions';
  import { loginUser } from  'aut/actions';
  import { Spinner } from 'aut/compenents/Spinner';
import { LoginManager ,LoginButton } from 'react-native-fbsdk';

class Aut extends Component {



 constructor(){
super();
this.state = {
   username: '',
   password: ''
 
};
} 

componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      this.props.navigation.navigate('Discover');
    }
  }

/*_onLoginPressed() {
 //const { email, password } = this.state;
 const email = this.state.email;
 const password = this.state.password;
 this.props.loginUser({ email, password });

}*/

_onLoginPressed() {
    const { username, password } = this.state;
    this.props.loginUser({ username, password });
  }


_renderButton() {
    if (this.props.loading) {
      return <Spinner />;
    }
   
   return (

     <TouchableOpacity style ={{height: 40,width:189,
                                           marginBottom : 11, 
                                           marginRight:40,
                                           marginLeft:40,
                                           backgroundColor: '#DDDDDD',
                                           marginTop:5,
                                           paddingTop:10,
                                           borderRadius:3,  }}  
                                  onPress={this._onLoginPressed.bind(this)}>
                                
                    
              <Text style ={{textAlign:'center',marginBottom : 11,  }}>
                   Auth
              </Text></TouchableOpacity>
    );
}

/*Login(){

            
           
        fetch('http://www.tufleur.com:7000/api/authentification/login/', {
                       method: 'POST',
                       headers: {
                      'Accept': 'application/json',
                       'Content-Type': 'application/json',
                       },
                       body: JSON.stringify({email : this.state.email,
                                             password : this.state.password  })})
        //si la reponse existe c'est que le user existe dans la base si nn un alerte va etre declencher
.then((resp)=>{ 
   if(resp.ok){
     this.props.navigation.navigate('Discover');
     return resp.json()
   }
   else{

    alert('Authentication failed, please try again!');
   }

  })

   



 .catch((error)=> {console.error(error);});
                       

                 }   */


 

  render() {
    return (


<ImageBackground source={require('aut/images/bc3.jpg')} style={{width: '100%', height: '100%'}}  >
      <View style={styles.container}>

     <View>
      
            <Text style={styles.welcome}>
              Welcome to Tufleur
            </Text>

           
                

            <TextInput 
                      style={{height: 40,
                               width:300,
                               marginBottom:11,
                               borderColor: '#ffffff',
                               color: '#ffffff',
                               borderWidth: 2}}
                      
                      onChangeText={(username) => this.setState({ username  }) }
                      placeholder = 'mail'
                      autoCapitalize='none'
                      placeholderTextColor = '#ffffff'
                      />
                        

            <TextInput 
                      style={{height: 40,
                               width:300,
                               marginBottom:11,
                               borderColor: '#ffffff',
                               color: '#ffffff',
                               borderWidth: 2}}
                      
                      onChangeText={(password) => this.setState({ password }) }
                      placeholder = 'Password'
                      secureTextEntry = {true}
                      placeholderTextColor = '#ffffff'/> 
                                

                        

           


             


      <TouchableOpacity style ={{height: 40,width:189,
                                           marginBottom : 11, 
                                           marginRight:40,
                                           marginLeft:40,
                                           backgroundColor: '#DDDDDD',
                                           marginTop:5,
                                           paddingTop:10,
                                           borderRadius:3,  }}  
                                  onPress={this._onLoginPressed.bind(this)
                                  }>
                                
                    
              <Text style ={{textAlign:'center',marginBottom : 11,  }}>
                   Login
              </Text></TouchableOpacity>
              <View>
              { this._renderButton()}
              </View>
             
            
             
             
</View>

<Text>{this.props.error}</Text>
              

               <LoginButton
                   publishPermissions={["publish_actions"]}
                  onLoginFinished={
                     (error, result) => {
                       if (error) {
                         alert("login has error: " + result.error);
                       } else if (result.isCancelled) {
                        alert("login is cancelled.");
                       } else {
                         AccessToken.getCurrentAccessToken().then(
                           (data) => {
                             alert(data.accessToken.toString())
                           }
                         )
                       }
                     }
                   }
                   onLogoutFinished={() => alert("logout.")}/>
       
     
       
       <View
          style={{
          flexDirection: 'row',
          height: 100,
          padding: 20,

          }}>
          <Text  style = {{marginRight: 11 ,marginLeft:20}}> Forgot Password</Text>
        
          <Text onPress={() => this.props.navigation.navigate('AutFormulaire')} title="AutFormulaire" style = {{textAlign: 'center', marginBottom :40}}> Create New acount </Text>
   </View>

      

</View>
</ImageBackground>
    );
  }
}  





const mapStateToProps = state => {
return {
  error: state.auth.error,
  loading: state.auth.loading,
  user: state.auth.user
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color : '#ffffff',
    margin:25,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


export default connect(mapStateToProps, { loginUser })(Aut);


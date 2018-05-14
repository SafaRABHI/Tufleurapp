import React from 'react';
import { StyleSheet,Image, TextInput,Text, View ,Alert ,TouchableOpacity} from 'react-native';

const options = {

  title:'select a phot',
  takePhotoButtonTitle : 'take aphoto',
  chooseFromLibraryButtonTitle:'choose from galery',
  quality : 1
}


export default class AutProfile extends React.Component {
constructor(){
super()
this.state = {
  nom_du_boutique : '',
  imageSource : null,
  data : null
}


}

/*
selectPhoto(){

    ImagePicker.showImagePicker(options, (response) => {
    console.log('Response = ', response);

    if (response.didCancel) {
    console.log('User cancelled image picker');
    }
    else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
    }
 
    else {
    let source = { uri: response.uri };
 
    this.setState({
      imageSource: source,
      data : response.data
    });
    }
    });

}



uploadphoto(){

              const { nom_du_boutique }  = this.state ;
               RNFetchBlob.fetch('POST', 'http://192.168.1.13/Demo/upload.php', {
               Authorization : "Bearer access-token",
               otherHeader : "foo",
               'Content-Type' : 'multipart/form-data',
               }, [
               // custom content type
               { name : 'image', filename : 'image.png', type:'image/png', data: this.state.data},
               


                ]).then((resp) => {
               // ...
               }).catch((err) => {
               // ...
               })

fetch('http://192.168.1.13/Demo/upload.php', {
         method: 'POST',
         headers: {
        'Accept': 'application/json',
         'Content-Type': 'application/json',
         },
         body: JSON.stringify({name: nom_du_boutique})

         })

              
               Alert.alert ( 'your photo has been send')
          }


*/



  render() {
    return (
      <View style={styles.container}>
      <Text> nom du boutique</Text>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 3}}
        onChangeText={(nom_du_boutique) => this.setState({nom_du_boutique})}
        value={this.state.text}
      />
      <Image style = {styles.image}
             source = {this.state.imageSource != null ? this.state.imageSource : 
             require ('aut/images/notfound.gif')}/>
                      
            
      <TouchableOpacity style = {styles.button}  >
             <Text style = {styles.text}>select</Text>
      </TouchableOpacity>
         
 
      <TouchableOpacity style = {styles.button}  >
             <Text style = {styles.text}>upload</Text>
      </TouchableOpacity>




      </View>
    );
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

    width : 250,
    height : 50,
    backgroundColor : '#330066',
    marginTop : 15 

  },
  text : {color : 'white',
          textAlign:'center'
         },

  image : {
    width : 200,
    height : 200,
    marginTop : 30
  }       
});

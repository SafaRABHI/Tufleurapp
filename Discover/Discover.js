/*import React, { Component } from 'react';
import {AppRegistry, StyleSheet, ActivityIndicator,FlatList, ListView, Text, View, Alert, Image} from 'react-native';

import ListeItem from 'aut/Discover/ListeItem';


export default class Discover extends Component<Props> {
  
  state = {

  }


 constructor(){
super()
this.state = {
   isLoading: true,
   data : []
 
}}


componentDidMount() {

  this.fetchDtat();
}

fetchDtat = async () => {

 const response = await fetch ("http://www.tufleur.com:7000/graphql" , 
 {

                     method: 'POST',
                       headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                       },

body: JSON.stringify({"query":"query {  allProducts  {edges {node {name description price quantite isActive origin createDate likes principalPicture }}} }",

"variables":null
})
 });
   
 const json = await response.json();
 this.setState ({data :  json.data.allProducts.edges});
};
 
  render() {

    
    return (



      <View style={styles.container}>
 
        <FlatList
        data = {this.state.data}
        //KeyExtractor = {(x,i) => i}
        
  renderItem={({item}) => {

    return <ListeItem image={item} />
  }}
 
  KeyExtractor={
    (index) => { return index }
  }
  
/>
 
      </View>

    )
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
}); */

//NEWWW

/*keyExtractor = {  
                        (item, index) => { return `${item.name.first + index}` } 
                        
                        
                    } */
import React,{Component} from 'React';  
import {  
StyleSheet,  
FlatList,  
View,  
Button,
Text,  
Dimensions  
} from 'react-native';  
//import ListeItem from './src/ListItem';  
import ListeItem from 'aut/Discover/ListeItem';
  
const ITEM_WIDTH = Dimensions.get('window').width;  
var text = "http://www.tufleur.com:8000/media/";
export default class Discover extends Component {  
    state = {  
        columns: 2,  
        key: 1,  
        array: [],  
    }  
  
    constructor(props) {  
        super(props)  
        this.getImageData = this.getImageData.bind(this)  
    }  
  
    componentWillMount() {  
        this.getImageData()  
    }  
  
    getImageData() {  
        fetch('https://randomuser.me/api?page=1&results=10&inc=picture,name',{ 

            method: 'GET',  
            headers: {  
                'Accept': 'application/json',  
                'Content-Type': 'application/json',  
            },  
        }) 
        /*fetch ("http://www.tufleur.com:8000/graphql" , 
 {

                     method: 'POST',
                       headers: {
                      'Accept': 'application/json',
                       'Content-Type': 'application/json',
                       },

body: JSON.stringify({"query":"query {  allProducts  {edges {node {name description price quantite isActive origin createDate likes principalPicture }}} }",

"variables":null
})
 }) */
        .then((response) => response.json())  
        .then((responseJson) => {  
            let newArray = this.state.array.slice()  
            let concatArray = newArray.concat(responseJson.results)  
            this.setState({  
                array: concatArray  
            })  
        })  
    }  
  //uri: 'http://www.tufleur.com:8000/media/images/zarbiya.jpg'
    render() {  
        const { columns, key, array } = this.state  
        return (  
        <View style={{flex:1}}>  
            <Button  
                onPress = {() => {  
                    let { columns, key } = this.state  
                    columns = columns === 3 ? 1 : 3  
                    this.setState({ columns: columns, key: key + 1 })  
                }}  
                title = 'Toggle Layout'  
            />  
            <View style = {styles.container}>  
                <FlatList  
                    key = {key}  
                    numColumns = {columns}  
                    data = {array}  
                    renderItem = {({ item, index }) => {  
                        return <ListeItem 
                            itemWidth = {ITEM_WIDTH / columns - 2 }  
                            image = {{ uri: 'http://www.tufleur.com:8000/media/images/zarbiya.jpg' }} />  
                    }}  
                    keyExtractor = {  
                        (item, index) => { return `${item.name.first + index}` }  
                    }  
                />  
            </View>  
        </View>  
        );  
    }  
}  
  
  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        backgroundColor: '#f5fcff',  
        justifyContent: 'space-around',  
        flexDirection:'row',  
  
    }  
})  
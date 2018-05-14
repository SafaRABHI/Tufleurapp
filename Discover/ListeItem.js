/*import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
  Animated,
  Button,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  View
} from 'react-native';


export default class App extends Component  {
	state = {
		animatePress: new Animated.Value(1)
	}

	animateIn() {

		Animated.timing(this.state.animatePress, {
          toValue: 0.8,
          duration: 200

		}).start()		
	}

	animateOut() {

		Animated.timing(this.state.animatePress, {
          toValue: 1,
          duration: 200

		}).start()	
	}

	render() {

     return (
     	<TouchableWithoutFeedback
     	onPressIn={() => this.animateIn()}
     	onPressOut={() => this.animateOut()}
     	>

     	<Animated.View style={(
          margin: 5,
          transform: [
          {
            scale: this.state.animatePress
          }
          ]

     		)}>
     	
     	<Image style={{width:200,height:100}} source={this.props.image}></Image>
     	<Image style={{width:200,height:100}}  source = {{ uri: 'http://www.tufleur.com:7000/media/images/zarbiya.jpg' }} style={{width: '50%',
                                                                height: 50 ,
                                                                margin: 7,
                                                                borderRadius : 7,
                                                                borderColor : 'black'}}></Image>
     	</Animated.View>
     	</TouchableWithoutFeedback>

     	)
     }

	}
	*/

	import React,{Component} from 'React';  
import {  
TouchableWithoutFeedback,  
Image,  
Animated,  
} from 'react-native';  
  
export default class ListeItem extends Component {  
    state = {  
        animatePress: new Animated.Value(1),  
    }  
  
    animateIn() {  
        Animated.timing(this.state.animatePress, {  
            toValue: 0.8,  
            duration: 200  
        }).start()  
    }  
  
    animateOut() {  
        Animated.timing(this.state.animatePress, {  
            toValue: 1,  
            duration: 200  
        }).start()  
    }  
  
    render() {  
        const { itemWidth, image, onPressItem } = this.props  
        return (  
            <TouchableWithoutFeedback  
                onPress = {() => onPressItem && onPressItem(this.props.image)}  
                onPressIn = {() => this.animateIn()}  
                onPressOut = {() => this.animateOut()}  
            >  
                <Animated.View style = {{  
                    marginTop: 2,  
                    marginBottom: 2,  
                    paddingRight: 4,  
                    transform: [  
                        {  
                            scale: this.state.animatePress  
                        },  
                    ]  
                }}>  
                    <Image style={{ width: itemWidth, height: 200 }} source={image} />  
                </Animated.View>  
            </TouchableWithoutFeedback>  
        );  
    }  
}  







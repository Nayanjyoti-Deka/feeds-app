import React,{Component} from 'react';
import {View,Image,Button,Text,TouchableOpacity} from 'react-native';
import styles from './css/Style.js';

export default class ThirdCard extends Component {

  render(){

      return(
      <View style={styles.thirdContainer}
          <Image
          source={{uri: 'http://tinypic.com/usermedia.php?uo=jJm7XUcEEIwpvI2VrpO2doh4l5k2TGxc#.XSBUSHWFOxs'}}
          style={styles.roundImage}
          />
        <Text style={styles.name}>Alexandra Dadario</Text>
        <Text style={styles.name}>Parker Industries</Text>
        <TouchableOpacity
          style={styles.uxbutton}
          onPress={}
        >
            <Text style={styles.uxtext}>UX-DESIGNER</Text>
      </TouchableOpacity>
      <View style={styles.collaborate}>

      </View>
      </View>
      )
}

}

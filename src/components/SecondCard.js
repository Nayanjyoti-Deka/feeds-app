import React,{Component} from 'react';
import {View,Image,Button,Text} from 'react-native';
import styles from './css/Style.js';

export default class SecondCard extends Component {

  render(){

      return(
      <View style={styles.container}>
        <View style={styles.containerforSecond}>
            <Image
                source={require('http://tinypic.com/m/kc1fdt/1')}
                style = {styles.backgroundImage}
              />
        </View>
        <View style={styles.containerforSecond}>
            <Text style={styles.secondcardHeading}>No Penalty on withdrawal from your fixed deposit</Text>
            <Text style={styles.secondcardText} On first pirtual withdrawal upto 25 of your original FD principal value</Text>
            <Text style={styles.bottomText}>KNOW MORE</Text>
        </View>
      </View>
      );
}

}

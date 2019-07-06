import React,{Component} from 'react';
import {View,Image,Button,Text} from 'react-native';
import styles from './css/Style.js';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class FirstCard extends Component {

  render(){

      return(
      <View style={styles.container}
            <Image
                source={require('http://tinypic.com/m/kc1fdl/1')}
                style = {styles.backgroundImage}
              />

            <View style={styles.roundView>} onPress={() =>
                        this.props.navigation.navigate('SecondCard')
                      }>
                  <Text style={styles.bottomText}>Domestic</Text>
            </View>

            <View style={styles.alignViewToBottom}>
              <Text style={styles.bottomHead}>Fishing in the congo</Text>
              <View style={styles.bottomview}>
                  <Icon name="location" size={30}/>;
                  <Text style={bottomText}>Democratic republic of the congo</Text>
              </View>
            </View>
      </View>
      )
}

}

import {StyleSheet} from 'react-native';

export default const styles= StyleSheet.create({

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container:{
      flex : 1,
  },
  containerforSecond:{
      flex : 2,
      flexDirection:'column',
  },
  roundView:{
    marginTop:30,
    backgroundColor : '#111111',
    textAlign:'center',
    borderRadius: 0 50 50 0;
    height : 40;
    position:'absolute',
    left:0,

}
  bottomHead :{
    fontSize : 30,
    textAlign : 'left',
    fontWeight: 'bold',
    color:'#FFFFFF'
  },
  bottomview{
   flexDirection : 'row',
    height : 50,
  },
  alignViewToBottom :{
    position: 'absolute',
    bottom:0,
    height :40%,
  }
  bottomText:{
      fontSize:10,
      color:'#FFFFFF',
      textAlign : 'left',
  },
  secondcardHeading : {
      fontSize: 40,
      color: '#111111',
      fontWeight: 'bold',
  },
    secondcardText: {
      fontSize: 30,
      color: '#111111',
      fontWeight: 'bold',
    },
  bottomText:{
    fontSize: 40,
    color: 'red',
    fontWeight: 'bold',
    textAlign:'left',
  },
  thirdContainer:{
    flex:1,
    textAlign:'center',

  },
  roundImage:{
      marginTop:20,
      width: 100,
      height: 100,
      borderRadius: 100/ 2,
  },
  name :{
      marginTop:30,
      fontSize: 30,
      fontWeight:'bold',
  }
  industries:{
      fontSize: 20,
      color :
}
  uxbutton:{
    borderWidth:1,
    borderColor:'#A9A9A9',
    alignItems:'center',
    justifyContent:'center',
    width:100,
    height:60,
    backgroundColor:'#fff',
    borderRadius:50,
  },
  uxtext:{
    textAlign: 'center',
    color:'#A9A9A9',
    fontSize:18,
    border:1,
    borderColor:'#A9A9A9',
},
  collaborate: {
    backgroundColor:'#DCDCDC',
    height:50,
    width:'100%',
    border:1,
    borderColor: '#A9A9A9',
  }

});

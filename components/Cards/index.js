import React from 'react';
import { View,Image,StyleSheet,Text, TouchableHighlight } from 'react-native';
import { withNavigation } from 'react-navigation';

const styles = StyleSheet.create({
    cardContainer:{
        padding:5
    },
    innerWrapper:{
        flexDirection:'row',
        padding:3,
        elevation:3,
        backgroundColor:'#fff'
    },
    imgWrapper:{
         flex:1
    },
    image:{
      width:'100%',
      height:100,
    },
    infoWrapper:{
      paddingLeft:10, 
      paddingRight:10, 
      flex:2,
      flexDirection:'column',
    },
    headingText:{
      flex:1.5,
    },
    heading:{
        fontSize:20,
    },
    descText:{
      flex:3
    },
    desc:{
        textAlign:'justify'
    }
  });
 
   
class Cards extends React.Component {
    constructor(props){
      super(props)
      this.state={
        text:''
      }
    }
   render() {
      const {item} = this.props;
      return (
        <TouchableHighlight style={styles.cardContainer} onPress={()=>this.props.navigation.navigate('Details')}>
          <View style={styles.innerWrapper}>
            <View style={styles.imgWrapper}>
                <Image
                    style={styles.image}
                    source={item.img}
                />
            </View>
            <View style={styles.infoWrapper}>
                <View style={styles.headingText}>
                     <Text style={styles.heading}>{item.title}</Text>
                </View>
                <View style={styles.descText}>
                    <Text style={styles.desc}>{item.desc}</Text>
                </View>
            </View>
          </View>
        </TouchableHighlight>
       );
    }
  }
  export default withNavigation(Cards);
import React from 'react';
import { View, StyleSheet, FlatList, Image } from 'react-native';
import Cards from './Cards'


const styles = StyleSheet.create({
  homeWrapper:{
      padding:10
  }
});

const DATA = [
  {
    img: require('./Images/images.jpeg'),
    title: 'First Item',
    desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    img: require('./Images/images.jpeg'),
    title: 'Second Item',
    desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    img: require('./Images/images.jpeg'),
    title: 'Third Item',
    desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    img: require('./Images/images.jpeg'),
    title: 'First Item',
    desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    img: require('./Images/images.jpeg'),
    title: 'Second Item',
    desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    img: require('./Images/images.jpeg'),
    title: 'Third Item',
    desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    img: require('./Images/images.jpeg'),
    title: 'First Item',
    desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    img: require('./Images/images.jpeg'),
    title: 'Second Item',
    desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    img: require('./Images/images.jpeg'),
    title: 'Third Item',
    desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
];

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props)
    this.state={
      text:''
    }
  }
 static navigationOptions = {
        title: 'Home',
        /* No more header config here! */
  };
  render() {
    return (
      <View style={styles.homeWrapper}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Cards item={item} />}
          keyExtractor={item => item.title}
          showsVerticalScrollIndicator={false}
        />
        
      </View>
     );
  }
}


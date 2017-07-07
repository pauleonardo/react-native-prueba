import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native';

import {
  detail
} from '../api-client';

const URLIMG = `https://image.tmdb.org/t/p/w500`

class Detail extends Component {
  constructor(){
    super()

    this.state = {
      image: '',
      content: '',
      title: ''
    }
  }
  componentWillMount(){
    detail(this.props.id)
    .then( (r) => {
      console.log(r.overview);
      this.setState({
        image:r.poster_path,
        title:r.title,
        content:r.overview
      })
      console.log(this.state);
    })
    .catch( (err) => {
      console.error(err);
    })
  }
  render(){
    return(
      <View style={styles.container}>
          <Image
            source={ { uri: `${URLIMG}${this.state.image}` }}
            style={ styles.image }
            resizeMode="stretch"
          />
          <Text style={ styles.title }>
            {this.state.title}
          </Text>
              <ScrollView contentContainerStyle={ styles.containerContent }>
                <Text style={ styles.texto }>
                  { this.state.content }
                </Text>
              </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    // height:30,
    // width:100
  },
  image:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    height:400,
    width:400,
  },
  scroll:{
    flex:.7
  },
  texto:{
    fontSize: 15
  },
  title:{
    flex: .6,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
  },
  containerContent:{
    // flex: .7,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'blue',
    padding: 20,
  }
})

export default Detail;

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

import { Actions } from 'react-native-router-flux';

const URLIMG = `https://image.tmdb.org/t/p/w600`

const filter = (text,cant) => {

  if( text.length <= 0 || text === 'undefined'){
    return ''
  }

  let cadena = '';
  for( let i = 0; i <= cant; i++){
      cadena += text[i]
  }
  cadena += '...';
  return cadena
}

const Card = (props) => (
    <View style={ styles.container }>
      <TouchableOpacity style={styles.container} onPress={ ()=> { Actions.detail({id:props.id}) }} >
      <Image
        style={ styles.image }
        source={ { uri: `${URLIMG}${props.img}` } }
        resizeMode='cover'
       />
      <View style={styles.containerContent}>
          <Text style={ styles.title }>
              {props.title}
          </Text>
          <Text style={ styles.synopsis}>
              { filter(props.overwiev, 120) }
          </Text>
      </View>
    </TouchableOpacity>
    </View>
)

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    backgroundColor: 'white',
    // height: 100,
    padding: 10,
    marginBottom: 15,
  },
  containerContent:{
    flex: .6,
  },
  image:{
    flex: .4,
    padding: 10,
    width:100,
    height: 100,
    marginRight:10,
  },
  title:{
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 10
  },
  synopsis:{
    fontSize: 10
  }
})
export default Card;

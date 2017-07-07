import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';


class SearchBar extends Component{
  render(){
    return(
      <View style={styles.container}>
          <View style={styles.searchBar}>
            <Icon name='ios-search' size={30} color="black" />
            <TextInput
              style={styles.input}
              // value={this.state.text}
              placeholder='Buscar'
              onChangeText={ (ev) => this.props.change(ev) }
              placeholderTextColor="red"
              underlineColorAndroid='transparent'
            />
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'lightgray',
    flex: .2,
    justifyContent: 'center',
    alignItems: 'center',
    // width: 100,
  },
  searchBar:{
    height: 50,
    backgroundColor: 'gray',
    paddingHorizontal:15,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal:10,
  },
  input:{
    height: 50,
    flex: 1,
    // backgroundColor: 'gray'
    paddingHorizontal:10,
  },
})

export default SearchBar;

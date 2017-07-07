import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ListView
} from 'react-native';

import { search } from '../api-client'

import Bar from './search-bar';
import Card from './card';

class List extends Component{
  constructor(){
    super()

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    this.state = {
      page:1,
      listMovie: [],
      lastResult: 0,
      dataSource: ds
    }

    this.handleSearch = this.handleSearch.bind(this)
  }
  componentWillMount(){
    search('pokemon',this.state.page)
    .then( (r) => {

      this.setState({
        listMovie: r.results,
        page: this.state.page+1,
        lastResult: r.results.length
      })

      console.log(this.state.listMovie);

    })
    .catch( (err) => {
      console.err(err);
    })
  }
  handleSearch(text){

    search(text,1)
    .then( (r) => {

      this.setState({
        listMovie: r.results,
        page: this.state.page+1,
        lastResult: r.results.length
      })

      console.log(this.state.listMovie);

    })
    .catch( (err) => {
      console.err(err);
    })

  }
  render(){
    return(
      <View style={ styles.container }>
        <View
          style={ styles.containerBar }
          >
          <Bar change={ (ev) => this.handleSearch(ev) }/>
        </View>
        <ScrollView
          contentContainerStyle={
            styles.containerList
          }
          >
            {
              this.state.listMovie.map( (movie) => (
                  <Card
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    overwiev={movie.overview}
                    img={movie.poster_path}
                  />
              ))
            }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  containerBar:{
    flex: .2
  },
  containerList:{
    backgroundColor: 'lightgray',
  }
})


export default List;

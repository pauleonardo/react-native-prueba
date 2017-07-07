import { Actions, Scene, Router, ActionConst } from 'react-native-router-flux';
import React from 'react';
import List from './components/list-movies';
import Detail from './components/detail-movie';


const Routes = Actions.create(
  <Scene key="root">
      <Scene key="list" component={List} hideNavBar />
      <Scene key="detail" component={Detail} hideNavBar/>
  </Scene>
)

export default Routes;

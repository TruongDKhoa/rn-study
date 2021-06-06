import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ViewPagerAndroid } from 'react-native';
import Basic from './components/basic/basic';
import ScrollViewStudy from './components/basic/scrollView';
import FlatListStudy from './components/basic/flatList';
import LifeCycleComponent from './components/basic/lifeCycle';
import CommentList from './components/basic/commentList';
import LoginComponent from './components/LoginComponent';
import AddComponent from './components/redux/AddComponent';

export default function App() {
  return (
    <View style={{
      flex: 1,
      // flexDirection: 'column',
      // backgroundColor: 'aquamarine',
      // justifyContent: 'center',
      // justifyContent: 'space-around',
      // justifyContent: 'space-between',
      // alignItems: 'stretch'
    }}>
      {/* <Basic></Basic> */}
      {/* <ScrollViewStudy></ScrollViewStudy> */}
      {/* <FlatListStudy></FlatListStudy> */}
      {/* <LifeCycleComponent></LifeCycleComponent> */}
      {/* <CommentList></CommentList> */}
      {/* <LoginComponent></LoginComponent> */}
      <AddComponent></AddComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'mediumaquamarine',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

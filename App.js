import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ViewPagerAndroid } from 'react-native';
import Basic from './components/basic';
import ScrollViewStudy from './components/scrollView';
import FlatListStudy from './components/flatList';
import LifeCycleComponent from './components/lifeCycle';
import CommentList from './components/commentList';

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
      <FlatListStudy></FlatListStudy>
      {/* <LifeCycleComponent></LifeCycleComponent> */}
      {/* <CommentList></CommentList> */}
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

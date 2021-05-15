import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ViewPagerAndroid } from 'react-native';
import Basic from './components/basic';
import ScrollViewStudy from './components/scrollView';
import FlatListStudy from './components/flatList';

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
      {/* <View> */}
      {/* <Basic></Basic> */}
      {/* <ScrollViewStudy></ScrollViewStudy> */}
      <FlatListStudy></FlatListStudy>
      {/* </View> */}
      {/* <Text style={{ width: 50, height: 50, backgroundColor: 'red' }}></Text>
      <Text style={{ width: 50, height: 50, backgroundColor: 'blue' }}></Text>
      <Text style={{ width: 50, height: 50, backgroundColor: 'green' }}></Text> */}
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

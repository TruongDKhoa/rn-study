import { registerRootComponent } from 'expo';
import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainComponent from './components/navigation/MainComponent';
import DetailComponent from './components/navigation/DetailComponent';
import ThirdComponent from './components/navigation/ThirdComponent';
import { NAVIGATION_SCREEN } from './shared/navigation-screens';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';
import TaskManagerComponent from './components/redux/TaskManagerComponent';

let store = createStore(allReducers);
const Appp = () => (
    <Provider store={store}>
        <TaskManagerComponent />
    </Provider>
);

const AppNavigator = createStackNavigator({
    "MainScreen": {
        screen: MainComponent,
        navigationOptions: {
            headerTitle: 'Main'
        }
    },
    "DetailScreen": {
        screen: DetailComponent,
        navigationOptions: {
            headerTitle: 'Detail'
        }
    },
    "ThirdScreen": {
        screen: ThirdComponent,
        navigationOptions: {
            headerTitle: 'Third'
        }
    },
})

const App = createAppContainer(AppNavigator);
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

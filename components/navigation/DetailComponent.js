import React, { Component } from 'react';
import {
    Text, View
} from 'react-native';
import Button from 'react-native-button';
// import { ThirdScreen } from '../screenNames';
export default class DetailComponent extends Component {
    render() {
        console.log(`this.props.navigation = ${JSON.stringify(this.props.navigation)}`);
        let paramsFromMainScreen = this.props.navigation.state.params;
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'mediumseagreen',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                    This is Detail Screen
                </Text>
                <Text>Params from Main Screen: </Text>
                <Text>Movie's name : {paramsFromMainScreen.name}</Text>
                <Text>release year : {paramsFromMainScreen.releaseYear}</Text>
                <Button
                    containerStyle={{ padding: 10, margin: 20, width: 200, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
                    style={{ fontSize: 18, color: 'white' }}
                    onPress={() => {
                        this.props.navigation.navigate("ThirdScreen");
                    }}>
                    Navigate to Third
                </Button>
            </View>
        );
    }
}
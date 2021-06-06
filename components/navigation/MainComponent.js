import React, { Component } from 'react';
import Button from 'react-native-button';
import {
    ActivityIndicator,
    Text, View
} from 'react-native';

export default class MainComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        let headerTitle = 'Main';
        let headerTitleStyle = {
            color: 'red'
        }
        let headerRight = () => (<Button
            containerStyle={{ margin: 5, padding: 10, borderRadius: 5, backgroundColor: 'darkviolet' }}
            style={{ fontSize: 15, color: 'white' }}
            onPress={() => {
                params.onSave();
            }}
        >Save</Button>);

        return { headerTitle, headerTitleStyle, headerRight }
    }

    _onSave() {
        console.log('saved!!!');
        this.props.navigation.setParams({ isSaving: false });
        // setInterval(() => {
        //     console.log('I finished some...');
        //     this.props.navigation.setParams({ isSaving: false });
        // }, 3000);
    }

    componentDidMount() {
        this.props.navigation.setParams({ onSave: this._onSave.bind(this), isSaving: false });
    }

    render() {
        const { navigation } = this.props;
        let dataSendToDetail = {
            name: "Star Wars",
            releaseYear: 1977
        };

        let mainView = (navigation.state.params && navigation.state.params.isSaving)
            ? <ActivityIndicator></ActivityIndicator>
            : <View style={{
                flex: 1,
                backgroundColor: 'dodgerblue',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                    This is Main Screen
                </Text>
                <Button
                    containerStyle={{ padding: 10, margin: 20, width: 200, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
                    style={{ fontSize: 18, color: 'white' }}
                    onPress={() => {
                        // this.props.navigate(DetailScreen);
                        navigation.navigate("DetailScreen", dataSendToDetail);
                    }}>
                    Navigate to Detail
                </Button>
                <Button
                    containerStyle={{ padding: 10, margin: 20, width: 200, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
                    style={{ fontSize: 18, color: 'white' }}
                    onPress={() => {
                        navigation.navigate("ThirdScreen");
                    }}>
                    Navigate to Third
                </Button>
            </View>

        return mainView;
    }
}
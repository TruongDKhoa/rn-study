import React, { Component } from 'react';
import {
    StyleSheet,
    View, Text, TextInput, Alert,
    Button,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';

class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showText: true
        };

        var taskToDo = () => {
            this.setState(previousState => {
                return {
                    showText: !previousState.showText
                }
            })
        }
        const time = 1000;
        setInterval(taskToDo, time);
    }

    render() {
        let textDisplay = this.state.showText ? this.props.inputText : '';

        return (
            <Text> {textDisplay}
            </Text>
        )
    }
}

class InputText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Enter your username',
            password: 'Enter your password'
        }
    }
    render() {
        return (
            <View>
                <Text>User Name: </Text>
                <TextInput
                    style={styles.inputForm}
                    keyboardType='default'
                    placeholder="Enter your username"
                    onChangeText={
                        (text) => {
                            this.setState(previousState => {
                                previousState = text;
                            })
                        }
                    }
                />
                <Text>Password: </Text>
                <TextInput
                    style={styles.inputForm}
                    secureTextEntry={true}
                    placeholder="Enter your password"
                />
                <TextInput
                    style={styles.inputForm}
                    multiline={true}
                />
            </View>
        )
    }
}

export default class Basic extends Component {
    render() {
        return (
            <View style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch'
            }}>
                <InputText></InputText>
                <View style={{
                    backgroundColor: 'yellow',
                    width: 100,
                    padding: 5,
                    borderRadius: 16,
                    shadowRadius: 20,
                    shadowOpacity: 0.5
                }}>
                    <Button
                        title="Click"
                        onPress={() => {
                            Alert.alert('You pressed the button!!!')
                        }}
                    ></Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputForm: {
        height: 40,
        padding: 10,
        margin: 10,
        borderColor: 'gray',
        borderWidth: 1
    }
});



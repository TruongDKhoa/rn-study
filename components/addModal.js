import React, { Component } from 'react'
import {
    FlatList, StyleSheet, Text, View, Image,
    Platform, TouchableHighlight, Dimensions,
    TextInput
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';

var screen = Dimensions.get('window');

export default class AddModalStudy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.myModal = React.createRef();
        this.showModal = this.showModal.bind(this);
    }

    showModal() {
        this.setState({
            isOpen: true
        })
    }

    closeModal = () => {
        this.setState({
            isOpen: false
        })
    }
    render() {
        return (
            <Modal
                ref={this.myModal}
                isOpen={this.state.isOpen}
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: Platform.OS === 'ios' ? 30 : 0,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 280
                }}
                position='center'
                backdrop={true}
                onClosed={() => {
                    alert('Modal close');
                }}
            >
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        textAlign: 'center'
                    }}
                >New food's Information</Text>
                <TextInput
                    style={{
                        height: 40,
                        width: screen.width - 150,
                        borderBottomColor: 'gray',
                        borderBottomWidth: 1,
                        paddingLeft: 10,
                        marginTop: 20
                    }}
                    placeholder="Enter new food's name"
                />
            </Modal>
        )
    }
}

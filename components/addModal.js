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
            isOpen: false,
            newFoodName: '',
            newFoodDes: ''
        }
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

    onClickAdd() {
        if (this.state.newFoodName.length == 0 || this.state.newFoodDes.length == 0) {
            return;
        }
        const newFood = {
            id: '098',
            title: this.state.newFoodName,
            description: this.state.newFoodDes
        }
        this.props.flatListData._addNewFood(newFood);
        // this.props.flatListData.refreshFlatList('098');
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
                    // alert('Modal close');
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
                    defaultValue={this.state.newFoodName}
                    onChangeText={(text) => {
                        this.setState({ newFoodName: text })
                    }}
                />
                <TextInput
                    style={{
                        height: 40,
                        width: screen.width - 150,
                        borderBottomColor: 'gray',
                        borderBottomWidth: 1,
                        paddingLeft: 10,
                        marginTop: 20
                    }}
                    placeholder="Enter new food's description"
                    value={this.state.newFoodDes}
                    onChangeText={(text) => {
                        this.setState({ newFoodDes: text })
                    }}
                />
                <Button
                    style={{ fontSize: 18, color: 'white' }}
                    containerStyle={{
                        marginTop: 30,
                        marginHorizontal: 40,
                        paddingVertical: 10,
                        paddingHorizontal: 40,
                        borderRadius: 10,
                        backgroundColor: 'orange'
                    }}
                    onPress={() => this.onClickAdd()}
                >
                    Add
                </Button>
            </Modal>
        )
    }
}

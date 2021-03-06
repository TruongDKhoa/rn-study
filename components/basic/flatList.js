import React, { Component } from 'react'
import {
    Alert, Image, TextInput, Dimensions, RefreshControl,
    FlatList, StyleSheet, Text, View, TouchableHighlight, Platform, TouchableHighlightBase
} from 'react-native';
import flatListData from '../../data/flatListData';
import SwipeOut from 'react-native-swipeout';
import AddModalStudy from './addModal';
import { StudyService } from '../../networking/service';

var screen = Dimensions.get('window');
class FlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRowId: null,
            newFoodName: ''
        }
    }

    render() {
        const swipeOutSetting = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if (this.state.activeRowId != null) {
                    this.setState({ activeRowId: null });
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({
                    activeRowId: this.props.item.id.toString()
                });
            },
            right: [ // right button and below is its behavior
                {
                    onPress: () => {
                        const deletedRowKey = this.state.activeRowId;
                        Alert.alert(
                            'Alert',
                            'Are you sure to delete?',
                            [
                                { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cacel' },
                                {
                                    text: 'Yes', onPress: () => {
                                        flatListData.splice(this.props.item.index, 1);
                                        this.props.parentFlatList.refreshFlatList(deletedRowKey);
                                    }
                                },
                            ],
                            { cancelable: true }
                        )
                    },
                    text: 'Delete', type: 'delete' // Title and Text of button
                }
            ],
            rowId: this.props.item.index,
            sectionId: 1
        }
        return (
            <SwipeOut {...swipeOutSetting}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'stretch',
                    backgroundColor: '#f9c2ff',
                    padding: 20,
                    marginVertical: 8,

                }}>
                    <View>
                        <Image style={{ width: 100, height: 100 }}
                            source={{ url: this.props.item.img }}
                        />
                    </View>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            paddingLeft: 10
                        }}
                    >
                        <Text
                            style={{ fontSize: 17, fontWeight: 'bold', marginBottom: 10 }}
                        >
                            {this.props.item.title}
                        </Text>
                        <Text>
                            {this.props.item.description}
                        </Text>
                    </View>
                </View>
            </SwipeOut>
        )
    }
}
export default class FlatListStudy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deletedRowKey: null,
            refreshing: false,
            foodList: []
        }
        // createRef
        this.addModal = React.createRef();
        // - If dont have this assignment then 
        // 'this' in _onPressAdd isn't 'this' in FlatListStudy => can not call 'refs'
        // - This assignment means making them to one.
        this._onPressAdd = this._onPressAdd.bind(this);
        this.studyService = new StudyService();
    }

    componentDidMount() {
        this.loadFoodList();
    }

    async loadFoodList() {
        this.setState({
            refreshing: true
        })
        const response = await this.studyService.getFoodList();
        const foodListResponse = await response.json();

        this.setState({
            foodList: foodListResponse,
            refreshing: false
        })
    }

    refreshFlatList = (key) => {
        this.setState({
            deletedRowKey: key
        })
    };

    _onPressAdd() {
        this.addModal.current.showModal();
    }

    _addNewFood(newFood) {
        if (!newFood) {
            alert(newFood);
            return;
        }

        flatListData.push(newFood);
        alert('Add new food successful!')
        this.addModal.current.closeModal();
    }

    onRefresh = () => {
        this.loadFoodList();
    }

    render() {
        const renderItem = ({ item }) => (
            <FlatListItem item={item} parentFlatList={this}></FlatListItem>
        )
        return (
            <View style={{
                flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0,
                backgroundColor: 'blue',
            }} >
                <View style={{
                    flexDirection: 'row',
                    backgroundColor: 'tomato',
                    height: 64,
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                }}>
                    <TouchableHighlight
                        style={{ marginRight: 10 }}
                        underlayColor='tomato'
                        onPress={() => {
                            this._onPressAdd()
                        }
                        }
                    >
                        <Image
                            style={{ width: 35, height: 35 }}
                            source={require('../../assets/images/add.png')} />
                    </TouchableHighlight>
                </View>

                <FlatList
                    data={this.state.foodList}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    refreshControl={<RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this.onRefresh}
                    />}
                >
                </FlatList>
                <AddModalStudy
                    ref={this.addModal}
                    flatListData={this}
                ></AddModalStudy>
            </ View>
        )
    }
}

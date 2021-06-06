import React, { Component } from 'react';
import {
    Alert, Image, TextInput, Dimensions,
    FlatList, StyleSheet, Text, View, TouchableHighlight, Platform, TouchableHighlightBase
} from 'react-native';

import { StudyService } from '../../networking/service';

export default class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flatCommentList: []
        };
        this.studyService = new StudyService();
        this.loadData = this.loadData.bind(this);
    }
    componentDidMount() {
        this.loadData();
    }

    async loadData() {
        const result = await this.studyService.getCommentListByPromise();
        const responseData = await result.json();

        this.setState({
            flatCommentList: responseData
        })
    }
    render() {
        return (
            <View>
                <Text>Testing...</Text>
                <FlatList
                    data={this.state.flatCommentList}
                    keyExtractor={item => item.id.toString()}
                    renderItem={(item) => {
                        // console.log(item);
                        return (
                            <Text>
                                {item.item.name}
                            </Text>
                        )
                    }}
                ></FlatList>

            </View>
        )
    }
}

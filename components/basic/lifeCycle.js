import React, { Component } from 'react'
import {
    View, Text
} from 'react-native';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state({
            number: 0
        })
        console.log(`${Date.now()}. This is Constructor`);
    }
    UNSAFE_componentWillMount() {
        console.log(`${Date.now()}. This is componentWillMount`);
    }
    componentDidMount() {
        console.log(`${Date.now()}. This is componentDidMount`);
    }
    shouldComponentUpdate() {
        console.log(`${Date.now()}. This is shouldComponentUpdate`);
        return true
    }
    componentWillUpdate() {
        console.log(`${Date.now()}. This is componentWillUpdate`);
    }
    componentDidUpdate() {
        console.log(`${Date.now()}. This is componentWillUpdate`);
    }

    render() {
        console.log(`${Date.now()}. This is Render`);

        return (
            <View
                style={{
                    flex: 1,
                    marginTop: 34
                }}
            >
            </View>
        )
    }
}

export default class LifeCycleComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const lifeCycle = <LifeCycle></LifeCycle>;
        return (
            <View>
                {lifeCycle}
            </View>
        )
    }
}

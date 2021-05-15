import React, { Component } from 'react';
import {
    AppRegister,
    Button,
    ScrollView,
    Image, View, Text, TextInput,
    Dimensions,
    Alert
} from 'react-native';

class ScrollViewVertical extends Component {
    render() {
        let imgWidth = Dimensions.get('window').width;

        return (
            <ScrollView style={{ marginVertical: 40 }}
                keyboardDismissMode="on-drag"
                minimumZoomScale={0.5}
                maximumZoomScale={3}
            >
                <Image
                    source={require('../assets/images/wallpaper.jpg')}
                    style={{
                        width: imgWidth,
                        height: imgWidth * (2560 / 1920),
                        marginBottom: 20
                    }}
                />
                <Text style={{
                    fontSize: 20,
                    padding: 15,
                    color: 'green',
                    backgroundColor: 'yellow'
                }}>
                    This is text field
               </Text>
                <TextInput
                    style={{
                        padding: 15,
                        margin: 10,
                        borderWidth: 1
                    }}
                ></TextInput>
            </ScrollView>
        )
    }
}

class ScrollViewHorizontal extends Component {
    render() {
        let imgWidth = Dimensions.get('window').width;

        return (
            <ScrollView style={{ marginVertical: 40 }}
                horizontal={true}
                pagingEnabled={true} // like changing page?
                showsHorizontalScrollIndicator={true} // has a scroll bar below
                scrollIndicatorInsets={{ top: 10, bottom: 10, right: 10, left: 10 }} // set space for scroll bar.
                onMomentumScrollBegin={() => {
                    // alert('on Momentum Scroll Begin'); // when start scroll
                }}
                onMomentumScrollEnd={() => {
                    // alert('on Momentum Scroll End'); // when end scroll
                }}
                onScroll={(event) => {
                    console.log(event);
                }}
                scrollEventThrottle={100}
            >
                <View>
                    <Image
                        source={require('../assets/images/wallpaper.jpg')}
                        style={{
                            width: imgWidth,
                            height: imgWidth * (2560 / 1920),
                            marginBottom: 20
                        }}
                    />
                    <Text style={{
                        fontSize: 20,
                        padding: 15,
                        color: 'green',
                        backgroundColor: 'yellow'
                    }}>
                        This is text field
                    </Text>
                    <TextInput
                        style={{
                            padding: 15,
                            margin: 10,
                            borderWidth: 1
                        }}
                    ></TextInput>
                </View>
                <View>
                    <Image
                        source={require('../assets/images/wallpaper.jpg')}
                        style={{
                            width: imgWidth,
                            height: imgWidth * (2560 / 1920),
                            marginBottom: 20
                        }}
                    />
                    <Text style={{
                        fontSize: 20,
                        padding: 15,
                        color: 'green',
                        backgroundColor: 'yellow'
                    }}>
                        This is text field
                    </Text>
                    <TextInput
                        style={{
                            padding: 15,
                            margin: 10,
                            borderWidth: 1
                        }}
                    ></TextInput>
                </View>
            </ScrollView>
        )
    }
}

export default class ScrollViewStudy extends Component {
    render() {

        return (
            // <ScrollViewVertical></ScrollViewVertical>
            <ScrollViewHorizontal></ScrollViewHorizontal>
        )
    }
}

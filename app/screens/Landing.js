import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

//hello with link to camera
//monthly spending goals
//list of recent transactions
//pending shit
//picture of image at bottom with maybe a profile <view></view>
//importing the colors we need
//two bubble charts

class Landing extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={{paddingLeft: '10%'}}>
            <Icon
                name = 'navicon'
                type='evilicon'
                color='#fff'

            />
                <View style={{ paddingLeft: '10%' }}>
                    <Text style={styles.welcomeText}>Hey Raj, welcome!</Text>
                    <Text>Do you have a receipt to take care of?</Text>
                    <Icon
                        name='linked-camera'
                        color='#fff'
                    />

                </View>
            </LinearGradient>

        );
    }
}


const styles = StyleSheet.create({

    welcomeText: {
        fontSize: 25,
    },
    topView: {
        backgroundColor: '#3d4d65',
    }


});

export default Landing;
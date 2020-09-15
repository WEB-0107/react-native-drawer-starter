// React Native Navigation Drawer – Example using Latest Navigation Version //
// https://aboutreact.com/react-native-navigation-drawer //
import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';
import {Card} from "react-native-elements";
import {useEffect} from "react";
import { SliderBox } from "react-native-image-slider-box";

const CookieDetails = (props) => {

    useEffect(() => {
        // console.log(props.route.params)
        // let item = props.route.params;
        // console.log('item==>', item.details)
    })
    let item = props.route.params;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Card>
                <SliderBox images={item.more_images} />
                <Card.Title>{item.title}</Card.Title>
                <Card.Title style={{fontSize: 14}}>{item.details}</Card.Title>
                <Card.Title style={{fontSize: 14}}>${item.price}</Card.Title>
            </Card>
        </SafeAreaView>
    );
}

export default CookieDetails;

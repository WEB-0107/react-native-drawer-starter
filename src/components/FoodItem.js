import {Card, ListItem, Avatar, Button, Icon, Image} from 'react-native-elements';
import React from "react";
import food from '../assets/images/foods/big-1.jpg'
import {Text, View} from "react-native";

function FoodItem(props) {

    return (
        <Card containerStyle={{borderRadius: 8}}>
            <Card.Image source={{uri: props.item.image}} resizeMode={'contain'}/>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>
                    {props.item.title}
                </Text>
                <Text>
                    ${props.item.price}
                </Text>
            </View>
        </Card>
    )
}

export default FoodItem;

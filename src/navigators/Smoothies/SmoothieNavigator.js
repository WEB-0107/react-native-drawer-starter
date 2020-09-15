import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import CookieList from "../../screens/Cookies/CookieList";
import NavigationDrawerStructure from "../DrawerStrucure";
import SmoothieList from "../../screens/Smoothies/SmoothieList";

const Stack = createStackNavigator();

function SmoothieNavigator({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="CookieList">
            <Stack.Screen
                name="SmoothieList"
                component={SmoothieList}
                options={{
                    title: 'Smoothie List', //Set Header Title
                    headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
                    headerStyle: {
                        backgroundColor: '#fff', //Set Header color
                    },
                    headerTintColor: '#000', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />
        </Stack.Navigator>
    );
}

export default SmoothieNavigator;

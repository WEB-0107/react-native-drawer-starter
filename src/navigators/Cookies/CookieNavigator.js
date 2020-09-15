import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import CookieList from "../../screens/Cookies/CookieList";
import NavigationDrawerStructure from "../DrawerStrucure";
import CookieDetails from "../../screens/Cookies/CookieDetails";

const Stack = createStackNavigator();

function CookieNavigator({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="CookieList">
            <Stack.Screen
                name="CookieList"
                component={CookieList}
                options={{
                    title: 'Cookies', //Set Header Title
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
            <Stack.Screen
                name="CookieDetails"
                component={CookieDetails}
                options={{
                    title: 'CookieDetails', //Set Header Title
                    // headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
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

export default CookieNavigator;

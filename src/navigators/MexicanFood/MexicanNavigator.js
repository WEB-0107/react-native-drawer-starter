import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import CookieList from "../../screens/Cookies/CookieList";
import NavigationDrawerStructure from "../DrawerStrucure";
import MexicanList from "../../screens/MexicanFood/MexicanList";
import MexicanDetails from "../../screens/MexicanFood/MexicanDetails";

const Stack = createStackNavigator();

function MexicanNavigator({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="CookieList">
            <Stack.Screen
                name="MexicanFood"
                component={MexicanList}
                options={{
                    title: 'Mexican Food', //Set Header Title
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
                name="MexicanDetails"
                component={MexicanDetails}
                options={{
                    title: 'Mexican Details', //Set Header Title
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

export default MexicanNavigator;

import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import CookieList from "../../screens/Cookies/CookieList";
import NavigationDrawerStructure from "../DrawerStrucure";
import ItalianList from "../../screens/ItalianFood/ItalianList";

const Stack = createStackNavigator();

function ItalianNavigator({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="CookieList">
            <Stack.Screen
                name="ItalianFood"
                component={ItalianList}
                options={{
                    title: 'Italian Food', //Set Header Title
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

export default ItalianNavigator;

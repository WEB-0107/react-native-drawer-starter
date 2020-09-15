/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button, TouchableOpacity, Image
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import CookieNavigator from "./src/navigators/Cookies/CookieNavigator";
import ItalianNavigator from "./src/navigators/ItalianFood/ItalianNavigator";
import MexicanNavigator from "./src/navigators/MexicanFood/MexicanNavigator";
import SmoothieNavigator from "./src/navigators/Smoothies/SmoothieNavigator";
import PizzaNavigator from "./src/navigators/Pizza/PizzaNavigator";
import {Icon, ListItem} from "react-native-elements";
import cookieImg from './src/assets/images/icons/gingerbread-man.png'
import italianImg from './src/assets/images/icons/italian.png'
import mexicanImg from './src/assets/images/icons/mexican.png'
import pizzaImg from './src/assets/images/icons/pizza.png'
import smoothieImg from './src/assets/images/icons/smoothie.png'
import axios from 'axios';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from "./src/redux/reducers";

axios.defaults.baseURL = 'http://192.168.108.11:8000/';

const Drawer = createDrawerNavigator();
const store = createStore(rootReducer,
    applyMiddleware(
        thunkMiddleware,
    ),
);

const App: () => React$Node = () => {

    function CustomDrawerContent(props) {
        return (
            <DrawerContentScrollView {...props}>
                <ListItem containerStyle={{backgroundColor: '#000', color: '#fff'}}
                          onPress={() => {
                              props.navigation.navigate('Cookies');
                          }}
                >
                    <ListItem.Content>
                        <View style={styles.subtitleView}>
                            <Image source={cookieImg} resizeMode={'contain'} style={styles.ratingImage}/>
                            <ListItem.Title style={{color: 'white'}}>Cookies</ListItem.Title>
                        </View>
                    </ListItem.Content>
                </ListItem>
                <ListItem containerStyle={{backgroundColor: '#000', color: '#fff'}}
                          onPress={() => {
                              props.navigation.navigate('MexicanFood');
                          }}
                >
                    <ListItem.Content>
                        <View style={styles.subtitleView}>
                            <Image source={mexicanImg} resizeMode={'contain'} style={styles.ratingImage}/>
                            <ListItem.Title style={{color: 'white'}}>Mexican Food</ListItem.Title>
                        </View>
                    </ListItem.Content>
                </ListItem>
                <ListItem containerStyle={{backgroundColor: '#000', color: '#fff'}}
                          onPress={() => {
                              props.navigation.navigate('ItalianFood');
                          }}
                >
                    <ListItem.Content>
                        <View style={styles.subtitleView}>
                            <Image source={italianImg} resizeMode={'contain'} style={styles.ratingImage}/>
                            <ListItem.Title style={{color: 'white'}}>Italian Food</ListItem.Title>
                        </View>
                    </ListItem.Content>
                </ListItem>
                <ListItem containerStyle={{backgroundColor: '#000', color: '#fff'}}
                          onPress={() => {
                              props.navigation.navigate('Smoothies');
                          }}
                >
                    <ListItem.Content>
                        <View style={styles.subtitleView}>
                            <Image source={smoothieImg} resizeMode={'contain'} style={styles.ratingImage}/>
                            <ListItem.Title style={{color: 'white'}}>Smoothies</ListItem.Title>
                        </View>
                    </ListItem.Content>
                </ListItem>
                <ListItem containerStyle={{backgroundColor: '#000', color: '#fff'}}
                          onPress={() => {
                              props.navigation.navigate('Pizza');
                          }}
                >
                    <ListItem.Content>
                        <View style={styles.subtitleView}>
                            <Image source={pizzaImg} resizeMode={'contain'} style={styles.ratingImage}/>
                            <ListItem.Title style={{color: 'white'}}>Pizza</ListItem.Title>
                        </View>
                    </ListItem.Content>
                </ListItem>
            </DrawerContentScrollView>
        );
    }

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Drawer.Navigator
                    drawerType={'slide'}
                    drawerContentOptions={{
                        activeTintColor: '#fff',
                        itemStyle: {marginVertical: 30, color: '#fff', backgroundColor: '#fff'},
                        labelStyle: {color: '#fff'},
                        activeBackgroundColor: '#ff0000',
                        inactiveBackgroundColor: '#0000ff',
                        // contentContainerStyle: {width: 80}
                    }}
                    drawerStyle={{width: 160, backgroundColor: '#000', color: '#fff'}}
                    drawerContent={props => <CustomDrawerContent {...props}/>}
                >
                    <Drawer.Screen
                        name="Cookies"
                        options={{drawerLabel: 'Cookies'}}
                        component={CookieNavigator}/>
                    <Drawer.Screen
                        name="MexicanFood"
                        options={{drawerLabel: 'Mexican Food'}}
                        component={MexicanNavigator}/>
                    <Drawer.Screen
                        name="ItalianFood"
                        options={{drawerLabel: 'Italian Food'}}
                        component={ItalianNavigator}/>
                    <Drawer.Screen
                        name="Smoothies"
                        options={{drawerLabel: 'Smoothies'}}
                        component={SmoothieNavigator}/>
                    <Drawer.Screen
                        name="Pizza"
                        options={{drawerLabel: 'Pizza'}}
                        component={PizzaNavigator}/>
                </Drawer.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

const styles = StyleSheet.create({
    subtitleView: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 5
    },
    ratingImage: {
        // contentFit: 'contain',
        height: 40,
        width: 100
    },
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

export default App;

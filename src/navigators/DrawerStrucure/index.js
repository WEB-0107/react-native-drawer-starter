import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Image } from 'react-native';
import drawerImg from '../../assets/images/drawer.png'

const NavigationDrawerStructure = (props)=> {
    //Structure for the navigatin Drawer
    const toggleDrawer = () => {
        //Props to open/close the drawer
        props.navigationProps.toggleDrawer();
    };

    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={()=> toggleDrawer()}>
                {/*Donute Button Image */}
                <Image
                    // source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}}
                    source={drawerImg}
                    style={{ width: 25, height: 25, marginLeft: 5 }}
                />
            </TouchableOpacity>
        </View>
    );
}

export default NavigationDrawerStructure;

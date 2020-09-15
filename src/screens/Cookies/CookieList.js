// React Native Navigation Drawer – Example using Latest Navigation Version //
// https://aboutreact.com/react-native-navigation-drawer //
import * as React from 'react';
import {
    Button,
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    ActivityIndicator
} from 'react-native';
import FoodItem from "../../components/FoodItem";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {useEffect} from "react";
import {getFeedAction} from "../../redux/actions/CookieActions";
import {Col, Row, Grid} from "react-native-easy-grid";
import SquareGrid from "react-native-square-grid";

const CookieList = (props) => {

    useEffect(() => {
        props.getCookies();
    }, [])

    if (props.cookieData.loading) {
        return (
            <SafeAreaView style={styles.container}>
                <ActivityIndicator size="large"/>
            </SafeAreaView>
        );
    }

    let cookieData = props.cookieData.cookies;

    const renderItem = (item) => {
        return (
            <TouchableOpacity>
                <FoodItem item={item}/>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView>
                {
                    cookieData && cookieData.map((item, i) => {
                        return (
                            <TouchableOpacity key={i}
                            onPress={() => props.navigation.navigate({name: 'CookieDetails', params: item})}
                            >
                                <FoodItem item={item}/>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
});

const mapStateToProps = state => ({
    cookieData: state.cookieData,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getCookies: getFeedAction,
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CookieList);

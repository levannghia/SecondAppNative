/* eslint-disable */
import React, { useState } from "react";
import { SafeAreaView, Text, View, StatusBar, ImageBackground, Dimensions, TextInput, Image, TouchableOpacity } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default Home = (props) => {
    const {navigation, route} = props
    // const {email} = route.params
    return (

        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar translucent
                backgroundColor="transparent"
                barStyle="light-content"></StatusBar>
            <View style={{ flex: 1 }}>
    
                <View style={{
                    width: "100%",
                    height: "20%",
                    marginTop: 0.3 * windowHeight,
                    justifyContent: "space-evenly",
                    alignItems: "center",
                }}>
                    <TouchableOpacity style={{ width: "60%", backgroundColor: 'blue', height: "30%", justifyContent: "center", alignItems: "center", borderRadius: 100 }}
                    onPress={() => {
                        navigation.goBack()
                        //navigation.popToTop() Tro ve trang dau tien
                        //navigation.pop(2) Tro ve lai 2 lan
                    }}>
                        <Text style={{ color: "white", fontWeight: 'bold', fontSize: 18 }}>BACK</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: "60%", backgroundColor: 'black', height: "30%", justifyContent: "center", alignItems: "center", borderRadius: 100 }}>
                        <Text style={{ color: "white", fontWeight: 'bold', fontSize: 18 }}>SETTING</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    width: "100%",
                    height: "20%",
                    marginTop: 0.15 * windowHeight,
                    justifyContent: "space-evenly",
                    alignItems: "center",
                }}>
                   <Text>HOME
                   </Text>
                </View>
            </View>
        </SafeAreaView>

    )
}
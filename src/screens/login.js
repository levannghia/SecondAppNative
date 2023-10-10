/* eslint-disable */
import React, { useState } from "react";
import { SafeAreaView, Text, View, StatusBar, ImageBackground, Dimensions, TextInput, Image, TouchableOpacity } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default Login = (props) => {
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [email, setEmail] = useState('');
    const {navigation} = props
    return (
        <ImageBackground source={require("../assets/images/bg-welcome.jpg")} style={{ flex: 1 }}>
            <StatusBar translucent
                backgroundColor="transparent"
                barStyle="light-content"></StatusBar>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{flex: 1}}>
                    <View style={{
                        width: "100%",
                        height: "20%",
                        marginTop: 0.3 * windowHeight,
                        alignItems: 'center'
                    }}>
                        <View style={{width: "70%", height: 35, flexDirection: 'row', justifyContent: "space-between", alignItems: 'center'}}>
                            <Text style={{color: 'white'}}>Email</Text>
                            <TextInput value={email} onChangeText={(text) => setEmail(text)} style={{borderBottomWidth: 1, borderBottomColor: 'white', width: "70%", height: "100%", color: 'white' }}
                                autoCapitalize="none"
                            ></TextInput>
                        </View>
                        <View style={{width: "70%", height: 35, flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', marginTop: 10}}>
                            <Text style={{color: 'white'}}>Password</Text>
                            <TextInput style={{borderBottomWidth: 1, borderBottomColor: 'white', width: "70%", height: "100%", color: 'white', paddingRight: 30 }}
                                autoCapitalize="none"
                                secureTextEntry={passwordVisible ? false : true}
                            ></TextInput>
                            <TouchableOpacity style={{height: "100%", width: 25 , position: 'absolute', right:0}}
                                onPress={() => setPasswordVisible(!passwordVisible)}    
                            >
                            <Image source={require('../assets/images/question.png')} style={{width: "100%", height: "100%"}} resizeMode="contain" tintColor={"white"}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{
                        width: "100%",
                        height: "20%",
                        marginTop: 0.15 * windowHeight,
                        justifyContent:"space-evenly",
                        alignItems: "center",
                    }}>
                        <TouchableOpacity style={{width: "60%", backgroundColor: 'blue', height:"30%", justifyContent:"center", alignItems: "center", borderRadius: 100}} onPress={() => {
                            navigation.navigate('MyDrawer')
                        }}>
                            <Text style={{color: "white", fontWeight: 'bold', fontSize: 18}}>LOGIN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: "60%", backgroundColor: 'black', height:"30%", justifyContent:"center", alignItems: "center", borderRadius: 100}}>
                            <Text style={{color: "white", fontWeight: 'bold', fontSize: 18}}>REGISTER</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}
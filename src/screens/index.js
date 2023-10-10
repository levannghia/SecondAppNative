/* eslint-disable */
import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from "./login";
import Home from "./home";
import Setting from "./setting";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    return (
        <Drawer.Navigator initialRouteName="Home" screenOptions={{
            headerShown: false
        }}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Setting" component={Setting} />
        </Drawer.Navigator>
    )
}

export default RootComponent = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="MyDrawer" component={MyDrawer} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
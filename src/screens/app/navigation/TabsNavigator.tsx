import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import { Image, ImageSourcePropType, StyleSheet } from "react-native";

import { AppNavScreenList } from "./AppNavConstants";
import ProfileScreen from "../profile/ProfileScreen";
import HomeScreen from "../home/HomeScreen";
import DetailsScreen from "../details/DetailsScreen";

const home = require("src/assets/icons/home.png") as ImageSourcePropType;
const profile = require("src/assets/icons/profile.png") as ImageSourcePropType; 
const activity = require("src/assets/icons/activity.png") as ImageSourcePropType;



const Tab = createBottomTabNavigator();
const { Navigator, Screen } = Tab as any;

const TabsNavigator = (): JSX.Element => {

    const initialScreen = AppNavScreenList.HOME_SCREEN; 

    return (
        <Navigator
        initialRouteName={initialScreen}
        screenOptions={({route}: any) => ({
         })}
        >

        </Navigator>
    )

} 

export default TabsNavigator;
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import { Image, ImageSourcePropType, StyleSheet } from "react-native";

import { AppNavScreenList } from "./AppNavConstants";
import ProfileScreen from "../profile/ProfileScreen";
import HomeScreen from "../home/HomeScreen";
import DetailsScreen from "../details/DetailsScreen";
import  colors  from "theme/colors.theme";

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
            tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.black,
        tabBarLabelStyle: styles.label,
        tabBarIcon: ({ focused }: any) => {
            let iconImage;
            const style = focused ? styles.iconActive : styles.icon;
            switch (route.name) {
              case AppNavScreenList.HOME_SCREEN:
                iconImage = <Image source={home} style={style} />;
                break;
              case AppNavScreenList.DETAILS_SCREEN:
                iconImage = <Image source={activity} style={style} />;
                break;
              case AppNavScreenList.PROFILE_SCREEN:
                iconImage = <Image source={profile} style={style} />;
                break;
              default:
                break;
            }
            return iconImage;
          },
          headerShown: false,
          tabBarShowLabel: true,
          tabBarHideOnKeyboard: true,
          tabBarStyle: ((tabRoute) => {})(route),
        })}
        backBehavior="none"
        sceneContainerStyle={{ backgroundColor: colors.white }}
      >
        <Screen
          name={AppNavScreenList.HOME_SCREEN}
          component={HomeScreen}
          options={{ tabBarLabel: ("Candy House") || "" }}
        />
        <Screen
          name={AppNavScreenList.DETAILS_SCREEN}
          component={DetailsScreen}
          options={{ tabBarLabel: ("Map") || "" }}
        />
  
        <Screen
          name={AppNavScreenList.PROFILE_SCREEN}
          component={ProfileScreen}
          options={{ tabBarLabel: ("User") || "" }}
        />
      </Navigator>
    );
  };  

export default TabsNavigator;

const styles = StyleSheet.create({
    contentContainer: {
      display: "flex",
      backgroundColor: colors.white,
      position: "absolute",
      width: "100%",
      bottom: 0,
    },
    label: {
      fontFamily: "Roboto_500Medium",
      textTransform: "uppercase",
    },
    shadowStyle: {
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.3,
      shadowRadius: 9,
    },
    icon: {
      height: 24,
      width: 24,
    },
    iconActive: {
      height: 24,
      width: 24,
      tintColor: colors.primary,
    },
  });
  
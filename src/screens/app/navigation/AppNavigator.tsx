import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import TabsNavigator from "./TabsNavigator";

import { AppNavScreenList, AppStackParamList } from "./AppNavConstants";
import DetailsScreen from "../details/DetailsScreen";

const Stack = createNativeStackNavigator<AppStackParamList>();
const { Navigator, Screen } = Stack;

const AppNavigator = () => {
    return(
        <Navigator 
        screenOptions={{
            headerShown: false, 
            contentStyle: {
                backgroundColor: "red"
            }
        }}
        >

            <Screen 
            name={AppNavScreenList.BOTTOM_TAB_NAV}
            component={TabsNavigator}
            options={{
                animation: "none",
            }}
            />
        </Navigator>
    )
}

export default AppNavigator;
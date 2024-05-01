import React from "react"; 

import {createNativeStackNavigator} from "@react-navigation/native-stack"; 

import { AuthNavScreenList, AuthStackParamList } from "./AuthNavConstants";


import OnboardingScreen from "../onboarding/OnboardingScreen";
import LoginScreen from "../login/LoginScreen";
import RegisterScreen from "../register/RegisterScreen";
import { Auth } from "aws-amplify";

const Stack = createNativeStackNavigator<AuthStackParamList>(); 
const {Navigator, Screen} = Stack; 

const AuthNavigator = () => {
    return (
        <Navigator 
        initialRouteName={AuthNavScreenList.ONBOARDING_SCREEN}
        screenOptions={{
            headerShown: false,
        }}
        >

            <Screen 
            name={AuthNavScreenList.ONBOARDING_SCREEN}
            component={OnboardingScreen}
            options={{orientation: "portrait"}}
            />
            <Screen 
            name={AuthNavScreenList.LOGIN_SCREEN}
            component={LoginScreen}
            options={{orientation: "portrait"}}
            />
            <Screen 
            name={AuthNavScreenList.REGISTER_SCREEN}
            component={RegisterScreen}
            options={{orientation: "portrait"}}
            />

        </Navigator>
    );
};

export default AuthNavigator;
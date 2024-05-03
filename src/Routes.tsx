import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import AppNavigator from "screens/app/navigation/AppNavigator";
import AuthNavigator from "screens/auth/navigation/AuthNavigator";

import { getIsUserSigned } from "store/slice/applicationSlice";
import { useAppSelector } from "store/storeHook";

const Routes = () => {
  const isUserSignedIn = useAppSelector(getIsUserSigned);

  return (
    <NavigationContainer>
      {isUserSignedIn ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Routes;



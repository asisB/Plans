import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from "./src/screens/auth/splash/SplashScreen";
import Providers from "./src/Providers";
import Routes from "./src/Routes";
import * as Font from "expo-font";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_500Medium,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          Roboto_400Regular,
          Roboto_700Bold,
          Roboto_500Medium,
          Roboto_900Black,
        });
        await new Promise((resolve: any) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (appIsReady) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, []);

  if (!appIsReady) {
    return <SplashScreen/>
  }

  return (
    <View style={{ flex: 1 }}>
      <Providers>
        <Routes />
      </Providers>
    </View>
  );
}
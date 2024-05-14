import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, Keyboard } from "react-native";
import { AuthNavScreenList, AuthStackParamList } from '../navigation/AuthNavConstants';
import { RouteProp } from '@react-navigation/native';
import Screen from "../../../components/Screen";
import KeyboardAwareView from 'components/KeyboardAwareView';
import Back from 'components/Back';
import colors from 'theme/colors.theme';
import Typography from 'components/Typography';

interface ILoginScreen {
  navigation: StackNavigationProp<
  AuthStackParamList, 
  AuthNavScreenList.LOGIN_SCREEN
  >;
  route: RouteProp<AuthStackParamList, AuthNavScreenList.LOGIN_SCREEN>;
}


const LoginScreen = ({navigation, route}: ILoginScreen) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [emailAddress, setEmailAddress] = useState<string>();
  const [password, setPassword] = useState<string>();

  const onLoginPress = async () => {
    try{
     console.log("Data Check")
    }catch(error){
      console.error("Error")
    }
  }

  return (
    <Screen safeView={true}>
      <KeyboardAwareView>
        <Back onPress={() => navigation.goBack()} style={styles.back}/>
        <View style={styles.conatiner}>
          <Typography variant='h3'>Login</Typography>
        </View>
      </KeyboardAwareView>

    </Screen>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    alignItems: "center",
  }, 
  back: {
    marginStart: 24,
  }
})

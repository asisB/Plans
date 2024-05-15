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
import InputField from 'components/InputField';

interface ILoginScreen {
  navigation: StackNavigationProp<
    AuthStackParamList,
    AuthNavScreenList.LOGIN_SCREEN
  >;
  route: RouteProp<AuthStackParamList, AuthNavScreenList.LOGIN_SCREEN>;
}


const LoginScreen = ({ navigation, route }: ILoginScreen) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [emailAddress, setEmailAddress] = useState<string>();
  const [password, setPassword] = useState<string>();

  const onLoginPress = async () => {
    try {
      console.log("Data Check")
    } catch (error) {
      console.error("Error")
    }
  }

  return (
    <Screen safeView={true}>
      <KeyboardAwareView>
        <Back onPress={() => navigation.goBack()} style={styles.back} />
        <View style={styles.conatiner}>
          <View style={styles.imageContainer}>
            <Typography variant='h3'>Login</Typography>
          </View>
          <View style={styles.fieldContainer}>
            <InputField
              label='Enter Your Email'
              value={emailAddress || ""}
              placeholder='Email Address'
              onChangeText={(em) => setEmailAddress(em)}
            >

            </InputField>
          </View>


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
  imageContainer: {
    alignItems: "center",
    justifyContent: 'center'
  },
  fieldContainer: {
    flex: 1,
    width: "100%",
    gap: 16,
    marginTop: 48,
  },
  back: {
    marginStart: 24,
  }
})

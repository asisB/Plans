import React from 'react'
import {View, Text, StyleSheet} from "react-native";

function LoginScreen() {
  return (
    <View style={styles.conatiner}>
        <Text>LoginScreen</Text>
        
    </View>
  )
}

export default LoginScreen; 

const styles = StyleSheet.create({
  conatiner: {
    flex: 1, 
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3843FF"
  }
})

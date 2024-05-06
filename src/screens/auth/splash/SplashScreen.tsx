import { View, Text, Image, StyleSheet } from 'react-native'
import React, {useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';

export default function SplashScreen() {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: 'center', backgroundColor: "white"}}>
        <Image style={{width: 200, height: 200}} source={require('../../../assets/images/background.png')}/>
        <View>
        <Text style={styles.text}>Welcome {"\n"} To Your {"\n"} Personal Planner</Text>
        </View>
        
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 32, 
    fontWeight: 'bold', 
    fontFamily: "Roboto_500Medium", 
    alignItems: "flex-start"
  }
})


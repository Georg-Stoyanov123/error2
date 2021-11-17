import React from 'react';
import { StyleSheet, Text, SafeAreaView, Dimensions, Platform, OS, StatusBar} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import 'react-native-gesture-handler'
import HomeScreen from './screens/HomeScreen'
import BowelCancerScreen from './screens/BowelCancerScreen'
import BoneCancerScreen from './screens/BoneCancerScreen'
import BreastCancerScreen from './screens/BreastCancerScreen'
import BloodCancerScreen from './screens/BloodCancerScreen'
import ColonCancerScreen from './screens/ColonCancerScreen'
import SkinCancerScreen from './screens/SkinCancerScreen'
import LungCancerScreen from './screens/LungCancerScreen'
import KidneyCancerScreen from './screens/KidneyCancerScreen'
import OralCancerScreen from './screens/OralCancerScreen'
import BronchusCancerScreen from './screens/BronchusCancerScreen'
import ProstateCancerScreen from './screens/ProstateCancerScreen'
import {NavigationContainer} from '@react-navigation/native'
const Stack = createStackNavigator()
export default class App extends React.Component {
  
  render() {
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <HomeScreen/>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home screen" screenOptions={{
            headerShown: true
        }}>
            <Stack.Screen name="Home screen" component={HomeScreen}/>
            <Stack.Screen name="Bowel cancer" component={BowelCancerScreen} />
            <Stack.Screen name="Bone cancer" component={BoneCancerScreen} />
            <Stack.Screen name="Breast cancer" component={BreastCancerScreen} />
            <Stack.Screen name="Blood cancer" component={BloodCancerScreen} />
            <Stack.Screen name="Colon cancer" component={ColonCancerScreen} />
            <Stack.Screen name="Skin cancer" component={SkinCancerScreen} />
            <Stack.Screen name="Lung cancer" component={LungCancerScreen} />
            <Stack.Screen name="Kidney cancer" component={KidneyCancerScreen} />
            <Stack.Screen name="Oral cancer" component={OralCancerScreen} />
            <Stack.Screen name="Bronchus cancer" component={BronchusCancerScreen} />
            <Stack.Screen name="Prostate cancer" component={ProstateCancerScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaView>
    
  )
  };
}

const styles = StyleSheet.create({
  droidSafeArea:{
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});

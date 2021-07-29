import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {RootStackParamsList} from './data/navigationParams';
import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';

interface RouterProps {}
const Stack = createStackNavigator<RootStackParamsList>();
const StackRouter: React.FC<RouterProps> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={'none'} initialRouteName="HOME">
        <Stack.Screen name="SPLASH" component={SplashScreen} />
        <Stack.Screen name="HOME" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRouter;

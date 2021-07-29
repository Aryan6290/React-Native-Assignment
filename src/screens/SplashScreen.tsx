import React from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import {globalStyles} from '../globalStyles';

interface SplashScreenProps {}

const SplashScreen: React.FC<SplashScreenProps> = () => {
  return (
    <View style={globalStyles.centeredContainer}>
      <Text> Something</Text>
    </View>
  );
};
// const styles = StyleSheet.create({});
export default SplashScreen;

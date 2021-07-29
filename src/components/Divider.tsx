import React from 'react';
import {StyleSheet, View} from 'react-native';

interface DividerProps {}

const Divider: React.FC<DividerProps> = () => {
  return <View style={styles.dividerStyle} />;
};
const styles = StyleSheet.create({
  dividerStyle: {
    marginVertical: 5,
    width: '95%',
    backgroundColor: '#c5c5c5',
    height: 1,
  },
});
export default Divider;

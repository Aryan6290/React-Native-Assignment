import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {globalStyles} from '../globalStyles';

interface RecurrenceBoxProps {
  borderColor: string;
  value: string;
  onPress: () => void;
}

const RecurrenceBox: React.FC<RecurrenceBoxProps> = props => {
  return (
    <Pressable
      onPress={props.onPress}
      style={[styles.boxStyle, {borderColor: props.borderColor}]}>
      <Text style={globalStyles.subtitleStyle}>Recurrence </Text>
      <Text style={styles.valueStyle}>{props.value}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  boxStyle: {
    paddingTop: 8,
    paddingHorizontal: 10,
    paddingBottom: 10,

    flex: 1,
    marginHorizontal: 5,
    borderWidth: 1.2,
    borderColor: '#000',
    borderRadius: 5,
  },
  valueStyle: {
    fontSize: 16,
    marginTop: 4,
    fontFamily: 'Poppins-Regular',
  },
});
export default RecurrenceBox;

import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

interface DayCircleProps {
  bgColor: string;
  bubbleText: string;
  onPress: () => void;
}

const DayCircle: React.FC<DayCircleProps> = props => {
  return (
    <Pressable
      onPress={props.onPress}
      style={[styles.circleStyle, {backgroundColor: props.bgColor}]}>
      <Text>{props.bubbleText}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  circleStyle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginRight: 5,

    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default DayCircle;

import React from 'react';

import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
interface MangoBoxProps {
  text: string;
  onPress: () => void;
  checked: boolean;
  bgColor: string;
  borderWidth: number;
}

const MangoBox: React.FC<MangoBoxProps> = props => {
  return (
    <Pressable
      onPress={props.onPress}
      style={[
        styles.containerStyle,
        {backgroundColor: props.bgColor, borderWidth: props.borderWidth},
      ]}>
      <Text style={styles.textStyle}>{props.text} </Text>
      <View style={styles.checkerContainer}>
        {props.checked == false ? (
          <View style={styles.emptyCircleStyle} />
        ) : (
          <View style={styles.filledCircleStyle}>
            <Icon size={10} name="checkmark-sharp" color="#fff" />
          </View>
        )}
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  containerStyle: {
    paddingLeft: 10,
    alignSelf: 'stretch',
    borderRadius: 5,

    borderColor: '#a9a9a9',
    marginBottom: 16,
    paddingTop: 8,
    paddingBottom: 12,
  },
  textStyle: {
    marginRight: 50,
    color: '#424242',
  },
  emptyCircleStyle: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#000',
  },
  filledCircleStyle: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#000',
    backgroundColor: '#4caf50',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkerContainer: {
    position: 'absolute',
    top: 12,
    right: 10,
  },
});
export default MangoBox;

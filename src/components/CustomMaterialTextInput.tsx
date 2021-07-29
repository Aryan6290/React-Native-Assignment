import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {colors} from '../data/colors';
import {globalStyles} from '../globalStyles';

interface CustomTextInputProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
}

const CustomTextInput: React.FC<CustomTextInputProps> = props => {
  const [borderColor, setborderColor] = useState('#a9a9a9');
  return (
    <View style={[globalStyles.fullWidthBoxStyle, {borderColor: borderColor}]}>
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        onFocus={() => setborderColor(colors.primary)}
        onBlur={() => setborderColor('#a9a9a9')}
        style={styles.TextInputStyle}
        label={props.placeholder}
        theme={{
          colors: {
            text: '#333',
            primary: colors.primary,
            placeholder: '#a9a9a9',
          },
        }}
        underlineColor={'#fff'}
        underlineColorAndroid={'#fff'}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  TextInputStyle: {backgroundColor: '#fff'},
});
export default CustomTextInput;

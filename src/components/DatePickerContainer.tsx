import React from 'react';
import {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {globalStyles} from '../globalStyles';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
interface DatePickerContainerProps {
  label: string;
  value: Date;
  onChangeText: (date: Date) => void;
}

const DatePickerContainer: React.FC<DatePickerContainerProps> = props => {
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate: Date = selectedDate || props.value;
    setShowPicker(!showPicker);
    props.onChangeText(currentDate);
  };
  return (
    <View style={styles.cardStyle}>
      <Text style={globalStyles.subtitleStyle}>{props.label} </Text>
      <Pressable onPress={() => setShowPicker(!showPicker)}>
        <Text style={styles.dateTextStyle}>
          {moment(props.value).format('dddd , MMMM D Y')}
        </Text>
      </Pressable>

      {showPicker && (
        <DateTimePicker
          dateFormat={'day month year'}
          testID="dateTimePicker"
          value={props.value}
          mode={'date'}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  cardStyle: {
    width: '100%',
    marginTop: 12,
    marginBottom: 12,

    paddingTop: 8,
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderWidth: 0.8,
    borderColor: '#a9a9a9',
    borderRadius: 5,
  },
  dateTextStyle: {
    fontSize: 16,
    marginTop: 4,
    fontFamily: 'Poppins-Regular',
  },
});
export default DatePickerContainer;

import React from 'react';
import {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {globalStyles} from '../globalStyles';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

interface TimePickerrContainerProps {
  label: string;
  value: Date;
  onChangeText: (date: Date) => void;
  textColor: string;
}

const TimePickerrContainer: React.FC<TimePickerrContainerProps> = props => {
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
        <Text style={[styles.dateTextStyle, {color: props.textColor}]}>
          {moment(props.value).format('hh:mm a')}
        </Text>
      </Pressable>

      {showPicker && (
        <DateTimePicker
          dateFormat={'day month year'}
          testID="dateTimePicker"
          value={props.value}
          mode={'time'}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  cardStyle: {
    marginRight: 8,
    paddingTop: 8,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 0.8,
    borderColor: '#a9a9a9',
    borderRadius: 5,
  },
  dateTextStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 4,
    fontFamily: 'Poppins-Regular',
  },
});
export default TimePickerrContainer;

import moment from 'moment';
import React, {useEffect, useRef} from 'react';
import {useState} from 'react';
import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../data/colors';
import {globalStyles} from '../../globalStyles';
import {DayModel} from '../../models/DayModel';
import DatePickerContainer from '../DatePickerContainer';
import DayCircle from '../DayCircle';
import Divider from '../Divider';
import RecurrenceBox from '../RecurrenceBox';

interface VideoCallModalContentProps {
  closeModel: () => void;
  endDate: Date;
  daysArray: Array<DayModel>;
  updateArray: (newArray: Array<DayModel>) => void;
  changeEndDate: (date: Date) => void;
}

const VideoCallModalContent: React.FC<VideoCallModalContentProps> = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const onPressDayCircles = (index: number) => {
    console.log(index);
    const tempArray = [...props.daysArray];
    tempArray[index].checked = !tempArray[index].checked;
    props.updateArray([...tempArray]);
  };
  const values = ['Daily', 'Weekly'];
  const [selectedValue, setSelectedValue] = useState(0);
  useEffect(() => {
    if (selectedValue == 1) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 3000,
        easing: Easing.elastic(2),
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 5000,
        easing: Easing.elastic(2),
        useNativeDriver: true,
      }).start();
    }
  }, [fadeAnim, selectedValue]);
  return (
    <View style={globalStyles.modalContainer}>
      <View style={globalStyles.notchStyle} />
      <Text style={styles.contentTitle}>Setup Recurring video call 👋!</Text>
      <Text style={styles.contentSubtitle}>
        Weekly on {moment(props.endDate).format('dddd , MMMM D Y')}
      </Text>
      <Divider />
      <View style={{flexDirection: 'row'}}>
        {values.map((item, _i) => (
          <RecurrenceBox
            key={item}
            onPress={() => setSelectedValue(_i)}
            value={item}
            borderColor={_i == selectedValue ? colors.primary : '#a9a9a9'}
          />
        ))}
      </View>
      {selectedValue == 1 && (
        <Animated.View style={{alignSelf: 'stretch', opacity: fadeAnim}}>
          <Text style={styles.labelStyle}> Repeat on</Text>

          <View style={styles.dayBoxStyle}>
            {props.daysArray.map((item, _i) => (
              <DayCircle
                key={item.day}
                onPress={() => {
                  onPressDayCircles(_i);
                }}
                bgColor={
                  props.daysArray[_i].checked ? colors.secondary : '#a9a9a9'
                }
                bubbleText={item.day.slice(0, 1)}
              />
            ))}
          </View>
        </Animated.View>
      )}

      <DatePickerContainer
        label="End Date"
        value={props.endDate}
        onChangeText={date => props.changeEndDate(date)}
      />
      <Pressable
        style={{width: '100%', alignSelf: 'center'}}
        onPress={props.closeModel}>
        <LinearGradient
          style={styles.submitBtnStyle}
          colors={['#F8AB25', '#F18926']}>
          <Text style={{color: '#fff'}}>Submit</Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  contentTitle: {
    paddingTop: 16,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#212121',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  submitBtnStyle: {
    marginTop: 20,
    paddingVertical: 16,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayBoxStyle: {
    alignSelf: 'flex-start',
    paddingVertical: 10,
    flexDirection: 'row',
  },
  contentSubtitle: {
    color: '#03a9f4',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  labelStyle: {
    alignSelf: 'flex-start',
    fontFamily: 'Poppins-Regular',

    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default VideoCallModalContent;

/* <Button
        testID={'close-button'}
        title="Close"
        onPress={props.closeModel}
      /> */

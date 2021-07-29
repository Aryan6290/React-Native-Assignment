/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect} from 'react';
import {useState} from 'react';
import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from 'react-native';
import HomeHeader from '../components/customHeaders/HomeHeader';
import CustomMaterialTextInput from '../components/CustomMaterialTextInput';
import ProfileCard from '../components/ProfileCard';
import DatePickerContainer from '../components/DatePickerContainer';
import Icon from 'react-native-vector-icons/Ionicons';
import {globalStyles} from '../globalStyles';
import moment from 'moment';
import TimePickerContainer from '../components/TimePickerContainer';
import Modal from 'react-native-modal';
import VideoCallModalContent from '../components/modals/VideoCallModalContent';
import LinkMangoModalContent from '../components/modals/LinkMangoModalContent';
import {colors} from '../data/colors';
import {DayModel} from '../models/DayModel';
import {getMangoes} from '../services/HomeServices';
import {Mango} from '../models/MangoModel';
import MangoBox from '../components/MangoBox';
import LinearGradient from 'react-native-linear-gradient';
interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const [isOpenLinkModal, setIsOpenLinkModal] = useState(false);
  const [videoTitle, setVideoTitle] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [startDate, setstartDate] = useState(new Date());
  const [endtDate, setEndDate] = useState(new Date());
  const [startTime, setstartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [desceiption, setDescription] = useState('');
  const [mangoes, setMangoes] = useState<Mango[]>([]);
  const [isSubmitButtonEnabled, setIsSubmitButtomEnabled] = useState(false);

  const [checkedMangoes, setCheckedMangoes] = useState<Mango[]>([]);
  const a = moment(startTime, 'hh:mm:ss a');
  const b = moment(endTime, 'hh:mm:ss a');

  const differenceinHours = `${b.diff(a, 'hours')}`;
  const differenceinMinutes = `${moment
    .utc(moment(b, 'HH:mm:ss').diff(moment(a, 'HH:mm:ss')))
    .format('mm')}`;
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const changeEndDate = (date: Date) => {
    setEndDate(date);
  };

  const updateDaysArray = (newArray: Array<DayModel>) => {
    setDays([...newArray]);
  };

  const changeStartTime = (date: Date) => {
    setstartTime(date);
  };
  const changeEndTime = (date: Date) => {
    if (date.getTime() < startTime.getTime()) {
      ToastAndroid.show(
        'End time cannot be less than starting time',
        ToastAndroid.SHORT,
      );
    } else {
      setEndTime(date);
    }
  };
  const updateMangoesArray = (newArray: Array<Mango>) => {
    setMangoes([...newArray]);
    const tempArray: Mango[] = [];
    newArray.forEach((item, _i) =>
      item.checked == true ? tempArray.push(item) : null,
    );
    setCheckedMangoes(tempArray);
  };
  const onSubmitRecurringCalls = () => {
    setIsEnabled(true);
    setisVideoCallModelOpen(false);
  };
  const getData = async () => {
    const tempArray = await getMangoes();
    const array = [
      {
        index: 1,
        value: 2,
      },
      {
        index: 2,
        value: 2,
      },
    ];
    const ans = Math.min(array[0].value, array[1].value);
    const tempArray2: Array<Mango> = [];
    tempArray?.forEach((item, i) =>
      tempArray2.push({
        _id: item._id,
        title: item.title,
        checked: false,
      }),
    );
    setMangoes([...tempArray2]);
  };

  const [days, setDays] = useState<Array<DayModel>>([
    {
      day: 'Sunday',
      checked: false,
    },
    {
      day: 'Monday',
      checked: false,
    },
    {
      day: 'Tuesday',
      checked: false,
    },
    {
      day: 'Wednesday',
      checked: false,
    },
    {
      day: 'Thursday',
      checked: false,
    },
    {
      day: 'Friday',
      checked: false,
    },
    {
      day: 'Saturday',
      checked: false,
    },
  ]);
  const [isVideoCallModelOpen, setisVideoCallModelOpen] = useState(false);

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (videoTitle != '' && startTime.getTime() < endTime.getTime()) {
      setIsSubmitButtomEnabled(true);
    } else {
      setIsSubmitButtomEnabled(false);
    }
  }, [endTime, isSubmitButtonEnabled, startTime, videoTitle]);
  return (
    <View style={globalStyles.container}>
      <ScrollView
        nestedScrollEnabled={true}
        style={{flex: 1, marginBottom: 70}}>
        <HomeHeader />
        <ProfileCard
          name="SAYANTAN CHANDRA"
          title="HOST"
          imageUrl="https://reactjs.org/logo-og.png"
        />

        <CustomMaterialTextInput
          placeholder="Video Call title"
          onChangeText={text => setVideoTitle(text)}
          value={videoTitle}
        />
        <DatePickerContainer
          value={startDate}
          label="Wednesday"
          onChangeText={date => setstartDate(date)}
        />
        <View style={styles.timePickerBoxStyle}>
          <View style={{flex: 2}}>
            <TimePickerContainer
              value={startTime}
              label="From"
              textColor="#000"
              onChangeText={changeStartTime}
            />
          </View>
          <View style={{flex: 2}}>
            <TimePickerContainer
              value={endTime}
              textColor="#f50057"
              label="To"
              onChangeText={changeEndTime}
            />
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            {startTime.getTime() < endTime.getTime() && (
              <Text style={styles.differenceTextStyle}>
                {differenceinHours == '0' ? '' : differenceinHours + 'hr'}{' '}
                {differenceinMinutes == '00' ? '' : differenceinMinutes + 'm'}
              </Text>
            )}
          </View>
        </View>
        <View style={styles.hintContainerStyle}>
          <Icon name="chatbubble" color={colors.secondary} size={22} />
          <View style={{flex: 1, marginLeft: 10, marginRight: 5}}>
            <Text>
              Lorem ipsumd dolor sit amet consectetur ad ipisic ing elit naya
              swit.
            </Text>
          </View>
        </View>
        <Pressable
          onPress={() => {
            isEnabled ? setisVideoCallModelOpen(true) : null;
          }}
          style={styles.videoContainerStyle}>
          <View style={styles.switchContainerStyle}>
            <Text style={globalStyles.titleStyle}>Recurring video call</Text>
            <Switch
              trackColor={{
                false: '#767577',
                true: colors.primary,
              }}
              thumbColor={isEnabled ? 'gold' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() =>
                isEnabled
                  ? setIsEnabled(false)
                  : setisVideoCallModelOpen(!isVideoCallModelOpen)
              }
              value={isEnabled}
            />
          </View>
          {isEnabled && (
            <Text style={styles.contentSubtitle}>
              Weekly until {moment(endtDate).format('dddd , MMMM D Y')}
            </Text>
          )}
        </Pressable>

        <Pressable
          onPress={() => setIsOpenLinkModal(!isOpenLinkModal)}
          style={styles.linkMangoContainerStyle}>
          <View
            style={{
              marginBottom: 5,
              flexDirection: 'row',
              alignSelf: 'stretch',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={globalStyles.subtitleStyle}>
              Link Mango to this video call
            </Text>
            {checkedMangoes.length == 0 && (
              <Icon name="chevron-forward-sharp" size={20} />
            )}
          </View>
          {checkedMangoes.length != 0 && (
            <View style={{marginTop: 6}}>
              {checkedMangoes.map(
                (item, _i) =>
                  item.checked && (
                    <MangoBox
                      key={item._id}
                      borderWidth={0}
                      bgColor={colors.grey}
                      text={item.title}
                      onPress={() => {}}
                      checked={item.checked}
                    />
                  ),
              )}
            </View>
          )}
        </Pressable>
        <View style={[styles.linkMangoContainerStyle]}>
          <TextInput
            onChangeText={text => setDescription(text)}
            value={desceiption}
            placeholderTextColor="#a9a9a9"
            placeholder="Add video call description (optional)"
          />
        </View>
      </ScrollView>
      <Modal
        onBackButtonPress={() => setisVideoCallModelOpen(!isVideoCallModelOpen)}
        onBackdropPress={() => setisVideoCallModelOpen(!isVideoCallModelOpen)}
        testID={'modal'}
        isVisible={isVideoCallModelOpen}
        onSwipeComplete={toggleSwitch}
        style={styles.view}>
        <VideoCallModalContent
          updateArray={updateDaysArray}
          daysArray={days}
          changeEndDate={changeEndDate}
          closeModel={onSubmitRecurringCalls}
          endDate={endtDate}
        />
      </Modal>
      <Modal
        onBackButtonPress={() => setIsOpenLinkModal(!isOpenLinkModal)}
        onBackdropPress={() => setIsOpenLinkModal(!isOpenLinkModal)}
        testID={'modal'}
        isVisible={isOpenLinkModal}
        style={styles.view}>
        <LinkMangoModalContent
          closeModal={() => setIsOpenLinkModal(!isOpenLinkModal)}
          mangoes={mangoes}
          updateArray={updateMangoesArray}
        />
      </Modal>

      <Pressable onPress={() => {}} style={styles.submitBtnStyle}>
        <LinearGradient
          style={{
            alignSelf: 'stretch',
            flex: 1,
            paddingVertical: 16,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
          }}
          colors={
            isSubmitButtonEnabled
              ? [colors.primary, colors.secondary]
              : ['#a9a9a9', '#a9a9a9']
          }>
          <Text style={{color: '#fff'}}>Save</Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  timePickerBoxStyle: {
    flexDirection: 'row',
  },
  differenceTextStyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentSubtitle: {
    color: '#42a5f5',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Regular',
  },
  hintContainerStyle: {
    flexDirection: 'row',
    marginTop: 12,
    paddingVertical: 14,
    borderRadius: 10,
    paddingLeft: 10,
    backgroundColor: '#fcf2e8',
  },
  videoContainerStyle: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',

    marginTop: 12,
    paddingVertical: 16,
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 5,
    backgroundColor: colors.grey,
  },
  switchContainerStyle: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },

  linkMangoContainerStyle: {
    borderColor: '#a9a9a9',
    borderWidth: 0.7,

    marginTop: 12,
    paddingVertical: 10,
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 10,
  },

  submitBtnStyle: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 8,
    width: '100%',
    backgroundColor: '#a9a9a9',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 10,
  },
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
export default HomeScreen;

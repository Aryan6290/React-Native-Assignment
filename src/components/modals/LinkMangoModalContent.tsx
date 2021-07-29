import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../data/colors';
import {globalStyles} from '../../globalStyles';
import {Mango} from '../../models/MangoModel';

import Divider from '../Divider';
import MangoBox from '../MangoBox';

interface LinkMangoModalContentProps {
  closeModal: () => void;
  updateArray: (newArray: Array<Mango>) => void;
  mangoes: Array<Mango>;
}

const LinkMangoModalContent: React.FC<LinkMangoModalContentProps> = props => {
  const onPressMangoBox = (index: number) => {
    console.log(index);
    const tempArray = [...props.mangoes];
    tempArray[index].checked = !tempArray[index].checked;
    props.updateArray([...tempArray]);
  };
  return (
    <View style={globalStyles.modalContainer}>
      <View style={globalStyles.notchStyle} />
      <Text style={styles.contentTitle}>Link Mango</Text>
      <Divider />
      <View style={{marginBottom: 10, marginTop: 10}}>
        <Text style={globalStyles.subtitleStyle}>
          From here you get to access your completed and pending shoutouts from
          creators.
        </Text>
      </View>

      <ScrollView style={styles.mangoScrollStyle}>
        {props.mangoes.map((item, _i) => (
          <MangoBox
            borderWidth={0.7}
            key={item._id}
            bgColor="#fff"
            text={item.title}
            onPress={() => {
              onPressMangoBox(_i);
            }}
            checked={item.checked}
          />
        ))}
      </ScrollView>
      <Pressable style={styles.btnContainerStyle} onPress={props.closeModal}>
        <LinearGradient
          style={styles.submitBtnStyle}
          colors={[colors.primary, colors.secondary]}>
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
    marginBottom: 12,
  },
  mangoScrollStyle: {
    height: 300,
    marginTop: 10,
    alignSelf: 'stretch',
    marginBottom: 10,
  },
  btnContainerStyle: {
    width: '100%',
    alignSelf: 'center',
  },
  submitBtnStyle: {
    paddingVertical: 16,
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default LinkMangoModalContent;

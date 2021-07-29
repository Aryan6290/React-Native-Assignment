import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
interface HomeHeaderProps {}

const HomeHeader: React.FunctionComponent<HomeHeaderProps> = () => {
  return (
    <View style={styles.headerStyle}>
      <Icon style={styles.iconStyle} name="chevron-back-sharp" size={28} />
      <View style={{flex: 1}}>
        <Text style={styles.headerTextStyle}> Create Video Call</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headerStyle: {
    paddingTop: 15,
    paddingBottom: 20,
    borderBottomColor: '#000',
    borderBottomWidth: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    position: 'absolute',
    bottom: 15,
    left: 2,
  },
  headerTextStyle: {
    alignSelf: 'center',
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default HomeHeader;

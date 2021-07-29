import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {globalStyles} from '../globalStyles';

interface ProfileCardProps {
  name: string;
  imageUrl: string;
  title: string;
}

const ProfileCard: React.FC<ProfileCardProps> = props => {
  return (
    <View style={styles.profileCardStyle}>
      <Image source={{uri: props.imageUrl}} style={styles.imageStyle} />
      <View style={styles.textContainerStyle}>
        <Text style={styles.nameStyle}>{props.name}</Text>
        <Text style={globalStyles.subtitleStyle}>{props.title}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  imageStyle: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  nameStyle: {
    fontFamily: 'Poppins-Regular',
    fontWeight: 'bold',
  },

  profileCardStyle: {
    marginTop: 5,
    flexDirection: 'row',

    paddingVertical: 10,
  },
  textContainerStyle: {
    marginLeft: 10,
    flex: 1,
    justifyContent: 'space-evenly',
  },
});
export default ProfileCard;

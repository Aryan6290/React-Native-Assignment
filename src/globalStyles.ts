import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    flex: 1,
    backgroundColor: '#fff',
  },

  centeredContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitleStyle: {
    fontFamily: 'Poppins-Regular',
    color: '#a9a9a9',
    fontWeight: 'bold',
  },
  titleStyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#212121',
    fontWeight: 'bold',
  },
  fullWidthBoxStyle: {
    marginTop: 10,
    alignSelf: 'center',
    overflow: 'hidden',
    width: '100%',

    borderWidth: 0.7,
    borderRadius: 5,
  },
  notchStyle: {
    width: '15%',
    height: 4,

    borderRadius: 10,
    backgroundColor: '#a9a9a9',
  },
  modalContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 10,

    alignItems: 'center',

    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
});

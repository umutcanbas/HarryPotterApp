import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    padding: 20,
    position: 'absolute',
    top: 100,
    right: 80,
  },
  touch_container: {
    flexDirection: 'row',
  },

  button: {
    padding: 20,
    borderWidth: 0.5,
    borderColor: 'black',
    width: 170,
    height: 200,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  text: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

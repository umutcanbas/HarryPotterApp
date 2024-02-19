import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    padding: 20,
    borderWidth: 1,
    borderColor: 'black',
    width: 170,
    height: 200,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderTopWidth:1,
    borderTopColor:'black',
  },
  poster: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10,
  },
  summary: {
    fontSize: 15,
    margin: 10,
    paddingTop: 10,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: 10,
  },
});

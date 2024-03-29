import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderTopWidth:1,
    borderTopColor:'black',
    marginTop:10
  },

  cover: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
    marginTop:10
  },
  author: {
    fontSize: 22,
    fontWeight: 'bold',
    padding: 10,
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
    fontWeight: 'bold',
    fontSize: 17,
    margin: 10,
  },
});

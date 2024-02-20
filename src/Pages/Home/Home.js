import {Text, TouchableOpacity, SafeAreaView, Image, View} from 'react-native';
import React from 'react';
import styles from './Home.style';
import TopMenu from '../../Components/TopMenu/TopMenu';

const Home = ({navigation}) => {
  const goBooks = () => {
    navigation.navigate('BooksPage');
  };
  const goMovies = () => {
    navigation.navigate('MoviesPage');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/logo.jpg')}
        style={styles.image}
      />
      <View style={styles.touch_container} >

      <TouchableOpacity style={styles.button} onPress={goBooks}>
        <Text style={styles.text}>Books</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={goMovies}>
        <Text style={styles.text}>Movies</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

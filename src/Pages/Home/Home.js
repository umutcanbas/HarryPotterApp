import {Text, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';
import styles from './Home.style';

const Home = ({navigation}) => {
  const goBooks = () => {
    navigation.navigate('BooksPage');
  };
  const goMovies = () => {
    navigation.navigate('MoviesPage');
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={goBooks}>
        <Text style={styles.text}>Books</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={goMovies}>
        <Text style={styles.text}>Movies</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;

import {
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import styles from './BookDetailCard.style';
import {Linking} from 'react-native';

const BookDetailCard = ({data}) => {
  const handleWikiPress = () => {
    Linking.openURL(data.wiki);
  };

  return (
    <View style={{flex:1}}>
      <ScrollView style={{flex:1}}>
        <Image source={{uri: data.cover}} style={styles.cover} />
        <View style={styles.container}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.author}>{data.author}</Text>
          <Text style={styles.summary}>{data.summary}</Text>
          <Text style={styles.text}>Pages: {data.pages}</Text>
          <Text style={styles.text}>Release date : {data.release_date}</Text>
          <TouchableOpacity style={styles.wiki} onPress={handleWikiPress}>
            <Text style={styles.text}>wiki link : {data.wiki}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default BookDetailCard;

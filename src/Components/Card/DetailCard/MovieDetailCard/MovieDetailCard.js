import {
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Linking} from 'react-native';
import styles from './MovieDetailCard.style';

const MovieDetailCard = ({data}) => {
  const handleWikiPress = () => {
    Linking.openURL(data.wiki);
  };
  const handleTrailerPress = () => {
    Linking.openURL(data.trailer);
  };

  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView style={{flex:1}}>
        <Image source={{uri: data.poster}} style={styles.poster} />
        <View style={styles.container}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.summary}>{data.summary}</Text>
          <Text style={styles.text}>Budget: {data.budget}</Text>
          <Text style={styles.text}>Box office: {data.box_office}</Text>
          <Text style={styles.text}>Directors: {data.directors}</Text>
          <Text style={styles.text}>
            Distributors: {data.distributors}
          </Text>
          <Text style={styles.text}>
            Release date: {data.release_date}
          </Text>
          <Text style={styles.text}>
            Running time: {data.running_time}
          </Text>
          <TouchableOpacity style={styles.wiki} onPress={handleWikiPress}>
            <Text style={styles.text}>Wiki link : {data.wiki}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.wiki} onPress={handleTrailerPress}>
            <Text style={styles.text}>
              Trailer link : {data.trailer}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetailCard;

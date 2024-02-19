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
    <SafeAreaView>
      <ScrollView>
        <Image source={{uri: data.poster}} style={styles.poster} />
        <View style={styles.container}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.summary}>{data.summary}</Text>
          <Text style={styles.budget}>Budget: {data.budget}</Text>
          <Text style={styles.box_office}>Box office: {data.box_office}</Text>
          <Text style={styles.directors}>Directors: {data.directors}</Text>
          <Text style={styles.distributors}>
            Distributors: {data.distributors}
          </Text>
          <Text style={styles.release_date}>
            Release date: {data.release_date}
          </Text>
          <Text style={styles.running_time}>
            Running time: {data.running_time}
          </Text>
          <TouchableOpacity style={styles.wiki} onPress={handleWikiPress}>
            <Text style={styles.wikiText}>Wiki link : {data.wiki}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.wiki} onPress={handleTrailerPress}>
            <Text style={styles.trailerText}>
              Trailer link : {data.trailer}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetailCard;

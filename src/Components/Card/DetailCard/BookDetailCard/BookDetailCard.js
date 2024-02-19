import {Text, SafeAreaView} from 'react-native';
import React from 'react';

const BookDetailCard = ({data}) => {
  console.log(data);
  return (
    <SafeAreaView>
      <Text>{data.author}</Text>
      <Text>{data.cover}</Text>
      <Text>{data.pages}</Text>
      <Text>{data.summary}</Text>
      <Text>{data.release_date}</Text>
      <Text>{data.title}</Text>
      <Text>{data.wiki}</Text>
    </SafeAreaView>
  );
};

export default BookDetailCard;

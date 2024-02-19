import {SafeAreaView, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';

import styles from './Books.style';
import useFetch from '../../Hooks/useFetch';
import Config from 'react-native-config';

const Books = ({navigation}) => {
  const api = 'https://api.potterdb.com/v1/books';
  const {data, loading, error} = useFetch(api);

  const goDetail = item => {
    navigation.navigate('DetailPage', {selectedItem: item});
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.container}
      key={item.id}
      onPress={() => goDetail(item)}>
      <Text style={styles.title}>{item.attributes.title}</Text>
    </TouchableOpacity>
  );

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <SafeAreaView>
      <FlatList data={data?.data} renderItem={renderItem} />
    </SafeAreaView>
  );
};

export default Books;

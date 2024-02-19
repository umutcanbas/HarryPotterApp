import {SafeAreaView, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';

import styles from './Movies.style';
import useFetch from '../../Hooks/useFetch';

const Books = ({navigation}) => {
  const api = 'https://api.potterdb.com//v1/movies';
  const {data, loading, error} = useFetch(api);

  const goDetail = (item)=>{
    navigation.navigate('DetailPage', { selectedItem: item })
  }

  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.container} key={item.id} onPress={()=>goDetail(item)} >
      <Text style={styles.title}>{item.attributes.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      {loading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error: {error.message}</Text>
      ) : (
        <FlatList data={data?.data} renderItem={renderItem} />
      )}
    </SafeAreaView>
  );
};

export default Books;

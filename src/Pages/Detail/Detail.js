import {SafeAreaView} from 'react-native';
import React from 'react';

import MovieDetailCard from '../../Components/Card/DetailCard/MovieDetailCard/MovieDetailCard';
import BookDetailCard from '../../Components/Card/DetailCard/BookDetailCard/BookDetailCard';
import TopMenu from '../../Components/TopMenu/TopMenu';

const Detail = ({route , navigation}) => {
  const selectedItem = route.params.selectedItem.attributes;
  const type = route.params.selectedItem.type;
  const onPressBack = () => navigation.goBack();


  const CardComponent = type === 'movie' ? MovieDetailCard : BookDetailCard;

  return (
    <SafeAreaView style={{flex:1}}>
      <TopMenu navigation={navigation} onPress={onPressBack} />
      <CardComponent data={selectedItem} />
    </SafeAreaView>
  );
};

export default Detail;

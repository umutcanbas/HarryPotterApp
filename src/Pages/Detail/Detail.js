import {SafeAreaView} from 'react-native';
import React from 'react';

import MovieDetailCard from '../../Components/Card/DetailCard/MovieDetailCard/MovieDetailCard';
import BookDetailCard from '../../Components/Card/DetailCard/BookDetailCard/BookDetailCard';

const Detail = ({route}) => {
  const selectedItem = route.params.selectedItem.attributes;
  const type = route.params.selectedItem.type;

  const CardComponent = type === 'movie' ? MovieDetailCard : BookDetailCard;

  return (
    <SafeAreaView>
      <CardComponent data={selectedItem} />
    </SafeAreaView>
  );
};

export default Detail;

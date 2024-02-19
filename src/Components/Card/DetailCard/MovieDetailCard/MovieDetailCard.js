import {  Text, SafeAreaView } from 'react-native'
import React from 'react'

const MovieDetailCard = ({data}) => {

    

    //console.log(data)
  return (
    <SafeAreaView>
      <Text>{data.budget}</Text>
      <Text>{data.box_office}</Text>
      <Text>{data.directors}</Text>
      <Text>{data.distributors}</Text>
      <Text>{data.poster}</Text>
      <Text>{data.release_date}</Text>
      <Text>{data.running_time}</Text>
      <Text>{data.summary}</Text>
      <Text>{data.title}</Text>
      <Text>{data.trailer}</Text>
      <Text>{data.wiki}</Text>
    </SafeAreaView>
  )
}

export default MovieDetailCard
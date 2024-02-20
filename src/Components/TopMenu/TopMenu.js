import {Text, SafeAreaView, View,  TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './TopMenu.style';

const TopMenu = ({onPress, title}) => {
  
  return (
    <SafeAreaView style={styles.cotaniner}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonTitle}>Back</Text>
      </TouchableOpacity>

      <Text style={styles.text}>{title}</Text>
      <View></View>
    </SafeAreaView>
  );
};

export default TopMenu;

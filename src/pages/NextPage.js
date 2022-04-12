import React from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {textInputStyle} from '../styles/textInputStyle';

export const NextPage = () => {
  const route = useRoute();

  console.log('route: ', route.params);

  const {name, age} = route.params;

  return (
    <View style={{marginTop: 100, padding: 30}}>
      <Text style={{fontSize: 30}}>
        Hello My name is
        <Text style={textInputStyle.primaryName}> {name}</Text> and I am {age}{' '}
        years old
      </Text>
    </View>
  );
};

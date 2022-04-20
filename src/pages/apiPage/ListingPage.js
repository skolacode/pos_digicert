import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  ScrollView,
} from 'react-native';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {setBahasa, setEnglish} from '../../redux/settingsSlice';
import {useNavigation} from '@react-navigation/native';

export const ListingPage = () => {
  const navigate = useNavigation();
  const itemsState = useSelector(state => state.items);

  return (
    <ScrollView>
      {itemsState.list.map((each, key) => (
        <View
          key={key}
          style={{
            margin: 10,
            marginBottom: 20,
            borderWidth: 1,
            borderColor: 'grey',
            padding: 5,
          }}>
          <Text>{each.Description}</Text>
          <Text>{each.email_value}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputForm: {
    borderRadius: 5,
    padding: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
  },
});

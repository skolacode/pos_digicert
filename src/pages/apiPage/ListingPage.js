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
      {/* GOTO create item page */}
      <View style={styles.createBtnContainer}>
        <TouchableOpacity 
          style={styles.createBtnStyle}
          onPress={() => navigate.navigate('Add Item')}
        >
          <Text>Create Item</Text>
        </TouchableOpacity>
      </View>

      {itemsState.list.map((each, key) => (
        <TouchableOpacity
          onPress={() => navigate.navigate('Edit Item', {
            idx: each.idx
          })}
          key={key}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            margin: 10,
            marginBottom: 20,
            borderWidth: 1,
            borderColor: 'grey',
            padding: 5,
          }}>
          <Text>{each.Description}</Text>
          <Text>{each.email_value}</Text>
        </TouchableOpacity>
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
  createBtnContainer: {
    alignItems: 'flex-end',
  },
  createBtnStyle: {
    padding: 10,
    margin: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#4d4d4d',
    borderRadius: 5,
    width: 100,
  },
});

import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {formInputStyle, textInputStyle} from '../styles';
import { useNavigation } from '@react-navigation/native';

export const LandingPage = () => {

  const navigation = useNavigation();

  const [nameText, setNameText] = useState('');
  const [ageText, setAgeText] = useState();

  const textUpdate = text => {
    setNameText(text);
  };

  const updateAge = text => {
    // Do integer validation
    // only insert the value to setAgeText if the text is integer
    setAgeText(text);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={textInputStyle.title}>My name is: {nameText}</Text>

        <TextInput
          onChangeText={textUpdate}
          style={formInputStyle.input}
          value={nameText}
        />

        <Text style={textInputStyle.title2}>My Age is: {ageText}</Text>

        <TextInput
          onChangeText={updateAge}
          style={formInputStyle.input}
          value={ageText}
        />

        <Button 
          title='Goto Next page'
          onPress={() => navigation.navigate('Next Page')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
  },
});
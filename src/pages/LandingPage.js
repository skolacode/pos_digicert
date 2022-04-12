import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, TextInput} from 'react-native';
import {formInputStyle} from '../styles/formInputStyle'

export const LandingPage = () => {

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
        <Text style={styles.title}>My name is: {nameText}</Text>

        <TextInput
          onChangeText={textUpdate}
          style={formInputStyle.input}
          value={nameText}
        />

        <Text style={styles.title}>My Age is: {ageText}</Text>

        <TextInput
          onChangeText={updateAge}
          style={formInputStyle.input}
          value={ageText}
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
  title: {
    fontSize: 30,
    color: '#4d4d4d',
  },
});
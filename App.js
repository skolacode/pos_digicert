import React, {useState} from 'react';

import {SafeAreaView, View, Text, StyleSheet, TextInput} from 'react-native';

export const App = () => {
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
          style={styles.input}
          value={nameText}
        />

        <Text style={styles.title}>My Age is: {ageText}</Text>

        <TextInput
          onChangeText={updateAge}
          style={styles.input}
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    fontSize: 30,
    color: '#4d4d4d',
  },
});

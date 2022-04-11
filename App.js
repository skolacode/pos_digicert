import React, {useState} from 'react';

import {SafeAreaView, View, Text, StyleSheet, TextInput} from 'react-native';

export const App = () => {
  const [nameText, setNameText] = useState('');

  const textUpdate = text => {
    console.log('val: ', text);

    setNameText(text);
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

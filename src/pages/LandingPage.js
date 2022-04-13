import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, Button} from 'react-native';
import {formInputStyle, textInputStyle} from '../styles';
import {useNavigation} from '@react-navigation/native';
import {Title, StyledTextInput} from '../styles/textStyleComponent';
import { useTheme } from 'styled-components'

export const LandingPage = () => {
  const navigation = useNavigation();

  const theme = useTheme()

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
        <Title>My name is: {nameText}</Title>

        <StyledTextInput onChangeText={textUpdate} value={nameText} />

        <Title>My Age is: {ageText}</Title>

        <StyledTextInput onChangeText={updateAge} value={ageText} />

        <Button
          title="Goto Next page"
          onPress={() =>
            navigation.navigate('Next Page', {
              name: nameText,
              age: ageText,
            })
          }
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

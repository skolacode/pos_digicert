import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Title, StyledTextInput} from '../styles/textStyleComponent';
import {useTheme} from 'styled-components';
import {formInputStyle} from '../styles/formInputStyle';

export const LandingPage = () => {
  const navigation = useNavigation();

  const theme = useTheme();

  const [nameText, setNameText] = useState('');
  const [todoList, setTodoList] = useState([]);

  const textUpdate = text => {
    setNameText(text);
  };

  const appendTheTodo = () => {
    const clonedArr = [...todoList];

    clonedArr.push(nameText);

    setTodoList(clonedArr);
    setNameText('');
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <Title>My name is: {nameText}</Title>

        <StyledTextInput onChangeText={textUpdate} value={nameText} />

        <TouchableOpacity style={formInputStyle.addBtn} onPress={appendTheTodo}>
          <Text>Add Item</Text>
        </TouchableOpacity>

        <Text style={{fontSize: 20, marginTop: 20, marginBottom: 15}}>
          List:
        </Text>
        {/* List of todo items */}

        {todoList.map((item, key) => (
          <View key={key}>
            <Text>
              <Text>{key + 1}</Text> {item}
            </Text>
          </View>
        ))}

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

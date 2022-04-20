import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {setBahasa, setEnglish} from '../../redux/settingsSlice';
import { setListState } from '../../redux/itemsSlice';
import { useNavigation } from '@react-navigation/native';

export const AddItem = () => {
  const navigate = useNavigation()
  const settingsState = useSelector(state => state.settings);

  const {language} = settingsState;

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const [addForm, setAddForm] = useState({
    first_name: '',
    last_name: '',
    email_value: '',
  });

  const updateFromInput = (value, state) => {
    const clonedState = {...addForm};
    clonedState[state] = value;

    setAddForm(clonedState);
  };

  const addItemApi = () => {
    setIsLoading(true);

    var formBody = [];
    for (var property in addForm) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(addForm[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    axios
      .post(
        'https://dev-msid.posdigicert.com.my/APIEX/test_add_new',
        formBody,
        {
          headers: {
            Token: 'Basic a3JpZGVudGlhOlBhc3N3MHJkMjAxOQ==',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )
      .then(res => {
        console.log('res: ', res.data);

        setTimeout(() => {
          setIsLoading(false);
        }, 2000);

        Alert.alert('Success', 'Submission is success', [
          {
            text: 'OK',
          },
        ]);
      })
      .catch(err => {
        console.log('err: ', err);
        setIsLoading(false);

        Alert.alert('Failed', 'Pleae re-try again ', [
          {
            text: 'OK',
          },
        ]);
      });
  };

  const callGetListAPI = () => {
    axios
      .get('https://dev-msid.posdigicert.com.my/APIEX/test_get_all_data/1', {
        headers: {
          Token: 'Basic a3JpZGVudGlhOlBhc3N3MHJkMjAxOQ==',
        },
      })
      .then(res => {
        dispatch(setListState(res.data.data));

        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      })
      .catch(err => {
        console.log('err: ', err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    // Func here
    callGetListAPI()
  }, [])

  return isLoading ? (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size="large" />
      <Text>Submiting your form...</Text>
    </View>
  ) : (
    <View style={{padding: 15, backgroundColor: 'white', flex: 1}}>
      {/* First name */}
      <Text style={{marginBottom: 8}}>{language.firstName}</Text>
      <TextInput
        value={addForm.first_name}
        placeholder="Enter First Name..."
        style={styles.inputForm}
        onChangeText={value => updateFromInput(value, 'first_name')}
      />

      {/* Last Name */}
      <Text style={{marginBottom: 8, marginTop: 20}}>{language.lastName}</Text>
      <TextInput
        value={addForm.last_name}
        placeholder="Enter Last Name..."
        style={styles.inputForm}
        onChangeText={value => updateFromInput(value, 'last_name')}
      />

      {/* Email */}
      <Text style={{marginBottom: 8, marginTop: 20}}>{language.email}</Text>
      <TextInput
        value={addForm.email_value}
        placeholder="Enter Email..."
        style={styles.inputForm}
        onChangeText={value => updateFromInput(value, 'email_value')}
      />

      <TouchableOpacity
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          backgroundColor: 'lightgrey',
          marginTop: 20,
          alignItems: 'center',
          padding: 10,
          borderRadius: 5,
        }}
        onPress={addItemApi}>
        <Text>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          backgroundColor: 'lightgrey',
          marginTop: 20,
          alignItems: 'center',
          padding: 10,
          borderRadius: 5,
        }}
        onPress={() => dispatch(setBahasa())}>
        <Text>Change to Bahasa</Text>
      </TouchableOpacity>

      <TouchableOpacity
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          backgroundColor: 'lightgrey',
          marginTop: 20,
          alignItems: 'center',
          padding: 10,
          borderRadius: 5,
        }}
        onPress={() => dispatch(setEnglish())}>
        <Text>Change to English</Text>
      </TouchableOpacity>

      <TouchableOpacity
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          backgroundColor: 'lightgrey',
          marginTop: 20,
          alignItems: 'center',
          padding: 10,
          borderRadius: 5,
        }}
        onPress={() => navigate.navigate('Item List')}>
        <Text>Goto List</Text>
      </TouchableOpacity>
    </View>
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

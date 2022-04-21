import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  Image,
} from 'react-native';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {setBahasa, setEnglish} from '../../redux/settingsSlice';
import {deleteItem, setListState, updateItem} from '../../redux/itemsSlice';
import {useNavigation, useRoute} from '@react-navigation/native';

export const EditItem = () => {
  const route = useRoute();
  const navigate = useNavigation();
  const settingsState = useSelector(state => state.settings);

  const {idx} = route.params;

  const {language} = settingsState;

  const [itemDetails, setItemDetails] = useState({
    idx: idx,
    first_name: '-',
    last_name: '-',
    email_value: '-',
  });

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const updateFromInput = (value, state) => {
    const clonedState = {...itemDetails};
    clonedState[state] = value;

    setItemDetails(clonedState);
  };

  const editItemApi = () => {
    setIsLoading(true);

    var formBody = [];
    for (var property in itemDetails) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(itemDetails[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    axios
      .post(
        'https://dev-msid.posdigicert.com.my/APIEX/test_edit_new',
        formBody,
        {
          headers: {
            Token: 'Basic a3JpZGVudGlhOlBhc3N3MHJkMjAxOQ==',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )
      .then(res => {
        console.log('res update: ', res.data);

        setTimeout(() => {
          setIsLoading(false);
        }, 2000);

        dispatch(updateItem(itemDetails))

        Alert.alert('Success', 'Submission is success', [
          {
            text: 'OK',
            onPress: () => navigate.goBack()
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

  const deleteItemAPI = () => {
    axios
      .get(
        `https://dev-msid.posdigicert.com.my/APIEX/test_delete_data/${idx}`,
        {
          headers: {
            Token: 'Basic a3JpZGVudGlhOlBhc3N3MHJkMjAxOQ==',
          },
        },
      )
      .then(res => {
        console.log('res delete: ', res.data);

        // example: 
        // var x = 1
        // x = 2 > res.data
        // x = {2} {res.data}
        // x = 2 > {...res.data}

        dispatch(deleteItem(idx));

        Alert.alert('Success', 'Delete Success', [
          {
            text: 'OK',
            onPress: () => navigate.goBack(),
          }
        ])
      })
      .catch(err => {
        console.log('err: ', err);
      });
  };

  const callItemDetailsAPI = () => {
    axios
      .get(
        `https://dev-msid.posdigicert.com.my/APIEX/test_get_specific_data/${idx}`,
        {
          headers: {
            Token: 'Basic a3JpZGVudGlhOlBhc3N3MHJkMjAxOQ==',
          },
        },
      )
      .then(res => {
        console.log('res: ', res.data);

        setItemDetails({...itemDetails, ...res.data});

        // example: 
        // var x = 1
        // x = 2 > res.data
        // x = {2} {res.data}
        // x = 2 > {...res.data}
      })
      .catch(err => {
        console.log('err: ', err);
      });
  };

  useEffect(() => {
    // Func here
    callItemDetailsAPI();
  }, []);

  return isLoading ? (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator size="large" />
      <Text>Submiting your form...</Text>
    </View>
  ) : (
    <View style={{padding: 15, backgroundColor: 'white', flex: 1}}>

      <Text style={{ marginBottom: 20, fontWeight: '600' }}>ID: {idx}</Text>

      {/* First name */}
      <Text style={{marginBottom: 8}}>{language.firstName}</Text>
      <TextInput
        value={itemDetails.first_name}
        placeholder="Enter First Name..."
        style={styles.inputForm}
        onChangeText={value => updateFromInput(value, 'first_name')}
      />

      {/* Last Name */}
      <Text style={{marginBottom: 8, marginTop: 20}}>{language.lastName}</Text>
      <TextInput
        value={itemDetails.last_name}
        placeholder="Enter Last Name..."
        style={styles.inputForm}
        onChangeText={value => updateFromInput(value, 'last_name')}
      />

      {/* Email */}
      <Text style={{marginBottom: 8, marginTop: 20}}>{language.email}</Text>
      <TextInput
        value={itemDetails.email_value}
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
          justifyContent: 'center',
          padding: 10,
          borderRadius: 5,
          flexDirection: 'row',
        }}
        onPress={editItemApi}>
        <Text>Update</Text>
        <Image
          source={require('../../assets/png/save-btn.png')}
          style={{
            height: 20,
            width: 20,
            resizeMode: 'contain',
            marginLeft: 5,
          }}
        />
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
        onPress={deleteItemAPI}>
        <Text>Delete</Text>
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

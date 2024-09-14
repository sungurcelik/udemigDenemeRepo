import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity
        style={{backgroundColor: 'red', padding: 10, borderRadius: 20}} 
        onPress={()=>navigation.navigate("Details")}
        >
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Go to Details Screen
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

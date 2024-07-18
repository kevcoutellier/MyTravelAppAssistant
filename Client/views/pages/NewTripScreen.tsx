// src/screens/NewTripScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Input, Button, Text, Slider } from 'react-native-elements';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationProp } from '@react-navigation/native';

const NewTripScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [destination, setDestination] = useState('');
  const [budget, setBudget] = useState(1000);
  const [duration, setDuration] = useState(7);
  const [type, setType] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleCreateTrip = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      const response = await axios.post(
        'http://your-backend-url/api/trips',
        { destination, budget, duration, type, startDate, endDate },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      navigation.navigate('Trips');
    } catch (error) {
      console.error(error);
      // Handle trip creation error (show message to user)
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text h3>Plan New Trip</Text>
      <Input
        placeholder="Destination (optional)"
        leftIcon={{ type: 'font-awesome', name: 'map-marker' }}
        onChangeText={setDestination}
        value={destination}
      />
      <Text>Budget: ${budget}</Text>
      <Slider
        value={budget}
        onValueChange={setBudget}
        minimumValue={100}
        maximumValue={10000}
        step={100}
      />
      <Text>Duration: {duration} days</Text>
      <Slider
        value={duration}
        onValueChange={setDuration}
        minimumValue={1}
        maximumValue={30}
        step={1}
      />
      <Input
        placeholder="Trip Type (e.g., Beach, Cultural, Adventure)"
        leftIcon={{ type: 'font-awesome', name: 'tag' }}
        onChangeText={setType}
        value={type}
      />
      <Text>Start Date:</Text>
      <DateTimePicker
        value={startDate}
        mode="date"
        display="default"
        onChange={(event, selectedDate) => setStartDate(selectedDate || startDate)}
      />
      <Text>End Date:</Text>
      <DateTimePicker
        value={endDate}
        mode="date"
        display="default"
        onChange={(event, selectedDate) => setEndDate(selectedDate || endDate)}
      />
      <Button title="Create Trip" onPress={handleCreateTrip} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

export default NewTripScreen;
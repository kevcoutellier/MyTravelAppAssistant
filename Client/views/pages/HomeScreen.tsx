// HomeScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import tw from 'twrnc';
import { NavigationProp } from '@react-navigation/native';
import { RootTabParamList } from '../../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type HomeScreenProps = NativeStackScreenProps<RootTabParamList, 'Home'>;

const HomeScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [budget, setBudget] = useState('');
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('');
  const [tripType, setTripType] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSubmit = () => {
    // TODO: Implement API call to backend with form data
    console.log('Form submitted:', { budget, destination, duration, tripType, startDate, endDate });
  };

  return (
    <ScrollView style={tw`flex-1 p-4`}>
      <Text style={tw`text-2xl font-bold mb-4`}>Plan Your Vacation</Text>
      
      <TextInput
        style={tw`border p-2 mb-4 rounded`}
        placeholder="Budget"
        value={budget}
        onChangeText={setBudget}
        keyboardType="numeric"
      />
      
      <TextInput
        style={tw`border p-2 mb-4 rounded`}
        placeholder="Destination (optional)"
        value={destination}
        onChangeText={setDestination}
      />
      
      <TextInput
        style={tw`border p-2 mb-4 rounded`}
        placeholder="Duration (days)"
        value={duration}
        onChangeText={setDuration}
        keyboardType="numeric"
      />
      
      <Picker
        selectedValue={tripType}
        onValueChange={(itemValue) => setTripType(itemValue)}
        style={tw`border mb-4`}
      >
        <Picker.Item label="Select trip type" value="" />
        <Picker.Item label="Sport" value="sport" />
        <Picker.Item label="Chill" value="chill" />
        <Picker.Item label="Cultural" value="cultural" />
      </Picker>
      
      <Text style={tw`mb-2`}>Start Date:</Text>
      <DateTimePicker
        value={startDate}
        mode="date"
        display="default"
        onChange={(event, selectedDate) => setStartDate(selectedDate || startDate)}
      />
      
      <Text style={tw`mt-4 mb-2`}>End Date:</Text>
      <DateTimePicker
        value={endDate}
        mode="date"
        display="default"
        onChange={(event, selectedDate) => setEndDate(selectedDate || endDate)}
      />
      
      <Button title="Plan My Trip" onPress={handleSubmit} />
    </ScrollView>
  );
};

export default HomeScreen ;
// src/screens/TripListScreen.js
import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, FlatList, RefreshControl, TouchableOpacity } from 'react-native';
import { ListItem, Text, Button } from 'react-native-elements';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationProp } from '@react-navigation/native';

// ...

const TripListScreen = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const fetchTrips = async () => {
    try {
      setError(null);
      const token = await AsyncStorage.getItem('userToken');
      const response = await axios.get('http://your-backend-url/api/trips', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTrips(response.data);
    } catch (error) {
      console.error(error);
      setError('Failed to fetch trips. Please try again.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchTrips();
  }, []);

  const renderTripItem = ({ item }: { item: any }) => (
    <TouchableOpacity onPress={() => navigation.navigate('TripDetail', { tripId: item.id })}>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>{item.destination || 'Unnamed Trip'}</ListItem.Title>
          <ListItem.Subtitle>
            {new Date(item.startDate).toLocaleDateString()} - {new Date(item.endDate).toLocaleDateString()}
          </ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </TouchableOpacity>
  );

  const renderEmptyList = () => (
    <View style={styles.emptyContainer}>
      <Text h4>No trips planned yet</Text>
      <Text>Start planning your next adventure!</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.centered}>
        <Text>Loading trips...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text h3 style={styles.title}>Your Trips</Text>
      {error && <Text style={styles.error}>{error}</Text>}
      <FlatList
        data={trips}
        renderItem={renderTripItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={renderEmptyList}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      <Button
        title="Plan New Trip"
        onPress={() => navigation.navigate('NewTrip')}
        containerStyle={styles.newTripButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: 20,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newTripButton: {
    marginTop: 20,
  },
});

export default TripListScreen;
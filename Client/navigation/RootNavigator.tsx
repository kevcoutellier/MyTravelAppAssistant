import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native";
import HomeScreen from "../views/pages/HomeScreen";
import LoginScreen from "../views/pages/LoginScreen";
import RegisterScreen from "../views/pages/RegisterScreen";
import NewTripScreen from "../views/pages/NewTripScreen";
import ProfileScreen from "../views/pages/ProfileScreen";
import TripListScreen from "../views/pages/TripListScreen";
import { RootTabParamList } from "../types"; // Adjust the path based on your project structure

const Tab = createBottomTabNavigator<RootTabParamList>();

const RootNavigator: React.FC = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{ headerShown: false }}
                    />
                    <Tab.Screen
                        name="NewTrip"
                        component={NewTripScreen}
                        options={{ headerShown: false }}
                    />
                    <Tab.Screen
                        name="TripList"
                        component={TripListScreen}
                        options={{ headerShown: false }}
                    />
                    <Tab.Screen name="Profile" options={{ headerShown: false }}>
                        {() => (
                            <ProfileScreen
                                firstName="John"
                                lastName="Doe"
                                email="john.doe@gmail.com"
                            />
                        )}
                    </Tab.Screen>
                    <Tab.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{ headerShown: false }}
                    />
                    <Tab.Screen
                        name="Register"
                        component={RegisterScreen}
                        options={{ tabBarButton: () => null, headerShown: false }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
};

export default RootNavigator;

// src/screens/LoginScreen.tsx
import axios from "axios";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Alert,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from "react-native-vector-icons/FontAwesome";
import tw from "../../views/assets/styles/tailwind";
import Button from "../../components/Button";

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Profile: { firstName: string; lastName: string };
  Register: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const url = "http://192.168.1.18:3333"; // Replace with your API URL

  const api = axios.create({
    baseURL: url,
  });

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    }
    setLoading(true);
    try {
      const response = await api.post("http://192.168.10.142:3333/api/user/login", {
        email: username,
        password: password,
      });
      console.log("Login successful:", response.data);

      // Stockez l'ID de l'utilisateur
      await AsyncStorage.setItem('userId', response.data.id.toString());

      navigation.navigate("Home");
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert("Error", "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  const screenHeight = Dimensions.get("window").height;

  return (
    <View
      style={[
        tw`flex-1 justify-center align-middle bg-[#F9F7F2] mt-auto mb-auto`,
        { minHeight: screenHeight },
      ]}
    >
      <View
        style={[tw`flex-1 justify-center px-6`, { minHeight: screenHeight }]}
      >
        <View style={tw`w-full h-[32%]`}>
          <Image
            source={require("../../assets/logo.png")}
            style={tw`w-full h-[70%]`}
          />
          <Text style={tw`text-[50px] text-[#01403B] mt-[-10%] text-center`}>
            PalVoyage
          </Text>
        </View>
        <View style={tw`justify-center gap-[16px] h-[15%]`}>
          <View>
            <Text style={tw`text-[10px] pl-[3%] text-[#525252] font-normal`}>
              Your email
            </Text>
            <TextInput
              style={tw`h-10 p-[3%] border-b-[3px] border-[#006D77] bg-[#F9F7F2]`}
              placeholder="user@gmail.com"
              value={username}
              onChangeText={setUsername}
            />
          </View>
          <View>
            <Text style={tw`text-[10px]  pl-[3%] text-[#525252] font-normal`}>
              Password
            </Text>
            <View
              style={tw`flex-row items-center border-b-[3px] border-[#006D77] bg-[#F9F7F2]`}
            >
              <TextInput
                style={tw`flex-1 h-10 p-[3%] bg-[#F9F7F2]`}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!passwordVisible}
              />
              <TouchableOpacity
                onPress={() => setPasswordVisible(!passwordVisible)}
              >
                <Icon
                  name={passwordVisible ? "eye-slash" : "eye"}
                  size={20}
                  color="grey"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={tw`justify-center align-middle mt-[15%] h-[12%]`}>
          <Button onPress={handleLogin} title="Log in" variant="dark" />
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={tw`mt-5 font-sans text-center text-[#006D77]`}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

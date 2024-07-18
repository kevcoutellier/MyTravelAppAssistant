import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { useNavigation, CompositeNavigationProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import tw from "../assets/styles/tailwind";
import Icon from "react-native-vector-icons/FontAwesome";
import Button from "../../components/Button";
import { RootTabParamList } from "../../types"; // Adjust the import path according to your project structure

type RegisterScreenNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<RootTabParamList>,
  BottomTabNavigationProp<RootTabParamList>
>;

const Register: React.FC = () => {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const navigation = useNavigation<RegisterScreenNavigationProp>();

  const handleRegister = () => {
    console.log("FirstName:", firstname);
    console.log("LastName:", lastname);
    console.log("Email:", email);
    console.log("Password:", password);
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
        style={[
          tw`flex-1 flex-col justify-center px-6 gap-[8%] ml-[auto] mr-[auto] w-[100%]`,
          { minHeight: screenHeight },
        ]}
      >
        <View style={tw`h-[28%] mt-[2%]`}>
          <Image
            source={require("../../assets/logo.png")}
            style={tw`w-full h-[70%]`}
          />
          <Text style={tw`text-[50px] text-[#01403B] mt-[-8%] text-center`}>
            PalVoyage
          </Text>
        </View>
        <View style={tw`h-[34%]`}>
          <View style={tw`p-[3%] border-b-[3px] border-[#006D77]`}>
            <Text style={tw`text-[10px] text-[#525252] font-normal`}>
              First name
            </Text>
            <TextInput
              style={tw`h-auto bg-[#F9F7F2]`}
              placeholder="John"
              value={firstname}
              onChangeText={setFirstname}
            />
          </View>
          <View style={tw`p-[3%] border-b-[3px] border-[#006D77]`}>
            <Text style={tw`text-[10px] text-[#525252] font-normal`}>
              Last name
            </Text>
            <TextInput
              style={tw`h-auto bg-[#F9F7F2]`}
              placeholder="Doe"
              value={lastname}
              onChangeText={setLastname}
            />
          </View>
          <View style={tw`p-[3%] border-b-[3px] border-[#006D77]`}>
            <Text style={tw`text-[10px] text-[#525252] font-normal`}>
              Email
            </Text>
            <TextInput
              style={tw`h-auto bg-[#F9F7F2]`}
              placeholder="john.doe@gmail.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={tw`p-[3%] border-b-[3px] border-[#006D77]`}>
            <Text style={tw`text-[10px] text-[#525252] font-normal`}>
              Password
            </Text>
            <View style={tw`flex-row items-center bg-[#F9F7F2]`}>
              <TextInput
                style={tw`flex-1 h-auto`}
                placeholder="exemple1234"
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
        <View>
          <Button title="Register" variant="dark" onPress={handleRegister} />
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={tw`mt-3 font-sans text-center text-[#006D77]`}>
              Already have an account? Log In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;

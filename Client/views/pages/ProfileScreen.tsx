// views/pages/ProfileScreen.tsx
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../assets/styles/style";
import tw from "../assets/styles/tailwind";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons/faPenToSquare";


interface ProfileScreenProps {
  firstName: string;
  lastName: string;
  email?: string;
}

const Profile: React.FC<ProfileScreenProps> = ({
  firstName,
  lastName,
  email,
}) => {
  return (
    <View style={styles.profile}>
      <View style={styles.ProfileBackground}>
        <Text style={styles.ProfileName}>
          {firstName} {lastName}
        </Text>
      </View>
      <View style={styles.pp}>
        <View style={styles.ppp}></View>
      </View>
      <View style={tw`flex-1 p-10`}>
        <View>
          <Text style={tw`text-xl font-medium text-[#01403B]`}>First name</Text>
          <View style={tw`flex-row justify-between`}>
            <Text style={tw`text-lg text-[#01403B]`}>{firstName}</Text>
            <TouchableOpacity>
              <FontAwesomeIcon
                icon={faPenToSquare}
                size={20}
                style={tw`text-[#01403B]`}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={tw`text-xl font-medium  text-[#01403B]`}>Last name</Text>
          <View style={tw`flex-row justify-between`}>
            <Text style={tw`text-lg text-[#01403B]`}>{lastName}</Text>
            <TouchableOpacity>
              <FontAwesomeIcon
                icon={faPenToSquare}
                size={20}
                style={tw`text-[#01403B]`}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={tw`text-xl font-medium text-[#01403B]`}>Email</Text>
          <View style={tw`flex-row justify-between`}>
            <Text style={tw`text-lg text-[#01403B]`}>{email}</Text>
            <TouchableOpacity>
              <FontAwesomeIcon
                icon={faPenToSquare}
                size={20}
                style={tw`text-[#01403B]`}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={tw`text-xl font-medium  text-[#01403B]`}>Password</Text>
          <View style={tw`flex-row justify-between`}>
            <Text style={tw`text-lg text-[#01403B]`}>{`******`}</Text>
            <TouchableOpacity>
              <FontAwesomeIcon
                icon={faPenToSquare}
                size={20}
                style={tw`text-[#01403B]`}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;

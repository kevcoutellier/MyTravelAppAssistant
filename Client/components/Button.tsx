import React from "react";
import { TouchableOpacity, Text } from "react-native";
import tw from "../views/assets/styles/tailwind";

interface ButtonProps {
  title: string;
  variant: "light" | "dark" | "small-dark";
  onPress?: () => void;
}
//          style={tw`bg-blue-500 p-[3%] rounded-[200px] bg-[#01403B]`}

export const Button = ({ title, variant, onPress }: ButtonProps) => {
  let buttonClasses;

  switch (variant) {
    case "light":
      buttonClasses = "bg-primary-1 justify-center ml-auto mr-auto flex-row ";
      break;
    case "dark":
      buttonClasses = "bg-primary-70 w-[90%] items-center justify-center";
      break;
    case "small-dark":
      buttonClasses = "bg-primary-70 items-center justify-center";
      break;
    default:
      buttonClasses = "bg-white text-black";
      break;
  }

  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={tw`rounded-full ml-auto mr-auto flex-row ${buttonClasses} mb-4`}
      >
        <Text
          style={tw`font-sans px-4 py-4 text-white text-center text-base font-medium `}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default Button;
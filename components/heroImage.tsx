import React from "react";
import { View } from "react-native";
import { Image } from "expo-image";
import { Card } from "./ui/card";
import { Text } from "./ui/text";

const HeroImage = ({
  options: { title, description, image },
}: {
  options: { title: string; description: string; image: any };
}) => {
  return (
    <Card className="flex justify-center items-center w-full aspect-video overflow-hidden relative">
      <View className="justify-center gap-1 absolute bg-black/70 inset-0 z-10 p-6">
        <Text className="font-poppins-semibold text-xl text-secondary">
          {title}
        </Text>
        <Text className="font-poppins-bold text-primary text-4xl underline">
          {description}
        </Text>
      </View>
      <Image
        style={{ flex: 1, width: "100%" }}
        source={image}
        contentFit="cover"
        transition={1000}
      />
    </Card>
  );
};

export default HeroImage;

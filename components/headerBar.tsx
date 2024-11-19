import React from "react";
import { View } from "react-native";
import { Button } from "./ui/button";
import { ChevronLeft } from "@/lib/icons/chevronLeft";
import { Text } from "./ui/text";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { Stack, useRouter } from "expo-router";
import { type EdgeInsets } from "react-native-safe-area-context";

const HeaderBar = ({
  options: { title, avatar, safeAreaInsets },
}: {
  options: { title: string; avatar?: string; safeAreaInsets: EdgeInsets };
}) => {
  const router = useRouter();
  return (
    <Stack.Screen
      options={{
        headerTransparent: true,
        header: () => (
          <View>
            <View
              style={{ paddingTop: safeAreaInsets.top + 16 }}
              className="p-4 bg-background"
            >
              <View className="flex-row justify-between items-center">
                <View className="flex-row gap-4 items-center">
                  <Button
                    className="rounded-full h-auto w-auto flex justify-center items-center p-2"
                    size="icon"
                    variant="ghost"
                    onPress={() => router.back()}
                  >
                    <ChevronLeft
                      height={28}
                      width={28}
                      className="text-primary"
                    />
                  </Button>
                  <Text className="font-poppins-semibold text-2xl text-primary-foreground">
                    {title}
                  </Text>
                </View>
                <Avatar className="h-12 w-12" alt="Dekorasi">
                  <AvatarFallback>
                    <Text className="font-poppins-bold">RF</Text>
                  </AvatarFallback>
                  <AvatarImage
                    source={{
                      uri: avatar,
                      scale: 100,
                    }}
                  />
                </Avatar>
              </View>
            </View>
            <Separator />
          </View>
        ),
      }}
    />
  );
};

export default HeaderBar;

import React, { ReactNode } from "react";
import { type Href, Link } from "expo-router";
import { Text } from "./ui/text";
import { View } from "react-native";
import { Card } from "./ui/card";
export type ShortcutType = {
  options: {
    title: string;
    href: Href;
    icon: ReactNode;
  };
};
const Shortcut = ({ options }: ShortcutType) => {
  return (
    <Link href={options.href}>
      <View className="items-center gap-2">
        <Card className="p-4 rounded-full bg-primary border-primary-foreground">
          {options.icon}
        </Card>
        <Text className="font-poppins-semibold text-xs text-primary-foreground">
          {options.title}
        </Text>
      </View>
    </Link>
  );
};
export default Shortcut;

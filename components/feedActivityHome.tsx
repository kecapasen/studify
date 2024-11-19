import { type ReactNode } from "react";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";
import { View } from "react-native";
import { Text } from "./ui/text";
export type FeedActivityType = {
  options: {
    title: string;
    description: string;
    icon: ReactNode;
  };
};
const FeedActivity = ({ options }: FeedActivityType) => {
  return (
    <Card className="flex-row items-center gap-4 p-8 w-full bg-secondary border-secondary-foreground">
      {options.icon}
      <Separator orientation="vertical" />
      <View className="gap-1">
        <Text className="font-poppins-medium text-secondary-foreground">
          {options.title}
        </Text>
        <Text className="font-poppins-medium text-xs text-muted-foreground">
          {options.description}
        </Text>
      </View>
    </Card>
  );
};

export default FeedActivity;

import React from "react";
import { CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Variant } from "@/interfaces/type";
import { View } from "react-native";
import { Text } from "./ui/text";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { toIDR } from "@/lib/toIDR";

const CardHeaderPayment = ({
  options: { title, description, amount, variant },
}: {
  options: {
    title: string;
    description: string;
    amount: number;
    variant: Variant;
  };
}) => {
  return (
    <CardHeader className="gap-1">
      <CardTitle className="font-poppins-semibold text-lg text-secondary-foreground">
        {title}
      </CardTitle>
      <CardDescription>
        <View className="flex-row items-center gap-2">
          <Badge className={`bg-${variant} border-${variant}-foreground`}>
            <Text
              className={`font-poppins-semibold text-${variant}-foreground text-xs`}
            >
              + {toIDR(amount)}
            </Text>
          </Badge>
          <Separator orientation="vertical" />
          <Text className="font-poppins-medium text-sm text-muted-foreground">
            {description}
          </Text>
        </View>
      </CardDescription>
    </CardHeader>
  );
};

export default CardHeaderPayment;

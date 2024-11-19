import { View } from "react-native";
import { Separator } from "./ui/separator";
import { Text } from "./ui/text";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Role } from "@/interfaces/type";
import BadgeRole from "./badgeRole";
import { toIDR } from "@/lib/toIDR";
type User = {
  name: string;
  role: Role;
  avatar?: string;
};
export type UserReportPaymentType = {
  options: { user: User; amount: number; description?: string };
};
const UserReportPayment = ({
  options: { user, amount, description },
}: UserReportPaymentType) => {
  return (
    <>
      <Separator />
      <View className="flex-row gap-4">
        <Avatar
          className="h-12 w-12 border border-secondary-foreground"
          alt="Dekorasi"
        >
          <AvatarFallback>
            <Text className="font-poppins-bold">
              {user.name
                .split(" ")
                .map((item) => item[0].toUpperCase())
                .join("")}
            </Text>
          </AvatarFallback>
          <AvatarImage
            source={{
              uri: user.avatar,
              scale: 100,
            }}
          />
        </Avatar>
        <View className="flex-1 gap-2">
          <View className="gap-1">
            <View className="flex-row items-center gap-2">
              <Text className="font-poppins-semibold text-sm text-secondary-foreground">
                {user.name}
              </Text>
              {user.role && <BadgeRole options={{ role: user.role }} />}
            </View>
            <View className="flex-row justify-start">
              <Badge className="bg-accent border-accent-foreground">
                <Text className="font-poppins-semibold text-accent-foreground text-xs">
                  {toIDR(amount)}
                </Text>
              </Badge>
            </View>
          </View>
          {description && (
            <>
              <Separator />
              <Text className="font-poppins-medium text-xs text-muted-foreground">
                {description}
              </Text>
            </>
          )}
        </View>
      </View>
    </>
  );
};

export default UserReportPayment;

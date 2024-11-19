import React from "react";
import { View } from "react-native";
import { Separator } from "./ui/separator";
import { Home } from "@/lib/icons/home";
import { MessagesSquare } from "@/lib/icons/messagesSquare";
import { Card } from "./ui/card";
import { PiggyBank } from "@/lib/icons/piggyBank";
import { CalendarDays } from "@/lib/icons/calendarDays";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Text } from "./ui/text";
import { cn } from "@/lib/utils";
import { Link } from "expo-router";
const NavigationBar = ({
  active,
}: {
  active: "HOME" | "CHAT" | "PAYMENT" | "PICKET" | "PROFILE";
}) => {
  return (
    <View className="absolute bottom-0 w-full bg-white">
      <Separator />
      <View className="px-4 py-2 flex-row justify-between items-center">
        <Link replace className="p-2" href="/">
          <Card
            className={cn(
              "p-2 aspect-square rounded-full",
              active === "HOME"
                ? "bg-primary border-primary-foreground"
                : "border-white"
            )}
          >
            <Home width={24} height={24} className="text-primary-foreground" />
          </Card>
        </Link>
        <Card
          className={cn(
            "p-2 aspect-square rounded-full",
            active === "CHAT"
              ? "bg-primary border-primary-foreground"
              : "border-white"
          )}
        >
          <MessagesSquare
            width={24}
            height={24}
            className="text-primary-foreground"
          />
        </Card>
        <Link className="p-2" href="/kas">
          <Card
            className={cn(
              "p-2 aspect-square rounded-full",
              active === "PAYMENT"
                ? "bg-primary border-primary-foreground"
                : "border-white"
            )}
          >
            <PiggyBank
              width={24}
              height={24}
              className="text-primary-foreground"
            />
          </Card>
        </Link>
        <Card
          className={cn(
            "p-2 aspect-square rounded-full",
            active === "PICKET"
              ? "bg-primary border-primary-foreground"
              : "border-white"
          )}
        >
          <CalendarDays
            width={24}
            height={24}
            className="text-primary-foreground"
          />
        </Card>
        <View className="aspect-square rounded-full">
          <Avatar alt="Dekorasi">
            <AvatarFallback>
              <Text className="font-poppins-semibold">RF</Text>
            </AvatarFallback>
            <AvatarImage
              source={{
                uri: "https://instagram.fcgk22-2.fna.fbcdn.net/v/t51.2885-19/463888628_509583005312110_4264115464098181570_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fcgk22-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=qDH-R1xdmFsQ7kNvgElJAmT&_nc_gid=0a0d01d88e604307a2a4b2d55c2e2e1d&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYBXiffMCx4CSDrlSvPP8sXglJ4oIjm9Q4IxRLSu6jF86A&oe=673CC283&_nc_sid=7d3ac5",
                scale: 100,
              }}
            />
          </Avatar>
        </View>
      </View>
    </View>
  );
};

export default NavigationBar;

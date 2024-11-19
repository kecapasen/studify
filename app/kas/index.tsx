import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { ScrollView, View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Coins } from "@/lib/icons/coins";
import { MoveDown } from "@/lib/icons/moveDown";
import { MoveUp } from "@/lib/icons/moveUp";
import { useHeaderHeight } from "@react-navigation/elements";
import NavigationBar from "@/components/navigationBar";
import HeroImage from "@/components/heroImage";
import HeaderBar from "@/components/headerBar";
import CardHeaderPayment from "@/components/cardHeaderPayment";
import UserReportPayment, {
  UserReportPaymentType,
} from "@/components/userReportPayment";
const USER_REPORT_PAYMENT: UserReportPaymentType[] = [
  {
    options: {
      user: {
        name: "Rizky Maulana",
        role: "DEVELOPER",
        avatar:
          "https://instagram.fcgk22-2.fna.fbcdn.net/v/t51.2885-19/463888628_509583005312110_4264115464098181570_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fcgk22-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=qDH-R1xdmFsQ7kNvgElJAmT&_nc_gid=0a0d01d88e604307a2a4b2d55c2e2e1d&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYBXiffMCx4CSDrlSvPP8sXglJ4oIjm9Q4IxRLSu6jF86A&oe=673CC283&_nc_sid=7d3ac5",
      },
      amount: 2000,
    },
  },
  {
    options: {
      user: {
        name: "Annisa Farah",
        role: "CONTRIBUTOR",
        avatar:
          "https://media-cgk1-2.cdn.whatsapp.net/v/t61.24694-24/459437605_885709213310238_7768645778952438377_n.jpg?ccb=11-4&oh=01_Q5AaIHPNSstsPmt2eGUC4DRpon0wL9R2_go2ljBSIspbzXhz&oe=67497793&_nc_sid=5e03e0&_nc_cat=103",
      },
      amount: 2000,
    },
  },
  {
    options: {
      user: {
        name: "Muhamad Rafa",
        role: "DESIGNER",
        avatar:
          "https://media-cgk1-2.cdn.whatsapp.net/v/t61.24694-24/345232964_1393566044740639_5194121995308972644_n.jpg?ccb=11-4&oh=01_Q5AaIFOe_2Ip3OZdzdZbPXGagNq_iRS6d4nrj_RJkR5JWx5a&oe=6746902A&_nc_sid=5e03e0&_nc_cat=110",
      },
      amount: 2000,
    },
  },
  {
    options: {
      user: {
        name: "Raffi Alhariri",
        role: "CLASS_PRESIDENT",
        avatar:
          "https://media-cgk1-2.cdn.whatsapp.net/v/t61.24694-24/421145008_1234774541192481_5627858630026402889_n.jpg?ccb=11-4&oh=01_Q5AaIBNe8A5Bz06OWwD50OifMHbVpvUbs2l2ShO6SkUOWYEr&oe=67469529&_nc_sid=5e03e0&_nc_cat=100",
      },
      amount: 2000,
    },
  },
  {
    options: {
      user: {
        name: "Bunga Aimah",
        role: "VICE_PRESIDENT",
      },
      amount: 2000,
    },
  },
  {
    options: {
      user: {
        name: "Nadia Fitri",
        role: "TREASURER",
      },
      amount: 2000,
    },
  },
  {
    options: {
      user: {
        name: "Khaila Dwi",
        role: "SECRETARY",
      },
      amount: 2000,
    },
  },
];
const TREASURER_REPORT_PAYMENT: UserReportPaymentType[] = [
  {
    options: {
      user: {
        name: "Nadia Fitri",
        role: "TREASURER",
      },
      amount: 20000,
      description: "Terpakai Rp 20.000 untuk alat kebersihan",
    },
  },
  {
    options: {
      user: {
        name: "Nadia Fitri",
        role: "TREASURER",
      },
      amount: 16000,
      description: "Terpakai Rp 16.000 untuk alat mengajar",
    },
  },
];
const PaymentScreen = () => {
  const [value, setValue] = useState("in");
  const insets = useSafeAreaInsets();
  const headerHeight = useHeaderHeight();
  return (
    <SafeAreaView className="flex-1">
      <HeaderBar
        options={{
          title: "Kas Kelas",
          avatar:
            "https://instagram.fcgk22-2.fna.fbcdn.net/v/t51.2885-19/463888628_509583005312110_4264115464098181570_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fcgk22-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=qDH-R1xdmFsQ7kNvgElJAmT&_nc_gid=0a0d01d88e604307a2a4b2d55c2e2e1d&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYBXiffMCx4CSDrlSvPP8sXglJ4oIjm9Q4IxRLSu6jF86A&oe=673CC283&_nc_sid=7d3ac5",
          safeAreaInsets: insets,
        }}
      />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View
          className="flex-1 px-4 pt-4 gap-4 pb-24"
          style={{ marginTop: headerHeight - insets.top + 16 }}
        >
          <HeroImage
            options={{
              title: "Total Kas Kelas",
              description: "Rp 432.000",
              image:
                "https://images.unsplash.com/photo-1633158829875-e5316a358c6f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
          />
          <Button className="flex-row gap-2 rounded-full bg-primary border-primary-foreground border">
            <Coins width={20} height={20} className="text-primary-foreground" />
            <Text className="font-poppins-semibold text-primary-foreground">
              Bayar Kas
            </Text>
          </Button>
          <View className="flex-1 justify-center">
            <Tabs
              value={value}
              onValueChange={setValue}
              className="flex-col gap-2 h-full"
            >
              <TabsList className="flex-row w-full rounded-full">
                <TabsTrigger
                  value="in"
                  className={cn(
                    "flex-1 flex-row items-center gap-2 rounded-full border border-secondary",
                    value === "in" && "bg-accent border-accent-foreground"
                  )}
                >
                  <MoveDown
                    strokeWidth={4}
                    width={16}
                    height={16}
                    className={
                      value === "in"
                        ? "text-accent-foreground"
                        : "text-secondary-foreground"
                    }
                  />
                  <Text
                    className={cn(
                      "font-poppins-semibold",
                      value === "in"
                        ? "text-accent-foreground"
                        : "text-secondary-foreground"
                    )}
                  >
                    Pemasukan
                  </Text>
                </TabsTrigger>
                <TabsTrigger
                  value="out"
                  className={cn(
                    "flex-1 flex-row items-center gap-2 rounded-full border border-secondary",
                    value === "out" && "bg-accent border-accent-foreground"
                  )}
                >
                  <Text
                    className={cn(
                      "font-poppins-semibold",
                      value === "out"
                        ? "text-accent-foreground"
                        : "text-secondary-foreground"
                    )}
                  >
                    Pengeluaran
                  </Text>
                  <MoveUp
                    strokeWidth={4}
                    width={16}
                    height={16}
                    className={
                      value === "out"
                        ? "text-accent-foreground"
                        : "text-secondary-foreground"
                    }
                  />
                </TabsTrigger>
              </TabsList>
              <TabsContent value="in">
                <Card className="bg-secondary border-secondary-foreground">
                  <CardHeaderPayment
                    options={{
                      title: "Pemasukan Kas Kelas",
                      description: "selama minggu ini nih",
                      amount: 34000,
                      variant: "primary",
                    }}
                  />
                  <CardContent className="gap-4">
                    {USER_REPORT_PAYMENT.map((item, index) => (
                      <UserReportPayment
                        options={{ ...item.options }}
                        key={index}
                      />
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="out">
                <Card className="bg-secondary border-secondary-foreground">
                  <CardHeaderPayment
                    options={{
                      title: "Pengeluaran Kas Kelas",
                      description: "selama minggu ini nih",
                      amount: 36000,
                      variant: "destructive",
                    }}
                  />
                  <CardContent className="gap-4">
                    {TREASURER_REPORT_PAYMENT.map((item, index) => (
                      <UserReportPayment
                        options={{ ...item.options }}
                        key={index}
                      />
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </View>
        </View>
      </ScrollView>
      <NavigationBar active="PAYMENT" />
    </SafeAreaView>
  );
};
export default PaymentScreen;

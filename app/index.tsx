import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Text } from "@/components/ui/text";
import { Stack } from "expo-router";
import { PiggyBank } from "@/lib/icons/piggyBank";
import { BookMarked } from "@/lib/icons/bookMarked";
import { CalendarDays } from "@/lib/icons/calendarDays";
import { ScrollView, useWindowDimensions, View } from "react-native";
import { MessagesSquare } from "@/lib/icons/messagesSquare";
import { Volume2 } from "@/lib/icons/volume2";
import { Coins } from "@/lib/icons/coins";
import { FlashList } from "@shopify/flash-list";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import NavigationBar from "@/components/navigationBar";
import HeroImage from "@/components/heroImage";
import Shortcut, { type ShortcutType } from "@/components/shortcutHome";
import FeedActivity, { FeedActivityType } from "@/components/feedActivityHome";
const SHORTCUT: ShortcutType[] = [
  {
    options: {
      href: "/kas",
      title: "Kas Kelas",
      icon: (
        <PiggyBank height={24} width={24} className="text-primary-foreground" />
      ),
    },
  },
  {
    options: {
      href: "/tugas",
      title: "Tugas",
      icon: (
        <BookMarked
          height={24}
          width={24}
          className="text-primary-foreground"
        />
      ),
    },
  },
  {
    options: {
      href: "/piket",
      title: "Piket",
      icon: (
        <CalendarDays
          height={24}
          width={24}
          className="text-primary-foreground"
        />
      ),
    },
  },
  {
    options: {
      href: "/chat",
      title: "Chat Kelas",
      icon: (
        <MessagesSquare
          height={24}
          width={24}
          className="text-primary-foreground"
        />
      ),
    },
  },
  {
    options: {
      href: "/event",
      title: "Event",
      icon: (
        <CalendarDays
          height={24}
          width={24}
          className="text-primary-foreground"
        />
      ),
    },
  },
];
const FEED_ACTIVITY: FeedActivityType[] = [
  {
    options: {
      title: "Tugas Baru!",
      description: "Bahasa Indonesia - Pak Heri",
      icon: (
        <BookMarked
          height={24}
          width={24}
          className="text-secondary-foreground"
        />
      ),
    },
  },
  {
    options: {
      title: "Chat Baru!",
      description: "12 chat belum kamu baca nih",
      icon: (
        <MessagesSquare
          height={24}
          width={24}
          className="text-secondary-foreground"
        />
      ),
    },
  },
  {
    options: {
      title: "Pengumuman Baru!",
      description: "Dari: Bu Melani - Pencet disini ya untuk liat",
      icon: (
        <Volume2 height={24} width={24} className="text-secondary-foreground" />
      ),
    },
  },
  {
    options: {
      title: "Pengeluaran Baru!",
      description: "Terpakai Rp 20.000 untuk alat kebersihan",
      icon: (
        <Coins height={24} width={24} className="text-secondary-foreground" />
      ),
    },
  },
];
const INVOICES = [
  {
    invoice: "Bahasa Indonesia",
    isCompleted: false,
    paymentMethod: "1 Hari",
  },
  {
    invoice: "PLH",
    isCompleted: true,
    paymentMethod: "1 Hari",
  },
  {
    invoice: "Bahasa Jepang",
    isCompleted: true,
    paymentMethod: "1 Hari",
  },
];
const MIN_COLUMN_WIDTHS = [0, 0, 0];
const ListTask = () => {
  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const columnWidths = React.useMemo(() => {
    return MIN_COLUMN_WIDTHS.map((minWidth) => {
      const evenWidth = width / MIN_COLUMN_WIDTHS.length;
      return evenWidth > minWidth ? evenWidth : minWidth;
    });
  }, [width]);
  return (
    <ScrollView
      horizontal
      bounces={false}
      showsHorizontalScrollIndicator={false}
    >
      <Table aria-labelledby="invoice-table">
        <TableHeader>
          <TableRow>
            <TableHead style={{ width: columnWidths[0] }} className="px-4">
              <Text className="font-poppins-medium text-foreground">Mapel</Text>
            </TableHead>
            <TableHead style={{ width: columnWidths[1] }} className="px-4">
              <Text className="font-poppins-medium text-center text-foreground">
                Status
              </Text>
            </TableHead>
            <TableHead style={{ width: columnWidths[2] }} className="px-4">
              <Text className="font-poppins-medium text-center text-foreground">
                Deadline
              </Text>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <FlashList
            data={INVOICES}
            estimatedItemSize={45}
            contentContainerStyle={{
              paddingBottom: insets.bottom,
            }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item: invoice, index }) => {
              return (
                <TableRow
                  key={invoice.invoice}
                  className={cn(
                    "active:bg-secondary",
                    index % 2 && "bg-muted/40"
                  )}
                >
                  <TableCell
                    className="justify-center px-4"
                    style={{ width: columnWidths[0] }}
                  >
                    <Text className="font-poppins-medium text-sm line-clamp-1 text-accent-foreground">
                      {invoice.invoice}
                    </Text>
                  </TableCell>
                  <TableCell
                    className="items-center px-4"
                    style={{ width: columnWidths[1] }}
                  >
                    <Card
                      className={cn(
                        "h-4 w-4 rounded-full",
                        invoice.isCompleted
                          ? "bg-primary-foreground border-primary"
                          : "bg-accent border-accent-foreground"
                      )}
                    />
                  </TableCell>
                  <TableCell
                    style={{ width: columnWidths[2] }}
                    className="px-4"
                  >
                    <Badge className="bg-primary border-primary-foreground">
                      <Text className="font-poppins-semibold text-primary-foreground">
                        {invoice.paymentMethod}
                      </Text>
                    </Badge>
                  </TableCell>
                </TableRow>
              );
            }}
          />
        </TableBody>
      </Table>
    </ScrollView>
  );
};
const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="gap-4 pt-4 px-4 pb-24">
          <View className="flex-row justify-between items-center">
            <Text className="font-poppins-bold text-2xl text-primary">
              Hai,{" "}
              <Text className="font-poppins-bold text-2xl text-primary-foreground">
                Rizky!
              </Text>
            </Text>
            <Avatar className="h-12 w-12" alt="Dekorasi">
              <AvatarFallback>
                <Text className="font-poppins-bold">RF</Text>
              </AvatarFallback>
              <AvatarImage
                source={{
                  uri: "https://instagram.fcgk22-2.fna.fbcdn.net/v/t51.2885-19/463888628_509583005312110_4264115464098181570_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fcgk22-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=qDH-R1xdmFsQ7kNvgElJAmT&_nc_gid=0a0d01d88e604307a2a4b2d55c2e2e1d&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AYBXiffMCx4CSDrlSvPP8sXglJ4oIjm9Q4IxRLSu6jF86A&oe=673CC283&_nc_sid=7d3ac5",
                  scale: 100,
                }}
              />
            </Avatar>
          </View>
          <Separator />
          <HeroImage
            options={{
              title: "SMK IT Assalam",
              description: "XI RPL - BOGA",
              image:
                "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3R1ZHl8ZW58MHx8MHx8fDA%3D",
            }}
          />
          <Separator />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row items-center gap-8">
              {SHORTCUT.map((item, index) => (
                <Shortcut options={{ ...item.options }} key={index} />
              ))}
            </View>
          </ScrollView>
          <Separator />
          <View className="gap-4">
            <Text className="font-poppins-semibold text-xl text-foreground">
              Feed Kelas
            </Text>
            <View className="gap-4">
              {FEED_ACTIVITY.map((item, index) => (
                <FeedActivity options={{ ...item.options }} key={index} />
              ))}
            </View>
          </View>
          <Separator />
          <View className="gap-4">
            <Text className="font-poppins-semibold text-xl text-foreground">
              Daftar Tugas
            </Text>
            <ListTask />
          </View>
        </View>
      </ScrollView>
      <NavigationBar active="HOME" />
    </SafeAreaView>
  );
};
export default HomeScreen;

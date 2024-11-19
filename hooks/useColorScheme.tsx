import { useColorScheme as useNativewindColorScheme } from "nativewind";

const useColorScheme = () => {
  const { colorScheme, setColorScheme, toggleColorScheme } =
    useNativewindColorScheme();
  return {
    colorScheme: colorScheme ?? "dark",
    isDarkColorScheme: colorScheme === "dark",
    setColorScheme,
    toggleColorScheme,
  };
};

export default useColorScheme;

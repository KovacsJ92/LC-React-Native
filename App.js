import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-red-800">
      <Text className="text-red-300">Tailwind CSS</Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}



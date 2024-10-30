import { ScrollView, Text, View } from "react-native";

export default function Home() {
  return (
    <>
      <ScrollView className="w-11/12 mx-auto pt-8 prose">
        <View className="space-y-2">
          <Text className="text-2xl font-bold">Welcome, Home Page.</Text>
          <Text className="leading-6 tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis assumenda inventore nostrum, similique
            aliquid necessitatibus! Officiis sunt quas recusandae quae, molestias ullam aut est fugiat. Quod, vel.
            Inventore, neque pariatur.
          </Text>
          <Text className="w-full aspect-video bg-gray-400 rounded">&nbsp;</Text>
        </View>
      </ScrollView>
    </>
  );
}

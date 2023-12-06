import React, { useState } from "react";
import { Text, Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

import { useScreenFocusRefetch } from "app/hooks";
import ShoeCard from "app/components/ShoeCard";
import { getLocalStoreData } from "app/utils/localStorage";
import { AdminHomeScreenNavigationProp, PAGE } from "app/types";
import styles from "./styles";

export default function HomeScreen({
  navigation,
}: AdminHomeScreenNavigationProp) {
  const [items, setItems] = useState([]);
  const insets = useSafeAreaInsets();

  const fetchItems = async () => {
    const items = await getLocalStoreData("items");
    setItems(items);
  };

  useScreenFocusRefetch(fetchItems);

  return (
    <View
      style={{
        ...styles.container,
        paddingTop: insets.top,
      }}
    >
      <Text style={styles.heading}>Shoe Cart System</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        {items?.map((item, index) => (
          <ShoeCard key={index} item={item} type="admin" />
        ))}
      </ScrollView>

      <Pressable
        onPress={() => navigation.navigate(PAGE.ADD)}
        style={styles.floatingBtn}
      >
        <Text style={styles.floatingBtnIcon}>+</Text>
      </Pressable>
    </View>
  );
}

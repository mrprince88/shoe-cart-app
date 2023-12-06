import React, { useState, useContext } from "react";
import { View, Text, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

import { useScreenFocusRefetch } from "app/hooks";
import Icon from "app/components/Icon";
import UserCartContext from "app/context/UserCartContext";

import { getLocalStoreData } from "app/utils/localStorage";
import ModalHeader from "app/components/ModalHeader";
import styles from "./styles";
import { PAGE, Shoe, UserHomeScreenNavigationProp } from "app/types";
import ShoeCard from "app/components/ShoeCard";

export default function UserHome({ navigation }: UserHomeScreenNavigationProp) {
  const [items, setItems] = useState<Shoe[]>([]);
  const insets = useSafeAreaInsets();
  const { cartItems } = useContext(UserCartContext);

  const fetchItems = async () => {
    const items = await getLocalStoreData("items");
    setItems(items);
  };

  useScreenFocusRefetch(fetchItems);

  return (
    <View style={{ ...styles.container, paddingTop: insets.top }}>
      <ModalHeader
        title="User Home"
        left={
          <Pressable onPress={() => navigation.goBack()}>
            <Icon name="close" />
          </Pressable>
        }
        right={
          <Pressable onPress={() => navigation.navigate(PAGE.USER_CART)}>
            <Icon name="shopping-bag" />
            {cartItems.length > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{cartItems.length}</Text>
              </View>
            )}
          </Pressable>
        }
      />
      <ScrollView style={styles.contentContainer}>
        {items?.map((item) => (
          <ShoeCard key={item.id} item={item} type="user" />
        ))}
      </ScrollView>
    </View>
  );
}

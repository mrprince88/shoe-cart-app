import React, { useContext } from "react";
import { View, Text, Image, Pressable } from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/native";
import Icon from "app/components/Icon";
import UserCartContext from "app/context/UserCartContext";

import { getLocalStoreData, setLocalStoreData } from "app/utils/localStorage";
import { PAGE, RootStackParamList, Shoe } from "app/types";
import styles from "./styles";

export default function ShoeCard({
  item,
  type = "admin",
}: {
  item: Shoe;
  type: "user" | "admin" | "cart";
}) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { cartItems, setCartItems } = useContext(UserCartContext);

  const handleItemDelete = async () => {
    const items = await getLocalStoreData("items");
    const newItems = items.filter((i: any) => i.id !== item.id);
    await setLocalStoreData("items", newItems);
  };

  const handleCartItemDelete = async () => {
    const newItems = cartItems.filter((i: any) => i.id !== item.id);
    setCartItems(newItems);
  };

  const renderRightActions = () => {
    if (type === "user" || type === "cart") return null;
    return (
      <View style={styles.rightAction}>
        <>
          <Pressable
            style={styles.controls}
            onPress={() => {
              navigation.navigate(PAGE.ADD, { itemId: item.id });
            }}
          >
            <Icon name="edit" />
          </Pressable>
          <Pressable style={styles.controlsDanger} onPress={handleItemDelete}>
            <Icon name="trash" />
          </Pressable>
        </>
      </View>
    );
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.itemContainer}>
        <Image
          style={styles.itemImage}
          source={{
            uri: "https://source.unsplash.com/random/?shoes",
          }}
        />
        <View style={styles.descriptionContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.description} numberOfLines={2}>
            {item.description}
          </Text>
          <Text style={styles.price}>{`${item.price}€`}</Text>
          <View style={styles.sizeContainer}>
            {item.sizes.map((size: any) => (
              <Text key={size} style={styles.sizeBtn}>
                {size}
              </Text>
            ))}
          </View>
          <View>
            {type === "user" && (
              <Pressable
                style={styles.addBtn}
                onPress={() => {
                  setCartItems([...cartItems, item]);
                }}
              >
                <Text style={styles.addBtnText}>Add to cart</Text>
              </Pressable>
            )}

            {type === "cart" && (
              <Pressable
                style={styles.deleteBtn}
                onPress={handleCartItemDelete}
              >
                <Text style={styles.deleteBtnText}>Delete</Text>
              </Pressable>
            )}
          </View>
        </View>
      </View>
    </Swipeable>
  );
}

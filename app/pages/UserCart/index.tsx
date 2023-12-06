import { useContext } from "react";
import UserCartContext from "app/context/UserCartContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import ShoeCard from "app/components/ShoeCard";
import ModalHeader from "app/components/ModalHeader";
import { Pressable, ScrollView, View } from "react-native";
import Icon from "app/components/Icon";
import styles from "./styles";
import { UserCartScreenNavigationProp } from "app/types";

export default function UserCart({ navigation }: UserCartScreenNavigationProp) {
  const { cartItems } = useContext(UserCartContext);
  const insets = useSafeAreaInsets();

  return (
    <View style={{ ...styles.container, paddingTop: insets.top }}>
      <ModalHeader
        title="User Cart"
        left={
          <Pressable onPress={() => navigation.goBack()}>
            <Icon name="chevron-left-large" />
          </Pressable>
        }
      />
      <ScrollView style={styles.contentContainer}>
        {cartItems?.map((item) => (
          <ShoeCard key={item.cartItemId} item={item} type="cart" />
        ))}
      </ScrollView>
    </View>
  );
}

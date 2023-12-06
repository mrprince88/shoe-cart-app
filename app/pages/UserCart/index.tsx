import { useContext } from "react";
import UserCartContext from "app/context/UserCartContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import ShoeCard from "app/components/ShoeCard";
import ModalHeader from "app/components/ModalHeader";
import { ScrollView, View } from "react-native";
import Icon from "app/components/Icon";
import styles from "./styles";

export default function UserCart() {
  const { cartItems } = useContext(UserCartContext);
  const insets = useSafeAreaInsets();

  return (
    <View style={{ ...styles.container, paddingTop: insets.top }}>
      <ModalHeader
        title="User Cart"
        left={<Icon name="chevron-left-large" />}
      />
      <ScrollView style={styles.contentContainer}>
        {cartItems.map((item) => (
          <ShoeCard key={item.id} item={item} type="cart" />
        ))}
      </ScrollView>
    </View>
  );
}

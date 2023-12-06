import { View, Text, Pressable } from "react-native";
import { ModalHeaderProps } from "app/types";
import styles from "./styles";

export default function ModalHeader({
  left,
  right,
  title,
  style,
  onRightIconPress,
  onLeftIconPress,
}: ModalHeaderProps) {
  return (
    <View style={[styles.container, style]}>
      <Pressable onPress={onLeftIconPress}>{left}</Pressable>

      <View style={styles.headingContainer}>
        <Text style={styles.heading}>{title}</Text>
      </View>

      <Pressable onPress={onRightIconPress}>{right}</Pressable>
    </View>
  );
}

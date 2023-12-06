import { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import uuid from "react-native-uuid";

import Icon from "app/components/Icon";
import ModalHeader from "app/components/ModalHeader";

import { setLocalStoreData, getLocalStoreData } from "app/utils/localStorage";
import styles from "./styles";
import { AddScreenNavigationProp, Shoe } from "app/types";

export default function AddItem({
  navigation,
  route,
}: AddScreenNavigationProp) {
  const itemId = route?.params?.itemId;

  const [form, setForm] = useState<{
    name: string;
    price: string;
    description: string;
    sizes: string[];
  }>({
    name: "",
    price: "",
    description: "",
    sizes: [],
  });

  useEffect(() => {
    if (itemId) {
      const fetchItem = async () => {
        const items = await getLocalStoreData("items");
        const item = items.find((item: any) => item.id === itemId);
        setForm(item);
      };
      fetchItem();
    }
  }, [itemId]);

  const handleSave = async () => {
    const items = await getLocalStoreData("items");
    let newItems = items || [];
    if (itemId) {
      newItems = items.map((item: Shoe) => {
        if (item.id === itemId) {
          return {
            ...item,
            ...form,
          };
        }
        return item;
      });
    } else {
      newItems.push({
        ...form,
        id: uuid.v4(),
      });
    }
    await setLocalStoreData("items", newItems);
    navigation.goBack();
  };

  return (
    <View style={styles.modalCont}>
      <ModalHeader
        title={itemId ? "Edit Item" : "Add Item"}
        left={
          <Pressable onPress={() => navigation.goBack()}>
            <Icon name="close" />
          </Pressable>
        }
      />
      <View style={styles.container}>
        <TextInput
          placeholder="Item Name"
          style={styles.input}
          value={form.name}
          onChangeText={(text) => setForm({ ...form, name: text })}
        />
        <TextInput
          placeholder="Item Price"
          style={styles.input}
          value={form.price}
          keyboardType="number-pad"
          onChangeText={(text) => setForm({ ...form, price: text })}
        />
        <TextInput
          placeholder="Item Description"
          numberOfLines={3}
          textAlignVertical="top"
          multiline
          value={form.description}
          onChangeText={(text) => setForm({ ...form, description: text })}
          style={{ ...styles.input, minHeight: 100 }}
        />
        <View style={{ margin: 10 }}>
          <Text>Available sizes:</Text>
          <View style={styles.sizeBtnContainer}>
            {["S", "M", "L", "XL"].map((size) => (
              <Pressable
                style={{
                  ...styles.sizeBtn,
                  backgroundColor: form.sizes.includes(size) ? "grey" : "#fff",
                }}
                key={size}
                onPress={() => {
                  if (form.sizes.includes(size)) {
                    setForm({
                      ...form,
                      sizes: form.sizes.filter((s) => s !== size),
                    });
                  } else {
                    setForm({
                      ...form,
                      sizes: [...form.sizes, size],
                    });
                  }
                }}
              >
                <Text
                  style={{
                    color: form.sizes.includes(size) ? "#fff" : "#000",
                  }}
                >
                  {size}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Pressable style={styles.button} onPress={handleSave}>
          <Text>Save</Text>
        </Pressable>
      </View>
    </View>
  );
}

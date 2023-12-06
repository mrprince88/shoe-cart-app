import { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";

export default function useScreenFocusRefetch(refetch: () => void) {
  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch])
  );
}

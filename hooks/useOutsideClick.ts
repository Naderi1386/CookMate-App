import { useRef } from "react";
import { findNodeHandle, UIManager, View } from "react-native";

export function useOutsideTap(onOutsideTap: () => void) {
  const ref = useRef<View | null>(null);

  const handlePress = (evt: any) => {
    if (!ref.current) return;

    const handle = findNodeHandle(ref.current);
    if (!handle) return;

    const { pageX, pageY } = evt.nativeEvent;

    UIManager.measure(handle, (_x, _y, width, height, pageX0, pageY0) => {
      const inside =
        pageX >= pageX0 &&
        pageX <= pageX0 + width &&
        pageY >= pageY0 &&
        pageY <= pageY0 + height;

      if (!inside) {
        onOutsideTap();
      }
    });
  };

  return { ref, handlePress };
}

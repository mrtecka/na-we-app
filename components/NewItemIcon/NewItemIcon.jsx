import { StyleSheet, View, Image } from "react-native";
import { TouchableOpacity } from "react-native";

export default function NewItemIcon({ children, onPress }) {
  return (
    <TouchableOpacity
      style={{
        top: -30,
        justifyContent: "center",
        alignItems: "center",
        // ...styles.shadow,
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 50,
          backgroundColor: "#f05a24",
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
}

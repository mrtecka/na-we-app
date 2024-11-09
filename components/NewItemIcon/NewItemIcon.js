import { View } from "react-native";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function NewItemIcon({ children, onPress }) {
  return (
    <TouchableOpacity
      style={{
        top: -27.5,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#7F5DF0",
        shadowOffset: {
          width: 1,
          height: 7.5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: "50%",
          backgroundColor: "#f05a24",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon name="add" size={35} color="#fff" />
        {children}
      </View>
    </TouchableOpacity>
  );
}

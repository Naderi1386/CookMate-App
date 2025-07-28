import { Dispatch, SetStateAction } from "react";
import { StyleSheet, View } from "react-native";
import { SearchBar as Search } from "@rneui/themed";
import { Colors } from "@/constants/Colors";

const SearchBar = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <View style={Styles.container}>
      <Search
        placeholder="Search for Recipes..."
        onChangeText={setSearch}
        value={search}
        containerStyle={Styles.searchContainer}
        inputContainerStyle={Styles.inputContainerStyle}
        inputStyle={Styles.inputStyle}
      />
    </View>
  );
};

export default SearchBar;

const Styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  searchContainer: {
    backgroundColor: Colors.sub,
    borderRadius: 8,
    borderColor: Colors.background,
  },
  inputContainerStyle: {
    backgroundColor: Colors.background,
    borderRadius: 8,
    borderColor: Colors.background,
  },
  inputStyle: {
    color: Colors.black,
    borderWidth: 0,
    outline: "none",
    outlineWidth: 0,
  },
});

import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const InputComponent = (props) => {
  const { handleSubmit, inputProp, label, editable, title } = props;
  const [inputValue, setInputValue] = useState(inputProp);

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        editable={editable}
        style={styles.input}
        onSubmitEditing={() => handleSubmit(title, inputValue)}
        onBlur={() => handleSubmit(title, inputValue)}
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    paddingLeft: 10,
    flex: 4,
    borderRadius: 6,
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
  },
  label: {
    flex: 1,
  },
  inputContainer: {
    margin: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default InputComponent;

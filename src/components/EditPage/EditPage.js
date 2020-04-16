import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import FormComponent from "../reusable/InputComponent/FormContainer";

export default function EditPage(props) {
  return (
    <View style={styles.container}>
      <FormComponent navigation={props.navigation} editable={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

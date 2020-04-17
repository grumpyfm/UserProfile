import React from "react";
import { StyleSheet, SafeAreaView, ScrollView } from "react-native";

import FormComponent from "../reusable/InputComponent/FormContainer";

export default function EditPage(props) {
  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView}>
        <FormComponent navigation={props.navigation} editable={true} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  scrollView: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
});

import React, { useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import { StyleSheet, ScrollView, SafeAreaView, Alert } from "react-native";

import FormComponent from "../reusable/FormComponent/FormComponentContainer";

const UserProfilePage = (props) => {
  const { actions, errorMessage, navigation, putDataSuccess } = props;
  const isFocused = useIsFocused();

  useEffect(() => {
    props.actions.getDataMiddleware();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView}>
        {isFocused && (
          <FormComponent navigation={navigation} editable={false} />
        )}
        {!putDataSuccess &&
          showAlert(errorMessage, actions.handlePutDataSuccess)}
      </ScrollView>
    </SafeAreaView>
  );
};

const showAlert = (message, handlePutDataSuccess) =>
  Alert.alert("Request failed", message, [
    {
      text: "OK",
      onPress: () => handlePutDataSuccess({ success: true, error: null }),
    },
  ]);

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

export default UserProfilePage;

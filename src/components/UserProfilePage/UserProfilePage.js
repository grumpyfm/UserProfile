import React, { useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";
import FormComponent from "../reusable/InputComponent/FormContainer";
import { useIsFocused } from "@react-navigation/native";
import { removeItem } from "../../services";

const UserProfilePage = (props) => {
  const { actions, errorMessage, navigation, putDataSuccess } = props;
  const isFocused = useIsFocused();
  useEffect(() => {
    props.actions.getDataMiddleware();
  }, []);
  // removeItem("userInfo");
  // removeItem("children");

  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView}>
        {isFocused && (
          <>
            <FormComponent navigation={navigation} editable={false} />
            <Button
              title="Edit"
              onPress={() => navigation.push("EditUserProfile")}
            />
          </>
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

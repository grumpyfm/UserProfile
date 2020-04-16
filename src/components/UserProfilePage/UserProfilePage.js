import React, { useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Button } from "react-native";
import FormComponent from "../reusable/InputComponent/FormContainer";
import { useIsFocused } from "@react-navigation/native";

const UserProfilePage = (props) => {
  const isFocused = useIsFocused();
  useEffect(() => {
    props.actions.getDataMiddleware();
  }, []);

  return (
    <View style={styles.container}>
      {isFocused && (
        <>
          <FormComponent editable={false} />
          <Button
            title="Edit"
            onPress={() => props.navigation.push("EditUserProfile")}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default UserProfilePage;

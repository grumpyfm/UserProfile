import React, { useEffect } from "react";
import { StyleSheet, ScrollView, SafeAreaView, Button } from "react-native";
import FormComponent from "../reusable/InputComponent/FormContainer";
import { useIsFocused } from "@react-navigation/native";

const UserProfilePage = (props) => {
  const isFocused = useIsFocused();
  useEffect(() => {
    props.actions.getDataMiddleware();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollView}>
        {isFocused && (
          <>
            <FormComponent navigation={props.navigation} editable={false} />
            <Button
              title="Edit"
              onPress={() => props.navigation.push("EditUserProfile")}
            />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

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

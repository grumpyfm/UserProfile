import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";

import InputComponent from "../InputComponent/InputComponent";
import ChildrenBlock from "../ChildrenBlock/ChildrenBlock";
import DatePickerComponent from "../DatePickerComponent/DatePickerComponent";

class FormComponent extends Component {
  state = {
    userInfo: this.props.userInfo,
    children: JSON.parse(JSON.stringify(this.props.children)),
  };

  render() {
    const { editable, children } = this.props;
    return (
      <View>
        {this.drawUserInfo()}
        <ChildrenBlock
          hanleChildrenUpdate={this.hanleChildrenUpdate}
          editable={editable}
          children={editable ? this.state.children : children}
        />
        {editable && this.drawButtons()}
      </View>
    );
  }
  drawUserInfo = () => {
    const { editable, userInfo } = this.props;
    if (userInfo?.name !== "" || editable) {
      return (
        <>
          <InputComponent
            editable={editable}
            title={"name"}
            label={"Name"}
            handleSubmit={this.handleSubmitUserInfo}
            inputProp={userInfo.name}
          />
          <InputComponent
            editable={editable}
            title={"surname"}
            label={"Surname"}
            handleSubmit={this.handleSubmitUserInfo}
            inputProp={userInfo.surname}
          />
          <DatePickerComponent
            label={"Birthday"}
            title={"birthday"}
            editable={editable}
            handleSubmit={this.handleSubmitUserInfo}
            date={userInfo.birthday}
          />
          {!editable && (
            <Button
              title="Edit"
              onPress={() => this.props.navigation.push("EditUserProfile")}
            />
          )}
        </>
      );
    } else {
      return (
        <Button
          title="Add an information"
          onPress={() => this.props.navigation.push("EditUserProfile")}
        />
      );
    }
  };

  drawButtons = () => {
    let disabledButton =
      this.state.userInfo.name === "" ||
      this.state.userInfo.surname === "" ||
      this.state.userInfo.birthday === "";
    return (
      <View style={styles.bottonBlock}>
        <TouchableOpacity
          disabled={disabledButton}
          onPress={this.handleSave}
          style={disabledButton ? styles.bisabledButton : styles.botton}
        >
          <Text style={styles.bottonTitle}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.pop()}
          style={styles.botton}
        >
          <Text style={styles.bottonTitle}>Discard</Text>
        </TouchableOpacity>
      </View>
    );
  };

  handleSave = () => {
    const { userInfo, children } = this.state;
    this.props.actions.putDataMiddleware({ userInfo, children });
    this.props.navigation.pop();
  };

  hanleChildrenUpdate = (newChildren) => {
    this.setState({ children: newChildren });
  };

  handleSubmitUserInfo = (title, inputValue) => {
    this.setState((prevState) => {
      let userInfo = Object.assign({}, prevState.userInfo);
      userInfo[title] = inputValue;
      return { userInfo };
    });
  };
}

const styles = StyleSheet.create({
  bottonBlock: { flexDirection: "row" },
  botton: {
    paddingTop: 10,
    paddingBottom: 10,
    margin: 10,
    flex: 1,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#2188dc",
  },
  bisabledButton: {
    paddingTop: 10,
    paddingBottom: 10,
    margin: 10,
    flex: 1,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#BEDEF9",
  },
  bottonTitle: {
    color: "#ffff",
  },
});

export default FormComponent;

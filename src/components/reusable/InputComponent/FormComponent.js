import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import InputComponent from "./InputComponent";
import ChildrenBlock from "./ChildrenBlock";

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
      return Object.keys(userInfo).map((keyName, i) => (
        <InputComponent
          key={keyName}
          editable={editable}
          title={keyName}
          label={keyName}
          handleSubmit={this.handleSubmitUserInfo}
          inputProp={userInfo[keyName]}
        />
      ));
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
    return (
      <View style={styles.bottonBlock}>
        <TouchableOpacity onPress={this.handleSave} style={styles.botton}>
          <Text>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.pop()}
          style={styles.botton}
        >
          <Text>Discard</Text>
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
});

export default FormComponent;

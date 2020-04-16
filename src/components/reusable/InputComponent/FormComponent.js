import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  SafeAreaView,
  ScrollView,
} from "react-native";
import InputComponent from "./InputComponent";
import { generateId } from "../../../services";

class FormComponent extends Component {
  state = {
    userInfo: this.props.userInfo,
    children: this.props.children,
  };

  render() {
    const { editable } = this.props;
    return (
      <SafeAreaView>
        <ScrollView style={styles.scrollView}>
          {this.drawUserInfo()}
          <Text>Children:</Text>
          {this.state.children.map((child) => (
            <View style={styles.container} key={`${child.id}`}>
              <InputComponent
                editable={editable}
                title={`${child.id}-name`}
                label={"Name"}
                handleSubmit={this.handleSubmitChildren}
                inputProp={child.name}
              />
              <InputComponent
                editable={editable}
                title={`${child.id}-birthday`}
                label={"Birthday"}
                handleSubmit={this.handleSubmitChildren}
                inputProp={child.birthday}
              />
            </View>
          ))}
          {editable && this.drawButtons()}
        </ScrollView>
      </SafeAreaView>
    );
  }
  drawUserInfo = () => {
    const { editable, userInfo } = this.props;
    if (userInfo?.name !== "") {
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
    } else if (!editable) {
      <Button
        title="Add an information"
        onPress={() => this.props.push("EditUserProfile")}
      />;
    }
  };

  drawButtons = () => {
    return (
      <>
        <TouchableOpacity onPress={this.addNewChild}>
          <Text>+ Add a child</Text>
        </TouchableOpacity>
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
      </>
    );
  };
  addNewChild = () => {
    if (
      this.state.children[this.state.children.length - 1]?.name !== "" ||
      !this.state.children.length
    ) {
      let children = [...this.state.children];
      children.push({ name: "", birthday: "", id: generateId() });
      this.setState({ children });
    }
  };

  handleSave = () => {
    const { userInfo, children } = this.state;
    this.props.actions.putDataMiddleware({ userInfo, children });
    this.props.navigation.pop();
  };

  handleSubmitChildren = (title, inputValue) => {
    let splitedTitle = title.split("-");
    let children = [...this.state.children];
    children.map((child) => {
      if (splitedTitle[0] === child.id) {
        return (child[splitedTitle[1]] = inputValue);
      }
    });
    this.setState({ children });
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
  scrollView: {
    marginHorizontal: 10,
  },
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

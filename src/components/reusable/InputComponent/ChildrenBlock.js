import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import InputComponent from "./InputComponent";
import { generateId } from "../../../services";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import DatePickerComponent from "../DatePickerComponent";

class ChildrenBlock extends Component {
  render = () => {
    const { editable, children } = this.props;
    if (children.length) {
      return (
        <>
          <Text style={styles.header}>Children:</Text>
          {children.map((child) => (
            <View style={styles.childBlock} key={`${child.id}`}>
              <>
                <InputComponent
                  editable={editable}
                  title={`${child.id}-name`}
                  label={"Name"}
                  handleSubmit={this.submit}
                  inputProp={child.name}
                />
                <DatePickerComponent
                  label={"Birthday"}
                  title={`${child.id}-birthday`}
                  editable={editable}
                  handleSubmit={this.submit}
                  date={child.birthday}
                />
              </>
              {editable && (
                <MaterialCommunityIcons
                  style={styles.icon}
                  onPress={() => this.removeChild(child.id)}
                  name="trash-can-outline"
                  size={26}
                />
              )}
            </View>
          ))}
          {editable && (
            <TouchableOpacity
              style={styles.addChildButton}
              onPress={this.addNewChild}
            >
              <Text>+ Add a child</Text>
            </TouchableOpacity>
          )}
        </>
      );
    } else if (editable) {
      return (
        <TouchableOpacity
          style={styles.addChildButton}
          onPress={this.addNewChild}
        >
          <Text>+ Add a child</Text>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  };
  removeChild = (id) => {
    const { children, hanleChildrenUpdate } = this.props;
    var newArr = JSON.parse(JSON.stringify(children)).filter((child) => {
      return child.id !== id;
    });
    hanleChildrenUpdate(newArr ? newArr : []);
  };

  addNewChild = () => {
    const { children, hanleChildrenUpdate } = this.props;
    if (children[children.length - 1]?.name !== "" || !children.length) {
      let newChildList = JSON.parse(JSON.stringify(children));
      newChildList.push({ name: "", birthday: "", id: generateId() });
      hanleChildrenUpdate(newChildList);
    }
  };
  submit = (title, inputValue) => {
    const { children, hanleChildrenUpdate } = this.props;
    let splitedTitle = title.split("-");
    let id = splitedTitle[0];
    let label = splitedTitle[1];
    var newArr = JSON.parse(JSON.stringify(children));
    newArr.map((child) => {
      if (child.id === id) {
        return (child[label] = inputValue);
      }
    });
    hanleChildrenUpdate(newArr);
  };
}

const styles = StyleSheet.create({
  header: {
    fontSize: 15,
    marginVertical: 10,
  },
  icon: { alignSelf: "flex-end", paddingTop: 10 },
  childBlock: {
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingBottom: 10,
    borderRadius: 7,
    borderColor: "gray",
  },
  addChildButton: { fontSize: 15, marginTop: 20, marginBottom: 20 },
});

export default ChildrenBlock;

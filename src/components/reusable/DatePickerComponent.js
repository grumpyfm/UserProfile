import React, { useState } from "react";
import DatePicker from "react-native-datepicker";
import { StyleSheet, Text, View } from "react-native";

const DatePickerComponent = (props) => {
  const [inputDate, setDate] = useState(props.date);
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{props.label}</Text>
      <DatePicker
        disabled={!props.editable}
        style={styles.picker}
        date={inputDate}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="1900-01-01"
        maxDate={new Date()}
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: styles.dateIcon,
          dateInput: styles.dateInput,
        }}
        onDateChange={(date) => {
          setDate(date);
          props.handleSubmit(props.title, date);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    flex: 1,
  },
  dateIcon: {
    position: "absolute",
    right: 0,
    top: 4,
    marginLeft: 0,
  },

  dateInput: {
    flex: 4,
    borderRadius: 6,
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
  },
  picker: { flex: 4 },
  inputContainer: {
    marginHorizontal: 5,
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default DatePickerComponent;

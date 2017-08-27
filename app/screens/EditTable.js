import React, { Component } from "react";
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  TextInput
} from "react-native";
import { List, ListItem, Button, Icon } from "react-native-elements";
import { connect } from "react-redux";
import { width, height } from "react-native-dimension";
import { putReceipt, removeItem, addItem } from "../redux/receipt";
import roundPrecision from "round-precision";
class EditTable extends Component {
  constructor() {
    super();
    this.state = {
      itemName: "",
      itemPrice: "",
      tax: 0
    };
    this.onDeleteHandle = this.onDeleteHandle.bind(this);
    this.onAddHandle = this.onAddHandle.bind(this);
    this.tipGenerator = this.tipGenerator.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }

  stretcher() {
    return 400 + this.props.receiptData.length * height(6.5);
  }

  tipGenerator(item) {
    if (item.price) {
      let price = item.price + item.price * (this.state.tax * 0.001);
      return roundPrecision(price, 2);
    }
  }

  onFixPrice(price, item) {
    if (!isNaN(price)) {
      item.price = price;
      this.props.putReceipt(item);
    }
  }

  onAddHandle() {
    if (this.state.itemName && this.state.itemPrice) {
      let newItem = {
        item: this.state.itemName,
        price: this.state.itemPrice
      };
      this.props.addItem(newItem);
      this.setState({
        itemName: "",
        itemPrice: ""
      });
    }
  }

  onFixName(text, item) {
    item.item = text;
    this.props.putReceipt(item);
  }

  onDeleteHandle(item) {
    this.props.removeItem(item);
  }

  onConfirm() {
    this.props.receiptData.forEach(item => {
      let price = item.price + item.price * (this.state.tax * 0.001);
      item.price = roundPrecision(price, 2);
      this.props.putReceipt(item);
    });
    this.props.navigation.navigate("Contacts");
  }

  render() {
    const receiptData = this.props.receiptData;

    return (
      <View style={styles.viewcontainer}>
        <ScrollView contentContainerStyle={styles.container}>
          <Image
            source={require("../assets/receipt.png")}
            style={styles.background}
            height={this.stretcher()}
          >
            <View style={styles.headerContainer}>
              <Icon
                style={styles.redo}
                size={30}
                name="redo"
                type="evilicon"
                color="black"
                onPress={() => this.props.navigation.navigate("Camera")}
              />
              <Text style={styles.header}>Is this right?</Text>
            </View>

            <List>
              {receiptData.map(item =>
                <View style={styles.listItem}>
                  <TextInput
                    style={styles.itemName}
                    placeholder={`${item.item}`}
                    placeholderTextColor={"#5e5e5e"}
                    onChangeText={text => this.onFixName(text, item)}
                  />
                  <TextInput
                    style={styles.itemTip}
                    placeholder={`${this.tipGenerator(item)}`}
                    keyboardType="numeric"
                    placeholderTextColor={"#5e5e5e"}
                    onChangeText={text => this.onFixPrice(text, item)}
                  />
                  <Icon
                    size={30}
                    name="close-o"
                    type="evilicon"
                    color="black"
                    onPress={() => this.onDeleteHandle(item)}
                  />
                </View>
              )}
              <View style={styles.listItem}>
                <TextInput
                  style={styles.itemName}
                  placeholder="Item Name"
                  placeholderTextColor={"#5e5e5e"}
                  value={this.state.itemName}
                  onChangeText={text => this.setState({ itemName: text })}
                />
                <TextInput
                  style={styles.itemTip}
                  placeholder="Item Price"
                  keyboardType="numeric"
                  value={this.state.itemPrice}
                  maxLength={5}
                  placeholderTextColor={"#5e5e5e"}
                  onChangeText={text => this.setState({ itemPrice: text })}
                />
                <Icon
                  size={30}
                  name="plus"
                  type="evilicon"
                  color="black"
                  onPress={() => this.onAddHandle()}
                />
              </View>
            </List>
{/*            <View style={styles.tipContainer}>
              <TextInput
                style={styles.tip}
                placeholder="Tax"
                keyboardType="numeric"
                value={this.state.tax}
                maxLength={5}
                placeholderTextColor={"#5e5e5e"}
                onChangeText={text => this.setState({ tax: text })}
              />
            </View>*/}
          </Image>
        </ScrollView>
        <Button
          style={styles.button}
          title="Looks Good!"
          backgroundColor="#03BD5B"
          borderRadius={25}
          onPress={() => this.onConfirm()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    position: "absolute",
    backgroundColor: "#3D4D65",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  viewcontainer: {
    flex: 1,
    position: "relative",
    backgroundColor: "#3D4D65"
  },
  background: {
    marginTop: "10%",
    padding: "15%",
    width: width(100),

    resizeMode: "stretch"
  },
  header: {
    backgroundColor: "transparent",
    fontSize: 40,
    fontStyle: "italic",
    textAlign: "center",
    padding: 15
  },
  listItem: {
    flexDirection: "row",
    height: height(6),
    alignItems: "center",
    justifyContent: "space-between"
  },
  itemName: {
    fontSize: 19,
    width: 180
  },
  itemTip: {
    fontSize: 19,
    width: 90
  },
  button: {
    paddingBottom: 30
  },
  tip: {
    width: 30,
    borderRadius: 4,
    borderColor: "grey",
    borderWidth: 1
  },
  tipContainer: {
    flexDirection: "row"
  },
  tipText: {
    backgroundColor: "transparent",
    fontSize: 19
  },
  headerContainer: {
    flexDirection: "row"
  }
});

const mapToState = store => {
  return {
    receiptData: store.receipt.receiptData
  };
};

const mapDispatch = { putReceipt, removeItem, addItem };

export default connect(mapToState, mapDispatch)(EditTable);

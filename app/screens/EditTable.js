import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  TextInput
} from 'react-native';
import roundPrecision from 'round-precision';
import { List, ListItem, Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { width, height } from 'react-native-dimension';
import { putReceipt, removeItem, addItem } from '../redux/receipt';

class EditTable extends Component {
  constructor() {
    super();
    this.state = {
      itemName: '',
      itemPrice: '',
      tip: 0
    };
    this.onDeleteHandle = this.onDeleteHandle.bind(this);
    this.onAddHandle = this.onAddHandle.bind(this);
    this.tipGenerator = this.tipGenerator.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
    this.onEdit = this.onEdit.bind(this)
    this.priceToString = this.priceToString.bind(this)
  }

  priceToString(priceNum) {
    if (isNaN(priceNum)) console.error('ITEM HAS NO PRICE');
    const price = priceNum.toString().split('.')
    const dollar = price[0].padStart(1, '0');
    let cent = '';
    if (!price[1]) cent = '00';
    else cent = price[1].padEnd(2, '0');
    return `${dollar}.${cent}`;
  }

  stretcher() {
    return 400 + this.props.receiptData.length * height(6.5);
  }

  tipGenerator(item) {
    if (item.price) {
      let price = item.price + item.price * (this.state.tip * 0.001);
      return roundPrecision(price, 2);
    }
  }

  onFixPrice(price, item) {
    if (!isNaN(price)) {
      item.price = price;
      item.priceString = this.priceToString(price);
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
        itemPrice: "",
        editable: false
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

  onEdit() {
    if (!this.state.editable) this.setState({ editable: true });
    else this.setState({ editable: false });
  }
  
  onConfirm() {
    this.props.receiptData.forEach( async item => {
      let price = item.price + item.price * (this.state.tip * 0.001);
      item.price = await roundPrecision(price, 2);
      console.log(item)
      item.priceString = await this.priceToString(item.price);
      await this.props.putReceipt(item);
    });
    this.props.navigation.navigate("Contacts");
  }

  render() {
    const receiptData = this.props.receiptData;

    return (
      <View style={styles.viewcontainer}>
        <ScrollView contentContainerStyle={styles.container}>
          <Image
            source={require("../assets/striptable1.png")}
            style={styles.background}
            height={this.stretcher()}
          >
            <View style={styles.headerContainer}>
              <Icon
                style={styles.redo}
                size={30}
                name="pencil"
                type="evilicon"
                color='#232526'
                underlayColor='transparent'
                onPress={() => this.onEdit()}
              />
              <Text style={styles.header}>Is this right?</Text>
              <Icon
                style={styles.redo}
                size={25}
                name="linked-camera"
                color='#232526'
                onPress={() => this.props.navigation.navigate("Camera")}
              />
            </View>

            <List style={styles.list}>
              {receiptData.map(item => (
                <View style={styles.listItem}>
                  <TextInput
                    style={this.state.editable ? styles.itemNameEdit : styles.itemName}
                    editable={this.state.editable}
                    placeholder={`${item.item}`}
                    placeholderTextColor='#232526'
                    onChangeText={text => this.onFixName(text, item)}
                  />
                  <TextInput
                    style={this.state.editable ? styles.itemPriceEdit : styles.itemPrice}
                    placeholder={`${this.tipGenerator(item)}`}
                    editable={this.state.editable}
                    keyboardType="numeric"
                    placeholderTextColor='#232526'
                    onChangeText={text => this.onFixPrice(text, item)}
                  />
                  <Icon
                    size={25}
                    name="circle-with-minus"
                    type="entypo"
                    color='#DB323C'
                    onPress={() => this.onDeleteHandle(item)}
                  />
                </View>
              ))}
              {this.state.editable && <View style={styles.listItem}>
                <TextInput
                  style={styles.itemNameEdit}
                  placeholder="Item Name"
                  placeholderTextColor={'#232526'}
                  value={this.state.itemName}
                  onChangeText={text => this.setState({ itemName: text })}
                />
                <TextInput
                  style={styles.itemPriceEdit}
                  placeholder="Item Price"
                  keyboardType="numeric"
                  value={this.state.itemPrice}
                  maxLength={5}
                  placeholderTextColor={'#232526'}
                  onChangeText={text => this.setState({ itemPrice: text })}
                />
                <Icon
                  size={25}
                  name="circle-with-plus"
                  type="entypo"
                  color="#239322"
                  onPress={() => this.onAddHandle()}
                />
              </View>}
            </List>
              <View style={styles.tipContainer}>
                <TextInput
                  style={styles.tip}
                  placeholder="Tip"
                  keyboardType="numeric"
                  value={this.state.tip}
                  maxLength={5}
                  placeholderTextColor={"#5e5e5e"}
                  onChangeText={text => this.setState({ tip: text })}
                />
                <Text style={styles.tipSign}> %</Text>
            </View>

          </Image>
        </ScrollView>
        
        <Button
          style={styles.button}
          title="Looks Good!"
          backgroundColor="#dccabd"
          borderRadius={10}
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
    backgroundColor: "#414345",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  viewcontainer: {
    flex: 1,
    position: "relative",
    backgroundColor: "#414345"
  },
  background: {
    marginTop: "10%",
    padding: "15%",
    width: width(100),
    resizeMode: "stretch"
  },
  list: {
    backgroundColor: "transparent"
  },
  header: {
    backgroundColor: "transparent",
    fontSize: 35,
    fontStyle: "italic",
    textAlign: "center",
    padding: 15,
    color: '#232526',
    fontFamily: 'AvenirNext-Regular'
  },
  listItem: {
    flexDirection: "row",
    height: height(6),
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent"
  },
  itemName: {
    fontSize: 19,
    width: width(35),
    backgroundColor: "transparent",
    fontFamily: 'AvenirNext-Regular'
  },
  itemNameEdit: {
    fontSize: 19,
    width: width(35),
    backgroundColor: "transparent",
    borderRadius: 4,
    borderColor: "grey",
    borderWidth: 1,
    fontFamily: 'AvenirNext-Regular'
  },
  itemPrice: {
    fontSize: 19,
    width: 90,
    paddingRight: 8,
    fontFamily: 'AvenirNext-Regular'
  },
  itemPriceEdit: {
    fontSize: 19,
    width: 90,
    borderRadius: 4,
    borderColor: "grey",
    borderWidth: 1,
    paddingRight: 8,
    fontFamily: 'AvenirNext-Regular'
  },
  button: {
    paddingBottom: 30
  },
  tip: {
    width: 30,
    borderRadius: 4,
    borderColor: "grey",
    borderWidth: 1,
  },
  tipContainer: {
    flexDirection: "row",
    alignItems: 'center',
    paddingTop:10
  },
  tipSign: {
    backgroundColor: "transparent",
    fontSize: 19,
    fontFamily: 'AvenirNext-Regular'
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: 'center'

  }
});

const mapToState = store => {
  return {
    receiptData: store.receipt.receiptData
  };
};

const mapDispatch = { putReceipt, removeItem, addItem };

export default connect(mapToState, mapDispatch)(EditTable);

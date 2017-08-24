import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import { List, ListItem, Button, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { width, height } from 'react-native-dimension';
import { putReceipt, removeItem } from '../redux/receipt';

class EditTable extends Component {
  constructor() {
    super();
    this.state = {
      why: 'shut the fuck up linter',
    };
    this.onDeleteHandle = this.onDeleteHandle.bind(this)
  }

  stretcher() {
    return 400 + this.props.receiptData.length * height(6.5);
  }

  onFixPrice(price, item) {
    if (!isNaN(price)) {
      item.price = price;
      this.props.putReceipt(item);
    }
  }

  onFixName(text, item) {
    item.item = text;
    this.props.putReceipt(item);
  }

  onDeleteHandle(item) {
    this.props.removeItem(item);
  }

  render() {
    const receiptData = this.props.receiptData;
    return (
      <View style={styles.viewcontainer}>
        <ScrollView contentContainerStyle={styles.container}>
          <Image
            source={require('../assets/receipt.png')}
            style={styles.background}
            height={this.stretcher()}
          >
            <Text style={styles.header}>Is this right?</Text>
            <List>
              {receiptData.map(item =>
                <View style={styles.listItem}>
                  <TextInput
                    placeholder={`${item.item}`}
                    placeholderTextColor={'#5e5e5e'}
                    onChangeText={text => this.onFixName(text, item)}
                  />
                  <TextInput
                    placeholder={`${item.price}`}
                    keyboardType="numeric"
                    maxLength={5}
                    placeholderTextColor={'#5e5e5e'}
                    onChangeText={text => this.onFixPrice(text, item)}
                  />
                  <Icon
                    size={30}
                    name="close-o"
                    type="evilicon"
                    color="black"
                    onPress={() => this.onDeleteHandle(item)}
                  />
                </View>,
              )}
            </List>
          </Image>
        </ScrollView>
        <Button
          style={styles.button}
          title="Looks Good!"
          backgroundColor="#03BD5B"
          borderRadius={25}
          onPress={() => this.props.navigation.navigate('Contacts')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    position: 'absolute',
    backgroundColor: '#3D4D65',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  viewcontainer: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#3D4D65',
  },
  background: {
    marginTop: '10%',
    padding: '15%',
    width: width(100),

    resizeMode: 'stretch',
  },
  header: {
    backgroundColor: 'transparent',
    fontSize: 40,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  listItem: {
    flexDirection: 'row',
    height: height(6),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemName: {
    fontSize: 19,
  },
  button: {
    paddingBottom: 30,
  },
  tip: {
    width: 30,
    borderRadius: 4,
    borderColor: 'grey',
    borderWidth: 1,
  },
});

const mapToState = store => {
  return {
    receiptData: store.receipt.receiptData,
  };
};

const mapDispatch = { putReceipt, removeItem };

export default connect(mapToState, mapDispatch)(EditTable);

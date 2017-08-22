import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import { List, ListItem, Button } from 'react-native-elements';
import { connect } from 'react-redux'
import { width, height } from 'react-native-dimension';
import FakeReceipt from './components/fakeReceipt';
import fixPrice from '../redux/receipt'

class EditTable extends Component {
  constructor() {
    super();
    this.state = {
      why: 'shut the fuck up linter',
    };
  }

  stretcher() {
    return 400 + FakeReceipt.length * height(6.5);
  }

  onFixHandle(text, item) {
    item.price = text
    this.props.fixPrice(item)
  }
  
  render() {
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
              {FakeReceipt.map(receipt =>(
                <View style={styles.listItem}>
                  <Text style={styles.itemName}> {receipt.item} </Text>
                  <TextInput
                    placeholder={`${receipt.price}`}
                    keyboardType='numeric'
                    maxLength={5}
                    placeholderTextColor={'#5e5e5e'}
                    onChangeText={(text) => this.onFixHandle(text, receipt)}
                  />
                </View>
              ))}
            </List>
          </Image>
        </ScrollView>
        <Button
          style={styles.button}
          title="Looks Good!"
          backgroundColor="#03BD5B"
          borderRadius={25}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: .6,
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
    justifyContent: 'space-between'
  },
  itemName: {
    fontSize: 19
  },
  button: {
    paddingBottom: 30
  }
});

const mapToState = (store) => {
  return {
    receiptData: store.receipt.receiptData
  }
}

const mapDispatch = { fixPrice }


export default connect(mapToState, mapDispatch)(EditTable);

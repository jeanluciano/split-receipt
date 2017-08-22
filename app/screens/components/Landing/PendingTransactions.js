import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';
import fakeTransactions from './transactions';


export default () => (
  <View style={styles.transactionView}>
    <View>
      <Text style={styles.titleText}>Pending Transactions</Text>
      <Text style={styles.descriptionText}>Oh Oh, it looks these transactions have yet to be taken care of</Text>
    </View>
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1, flexDirection: 'row' }}><Text>Click here</Text>
    <Icon
    name="chevron-down"
    type="evilicon"
    color="#161338"
    />
    </View>
    <List>
    {
      fakeTransactions.map((transaction,index) => (
        <ListItem
        key={index}
        title={ `${transaction.to.givenName} ${transaction.to.familyName}` }
        subtitle={ transaction.purpose }
        rightTitle={ `$${transaction.total}` }
        ></ListItem>
      ))
    }
    </List>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <Text>Hey there, how is it going?</Text>
      <View style={styles.icon}>
      <Icon
        name="linked-camera"
        color="#161338"
        size={60}
        onPress={() => navigation.navigate('Camera')}
      />
    </View>
      <Text>Not much, you tell me how it is going</Text>
      <View style={styles.icon}>
      <Icon
        name="linked-camera"
        color="#161338"
        size={60}
        onPress={() => navigation.navigate('Camera')}
      />
    </View>
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  transactionView: {
    backgroundColor: '#fff',
    paddingTop: '2%',
  },
  titleText: {
    paddingLeft: '5%',
    fontSize: 12,
    fontWeight: 'bold',
  },
  descriptionText: {
    paddingLeft: '5%',
    paddingRight: '5%',
    fontSize: 14,
  },
});

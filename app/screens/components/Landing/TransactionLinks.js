import React from 'react';
import { ScrollView, Text, View, StyleSheet, Image, Button } from 'react-native';
import { Card } from 'react-native-elements';
import completedImg from '../../../assets/completed.jpg';
import owedImg from '../../../assets/owed.jpg';
import oweImg from '../../../assets/owe.jpg';


export default () => (
  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.transactionView} >
    <Card image={completedImg} imageWrapperStyle={styles.imageStyle} containerStyle={styles.cardStyle}>
      <Text style={{ marginBottom: 10 }}>All Transactions</Text>
    </Card>
    <Card image={owedImg} imageWrapperStyle={styles.imageStyle} containerStyle={styles.cardStyle}>
      <Text style={{ marginBottom: 10 }}>Money you are owed</Text>
    </Card>
    <Card image={oweImg} imageWrapperStyle={styles.imageStyle} containerStyle={styles.cardStyle}>
      <Text style={{ marginBottom: 10 }}>Money you owe</Text>
    </Card>
  </ScrollView>
);


const styles = StyleSheet.create({
  transactionView: {
    backgroundColor: '#fff',
    paddingTop: '1%',
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
  imageStyle: {
    width: 210,
    padding: 0,
    margin: 0,
  },
  cardStyle: {
    padding: 0,
    marginRight: 0,
  },
});

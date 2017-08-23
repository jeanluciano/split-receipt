import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import CheckBox from 'react-native-checkbox';
import { sendText, selectTransaction } from '../../redux/sendText';

const TransactionCard = (props) => {
  const { transaction, user } = props;
  // const items = Object.values(transaction.items);
  // console.log('TRANSACTION CARD', transaction, items)
  return (
    <View style={styles.transactionView}>
      <Text>{`${transaction.to.givenName} ${transaction.to.familyName}`}</Text>
      {Object.values(transaction.items).map(item =>
        (<View style={styles.itemView}>
          <Text>
            {item.item}
          </Text>
          <Text>
            ${item.price}
          </Text>
        </View>))
      }
      <View style={styles.itemView}>
        <Text style={styles.total}>Total</Text>
        <Text style={styles.total}>
          ${transaction.total}
        </Text>
      </View>
      {/* <CheckBox
        label="Label"
        checked={false}
        onChange={checked => selectTransaction(transaction, checked)}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: 'green',
  },
  transactionView: {
    backgroundColor: '#ef553a',
    width: 360,
    height: 100,
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 20,
    borderRadius: 10,
    margin: 5,
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
  },
  transactionName: {
    fontFamily: 'Cochin',
  },
  itemName: {
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 20,
    textAlign: 'right',
    fontWeight: 'bold',
  },
  total: {
    fontSize: 20,
    textAlign: 'right',
    fontWeight: 'bold',
  },
});

const mapState = state => ({
  user: state.user,
})

const mapDispatch = dispatch => ({
  handleSendText(transaction, payPalMe) {
    dispatch(sendText(transaction, payPalMe))
  },
  handleSelectTransaction(transaction, status) {
    dispatch(selectTransaction(transaction, status))
  },
});

export default connect(mapState, mapDispatch)(TransactionCard);

/**
 * PROP TYPES
 */
TransactionCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
  transaction: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
  handleSendText: PropTypes.func.isRequired,
};

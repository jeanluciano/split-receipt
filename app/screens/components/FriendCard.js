import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import CheckBox from 'react-native-checkbox';
import { sendText, selectTransaction } from '../../redux/sendText';


function totalGetter(items) {
  let total = 0;
  items.forEach((item) => {
    total += item.price;
  });
  return Math.round(total * 100) / 100;
}

const TransactionCard = (props) => {
  const { transaction, user } = props;
  return (
    <View style={styles.transactionView}>
      <Text>{`${transaction.givenName} ${transaction.familyName}`}</Text>
      {transaction.items.map(item =>
        (<View style={styles.itemView}>
          <Text>
            {item.item}
          </Text>
          <Text>
            {item.price}
          </Text>
        </View>))
      }
      <View style={styles.itemView}>
        <Text style={styles.total}>Total</Text>
        <Text style={styles.total}>
          {totalGetter(transaction.items)}
        </Text>
      </View>
      {/* <CheckBox
        label="Label"
        checked={false}
        onChange={checked => selectTransaction(transaction, checked)}
      /> */}

      <Button
        title="Send Request"
        color="#000000"
        backgroundColor="#FFFFFF"
        borderRadius={25}
        onPress={() => {
          props.handleSendText([transaction], user.payPalMe)
        }}
      />
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
    height: 200,
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
    recordID: PropTypes.string.isRequired,
  }),
  handleSendText: PropTypes.func.isRequired,
};

import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sendText } from '../redux/sendText';
import TransactionCard from './components/TransactionCard';

class SendText extends Component {
  render() {
    return (
      <View style={styles.screen}>
        <Text>Review the your splits</Text>

        <ScrollView>
          <View style={styles.table}>
            {this.props.transactions.map(transaction => (<TransactionCard key={transaction.id} transaction={transaction} />))}
          </View>
        </ScrollView>

        <View style={styles.button}>
          <Button
            title="Send Selected"
            color="#841584"
            onPress={() => this.props.handleSendText(this.props.transactions, this.props.user)}
          />
        </View>

      </View>
    );
  }
}

const mapState = (state) =>
  ({
    transactions: state.transactions,
    user: state.user,
  })

const mapDispatch = dispatch =>
  ({
    handleSendText(transactions, user) {
      dispatch(sendText(transactions, user));
      this.props.navigation.navigate('Landing');
    },
  })

export default connect(mapState, mapDispatch)(SendText);

/**
 * PROP TYPES
 */
SendText.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
  transactions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })),
  handleSendText: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#ebeef0',
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  table: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
  },
});

import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'react-native-elements'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { sendText } from '../redux/sendText';
import { colors } from '../values/stylesheet';
import TransactionCard from './components/TransactionCard';

class SendText extends Component {
  constructor() {
    super();
    this.state = {
      sent: false,
    };
  }
  render() {
    return (
      <View style={styles.screen}>

        <ScrollView>
          <View style={styles.table}>
            {this.props.transactions.map(transaction =>
              (<TransactionCard
                key={transaction.id}
                transaction={transaction}
              />)
            )}
          </View>
        </ScrollView>

        <Button
          title="Send Texts"
          backgroundColor={colors.splitGold}
          borderRadius={10}
          color={colors.splitBackground1}
          fontFamily="AvenirNext-Regular"
          containerViewStyle={styles.button}
          onPress={() => {
            this.props.handleSendText(
              this.props.transactions,
              this.props.user);
            this.props.navigation.navigate('Camera')
          }}
        />
      </View>
    );
  }
}

const mapState = state => ({
  transactions: state.transactions,
  user: state.user,
});

const mapDispatch = dispatch => ({
  handleSendText(transactions, user) {
    dispatch(sendText(transactions, user));
  },
});

export default connect(mapState, mapDispatch)(SendText);

/**
 * PROP TYPES
 */
SendText.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })).isRequired,
  handleSendText: PropTypes.func.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.splitBackground1,
  },
  table: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '3%',
  },
  button: {
    padding: 20,
    color: 'black',
  },
});

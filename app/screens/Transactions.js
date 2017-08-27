import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Icon, List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { colors } from '../values/stylesheet';
import fakeTransactions from './fakeTransactions';


let tabs = {
  allStyle: {
    flex: 1,
    borderBottomLeftRadius: 3,
    borderTopLeftRadius: 3,
    borderColor: colors.splitGold,
    borderWidth: 1,
  },
  inStyle: {
    flex: 1,
    borderColor: colors.splitGold,
    borderWidth: 1,
  },
  outStyle: {
    flex: 1,
    borderBottomRightRadius: 3,
    borderTopRightRadius: 3,
    borderColor: colors.splitGold,
    borderWidth: 1,
  },
}

class Transactions extends Component {
  constructor() {
    super();
    this.state = {
      active: 'in',
    };
    this.inColor = colors.splitBackground1;
    this.inBack = colors.splitGold;
    this.allColor = colors.splitGold;
    this.allBack = colors.splitBackground1;
    this.outColor = colors.splitGold;
    this.outBack = colors.splitBackground1;
    this.toggleActive = this.toggleActive.bind(this);
  }

  componentDidMount() {
    console.log('userrrrr', this.props.user);
  }

  toggleActive(active) {
    console.log('active', active);
    console.log('tabs active style', tabs[active + 'Style'])
    this[active + 'Back'] = colors.splitGold;
    this[this.state.active + 'Back'] = colors.splitBackground1;
    this[active + 'Color'] = colors.splitBackground1;
    this[this.state.active + 'Color'] = colors.splitGold;
    this.setState({ active });
  }


  render() {
    const userGivenName = this.props.user.givenName;
    return (
      <ScrollView contentContainerStyle={styles.outerView}>
        <View style={styles.slideUpView}>
          <Icon
            name="chevron-down"
            type="font-awesome"
            color={colors.splitGold}
            size={12}
          />
          <Text style={{ fontFamily: 'AvenirNext-Regular', color: colors.splitGray }}> Slide down for camera view </Text>
          <Icon
            name="chevron-down"
            type="font-awesome"
            color={colors.splitGold}
            size={12}
          />
        </View>
        <View style={styles.tabsView}>
          <View style={{ ...tabs.allStyle, backgroundColor: this.allBack }}>
            <TouchableOpacity onPress={() => this.toggleActive('all')}>
              <Icon
                name="wallet"
                type="entypo"
                color={this.allColor}
                size={16}
              />
            </TouchableOpacity>
          </View>
          <View style={{ ...tabs.inStyle, backgroundColor: this.inBack }}>
            <TouchableOpacity onPress={() => this.toggleActive('in')}>
              <Icon
                name="login"
                type="entypo"
                color={this.inColor}
                size={16}
              />
            </TouchableOpacity>
          </View>
          <View style={{ ...tabs.outStyle, backgroundColor: this.outBack }} >
            <TouchableOpacity onPress={() => this.toggleActive('out')}>
              <Icon
                name="log-out"
                type="entypo"
                color={this.outColor}
                size={16}
              />
            </TouchableOpacity>
          </View>
        </View>
        <List
          containerStyle={styles.listStyle}
        >
          {
            fakeTransactions.map((transaction, index) => {
              const intrans = <Icon name="login" type="entypo" color={colors.splitGold} size={16} />;
              const outtrans = <Icon name="logout" type="entypo" color={colors.splitGold} size={16} />;

              const rightIcon = <Icon name="checkbox-blank-outline" type="material-community" color={colors.splitGray} size={15} />;
              // if (transaction.to.)
              return (<ListItem
                containerStyle={styles.listItemStyle}
                titleStyle={styles.titleStyle}
                subtitleStyle={styles.subtitleStyle}
                rightTitleStyle={styles.rightTitleStyle}
                key={index}
                rightIcon={rightIcon}
                title={`${transaction.to.givenName} ${transaction.to.familyName}`}
                subtitle={transaction.purpose}
                rightTitle={`$${transaction.total}`}
              />);
            })
          }
        </List>
      </ScrollView>


    );
  }

}

const mapState = state => {
  return {
    user: state.user
  };
};

export default connect(mapState, null)(Transactions);

const styles = StyleSheet.create({

  outerView: {
    flex: 1,
    backgroundColor: colors.splitBackground1,
    paddingTop: '7%',
  },

  slideUpView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: '2%',
  },

  tabsView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: '5%',
    marginRight: '5%',
  },

  titleStyle: {
    fontFamily: 'AvenirNext-Regular',
    color: colors.splitGray,
  },

  subtitleStyle: {
    fontFamily: 'Courier',
    color: colors.splitGray
  },

  rightTitleStyle: {
    fontFamily: 'Courier',
    color: colors.splitGold,
  },

  listStyle: {
    backgroundColor: colors.splitBackground1,
    borderColor: colors.splitGray,
    marginRight: '2%',
    marginLeft: '2%',
  },

  listItemStyle: {
    borderColor: colors.splitGray,
    marginLeft: '2%',
    marginRight: '2%',
    padding: 0,
  },


});

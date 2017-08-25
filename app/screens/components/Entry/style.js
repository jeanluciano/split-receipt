import { StyleSheet } from 'react-native';
import { height } from 'react-native-dimension';
import { colors } from '../../../values/stylesheet';

export default StyleSheet.create({

  topView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  animationsView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: '50%',
    paddingBottom: '7%',
  },

  textView: {
    flex: 1,
    justifyContent: 'flex-start',
    height: '50%',
  },

  titleText: {
    color: colors.splitWhite,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },

  descriptionText: {
    color: colors.splitGray,
    textAlign: 'center',
    paddingLeft: '12%',
    paddingRight: '12%',
    paddingTop: '3%',
  },

  default: {

  },

});

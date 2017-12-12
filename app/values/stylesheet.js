import { StyleSheet } from 'react-native';

export const colors = {
  splitGold: '#dccabd',
  splitGray: '#c6cacd',
  splitBlue: '#7c96ff',
  splitWhite: '#fff',
  splitBackground1: '#232526',
  splitBackground2: '#414345',
  splitGradient: ['#232526', '#414345'],
	primaryColor: '#ebeef0',
  buttonBackground: "#03BD5B",
  buttonColor: "#841584",
};

export const masterStyle = StyleSheet.create({
  body: {
    padding: 5,
    backgroundColor: colors.primaryColor,
  },
  textInput: {
  	backgroundColor: 'white',
    height: 40,
    textAlign: 'center',
  },
  table: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  warningText: {
    color: '#AA5556',
  },
  warningView: {
    margin: 5,
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#FFCCCB',
  },
});

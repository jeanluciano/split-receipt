import { StyleSheet } from 'react-native';

export const colors = {
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

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFDEAD',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20,
    },

    text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#A0522D',
    },

    input: {
      borderColor: '#A0522D',
      borderWidth: 1,
      color: '#A0522D',
      width: "80%",
      height: 60,
      padding: 10,
    },

    btnHome: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#FFDEAD',
      backgroundColor: '#A0522D',
      borderWidth: 1,
      borderColor: '#A0522D',
      padding: 10,
      borderRadius: 10,
      textTransform: 'uppercase',

    }
  });
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#7D4F2E',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 100,
    },

    img: {
      width: 150,
      height: 150,
      borderRadius: 150,
    },

    btnEntrar: {
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
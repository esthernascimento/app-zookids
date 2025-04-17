import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#6B8E23',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
    },

    background: {
      flex: 1,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },

    titulo: {
      alignItems: 'center',
      justifyContent: 'center',
      gap: 5,
      marginBottom: 500,
    },

    text: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#6B8E23',
      backgroundColor: '#fff',
      textAlign: 'center',
      padding: 5,
    },

    botoes: {
        flexDirection: 'row',
        marginTop: 50,
        gap: 50,
    },

    btn: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff',
      backgroundColor: '#6B8E23',
      borderWidth: 1,
      borderColor: '#6B8E23',
      padding: 10,
      borderRadius: 10,
      textTransform: 'uppercase',
    }
  });
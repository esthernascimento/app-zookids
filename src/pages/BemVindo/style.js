import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
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
      marginTop: 50,
    },


    img: {
      width: 150,
      height: 150,
    },

    img2: {
      width: 300,
      height: 300,
      marginTop: 200,
    },

    botoes: {
        flexDirection: 'row',
        gap: 50,
        marginTop: 20,
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
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
    },

    background: {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },

    titulo: {
      alignItems: 'center',
      justifyContent: 'center',
    },


    img: {
      width: 150,
      height: 150,
      position: 'relative',
      bottom: 30,
    },

    img2: {
      width: 300,
      height: 300,
      position: 'relative',
      top: 100,      
    },

    botoes: {
      flexDirection: 'row',
      gap: 50,
      position: 'relative',
      top: 120,
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
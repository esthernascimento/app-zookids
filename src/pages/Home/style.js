import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFDEAD', 
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20,
    },

    background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      
    },

    containerTitulo: {
      alignItems: 'center',
      justifyContent: 'center',
      gap: 2,
      marginTop: 30,
      
    },

    titulo: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#fff',
      alignItems: 'center',
      textTransform: 'uppercase',
      backgroundColor: '#A0522D',
      padding: 10,
      borderRadius: 10,

    },

    nomeTerritorio: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#A0522D',
      textTransform: 'uppercase',
      marginBottom: 10,
    },

    item: {
      width: 200,
      height: 300,
      borderRadius: 10,
      overflow: 'hidden',
      border:  'none',
      borderWidth: 2,
      alignItems: 'center',
    }
  });
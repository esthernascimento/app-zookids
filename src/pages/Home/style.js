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
      padding: 20,
      
    },

    imgVoltar: {
      width: 30,
      height: 30,
      right: 150,
      bottom: 10, 
    },

    containerTitulo: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
      
    },

    titulo: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#fff',
      alignItems: 'center',
      textTransform: 'uppercase',
      backgroundColor: '#3E7F33',
      padding: 10,
      borderRadius: 10,

    },

    titulo2: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#fff',
      alignItems: 'center',
      textTransform: 'uppercase',
      backgroundColor: '#006533',
      padding: 5,
      borderRadius: 10,

    },

    nomeTerritorio: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#A0522D',
      textTransform: 'uppercase',
      marginBottom: 10,
    },

    flatList: {
      marginLeft: 10,

    },

    containerNomeTerritorio: {
      alignItems: 'flex-start'
    },

    item: {
      width: 190,
      height: 350,
      borderRadius: 10,
      overflow: 'hidden',
      border:  'none',
    },

    texto: {
      alignSelf: 'flex-start',

    }
  });
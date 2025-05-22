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

    header: {
      display: 'flex',
      flexDirection: 'row',
      position: 'absolute',
      alignItems: 'left',
      justifyContent: 'space-between',
      padding: 10,
      width: '100%',
      top: 10,
    },

  sair: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF0000',
    backgroundColor: '#FFF',
    padding: 8,
    borderRadius: 10,
    textTransform: 'uppercase',
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
      
    },

    flatList: {
      marginLeft: 10,
    },

    item: {
      width: 190,
      height: 350,
      borderRadius: 10,
      overflow: 'hidden',
      border:  'none',
    },

    containerNomeTerritorio: {
      display: 'flex',
      position: 'absolute',
      top: 50,
    },


    containerAnimais: {
      display: 'flex',
      alignSelf: 'flex-start',
 
    },


  });
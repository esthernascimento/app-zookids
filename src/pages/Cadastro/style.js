import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#CCE0AC',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20,
    },

    imgVoltar: {
      width: 30,
      height: 30,
      right: 150,
      bottom: 50,
      
    },

    containerTitulo: {
      alignItems: 'center',
      justifyContent: 'center',
    },

    text: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#FFFFFF',
      backgroundColor: '#6AA400',
      padding: 5,
      textTransform: 'uppercase',
      borderRadius: 10,
    },

    text2: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFFFFF',
      backgroundColor: '#6F3A25',
      padding: 15,
      textTransform: 'uppercase',
      borderRadius: 10,
    },

    containerInput: {
      backgroundColor: '#6AA400',
      borderRadius: 20,
      width: '90%',
      height: 400,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 22,
    },

    input: {
      borderColor: '#FFFFFF',
      backgroundColor: '#FFFFFF',
      borderRadius: 20,
      fontWeight: 'bold',
      borderWidth: 1,
      color: '#93CC4C',
      width: "88%",
      height: 40,
      padding: 20,
      textTransform: 'uppercase',
    },

    btnHome: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFFFFF',
      backgroundColor: '#6AA400',
      borderWidth: 1,
      borderColor: '#6AA400',
      padding: 10,
      borderRadius: 20,
      textTransform: 'uppercase',
      marginTop: 50,  

    }
  });
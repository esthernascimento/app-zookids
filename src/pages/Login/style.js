import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F6EEDF',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 30,
      position: 'relative',
    },

    header: {
      width: '100%',
      height: 100,
    },

    imgGalhos: {
      width: '100%',
      height: 200,
      position: 'absolute',
      bottom: -10,
    },

    containerTitulo: {
      alignItems: 'center',
      justifyContent: 'center',
      bottom: 50,
    },

    text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
      backgroundColor: '#93CC4C',
      padding: 5,
      textTransform: 'uppercase',
      borderRadius: 10,
    },

    text2: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
      backgroundColor: '#A0522D',
      padding: 10,
      textTransform: 'uppercase',
      borderRadius: 5,
    },

    containerInput: {
      backgroundColor: '#93CC4C',
      borderRadius: 10,
      width: '90%',
      height: 250,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20,
      bottom: 50,   
    },

    input: {
      borderColor: '#fff',
      backgroundColor: '#fff',
      textTransform: 'uppercase',
      borderRadius: 20,
      fontWeight: 'bold',
      borderWidth: 1,
      color: '#93CC4C',
      width: "88%",
      height: 60,
      padding: 10,
    },

    imgMacaco: {
      width: 200,
      height: 200,
      position: 'absolute',
      top: -80,
    },

    btnHome: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFDEAD',
      backgroundColor: '#A0522D',
      borderWidth: 1,
      borderColor: '#A0522D',
      padding: 10,
      borderRadius: 10,
      textTransform: 'uppercase', 
      marginTop: 100, 
    }
  });
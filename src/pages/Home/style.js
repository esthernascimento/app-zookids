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
    flexDirection: 'column',
    position: 'absolute',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    top: 10,
  },

menuIcon: {
  width: 30,
  height: 30,
  left: 150,
},

menuOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.5)',
  justifyContent: 'flex-start',
  paddingTop: 50,
  paddingLeft: 100,
},

menuContainer: {
  backgroundColor: 'white',
  borderRadius: 12,
  paddingVertical: 20,
  paddingHorizontal: 25,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
},

menuOption: {
  fontSize: 18,
  marginBottom: 15,
  color: '#333',
  fontWeight: '500',
},

menuOptionLogout: {
  fontSize: 18,
  marginBottom: 10,
  color: '#E63946',
  fontWeight: '600',
},

menuOptionPressable: {
  paddingVertical: 8,
  paddingHorizontal: 10,
  borderRadius: 8,
},

menuOptionPressableHover: {
  backgroundColor: '#f0f0f0',
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
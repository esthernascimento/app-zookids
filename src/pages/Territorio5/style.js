import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7d4f2e',
    paddingHorizontal: 20,
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },

 header: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    alignItems: "center",
    padding: 10,
    width: "100%",
    top: 10,
  },

  menuIcon: {
    width: 30,
    height: 30,
    left: 150,
  },

  menuOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-start",
    paddingTop: 50,
    paddingLeft: 100,
  },

  menuContainer: {
    backgroundColor: "white",
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  menuOption: {
    fontSize: 18,
    marginBottom: 15,
    color: "#333",
    fontWeight: "500",
  },

  menuOptionLogout: {
    fontSize: 18,
    marginBottom: 10,
    color: "#E63946",
    fontWeight: "600",
  },

  menuOptionPressable: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
  },

  menuOptionPressableHover: {
    backgroundColor: "#f0f0f0",
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#9c745c',
    padding: 10,
    borderRadius: 10,
    textTransform: 'uppercase',
  },

  flatlist: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto',
    marginTop: 50,
  },

  pressable: {
    alignItems: 'center',
    margin: 10,
    width: 180,
    backgroundColor: '#FFDEAD',
    borderRadius: 10,
    padding: 20,
    gap: 10,
  },

  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#A0522D',
    textAlign: 'center',
  },

  imagem: {
    width: 80,
    height: 80,
  },

  modal: {
    backgroundColor: '#75548f',
    width: '100%',
    height: 844,
    alignItems: 'center',
    padding: 20,
    gap: 20,
    justifyContent: 'center',
  },

  nomeSelecionado: {
    fontSize: 28,
    borderRadius: 20,
    padding: 8,
    fontWeight: 'bold',
    color: '#d17507',
    backgroundColor: '#fbe474',
    width: 250,
    textAlign: 'center',
  },

  imagemSelecionado: {
    width: 240,
    height: 200,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#fbe474',
  },

  descSelecionado: {
    fontSize: 18,
    color: '#000',
    opacity: 0.8,
    maxWidth: 300,
    fontWeight: 'bold',
    textAlign: 'justify',
    marginBottom: 20,
    borderRadius: 10,
    padding: 10,
    maxHeight: 250,
  },

  voltar: {
    width: 30,
    height: 30,
    position: "absolute",
    top: -100,
    right: 150,
  },
});

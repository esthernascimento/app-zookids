import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4682B4',
    paddingHorizontal: 20,
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    width: '100%',
    top: 10,
  },

  imgVoltar: {
    width: 30,
    height: 30,
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#B0C4DE',
    padding: 10,
    borderRadius: 10,
    textTransform: 'uppercase',
    position: 'absolute',
    left: 120
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
  },

  imagem: {
    width: 90,
    height: 90,
  },

  background: {
    width: '100%',
    height: 844,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
    gap: 20,
    justifyContent: 'center',
  },

  nomeSelecionado: {
    fontSize: 30,
    backgroundColor: '#6B8E23',
    borderRadius: 10,
    padding: 10,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },

  imagemSelecionado: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },

  descSelecionado: {
    fontSize: 18,
    color: '#A0522D',
    backgroundColor: '#FFDEAD',
    maxWidth: 300,
    fontWeight: 'bold',
    textAlign: 'justify',
    marginBottom: 20,
    borderRadius: 10,
    padding: 10,
  },

  btnVoltar: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#A0522D',
    backgroundColor: '#FFDEAD',
    padding: 10,
    borderRadius: 10,
    textTransform: 'uppercase',
  },

  voltar: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#A0522D',
    backgroundColor: '#FFDEAD',
    padding: 10,
    borderRadius: 10,
    textTransform: 'uppercase',
    position: 'absolute',
    alignSelf: 'center',
  },
});

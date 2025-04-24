import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ee6f43',
    paddingHorizontal: 20,
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },

  imgVoltar: {
    width: 30,
    height: 30,
    right: 150,
    bottom: 30, 
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#f29471',
    padding: 10,
    borderRadius: 10,
    textTransform: 'uppercase',
    marginBottom: 10,
  },

  pressable: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    width: 180,
    backgroundColor: '#FFDEAD',
    borderRadius: 10,
    padding: 20,
  },

  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#A0522D',
  },

  imagem: {
    width: 70,
    height: 70,
  },

  background: {
    flex: 1,
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
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'justify',
    marginBottom: 20,
    backgroundColor: '#6B8E23',
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
    top: 760,
    alignSelf: 'center',
  },
});

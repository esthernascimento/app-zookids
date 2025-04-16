import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0C4DE',
    paddingHorizontal: 20,
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#4682B4',
    padding: 10,
    borderRadius: 10,
    textTransform: 'uppercase',
    marginBottom: 10,
  },

  pressable: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: 300,
    backgroundColor: '#FFDEAD',
    gap: 10,
    borderRadius: 10,
    padding: 10,
  },

  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#A0522D',
  },

  imagem: {
    width: 100,
    height: 100,
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

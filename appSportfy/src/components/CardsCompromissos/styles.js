import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    backgroundColor: '#2C2C2C',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#FFD700',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  titulo: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  descricao: {
    color: '#CCC',
    fontSize: 16,
    marginBottom: 8,
  },
  dataHora: {
    color: '#999',
    fontSize: 14,
    marginBottom: 12,
  },
  botoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  botaoEditar: {
    backgroundColor: '#ffc72c',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 30,
  },
  botaoVer: {
    backgroundColor: '#4CAF50CC',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 30,
  },
  botaoExcluir: {
    backgroundColor: '#FF3B3BCC',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 30,
  },
  botaoSair: {
    backgroundColor: '#FF3B3BCC',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 30,
  },
  textoBotao: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
  },
});

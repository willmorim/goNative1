import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const white = '#00b894';
const title = '#333';

const Post = ({ dados }) => (
  <View style={styles.container}>
    <Text style={styles.titulo}>{dados.titulo}</Text>
    <Text style={styles.autor}>{dados.autor}</Text>
    <Text style={styles.descricao}>{dados.descricao}</Text>
  </View>
);

Post.propTypes = {
  dados: PropTypes.shape({
    titulo: PropTypes.string,
    autor: PropTypes.string,
    descricao: PropTypes.string,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    padding: 20,
    borderRadius: 5,
    marginTop: 20,
    marginHorizontal: 20,
  },

  titulo: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  autor: {
    color: title,
    fontWeight: 'bold',
  },

  descricao: {
    color: title,
    paddingTop: 10,
  },
});

export default Post;

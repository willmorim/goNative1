import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View, ScrollView,
} from 'react-native';

import DevToolsConfig from './config/DevToolsConfig';
import ReactotronConfig from './config/ReactotronConfig';
import Post from './components/Post';

const white = '#00b894';
const primary = '#fdcb6e';
const title = '#2d3436';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        titulo: 'Aprendendo React Native',
        autor: 'William Amorim',
        descricao:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu pretium metus. Integer aliquet scelerisque quam a elementum. Ut tincidunt ligula sed mauris volutpat pharetra. Ut volutpat convallis rhoncus. Sed ut erat luctus, pharetra sapien sed, dictum tortor. Ut non auctor tortor. Integer rutrum lacinia erat id interdum. Duis eget malesuada mi.',
      },
      {
        id: 2,
        titulo: 'Aprendendo React Native',
        autor: 'William Amorim',
        descricao:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu pretium metus. Integer aliquet scelerisque quam a elementum. Ut tincidunt ligula sed mauris volutpat pharetra. Ut volutpat convallis rhoncus. Sed ut erat luctus, pharetra sapien sed, dictum tortor. Ut non auctor tortor. Integer rutrum lacinia erat id interdum. Duis eget malesuada mi.',
      },
      {
        id: 3,
        titulo: 'Aprendendo React Native',
        autor: 'William Amorim',
        descricao:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu pretium metus. Integer aliquet scelerisque quam a elementum. Ut tincidunt ligula sed mauris volutpat pharetra. Ut volutpat convallis rhoncus. Sed ut erat luctus, pharetra sapien sed, dictum tortor. Ut non auctor tortor. Integer rutrum lacinia erat id interdum. Duis eget malesuada mi.',
      },
      {
        id: 4,
        titulo: 'Aprendendo React Native',
        autor: 'William Amorim',
        descricao:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu pretium metus. Integer aliquet scelerisque quam a elementum. Ut tincidunt ligula sed mauris volutpat pharetra. Ut volutpat convallis rhoncus. Sed ut erat luctus, pharetra sapien sed, dictum tortor. Ut non auctor tortor. Integer rutrum lacinia erat id interdum. Duis eget malesuada mi.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Desafio 1 React Native</Text>
        </View>
        <ScrollView>
          {posts.map(post => (
            <Post key={post.id} dados={post} />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary,
  },

  header: {
    backgroundColor: white,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        height: 76,
        paddingTop: 20,
      },
      android: {
        height: 56,
        paddingTop: 0,
      },
    }),
  },

  headerTitle: {
    color: title,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

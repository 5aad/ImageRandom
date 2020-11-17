import React from 'react';
import {SafeAreaView, StyleSheet, Image, View} from 'react-native';
import {Button} from 'react-native-paper';
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactjs.org/logo-og.png',
          }}
        />
        <Button
          style={styles.btn}
          mode="contained"
          onPress={() => console.log('Pressed')}>
          update image
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    height: 200,
    width: 300,
  },
  btn: {
    marginVertical: 10,
  },
});

export default Home;

import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, Image, View} from 'react-native';
import {Button} from 'react-native-paper';
const Home = () => {
  const [image, setImage] = useState('');
  const [random, setRandom] = useState(' ');
  useEffect(() => {
    fetch('http://89.234.183.248:3000/images')
      .then((res) => res.json())
      .then((data) => {
        let num = Math.floor(Math.random() * data.images.length);
        setRandom(data.images[num].fileName);
        setImage(data);
      });
  }, []);
  function getRandomImage() {
    let num = Math.floor(Math.random() * image.images.length);
    setRandom(image.images[num].fileName);
  }
  console.log('ss', random);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: random,
          }}
        />
        <Button
          style={styles.btn}
          mode="contained"
          onPress={() => getRandomImage()}>
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

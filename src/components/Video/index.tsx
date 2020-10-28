import React from 'react';
import Player from '../Player';
import styles from './styles';
import {View} from 'react-native';

const Video = () => {
  return (
    <View style={styles.container}>
      <Player
        // resizeMode="cover"
        source={require('../../assets/video.mp4')}
        style={styles.video}
      />
    </View>
  );
};

export default Video;

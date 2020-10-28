import React from 'react';
import Video from 'react-native-video';
import Controls from './Controls';
import styles from './styles';
import {useState} from 'react';
import {View, Platform} from 'react-native';

interface Props {
  resizeMode?: 'stretch' | 'contain' | 'cover' | 'none';
  source: {uri?: string; headers?: {[key: string]: string}} | number;
  style?: Object;
}

const Player = ({resizeMode, source, style}: Props) => {
  const [isMuted, setMuted] = useState(true);
  const [isPaused, setPaused] = useState(false);
  const [isFullScreen, setFullScreen] = useState(false);
  const video = {
    height: '100%',
    width: '100%',
  };

  const onPressFullScreen = () => {
    setFullScreen(!isFullScreen);
  };

  const onPressVolume = () => {
    setMuted(!isMuted);
  };

  const onPressPause = () => {
    setPaused(!isPaused);
  };

  return (
    <View
      style={
        isFullScreen && Platform.OS === 'android' ? styles.fullScreen : style
      }>
      <Video
        fullscreen={isFullScreen}
        muted={isMuted}
        paused={isPaused}
        repeat={true}
        resizeMode={isFullScreen ? 'cover' : resizeMode ? resizeMode : 'cover'}
        source={source}
        style={video}
      />
      <Controls
        isFullScreen={isFullScreen}
        isMuted={isMuted}
        onPressFullScreen={onPressFullScreen}
        onPressPause={onPressPause}
        onPressVolume={onPressVolume}
        paused={isPaused}
      />
    </View>
  );
};

export default Player;

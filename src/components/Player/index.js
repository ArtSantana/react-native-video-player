import React from 'react';
import Video from 'react-native-video';
import Controls from './Controls';
import {useState} from 'react';
import {View} from 'react-native';

const Player = ({fullscreen, resizeMode, source, style}) => {
  const [isMuted, setMuted] = useState(true);
  const [isPaused, setPaused] = useState(false);
  const video = {
    height: '100%',
    width: '100%',
  };

  const onPressFullScreen = () => {};

  const onPressVolume = () => {
    setMuted(!isMuted);
  };

  return (
    <View style={style}>
      <Video
        fullscreen={fullscreen}
        muted={isMuted}
        paused={isPaused}
        repeat={true}
        resizeMode={resizeMode ? resizeMode : 'cover'}
        source={source}
        style={video}
      />
      <Controls
        isMuted={isMuted}
        onPressFullScreen={onPressFullScreen}
        onPressVolume={onPressVolume}
        paused={isPaused}
        setPaused={setPaused}
      />
    </View>
  );
};

export default Player;

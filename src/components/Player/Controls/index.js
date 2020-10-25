import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';

const Controls = ({
  color,
  isMuted,
  onPressFullScreen,
  onPressVolume,
  paused,
}) => {
  const colorIcons = color ? color : '#fff';

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <MaterialIcons
          name={paused ? 'play' : 'pause'}
          color={colorIcons}
          size={64}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressFullScreen} style={styles.fullscreen}>
        <MaterialIcons name="fullscreen" color={colorIcons} size={24} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressVolume} style={styles.volume}>
        <MaterialIcons
          name={isMuted ? 'volume-off' : 'volume-up'}
          color={colorIcons}
          size={24}
        />
      </TouchableOpacity>
    </View>
  );
};
export default Controls;

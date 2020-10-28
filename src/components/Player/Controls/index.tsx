import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fade from './Fade';
import styles from './styles';
import {useState} from 'react';
import {TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';

interface Props {
  color?: string;
  isFullScreen: boolean;
  isMuted: boolean;
  onPressFullScreen(): void;
  onPressPause(): void;
  onPressVolume(): void;
  paused: boolean;
}

const Controls = ({
  color,
  isFullScreen,
  isMuted,
  onPressFullScreen,
  onPressPause,
  onPressVolume,
  paused,
}: Props) => {
  const colorIcons = color ? color : '#fff';
  const [isVisible, setVisible] = useState<boolean>(true);

  const onPressControls = () => {
    setVisible(!isVisible);
  };

  return (
    <Fade duration={500} visible={isVisible} style={styles.container}>
      <TouchableWithoutFeedback
        onPress={onPressControls}
        style={styles.container}>
        <View style={styles.container}>
          <TouchableOpacity onPress={onPressPause}>
            <MaterialIcons
              name={paused ? 'play-arrow' : 'pause'}
              color={colorIcons}
              size={64}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPressFullScreen}
            style={styles.fullscreen}>
            <MaterialIcons
              name={isFullScreen ? 'fullscreen-exit' : 'fullscreen'}
              color={colorIcons}
              size={24}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressVolume} style={styles.volume}>
            <MaterialIcons
              name={isMuted ? 'volume-off' : 'volume-up'}
              color={colorIcons}
              size={24}
            />
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </Fade>
  );
};
export default Controls;

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    zIndex: 2,
  },

  fullscreen: {
    bottom: '2%',
    position: 'absolute',
    right: '4%',
  },
  volume: {
    bottom: '2%',
    position: 'absolute',
    left: '4%',
  },
});

export default styles;

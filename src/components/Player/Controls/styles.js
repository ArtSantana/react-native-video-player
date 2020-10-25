import {StyleSheet} from 'react-native';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';

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
    bottom: 0,
    position: 'absolute',
    right: 0,
  },
  volume: {
    bottom: 0,
    position: 'absolute',
    left: 0,
  },
});

export default styles;

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Animated} from 'react-native';

export const DEFAULT_DURATION = 300;

export default class FadeInOut extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    visible: PropTypes.bool.isRequired,
    duration: PropTypes.number,
    style: PropTypes.object,
  };

  state = {
    fadeAnim: new Animated.Value(this.props.visible ? 1 : 0),
  };

  componentDidUpdate(prevProps) {
    const {duration} = this.props;

    if (prevProps.visible !== this.props.visible) {
      Animated.timing(this.state.fadeAnim, {
        toValue: prevProps.visible ? 0 : 1,
        duration: duration ? duration : DEFAULT_DURATION,
        useNativeDriver: true,
      }).start();
    }
  }

  render() {
    const {fadeAnim} = this.state;
    const transform = [{perspective: 1000}];

    return (
      <Animated.View
        style={{...this.props.style, opacity: fadeAnim, transform}}>
        {this.props.children}
      </Animated.View>
    );
  }
}

/****************************************************************************\
 * Copyright (C) 2016 Scandy
 *
 * THIS CODE AND INFORMATION ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY
 * KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
 * PARTICULAR PURPOSE.
 *
 \****************************************************************************/

// For distribution.

// 'use strict';

import React from 'react';
import {
  PanResponder,
  StyleSheet,
  View,
  requireNativeComponent
} from 'react-native';
const RCTScandyCoreVisualizer = requireNativeComponent('RCTScandyCoreVisualizer');

export default class ScandyCoreVisualizer extends React.Component {
  componentWillMount() {
      // lets vtk demand gestures
      this._panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (evt, gestureState) => true,
        onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
        onMoveShouldSetPanResponder: (evt, gestureState) => true,
        onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      })
  }

  style() {
    return ({
      backgroundColor: this.props.style.backgroundColor,
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      padding: 0,
      margin: 0,
    })
  }

  containerStyle() {
    style = this.props.style
    return style
  }

  render() {
    return (
      <View style={this.containerStyle()}>
        <RCTScandyCoreVisualizer
          {...this._panResponder.panHandlers}
          style={this.style()}
        />
        { this.props.children }
      </View>
    );
  }
}

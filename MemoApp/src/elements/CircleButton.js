import React from 'react';
import { StyleSheet, View, TouchableHighlight} from 'react-native';
import * as Font from 'expo-font';
import { createIconSet } from '@expo/vector-icons';
import fontAwesome from '../../assets/fonts/fa-solid-900.ttf';

const CustomIcon = createIconSet({
  pencil: '\uf303',
}, 'FontAwesome');

class CircleButton extends React.Component{
  state = {
    fontLoaded: false,
  }
  async componentWillMount() {
    await Font.loadAsync({
      FontAwesome: fontAwesome,
    });
    this.setState({ fontLoaded: true });
  }
  render(){
    const { name, style, color, onPress } = this.props;

    let bgColor = '#E31676';
    let textColor = '#fff';

    if (color === 'white'){
        bgColor = '#fff';
        textColor = '#E31676';
    }

    return(
      <TouchableHighlight style={[styles.container, style]} onPress={onPress} underlayColor="transparent">
            <View style={[styles.circleButton, style, { backgroundColor: bgColor}]}>
            {
              this.state.fontLoaded ? (
                <CustomIcon name={name} style={[styles.circleButtonTitle, {color: textColor } ]} />
              ) : null
            }
            </View>
            </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom:24,
    right:24,
    width:48,
    height:48,
  },
  circleButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width:0, height:2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  circleButtonTitle: {
    fontFamily: 'FontAwesome',
    fontSize: 32,
    lineHeight: 32,
    color: '#fff',
  },
});

export default CircleButton;

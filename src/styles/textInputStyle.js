import {StyleSheet} from 'react-native';
import { COLORS } from '../constans/COLORS'
import { FONT_SIZE } from '../constans/FONT_SIZE';

const defaultTitle = {
  fontSize: FONT_SIZE.XXL,
  color: COLORS.PRIMARY,
};

export const textInputStyle = StyleSheet.create({
  title: defaultTitle,
  title2: {
    ...defaultTitle,
    color: COLORS.SECONDARY,
  },
  primaryName: {
    fontSize: 32,
    color: COLORS.SECONDARY,
  }
});

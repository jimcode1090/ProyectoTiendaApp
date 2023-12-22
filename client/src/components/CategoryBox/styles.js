import {StyleSheet} from 'react-native';
import {colors} from '../../utils/color';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  title: {
    color: colors.grey,
  },
  image: {
    width: 32,
    height: 32,
  },
  imageContainer: {
    backgroundColor: colors.lightGrey,
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
});

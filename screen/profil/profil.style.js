// profil.style.js

import { StyleSheet } from 'react-native';
import { black, greenSecondary, orangePrimary, orangeThird } from '../../constants/color'; // Import your color constants

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: black, // Background color
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontFamily: 'DMBold', // Use your font family here
    fontSize: 24,
    color: greenSecondary, // Text color
    marginBottom: 5,
  },
  email: {
    fontFamily: 'DMRegular', // Use your font family here
    fontSize: 16,
    color: 'gray', // Text color
  },
  logout: {
    backgroundColor: orangeThird,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
    color: orangePrimary
  }
});

export default styles;

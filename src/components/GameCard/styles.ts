import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
   marginRight:24,
   marginTop:15,
  },
  cover:{
    width:240,
    height:320,
    justifyContent:'flex-end',
    borderRadius:8,
    overflow:'hidden',
  },
  footer:{
    width:'100%',
    height:182,
    padding:16,
    justifyContent:'center',
  },
  name:{
    color:THEME.COLORS.TEXT,
    fontSize:THEME.FONT_SIZE.MD,
    fontFamily:THEME.FONT_FAMILY.BLACK
  },
  ads:{
    color:THEME.COLORS.CAPTION_400,
    fontSize:THEME.FONT_SIZE.SM,
    fontFamily:THEME.FONT_FAMILY.REGULAR
  }
});
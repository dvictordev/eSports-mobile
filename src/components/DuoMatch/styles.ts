import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:THEME.COLORS.OVERLAY
    },
    modal:{
        width:311,
        backgroundColor:THEME.COLORS.SHAPE,
        borderRadius:8,
        alignItems:'center'
    },
    closeModal:{
        margin:16,
        alignSelf:"flex-end"
    },
    checkIcon:{
        marginVertical:16,
    },
    discordLabel:{
        marginVertical:20,
        color:THEME.COLORS.TEXT,
        fontSize:THEME.FONT_SIZE.MD,
        fontFamily:THEME.FONT_FAMILY.SEMI_BOLD
    },
    discordBox:{
        backgroundColor:THEME.COLORS.BACKGROUND_800,
        paddingVertical:11,
        width:211,
        textAlign:'center',
        alignItems:'center',
        borderRadius:8,
        marginBottom:24,
    },
    discord:{
        color:THEME.COLORS.TEXT,
        fontSize:THEME.FONT_SIZE.MD,
        fontFamily:THEME.FONT_FAMILY.REGULAR,
    }
});
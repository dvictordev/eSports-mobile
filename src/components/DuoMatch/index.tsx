import { View, Modal, ModalProps, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';


import {MaterialIcons, } from '@expo/vector-icons'
import { THEME } from '../../theme';
import { Headling } from '../Headling';

interface Props extends ModalProps{
    discord:String,
    onClose:()=> void
}


export function DuoMatch({discord, onClose, ...rest}: Props) {
  return (
    <Modal {...rest} >
        <View style={styles.container}>
            <View style={styles.modal}>
                <TouchableOpacity onPress={onClose}  style={styles.closeModal}>
                    <MaterialIcons 
                        name='close'
                        size={20}
                        color={THEME.COLORS.CAPTION_500}
                    />
                </TouchableOpacity>
                <MaterialIcons 
                        name='check-circle-outline'
                        size={48}
                        color={THEME.COLORS.SUCCESS}
                        style={styles.checkIcon}
                    />


                <Headling 
                style={{alignItems:'center'}}
                title={"Let´s play!"} 
                subtitle={"Agora é só começar a jogar!"}  
                />

            <Text style={styles.discordLabel}>Adicione no Discord</Text>   
                <View style={styles.discordBox}>
                    <Text style={styles.discord}>{discord}</Text>
                </View> 
            </View>
        </View>
    </Modal>
  );
}
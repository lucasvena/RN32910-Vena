import React from "react";
import { Modal, View, Text, Button } from "react-native";
import { styles } from './styles';

const TaskDetail = ({modalVisible, selectedTask ,onHandleCancel, onHandleDeleteItem}) => {
    return (
        <Modal visible={modalVisible} animationType='slide' transparent>
            <View style={styles.modalContainer}>      
                <Text style={styles.modalTitle}>⚠</Text>
                <View style={styles.modalDetailContainer}>
                    <Text style={styles.modalDetailText}>Estas seguro que quieres eliminar este item?</Text>
                    <Text style={styles.selectedTask}>{selectedTask?.value}</Text>
                </View>
                <View style={styles.modalButtonContainer}>
                    <Button
                    title='Cancelar'
                    color='#bcb8b1'
                    onPress={onHandleCancel}
                    />
                    <Button
                    title='Eliminar'
                    color='#1D3557'
                    onPress={onHandleDeleteItem}
                    />
                </View>
            </View>
        </Modal>
    )
}

export default TaskDetail;
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    modalContainer: {
        backgroundColor: '#EDF2F4',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 200,
        paddingVertical: 20,
    },
    modalTitle: {
        fontSize: 80,
        color: '#f9c80e',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalDetailContainer: {
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalDetailText: {
        fontSize: 14,
        color: '#212121',
    },
    selectedTask: {
        fontSize: 14,
        color: '#212121',
        fontWeight: 'bold',
        paddingVertical: 20,
    },
    modalButtonContainer: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
})
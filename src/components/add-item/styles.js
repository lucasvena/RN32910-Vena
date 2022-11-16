import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    titlesContainer: {
        backgroundColor: '#212121',
        paddingBottom: 20,    
    },
    title:{
        paddingTop: 80,
        textAlign: 'center',
        fontSize: 20,
        color: '#E0E1DD',
        fontWeight: 'bold',
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 40,
    },
    input: {
        width: '80%',
        borderBottomWidth: 1,
        borderBottomColor: '#415A77',
    },
})
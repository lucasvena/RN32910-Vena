import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { styles } from "./styles";

const AddItem = ({task, onHandleTask, onHandleChange}) => {
    return (
        <>
            <View style={styles.titlesContainer}>
                <Text style={styles.title}> Bienvenido/a a Mis Quehaceres! </Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput 
                style={styles.input} 
                value={task}
                placeholder="Ingrese una tarea"
                onChangeText={onHandleChange}
                />
                <Button disabled={!task} title='Agregar' color='#415A77' onPress={onHandleTask} />
            </View>
        </>
    )
}

export default AddItem;
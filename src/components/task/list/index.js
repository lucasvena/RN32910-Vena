import React from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from './styles';

const Listado = ({ taskList, renderItem}) => {
    return (
        <>
            <View style={styles.listContainer}>
                <Text style={styles.listTitle}>MI LISTA:</Text>
            </View>
            <FlatList
                style={styles.listContainer}
                data={taskList}
                renderItem={renderItem}  
                keyExtractor={item => item.id}
            />
        </>
    )
}

export default Listado;
import { useState } from 'react';
import { View } from 'react-native';
import { styles } from './style';
import { AddItem, TaskItem, TaskDetail, Listado } from './components/index';

export default function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const onHandleTask = () => {
    setTaskList((prevTaskList) => [...prevTaskList, {id: Math.random().toString(), value: task}]);
    setTask('');
  }

  const onHandleSelected = (item) => {
    setSelectedTask(item);
    setModalVisible(!modalVisible);
  }

  const renderItem = ({item}) => (
    <TaskItem item={item} onHandleSelected={onHandleSelected}/>
  )

  const onHandleCancel = () => {
    setModalVisible(!modalVisible);
  }

  const onHandleDeleteItem = () => {
    setTaskList((prevTaskList) => prevTaskList.filter((item) => item.id !== selectedTask.id))
    setModalVisible(!modalVisible)
  }

  const onHandleChange = (text) => setTask(text);

  return (
    <View style={styles.container}>
      <AddItem 
        task={task} 
        onHandleTask={onHandleTask} 
        onHandleChange={onHandleChange}
      />
      
      <Listado 
        taskList={taskList} 
        renderItem={renderItem} 
      />

      <TaskDetail 
        modalVisible={modalVisible} 
        selectedTask={selectedTask} 
        onHandleCancel={onHandleCancel} 
        onHandleDeleteItem={onHandleDeleteItem}
      />
    </View>
  );
}

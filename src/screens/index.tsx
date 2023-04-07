import React, { useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import Tasks from "../components/tasks/tasks";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Home = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [concluded, setConcluded] = useState<number>(0);

  const handleAddTask = () => {
    setTasks((prevState) => [...prevState, newTask]);

    setNewTask("");
  };

  const handleAddConcluded = () => {
    setConcluded((prevState) => prevState + 1);
  };

  const handleRemoveConcluded = () => {
    if (concluded >= 0) setConcluded((prevState)  => prevState - 1);
  };

  const handleRemoveTask = (task: string) => {
    Alert.alert("Remover", "Remover task " + task, [
      {
        text: "Sim",
        onPress: () =>
          setTasks((prevState) => prevState.filter((p) => p !== task)),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  };
  return (
    <>
      <View style={styles.header}>
        <Image
          source={require("../../assets/Logo.png")}
          style={{ width: 110, height: 32 }}
        />
      </View>
      <View style={styles.container}>
        <View style={styles.buttonWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#6b6b6b"
            onChangeText={(e) => setNewTask(e)}
            value={newTask}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleAddTask()}
          >
            <Ionicons name="add-circle-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.taskContainer}>
          <View style={styles.taskHeader}>
            <View style={styles.taskInfos}>
              <Text style={{ ...styles.tasksInfoText, color: "#1E6F9F" }}>
                Criadas
              </Text>
              <View style={styles.countTextWrapper}>
                <Text style={styles.taskCountText}>{tasks.length}</Text>
              </View>
            </View>

            <View style={styles.taskInfos}>
              <Text style={{ ...styles.tasksInfoText, color: "#8284FA" }}>
                Concluídas
              </Text>
              <View style={styles.countTextWrapper}>
                <Text style={styles.taskCountText}>{tasks.length === 0 ? 0 : concluded}</Text>
              </View>
            </View>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Tasks
              key={item}
              task={item}
              onRemove={() => handleRemoveTask(item)}
              onConcluded={() => handleAddConcluded()}
              onRemoveConcluded={() => handleRemoveConcluded()}
            />
          )}
          ListEmptyComponent={() => (
            <View
              style={{
                borderTopColor: "#90909090",
                borderTopWidth: 1,
                paddingTop: 40,
              }}
            >
              <MaterialCommunityIcons
                style={{
                  textAlign: "center",
                }}
                name="clipboard-text-outline"
                size={90}
                color="#90909090"
              />
              <Text
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "#90909090",
                  fontSize: 16,
                }}
              >
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  color: "#90909090",
                  fontSize: 16,
                }}
              >
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </>
  );
};

export default Home;

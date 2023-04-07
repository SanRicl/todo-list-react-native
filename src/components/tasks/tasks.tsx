import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Checkbox from "expo-checkbox";
import { Feather } from "@expo/vector-icons";

type props = {
  task: string;
  onRemove: () => void;
  onConcluded: () => void;
  onRemoveConcluded: () => void;
};

const Tasks = ({ task, onRemove, onConcluded, onRemoveConcluded }: props) => {
  const [isSelected, setSelection] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Checkbox
        onTouchEndCapture={isSelected ? onRemoveConcluded : onConcluded}
        value={isSelected}
        onValueChange={setSelection}
        style={styles.checkbox}
      />

      <Text style={isSelected ? styles.finishedText : styles.unFinishedText}>
        {task}
      </Text>
      <TouchableOpacity onPress={onRemove}>
        <Feather name="trash-2" size={18} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

export default Tasks;

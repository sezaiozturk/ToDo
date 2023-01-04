import { View,Text } from "react-native";
import styles from './TaskCard.style'

const TaskCard=(props)=>{
    return(
        <View style={styles.container}>
            <Text style={styles.task_text}>{props.text}</Text>
        </View>
    )
}

export default TaskCard;
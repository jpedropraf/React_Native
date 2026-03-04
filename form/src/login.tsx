import { View, Text, Image, Button, ScrollView} from "react-native";
import { Styles } from './styles';


const login = () => {}

export default function TelaLogin() { 
return(
    <View>
    <Text>Faça o Login ou crie sua conta</Text>
    <Button title="Entrar" onPress={(login)}/>
    </View>
);
}


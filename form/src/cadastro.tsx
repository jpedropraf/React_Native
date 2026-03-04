import { View, Text, Image, Button, ScrollView} from "react-native";
import { Styles } from './styles';


const cadastro = () => {}


export default function TelaCadastro() { 
return(
    <View>
    <Text>Faça o Login ou crie sua conta</Text>
    <Button title="Fazer Cadastro" onPress={(cadastro)}/>
    </View>
);
}


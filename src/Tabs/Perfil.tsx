import { Avatar, Divider, ScrollView, Text, VStack } from "native-base";
import { Titulo } from "../componentes/Titulo";

export default function Perfil(){
    return(
        <ScrollView flex={1}>
            <VStack flex={1} justifyContent="center" alignItems="center" p={5}>
                <Titulo color="blue.500">Meu Perfil</Titulo>

                <Avatar size="xl" source={{uri: 'https://github.com/delberss.png'}} mt={5}/>

                <Titulo color="blue.500">Informações pessoais</Titulo>
                <Titulo fontSize="lg" mb={1}>Delber Soares</Titulo>
                <Text>16/04/1999</Text>
                <Text>Juiz de Fora</Text>

                <Divider mt={5} />

                <Titulo color="blue.500" mb={1}>Histórico médico</Titulo>
                <Text>Bronquite</Text>
                <Text>Sinusite</Text>
            </VStack>
        </ScrollView>
    )    
}
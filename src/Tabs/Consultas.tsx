import { Card, Divider, ScrollView, VStack } from "native-base";
import { CardConsulta } from "../componentes/CardConsulta";
import { Titulo } from "../componentes/Titulo";
import { Botao } from "../componentes/Botao";

const consultasPassadas = [
    {
        nome: "Dr. Delber",
        especialidade: "cardiologista",
        foto: "https://github.com/delberss.png",
        data: "25/05/2023",
    },
    {
        nome: "Dr. Delber Soares",
        especialidade: "cardiologista",
        foto: "https://github.com/delberss.png",
        data: "26/05/2023",
    },
]

export default function Consultas(){
    return(
        <ScrollView p={5}>
            <Titulo color="blue.500" >Minhas consultas</Titulo>
            <Botao mt={5} mb={5}>Agendar nova consulta</Botao>

            <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2} >Próximas consultas</Titulo>
            <CardConsulta
                nome="Dr. Delber"
                especialidade="cardiologista"
                foto="https://github.com/delberss.png"
                data="25/05/2023"
                foiAgendado
            />

            <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb={2} >Consultas passadas</Titulo>
            {
                consultasPassadas.map((consultaPassada) => (
                    <CardConsulta
                    key={consultaPassada.nome && consultaPassada.data}
                    nome={consultaPassada.nome}
                    especialidade={consultaPassada.especialidade}
                    foto={consultaPassada.foto}
                    data={consultaPassada.data}
                    foiAtendido
            />
                ))
            }
            
            

            <Divider mt={5} />
        </ScrollView>
    )    
}
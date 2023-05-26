import { Card, Divider, ScrollView, VStack } from "native-base";
import { CardConsulta } from "../componentes/CardConsulta";
import { Titulo } from "../componentes/Titulo";
import { Botao } from "../componentes/Botao";

const consultasPassadas = [
    {
        nome: "Dr. Doutor",
        especialidade: "cardiologista",
        foto: "https://ucmscdn.healthgrades.com/12/14/e71c531f414485bf0b3565483a4f/image-doctor.jpg",
        data: "25/05/2023",
    },
    {
        nome: "Dr. Doutora",
        especialidade: "dermatologista",
        foto: "https://as2.ftcdn.net/v2/jpg/03/17/02/01/1000_F_317020176_JRGKfT71THSmQzwLuJs4LC6CioWENBCW.jpg",
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
                nome="Dr. Doutor"
                especialidade="neurologista"
                foto="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/para-ser-medico-necessario-conhecimento-teorico-habilidades-humanas-5581b3298ca93.jpg"
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